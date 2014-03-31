package nx3.test;
import haxe.unit.TestRunner;

/**
 * ...
 * @author ...
 */
class MainFlash
{

	public static function main() 
	{
		var runner = new  TestRunner(); 
		runner.add(new TestQ());
		runner.add(new TestN());
		runner.add(new TestV());
		runner.add(new TestVRender());
		/*
		*/
		var success = runner.run();		
	}
	
}