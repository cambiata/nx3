package;

import js.Browser;
import js.html.Element;
import js.html.ScriptElement;
import js.Lib;
import nx3.js.ScriptScores;



/**
 * ...
 * @author 
 */

class Main 
{
	
	static function main() 
	{
		/*
		var div = Browser.document.getElementById('embed');
		var script:ScriptElement  = cast Browser.document.getElementById('xmlscript');
		var text = script.innerHTML;
		trace(text);
		*/
		
		/*
		trace('hello');
		var scripts = Browser.document.getElementsByClassName('nx-score');
		for (script in scripts) {
			trace(script);
			var scriptElement:ScriptElement = cast script;
			var scriptText = scriptElement.innerHTML;
			trace(scriptText);
			
			var parent:Element = scriptElement.parentElement;
			trace(parent);
		}
		*/
		
		ScriptScores.getInstance().init();
		ScriptScores.getInstance().render(800);
		
	}
	
}