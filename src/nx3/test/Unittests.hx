package nx3.test;
import haxe.unit.TestRunner;

/**
 * ...
 * @author Jonas Nyström
 */
class Unittests
{

	static public function performTests() 
	{
		var runner = new  TestRunner(); 
		
		runner.add(new TestNIterators());
		//runner.add(new TestN());
		
		var success = runner.run();		
		
	}
	
}