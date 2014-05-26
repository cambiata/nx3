package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class ENoteType extends haxe.lang.Enum
{
	static 
	{
		nx3.ENoteType.constructs = new haxe.root.Array<java.lang.String>(new java.lang.String[]{"Note", "Pause", "BarPause", "Tpl", "Lyric", "Chord", "Dynamics"});
		nx3.ENoteType.BarPause = new nx3.ENoteType(((int) (2) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{})) ));
		nx3.ENoteType.Chord = new nx3.ENoteType(((int) (5) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{})) ));
		nx3.ENoteType.Dynamics = new nx3.ENoteType(((int) (6) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{})) ));
	}
	public    ENoteType(int index, haxe.root.Array<java.lang.Object> params)
	{
		super(index, params);
	}
	
	
	public static  haxe.root.Array<java.lang.String> constructs;
	
	public static   nx3.ENoteType Note(haxe.root.Array<nx3.NHead> heads, nx3.ENotationVariant variant, haxe.root.Array<nx3.ENoteArticulation> articulations, haxe.root.Array<nx3.ENoteAttributes> attributes)
	{
		return new nx3.ENoteType(((int) (0) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{heads, variant, articulations, attributes})) ));
	}
	
	
	public static   nx3.ENoteType Pause(int level)
	{
		return new nx3.ENoteType(((int) (1) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{level})) ));
	}
	
	
	public static  nx3.ENoteType BarPause;
	
	public static   nx3.ENoteType Tpl(int level)
	{
		return new nx3.ENoteType(((int) (3) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{level})) ));
	}
	
	
	public static   nx3.ENoteType Lyric(java.lang.String text, nx3.EPosition offset, nx3.ELyricContinuation continuation, java.lang.Object font)
	{
		return new nx3.ENoteType(((int) (4) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{text, offset, continuation, font})) ));
	}
	
	
	public static  nx3.ENoteType Chord;
	
	public static  nx3.ENoteType Dynamics;
	
}


