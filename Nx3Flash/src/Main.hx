package ;
import flash.display.Sprite;
import flash.Lib;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.TargetSprite;
import nx3.test.TestRenderer;
import nx3.test.Unittests;

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
		
		Unittests.performTests();
		
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
		
		var target = new TargetSprite(Scaling.BIG);
		TestRenderer.testRenderP(new Renderer(target, 10, 10));
		Lib.current.addChild(target.getTargetSprite());
		
		
	}
}