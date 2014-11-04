package nx3.xml;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class BarXML extends haxe.lang.HxObject
{
	static 
	{
		nx3.xml.BarXML.XBAR = "bar";
		nx3.xml.BarXML.XBAR_TYPE = "type";
		nx3.xml.BarXML.XBAR_TIME = "time";
		nx3.xml.BarXML.XBAR_TIMEDISPLAY = "timedisplay";
	}
	public    BarXML(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    BarXML()
	{
		nx3.xml.BarXML.__hx_ctor_nx3_xml_BarXML(this);
	}
	
	
	public static   void __hx_ctor_nx3_xml_BarXML(nx3.xml.BarXML __temp_me172)
	{
		{
		}
		
	}
	
	
	public static  java.lang.String XBAR;
	
	public static  java.lang.String XBAR_TYPE;
	
	public static  java.lang.String XBAR_TIME;
	
	public static  java.lang.String XBAR_TIMEDISPLAY;
	
	public static   haxe.root.Xml toXml(nx3.NBar bar)
	{
		haxe.root.Xml xml = haxe.root.Xml.createElement("bar");
		{
			int _g = 0;
			haxe.root.Array<nx3.NPart> _g1 = bar.nparts;
			while (( _g < _g1.length ))
			{
				nx3.NPart part = _g1.__get(_g);
				 ++ _g;
				haxe.root.Xml partXml = nx3.xml.PartXML.toXml(part);
				xml.addChild(partXml);
			}
			
		}
		
		{
			nx3.EBarType _g2 = bar.type;
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
					xml.set("type", haxe.root.Std.string(bar.type));
					break;
				}
				
			}
			
		}
		
		if (( bar.time != null )) 
		{
			nx3.ETime _g3 = bar.time;
			switch (haxe.root.Type.enumIndex(_g3))
			{
				case 5:
				{
					{
					}
					
					break;
				}
				
				
				default:
				{
					xml.set("time", haxe.root.Std.string(nx3.ETimeUtils.toString(bar.time)));
					break;
				}
				
			}
			
		}
		
		{
			nx3.EDisplayALN _g4 = bar.timeDisplay;
			switch (haxe.root.Type.enumIndex(_g4))
			{
				case 1:
				{
					{
					}
					
					break;
				}
				
				
				default:
				{
					xml.set("timedisplay", haxe.root.Std.string(bar.timeDisplay));
					break;
				}
				
			}
			
		}
		
		return xml;
	}
	
	
	public static   nx3.NBar fromXmlStr(java.lang.String xmlStr)
	{
		haxe.root.Xml xml = haxe.root.Xml.parse(xmlStr).firstElement();
		haxe.root.Array<nx3.NPart> parts = new haxe.root.Array<nx3.NPart>(new nx3.NPart[]{});
		{
			java.lang.Object __temp_iterator202 = xml.elements();
			while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator202, "hasNext", null)))
			{
				haxe.root.Xml p = ((haxe.root.Xml) (haxe.lang.Runtime.callField(__temp_iterator202, "next", null)) );
				nx3.NPart part = nx3.xml.PartXML.fromXmlStr(p.toString());
				parts.push(part);
			}
			
		}
		
		java.lang.String typeStr = xml.get("type");
		nx3.EBarType type = null;
		if (( typeStr == null )) 
		{
			type = nx3.EBarType.Normal;
		}
		 else 
		{
			type = cx.EnumTools.createFromString(nx3.EBarType.class, typeStr);
		}
		
		nx3.ETime time = null;
		java.lang.String timeStr = xml.get("time");
		if (( timeStr != null )) 
		{
			time = nx3.ETimeUtils.fromString(timeStr);
		}
		
		java.lang.String timeDisplayStr = xml.get("timedisplay");
		nx3.EDisplayALN timeDisplay = null;
		if (( timeDisplayStr == null )) 
		{
			timeDisplay = nx3.EDisplayALN.Layout;
		}
		 else 
		{
			timeDisplay = cx.EnumTools.createFromString(nx3.EDisplayALN.class, timeDisplayStr);
		}
		
		return new nx3.NBar(((haxe.root.Array<nx3.NPart>) (parts) ), ((nx3.EBarType) (type) ), ((nx3.ETime) (time) ), ((nx3.EDisplayALN) (timeDisplay) ), ((nx3.EAllotment) (null) ), ((java.lang.Object) (null) ));
	}
	
	
	public static   boolean test(nx3.NBar item)
	{
		java.lang.String str = nx3.xml.BarXML.toXml(item).toString();
		nx3.NBar item2 = nx3.xml.BarXML.fromXmlStr(str);
		java.lang.String str2 = nx3.xml.BarXML.toXml(item2).toString();
		haxe.Log.trace.__hx_invoke2_o(0.0, str, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.xml.BarXML", "BarXML.hx", "test"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (100) )) )})));
		haxe.Log.trace.__hx_invoke2_o(0.0, str2, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.xml.BarXML", "BarXML.hx", "test"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (101) )) )})));
		return haxe.lang.Runtime.valEq(str, str2);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.xml.BarXML(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.xml.BarXML();
	}
	
	
}


