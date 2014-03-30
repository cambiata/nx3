package ;

import haxe.unit.TestCase;
import haxe.unit.TestRunner;
import nx3.test.TestN;
import nx3.test.TestQ;
import nx3.test.TestV;

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

	
