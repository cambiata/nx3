package ;

import cx.ByteArrayTools;
import flash.display.Sprite;
import flash.events.Event;
import flash.Lib;
import nx3.audio.PlayerFactory;
import nx3.audio.WavConcatenator;
import openfl.Assets;
import openfl.media.Sound;
import openfl.net.URLRequest;
import openfl.utils.ByteArray;
import thx.core.Tuple;

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
	}
	
	function init() 
	{
		if (inited) return;
		inited = true;
		
		var pf = new PlayerFactory();		
		var wc = new WavConcatenator();
		
		var notes:Array<Tuple2<Int, Int>> = [];		
		notes.push(new Tuple2(48, 4000));
		notes.push(new Tuple2(48, 2000));
		notes.push(new Tuple2(48, 2000));		
		var wav = wc.getWav(notes);		
		var play = pf.getPlayFunction(wav);
		play();

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
