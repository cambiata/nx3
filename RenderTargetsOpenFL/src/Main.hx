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

	public function new() 
	{
		super();	
		
		//Unittests.performTests();

		
		var nscore:NScore = TestItems.scoreBachSinfonia4();
		//var nscore:NScore = TestItems.scoreTest2().nscore;
		//var nscore:NScore = TestItems.getSystemYItems();
		//var nscore = TestItems.scoreTplChain();
		//var nscore = TestItems.scorePitchloafChain();
		var tss:TestscoreSprite = new TestscoreSprite(nscore, 100, 100, 1500, 800);
		Lib.current.addChild(tss);
	}
	
	public static function main() 
	{
		Lib.current.stage.align = flash.display.StageAlign.TOP_LEFT;
		Lib.current.stage.scaleMode = flash.display.StageScaleMode.NO_SCALE;
		Lib.current.addChild(new Main());
	}
}


class TestscoreSprite extends ResizeSprite
{
	var targetHS:nx3.render.TargetSprite;
	var rendererHS:nx3.render.Renderer;
	//var pscore:PScore;
	var scoresprite:Sprite;
	var nscore:NScore;
	
	public function new(nscore:NScore, x:Float = 100, y:Float = 100, width:Float = 300, height:Float = 100) {
		this.nscore = nscore;
		//this.pscore = new PScore(nscore);
		this.scoresprite = new Sprite();
		targetHS = new TargetSprite(this.scoresprite, Scaling.MID);
		rendererHS = new Renderer(targetHS, 0, 0);		
		super(x, y, width, height);
		this.addChild(this.scoresprite);
	}
	
	override public function redraw(w:Float, h:Float, sprite:Sprite)
	{
		this.targetHS.clear();		
		while (this.targetHS.getTargetSprite().numChildren > 0) this.targetHS.getTargetSprite().removeChildAt(0);
		
		var renderWidth =  Math.max(60, this.rendererHS.xToUnitX(w));
		this.rendererHS.renderScore(new PScore(this.nscore), 0, 0, renderWidth);			
		//this.rendererHS.testText();
	}
	
	override public function draw(w:Float, h:Float, sprite:Sprite) {}
}