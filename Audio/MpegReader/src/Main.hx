package ;

import cx.ArrayTools;
import cx.FileTools;
import flash.display.Sprite;
import flash.events.Event;
import flash.Lib;
import haxe.io.BytesInput;
import haxe.io.Input;
import mpeg.audio.MpegAudio;
import mpeg.audio.MpegAudioReader;

/**
 * ...
 * @author Jonas Nyström
 */

class Main extends Sprite 
{
	var inited:Bool;

	/* ENTRY POINT */
	
	function resize(e) 
	{
		if (!inited) init();
		// else (resize or orientation change)
	}
	
	function init() 
	{
		if (inited) return;
		inited = true;

		// (your code here)
		
		// Stage:
		// stage.stageWidth x stage.stageHeight @ stage.dpiScale
		
		// Assets:
		// nme.Assets.getBitmapData("img/assetname.jpg");
		
		//FileTools.getBytes('test.mp3');
		var input = new BytesInput(FileTools.getBytes('test.mp3'));
		var reader = new MpegAudioReader(input);
		var audio:MpegAudio = reader.readAll();
		trace(ArrayTools.fromIterables(audio.frames).length);
		
	}

	/* SETUP */

	public function new() 
	{
		super();	
		addEventListener(Event.ADDED_TO_STAGE, added);
	}

	function added(e) 
	{
		removeEventListener(Event.ADDED_TO_STAGE, added);
		stage.addEventListener(Event.RESIZE, resize);
		#if ios
		haxe.Timer.delay(init, 100); // iOS 6
		#else
		init();
		#end
	}
	
	public static function main() 
	{
		// static entry point
		Lib.current.stage.align = flash.display.StageAlign.TOP_LEFT;
		Lib.current.stage.scaleMode = flash.display.StageScaleMode.NO_SCALE;
		Lib.current.addChild(new Main());
	}
}
