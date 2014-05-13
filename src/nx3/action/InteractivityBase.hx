package nx3.action;
import nx3.PNote;

/**
 * ...
 * @author Jonas Nyström
 */
class InteractivityBase implements IInteractivity
{

	public function new() 
	{
		
	}
	
	public function handleAction(action:EActionType)
	{
		switch(action)
		{
			case NoteAction(type, note, info):
				{
					switch type
					{
						case EActivityType.MouseDown:
							onNoteMouseDown(note, info);
						case EActivityType.MouseUp:
							onNoteMouseUp(note, info);
						case EActivityType.MouseOver:
							onNoteMouseOver(note, info);
						case EActivityType.MouseOut:
							onNoteMouseOut(note, info);
					}
				}
			default:
		}
	}
	
	public function onNoteMouseDown(note:PNote, info:EActionInfo)
	{
		//trace('mouse down on note with levels ' + note.nnote.getHeadLevels());
	}
	
	public function onNoteMouseUp(note:PNote, info:EActionInfo)
	{
		//trace('mouse down on note with levels ' + note.nnote.getHeadLevels());
	}	
	
	public function onNoteMouseOver(note:PNote, info:EActionInfo)
	{
		//trace('mouse down on note with levels ' + note.nnote.getHeadLevels());
	}
	
	public function onNoteMouseOut(note:PNote, info:EActionInfo)
	{
		//trace('mouse down on note with levels ' + note.nnote.getHeadLevels());
	}		
}