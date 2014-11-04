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
	
		var chri = WavTools.dspSubset(christ, 0, 60000);
		var wsChri = new Wav16IntsSprite(chri, null, true);
		this.addChild(wsChri);
		
		var st = WavTools.dspSubset(christ, christ.length - 20000);
		var wsSt = new Wav16IntsSprite(st, null, true);
		this.addChild(wsSt);
		wsSt.y = 300;
		
		//var st = WavTools.dspSubset(christ, 
		//var fyr = WavTools.getIntsFromWavFile( openfl.Assets.getBytes("assets/fyr.wavdata"))[0];		
		//var mix = WavTools.dspMix(christ, fyr, 20000);
		
		var cross = WavTools.dspCrossfade(chri, st, 1000);
		
		var s:Sound = new Sound();		
		s.loadPCMFromByteArray(WavTools.intsToMono16ByteArray(cross), cross.length, 'short', false);
		
		var ch = s.play();
		trace(s.length);		
		
		
	}
	
	
	
	
}
