package  
{
	import flash.utils.getTimer;
	
	/**
	 * ...
	 * @author fu / iq12
	 */
	public class PitchShifter
	{
		private var MAX_FRAME_LENGTH:int = 16000;
        private var gInFIFO:Vector.<Number> = new Vector.<Number>(MAX_FRAME_LENGTH);
        private var gOutFIFO:Vector.<Number> = new Vector.<Number>(MAX_FRAME_LENGTH);
        private var gFFTworksp:Vector.<Number> = new Vector.<Number>(2 * MAX_FRAME_LENGTH);
        private var gLastPhase:Vector.<Number> = new Vector.<Number>(MAX_FRAME_LENGTH / 2 + 1);
        private var gSumPhase:Vector.<Number> = new Vector.<Number>(MAX_FRAME_LENGTH / 2 + 1);
        private var gOutputAccum:Vector.<Number> = new Vector.<Number>(2 * MAX_FRAME_LENGTH);
        private var gAnaFreq:Vector.<Number> = new Vector.<Number>(MAX_FRAME_LENGTH);
        private var gAnaMagn:Vector.<Number> = new Vector.<Number>(MAX_FRAME_LENGTH);
        private var gSynFreq:Vector.<Number> = new Vector.<Number>(MAX_FRAME_LENGTH);
        private var gSynMagn:Vector.<Number> = new Vector.<Number>(MAX_FRAME_LENGTH);
        private var gRover:Number = 0.0, gInit:Number = 0.0;
        
		protected static var instance:PitchShifter;
		
		//Create Singleton instance
		public static function getInstance():PitchShifter {
			if (instance == null) {
				instance = new PitchShifter();
			}
			return instance;
		}
		
		public static function PitchShift(...argv:Array)
		{
			if (argv.length == 4)
			{
				argv[4] = argv[2];
				argv[5] = argv[3];
				argv[2] = 2048;
				argv[3] = 10;
			}
			
			if (argv.length == 6)
				getInstance().PitchShift.apply(instance, argv);
		}
		
		public var t0:int = 0;
		public var t1:int = 0;
		public var t2:int = 0;
		public var t3:int = 0;
		public var t4:int = 0;
		public var t5:int = 0;
		public var t6:int = 0;
		public function PitchShift(pitchShift:Number, numSampsToProcess:int, fftFrameSize:int, osamp:int, sampleRate:Number, indata:Vector.<Number>):void
        {
			var t:Number;
            var magn:Number, phase:Number, tmp:Number, window:Number, real:Number, imag:Number;
            var freqPerBin:Number, expct:Number;
            var i:int, k:int, qpd:int, index:int, inFifoLatency:int, stepSize:int, fftFrameSize2:int, n:int;
 
            var outdata:Vector.<Number> = indata;
            /* set up some handy variables */
            fftFrameSize2 = fftFrameSize / 2;
            stepSize = fftFrameSize / osamp;
            freqPerBin = sampleRate / Number(fftFrameSize);
            expct = 2.0 * Math.PI * Number(stepSize) / Number(fftFrameSize);
            inFifoLatency = fftFrameSize - stepSize;
            if (gRover == 0) gRover = inFifoLatency;

            var invFftFrameSizePI2:Number = Math.PI * 2 / fftFrameSize;
			var invFftFrameSize2:Number = 2 / (fftFrameSize2 * osamp)
			var osampPI2:Number = osamp / ( 2 * Math.PI );
            
			/* main processing loop */
            for (i = 0; i < numSampsToProcess; ++i)
            {
				 /* As long as we have not yet collected enough data just read in */
                gInFIFO[gRover] = indata[i];
                outdata[i] = gOutFIFO[gRover - inFifoLatency];
                ++gRover;
				if(i%100000==0) trace(i,getTimer(),t0,t1,t2,t3,t4,t5,t6)
                /* now we have enough data for processing */
                if (gRover >= fftFrameSize)
                {
                    gRover = inFifoLatency;
 
                   var s2:int, s:int = getTimer();
				   
					/* do windowing and re,im interleave */
                    for (k = 0, n=0, t=0; k < fftFrameSize; ++k, ++n,++n, t+=invFftFrameSizePI2)
                    {
                        window = -.5 * Math.cos(t) + .5;
                        gFFTworksp[n] = gInFIFO[k] * window;
                        gFFTworksp[n + 1] = 0.0;
                    }
 
t0 += -s + (s = getTimer())
                    /* ***************** ANALYSIS ******************* */
                    /* do transform */
                    ShortTimeFourierTransform(gFFTworksp, fftFrameSize, -1);
  t1 += -s + (s = getTimer())
                    /* this is the analysis step */
                    for (k = 0; k <= fftFrameSize2; ++k)
                    {
						
                        /* de-interlace FFT buffer */
                        real = gFFTworksp[k<<1];
                        imag = gFFTworksp[k<<1 + 1];
 
                        /* compute magnitude and phase */
                        magn = 2.0 * Math.sqrt(real * real + imag * imag);
                        phase = Math.atan2(imag, real);
 
                        /* compute phase difference */
                        tmp = phase - gLastPhase[k];
                        gLastPhase[k] = phase;
 
                        /* subtract expected phase difference */
                        tmp -= k * expct;
 
                        /* map delta phase into +/- Pi interval */
                        qpd = int(tmp / Math.PI);
                        if (qpd >= 0) qpd += qpd & 1;
                        else qpd -= qpd & 1;
                        tmp -= Math.PI * Number(qpd);
 
                        /* get deviation from bin frequency from the +/- Pi interval */
                        tmp *= osampPI2;
 
                        /* compute the k-th partials' true frequency */
                        tmp = (k + tmp) * freqPerBin;
 
                        /* store magnitude and true frequency in analysis arrays */
                        gAnaMagn[k] = magn;
                        gAnaFreq[k] = tmp;
 
                    }
 t2 += -s + (s = getTimer())
                    /* ***************** PROCESSING ******************* */
                    /* this does the actual pitch shifting */
                    for (var zero:int = 0; zero < fftFrameSize; ++zero)
                    {
                        gSynMagn[zero] = 0;
                        gSynFreq[zero] = 0;
                    }
 
                    for (k = 0; k <= fftFrameSize2; ++k)
                    {
                        index = int(k * pitchShift);
                        if (index <= fftFrameSize2)
                        {
                            gSynMagn[index] += gAnaMagn[k];
                            gSynFreq[index] = gAnaFreq[k] * pitchShift;
                        }
                    }
 t3 += -s + (s = getTimer())
                    /* ***************** SYNTHESIS ******************* */
                    /* this is the synthesis step */
                    for (k = 0; k <= fftFrameSize2; ++k)
                    {
 
                        /* get magnitude and true frequency from synthesis arrays */
                        magn = gSynMagn[k];
                        tmp = gSynFreq[k];
 
                        /* subtract bin mid frequency */
                        tmp -= Number(k) * freqPerBin;
 
                        /* get bin deviation from freq deviation */
                        tmp /= freqPerBin;
 
                        /* take osamp into account */
                        tmp = 2.0 * Math.PI * tmp / osamp;
 
                        /* add the overlap phase advance back in */
                        tmp += Number(k) * expct;
 
                        /* accumulate delta phase to get bin phase */
                        gSumPhase[k] += Number(tmp);
                        phase = gSumPhase[k];
 
                        /* get real and imag part and re-interleave */
                        gFFTworksp[2 * k] = magn * Math.cos(phase);
                        gFFTworksp[2 * k + 1] = magn * Math.sin(phase);
                    }
 t4 += -s + (s = getTimer())
                    /* zero negative frequencies */
                    for (k = fftFrameSize + 2,n = fftFrameSize<<1; k < n; ++k) gFFTworksp[k] = 0.0;
 
                    /* do inverse transform */
                    ShortTimeFourierTransform(gFFTworksp, fftFrameSize, 1);
 t5 += -s + (s = getTimer())
                    /* do windowing and add to output accumulator */
					for (k = 0, n=0, t=0; k < fftFrameSize; ++k, ++n,++n, t+=invFftFrameSizePI2)
                    {
                        window = -.5 * Math.cos(t) + .5;
                        gOutputAccum[k] += window * gFFTworksp[n] * invFftFrameSize2;
                    }
                    for (k = 0; k < stepSize; ++k) gOutFIFO[k] = gOutputAccum[k];
 
                    /* shift accumulator */
                    //memmove(gOutputAccum, gOutputAccum + stepSize, fftFrameSize * sizeof(Number));
                    for (k = 0, n=stepSize; k < fftFrameSize; ++k, ++n)
                    {
                        gOutputAccum[k] = gOutputAccum[n];
                    }
 
                    /* move input FIFO */
                    for (k = 0, n=stepSize; k < inFifoLatency; ++k, ++n) gInFIFO[k] = gInFIFO[n];
t6 += -s + (s = getTimer())
				}
            }
        }
		
        public function ShortTimeFourierTransform(fftBuffer:Vector.<Number>, fftFrameSize:int, sign:int):void
        {
            var wr:Number, wi:Number, arg:Number, temp:Number;
            var tr:Number, ti:Number, ur:Number, ui:Number;
            var i:int, bitm:int, j:int, le:int, le2:int, k:int, n:int, m:int;
 
            for (i = 2, n= 2 * fftFrameSize - 2; i < n; ++i, ++i)
            {
                for (bitm = 2, j = 0, m = 2 * fftFrameSize; bitm < m; bitm <<= 1)
                {
                    if ((i & bitm) != 0) ++j;
                    j <<= 1;
                }
                if (i < j)
                {
                    temp = fftBuffer[i];
                    fftBuffer[i] = fftBuffer[j];
                    fftBuffer[j] = temp;
                    temp = fftBuffer[m = i + 1];
                    fftBuffer[m] = fftBuffer[bitm = j + 1];
                    fftBuffer[bitm] = temp;
                }
            }
			var signB:Boolean = sign < 0;
            var max:int = Math.log(fftFrameSize) / Math.log(2.0) + .5;
            for (k = 0, le = 2; k < max; ++k)
            {
                le <<= 1;
                le2 = le >> 1;
                ur = 1.0;
                ui = 0.0;
                arg = Math.PI / (le2 >> 1);
                wr = Math.cos(arg);
                wi = signB ? -Math.sin(arg) : Math.sin(arg)
                for (j = 0; j < le2; ++j, ++j)
                {
					var n1:int;
                    for (i = j, m=2*fftFrameSize, n=i+le, n1=n+1; i < m; i=n, n += le, n1=n+1 )
                    {
                        tr = fftBuffer[n] * ur - fftBuffer[n1] * ui;
                        ti = fftBuffer[n] * ui + fftBuffer[n1] * ur;
                        fftBuffer[n] = fftBuffer[i] - tr;
                        fftBuffer[n1] = fftBuffer[n1] - ti;
                        fftBuffer[i] += tr;
                        fftBuffer[i + 1] += ti;
 
                    }
                    tr = ur * wr - ui * wi;
                    ui = ur * wi + ui * wr;
                    ur = tr;
                }
            }
        }
		
		public const PI:Number		= Math.PI
		public const TWOPI:Number	= 2 * Math.PI
		
		private function realft(data:Vector.<Number>,n:int,isign:int)
		{
			var i:int, i1:int, i2:int, i3:int, i4:int, n2p3:int;
			var c1:Number = 0.5, c2:Number, h1r:Number, h1i:Number, h2r:Number, h2i:Number;
			var wr:Number, wi:Number, wpr:Number, wpi:Number, wtemp:Number, theta:Number;
			
			theta = PI/n;
			if (isign == 1) {
				c2 = -0.5;
				four1(data, n, 1);
			} 
			else {
				c2 = 0.5;
				theta = -theta;
			}
			wtemp = Math.sin(0.5*theta);
			wpr = -2.0*wtemp*wtemp;
			wpi = Math.sin(theta);
			wr = 1.0+wpr;
			wi = wpi;
			n2p3 = 2*n+3;
			for (i = 2; i <= n/2; ++i) {
				i4 = 1 + (i3 = n2p3 - (i2 = 1 + ( i1 = i + i - 1)));
				h1r =  c1*(data[i1] + data[i3]);
				h1i =  c1*(data[i2] - data[i4]);
				h2r = -c2*(data[i2] + data[i4]);
				h2i =  c2*(data[i1] - data[i3]);
				data[i1] =  h1r + wr*h2r - wi*h2i;
				data[i2] =  h1i + wr*h2i + wi*h2r;
				data[i3] =  h1r - wr*h2r + wi*h2i;
				data[i4] = -h1i + wr*h2i + wi*h2r;
				wr = (wtemp = wr)*wpr - wi*wpi+wr;
				wi = wi*wpr + wtemp*wpi + wi;
			}
			if (isign == 1) {
				data[1] = (h1r = data[1]) + data[2];
				data[2] = h1r - data[2];
			} else {
				data[1] = c1*((h1r = data[1]) + data[2]);
				data[2] = c1*(h1r - data[2]);
				four1(data, n, -1);
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
			for (i = 1; i < n; i += 2) {
				if (j > i) {
					j1 = j + 1;
					i1 = i + 1;
					tempr = data[j];	data[j] = data[i];		data[i] = tempr;
					tempr = data[j1];	data[j1] = data[i1];	data[i1] = tempr;
				}
				m = n >> 1;
				while (m >= 2 && j > m) {
					j -= m;
					m >>= 1;
				}
				j += m;
			}
			mmax = 2;
			while (n > mmax) {
				istep = 2*mmax;
				theta = TWOPI / (isign * mmax);
				wtemp = Math.sin(0.5*theta);
				wpr = -2.0*wtemp*wtemp;
				wpi = Math.sin(theta);
				wr = 1.0;
				wi = 0.0;
				for (m = 1; m < mmax; m += 2) {
					for (i = m; i <= n; i += istep) {
						i1 = i +1;
						j1 = 1+ (j = i + mmax);
						tempr = wr*data[j]   - wi*data[j1];
						tempi = wr*data[j1]  + wi*data[j];
						data[j]   = data[i]   - tempr;
						data[j1]  = data[i1]  - tempi;
						data[i]  += tempr;
						data[i1] += tempi;
					}
					wr = (wtemp = wr)*wpr - wi*wpi + wr;
					wi = wi*wpr + wtemp*wpi + wi;
				}
				mmax = istep;
			}
		}

	}
	
}