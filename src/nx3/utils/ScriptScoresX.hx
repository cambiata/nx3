package nx3.utils;
import dtx.DOMNode;
using StringTools;
using Detox;
/**
 * ScriptScoresX
 * @author Jonas Nyström
 */
class ScriptScoresX {
	
  	private static var instance:ScriptScoresX;
  
  	public static inline function getInstance()
  	{
		if (instance == null)
			return instance = new ScriptScoresX();
		else
			return instance;
  	}
	
	private function new() { }
	
	public function resolveScriptScores(xmlString:String) {		
		var parsed = Detox.parse(xmlString.trim());		
		var html = '';
		for (node in parsed.collection) {
			switch Std.string(node.nodeType) {
				case 'element': {				
					Detox.setDocument(node);					
					invokeScriptScores(node);
					html += Std.string(Detox.document);					
				}
				default: html += Std.string(node);				
			}
		}
		return html;
	}
	
	public function invokeScriptScores(node:DOMNode) {
		var scripts = node.find('.nx-score');
		for (script in scripts) {
			var scriptScore = new ScriptScoreX(script);
		}			
	}
	
	public function invokeBodyScores() {
		this.invokeScriptScores(Detox.find('body').first());
	}
	
}