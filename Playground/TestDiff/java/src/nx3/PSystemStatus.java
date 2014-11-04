package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PSystemStatus extends haxe.lang.Enum
{
	static 
	{
		nx3.PSystemStatus.constructs = new haxe.root.Array<java.lang.String>(new java.lang.String[]{"Ok", "Problem"});
		nx3.PSystemStatus.Ok = new nx3.PSystemStatus(((int) (0) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{})) ));
	}
	public    PSystemStatus(int index, haxe.root.Array<java.lang.Object> params)
	{
		super(index, params);
	}
	
	
	public static  haxe.root.Array<java.lang.String> constructs;
	
	public static  nx3.PSystemStatus Ok;
	
	public static   nx3.PSystemStatus Problem(int code, java.lang.String msg)
	{
		return new nx3.PSystemStatus(((int) (1) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{code, msg})) ));
	}
	
	
}


