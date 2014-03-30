package ;
import haxe.unit.TestRunner;
import nx3.test.TestN;
import nx3.test.TestQ;
import nx3.test.TestV;
import nx3.test.TestVRender;

/**
 * ...
 * @author ...
 */
class Main
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