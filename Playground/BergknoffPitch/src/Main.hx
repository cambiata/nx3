package;

import haxe.Timer;
import js.Browser;
import js.html.audio.AudioBuffer;
import js.html.audio.AudioContext;
import js.html.audio.AudioProcessingEvent;
import js.html.Event;
import js.html.Float32Array;
import js.html.rtc.LocalMediaStream;
import js.html.rtc.NavigatorUserMediaError;
import js.html.rtc.NavigatorUserMediaErrorCallback;
import js.html.rtc.NavigatorUserMediaSuccessCallback;
import js.html.Worker;
import js.Lib;
using Lambda;

/**
 * ...
 * @author 
 */

class Main 
{
	
	static function main() 
	{
		
		Browser.window.addEventListener('load', function(e) {
			new  Main();
		});
	}
	


	
	public function new() {			
			initalize();
	}
	
	var test_frequencies = [];	
	
	
	function initalize() {
		trace('initialize');

		//correlationWorker = new Worker('correlation_worker.js');
		//correlationWorker.addEventListener('message', interpretCorrelationResult);
		
		//for (var i = 0; i < 30; i++)
				
		//trace(this.test_frequencies);
		
		
		var navigator = Browser.navigator;
		
		
		trace(navigator);
		//untyped __js__('var getUserMedia = navigator.getUserMedia;');
		var getUserMedia = navigator.getUserMedia;
		untyped __js__('getUserMedia = getUserMedia || navigator.webkitGetUserMedia;');				
		untyped __js__('getUserMedia = getUserMedia || navigator.mozGetUserMedia;');		
		untyped __js__('getUserMedia.call(navigator, { "audio": true }, this.useStream, function() {});');
	}
	

	
	var correlationWorker:js.html.Worker;
	
	// LocalMediaStream -> Bool
	
	function useStream(stream: LocalMediaStream): Bool {
		
		trace('useStream');
		
		//var correlationWorker = new Worker('correlation_worker.js');
		//correlationWorker.addEventListener('message', interpretCorrelationResult);		
		
		
		this.correlationWorker = new js.html.Worker('correlation_worker.js');			
		//this.correlationWorker.onmessage = this.onWorkerMessage;				
		this.correlationWorker.onmessage = function(event) {
			//trace('onmessage');		
			
			var timeseries = event.data.timeseries;
			var frequencyAmplitudes:Array<Array<Float>> = event.data.frequency_amplitudes;
			
			
			var magnitudes = frequencyAmplitudes.map(function(z) { return z[0] * z[0] + z[1] * z[1]; });
			
			var maximum_index = -1;
			var maximum_magnitude = .0;			
			
			
			//for (var i = 0; i < magnitudes.length; i++)
			
			for (i in 0 ... magnitudes.length)
			{
				if (magnitudes[i] <= maximum_magnitude) continue;
				maximum_index = i;
				maximum_magnitude = magnitudes[i];
			}
			
			var average = magnitudes.fold(function(a, b) { return a + b; }, 0) / magnitudes.length;
			//trace(average);
			var confidence = maximum_magnitude / average;
			
			var confidence_threshold = 10;
			if (confidence > confidence_threshold)
			{
				var dominant_frequency = test_frequencies[maximum_index];		
				trace(dominant_frequency);
			}
		}
		
		
		var audioContext = new AudioContext();
		var microphone = audioContext.createMediaStreamSource(stream);
		var scriptProcessor = audioContext.createScriptProcessor(1024, 1, 1);
		scriptProcessor.connect(audioContext.destination, 0, 0);
		microphone.connect(scriptProcessor, 0, 0);
		
		

		var buffer = [];
		var sample_length_milliseconds = 100;
		var recording = true;
		
		//scriptProcessor.onaudioprocess = this.test;
		trace(this.correlationWorker);
		
		this.test_frequencies = [];
		
		var C2 = 65.41; // C2 note, in Hz.
		var notes = [ "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" ];			
		for (i in 0 ... 30)
		{
			var note_frequency = C2 * Math.pow(2, i / 12);
			var note_name = notes[i % 12];
			var note = { "frequency": note_frequency, "name": note_name };
			var just_above = { "frequency": note_frequency * Math.pow(2, 1 / 48), "name": note_name + " (a bit sharp)" };
			var just_below = { "frequency": note_frequency * Math.pow(2, -1 / 48), "name": note_name + " (a bit flat)" };
			this.test_frequencies = this.test_frequencies.concat([ just_below, note, just_above ]);
		}			
		
		//trace(this.test_frequencies);
		for (tf in this.test_frequencies) {
			trace(tf);
		}
	
		
		scriptProcessor.onaudioprocess = function(event:AudioProcessingEvent) {
			//trace('onaudioprocess');
			if (!recording) return;						
			//trace('recording');
			
			var channelData = event.inputBuffer.getChannelData(0);
			var slice = untyped __js__('Array.prototype.slice.call(channelData);');
			buffer = buffer.concat(slice);			
			
			
			//trace(event.inputBuffer.getChannelData(0));
			
			
			// untyped __js__(' buffer = buffer.concat(Array.prototype.slice.call(event.inputBuffer.getChannelData(0))); ');
			
			if (buffer.length > sample_length_milliseconds * audioContext.sampleRate / 1000) {
				//trace('stop recording');
				
				recording = false;
				
				this.correlationWorker.postMessage( {
					timeseries: buffer,
					test_frequencies: this.test_frequencies,
					sample_rate: audioContext.sampleRate											
				} );
				
				buffer = [];
				
				Timer.delay(function() recording = true, 250);
			}
			
		}
		
		return true;
	}		
	

	
	
}