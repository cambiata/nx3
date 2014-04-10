package nx3.test;
import nx3.NBar;
import nx3.NPart;
import nx3.NVoice;
import nx3.QNote.QNote16;
import nx3.QVoice;
import nx3.VBar;

/**
 * ...
 * @author Jonas Nyström
 */
 
class TestBars
{
	static public function testBar1()
	{
		var vbar = new VBar(new NBar([
			new NPart([new QVoice([8, 8, 8, 8], [ -1, -2, 1, 1])]),
			new NPart([	
				new NVoice([
					new QNote16([ -1, 0]), new QNote16([ 0, 1 ], '#'),  new QNote16([ 1, 2 ]),  new QNote16([ 5, 7 ]),
					new QNote16([ 0, 1]), new QNote16([ 0, 2 ]),  new QNote16([ 0, 3 ]),  new QNote16([ 0, 2 ]),
					])
			]),
		]));				
		return vbar;				
	}	
}