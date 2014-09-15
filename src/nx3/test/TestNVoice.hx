package nx3.test;

import haxe.unit.TestCase;
import nx3.ENoteType;
import nx3.ENoteVal;
import nx3.NVoice;
import nx3.QNote.QLyric4;
import nx3.QNote.QNote4;
import nx3.xml.VoiceXML;

/**
 * TestNVoice
 * @author Jonas Nyström
 */
class TestNVoice extends TestCase 
{
	
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
	

	
}