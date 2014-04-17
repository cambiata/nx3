package ;

import js.Browser;
import js.JQuery;
import js.Lib;
import nx3.qs.QuickSyntaxBuilder;
import nx3.qs.QuickSyntaxParser;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.TargetSvg;
import nx3.VBar;
import nx3.xml.BarXML;
using cx.ArrayTools;
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
		
		//var jq = new JQuery('#test');
		//var xmlStr = jq.html();
		//var xmlStr = Browser.document.getElementById('code').textContent;
		//Lib.alert(xmlStr);
		var codeelement = Browser.document.getElementById('code');
		var code = codeelement.textContent;
		var svgelement = codeelement.parentNode;		
		
		var parser = new QuickSyntaxParser(code);
		var qsnotes = parser.parseToQSyntaxNotes();
		var builder = new QuickSyntaxBuilder(qsnotes);
		var nbars = builder.getNBars();		
		var vbar = new VBar(nbars.first());

		var target = new TargetSvg('#big', Scaling.MID);
		var r = new Renderer(target, 10, 80);
		r.renderBar(vbar);				
		
		
		/*
		var nbar = BarXML.fromXmlStr(xmlStr);
		var vbar = new VBar(nbar);
		var target = new TargetSvg('#normal', Scaling.BIG);
		var r = new Renderer(target, 10, 240);
		r.renderBar(vbar);		
	*/
		
	}
	
}