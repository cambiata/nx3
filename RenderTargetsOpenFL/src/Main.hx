package ;

import flash.display.Sprite;
import flash.events.Event;
import flash.Lib;
import nx3.NBar;
import nx3.NPart;
import nx3.NVoice;
import nx3.QNote.QNote16;
import nx3.QVoice;
import nx3.render.IRenderer;
import nx3.render.ITarget;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.scaling.TScaling;
import nx3.render.TestTarget;
import nx3.VBar;

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

		var target = new TargetOpenFl(null, Scaling.NORMAL);
		var testTarget = new TestTarget(target);
		testTarget.test();		
		var s = target.getTarget();
		this.stage.addChild(s);

		var target = new TargetOpenFl(null, Scaling.BIG);
		var testTarget = new TestTarget(target);
		testTarget.test();		
		var s = target.getTarget();
		s.x = 300;
		this.stage.addChild(s);		
		
			var r = new Renderer(target, 200, 200);
		r.renderBar(r.getTestVBar());	

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
