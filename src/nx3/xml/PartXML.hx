package nx3.xml;
import cx.EnumTools;
import nx3.EClef;
import nx3.EDisplayALN;
import nx3.EKey;
import nx3.EKey.EKey;
import nx3.EPartType;
import nx3.NPart;
import nx3.NVoice;

/**
 * ...
 * @author 
 */
using nx3.xml.VoiceXML;
 
class PartXML
{
	static public inline var XPART				:String = "part";
	static public inline var XPART_TYPE			:String = "type";
	static public inline var XPART_LEVELOFFSET			:String = "leveloffset";
	static public inline var XPART_PITCHCHAIN			:String = "pitchchain";
	static public inline var XPART_CLEF			:String = "clef";
	static public inline var XPART_CLEFDISPLAY	:String = "clefdisplay";
	static public inline var XPART_KEY			:String = "key";
	static public inline var XPART_KEYDISPLAY	:String = "keydisplay";
	
	static public function toXml(part:NPart): Xml
	{
		var xml:Xml = Xml.createElement(XPART);		
		
		// voices
		for (voice in part.nvoices)
		{
			var voiceXml = voice.toXml();
			xml.addChild(voiceXml);			
		}		

		// type
		switch(part.type)
		{
			case EPartType.Normal:
				// nothing for Normal
			case EPartType.PitchChain(leveloffset):
				xml.set(XPART_TYPE, XPART_PITCHCHAIN);	
				xml.set(XPART_LEVELOFFSET, Std.string(leveloffset));	
			default:
				xml.set(XPART_TYPE, Std.string(part.type));				
		}
		
		// clef		
		if (part.clef != null)
		switch(part.clef)
		{			
			case EClef.ClefG:
				// nothing for G-clef
			default:
				xml.set(XPART_CLEF, Std.string(part.clef));			
		}
		
		if (part.key != null)
		switch(part.key)
		{			
			case EKey.Natural:
				// nothing for G-clef
			default:
				xml.set(XPART_KEY, Std.string(part.key));			
		}		
		
		
		// clef display
		switch(part.clefDisplay)
		{
			case EDisplayALN.Layout:
				// nothing for Layout
			default:
				xml.set(XPART_CLEFDISPLAY, Std.string(part.clefDisplay));			
		}
		
		
		// key
		//trace('levelshift');
		/*
		switch(part.key.levelShift)
		{
			case 0:
				// Nothing for Natural
			default:
				
				//xml.set(XPART_KEY, Std.string(part.key.levelShift));			
		}
		*/
		// key display
		switch(part.keyDisplay)
		{
			case EDisplayALN.Layout:
				// nothing for Layout
			default:
				xml.set(XPART_KEYDISPLAY, Std.string(part.keyDisplay));			
		}		
		
		return xml;
	}
	
	static public function fromXmlStr(xmlStr:String): NPart
	{
		var xml:Xml = Xml.parse(xmlStr).firstElement();	
		
		var voices:Array<NVoice> = [];
		for (v in xml.elements())
		{
			var voice:NVoice = VoiceXML.fromXmlStr(v.toString());		
			voices.push(voice);
		}
		
		// type
		var type:EPartType = null;
		var typeStr = xml.get(XPART_TYPE);
		if (typeStr == XPART_PITCHCHAIN) {
			var leveloffset = Std.parseInt(xml.get(XPART_LEVELOFFSET));
			type = EPartType.PitchChain(leveloffset);
		} else type = EnumTools.createFromString(EPartType, typeStr);				
		
		// clef
		var str = xml.get(XPART_CLEF);
		var clef:EClef = null;
		if (str != null) clef =  EnumTools.createFromString(EClef, str);
		
		// timeDisplay
		var clefDisplayStr = xml.get(XPART_CLEFDISPLAY);
		var clefDisplay = (clefDisplayStr == null) ? EDisplayALN.Layout : EnumTools.createFromString(EDisplayALN, clefDisplayStr);
		
		// key
		var str = xml.get(XPART_KEY);
		var key:EKey = null;
		if (str != null) key =  EnumTools.createFromString(EKey, str);	
		 //key= (str == null) ? EKey.Natural : new EKey(Std.parseInt(str));
		
		// keyDisplay
		var keyDisplayStr = xml.get(XPART_KEYDISPLAY);
		var keyDisplay = (keyDisplayStr == null) ? EDisplayALN.Layout : EnumTools.createFromString(EDisplayALN, keyDisplayStr);		
		
		return new NPart(voices, type, clef, clefDisplay, key, keyDisplay);
		
	}
	
}