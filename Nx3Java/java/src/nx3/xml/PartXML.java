package nx3.xml;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PartXML extends haxe.lang.HxObject
{
	static 
	{
		nx3.xml.PartXML.XPART = "part";
		nx3.xml.PartXML.XPART_TYPE = "type";
		nx3.xml.PartXML.XPART_CLEF = "clef";
		nx3.xml.PartXML.XPART_CLEFDISPLAY = "clefdisplay";
		nx3.xml.PartXML.XPART_KEY = "key";
		nx3.xml.PartXML.XPART_KEYDISPLAY = "keydisplay";
	}
	public    PartXML(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PartXML()
	{
		nx3.xml.PartXML.__hx_ctor_nx3_xml_PartXML(this);
	}
	
	
	public static   void __hx_ctor_nx3_xml_PartXML(nx3.xml.PartXML __temp_me193)
	{
		{
		}
		
	}
	
	
	public static  java.lang.String XPART;
	
	public static  java.lang.String XPART_TYPE;
	
	public static  java.lang.String XPART_CLEF;
	
	public static  java.lang.String XPART_CLEFDISPLAY;
	
	public static  java.lang.String XPART_KEY;
	
	public static  java.lang.String XPART_KEYDISPLAY;
	
	public static   haxe.root.Xml toXml(nx3.NPart part)
	{
		haxe.root.Xml xml = haxe.root.Xml.createElement("part");
		{
			int _g = 0;
			haxe.root.Array<nx3.NVoice> _g1 = part.nvoices;
			while (( _g < _g1.length ))
			{
				nx3.NVoice voice = _g1.__get(_g);
				 ++ _g;
				haxe.root.Xml voiceXml = nx3.xml.VoiceXML.toXml(voice);
				xml.addChild(voiceXml);
			}
			
		}
		
		{
			nx3.EPartType _g2 = part.type;
			switch (haxe.root.Type.enumIndex(_g2))
			{
				case 0:
				{
					{
					}
					
					break;
				}
				
				
				default:
				{
					xml.set("type", haxe.root.Std.string(part.type));
					break;
				}
				
			}
			
		}
		
		if (( part.clef != null )) 
		{
			nx3.EClef _g3 = part.clef;
			switch (haxe.root.Type.enumIndex(_g3))
			{
				case 0:
				{
					{
					}
					
					break;
				}
				
				
				default:
				{
					xml.set("clef", haxe.root.Std.string(part.clef));
					break;
				}
				
			}
			
		}
		
		if (( part.key != null )) 
		{
			nx3.EKey _g4 = part.key;
			switch (haxe.root.Type.enumIndex(_g4))
			{
				case 6:
				{
					{
					}
					
					break;
				}
				
				
				default:
				{
					xml.set("key", haxe.root.Std.string(part.key));
					break;
				}
				
			}
			
		}
		
		{
			nx3.EDisplayALN _g5 = part.clefDisplay;
			switch (haxe.root.Type.enumIndex(_g5))
			{
				case 1:
				{
					{
					}
					
					break;
				}
				
				
				default:
				{
					xml.set("clefdisplay", haxe.root.Std.string(part.clefDisplay));
					break;
				}
				
			}
			
		}
		
		{
			nx3.EDisplayALN _g6 = part.keyDisplay;
			switch (haxe.root.Type.enumIndex(_g6))
			{
				case 1:
				{
					{
					}
					
					break;
				}
				
				
				default:
				{
					xml.set("keydisplay", haxe.root.Std.string(part.keyDisplay));
					break;
				}
				
			}
			
		}
		
		return xml;
	}
	
	
	public static   nx3.NPart fromXmlStr(java.lang.String xmlStr)
	{
		haxe.root.Xml xml = haxe.root.Xml.parse(xmlStr).firstElement();
		haxe.root.Array<nx3.NVoice> voices = new haxe.root.Array<nx3.NVoice>(new nx3.NVoice[]{});
		{
			java.lang.Object __temp_iterator245 = xml.elements();
			while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator245, "hasNext", null)))
			{
				haxe.root.Xml v = ((haxe.root.Xml) (haxe.lang.Runtime.callField(__temp_iterator245, "next", null)) );
				nx3.NVoice voice = nx3.xml.VoiceXML.fromXmlStr(v.toString());
				voices.push(voice);
			}
			
		}
		
		java.lang.String typeStr = xml.get("type");
		nx3.EPartType type = cx.EnumTools.createFromString(nx3.EPartType.class, typeStr);
		java.lang.String str = xml.get("clef");
		nx3.EClef clef = null;
		if (( str != null )) 
		{
			clef = cx.EnumTools.createFromString(nx3.EClef.class, str);
		}
		
		java.lang.String clefDisplayStr = xml.get("clefdisplay");
		nx3.EDisplayALN clefDisplay = null;
		if (( clefDisplayStr == null )) 
		{
			clefDisplay = nx3.EDisplayALN.Layout;
		}
		 else 
		{
			clefDisplay = cx.EnumTools.createFromString(nx3.EDisplayALN.class, clefDisplayStr);
		}
		
		java.lang.String str1 = xml.get("key");
		nx3.EKey key = null;
		if (( str1 != null )) 
		{
			key = cx.EnumTools.createFromString(nx3.EKey.class, str1);
		}
		
		java.lang.String keyDisplayStr = xml.get("keydisplay");
		nx3.EDisplayALN keyDisplay = null;
		if (( keyDisplayStr == null )) 
		{
			keyDisplay = nx3.EDisplayALN.Layout;
		}
		 else 
		{
			keyDisplay = cx.EnumTools.createFromString(nx3.EDisplayALN.class, keyDisplayStr);
		}
		
		return new nx3.NPart(((haxe.root.Array<nx3.NVoice>) (voices) ), ((nx3.EPartType) (type) ), ((nx3.EClef) (clef) ), ((nx3.EDisplayALN) (clefDisplay) ), ((nx3.EKey) (key) ), ((nx3.EDisplayALN) (keyDisplay) ));
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.xml.PartXML(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.xml.PartXML();
	}
	
	
}


