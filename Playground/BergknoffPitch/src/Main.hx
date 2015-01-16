package;

import js.Browser;
import js.html.audio.AudioBuffer;
import js.html.audio.AudioContext;
import js.html.Event;
import js.html.rtc.LocalMediaStream;
import js.html.rtc.NavigatorUserMediaError;
import js.html.rtc.NavigatorUserMediaErrorCallback;
import js.html.rtc.NavigatorUserMediaSuccessCallback;
import js.html.Worker;
import js.Lib;

/**
 * ...
 * @author 
 */

class Main 
{
	
	static function main() 
	{
		
		Browser.window.addEventListener('load', function(e) {
			new  Pitch();
		});
	}
	
}

class Pitch {
	var correlationWorker:Worker;
	public function new() {
			trace('pitch');
			
			this.correlationWorker = new Worker('correlation_worker.js');
			this.correlationWorker.addEventListener('message', interpretCorrelationResult);
			
			
	}
	
	function initalize() {
		var getUserMedia = Browser.navigator.getUserMedia;
		if (getUserMedia == null) Lib.alert('Device has no navigator.getUserMedia method');
		
		getUserMedia( { audio:true }, useStream, streamError);
		 
	}
	
	function streamError(error:NavigatorUserMediaError) : Bool
	{
		return false;
	}
	
	// LocalMediaStream -> Bool
	function useStream(stream: LocalMediaStream): Bool {
		
		var audioContext = new AudioContext();
		var microphone = audioContext.createMediaStreamSource(stream);
		var scriptProcessor = audioContext.createScriptProcessor(1024, 1, 1);
		scriptProcessor.connect(audioContext.destination, 0, 0);
		microphone.connect(scriptProcessor, 0, 0);
		
		var buffer = []; // :AudioBuffer = [];
	
		var sampleLengthMs = 100;
		var recording = true;
		
		scriptProcessor.onaudioprocess = onAudioProcess;
		
		
		return true;
	}
	
	function onAudioProcess(e:Event) {
		
		
	}
	

	function interpretCorrelationResult(e:Event):Void 
	{
		
	}
	
	
}