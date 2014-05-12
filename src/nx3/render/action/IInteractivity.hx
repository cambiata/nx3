package nx3.render.action;
import nx3.render.action.EActionType;

/**
 * ...
 * @author Jonas Nyström
 */
interface IInteractivity
{
	public function handleAction(action:EActionType):Void;
}