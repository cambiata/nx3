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
		var runner = new TestRunner();
	
		
		//runner.add(new TestN());
		//runner.add(new TestSound());
		runner.add(new TestP());
		//runner.add(new TestPBars());
	
		var success = runner.run();	
	}	

}
