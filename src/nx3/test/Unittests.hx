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
	
		//runner.add(new TestIterators());
		runner.add(new TestN());
		//runner.add(new TestLazy());
		//runner.add(new TestEvents());
		
		runner.add(new TestSound());
		
		//runner.add(new TestP());
		runner.add(new TestPBars());
	
		var success = runner.run();	
	}	

}
