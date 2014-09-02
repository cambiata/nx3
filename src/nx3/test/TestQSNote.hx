package nx3.test;

import haxe.unit.TestCase;
import nx3.qs.QSNote;
using cx.ArrayTools;

/**
 * TestQSNote
 * @author Jonas Nyström
 */

 @:access(nx3.qs.QSNote)
class TestQSNote extends TestCase 
{

	public function test1()
	{
		var qn = new QSNote('a');
		this.assertEquals(qn.modestr, '');
		this.assertEquals(qn.mode, QSNotemode.NotePause);
		this.assertEquals(qn.qsstring, 'a');
		
		var qn = new QSNote('lyr:a');
		this.assertEquals(qn.mode, QSNotemode.Lyric);
		this.assertEquals(qn.qsstring, 'a');
		
		var qn = new QSNote('a');
		this.assertEquals(qn.mode, QSNotemode.NotePause);
		this.assertEquals(qn.headstrings.toString(), ['a'].toString());		
		var qn = new QSNote('a,b');
		this.assertEquals(qn.headstrings.toString(), ['a', 'b'].toString());		
		var qn = new QSNote('a , b');
		this.assertEquals(qn.headstrings.toString(), ['a', 'b'].toString());		
	}
	
	
	
	
}