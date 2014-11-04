package nx3.qs;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class ParserEvents extends haxe.lang.Enum
{
	static 
	{
		nx3.qs.ParserEvents.constructs = new haxe.root.Array<java.lang.String>(new java.lang.String[]{"SetGuessOctave", "SetOctave", "SetNoteVal", "SetMode", "SetBarClef"});
	}
	public    ParserEvents(int index, haxe.root.Array<java.lang.Object> params)
	{
		super(index, params);
	}
	
	
	public static  haxe.root.Array<java.lang.String> constructs;
	
	public static   nx3.qs.ParserEvents SetGuessOctave(boolean mode)
	{
		return new nx3.qs.ParserEvents(((int) (0) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{mode})) ));
	}
	
	
	public static   nx3.qs.ParserEvents SetOctave(int octave)
	{
		return new nx3.qs.ParserEvents(((int) (1) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{octave})) ));
	}
	
	
	public static   nx3.qs.ParserEvents SetNoteVal(nx3.ENoteVal value)
	{
		return new nx3.qs.ParserEvents(((int) (2) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{value})) ));
	}
	
	
	public static   nx3.qs.ParserEvents SetMode(nx3.qs.ContentMode mode)
	{
		return new nx3.qs.ParserEvents(((int) (3) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{mode})) ));
	}
	
	
	public static   nx3.qs.ParserEvents SetBarClef(nx3.EClef clef)
	{
		return new nx3.qs.ParserEvents(((int) (4) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{clef})) ));
	}
	
	
}


