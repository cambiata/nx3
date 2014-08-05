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
	
		runner.add(new TestIterators());
		runner.add(new TestN());
		//runner.add(new TestP());
		//runner.add(new TestPBars());
	
		var success = runner.run();	
	}	
	/*
	static public function performTests() 
	{
		var runner = new  TestRunner(); 
		
<<<<<<< HEAD
		var start_time : Date = Date.now();
		//runner.add(new TestQ());
		
=======
		runner.add(new TestIterators());
>>>>>>> iterators
		runner.add(new TestN());
		//runner.add(new TestP());
		//runner.add(new TestPBars());		
		
		var success = runner.run();		
		
	}
	*/
}
