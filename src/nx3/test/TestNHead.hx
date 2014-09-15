package nx3.test;
import haxe.unit.TestCase;
import nx3.ESign;
import nx3.NHead;
import nx3.xml.HeadXML;

/**
 * TestNHead
 * @author Jonas Nyström
 */
class TestNHead extends TestCase
{


	public function testHeadXml()
	{
		var item1 = new NHead(2, ESign.Flat);
		var xmlstr1 = HeadXML.toXml(item1).toString();
		var item2 = HeadXML.fromXmlStr(xmlstr1);
		var xmlstr2 = HeadXML.toXml(item2).toString();
		this.assertEquals(xmlstr1, xmlstr2);		
	}
	
}