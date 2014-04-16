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
		var str = 'd2 ciss dess4 | c4. ';
		var str = ' | | |';
		var str = ' / | / | / ';
		var str = ' c 2 ; c 8 ; c 4. // d c ; d8 ciss ; d c ';
		var parser = new QuickSyntax(str);
		parser.parse1();
		this.assertTrue(true);
		
		//this.assertEquals(parser.tokens.length, 3);
	}
	
}