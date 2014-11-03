package;

import audio.flash.display.Wav16IntsSprite;
import audio.flash.display.WavSprite;
import audio.WavTools;
import cx.ByteArrayTools;
import flash.net.URLRequest;
import openfl.display.Sprite;
import openfl.events.Event;
import openfl.events.SampleDataEvent;
import openfl.media.Sound;
import openfl.net.URLLoader;
import openfl.net.URLLoaderDataFormat;
import openfl.utils.ByteArray;

/**
 * ...
 * @author Jonas Nyström
 */

class Main  extends Sprite
{
	public function new() 
	{
		super();


		var christ = WavTools.getIntsFromWavFile(openfl.Assets.getBytes("assets/christ.wavdata"))[0];
		
		var ws = new Wav16IntsSprite(christ, null, true);
		this.addChild(ws);	
		
		//var leftInts = ws.getInts()[0];		
		//var ba:ByteArray = ByteArrayTools.fromBytes(WavTools.intsToMono16Bytes(leftInts));
		
		var intsSt = WavTools.dspSubset(christ, christ.length - 20000);
		var wsSt = new Wav16IntsSprite(intsSt, null, true);
		this.addChild(wsSt);
		wsSt.x = 300;
		
		var fyr = WavTools.getIntsFromWavFile( openfl.Assets.getBytes("assets/fyr.wavdata"))[0];
		
		//var mix = WavTools.dspMix(christ, fyr, 20000);
		var cross = WavTools.dspCrossfade(christ, fyr, 50000);
		
		var s:Sound = new Sound();		
		s.loadPCMFromByteArray(WavTools.intsToMono16ByteArray(cross), cross.length, 'short', false);
		
		var ch = s.play();
		trace(s.length);		
		
		
	}
	
	
	
	
}
