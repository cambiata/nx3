package nx3.xml;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class BarsXML extends haxe.lang.HxObject
{
	static 
	{
		nx3.xml.BarsXML.XBARS = "bars";
	}
	public    BarsXML(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    BarsXML()
	{
		nx3.xml.BarsXML.__hx_ctor_nx3_xml_BarsXML(this);
	}
	
	
	public static   void __hx_ctor_nx3_xml_BarsXML(nx3.xml.BarsXML __temp_me190)
	{
		{
		}
		
	}
	
	
	public static  java.lang.String XBARS;
	
	public static   haxe.root.Xml toXml(haxe.root.Array<nx3.NBar> bars)
	{
		haxe.root.Xml xml = haxe.root.Xml.createElement("bars");
		{
			int _g = 0;
			while (( _g < bars.length ))
			{
				nx3.NBar bar = bars.__get(_g);
				 ++ _g;
				haxe.root.Xml barXml = nx3.xml.BarXML.toXml(bar);
				xml.addChild(barXml);
			}
			
		}
		
		return xml;
	}
	
	
	public static   haxe.root.Array<nx3.NBar> fromXmlStr(java.lang.String xmlStr)
	{
		haxe.root.Xml xml = haxe.root.Xml.parse(xmlStr).firstElement();
		haxe.root.Array<nx3.NBar> bars = new haxe.root.Array<nx3.NBar>(new nx3.NBar[]{});
		{
			java.lang.Object __temp_iterator243 = xml.elements();
			while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator243, "hasNext", null)))
			{
				haxe.root.Xml b = ((haxe.root.Xml) (haxe.lang.Runtime.callField(__temp_iterator243, "next", null)) );
				nx3.NBar bar = nx3.xml.BarXML.fromXmlStr(b.toString());
				bars.push(bar);
			}
			
		}
		
		return bars;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.xml.BarsXML(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.xml.BarsXML();
	}
	
	
}


