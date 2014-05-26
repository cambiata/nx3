package nx3.events;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class BarEvent extends haxe.lang.Enum
{
	static 
	{
		nx3.events.BarEvent.constructs = new haxe.root.Array<java.lang.String>(new java.lang.String[]{"NotesChange", "NotesDelete", "NotesAdd"});
	}
	public    BarEvent(int index, haxe.root.Array<java.lang.Object> params)
	{
		super(index, params);
	}
	
	
	public static  haxe.root.Array<java.lang.String> constructs;
	
	public static   nx3.events.BarEvent NotesChange(haxe.root.Array<java.lang.Object> notes, nx3.events.NoteChange action)
	{
		return new nx3.events.BarEvent(((int) (0) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{notes, action})) ));
	}
	
	
	public static   nx3.events.BarEvent NotesDelete(haxe.root.Array<java.lang.Object> notes, haxe.root.Array<nx3.events.NoteInfo> removedNotes)
	{
		return new nx3.events.BarEvent(((int) (1) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{notes, removedNotes})) ));
	}
	
	
	public static   nx3.events.BarEvent NotesAdd(haxe.root.Array<java.lang.Object> notes, haxe.root.Array<nx3.events.NoteInfo> noteinfos)
	{
		return new nx3.events.BarEvent(((int) (2) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{notes, noteinfos})) ));
	}
	
	
}


