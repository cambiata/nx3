package nx3.action;
import nx3.PHead;
import nx3.PNote;

/**
 * ...
 * @author Jonas Nyström
 */
enum  EActionType
{
	HeadAction(type: EActivityType, head:PHead, info: EActionInfo);	
	NoteAction(type: EActivityType, note:PNote, info:EActionInfo);	
}