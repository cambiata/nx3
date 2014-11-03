package;

import audio.flash.WaveEncoder;
import audio.WavTools;
import flash.display.StageAlign;
import flash.display.StageScaleMode;
import flash.events.Event;
import flash.Lib;
import flash.media.Sound;
import flash.net.FileReference;
import flash.utils.ByteArray;

/**
 * ...
 * @author Jonas Nyström
 */

 
 @:file("mix.mp3") class WaveData extends ByteArray {}
class Main 
{
	
	static function main() 
	{
		var waveData:WaveData = new WaveData();
		trace(waveData.length);
		var s = new Sound();

		s.loadCompressedDataFromByteArray(waveData, waveData.length);
		var floats = new ByteArray();
		s.extract(floats, 1000000000);
		trace(floats.length);
		
		var shorts = WavTools.soundFloatsToShorts(floats);
		trace(shorts.length);
		
		var floats2 = WavTools.soundShortsToFloats(shorts);
		trace(floats2.length);
		
		var we:WaveEncoder = new WaveEncoder(1);
		var wave = we.encode(floats2);
		trace(wave.length);
		var f = new FileReference();
		f.save(wave, 'tjuv5.wav');		
		
		
	}
	
}