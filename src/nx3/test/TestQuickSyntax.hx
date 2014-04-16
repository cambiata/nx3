package nx3.test;
import haxe.unit.TestCase;
import nx3.qs.QuickSyntaxParser;
import nx3.qs.QuickSyntaxBuilder;

/**
 * ...
 * @author Jonas Nyström
 */
using cx.ArrayTools;

 @:access(nx3.qs.QuickSyntaxParser)
class TestQuickSyntax extends TestCase
{
	public function testQuickNotes()
	{
		var str = 'c c1 c4. ^ c | c d e';
		var str = 'd2 ciss dess4 | c4. ';
		var str = ' | | |';
		var str = ' / | / | / ';
		var str = ' c 2 ; c 8 ; c 4. // d c ; d8 ciss ; d c ';
		var str = ' c d % d  / d ';
		var parser = new QuickSyntaxParser(str);
		var qsnotes = parser.parseToQSyntaxNotes();
		var builder = new QuickSyntaxBuilder(qsnotes);
		var nbars = builder.getNBars();
		this.assertEquals(nbars.length, 1);
		this.assertEquals(nbars.first().nparts.length, 2);
		this.assertEquals(nbars.first().nparts.first().nvoices.first().nnotes.length, 2);
		//this.assertEquals(parser.tokens.length, 3);
	}
	
}