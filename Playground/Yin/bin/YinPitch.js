(function () { "use strict";
var Main = function() { };
Main.main = function() {
	var pr;
	if(audiotools.webaudio.pitch.PitchRecognizer.instance == null) pr = audiotools.webaudio.pitch.PitchRecognizer.instance = new audiotools.webaudio.pitch.PitchRecognizer(null); else pr = audiotools.webaudio.pitch.PitchRecognizer.instance;
};
var audiotools = {};
audiotools.webaudio = {};
audiotools.webaudio.Context = function() {
	this.context = audiotools.webaudio.Context.createAudioContext();
};
audiotools.webaudio.Context.getInstance = function() {
	if(audiotools.webaudio.Context.instance == null) return audiotools.webaudio.Context.instance = new audiotools.webaudio.Context(); else return audiotools.webaudio.Context.instance;
};
audiotools.webaudio.Context.createAudioContext = function() {
	var context = null;
	
			if (typeof AudioContext == "function") {
				context = new AudioContext();
				console.log("USING STANDARD WEB AUDIO API");
			} else if ((typeof webkitAudioContext == "function") || (typeof webkitAudioContext == "object")) {
				context = new webkitAudioContext();
				console.log("USING WEBKIT AUDIO API");
			} else {
				alert("AudioContext is not supported.");
				throw new Error("AudioContext is not supported. :(");
			}
		;
	return context;
};
audiotools.webaudio.Context.prototype = {
	getContext: function() {
		return this.context;
	}
};
audiotools.webaudio.pitch = {};
audiotools.webaudio.pitch.PitchRecognizer = function(audioContext) {
	this.init($bind(this,this.onPitchHandler),audioContext);
};
audiotools.webaudio.pitch.PitchRecognizer.getInstance = function(audioContext) {
	if(audiotools.webaudio.pitch.PitchRecognizer.instance == null) return audiotools.webaudio.pitch.PitchRecognizer.instance = new audiotools.webaudio.pitch.PitchRecognizer(audioContext); else return audiotools.webaudio.pitch.PitchRecognizer.instance;
};
audiotools.webaudio.pitch.PitchRecognizer.prototype = {
	onPitchHandler: function(currentFreq,closestIndex,maxVolume) {
		if(this.onPitch != null) this.onPitch(currentFreq,closestIndex,maxVolume); else console.log([currentFreq,closestIndex,maxVolume]);
	}
	,init: function(cbk,audioContext) {
		var audioContext1 = (audiotools.webaudio.Context.instance == null?audiotools.webaudio.Context.instance = new audiotools.webaudio.Context():audiotools.webaudio.Context.instance).getContext();
		var windowAudioContext =  window.AudioContext;
		windowAudioContext = audioContext1;
			
			
			console.log(window.AudioContext);
			
			/* Internal parameters */
			var volumeThreshold = 134; // Amplitude threshold for detecting sound/silence [0-255], 128 = silence
			var nPitchValues = 5; // Number of pitches for pitch averaging logic

			/* Web Audio API variables */
			//var audioContext = null;
			var analyserNode = null;
			var processNode = null;
			var microphoneNode = null;
			var gainNode = null;
			var lowPassFilter1 = null;
			var lowPassFilter2 = null;
			var highPassFilter1 = null;
			var highPassFilter2 = null;

			/* Configurable parameters */
			var lowestFreq = 30; // Minimum tune = 44100/1024 = 43.07Hz
			var highestFreq = 4200; // Maximum tune C8 (4186.02 Hz)

			/* Tune variables */
			var twelfthRootOfTwo = 1.05946309435929526456182529; // 2^(1/12)
			var otthRootOfTwo = 1.0005777895; // 2^(1/1200)
			var refNoteLabels = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
			var refFreq = 440;
			var refNoteIndex = 0;
			var noteFrequencies = [];
			var noteLabels = [];
			var pitchHistory = [];

			/* GUI variables */
			var pixelsPerCent = 3;
			var silenceTimeout = null;
			var minUpdateDelay = 100; // Pitch/GUI maximum update rate in milliseconds
				
			 window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
			  //window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext;
			 
			  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
			  
			  if (/*window.requestAnimationFrame && */ window.AudioContext && navigator.getUserMedia) {
			    try {
			      navigator.getUserMedia({audio: true}, gotStream, function(err) {
			        console.log("DEBUG: Error getting microphone input: " + err);
			      });
			    } catch (e) {
			      console.log("DEBUG: Couldnt get microphone input: " + e);
			    }
			  }
			  else {
			    console.log("DEBUG: Web Audio API is not supported");
			  }

			  function gotStream(stream) {
				  
			    audioContext = new AudioContext();
			    if (audioContext == null) alert("No AudioContext!");
			    
			    microphoneNode = audioContext.createMediaStreamSource(stream);
			    analyserNode = audioContext.createAnalyser();
			    analyserNode.fftSize = 2048;
			    analyserNode.smoothingTimeConstant = 0.8;
			    gainNode = audioContext.createGain();
			    gainNode.gain.value = 1.5; // Set mic volume to 150% by default
			    lowPassFilter1 = audioContext.createBiquadFilter();
			    lowPassFilter2 = audioContext.createBiquadFilter();
			    highPassFilter1 = audioContext.createBiquadFilter();
			    highPassFilter2 = audioContext.createBiquadFilter();
			    lowPassFilter1.Q.value = 0;
			    lowPassFilter1.frequency.value = highestFreq;
			    lowPassFilter1.type = "lowpass";
			    lowPassFilter2.Q.value = 0;
			    lowPassFilter2.frequency.value = highestFreq;
			    lowPassFilter2.type = "lowpass";
			    highPassFilter1.Q.value = 0;
			    highPassFilter1.frequency.value = lowestFreq;
			    highPassFilter1.type = "highpass";
			    highPassFilter2.Q.value = 0;
			    highPassFilter2.frequency.value = lowestFreq;
			    highPassFilter2.type = "highpass";
			    microphoneNode.connect(lowPassFilter1);
			    lowPassFilter1.connect(lowPassFilter2);
			    lowPassFilter2.connect(highPassFilter1);
			    highPassFilter1.connect(highPassFilter2);
			    highPassFilter2.connect(gainNode);
			    gainNode.connect(analyserNode);
			    
			    initGui();
			  }

			  function initGui() {
			    defineNoteFrequencies();
			    updatePitch();
			  }

			  function updatePitch(time) {
			    var pitchInHz = 0.0;
			    var volumeCheck = false;
			    var maxVolume = 128;
			    var inputBuffer = new Uint8Array(analyserNode.fftSize);
			    //console.log(inputBuffer);
			    analyserNode.getByteTimeDomainData(inputBuffer);

			    // Check for volume on the first buffer quarter
			    for (var i=0; i<inputBuffer.length/4; i++) {
			      if (maxVolume < inputBuffer[i]) maxVolume = inputBuffer[i];
			       
			      if (!volumeCheck && inputBuffer[i] > volumeThreshold) {
			        volumeCheck = true;
			      }
			    }

			    if (volumeCheck) {
			      pitchInHz = Yin_pitchEstimation(inputBuffer, audioContext.sampleRate);
			    }

			    
			    
			   
			    
			    // Pitch smoothing logic
			    var allowedHzDifference = 5;
			    if (pitchInHz != 0) {
			      clearTimeout(silenceTimeout);
			      silenceTimeout = null;
			      if (pitchHistory.length >= nPitchValues) pitchHistory.shift();
			      // Octave jumping fix: if current pitch is around twice the previous detected pitch, halve its value
			      if (pitchHistory.length && Math.abs((pitchInHz/2.0)-pitchHistory[pitchHistory.length-1]) < allowedHzDifference) pitchInHz = pitchInHz/2.0;
			      pitchInHz = Math.round(pitchInHz*10)/10;
			      pitchHistory.push(pitchInHz);
			      // Take the pitch history median as the current pitch
			      var sortedPitchHistory = pitchHistory.slice(0).sort(function(a,b) {return a-b});
			      pitchInHz = sortedPitchHistory[Math.floor((sortedPitchHistory.length-1)/2)];


			      updateGui(pitchInHz, getClosestNoteIndex(pitchInHz), (maxVolume-128) / 128);
			      
			      
			      if (pitchHistory.length < nPitchValues) 
				window.requestAnimationFrame(updatePitch);
				//updatePitch();
			      else {
			        setTimeout(function() {
			          window.requestAnimationFrame(updatePitch);
			          //updatePitch();
			        }, minUpdateDelay);
			      }
			    }
			    else {
			      if (silenceTimeout === null) {
			        silenceTimeout = setTimeout(function() {
			          pitchHistory = [];
			          updateGui(0.0, -1, 0);
			        }, 500);
			      }
			      window.requestAnimationFrame(updatePitch);
			     // updatePitch();
			      
			      
			    }
			    
			  }

			  function updateGui(currentFreq, closestIndex, maxVolume) {
				  
				  if (cbk != null) {
					  cbk(currentFreq, closestIndex, maxVolume);
				  } else {
					console.log(currentFreq, closestIndex, maxVolume);  
				  }
			  }

			  function findRefNoteIndex(noteLabel) {
			    for (var i=0; i<refNoteLabels.length; i++) {
			      if (refNoteLabels[i] == noteLabel) return i;
			    }
			    return false;
			  }

			  function getClosestNoteIndex(f) {
			    if (f == 0.0) return false;
			    for (var i=0; i<noteFrequencies.length; i++) {
			      if (f < noteFrequencies[i]) {
			        if (i > 0 && (noteFrequencies[i]-f > f-noteFrequencies[i-1])) return i-1;
			        else return i;
			      }
			    }
			    return false;
			  }

			  function getCentDiff(fCurrent, fRef) {
			    return 1200*Math.log(fCurrent/fRef)/Math.log(2);
			  }

			  function getSemituneDiff(fCurrent, fRef) {
			    return 12*Math.log(fCurrent/fRef)/Math.log(2);
			  }

			  function defineNoteFrequencies() {
				  
			    var noteFreq = 0.0;
			    var greaterNoteFrequencies = [];
			    var greaterNoteLabels = [];
			    var lowerNoteFrequencies = [];
			    var lowerNoteLabels = [];
			    var octave = 4;

			    for (var i=0;;i++) {
			      if ((i+9)%12 == 0) octave++;
			      noteFreq = refFreq*Math.pow(twelfthRootOfTwo, i);
			      // maximum note tune C8 (4186.02 Hz)
			      if (noteFreq > 4187) break;
			      greaterNoteFrequencies.push(noteFreq);
			      greaterNoteLabels.push(octave + refNoteLabels[(refNoteIndex+i)%refNoteLabels.length]);
			    }
			    //console.log(i);

			    octave = 4;
			    for (var i=-1;;i--) {
			      if ((Math.abs(i)+2)%12 == 0) octave--;
			      noteFreq = refFreq*Math.pow(twelfthRootOfTwo, i);
			      // minimum note tune A0 (28Hz)
			      if (noteFreq < 28) break;
			      lowerNoteFrequencies.push(noteFreq);
			      var relativeIndex = (refNoteIndex+i)%refNoteLabels.length;
			      relativeIndex = (relativeIndex == 0) ? 0 : relativeIndex+(refNoteLabels.length);
			      lowerNoteLabels.push(octave + refNoteLabels[relativeIndex]);
			    }
			    //console.log(i);

			    lowerNoteFrequencies.reverse();
			    lowerNoteLabels.reverse();
			    noteFrequencies = lowerNoteFrequencies.concat(greaterNoteFrequencies);
			    noteLabels = lowerNoteLabels.concat(greaterNoteLabels);

			  }
			 
			  //==================================================================================================
			  
			// Yin Pitch Tracking Algorithm implemented by Alejandro PÃ©rez (2014)
			// (http://recherche.ircam.fr/equipes/pcm/cheveign/ps/2002_JASA_YIN_proof.pdf)			  
			  
			// PARAMETERS
			var yinThreshold = 0.15; // allowed uncertainty (e.g 0.05 will return a pitch with ~95% probability)
			var yinProbability = 0.0; // READONLY: contains the certainty of the note found as a decimal (i.e 0.3 is 30%)

			function Yin_pitchEstimation(inputBuffer, sampleRate) {
			  var yinBuffer = new Float32Array(Math.floor(inputBuffer.length/2));
			  yinBuffer[0] = 1;
			  var runningSum = 0;
			  var pitchInHz = 0.0;
			  var foundTau = false;
			  var minTauValue;
			  var minTau = 0;

			  for (var tau=1; tau<Math.floor(inputBuffer.length/2); tau++) {
			    // Step 1: Calculates the squared difference of the signal with a shifted version of itself.
			    yinBuffer[tau] = 0;
			    for (var i=0; i<Math.floor(inputBuffer.length/2); i++) {
			      yinBuffer[tau] += Math.pow(((inputBuffer[i]-128)/128)-((inputBuffer[i+tau]-128)/128),2);
			    }
			    // Step 2: Calculate the cumulative mean on the normalised difference calculated in step 1.
			    runningSum += yinBuffer[tau];
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
			    minTau += (yinBuffer[minTau+1]-yinBuffer[minTau-1])/(2*((2*yinBuffer[minTau])-yinBuffer[minTau-1]-yinBuffer[minTau+1]));
			    pitchInHz = sampleRate/minTau;
			    yinProbability = 1-minTauValue;
			  }

			  return pitchInHz;
			}
		
		
		;
	}
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
Main.main();
})();
