package nx3.test;

import haxe.unit.TestCase;
import nx3.ENoteType;
import nx3.ENoteVal;
import nx3.ESign;
import nx3.NHead;
import nx3.NNote;
import nx3.xml.NoteXML;

/**
 * TestNNote
 * @author Jonas Nyström
 */
class TestNNote extends TestCase 
{

	public function testNoteXml()
	{

		var item1 = new NNote([ new NHead(-3), new NHead(-2, ESign.Flat), new NHead(4, ESign.Natural), new NHead(1)], ENoteVal.Nv2dot, EDirectionUAD.Down);
		var xmlstr1= NoteXML.toXml(item1).toString();
		var item2 = NoteXML.fromXmlStr(xmlstr1);
		var xmlstr2 = NoteXML.toXml(item2).toString();
		//this.assertEquals(Std.string(item1), Std.string(item2));
		this.assertEquals(xmlstr1, xmlstr2);		
		
		// verify head level sorting...
		this.assertEquals([ -3, -2, 1, 4].toString(), item1.getHeadLevels().toString());
	}
	
	public function testNotePause()
	{
		var note = new NNote(ENoteType.Pause(1), ENoteVal.Nv4);
		var xmlStr = NoteXML.toXml(note).toString();	
		var note2 = NoteXML.fromXmlStr(xmlStr);		
		var xmlStr2 = NoteXML.toXml(note2).toString();
		this.assertEquals(xmlStr, xmlStr2);
	}
	
	public function testNoteXml2()
	{
		var item = new NNote(ENoteType.Pause(0), null, ENoteVal.Nv4);		
		this.assertEquals(Type.enumIndex(item.type), Type.enumIndex(ENoteType.Pause(0)));
		var item = new NNote(ENoteType.Lyric('Hello'), null, ENoteVal.Nv4);
		this.assertEquals(Type.enumIndex(item.type), Type.enumIndex(ENoteType.Lyric('hello')));
	}
	
}