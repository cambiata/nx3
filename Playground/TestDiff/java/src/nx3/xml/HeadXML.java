package nx3.xml;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class HeadXML extends haxe.lang.HxObject
{
	static 
	{
		nx3.xml.HeadXML.XHEAD = "headx";
		nx3.xml.HeadXML.XHEAD_TYPE = "type";
		nx3.xml.HeadXML.XHEAD_LEVEL = "level";
		nx3.xml.HeadXML.XHEAD_SIGN = "sign";
		nx3.xml.HeadXML.XHEAD_TIE = "tie";
		nx3.xml.HeadXML.XHEAD_TIETO = "tieto";
		nx3.xml.HeadXML.XHEAD_TIE_DIRECTION = "tiedirection";
		nx3.xml.HeadXML.XHEAD_TIE_LEVEL = "tielevel";
	}
	public    HeadXML(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    HeadXML()
	{
		nx3.xml.HeadXML.__hx_ctor_nx3_xml_HeadXML(this);
	}
	
	
	public static   void __hx_ctor_nx3_xml_HeadXML(nx3.xml.HeadXML __temp_me174)
	{
		{
		}
		
	}
	
	
	public static   haxe.root.Xml toXml(nx3.NHead head)
	{
		haxe.root.Xml xml = haxe.root.Xml.createElement(nx3.xml.HeadXML.XHEAD);
		{
			nx3.EHeadType _g = head.type;
			switch (haxe.root.Type.enumIndex(_g))
			{
				case 2:case 1:
				{
					xml.set(nx3.xml.HeadXML.XHEAD_TYPE, haxe.root.Std.string(head.type));
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
		
		xml.set(nx3.xml.HeadXML.XHEAD_LEVEL, haxe.root.Std.string(head.level));
		if (( head.sign != nx3.ESign.None )) 
		{
			xml.set(nx3.xml.HeadXML.XHEAD_SIGN, haxe.root.Std.string(head.sign));
		}
		
		if (( head.tie != null )) 
		{
			nx3.ETie _g1 = head.tie;
			switch (haxe.root.Type.enumIndex(_g1))
			{
				case 0:
				{
					int level = ((int) (haxe.lang.Runtime.toInt(_g1.params.__get(1))) );
					nx3.EDirectionUAD direction = ((nx3.EDirectionUAD) (_g1.params.__get(0)) );
					{
						xml.set(nx3.xml.HeadXML.XHEAD_TIE, "true");
						if (( level != 0 )) 
						{
							xml.set(nx3.xml.HeadXML.XHEAD_TIE_LEVEL, haxe.root.Std.string(level));
						}
						
						if (( direction != nx3.EDirectionUAD.Auto )) 
						{
							xml.set(nx3.xml.HeadXML.XHEAD_TIE_DIRECTION, haxe.root.Std.string(haxe.root.Type.enumConstructor(direction)));
						}
						
					}
					
					break;
				}
				
				
				case 1:
				{
					int levelRight = ((int) (haxe.lang.Runtime.toInt(_g1.params.__get(2))) );
					int levelLeft = ((int) (haxe.lang.Runtime.toInt(_g1.params.__get(1))) );
					nx3.EDirectionUAD direction1 = ((nx3.EDirectionUAD) (_g1.params.__get(0)) );
					xml.set(nx3.xml.HeadXML.XHEAD_TIE, haxe.root.Std.string(levelLeft));
					break;
				}
				
				
			}
			
		}
		
		if (( head.tieTo != null )) 
		{
			nx3.ETie _g2 = head.tieTo;
			switch (haxe.root.Type.enumIndex(_g2))
			{
				case 0:
				{
					int level1 = ((int) (haxe.lang.Runtime.toInt(_g2.params.__get(1))) );
					nx3.EDirectionUAD direction2 = ((nx3.EDirectionUAD) (_g2.params.__get(0)) );
					xml.set(nx3.xml.HeadXML.XHEAD_TIETO, haxe.root.Std.string(head.tieTo));
					break;
				}
				
				
				case 1:
				{
					int levelRight1 = ((int) (haxe.lang.Runtime.toInt(_g2.params.__get(2))) );
					int levelLeft1 = ((int) (haxe.lang.Runtime.toInt(_g2.params.__get(1))) );
					nx3.EDirectionUAD direction3 = ((nx3.EDirectionUAD) (_g2.params.__get(0)) );
					xml.set(nx3.xml.HeadXML.XHEAD_TIETO, haxe.root.Std.string(head.tieTo));
					break;
				}
				
				
			}
			
		}
		
		return xml;
	}
	
	
	public static  java.lang.String XHEAD;
	
	public static  java.lang.String XHEAD_TYPE;
	
	public static  java.lang.String XHEAD_LEVEL;
	
	public static  java.lang.String XHEAD_SIGN;
	
	public static  java.lang.String XHEAD_TIE;
	
	public static  java.lang.String XHEAD_TIETO;
	
	public static  java.lang.String XHEAD_TIE_DIRECTION;
	
	public static  java.lang.String XHEAD_TIE_LEVEL;
	
	public static   nx3.NHead fromXmlStr(java.lang.String xmlStr)
	{
		haxe.root.Xml xml = haxe.root.Xml.parse(xmlStr).firstElement();
		java.lang.String typeStr = xml.get(nx3.xml.HeadXML.XHEAD_TYPE);
		nx3.EHeadType type = cx.EnumTools.createFromString(nx3.EHeadType.class, typeStr);
		int level = ((int) (haxe.lang.Runtime.toInt(haxe.root.Std.parseInt(xml.get(nx3.xml.HeadXML.XHEAD_LEVEL)))) );
		nx3.ESign sign = cx.EnumTools.createFromString(nx3.ESign.class, xml.get(nx3.xml.HeadXML.XHEAD_SIGN));
		nx3.ETie tie = null;
		if (( xml.get(nx3.xml.HeadXML.XHEAD_TIE) != null )) 
		{
			nx3.EDirectionUAD tiedirection = null;
			if (( xml.get(nx3.xml.HeadXML.XHEAD_TIE_DIRECTION) == null )) 
			{
				tiedirection = nx3.EDirectionUAD.Auto;
			}
			 else 
			{
				tiedirection = nx3.EDirectionUAD.Up;
			}
			
			java.lang.Object tielevel = null;
			if (( xml.get(nx3.xml.HeadXML.XHEAD_TIE_LEVEL) == null )) 
			{
				tielevel = 0;
			}
			 else 
			{
				tielevel = haxe.root.Std.parseInt(xml.get(nx3.xml.HeadXML.XHEAD_TIE_LEVEL));
			}
			
			tie = nx3.ETie.Tie(tiedirection, ((int) (haxe.lang.Runtime.toInt(tielevel)) ));
		}
		
		nx3.ETie tieTo = cx.EnumTools.createFromString(nx3.ETie.class, xml.get(nx3.xml.HeadXML.XHEAD_TIETO));
		return new nx3.NHead(((nx3.EHeadType) (type) ), ((java.lang.Object) (level) ), ((nx3.ESign) (sign) ), ((nx3.ETie) (tie) ), ((nx3.ETie) (tieTo) ));
	}
	
	
	public static   boolean test(nx3.NHead item)
	{
		java.lang.String str = nx3.xml.HeadXML.toXml(item).toString();
		nx3.NHead item2 = nx3.xml.HeadXML.fromXmlStr(str);
		java.lang.String str2 = nx3.xml.HeadXML.toXml(item2).toString();
		haxe.Log.trace.__hx_invoke2_o(0.0, str, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.xml.HeadXML", "HeadXML.hx", "test"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (152) )) )})));
		haxe.Log.trace.__hx_invoke2_o(0.0, str2, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.xml.HeadXML", "HeadXML.hx", "test"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (153) )) )})));
		return haxe.lang.Runtime.valEq(str, str2);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.xml.HeadXML(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.xml.HeadXML();
	}
	
	
}


