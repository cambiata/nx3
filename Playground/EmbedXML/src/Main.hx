package;

import audiotools.webaudio.pitch.PitchRecognizer;
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
		
		Browser.document.getElementById('btnScores').onmousedown = function(e) {
			ScriptScores.getInstance().init();
			ScriptScores.getInstance().render();			
		}

		Browser.document.getElementById('btnClear').onmousedown = function(e) {
			ScriptScores.getInstance().init();
			ScriptScores.getInstance().clearAll();
		}		
		
		Browser.document.getElementById('btnPitch').onmousedown = function(e) {
			PitchRecognizer.getInstance();
			PitchRecognizer.getInstance().onPitch = function(currentFreq:Float, closestIndex:Int, maxVolume:Float) {
				Browser.document.getElementById('lblPitch').textContent = '$currentFreq';
			}
			
			
		}
		
	}
	
}