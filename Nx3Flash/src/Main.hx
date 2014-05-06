package ;
import cx.flash.Handlesprite;
import cx.flash.HandlespriteDelayed;
import flash.display.Sprite;
import flash.Lib;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.TargetSprite;
import nx3.test.TestItems;
import nx3.test.TestRenderer;
import nx3.test.Unittests;
using cx.ArrayTools;
/**
 * ...
 * @author ...
 */
class Main extends Sprite
{
	
	public static function main() 
	{
		new Main();
	}
	
	public function new()
	{
		super();
		
		//Unittests.performTests();
		
		
		
		
		//hs.setSize(800, 400);
		//hs.setPosition(300, 300);
			

		

		
		/*
		var target = new TargetSprite(Scaling.SMALL);
		TestRenderer.testRenderer( new Renderer(target, 10, 80));
		Lib.current.addChild(target.getTargetSprite(0, 0));
		
		var target = new TargetSprite(Scaling.NORMAL);
		TestRenderer.testRenderer( new Renderer(target, 10, 80));
		Lib.current.addChild(target.getTargetSprite(200, 0));
		
		var target = new TargetSprite(Scaling.BIG);
		TestRenderer.testRenderer( new Renderer(target, 10, 80));
		Lib.current.addChild(target.getTargetSprite(600, 0));
		*/
		
		/*
		var target = new TargetSprite(Scaling.BIG);
		var renderer = new Renderer(target, 10, 10);
		TestRenderer.testRenderP(renderer);
		Lib.current.addChild(target.getTargetSprite());
		*/
		
		
		
		var hs:HandlespriteDelayed = new HandlespriteDelayed();
		hs.setSize(800, 800);
		Lib.current.addChild(hs);		
		
		var targetHS = new TargetSprite(hs.getBackground(), Scaling.BIG);
		var rendererHS = new Renderer(targetHS, 0, 0);
		
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
			rendererHS.renderScore(TestItems.scoreTpl(), 0, 100, renderWidth);
			trace([width, rendererHS.xToUnitX(width)]);
		});		
		
		
		
		
		
	}
}