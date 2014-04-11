package nx3.test;
import haxe.unit.TestRunner;

/**
 * ...
 * @author Jonas Nyström
 */
class BasicTests
{

	static public function performTests() 
	{
		var runner = new  TestRunner(); 
		runner.add(new TestQ());
		runner.add(new TestN());
		runner.add(new TestV());
		var success = runner.run();		
	}
	
}