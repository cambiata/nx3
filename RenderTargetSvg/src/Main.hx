package ;

import js.Lib;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.TargetSvg;
import nx3.render.TestTarget;

/**
 * ...
 * @author Jonas Nyström
 */

class Main 
{	
	static function main() 
	{
			var target = new TargetSvg('#small', Scaling.SMALL);
			var testTarget = new TestTarget(target);
			testTarget.test();						
			var r = new Renderer(target, 10, 240);
			r.renderBar(r.getTestVBar());				
		
		var target = new TargetSvg('#normal', Scaling.NORMAL);
			var testTarget = new TestTarget(target);
			testTarget.test();						
			var r = new Renderer(target, 10, 240);
			r.renderBar(r.getTestVBar());				
			
			var target = new TargetSvg('#big', Scaling.BIG);
			var testTarget = new TestTarget(target);
			testTarget.test();								
			var r = new Renderer(target, 10, 240);
			r.renderBar(r.getTestVBar());			
	}	
}