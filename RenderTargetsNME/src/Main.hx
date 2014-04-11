package ;

import neko.Lib;
import nx3.render.ITarget;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.TargetNmeBitmap;
import nx3.render.TestTarget;
import nx3.test.TestBars;

/**
 * ...
 * @author Jonas Nyström
 */

 		
 
class Main 
{	
	var render:TargetNmeBitmap;
	var renderBig:TargetNmeBitmap;
	var testTarget:TestTarget;
	static function main() 
	{
		var target = new TargetNmeBitmap(Scaling.SMALL);
		var r = new Renderer(target, 10, 100);
		r.renderBar(TestBars.testBar1(), 10, 80);				
		r.renderBar(TestBars.testBarSigns(), 10, 400);		
		target.saveBitmap('test-small.png');
		
		var target = new TargetNmeBitmap(Scaling.NORMAL);
		var r = new Renderer(target, 10, 100);
		r.renderBar(TestBars.testBar1(), 10, 80);				
		r.renderBar(TestBars.testBarSigns(), 10, 400);		
		target.saveBitmap('test-normal.png');
		
		var target = new TargetNmeBitmap(Scaling.BIG);
		var r = new Renderer(target, 10, 100);
		r.renderBar(TestBars.testBarPauses(), 10, 80);				
		r.renderBar(TestBars.testBarSigns(), 10, 400);		
		target.saveBitmap('test-big.png');
	}
}