package nx3.test;
import haxe.unit.TestCase;
import nx3.io.QuickSyntax;

/**
 * ...
 * @author Jonas Nyström
 */

 @:access(nx3.io.QuickSyntax)
class TestQuickSyntax extends TestCase
{

	public function testQuickNotes()
	{
		var str = 'c c1 c4. ^ c | c d e';
		var parser = new QuickSyntax(str);
		parser.parse1();
		this.assertTrue(true);
		
		//this.assertEquals(parser.tokens.length, 3);
	}
	
}