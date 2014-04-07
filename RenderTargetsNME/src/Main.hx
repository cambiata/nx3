package ;

import neko.Lib;
import nx3.render.ITarget;
import nx3.render.scaling.Scaling;
import nx3.render.TargetNmeBitmap;
import nx3.render.TestTarget;

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
		var render = new TargetNmeBitmap(Scaling.BIG);				
		var testTarget = new TestTarget(render);
		testTarget.test();
		render.saveBitmap('test.png');
	}
}