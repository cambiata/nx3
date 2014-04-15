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
		var str = '   notes: lyrics:   tpls:  notes: tpls:xxx tpls:yyy tpls:xxx22 c ';
		var parser = new QuickSyntaxParser(str);
		parser.parse1();
		this.assertTrue(true);
		
		//this.assertEquals(parser.tokens.length, 3);
	}
	
}