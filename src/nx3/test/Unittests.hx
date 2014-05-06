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
		
		var start_time : Date = Date.now();
		//runner.add(new TestQ());
		runner.add(new TestN());
		//runner.add(new TestV());
		//runner.add(new TestQuickSyntax());
		//runner.add(new TestTargetSvgXml());
		//runner.add(new TestP());
		runner.add(new TestPBars());
		
		var end_time: Date = Date.now();
		var success = runner.run();		
		TestRunner.print('Testing time: ' + Std.int(end_time.getTime() - start_time.getTime()) + 'ms');
	}
	
}