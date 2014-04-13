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
import nx3.test.BasicTests;
import nx3.test.TestItems;
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
		
		BasicTests.performTests();
		
		var target = new TargetOpenFl(Scaling.SMALL);
		var r = new Renderer(target, 10, 80);
		r.renderBar(TestItems.vbar1(), 10, 80);				
		r.renderBar(TestItems.vbarSigns(), 10, 400);					
		this.addChild(target.getTargetSprite(0, 0));
		target.textwidth('Hello');
		target.text(100, 100, 'Jonas');
		
		var target = new TargetOpenFl(Scaling.NORMAL);
		var r = new Renderer(target, 10, 80);
		r.renderBar(TestItems.vbar1());				
		r.renderBar(TestItems.vbarSigns(), 10, 400);		
		this.addChild(target.getTargetSprite(300, 0));
		
		var target = new TargetOpenFl(Scaling.BIG);
		var r = new Renderer(target, 10, 80);
		r.renderBar(TestItems.vbarPauses());			
		r.renderBar(TestItems.vbarSigns(), 10, 400);		
		this.addChild(target.getTargetSprite(600, 0));

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
