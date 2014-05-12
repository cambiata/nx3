package nx3.render.action;
import nx3.PNote;
import nx3.render.action.EActionType;

/**
 * ...
 * @author Jonas Nyström
 */
class TestInteractivity extends InteractivityBase
{	
	override public function onNoteMouseDown(note:PNote, info:EActionInfo)
	{
		trace('mouse down on note with levels ' + note.nnote.getHeadLevels());
	}
	
	
}