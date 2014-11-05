package;

import audio.flash.display.Wav16IntsSprite;
import audio.flash.display.WavSprite;
import audio.pitch.Audio;
import audio.pitch.MicDetector;
import audio.pitch.PitchDetector;
import audio.pitch.PitchUtils;
import audio.WavTools;
import cx.ByteArrayTools;
import flash.net.URLRequest;
import openfl.Assets;
import openfl.display.Sprite;
import openfl.events.Event;
import openfl.events.SampleDataEvent;
import openfl.media.Sound;
import openfl.net.URLLoader;
import openfl.net.URLLoaderDataFormat;
import openfl.utils.ByteArray;
import thx.core.Floats;

/**
 * ...
 * @author Jonas Nyström
 */

class Main  extends Sprite
{
	public function new() 
	{
		super();

		/*
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
		*/
		/*
		var s:Sound = new Sound();		
		s.loadPCMFromByteArray(WavTools.intsToMono16ByteArray(cross), cross.length, 'short', false);		
		var ch = s.play();
		trace(s.length);		
		*/
		
		
		var pitchtest = WavTools.getIntsFromWavFile(openfl.Assets.getBytes("assets/pitchtest.wavdata"))[0];
		//var wav = Assets.getBytes("assets/christ.wavdata");
		var shorts = WavTools.arrayIntsToByteArrayShorts(pitchtest);
		var floats = WavTools.soundShortsToFloats(shorts);

		/*
		var pd:PitchDetector = new PitchDetector();
		var pss = pd.getPitchSamples(floats);
		trace(pss.length);
		
		
		var gr = this.graphics;
		
		
		
		for (ps in pss)
		{
			var psy = 200 - (ps.note * 10) ;
			var psx = ps.time * 100;
			var psw = ps.length * 100;
			
			if (ps.note > 0) gr.lineStyle(3, 0xFF0000) else gr.lineStyle(3, 0xaaaaaa);
			
			trace(ps.note, ps.time, ps.length);
			gr.drawCircle(psx, psy, 5);
			gr.moveTo(psx, psy);
			gr.lineTo(psx + psw, psy);
			//gr.lineTo(ps.time + ps.length * 100, ps.note * 10);
		}
		*/
		
		var pd:PitchDetector = new PitchDetector(true);
		var md:MicDetector = new MicDetector();
		md.detect = pd.detect;

		//var currentTime
		//var startTime = 
		var gr = this.graphics;
		
		pd.detectFrequency = function(frequency:Float, amplitude:Float, time:Float) {
			trace(frequency);
			PitchUtils.drawPitch(gr, frequency, amplitude, time);
		}
		
	}
	
	
	
	
}
