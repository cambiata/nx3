package ;

import js.Browser;
import js.JQuery;
import js.Lib;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.TargetSvg;
import nx3.render.TestTarget;
import nx3.VBar;
import nx3.xml.BarXML;

/**
 * ...
 * @author Jonas Nyström
 */

class Main 
{
	
	static function main() 
	{
		
		/*
		var vbar = TestTarget.testBar1();
		var xmlStr = BarXML.toXml(vbar.nbar).toString();
		trace(xmlStr);
		*/
		
		
		var jq = new JQuery('#test');
		var xmlStr = jq.html();
		//trace(xmlStr);
		//Lib.alert(xmlStr);
		
		
		var nbar = BarXML.fromXmlStr(xmlStr);
		var vbar = new VBar(nbar);
		var target = new TargetSvg('#normal', Scaling.BIG);
		var r = new Renderer(target, 10, 240);
		r.renderBar(vbar);		

		
	}
	
}