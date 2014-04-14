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
		runner.add(new TestQ());
		runner.add(new TestN());
		runner.add(new TestV());
		runner.add(new TestQuickSyntax());
		var success = runner.run();		
	}
	
}