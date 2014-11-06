package  
{
	/****************************************************************************
	*
	* NAME: PitchShifter.as
	* VERSION: 1.0
	* HOME URL: http://iq12.com/
	* KNOWN BUGS: none
	*
	* SYNOPSIS: Routine for doing pitch shifting while maintaining
	* duration using the Short Time Fourier Transform.
	*
	* DESCRIPTION: The routine takes a pitchShift factor value which is between 0.5
	* (one octave down) and 2. (one octave up). A value of exactly 1 does not change
	* the pitch. numSampsToProcess tells the routine how many samples in indata[0...
	* numSampsToProcess-1] should be pitch shifted and moved to outdata[0 ...
	* numSampsToProcess-1]. The two buffers can be identical (ie. it can process the
	* data in-place). fftFrameSize defines the FFT frame size used for the
	* processing. Typical values are 1024, 2048 and 4096. It may be any value <=
	* MAX_FRAME_LENGTH but it MUST be a power of 2. osamp is the STFT
	* oversampling factor which also determines the overlap between adjacent STFT
	* frames. It should at least be 4 for moderate scaling ratios. A value of 32 is
	* recommended for best quality. sampleRate takes the sample rate for the signal 
	* in unit Hz, ie. 44100 for 44.1 kHz audio. The data passed to the routine in 
	* indata[] should be in the range [-1.0, 1.0), which is also the output range 
	* for the data, make sure you scale the data accordingly (for 16bit signed integers
	* you would have to divide (and multiply) by 32768). 
	*
	* COPYRIGHT 1999-2006 Stephan M. Bernsee <smb [AT] dspdimension [DOT] com>
	*
	* 						The Wide Open License (WOL)
	*
	* Permission to use, copy, modify, distribute and sell this software and its
	* documentation for any purpose is hereby granted without fee, provided that
	* the above copyright notice and this license appear in all source copies. 
	* THIS SOFTWARE IS PROVIDED "AS IS" WITHOUT EXPRESS OR IMPLIED WARRANTY OF
	* ANY KIND. See http://www.dspguru.com/wol.htm for more information.
	*
	*****************************************************************************/
	 
	/****************************************************************************
	*
	* This code was converted to AS3/FP10 by Arnaud Gatouillat <fu [AT] iq12 [DOT] com>
	* from C# code by Michael Knight ( madmik3 at gmail dot com. )
	* http://sites.google.com/site/mikescoderama/
	* 
	*****************************************************************************/
	
	/****************************************************************************
	*
	* The functions `realft' and `four1' are based on those in Press, W.H., et al.,
	* Numerical Recipes in C: the Art of Scientific Computing (Cambridge Univ. Press,
	* 1989;  2nd ed., 1992).
	* 
	*****************************************************************************/

	public class PitchShifter
	{
		private var gInFIFO		:Vector.<Number>;
		private var gOutFIFO	:Vector.<Number>;
		private var gFFTworksp	:Vector.<Number>;
		private var gLastPhase	:Vector.<Number>;
		private var gSumPhase	:Vector.<Number>;
		private var gOutputAccum:Vector.<Number>;
		private var gAnaFreq	:Vector.<Number>;
		private var gAnaMagn	:Vector.<Number>;
		private var gSynFreq	:Vector.<Number>;
		private var gSynMagn	:Vector.<Number>;

		private var freqPerBin:Number, expct:Number;
		private var gRover:int, inFifoLatency:int, stepSize:int, fftFrameSize2:int;
		
		private var fftFrameSize:int, osamp:int, sampleRate:Number;
		
		/* pre-computed values for speed */
		private var windowValues		:Vector.<Number>;
		private var windowValuesFactored:Vector.<Number>;
		private var invPI:Number, invFftFrameSizePI2:Number, osampPI2:Number, invOsampPI2FreqBin:Number;
		
		private var PI:Number		= Math.PI
		private var TWOPI:Number	= 2 * Math.PI

		public function PitchShifter(fftFrameSize:int, osamp:int, sampleRate:Number)
		{
			this.fftFrameSize	= fftFrameSize;
			this.osamp			= osamp;
			this.sampleRate		= sampleRate;
			
			gInFIFO			= new Vector.<Number>(fftFrameSize);
			gOutFIFO		= new Vector.<Number>(fftFrameSize, true);
			gFFTworksp		= new Vector.<Number>(2 * fftFrameSize + 2, true);
			gLastPhase		= new Vector.<Number>(fftFrameSize / 2 + 1, true);
			gSumPhase		= new Vector.<Number>(fftFrameSize / 2 + 1, true);
			gOutputAccum	= new Vector.<Number>(2 * fftFrameSize, true);
			gAnaFreq		= new Vector.<Number>(fftFrameSize, true);
			gAnaMagn		= new Vector.<Number>(fftFrameSize, true);
			gSynFreq		= new Vector.<Number>(fftFrameSize, true);
			gSynMagn		= new Vector.<Number>(fftFrameSize, true);
			
			/* set up some handy variables */
			fftFrameSize2= fftFrameSize / 2;
			stepSize = fftFrameSize / osamp;
			freqPerBin = sampleRate / Number(fftFrameSize);
			expct = 2.0 * PI * Number(stepSize) / Number(fftFrameSize);
			inFifoLatency = fftFrameSize - stepSize;
			
			invPI = 1 / PI;
			invFftFrameSizePI2 = PI * 2 / fftFrameSize;
			osampPI2 = osamp / ( 2 * PI );
			invOsampPI2FreqBin = 1 / ( freqPerBin * osampPI2);
			
			windowValues			= new Vector.<Number>(fftFrameSize);
			windowValuesFactored	= new Vector.<Number>(fftFrameSize);

			var invFftFrameSize2:Number = 2.0 / (fftFrameSize2 * osamp);
			for (var k:int = 0, t:Number = 0.0; k < fftFrameSize; ++k, t += invFftFrameSizePI2)
			{
				var window: Number = -.5 * Math.cos(t) + .5;
				windowValues[k] = window;
				windowValuesFactored[k] = window * invFftFrameSize2;
			}
		}

		public function pitchShift(pitchShift:Number, numSampsToProcess:int, indata:Vector.<Number>):void
		{
			var magn:Number, phase:Number, tmp:Number, window:Number, real:Number, imag:Number, t:Number;
			var i:int, k:int, qpd:int, index:int, n:int;

			var outdata:Vector.<Number> = indata;
			if (gRover == 0) gRover = inFifoLatency;
			
			/* main processing loop */
			for (i = 0; i < numSampsToProcess; ++i)
			{
				/* As long as we have not yet collected enough data just read in */
				gInFIFO[gRover] = indata[i];
				outdata[i] = gOutFIFO[gRover - inFifoLatency];
				++gRover;
				
				/* now we have enough data for processing */
				if (gRover >= fftFrameSize)
				{
					gRover = inFifoLatency;

					/* do windowing and re,im interleave */
					for (k = 0, n = 1; k < fftFrameSize; ++k, ++n)
					{
						gFFTworksp[n] = gInFIFO[k] * windowValues[k];
						gFFTworksp[++n] = 0.0;
					}
					/* ***************** ANALYSIS ******************* */
					/* do transform */
					realft(gFFTworksp, fftFrameSize, -1);
					/* this is the analysis step */
					for (k = 0; k <= fftFrameSize2; ++k)
					{
						/* de-interlace FFT buffer */
						real = gFFTworksp[n = 1 + (k << 1)];
						imag = gFFTworksp[n + 1];

						/* compute magnitude and phase */
						magn = 2.0 * Math.sqrt(real * real + imag * imag);
						phase = Math.atan2(imag, real);

						/* compute phase difference */
						tmp = phase - gLastPhase[k];
						gLastPhase[k] = phase;

						/* subtract expected phase difference */
						tmp -= k * expct;

						/* map delta phase into +/- Pi interval */
						qpd = int(tmp * invPI);
						if (qpd >= 0)	qpd += qpd & 1;
						else			qpd -= qpd & 1;
						tmp -= PI * Number(qpd);

						/* get deviation from bin frequency from the +/- Pi interval */
						tmp *= osampPI2;

						/* compute the k-th partials' true frequency */
						tmp = (k + tmp) * freqPerBin;

						/* store magnitude and true frequency in analysis arrays */
						gAnaMagn[k] = magn;
						gAnaFreq[k] = tmp;

					}
					/* ***************** PROCESSING ******************* */
					/* this does the actual pitch shifting */
					for (var zero:int = 0; zero < fftFrameSize; ++zero)
					{
						gSynMagn[zero] = 0.0;
						gSynFreq[zero] = 0.0;
					}

					for (k = 0, n = pitchShift > 1.0 ? int(fftFrameSize2 / pitchShift) : fftFrameSize2; k <= n; ++k)
					{
						index = int(k * pitchShift);
						gSynMagn[index] += gAnaMagn[k];
						gSynFreq[index] = gAnaFreq[k] * pitchShift;
					}
					/* ***************** SYNTHESIS ******************* */
					/* this is the synthesis step */
					for (k = 0; k <= fftFrameSize2; ++k)
					{
						/* get magnitude and true frequency from synthesis arrays */
						magn = gSynMagn[k];

						/* subtract bin mid frequency */
						/* get bin deviation from freq deviation */
						/* take osamp into account */
						/* add the overlap phase advance back in */
						/* accumulate delta phase to get bin phase */
						phase = (gSumPhase[k] += (gSynFreq[k] - Number(k) * freqPerBin) * invOsampPI2FreqBin + Number(k) * expct);

						/* get real and imag part and re-interleave */
						gFFTworksp[n = 1 + (k << 1)] = magn * Math.cos(phase);
						gFFTworksp[n + 1] = magn * Math.sin(phase);
					}
					
					/* zero negative frequencies */
					for (k = fftFrameSize + 3, n = 1 + (fftFrameSize << 1); k < n; ++k)
					{
						gFFTworksp[k] = 0.0;
					}
					/* do inverse transform */
					realft(gFFTworksp, fftFrameSize, 1);

					/* do windowing and add to output accumulator */
					for (k = 0, n = 1; k < fftFrameSize; ++k, ++n, ++n)
					{
						gOutputAccum[k] += windowValuesFactored[k] * gFFTworksp[n];
					}
					for (k = 0; k < stepSize; ++k)
					{
						gOutFIFO[k] = gOutputAccum[k];
					}

					//memmove(gOutputAccum, gOutputAccum + stepSize, fftFrameSize * sizeof(Number));
					/* shift accumulator */
					/* move input FIFO */
					for (k = 0, n = stepSize; k < inFifoLatency; ++k, ++n)
					{
						gOutputAccum[k] = gOutputAccum[n];
						gInFIFO[k] = gInFIFO[n];
					}
					for ( ;  k < fftFrameSize; ++k, ++n)
					{
						gOutputAccum[k] = gOutputAccum[n];
					}
				}
			}
		}

		private function realft( data:Vector.<Number>, n:int, isign:int )
		{
			var i:int, i1:int, i2:int, i3:int, i4:int, n2p3:int;
			var c1:Number = 0.5, c2:Number, h1r:Number, h1i:Number, h2r:Number, h2i:Number;
			var wr:Number, wi:Number, wpr:Number, wpi:Number, wtemp:Number, theta:Number;

			theta = PI/n;
			if (isign == 1)
			{
				c2 = -0.5;
				four1(data, n, 1);
			} 
			else
			{
				c2 = 0.5;
				theta = -theta;
			}
			wtemp = Math.sin(0.5 * theta);
			wpr = -2.0 * wtemp * wtemp;
			wpi = Math.sin(theta);
			wr = 1.0 + wpr;
			wi = wpi;
			n2p3 = 2 * n + 3;
			for (i = 2; i <= n / 2; ++i)
			{
				i4 = 1 + (i3 = n2p3 - (i2 = 1 + ( i1 = i + i - 1)));
				h1r =  c1 * (data[i1] + data[i3]);
				h1i =  c1 * (data[i2] - data[i4]);
				h2r = -c2 * (data[i2] + data[i4]);
				h2i =  c2 * (data[i1] - data[i3]);
				data[i1] =  h1r + wr * h2r - wi * h2i;
				data[i2] =  h1i + wr * h2i + wi * h2r;
				data[i3] =  h1r - wr * h2r + wi * h2i;
				data[i4] = -h1i + wr * h2i + wi * h2r;
				wr = (wtemp = wr) * wpr - wi * wpi + wr;
				wi = wi * wpr + wtemp * wpi + wi;
			}
			if (isign == 1)
			{
				data[1] = (h1r = data[1]) + data[2];
				data[2] = h1r - data[2];
			}
			else
			{
				data[1] = c1 * ((h1r = data[1]) + data[2]);
				data[2] = c1 * (h1r - data[2]);
				four1(data, n, -1);
				data=data;
			}
		}

		private function four1(data:Vector.<Number>, nn:int, isign:int)
		{
			var n:int, mmax:int, m:int, j:int, istep:int, i:int;
			var wtemp:Number, wr:Number, wpr:Number, wpi:Number, wi:Number, theta:Number;
			var tempr:Number, tempi:Number;
			var j1:int, i1:int;
			n = nn << 1;
			j = 1;
			for (i = 1; i < n; i += 2)
			{
				if (j > i)
				{
					j1 = j + 1;
					i1 = i + 1;
					tempr = data[j];	data[j] = data[i];		data[i] = tempr;
					tempr = data[j1];	data[j1] = data[i1];	data[i1] = tempr;
				}
				m = n >> 1;
				while (m >= 2 && j > m)
				{
					j -= m;
					m >>= 1;
				}
				j += m;
			}
			mmax = 2;
			while (n > mmax)
			{
				istep = 2 * mmax;
				theta = TWOPI / (isign * mmax);
				wtemp = Math.sin(0.5 * theta);
				wpr = -2.0 * wtemp * wtemp;
				wpi = Math.sin(theta);
				wr = 1.0;
				wi = 0.0;
				for (m = 1; m < mmax; m += 2)
				{
					for (i = m; i <= n; i += istep)
					{
						i1 = i +1;
						j1 = 1+ (j = i + mmax);
						tempr = wr*data[j]   - wi*data[j1];
						tempi = wr*data[j1]  + wi*data[j];
						data[j]   = data[i]   - tempr;
						data[j1]  = data[i1]  - tempi;
						data[i]  += tempr;
						data[i1] += tempi;
					}
					wr = (wtemp = wr) * wpr - wi * wpi + wr;
					wi = wi * wpr + wtemp * wpi + wi;
				}
				mmax = istep;
			}
		}
	
	}

}