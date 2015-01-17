package;

import js.Browser;
import js.html.audio.AnalyserNode;
import js.html.audio.AudioContext;
import js.html.audio.BiquadFilterNode;
import js.html.audio.GainNode;
import js.html.audio.MediaStreamAudioSourceNode;
import js.html.Float32Array;
import js.html.rtc.LocalMediaStream;
import js.html.rtc.NavigatorUserMediaError;
import js.html.Uint8Array;
import js.Lib;
using Lambda;

/**
 * ...
 * @author Jonas Nyström
 */

class Main 
{
	
	static function main()  new Main();
	public function new () { Browser.window.addEventListener('load', function(e) {
			new Pitch();			
		});
	}
	
}

class Pitch {
	
	static var self = null;
	
	
	
	public function new() {
		trace('new Pitch');
		this.init();
		self = this;
	}
	
	private function initGui() 
	{
		trace('init gui');
		    defineNoteFrequencies();
		    updatePitch();		
	}		
	
	function updatePitch() 
	{
		var pitchInHz = 0.0;
		var volumeCheck = false;
		var maxVolume = 128;
		var inputBuffer = new Uint8Array(self.analyserNode.fftSize);
		self.analyserNode.getByteTimeDomainData(inputBuffer);		
		
		    // Check for volume on the first buffer quarter
		//for (var i=0; i<inputBuffer.length/4; i++) {
		var length = Std.int(inputBuffer.length / 4);
		for (i in 0 ... length) {
			if (maxVolume < inputBuffer[i]) maxVolume = inputBuffer[i];
			if (!volumeCheck && inputBuffer[i] > self.volumeThreshold) {
				
			volumeCheck = true;
			}
		}		
		if (volumeCheck) {
			pitchInHz = yin_pitchEstimation(inputBuffer, Std.int(audioContext.sampleRate));
		}
		
		   // Pitch smoothing logic
		    var allowedHzDifference = 5;
		    
		    if (pitchInHz != 0) {
			    
			     Browser.window.clearTimeout(silenceTimeout);			     
			      silenceTimeout = null;
			      
			      if (pitchHistory.length >= nPitchValues) pitchHistory.shift();
			      
			      // Octave jumping fix: if current pitch is around twice the previous detected pitch, halve its value
			      
			      if (pitchHistory.length != 0 && Math.abs((pitchInHz / 2.0) - pitchHistory[pitchHistory.length - 1]) < allowedHzDifference) {
				      pitchInHz = pitchInHz/2.0;
			      }
			      
			      
			      pitchInHz = Math.round(pitchInHz*10)/10;
			      pitchHistory.push(pitchInHz);
			      
			      // Take the pitch history median as the current pitch
			      var sortedPitchHistory = pitchHistory.slice(0);
			      sortedPitchHistory.sort(function(a, b) { return Std.int(a - b); } );
			      
			      pitchInHz = sortedPitchHistory[Math.floor((sortedPitchHistory.length-1)/2)];

			      /*
			      // Take the pitch history mean as the current pitch
			      pitchInHz = 0.0;
			      for (var i=0; i<sortedPitchHistory.length; i++) pitchInHz += sortedPitchHistory[i];
			      pitchInHz = Math.round(pitchInHz*10/sortedPitchHistory.length)/10;
			      */
			      updateGui(pitchInHz, getClosestNoteIndex(pitchInHz), (maxVolume-128) / 128);
			      
			      if (pitchHistory.length < nPitchValues) {
				      
					untyped __js__ ('window.requestAnimationFrame(Pitch.self.updatePitch);');
						
			      }
			      else {
				      
				        Browser.window.setTimeout(function() {
					untyped __js__ ('window.requestAnimationFrame(Pitch.self.updatePitch);');		          
				        }, minUpdateDelay);
			      }
		    } else {
			      if (self.silenceTimeout == null) {
				        self.silenceTimeout = Browser.window.setTimeout(function() {
						pitchHistory = [];
						updateGui(0.0, 0, 0);
				        }, 500);
			      }
			      untyped __js__ ('window.requestAnimationFrame(Pitch.self.updatePitch);');		          
		    }		
	}
	
	  function getClosestNoteIndex(f:Float):Int {
		if (f == 0.0) return 0;
		    //for (var i = 0; i < noteFrequencies.length; i++) {
		for (i in 0 ... noteFrequencies.length) {				    
			if (f < noteFrequencies[i]) {
				if (i > 0 && (noteFrequencies[i]-f > f-noteFrequencies[i-1])) return i-1;
				else return i;
			}
		}
		return 0;
	  }	
	
	
	  function updateGui(currentFreq, closestIndex, maxVolume) { trace([currentFreq, closestIndex, maxVolume]); };
	
	function defineNoteFrequencies() 
	{
		var noteFreq = 0.0;
		var greaterNoteFrequencies = [];
		var greaterNoteLabels = [];
		var lowerNoteFrequencies = [];
		var lowerNoteLabels = [];
		var octave = 4;

		//for (var i = 0;; i++) {
		for (i in 0 ... 10000) {
			if ((i+9)%12 == 0) octave++;
			noteFreq = refFreq*Math.pow(twelfthRootOfTwo, i);
			// maximum note tune C8 (4186.02 Hz)
			if (noteFreq > 4187) break;
			greaterNoteFrequencies.push(noteFreq);
			greaterNoteLabels.push(octave + refNoteLabels[(refNoteIndex + i) % refNoteLabels.length]);
			//trace(i);
		}
		

		octave = 4;
		//for (var i = -1;; i--) {
		for (j in 1 ... 10000) {
			var i = -j;
			if ((Math.abs(i)+2)%12 == 0) octave--;
			noteFreq = refFreq*Math.pow(twelfthRootOfTwo, i);
			// minimum note tune A0 (28Hz)
			if (noteFreq < 28) break;
			lowerNoteFrequencies.push(noteFreq);
			var relativeIndex = (refNoteIndex+i)%refNoteLabels.length;
			relativeIndex = (relativeIndex == 0) ? 0 : relativeIndex+(refNoteLabels.length);
			lowerNoteLabels.push(octave + refNoteLabels[relativeIndex]);
			//trace(j);
		}
		
		lowerNoteFrequencies.reverse();
		lowerNoteLabels.reverse();
		noteFrequencies = lowerNoteFrequencies.concat(greaterNoteFrequencies);
		noteLabels = lowerNoteLabels.concat(greaterNoteLabels);		
		/*
		  trace(lowerNoteFrequencies);
		  trace(lowerNoteLabels);
		  trace(noteFrequencies);
		  trace(noteLabels);		
		  */
		
	}
	
	function streamError(error:NavigatorUserMediaError) :Bool {
		return true;
	}
	
	function gotStream(stream: LocalMediaStream): Bool {
		
		trace(this);
		
		self.audioContext = new AudioContext();
		self.microphoneNode = self.audioContext.createMediaStreamSource(stream);
		self.analyserNode = self.audioContext.createAnalyser();
		self.analyserNode.fftSize = 2048;
		self.analyserNode.smoothingTimeConstant = 0.8;
		self.gainNode = self.audioContext.createGain();
		 self.gainNode.gain.value = 1.5; // Set mic volume to 150% by default
		self.lowPassFilter1 = self.audioContext.createBiquadFilter();
		self.lowPassFilter2 = self.audioContext.createBiquadFilter();
		self.highPassFilter1 = self.audioContext.createBiquadFilter();
		self.highPassFilter2 = self.audioContext.createBiquadFilter();
		self.lowPassFilter1.Q.value = 0;
		self.lowPassFilter1.frequency.value = highestFreq;
		self.lowPassFilter1.type = BiquadFilterNode.LOWPASS;
		self.lowPassFilter2.Q.value = 0;
		self.lowPassFilter2.frequency.value = highestFreq;
		self.lowPassFilter2.type = BiquadFilterNode.LOWPASS;
		self.highPassFilter1.Q.value = 0;
		self.highPassFilter1.frequency.value = lowestFreq;
		self.highPassFilter1.type = BiquadFilterNode.HIGHPASS;
		self.highPassFilter2.Q.value = 0;
		self.highPassFilter2.frequency.value = lowestFreq;
		self.highPassFilter2.type = BiquadFilterNode.HIGHPASS;
		self.microphoneNode.connect(self.lowPassFilter1, 0, 0);
		self.lowPassFilter1.connect(self.lowPassFilter2, 0, 0);
		self.lowPassFilter2.connect(self.highPassFilter1, 0, 0);
		self.highPassFilter1.connect(self.highPassFilter2, 0, 0);
		self.highPassFilter2.connect(self.gainNode, 0, 0);
		self.gainNode.connect(self.analyserNode, 0, 0);
		
		self.initGui();
		
		return true;
		
	}
	

	

	
	function init() {
		
		trace(this);
		
		if (Browser.window.requestAnimationFrame == null) Lib.alert('requestAnimationFrame == null');
		
		this.getUserMedia = untyped __js__(' navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia; ');
		trace(this.getUserMedia);

		var getUserMedia = Browser.navigator.getUserMedia;		
		untyped __js__('getUserMedia = getUserMedia || navigator.webkitGetUserMedia;');				
		untyped __js__('getUserMedia = getUserMedia || navigator.mozGetUserMedia;');		
		untyped __js__('getUserMedia.call(navigator, { "audio": true }, this.gotStream, function() {});');		
		/*
		//var getUserMedia = untyped __js__('getUserMedia');
		*/
		//trace(untyped __js__('getUserMedia') == this.getUserMedia);
		
		//this.getUserMedia.bind(untyped __js__('navigator'), { "audio": true }, this.gotStream, this.streamError );
		
		//this.getUserMedia.bind(Browser.navigator, { "audio": true }, this.gotStream, this.streamError );
	}
	
	
	
	
	
	
		
	/* Internal parameters */
	var useSPP = false; // Spectral Peak Picking (FFT + Gaussian Interpolation)
	var useAC = false; // Autocorrelation
	var useYin = true; // Yin Pitch Tracking
	var volumeThreshold = 134; // Amplitude threshold for detecting sound/silence [0-255], 128 = silence
	var nPitchValues = 5; // Number of pitches for pitch averaging logic

	/* Web Audio API variables */
	var audioContext:AudioContext = null;
	var analyserNode:AnalyserNode = null;
	var processNode = null;
	var microphoneNode:MediaStreamAudioSourceNode = null;
	var gainNode:GainNode = null;
	var lowPassFilter1:BiquadFilterNode = null;
	var lowPassFilter2:BiquadFilterNode = null;
	var highPassFilter1:BiquadFilterNode = null;
	var highPassFilter2:BiquadFilterNode = null;

	/* Configurable parameters */
	static inline var lowestFreq:Float = 30.0; // Minimum tune = 44100/1024 = 43.07Hz
	static inline var highestFreq:Float = 4200.0; // Maximum tune C8 (4186.02 Hz)

	/* Tune variables */
	var twelfthRootOfTwo = 1.05946309435929526456182529; // 2^(1/12)
	var otthRootOfTwo = 1.0005777895; // 2^(1/1200)
	var refNoteLabels = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
	var refFreq = 440;
	var refNoteIndex = 0;
	var noteFrequencies = [];
	var noteLabels = [];
	var pitchHistory:Array<Float> = [];

	/* GUI variables */
	var pixelsPerCent = 3;
	var silenceTimeout:Dynamic = null;
	var minUpdateDelay = 100; // Pitch/GUI maximum update rate in milliseconds	
	var getUserMedia = null;
	
	
	var yinThreshold = 0.15; // allowed uncertainty (e.g 0.05 will return a pitch with ~95% probability)
	var yinProbability = 0.0; // READONLY: contains the certainty of the note found as a decimal (i.e 0.3 is 30%)

	function yin_pitchEstimation(inputBuffer, sampleRate:Int) {
		
			  var yinBuffer:Float32Array = new Float32Array(Math.floor(inputBuffer.length/2));
			  yinBuffer[0] = 1;
			  var runningSum = 0;
			  var pitchInHz = 0.0;
			  var foundTau = false;
			  var minTauValue = .0;
			  var minTau = .0;

			  //for (var tau = 1; tau < Math.floor(inputBuffer.length / 2); tau++) {
			var length1 = Math.floor(inputBuffer.length / 2);
			for (tau in 1 ... length1) {
				  
			    // Step 1: Calculates the squared difference of the signal with a shifted version of itself.
			    yinBuffer[tau] = 0;
			    
			    for (i in 0 ... length1) {
			    //for (var i=0; i<Math.floor(inputBuffer.length/2); i++) {
				var inputBufferValA = untyped __js__('inputBuffer[i]');
				var inputBufferValB = untyped __js__('inputBuffer[i+tau]');
			    
			      yinBuffer[tau] += Math.pow(((inputBufferValA-128)/128)-((inputBufferValB-128)/128),2);
			      //yinBuffer[tau] += Math.pow(((inputBuffer[i]-128)/128)-((inputBuffer[i+tau]-128)/128),2);
			    }
			    // Step 2: Calculate the cumulative mean on the normalised difference calculated in step 1.
			    runningSum += untyped __js__ (' yinBuffer[tau] ');
			    
			    yinBuffer[tau] = yinBuffer[tau]*(tau/runningSum);

			    // Step 3: Check if the current normalised cumulative mean is over the threshold.
			    if (tau > 1) {
			      if (foundTau) {
			        if (yinBuffer[tau] < minTauValue) {
			          minTauValue = yinBuffer[tau];
			          minTau = tau;
			        }
			        else break;
			      }
			      else if (yinBuffer[tau] < yinThreshold) {
			        foundTau = true;
			        minTau = tau;
			        minTauValue = yinBuffer[tau];
			      }
			    }
			  }

			  if (minTau == 0) {
			    yinProbability = 0;
			    pitchInHz = 0.0;
			  }
			  else {
			    // Step 4: Interpolate the shift value (tau) to improve the pitch estimate.
			    //minTau += (yinBuffer[minTau+1]-yinBuffer[minTau-1])/(2*((2*yinBuffer[minTau])-yinBuffer[minTau-1]-yinBuffer[minTau+1]));
			    untyped __js__ (' minTau += (yinBuffer[minTau+1]-yinBuffer[minTau-1])/(2*((2*yinBuffer[minTau])-yinBuffer[minTau-1]-yinBuffer[minTau+1])); ' );
			    
			    pitchInHz = sampleRate/minTau;
			    yinProbability = 1-minTauValue;
			  }

			  return pitchInHz;
	}	
	
	
}