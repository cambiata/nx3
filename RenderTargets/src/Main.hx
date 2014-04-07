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
		
		var render:ITarget;
		var renderBig:ITarget;
	
		#if (html5)
			render = new TargetSvg('#main', Scaling.NORMAL);
			test(render);
			renderBig = new  TargetSvg('#big', Scaling.BIG);
			test(renderBig);
		#else
			render = new TargetOpenFl(null, Scaling.NORMAL);
			test(render);
			renderBig = new TargetOpenFl(null, Scaling.BIG);
			test(renderBig);
			this.stage.addChild(cast(render, TargetOpenFl).getTarget());
			var sBig  = cast(renderBig, TargetOpenFl).getTarget();
			sBig.x = 400;
			this.stage.addChild(sBig);
		#end
		
	}
	
	public function test(render:ITarget)
	{
		render.testLines(0, 0, 200);
		render.testSymbol(20,0);
		
		render.testLines(0, 100, 200);
		render.testSymbol(20, 100);		
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
