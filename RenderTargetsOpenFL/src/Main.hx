package ;

import cx.flash.HandlespriteDelayed;
import flash.display.Sprite;
import flash.events.Event;
import flash.geom.Rectangle;
import flash.Lib;
import nx3.NBar;
import nx3.NPart;
import nx3.NVoice;
import nx3.QNote.QNote16;
import nx3.QVoice;
import nx3.action.SoundInteractivity;
import nx3.action.TestInteractivity;
import nx3.render.ITarget;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.scaling.TScaling;
import nx3.render.TargetSprite;
import nx3.test.Unittests;
import nx3.test.TestItems;
import nx3.test.TestRenderer;

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
		
		/*
		Unittests.performTests();
		
		var target = new TargetSprite(Scaling.SMALL);
		TestRenderer.testRenderP( new Renderer(target, 10, 80));
		this.addChild(target.getTargetSprite(0, 0));
		
		var target = new TargetSprite(Scaling.NORMAL);
		TestRenderer.testRenderP( new Renderer(target, 10, 80));
		this.addChild(target.getTargetSprite(200, 0));
		
		var target = new TargetSprite(Scaling.BIG);
		TestRenderer.testRenderP( new Renderer(target, 10, 80));
		this.addChild(target.getTargetSprite(600, 0));
		*/
		
		var hs:HandlespriteDelayed = new HandlespriteDelayed();
		hs.setSize(1350, 800);
		Lib.current.addChild(hs);		
		
		var targetHS = new TargetSprite(hs.getBackground(), Scaling.NORMAL);
		var rendererHS = new Renderer(targetHS, 0, 0);
		rendererHS.addInteraction( new TestInteractivity());
		rendererHS.addInteraction( new SoundInteractivity());
		
		hs.setRepaintCallback(function (x:Float, y:Float, width:Float, height:Float, background:Sprite)
		{			
			targetHS.clear();			
			background.graphics.clear();
			background.graphics.beginFill(0x0000FF, 0.1);
			background.graphics.drawRect(0, 0, width, height);					
		});
		
		hs.setRepaintDelayedCallback(function (x:Float, y:Float, width:Float, height:Float, background:Sprite)
		{
			targetHS.clear();
			var renderWidth =  Math.max(60, rendererHS.xToUnitX(width));
			rendererHS.renderScore(TestItems.scoreBachSinfonia4(), 0, 100, renderWidth);												
			//rendererHS.renderScore(TestItems.scoreTest1(), 0, 100, renderWidth);												
		}, 200);		
		
		
		
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
