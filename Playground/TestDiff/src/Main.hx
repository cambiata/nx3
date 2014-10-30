package;

import cx.diff.Differ;

import nx3.NHead;
import nx3.NNote;
import nx3.NVoice;

/**
 * ...
 * @author Jonas Nyström
 */

class Main 
{
	public function new() 
	{
	
		var original = new NVoice([new NNote([new NHead()])]);		
		var differ = new Differ(original);
		
		var mod1 = new NVoice([new NNote([new NHead(3)])]);		
		differ.modify(mod1, 'change head level');
		
		var mod2 = new NVoice([new NNote([new NHead(3), new NHead(5)])]);		
		differ.modify(mod2, 'add head');	
		

		var restore1 = differ.undo().obj;
		trace(Std.string(mod1) == Std.string(restore1)); // True! :-)
		
		var restoreOriginal = differ.undo().obj;
		trace(Std.string(original) == Std.string(restoreOriginal)); // True! :-)	

	}
}



