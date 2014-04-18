package nx3.test;
import haxe.unit.TestCase;
import nx3.ESign;
import nx3.NBars;
import nx3.qs.QSyntaxTools;
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
	public function testQS1()
	{

		
		var qcode = 'b';
		var nbars = this.getNBars(qcode);
		this.assertEquals(nbars.length, 1);
		var nnote0 = nbars.first().nparts.first().nvoices.first().nnotes.first();
		this.assertEquals(nnote0.nheads.first().level, 0);
		this.assertEquals(nnote0.nheads.first().sign, ESign.None);
		
		var qcode = 'b#';
		var nbars = this.getNBars(qcode);
		var nnote0 = nbars.first().nparts.first().nvoices.first().nnotes.first();
		this.assertEquals(nnote0.nheads.first().level, 0);
		this.assertEquals(nnote0.nheads.first().sign, ESign.Sharp);

		var qcode = 'bB';
		var nbars = this.getNBars(qcode);
		var nnote0 = nbars.first().nparts.first().nvoices.first().nnotes.first();
		this.assertEquals(nnote0.nheads.first().level, 0);
		this.assertEquals(nnote0.nheads.first().sign, ESign.Flat);		

		var qcode = 'c#';
		var nbars = this.getNBars(qcode);
		var nnote0 = nbars.first().nparts.first().nvoices.first().nnotes.first();
		this.assertEquals(nnote0.nheads.first().level, 6);
		this.assertEquals(nnote0.nheads.first().sign, ESign.Sharp);		
	
		var qcode = 'cb';
		var nbars = this.getNBars(qcode);
		var nnote0 = nbars.first().nparts.first().nvoices.first().nnotes.first();
		this.assertEquals(nnote0.nheads.length, 2);
		this.assertEquals(nnote0.nheads.first().level, 0);
		this.assertEquals(nnote0.nheads.first().sign, ESign.None);
		this.assertEquals(nnote0.nheads.second().level, 6);
		this.assertEquals(nnote0.nheads.second().sign, ESign.None);		
		
		var qcode = 'cNb#';
		var nbars = this.getNBars(qcode);
		var nnote0 = nbars.first().nparts.first().nvoices.first().nnotes.first();
		this.assertEquals(nnote0.nheads.length, 2);
		this.assertEquals(nnote0.nheads.first().level, 0);
		this.assertEquals(nnote0.nheads.first().sign, ESign.Sharp);
		this.assertEquals(nnote0.nheads.second().level, 6);
		this.assertEquals(nnote0.nheads.second().sign, ESign.Natural);		

		var qcode = '+c';
		var nbars = this.getNBars(qcode);
		var nnote0 = nbars.first().nparts.first().nvoices.first().nnotes.first();
		this.assertEquals(nnote0.nheads.first().level, -1);

		
		var qcode = '+ c';
		var nbars = this.getNBars(qcode);
		var nnote0 = nbars.first().nparts.first().nvoices.first().nnotes.first();
		this.assertEquals(nbars.first().nparts.first().nvoices.first().nnotes.length, 1);
		this.assertEquals(nnote0.nheads.first().level, -1);
		
		var qcode = '+c d';
		var nbars = this.getNBars(qcode);
		var nnote0 = nbars.first().nparts.first().nvoices.first().nnotes.first();
		var nnote1 = nbars.first().nparts.first().nvoices.first().nnotes.second();
		this.assertEquals(nnote0.nheads.first().level, -1);
		this.assertEquals(nnote1.nheads.first().level, -2);
		
		var qcode = 'c + d';
		var nbars = this.getNBars(qcode);
		var nnote0 = nbars.first().nparts.first().nvoices.first().nnotes.first();
		var nnote1 = nbars.first().nparts.first().nvoices.first().nnotes.second();
		this.assertEquals(nnote0.nheads.first().level, 6);
		this.assertEquals(nnote1.nheads.first().level, -2);
		
		
	}
	
	public function testQSComment()
	{
			var code = ' Hej hopp /* i lingonskogen */ i stugan där vi ska /* ha sju */ dricka kaffe.';
			var code2 = QSyntaxTools.removeComments(code);
			
			var code = ' a  b c  d   e   f      g    ';
			var code2 = QSyntaxTools.removeSpaces(code);
		this.assertTrue(true);
		
	}
	
	/*
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
	*/
	function getNBars(qcode:String):NBars
	{
		var parser = new QuickSyntaxParser(qcode);
		var qsnotes = parser.parseToQSyntaxNotes();
		var builder = new QuickSyntaxBuilder(qsnotes);
		var nbars = builder.getNBars();
		return nbars;
	}
	
}