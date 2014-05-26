package haxe;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class StackItem extends haxe.lang.Enum
{
	static 
	{
		haxe.StackItem.constructs = new haxe.root.Array<java.lang.String>(new java.lang.String[]{"CFunction", "Module", "FilePos", "Method", "LocalFunction"});
		haxe.StackItem.CFunction = new haxe.StackItem(((int) (0) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{})) ));
	}
	public    StackItem(int index, haxe.root.Array<java.lang.Object> params)
	{
		super(index, params);
	}
	
	
	public static  haxe.root.Array<java.lang.String> constructs;
	
	public static  haxe.StackItem CFunction;
	
	public static   haxe.StackItem Module(java.lang.String m)
	{
		return new haxe.StackItem(((int) (1) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{m})) ));
	}
	
	
	public static   haxe.StackItem FilePos(haxe.StackItem s, java.lang.String file, int line)
	{
		return new haxe.StackItem(((int) (2) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{s, file, line})) ));
	}
	
	
	public static   haxe.StackItem Method(java.lang.String classname, java.lang.String method)
	{
		return new haxe.StackItem(((int) (3) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{classname, method})) ));
	}
	
	
	public static   haxe.StackItem LocalFunction(int v)
	{
		return new haxe.StackItem(((int) (4) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{v})) ));
	}
	
	
}


