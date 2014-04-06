package ;

import flash.display.Sprite;
import flash.events.Event;
import flash.Lib;
import nx3.render.IRenderer;
import nx3.render.ITarget;
import nx3.render.scaling.Scaling;
import nx3.render.scaling.TScaling;

#if (html5)
	import nx3.render.TargetSvg;
#else
	import nx3.render.TargetOpenFl;
#end

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
		
		var scaling:TScaling = Scaling.BIG;
		var render:ITarget;

		#if (html5)
			render = new TargetSvg('#main', scaling);
			test(render);
		#else
			render = new TargetOpenFl(null, scaling);
			this.stage.addChild(cast(render, TargetOpenFl).getTarget());
			test(render);
		#end
		
	}
	
	public function test(render:ITarget)
	{
		render.test();
		//render.testLines(10, 100, 500);
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
