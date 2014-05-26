package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class ETie extends haxe.lang.Enum
{
	static 
	{
		nx3.ETie.constructs = new haxe.root.Array<java.lang.String>(new java.lang.String[]{"Tie", "Gliss"});
	}
	public    ETie(int index, haxe.root.Array<java.lang.Object> params)
	{
		super(index, params);
	}
	
	
	public static  haxe.root.Array<java.lang.String> constructs;
	
	public static   nx3.ETie Tie(nx3.EDirectionUAD direction, int level)
	{
		return new nx3.ETie(((int) (0) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{direction, level})) ));
	}
	
	
	public static   nx3.ETie Gliss(nx3.EDirectionUAD direction, int levelLeft, int levelRight)
	{
		return new nx3.ETie(((int) (1) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{direction, levelLeft, levelRight})) ));
	}
	
	
}


