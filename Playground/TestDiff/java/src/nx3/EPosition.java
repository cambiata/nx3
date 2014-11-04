package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class EPosition extends haxe.lang.Enum
{
	static 
	{
		nx3.EPosition.constructs = new haxe.root.Array<java.lang.String>(new java.lang.String[]{"X", "Y", "XY", "XYW"});
	}
	public    EPosition(int index, haxe.root.Array<java.lang.Object> params)
	{
		super(index, params);
	}
	
	
	public static  haxe.root.Array<java.lang.String> constructs;
	
	public static   nx3.EPosition X(double x)
	{
		return new nx3.EPosition(((int) (0) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{x})) ));
	}
	
	
	public static   nx3.EPosition Y(double y)
	{
		return new nx3.EPosition(((int) (1) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{y})) ));
	}
	
	
	public static   nx3.EPosition XY(double x, double y)
	{
		return new nx3.EPosition(((int) (2) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{x, y})) ));
	}
	
	
	public static   nx3.EPosition XYW(double x, double y, double w)
	{
		return new nx3.EPosition(((int) (3) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{x, y, w})) ));
	}
	
	
}


