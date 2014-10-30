package nx3.xml;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NoteXML extends haxe.lang.HxObject
{
	static 
	{
		nx3.xml.NoteXML.XNOTE = "note";
		nx3.xml.NoteXML.XPAUSE = "pause";
		nx3.xml.NoteXML.XPAUSE_LEVEL = "level";
		nx3.xml.NoteXML.XLYRIC = "lyric";
		nx3.xml.NoteXML.XLYRIC_TEXT = "text";
		nx3.xml.NoteXML.XUNDEFINED = "undefined";
		nx3.xml.NoteXML.XNOTE_TYPE = "type";
		nx3.xml.NoteXML.XNOTE_TYPE_NOTE = "note";
		nx3.xml.NoteXML.XNOTE_TYPE_NOTATION_VARIANT = "variant";
		nx3.xml.NoteXML.XNOTE_VALUE = "value";
		nx3.xml.NoteXML.XNOTE_VAL = "val";
		nx3.xml.NoteXML.XNOTE_DIRECTION = "direction";
		nx3.xml.NoteXML.XNOTE_TYPE_PAUSE = "pause";
		nx3.xml.NoteXML.XNOTE_TYPE_NOTE_ARTICULATIONS = "articulations";
		nx3.xml.NoteXML.LIST_DELIMITER = ";";
		nx3.xml.NoteXML.XNOTE_TYPE_NOTE_ATTRIBUTES = "attributes";
		nx3.xml.NoteXML.XOFFSET = "offset";
		nx3.xml.NoteXML.XLYRIC_CONTINUATION = "continuation";
		nx3.xml.NoteXML.XLYRIC_FORMAT = "format";
	}
	public    NoteXML(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    NoteXML()
	{
		nx3.xml.NoteXML.__hx_ctor_nx3_xml_NoteXML(this);
	}
	
	
	public static   void __hx_ctor_nx3_xml_NoteXML(nx3.xml.NoteXML __temp_me192)
	{
		{
		}
		
	}
	
	
	public static  java.lang.String XNOTE;
	
	public static  java.lang.String XPAUSE;
	
	public static  java.lang.String XPAUSE_LEVEL;
	
	public static  java.lang.String XLYRIC;
	
	public static  java.lang.String XLYRIC_TEXT;
	
	public static  java.lang.String XUNDEFINED;
	
	public static  java.lang.String XNOTE_TYPE;
	
	public static  java.lang.String XNOTE_TYPE_NOTE;
	
	public static  java.lang.String XNOTE_TYPE_NOTATION_VARIANT;
	
	public static  java.lang.String XNOTE_VALUE;
	
	public static  java.lang.String XNOTE_VAL;
	
	public static  java.lang.String XNOTE_DIRECTION;
	
	public static  java.lang.String XNOTE_TYPE_PAUSE;
	
	public static  java.lang.String XNOTE_TYPE_NOTE_ARTICULATIONS;
	
	public static  java.lang.String LIST_DELIMITER;
	
	public static  java.lang.String XNOTE_TYPE_NOTE_ATTRIBUTES;
	
	public static  java.lang.String XOFFSET;
	
	public static  java.lang.String XLYRIC_CONTINUATION;
	
	public static  java.lang.String XLYRIC_FORMAT;
	
	public static   haxe.root.Xml toXml(nx3.NNote note)
	{
		haxe.root.Xml xml = null;
		{
			nx3.ENoteType _g = note.type;
			switch (haxe.root.Type.enumIndex(_g))
			{
				case 0:
				{
					haxe.root.Array<nx3.ENoteAttributes> attributes = ((haxe.root.Array<nx3.ENoteAttributes>) (_g.params.__get(3)) );
					haxe.root.Array<nx3.ENoteArticulation> articulations = ((haxe.root.Array<nx3.ENoteArticulation>) (_g.params.__get(2)) );
					nx3.ENotationVariant variant = ((nx3.ENotationVariant) (_g.params.__get(1)) );
					haxe.root.Array<nx3.NHead> heads = ((haxe.root.Array<nx3.NHead>) (_g.params.__get(0)) );
					{
						xml = haxe.root.Xml.createElement("note");
						{
							int _g1 = 0;
							while (( _g1 < heads.length ))
							{
								nx3.NHead head = heads.__get(_g1);
								 ++ _g1;
								haxe.root.Xml headXml = nx3.xml.HeadXML.toXml(head);
								xml.addChild(headXml);
							}
							
						}
						
						if (( variant != null )) 
						{
							xml.set("variant", haxe.root.Std.string(variant));
						}
						
						if (( articulations != null )) 
						{
							haxe.root.Array<java.lang.String> articulationStrings = new haxe.root.Array<java.lang.String>(new java.lang.String[]{});
							{
								int _g11 = 0;
								while (( _g11 < articulations.length ))
								{
									nx3.ENoteArticulation articulation = articulations.__get(_g11);
									 ++ _g11;
									articulationStrings.push(haxe.root.Std.string(articulation));
								}
								
							}
							
							xml.set("articulations", articulationStrings.join(";"));
						}
						
						if (( attributes != null )) 
						{
							haxe.root.Array<java.lang.String> attributesStrings = new haxe.root.Array<java.lang.String>(new java.lang.String[]{});
							{
								int _g12 = 0;
								while (( _g12 < attributes.length ))
								{
									nx3.ENoteAttributes attribute = attributes.__get(_g12);
									 ++ _g12;
									attributesStrings.push(haxe.root.Std.string(attribute));
								}
								
							}
							
							xml.set("attributes", attributesStrings.join(";"));
						}
						
					}
					
					break;
				}
				
				
				case 1:
				{
					int level = ((int) (haxe.lang.Runtime.toInt(_g.params.__get(0))) );
					{
						xml = haxe.root.Xml.createElement("pause");
						if (( level != 0 )) 
						{
							xml.set("level", haxe.root.Std.string(level));
						}
						
					}
					
					break;
				}
				
				
				case 4:
				{
					java.lang.Object format = _g.params.__get(3);
					nx3.ELyricContinuation continuation = ((nx3.ELyricContinuation) (_g.params.__get(2)) );
					nx3.EPosition offset = ((nx3.EPosition) (_g.params.__get(1)) );
					java.lang.String text = haxe.lang.Runtime.toString(_g.params.__get(0));
					{
						xml = haxe.root.Xml.createElement("lyric");
						xml.set("text", text);
						if (( continuation != null )) 
						{
							xml.set("continuation", haxe.root.Std.string(continuation));
						}
						
						if (( offset != null )) 
						{
							xml.set("offset", haxe.root.Std.string(offset));
						}
						
						if (( ! (( format == null )) )) 
						{
							xml.set("format", haxe.root.Std.string(format));
						}
						
					}
					
					break;
				}
				
				
				default:
				{
					xml = haxe.root.Xml.createElement("undefined");
					break;
				}
				
			}
			
		}
		
		if (( nx3.ENoteValTools.value(note.value) != nx3.ENoteValTools.value(nx3.ENoteVal.Nv4) )) 
		{
			xml.set("val", haxe.root.Std.string(nx3.ENoteValTools.toValString(note.value)));
		}
		
		if (( note.direction != nx3.EDirectionUAD.Auto )) 
		{
			xml.set("direction", haxe.root.Std.string(note.direction));
		}
		
		return xml;
	}
	
	
	public static   nx3.NNote fromXmlStr(java.lang.String xmlStr)
	{
		haxe.root.Xml xml = haxe.root.Xml.parse(xmlStr).firstElement();
		java.lang.String xmlType = xml.get_nodeName();
		nx3.ENoteType type = null;
		{
			java.lang.String __temp_svar861 = (xmlType);
			switch (__temp_svar861.hashCode())
			{
				case 3387378:
				{
					if (__temp_svar861.equals("note")) 
					{
						haxe.root.Array<nx3.NHead> heads = new haxe.root.Array<nx3.NHead>(new nx3.NHead[]{});
						{
							java.lang.Object __temp_iterator244 = xml.elementsNamed(nx3.xml.HeadXML.XHEAD);
							while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator244, "hasNext", null)))
							{
								haxe.root.Xml h = ((haxe.root.Xml) (haxe.lang.Runtime.callField(__temp_iterator244, "next", null)) );
								nx3.NHead head = nx3.xml.HeadXML.fromXmlStr(h.toString());
								heads.push(head);
							}
							
						}
						
						nx3.ENotationVariant variant = cx.EnumTools.createFromString(nx3.ENotationVariant.class, xml.get("variant"));
						haxe.root.Array<nx3.ENoteArticulation> articulations = new haxe.root.Array<nx3.ENoteArticulation>(new nx3.ENoteArticulation[]{});
						java.lang.String articulationsStr = xml.get("articulations");
						if (( articulationsStr != null )) 
						{
							haxe.root.Array<java.lang.String> articulationStrings = haxe.lang.StringExt.split(articulationsStr, ";");
							{
								int _g = 0;
								while (( _g < articulationStrings.length ))
								{
									java.lang.String articulationStr = articulationStrings.__get(_g);
									 ++ _g;
									articulations.push(cx.EnumTools.createFromString(nx3.ENoteArticulation.class, articulationStr));
								}
								
							}
							
						}
						
						if (( articulations.length == 0 )) 
						{
							articulations = null;
						}
						
						haxe.root.Array<nx3.ENoteAttributes> attributes = new haxe.root.Array<nx3.ENoteAttributes>(new nx3.ENoteAttributes[]{});
						java.lang.String attributesStr = xml.get("attributes");
						if (( attributesStr != null )) 
						{
							haxe.root.Array<java.lang.String> attributesStrings = haxe.lang.StringExt.split(attributesStr, ";");
							{
								int _g1 = 0;
								while (( _g1 < attributesStrings.length ))
								{
									java.lang.String attributeStr = attributesStrings.__get(_g1);
									 ++ _g1;
									attributes.push(cx.EnumTools.createFromString(nx3.ENoteAttributes.class, attributeStr));
								}
								
							}
							
						}
						
						if (( attributes.length == 0 )) 
						{
							attributes = null;
						}
						
						type = nx3.ENoteType.Note(heads, variant, articulations, attributes);
					}
					
					break;
				}
				
				
				case 103457887:
				{
					if (__temp_svar861.equals("lyric")) 
					{
						java.lang.String text = xml.get("text");
						java.lang.String offsetStr = xml.get("offset");
						nx3.EPosition offset = cx.EnumTools.createFromString(nx3.EPosition.class, offsetStr);
						java.lang.String continuationStr = xml.get("continuation");
						nx3.ELyricContinuation continuation = cx.EnumTools.createFromString(nx3.ELyricContinuation.class, continuationStr);
						type = nx3.ENoteType.Lyric(text, offset, continuation, null);
					}
					
					break;
				}
				
				
				case 106440182:
				{
					if (__temp_svar861.equals("pause")) 
					{
						java.lang.String pauseLevelStr = xml.get("level");
						int levelInt = 0;
						if (( pauseLevelStr == null )) 
						{
							levelInt = 0;
						}
						 else 
						{
							levelInt = ((int) (haxe.lang.Runtime.toInt(haxe.root.Std.parseInt(pauseLevelStr))) );
						}
						
						type = nx3.ENoteType.Pause(levelInt);
					}
					
					break;
				}
				
				
			}
			
		}
		
		java.lang.String valStr = xml.get("val");
		nx3.ENoteVal value = nx3.ENoteValTools.fromValString(valStr);
		nx3.EDirectionUAD direction = cx.EnumTools.createFromString(nx3.EDirectionUAD.class, xml.get("direction"));
		return new nx3.NNote(((nx3.ENoteType) (type) ), ((haxe.root.Array<nx3.NHead>) (null) ), ((nx3.ENoteVal) (value) ), ((nx3.EDirectionUAD) (direction) ));
	}
	
	
	public static   boolean test(nx3.NNote item)
	{
		java.lang.String str = nx3.xml.NoteXML.toXml(item).toString();
		nx3.NNote item2 = nx3.xml.NoteXML.fromXmlStr(str);
		java.lang.String str2 = nx3.xml.NoteXML.toXml(item2).toString();
		haxe.Log.trace.__hx_invoke2_o(0.0, str, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.xml.NoteXML", "NoteXML.hx", "test"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (204) )) )})));
		haxe.Log.trace.__hx_invoke2_o(0.0, str2, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.xml.NoteXML", "NoteXML.hx", "test"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (205) )) )})));
		return haxe.lang.Runtime.valEq(str, str2);
	}
	
	
	public static   nx3.NNote clone(nx3.NNote nnote)
	{
		return nx3.xml.NoteXML.fromXmlStr(nx3.xml.NoteXML.toXml(nnote).toString());
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.xml.NoteXML(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.xml.NoteXML();
	}
	
	
}


