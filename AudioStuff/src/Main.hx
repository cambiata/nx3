package;

import audio.flash.PCMFormat;
import audio.flash.SoundFactory;
import audio.flash.SWFFormat;
import audio.flash.WaveEncoder;
import cx.ByteArrayTools;
import cx.TimerTools;
import flash.display.StageAlign;
import flash.display.StageScaleMode;
import flash.Lib;
import flash.media.Sound;
import flash.net.FileReference;
import flash.utils.ByteArray;
import format.wav.Reader;
import haxe.io.BytesInput;
import nx3.audio.PlayerFactory;

/**
 * ...
 * @author 
 */
@:file("test.data") class WavData extends ByteArray {}
class Main 
{
	
	static function main() 
	{
		var stage = Lib.current.stage;
		stage.scaleMode = StageScaleMode.NO_SCALE;
		stage.align = StageAlign.TOP_LEFT;
		// entry point
		var data = new WavData();
		data.position = 0;
		trace(data.length);
		var wave = new Reader(new BytesInput(ByteArrayTools.toBytes(data))).read();
		var wdata = wave.data;
		trace(wdata.length);
		
		//var player = new PlayerFactory();
		//player.getWavSoundPlay(ByteArrayTools.fromBytes(wave.data));
		/*
		PCMFormat
		var swf : SWFFormat = new SWFFormat(PCMFormat.mono16format(wav.length));
		var compiledSWF : ByteArray = swf.compileSWF(wav);
		var compiledSWFLoader : Loader = new Loader();
		compiledSWFLoader.loadBytes(compiledSWF);
		compiledSWFLoader.contentLoaderInfo.addEventListener(Event.COMPLETE, function(e:Event) {
			var loaderInfo:LoaderInfo = cast(e.target, LoaderInfo);        
			var definition = loaderInfo.applicationDomain.getDefinition(SWFFormat.CLASS_NAME);
			var instance = Type.createInstance(definition, []);
			var sound:Sound = cast instance;							
			resolve(sound);
		});	   
		*/
		
		var getSound = SoundFactory.getSound(data, PCMFormat.mono16format(data.length));
		TimerTools.delay(function() {
			var sound = getSound();
			var ba:ByteArray = new ByteArray();
			sound.extract(ba, 1000000);
			trace(ba.length);

			
			ba.position = 0;
			for (i in 0...40) {
				var val:Float = ba.readFloat();
				trace([i, val]);
			}
			
			
			var wave2:ByteArray = new WaveEncoder().encode(ba);
			var fr:FileReference = new FileReference();
			fr.save(wave2, 'encoded.wav');
			
			
			
		}, 500);
		
	}
	
}