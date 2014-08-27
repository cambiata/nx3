package nx3.xml;
import nx3.NBar;
import nx3.NBars;
import nx3.NScore;

/**
 * ...
 * @author Jonas Nyström
 */

 using nx3.xml.BarXML;
 
class ScoreXML
{

	static public inline var XSCORE:String = "score";
	static public inline var XCONFIG:String = "config";
	
	static public function toXml(score:NScore): Xml
	{
		var xml:Xml = Xml.createElement(XSCORE);		
		
		//xml.addChild(Xml.parse('<config />'));
		var config:Xml = Xml.createElement(XCONFIG);
		
		config.set('test', '12345');
		
		xml.addChild(config);
		
		
		for (bar in score)
		{
			var barXml = bar.toXml();
			xml.addChild(barXml);
		}
		return xml;
	}

	static public function fromXmlStr(xmlStr:String):NScore
	{
		var xml:Xml = Xml.parse(xmlStr).firstElement();		
		var bars:NBars = [];
		
		var config:Xml = xml.elementsNamed(XCONFIG).next();
		var configObject = { };
		if (config != null)
		{
			for (attr in config.attributes())
			{
				Reflect.setField(configObject, attr,  config.get(attr));
			}
		}

		
		for (b in xml.elementsNamed(BarXML.XBAR))
		{
			var bar:NBar = BarXML.fromXmlStr(b.toString());
			bars.push(bar);			
		}
		
		var score = new NScore(bars);
		score.configuration = configObject;
		
		return score;		
		
	}
	
	
}