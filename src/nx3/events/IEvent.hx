package nx3.events;

/**
 * IEvent
 * @author Jonas Nyström
 */

interface IEvent 
{
	function doEvent():Void;
	function undoEvent():Void;
}