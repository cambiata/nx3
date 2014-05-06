package nx3.xml;
import cx.EnumTools;
import nx3.ETime;
import nx3.NBar;
import nx3.EDisplayALN;
import nx3.EBarType;
import nx3.NPart;

/**
 * ...
 * @author Jonas Nyström
 */
using nx3.xml.PartXML;
using nx3.ETime.ETimeUtils;
 
class BarXML
{
	static public inline var XBAR:String = "bar";
	static public inline var XBAR_TYPE:String = "type";
	static public inline var XBAR_TIME:String = "time";
	static public inline var XBAR_TIMEDISPLAY:String = "timedisplay";
	
	static public function toXml(bar:NBar): Xml
	{
		var xml:Xml = Xml.createElement(XBAR);		
		
		//trace(bar.nparts.length);
		
		// parts
		for (part in bar.nparts)
		{
			var partXml = part.toXml();
			xml.addChild(partXml);			
		}		
		
		// type
		switch (bar.type)
		{
			case EBarType.Normal:
				// do nothing for Normal
			default:
				xml.set(XBAR_TYPE, Std.string(bar.type));
		}
		
		// time
		if (bar.time != null)
		switch (bar.time)
		{
			case ETime.Time4_4:
				// do nothing for 4/4
			default:
				xml.set(XBAR_TIME, Std.string(bar.time.toString()));
		}
		
		// time display
		switch(bar.timeDisplay)
		{
			case EDisplayALN.Layout:
				// nothing for Layout
			default:
				xml.set(XBAR_TIMEDISPLAY, Std.string(bar.timeDisplay));			
		}		
		
		return xml;
	}
	
	static public function fromXmlStr(xmlStr:String):NBar
	{
		var xml:Xml = Xml.parse(xmlStr).firstElement();
		
		// parts
		var parts:Array<NPart> = [];
		for (p in xml.elements())
		{
			var part:NPart = PartXML.fromXmlStr(p.toString());		
			parts.push(part);
		}
		
		// type
		var typeStr = xml.get(XBAR_TYPE);
		var type = (typeStr == null) ? EBarType.Normal : EnumTools.createFromString(EBarType, typeStr);
		
		// time
		var time:ETime = null;
		var timeStr = xml.get(XBAR_TIME);
		 if (timeStr!= null) time = ETimeUtils.fromString(timeStr);
		
		// timeDisplay
		var timeDisplayStr = xml.get(XBAR_TIMEDISPLAY);
		var timeDisplay = (timeDisplayStr == null) ? EDisplayALN.Layout : EnumTools.createFromString(EDisplayALN, timeDisplayStr);
		
		return new NBar(parts, type, time, timeDisplay);
	}
	
	static public function test(item:NBar): Bool
	{
		var str = toXml(item).toString();		
		var item2 = fromXmlStr(str);
		var str2 = toXml(item2).toString();
		trace(str);
		trace(str2);
		return (str == str2);		
		return false;
	}
		
	
}