package nx3.test;
//import cx.EnumTools;
//import nx3.ESign;


import cx.FileTools;
import haxe.unit.TestCase;
import nx3.NBar;
import nx3.NPart;
import nx3.NVoice;
import nx3.QNote.QNote16;
import nx3.QVoice;
import nx3.VBar;
import nx3.xml.BarXML;


import nx3.EDirectionUAD;
import nx3.ENoteType;
import nx3.ENoteVal;
import nx3.ESign;
import nx3.NHead;
import nx3.NNote;
import nx3.xml.HeadXML;
import nx3.xml.NoteXML;


/**
 * ...
 * @author Jonas Nyström
 */
//class TestN extends  shohei909.nanotest.NanoTestCase
class TestN extends   TestCase 
{


	public function testHeadXml()
	{
			
		var item1 = new NHead(2, ESign.Flat);
		
		
		var xmlstr1= HeadXML.toXml(item1).toString();
		var item2 = HeadXML.fromXmlStr(xmlstr1);
		var xmlstr2 = HeadXML.toXml(item2).toString();
		this.assertEquals(Std.string(item1), Std.string(item2));
		this.assertEquals(xmlstr1, xmlstr2);
		
	}

	public function testNoteXml()
	{

		var item1 = new NNote([ new NHead(-3), new NHead(-2, ESign.Flat), new NHead(4, ESign.Natural), new NHead(1)], ENoteVal.Nv2dot, EDirectionUAD.Down);
		var xmlstr1= NoteXML.toXml(item1).toString();
		var item2 = NoteXML.fromXmlStr(xmlstr1);
		var xmlstr2 = NoteXML.toXml(item2).toString();
		this.assertEquals(Std.string(item1), Std.string(item2));
		this.assertEquals(xmlstr1, xmlstr2);		
		
		// verify head level sorting...
		this.assertEquals([ -3, -2, 1, 4].toString(), item1.getHeadLevels().toString());
	}
	
	public function testNoteXml2()
	{
		var item = new NNote(ENoteType.Pause(0), null, ENoteVal.Nv4);		
		this.assertEquals(Type.enumIndex(item.type), Type.enumIndex(ENoteType.Pause(0)));
		var item = new NNote(ENoteType.Lyric('Hello'), null, ENoteVal.Nv4);
		this.assertEquals(Type.enumIndex(item.type), Type.enumIndex(ENoteType.Lyric('hello')));
	}
	
	public function testBarXml()
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
		
		var nbar = vbar.nbar;
		var xmlStr = BarXML.toXml(nbar).toString();
		FileTools.putContent('bar.xml', xmlStr);
		var nbar2 = BarXML.fromXmlStr(xmlStr);
		var xmlStr2 = BarXML.toXml(nbar2).toString();
		this.assertEquals(xmlStr, xmlStr2);
		
		
	}
		
}