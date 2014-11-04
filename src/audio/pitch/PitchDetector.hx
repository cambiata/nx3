package audio.pitch;
import flash.utils.ByteArray;
import audio.pitch.PitchSample;
import audio.pitch.PitchSample.PitchSamples;
/**
 * PitchDetector
 * @author Jonas Nyström
 */
class PitchDetector 
{
	
	
	static inline var FLOATS = 4;
	static inline var DOUBLES = 8;
	static inline var SEMITONE = 0.0594630943592953;
	static inline var SECONDS = 1000;
	static inline var MEMORY_OFFSET_EPS = 65536;
	static inline var MEMORY_OFFSET_AEPS = 65536 + 1000 * DOUBLES;
	var byteStore : ByteArray;	
	var pitchSamples:PitchSamples = [{time:0, note:0, freq:0}];

	public function new() 
	{			
		byteStore = new ByteArray();
		byteStore.length = 128 * 1024;
		flash.Memory.select(byteStore);		
	}
	
	public function execute(data:ByteArray)
	{
		var position = 0;
		data.position = position;
		trace(data.bytesAvailable);
		while (data.bytesAvailable > 8000)
		{
			position = detect(data, position);			
		}
	
	}
	
	
	public function detect(data:ByteArray, position:Int=0)
	{

		
		var pitchSample:PitchSample = null;
		data.position = position;
		var REQUIRED_SAMPLES = 2000;		

		/*
		trace(data.length);
		trace(data.position);
		trace(data.bytesAvailable);		
		*/
		
		
		if(Std.int(data.bytesAvailable) > REQUIRED_SAMPLES * FLOATS) {
			var samples = 0;
			var amplitude : Float = 0.0;
			while(samples < REQUIRED_SAMPLES) {				
				var sample : Float = data.readFloat();
				//if (sample > 0.1) trace(sample);
				amplitude += (sample * sample);
				samples++;
				flash.Memory.setDouble(samples * DOUBLES, sample);				
			}
			
			amplitude /= samples;

			if(amplitude > 0.01) {
				var start = Date.now().getTime();
				pitchSample = processSamples(samples, amplitude);

				var elapsed = ((Date.now().getTime() - start) / 1000.0);
				if(elapsed > 0.1) {
					debug("WARNING: Processing " + samples + " samples took " + elapsed + " seconds.");
				}
			}
			else
			{
				var currentTime = Date.now().getTime() - startTime;
				pitchSample = { time: currentTime, note:0, freq:0 };
			}

			var prevPitchSample =  pitchSamples[pitchSamples.length - 1];
			
			
			if (pitchSample.note != prevPitchSample.note) {
				trace('new: ' + pitchSample.note);
				prevPitchSample.length = pitchSample.time - prevPitchSample.time;
				pitchSamples.push(pitchSample);
				
				for (ps in pitchSamples)
				{
					trace(ps);
				}				
			}
			
		}	
		
		return data.position;
	}
	
	var startTime = Date.now().getTime();
	var filterLP = new OnePoleLowPassFilter(0.4);
	var filterHP = new OnePoleHighPassFilter(0.99);
	
	public function processSamples(samples, amplitude : Float):PitchSample
	{
		var currentTime = Date.now().getTime() - startTime;
		
		for(index in 0...samples) {
			var sample = flash.Memory.getDouble(index * DOUBLES);
			sample = 0.93 * filterLP.process(filterHP.process(sample));
		}
		var wavelength = bestWavelength(samples);
		
		if(wavelength > 0) {
			var frequency = Audio.secondsToFrequency(Audio.samplesToSeconds(wavelength));
			//var noteNumber = Audio.scaleFrequency(frequency);
			var noteNumber = Math.round(Audio.scaleFrequency(frequency));
			//trace([noteNumber, frequency]);
			return { time:currentTime, note:noteNumber, freq:frequency };
			
			/*
			if(callbacks.exists("NOTE_DETECTED")) {
				try {
					flash.external.ExternalInterface.call(callbacks.get("NOTE_DETECTED"), noteNumber, amplitude);
				} catch(e : Dynamic) {
					debug("ERROR: " + e);
				}
			}
			*/
			
			//debug("Detected #" + (Std.int(100 * noteNumber) / 100.0) + " (" + Audio.noteName(noteNumber) + "), with amplitude " + (Std.int(100 * amplitude) / 100.0));
		}
		return { time:currentTime, note:0, freq:0 };
	}	
	
	public  function bestWavelength(samples) {
		var bestWavelength = 0;
		var bestErrorPerSample = 666.0;
		for(wavelength in 0...10) {
			flash.Memory.setDouble(MEMORY_OFFSET_EPS + wavelength * DOUBLES, 0.0);
		}
		for(wavelength in 800...1000) {
			flash.Memory.setDouble(MEMORY_OFFSET_EPS + wavelength * DOUBLES, 2.0);
		}
		for(wavelength in 10...800) {
			flash.Memory.setDouble(MEMORY_OFFSET_EPS + wavelength * DOUBLES, wavelengthError(wavelength, samples));
		}
		for(wavelength in 10...800) {
			var sum = flash.Memory.getDouble(MEMORY_OFFSET_EPS + wavelength * DOUBLES);
			for(delta in 1...5) {
				sum += flash.Memory.getDouble(MEMORY_OFFSET_EPS + (wavelength + delta) * DOUBLES);
				sum += flash.Memory.getDouble(MEMORY_OFFSET_EPS + (wavelength - delta) * DOUBLES);
			}
			flash.Memory.setDouble(MEMORY_OFFSET_AEPS + wavelength * DOUBLES, sum / 9);
		}
		bestWavelength = postProcess();
		bestErrorPerSample = wavelengthError(bestWavelength, samples);
		return bestWavelength;
	}	
	
	
	public static inline  function wavelengthError(wavelength, samples) {
		var totalDifference = 0.0;
		for(i in 0...wavelength) {
			var diff1 = flash.Memory.getDouble(i * DOUBLES) - flash.Memory.getDouble((i + wavelength) * DOUBLES);
			var diff2 = flash.Memory.getDouble(i * DOUBLES) - flash.Memory.getDouble((i + 2 * wavelength) * DOUBLES);
			var offset = samples - 2 * wavelength - 1;
			var diff3 = flash.Memory.getDouble((i + offset) * DOUBLES) - flash.Memory.getDouble((i + offset + wavelength) * DOUBLES);
			totalDifference += (diff1 * diff1) + (diff2 * diff2) + (diff3 * diff3);
		}
		return totalDifference / (3 * wavelength);
	}	
	
	static var lastDetectedWavelength = 1;	
	
	public static function postProcess() {
		// Cumulative mean normalized difference...
		var runningSum = 0.0;
		var runningTotal = 0;
		for(wavelength in 10...800) {
			var errorPerSample = flash.Memory.getDouble(MEMORY_OFFSET_AEPS + wavelength * DOUBLES);
			runningSum += errorPerSample;
			runningTotal++;
			var runningAverage = runningSum / runningTotal;
			errorPerSample /= runningAverage;
			flash.Memory.setDouble(MEMORY_OFFSET_AEPS + wavelength * DOUBLES, errorPerSample);
		}
		// done.
		var min = 666.0;
		for(wavelength in 10...800) {
			var errorPerSample = flash.Memory.getDouble(MEMORY_OFFSET_AEPS + wavelength * DOUBLES);
			if(errorPerSample < min) {
				min = errorPerSample;
			}
		}
		var firstMinimumStart = -1;
		var firstMinimumEnd = -1;
		var detectedWavelength = -1;
		var confident = false;
		for(wavelength in 10...800) {
			var errorPerSample = flash.Memory.getDouble(MEMORY_OFFSET_AEPS + wavelength * DOUBLES);
			if(errorPerSample < 1.2 * min) {
				if(firstMinimumStart == -1) {
					firstMinimumStart = wavelength;
				}
			} else {
				if(firstMinimumStart != -1 && firstMinimumEnd == -1) {
					firstMinimumEnd = wavelength;
					detectedWavelength = Std.int((firstMinimumStart + firstMinimumEnd) / 2);
					confident = (Math.max(detectedWavelength, lastDetectedWavelength) <
								 Math.min(detectedWavelength, lastDetectedWavelength) * (1 + SEMITONE));
					lastDetectedWavelength = detectedWavelength;
				}
			}
		}
		if(confident) {
			return detectedWavelength;
		} else {
			return -1;
		}
	}	
	
	public static function debug(message) {
		trace(message);
	}	
	
}


