package nx3.xml;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class ScoreXML extends haxe.lang.HxObject
{
	static 
	{
		nx3.xml.ScoreXML.XSCORE = "score";
		nx3.xml.ScoreXML.XCONFIG = "config";
	}
	public    ScoreXML(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    ScoreXML()
	{
		nx3.xml.ScoreXML.__hx_ctor_nx3_xml_ScoreXML(this);
	}
	
	
	public static   void __hx_ctor_nx3_xml_ScoreXML(nx3.xml.ScoreXML __temp_me194)
	{
		{
		}
		
	}
	
	
	public static  java.lang.String XSCORE;
	
	public static  java.lang.String XCONFIG;
	
	public static   haxe.root.Xml toXml(nx3.NScore score)
	{
		haxe.root.Xml xml = haxe.root.Xml.createElement("score");
		haxe.root.Xml config = haxe.root.Xml.createElement("config");
		config.set("test", "12345");
		xml.addChild(config);
		{
			java.lang.Object __temp_iterator246 = score.iterator();
			while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator246, "hasNext", null)))
			{
				nx3.NBar bar = ((nx3.NBar) (haxe.lang.Runtime.callField(__temp_iterator246, "next", null)) );
				haxe.root.Xml barXml = nx3.xml.BarXML.toXml(bar);
				xml.addChild(barXml);
			}
			
		}
		
		return xml;
	}
	
	
	public static   nx3.NScore fromXmlStr(java.lang.String xmlStr)
	{
		haxe.root.Xml xml = haxe.root.Xml.parse(xmlStr).firstElement();
		haxe.root.Array<nx3.NBar> bars = new haxe.root.Array<nx3.NBar>(new nx3.NBar[]{});
		haxe.root.Xml config = ((haxe.root.Xml) (haxe.lang.Runtime.callField(xml.elementsNamed("config"), "next", null)) );
		java.lang.Object configObject = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		if (( config != null )) 
		{
			{
				java.lang.Object __temp_iterator247 = config.attributes();
				while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator247, "hasNext", null)))
				{
					java.lang.String attr = haxe.lang.Runtime.toString(haxe.lang.Runtime.callField(__temp_iterator247, "next", null));
					haxe.root.Reflect.setField(configObject, attr, config.get(attr));
				}
				
			}
			
		}
		
		{
			java.lang.Object __temp_iterator248 = xml.elementsNamed("bar");
			while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator248, "hasNext", null)))
			{
				haxe.root.Xml b = ((haxe.root.Xml) (haxe.lang.Runtime.callField(__temp_iterator248, "next", null)) );
				nx3.NBar bar = nx3.xml.BarXML.fromXmlStr(b.toString());
				bars.push(bar);
			}
			
		}
		
		nx3.NScore score = new nx3.NScore(((haxe.root.Array<nx3.NBar>) (bars) ));
		score.configuration = configObject;
		return score;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.xml.ScoreXML(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.xml.ScoreXML();
	}
	
	
}


