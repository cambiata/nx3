package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class ENoteAttributes extends haxe.lang.Enum
{
	static 
	{
		nx3.ENoteAttributes.constructs = new haxe.root.Array<java.lang.String>(new java.lang.String[]{"Arpeggio", "Clef"});
	}
	public    ENoteAttributes(int index, haxe.root.Array<java.lang.Object> params)
	{
		super(index, params);
	}
	
	
	public static  haxe.root.Array<java.lang.String> constructs;
	
	public static   nx3.ENoteAttributes Arpeggio(int top, int bottomY)
	{
		return new nx3.ENoteAttributes(((int) (0) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{top, bottomY})) ));
	}
	
	
	public static   nx3.ENoteAttributes Clef(nx3.EClef variant)
	{
		return new nx3.ENoteAttributes(((int) (1) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{variant})) ));
	}
	
	
}


