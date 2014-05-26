package nx3.events;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NoteChange extends haxe.lang.Enum
{
	static 
	{
		nx3.events.NoteChange.constructs = new haxe.root.Array<java.lang.String>(new java.lang.String[]{"LevelRel", "LevelAbs", "Tie", "ValAbs", "ValRel", "Dot", "HeadLevelRel", "HeadLevelAbs", "Pause", "Sign"});
	}
	public    NoteChange(int index, haxe.root.Array<java.lang.Object> params)
	{
		super(index, params);
	}
	
	
	public static  haxe.root.Array<java.lang.String> constructs;
	
	public static   nx3.events.NoteChange LevelRel(int level)
	{
		return new nx3.events.NoteChange(((int) (0) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{level})) ));
	}
	
	
	public static   nx3.events.NoteChange LevelAbs(int level)
	{
		return new nx3.events.NoteChange(((int) (1) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{level})) ));
	}
	
	
	public static   nx3.events.NoteChange Tie(boolean useTie)
	{
		return new nx3.events.NoteChange(((int) (2) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{useTie})) ));
	}
	
	
	public static   nx3.events.NoteChange ValAbs(nx3.ENoteVal val)
	{
		return new nx3.events.NoteChange(((int) (3) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{val})) ));
	}
	
	
	public static   nx3.events.NoteChange ValRel(double factor)
	{
		return new nx3.events.NoteChange(((int) (4) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{factor})) ));
	}
	
	
	public static   nx3.events.NoteChange Dot(boolean useDot)
	{
		return new nx3.events.NoteChange(((int) (5) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{useDot})) ));
	}
	
	
	public static   nx3.events.NoteChange HeadLevelRel(int headIdx, int level)
	{
		return new nx3.events.NoteChange(((int) (6) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{headIdx, level})) ));
	}
	
	
	public static   nx3.events.NoteChange HeadLevelAbs(int headIdx, int level)
	{
		return new nx3.events.NoteChange(((int) (7) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{headIdx, level})) ));
	}
	
	
	public static   nx3.events.NoteChange Pause(boolean on)
	{
		return new nx3.events.NoteChange(((int) (8) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{on})) ));
	}
	
	
	public static   nx3.events.NoteChange Sign(nx3.ESign type)
	{
		return new nx3.events.NoteChange(((int) (9) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{type})) ));
	}
	
	
}


