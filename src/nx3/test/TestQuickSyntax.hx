package nx3.test;
import haxe.unit.TestCase;
import nx3.io.QuickSyntaxParser;

/**
 * ...
 * @author Jonas Nyström
 */

 @:access(nx3.io.QuickSyntaxParser)
class TestQuickSyntax extends TestCase
{

	public function testQuickNotes()
	{
		var str = '     c d8 e       f16 g   e  d';
		var parser = new QuickSyntaxParser(str);
		parser.parse1();
		this.assertEquals(parser.tokens.length, 7);
	}
	
}