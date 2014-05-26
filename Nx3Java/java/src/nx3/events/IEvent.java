package nx3.events;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  interface IEvent extends haxe.lang.IHxObject
{
	   void doEvent();
	
	   void undoEvent();
	
}


