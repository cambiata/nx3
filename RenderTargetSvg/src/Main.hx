package ;

import js.Lib;
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
			var target = new TargetSvg('#normal', Scaling.NORMAL);
			var testTarget = new TestTarget(target);
			testTarget.test();			
			
			var target = new TargetSvg('#big', Scaling.BIG);
			var testTarget = new TestTarget(target);
			testTarget.test();					
	}	
}