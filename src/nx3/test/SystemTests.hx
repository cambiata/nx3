package nx3.test;
import haxe.unit.TestRunner;

/**
 * ...
 * @author Jonas Nyström
 */
class SystemTests
{

	static public function performTests() 
	{
		var runner = new  TestRunner(); 
		
		var start_time : Date = Date.now();
		
		runner.add(new TestNHead());
		runner.add(new TestNNote());
		runner.add(new TestNVoice());
		runner.add(new TestQSNote());
		//runner.add(new TestQ());
		//runner.add(new TestN());
		//runner.add(new TestQuickSyntax());
		//runner.add(new TestTargetSvgXml());
		//runner.add(new TestP());
		//runner.add(new TestPBars());
		//runner.add(new TestEvents());
		
		var end_time: Date = Date.now();
		var success = runner.run();		
		TestRunner.print('Testing time: ' + Std.int(end_time.getTime() - start_time.getTime()) + 'ms');
	}
	
}