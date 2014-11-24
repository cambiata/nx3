package ;

import js.Browser;
import js.JQuery;
import js.Lib;
import nx3.PBar;
import nx3.PScore;
import nx3.qs.QuickSyntaxBuilder;
import nx3.qs.QuickSyntaxParser;
import nx3.render.ITarget;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.TargetSvg;
import nx3.render.TargetSvgXml;
import nx3.test.TestItems;
import nx3.xml.BarsXML;
import nx3.xml.BarXML;
import nx3.xml.ScoreXML;
using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */

class Main 
{
	
	static function main() 
	{
		var codeelement = new JQuery('#code');
		
		
		var code = codeelement.text();
		trace(code);
		var svgelement = codeelement.parent();
		var svgid = svgelement.attr('id');
		trace(svgid);

		var target = new TargetSvgXml('$svgid', Scaling.NORMAL);
		var r = new Renderer(target, 0, 0);
					

		render(code, target, r);
		
		var textarea = new JQuery('#ta');
		var oldcode = '';
		textarea.keyup(function(event) {
			var code = StringTools.trim(textarea.val());
			if (code == oldcode) return;
		
			try {
				render(code, target, r);
			} catch (e:Dynamic) trace(e);
			
			oldcode = code;
		});
		
		
	}
	
	static function render (code:String, target:TargetSvgXml, renderer:Renderer)
	{
				var parser = new QuickSyntaxParser(code);
				var qsnotes = parser.parseToQSyntaxNotes();
				trace(qsnotes);
				var builder = new QuickSyntaxBuilder(qsnotes);
				var nbars = builder.getNBars();		
				var pbar = new PBar(nbars.first());
				var nscore = builder.getNScore();
				var score = new PScore(nscore);
				
				target.clear();
				//renderer.renderPBar(pbar);			
				renderer.renderScore(score, 0, 0, 1000 / target.getScaling().unitX);
				var svgstring = target.getXml().toString();
				Browser.document.getElementById('big').innerHTML = svgstring;
				
				var xmlStr = ScoreXML.toXml(score.nscore).toString();
				Browser.document.getElementById('xml').innerHTML = xmlStr;
	
	}
}