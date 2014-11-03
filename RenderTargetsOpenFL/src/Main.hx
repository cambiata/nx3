package ;

import cx.flash.HandlespriteDelayed;
import cx.flash.ResizeSprite;
import flash.display.Sprite;
import flash.events.Event;
import flash.geom.Rectangle;
import flash.Lib;
import haxe.Serializer;
import haxe.Unserializer;
import nx3.NBar;
import nx3.NPart;
import nx3.NScore;
import nx3.NVoice;
import nx3.PScore;
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
import nx3.xml.ScoreXML;


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
		
		var nscore:NScore = TestItems.scoreBachSinfonia4();
		#if (neko)
			File.saveContent('bach.xml', ScoreXML.toXml(nscore).toString());
			Serializer.USE_CACHE = true;
			File.saveContent('bach.data', Serializer.run(nscore));
			nscore = Unserializer.run(File.getContent('bach.data'));
		#end
		
		var pscore:PScore = new PScore(nscore);
		
		var hs:HandlespriteDelayed = new HandlespriteDelayed();
		hs.setSize(1350, 800);
		
		
		
		//var rs:TestscoreSprite = new TestscoreSprite(100, 100, 1350, 800);
		
		
		Lib.current.addChild(hs);		
		//Lib.current.addChild(rs);
		
		var targetHS = new TargetSprite(hs.getBackground(), Scaling.NORMAL);
		//var targetHS = new TargetSprite(rs, Scaling.NORMAL);
		var rendererHS = new Renderer(targetHS, 0, 0);
		//rendererHS.addInteraction( new TestInteractivity());
		//rendererHS.addInteraction( new SoundInteractivity());
		
		
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
			rendererHS.renderScore(pscore, 0, 100, renderWidth);												
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


class TestscoreSprite extends ResizeSprite
{
	var targetHS:nx3.render.TargetSprite;
	var rendererHS:nx3.render.Renderer;
	var pscore:PScore;
	
	var scoresprite:Sprite;
	
	public function new(x:Float = 100, y:Float = 100, width:Float = 300, height:Float = 100) {
		
		
		var nscore:NScore = TestItems.scoreBachSinfonia4();
		this.pscore = new PScore(nscore);
		
		this.scoresprite = new Sprite();
		targetHS = new TargetSprite(this.scoresprite, Scaling.NORMAL);
		rendererHS = new Renderer(targetHS, 0, 0);		
		

		super(x, y, width, height);
		this.addChild(this.scoresprite);
		
		
	}
	
	override public function redraw(w:Float, h:Float, sprite:Sprite)
	{
		this.targetHS.clear();		
		var renderWidth =  Math.max(60, this.rendererHS.xToUnitX(w));
		this.rendererHS.renderScore(pscore, 0, 100, renderWidth);			
	}
}