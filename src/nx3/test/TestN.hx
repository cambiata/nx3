package nx3.test;
//import cx.EnumTools;
//import nx3.ESign;

#if neko
import cx.FileTools;
import haxe.Serializer;
import nx3.xml.Nx3XmlTools;
#end

import haxe.unit.TestCase;
import nx3.NBar;
import nx3.NPart;
import nx3.NScore;
import nx3.NVoice;
import nx3.QNote.QNote4;
import nx3.QNote.QNote16;
import nx3.QVoice;
import nx3.utils.ScoreModifier;
import nx3.xml.BarXML;
import nx3.xml.ScoreXML;
import nx3.xml.VoiceXML;

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

class TestN extends   TestCase 
{
	
	public function testHeadXml()
	{
		var item1 = new NHead(2, ESign.Flat);
		var xmlstr1 = HeadXML.toXml(item1).toString();
		var item2 = HeadXML.fromXmlStr(xmlstr1);
		var xmlstr2 = HeadXML.toXml(item2).toString();
		//this.assertEquals(Std.string(item1), Std.string(item2));
		this.assertEquals(xmlstr1, xmlstr2);		
	}

	public function testNoteXml()
	{

		var item1 = new NNote([ new NHead(-3), new NHead(-2, ESign.Flat), new NHead(4, ESign.Natural), new NHead(1)], ENoteVal.Nv2dot, EDirectionUAD.Down);
		var xmlstr1= NoteXML.toXml(item1).toString();
		var item2 = NoteXML.fromXmlStr(xmlstr1);
		var xmlstr2 = NoteXML.toXml(item2).toString();
		//this.assertEquals(Std.string(item1), Std.string(item2));
		this.assertEquals(xmlstr1, xmlstr2);		
		
		// verify head level sorting...
		this.assertEquals([ -3, -2, 1, 4].toString(), item1.headLevels.toString());
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
	
	public function testVoiceXml()
	{
		var nvoice = new NVoice([
			new QNote4(1),
			new NNote(ENoteType.Pause(1), ENoteVal.Nv4),
		]);
		
		var xmlStr = VoiceXML.toXml(nvoice).toString();
		var nvoice2 = VoiceXML.fromXmlStr(xmlStr);
		var xmlStr2 = VoiceXML.toXml(nvoice2).toString();
		this.assertEquals(xmlStr, xmlStr2);
	}
	
	public function testVoiceBarpause()
	{
		var nvoice = new NVoice([]);
		this.assertTrue(true);
	}
	
	public function testBarXml()
	{
		var nbar = TestItems.nbar1();
		var xmlStr = BarXML.toXml(nbar).toString();		
		var nbar2 = BarXML.fromXmlStr(xmlStr);
		var xmlStr2 = BarXML.toXml(nbar2).toString();
		this.assertEquals(xmlStr, xmlStr2);		
	}
	
	public function testScoreXml()
	{
		var nscore:NScore = TestItems.scoreTest1().nscore;
		var xmlStr = ScoreXML.toXml(nscore).toString();
		var nscore2 = ScoreXML.fromXmlStr(xmlStr);
		var xmlStr2 = ScoreXML.toXml(nscore2).toString();
		this.assertEquals(xmlStr, xmlStr2);		
	}
	
	/*
	public function testScoreModifyer()
	{
		var score = TestItems.scoreTest1().nscore;
		var m:ScoreModifier = new ScoreModifier(score);		
		var barScore = m.getBarNrAsScore(1);
		this.assertEquals(barScore.length, 1);
	}
	*/
	
	

	public function xmlStrExport(filename:String, xmlStr:String)
	{
		#if neko
			FileTools.saveContent(filename, xmlStr);
		#end	
	}
	
/*
#if neko
	public function testBarXmlExport()
	{
		this.assertTrue(true);
		
		var xmlStr = BarXML.toXml(TestItems.vbar1().nbar).toString();
		xmlStr = Nx3XmlTools.toBrowserXmlString(xmlStr);
		FileTools.putContent('xml/testBar1.xml', xmlStr);

		var xmlStr = BarXML.toXml(TestItems.vbarSigns().nbar).toString();
		xmlStr = Nx3XmlTools.toBrowserXmlString(xmlStr);
		FileTools.putContent('xml/testBarSigns.xml', xmlStr);
	}
#end	
*/	
	
		
}