package haxe.root;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Main extends nx3.render.TargetJFrame
{
	public static void main(String[] args)
	{
		main();
	}
	public    Main(haxe.lang.EmptyObject empty)
	{
		super(haxe.lang.EmptyObject.EMPTY);
	}
	
	
	public    Main()
	{
		super();
		this.surface.paintFunction = ( (( haxe.root.Main_new_110__Fun.__hx_current != null )) ? (haxe.root.Main_new_110__Fun.__hx_current) : (haxe.root.Main_new_110__Fun.__hx_current = ((haxe.root.Main_new_110__Fun) (new haxe.root.Main_new_110__Fun()) )) );
	}
	
	
	public static   void main()
	{
		java.lang.String s = "Hello world";
		java.lang.String txt = cx.FileTools.getContent("test.txt");
		haxe.Log.trace.__hx_invoke2_o(0.0, txt, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"Main", "Main.hx", "main"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (87) )) )})));
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new haxe.root.Main(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new haxe.root.Main();
	}
	
	
}


