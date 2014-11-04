package nx3.events;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NoteInfo extends haxe.lang.Enum
{
	static 
	{
		nx3.events.NoteInfo.constructs = new haxe.root.Array<java.lang.String>(new java.lang.String[]{"Note", "Pause", "Lyric"});
	}
	public    NoteInfo(int index, haxe.root.Array<java.lang.Object> params)
	{
		super(index, params);
	}
	
	
	public static  haxe.root.Array<java.lang.String> constructs;
	
	public static   nx3.events.NoteInfo Note(nx3.ENoteVal val, haxe.root.Array<java.lang.Object> levels, haxe.root.Array<nx3.ESign> signs, haxe.root.Array<nx3.ETie> ties)
	{
		return new nx3.events.NoteInfo(((int) (0) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{val, levels, signs, ties})) ));
	}
	
	
	public static   nx3.events.NoteInfo Pause(nx3.ENoteVal val, int level)
	{
		return new nx3.events.NoteInfo(((int) (1) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{val, level})) ));
	}
	
	
	public static   nx3.events.NoteInfo Lyric(nx3.ENoteVal val, java.lang.String text)
	{
		return new nx3.events.NoteInfo(((int) (2) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{val, text})) ));
	}
	
	
}


