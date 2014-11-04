package;

import cx.ByteArrayTools;
import flash.display.StageAlign;
import flash.display.StageScaleMode;
import flash.Lib;
import flash.utils.ByteArray;
import format.wav.Reader;
import haxe.io.BytesInput;

/**
 * ...
 * @author 
 */
@:file("test.wav") class WavData extends ByteArray {}
class Main 
{
	
	static function main() 
	{
		var stage = Lib.current.stage;
		stage.scaleMode = StageScaleMode.NO_SCALE;
		stage.align = StageAlign.TOP_LEFT;
		// entry point
		var wave = new Reader(new BytesInput(ByteArrayTools.toBytes(new WavData()))).read();
		var data = wave.data;
		
	}
	
}