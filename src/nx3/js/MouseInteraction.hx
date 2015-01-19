package nx3.js;
import nx3.audio.NotenrItem;
import nx3.PNote;

/**
 * @author Jonas Nyström
 */

enum MouseInteraction {	
	PlayNote(scoreId:String, note:PNote, noteinfo:NotenrItem, sound:String);
	StopNote(scoreId:String);	
	ShowTooltip(scoreId:String, note:PNote, noteinfo:NotenrItem, type:String);
	HideTooltip(scoreId:String);
}