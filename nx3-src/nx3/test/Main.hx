package nx3.test;

import haxe.unit.TestCase;
import haxe.unit.TestRunner;


/**
 * ...
 * @author Jonas Nyström
 */


 
class Main
{
	static public function main() 
	{
		var runner = new  TestRunner(); 
		runner.add(new TestQ());
		runner.add(new TestN());
		runner.add(new TestV());
		var success = runner.run();
	}
}

	
