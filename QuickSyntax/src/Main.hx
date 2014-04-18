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
		
		var parser = new QuickSyntaxParser(code);
		var qsnotes = parser.parseToQSyntaxNotes();
		var builder = new QuickSyntaxBuilder(qsnotes);
		var nbars = builder.getNBars();		
		var vbar = new VBar(nbars.first());

		var target = new TargetSvg('#$svgid', Scaling.MID);
		var r = new Renderer(target, 10, 80);
		r.renderBar(vbar);				

		var textarea = new JQuery('#ta');
		var oldcode = '';
		textarea.keyup(function(event) {
			var code = StringTools.trim(textarea.val());
			if (code == oldcode) return;
	
			try {
				var parser = new QuickSyntaxParser(code);
				var qsnotes = parser.parseToQSyntaxNotes();
				var builder = new QuickSyntaxBuilder(qsnotes);
				var nbars = builder.getNBars();		
				var vbar = new VBar(nbars.first());
				target.clear();
				r.renderBar(vbar);				
			} catch (e:Dynamic) trace(e);
			
			oldcode = code;
		});
		
		
	}
	
}