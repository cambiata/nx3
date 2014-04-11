package nx3.xml;

/**
 * ...
 * @author Jonas Nyström
 */
class Nx3XmlTools
{
	
	static public function xml1():Xml
	{
		return Xml.parse('<root><child /><headx level="2" /></root>');				
	}
	
	static public function toBrowserXmlString(xmlStr:String):String
	{
		var r = new EReg('<headx([a-zA-Z0-9-+=" ]*)/>', 'g');
		xmlStr = r.replace(xmlStr, '<headx$1></headx>');
		return xmlStr;
	}
	
}