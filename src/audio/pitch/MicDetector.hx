package audio.pitch;

/**
 * MicDetector
 * @author Jonas Nyström
 */

 import flash.utils.ByteArray;
class MicDetector 
{
	var mic : flash.media.Microphone;
	public function new() 
	{
		initMic();
	}
	
	public  function debug(message) {

		trace(message);
	}

	public  function initMic(index=-1) {
		if(micAllowed) {
			debug("Initializing mic: " + index);
		}
		if(mic != null) {
			try {
				mic.removeEventListener(flash.events.SampleDataEvent.SAMPLE_DATA, micSampleDataHandler);
				mic.removeEventListener(flash.events.StatusEvent.STATUS, micStatusHandler);
			} catch(e : Dynamic) {
			}
		}
		mic = flash.media.Microphone.getMicrophone(index);
		if (mic != null) {
			mic.setLoopBack(false);
			mic.rate = Std.int(44);
			mic.setSilenceLevel(0);
			mic.gain = 100;
			mic.setUseEchoSuppression(false);
			mic.addEventListener(flash.events.SampleDataEvent.SAMPLE_DATA, micSampleDataHandler);
			mic.addEventListener(flash.events.StatusEvent.STATUS, micStatusHandler);
        } else {
			getMicFailed();
		}
	}

	public  function getMicFailed() {
		debug("Failed to access a microphone.");
	}

	var micAllowed = false;

	public  function micStatusHandler(e) {
		if(e.code == "Microphone.Muted") {
			getMicFailed();
		} else if(e.code == "Microphone.Unmuted") {
			micAllowed = true;
			
			/*
			try {
				flash.external.ExternalInterface.call("hide_timber_flash");
			} catch(e : Dynamic) {
				debug("ERROR: " + e);
			}
			try {
				flash.external.ExternalInterface.call(callbacks.get("MIC_OK"));
			} catch(e : Dynamic) {
				debug("ERROR: " + e);
			}
			*/
		} else {
			debug("Mic status: " + e.code);
		}
	}

	public  function setMicrophone(i) {
		initMic(i);
	}	
	
	public  function micSampleDataHandler(e) {		
		this.detect(e.data);				
	}	
	
	public dynamic function detect(data:ByteArray, position:Int = 0):UInt
	{
		
		return 0;
	}
	
	
}