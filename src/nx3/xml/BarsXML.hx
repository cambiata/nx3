package nx3.xml;
import nx3.NBar;
import nx3.NBars;

/**
 * ...
 * @author Jonas Nyström
 */

 using nx3.xml.BarXML;
 
class BarsXML
{

	static public inline var XBARS:String = "bars";
	
	static public function toXml(bars:NBars): Xml
	{
		var xml:Xml = Xml.createElement(XBARS);		

		for (bar in bars)
		{
			var barXml = bar.toXml();
			xml.addChild(barXml);
		}
		return xml;
	}

	static public function fromXmlStr(xmlStr:String):NBars
	{
		var xml:Xml = Xml.parse(xmlStr).firstElement();
		
		var bars:NBars = [];
		
		for (b in xml.elements())
		{
			var bar:NBar = BarXML.fromXmlStr(b.toString());
			bars.push(bar);			
		}
		
		return bars;
		
	}
	
	
}