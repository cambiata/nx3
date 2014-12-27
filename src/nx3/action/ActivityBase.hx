package nx3.action;
import nx3.action.EActivityType;

/**
 * ...
 * @author Jonas Nyström
 */
class ActivityBase /*implements IActivity*/
{
	var type:EActivityType;

	public function new(type:EActivityType) 
	{
		this.type = type;
	}
	
	/* INTERFACE nx3.render.action.IActivity */
	
	public function action():Void 
	{
		
	}
	
}