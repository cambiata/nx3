package nx3.xml;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class VoiceXML extends haxe.lang.HxObject
{
	static 
	{
		nx3.xml.VoiceXML.XVOICE = "voice";
		nx3.xml.VoiceXML.XVOICE_TYPE = "type";
		nx3.xml.VoiceXML.XVOICE_BARPAUSE = "barpause";
		nx3.xml.VoiceXML.XVOICE_DIRECTION = "direction";
	}
	public    VoiceXML(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    VoiceXML()
	{
		nx3.xml.VoiceXML.__hx_ctor_nx3_xml_VoiceXML(this);
	}
	
	
	public static   void __hx_ctor_nx3_xml_VoiceXML(nx3.xml.VoiceXML __temp_me195)
	{
		{
		}
		
	}
	
	
	public static  java.lang.String XVOICE;
	
	public static  java.lang.String XVOICE_TYPE;
	
	public static  java.lang.String XVOICE_BARPAUSE;
	
	public static  java.lang.String XVOICE_DIRECTION;
	
	public static   haxe.root.Xml toXml(nx3.NVoice voice)
	{
		haxe.root.Xml xml = haxe.root.Xml.createElement("voice");
		{
			nx3.EVoiceType _g = voice.type;
			switch (haxe.root.Type.enumIndex(_g))
			{
				case 1:
				{
					xml.set("type", haxe.root.Std.string(voice.type));
					break;
				}
				
				
				default:
				{
					{
					}
					
					break;
				}
				
			}
			
		}
		
		if (( voice.direction != nx3.EDirectionUAD.Auto )) 
		{
			xml.set("direction", haxe.root.Std.string(voice.direction));
		}
		
		if (( voice.nnotes != null )) 
		{
			int _g1 = 0;
			haxe.root.Array<nx3.NNote> _g11 = voice.nnotes;
			while (( _g1 < _g11.length ))
			{
				nx3.NNote note = _g11.__get(_g1);
				 ++ _g1;
				haxe.root.Xml noteXml = nx3.xml.NoteXML.toXml(note);
				xml.addChild(noteXml);
			}
			
		}
		
		return xml;
	}
	
	
	public static   nx3.NVoice fromXmlStr(java.lang.String xmlStr)
	{
		haxe.root.Xml xml = haxe.root.Xml.parse(xmlStr).firstElement();
		java.lang.String typeStr = xml.get("type");
		nx3.EVoiceType type = cx.EnumTools.createFromString(nx3.EVoiceType.class, typeStr);
		java.lang.String directionStr = xml.get("direction");
		nx3.EDirectionUAD direction = null;
		if (( directionStr == null )) 
		{
			direction = nx3.EDirectionUAD.Auto;
		}
		 else 
		{
			direction = cx.EnumTools.createFromString(nx3.EDirectionUAD.class, directionStr);
		}
		
		haxe.root.Array<nx3.NNote> notes = new haxe.root.Array<nx3.NNote>(new nx3.NNote[]{});
		{
			java.lang.Object __temp_iterator249 = xml.elements();
			while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator249, "hasNext", null)))
			{
				haxe.root.Xml n = ((haxe.root.Xml) (haxe.lang.Runtime.callField(__temp_iterator249, "next", null)) );
				nx3.NNote note = nx3.xml.NoteXML.fromXmlStr(n.toString());
				notes.push(note);
			}
			
		}
		
		return new nx3.NVoice(((haxe.root.Array<nx3.NNote>) (notes) ), ((nx3.EVoiceType) (type) ), ((nx3.EDirectionUAD) (direction) ));
	}
	
	
	public static   boolean test(nx3.NVoice item)
	{
		java.lang.String str = nx3.xml.VoiceXML.toXml(item).toString();
		nx3.NVoice item2 = nx3.xml.VoiceXML.fromXmlStr(str);
		java.lang.String str2 = nx3.xml.VoiceXML.toXml(item2).toString();
		haxe.Log.trace.__hx_invoke2_o(0.0, str, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.xml.VoiceXML", "VoiceXML.hx", "test"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (76) )) )})));
		haxe.Log.trace.__hx_invoke2_o(0.0, str2, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.xml.VoiceXML", "VoiceXML.hx", "test"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (77) )) )})));
		return haxe.lang.Runtime.valEq(str, str2);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.xml.VoiceXML(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.xml.VoiceXML();
	}
	
	
}


