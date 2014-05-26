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
		this.surface.paintFunction = ( (( haxe.root.Main_new_104__Fun.__hx_current != null )) ? (haxe.root.Main_new_104__Fun.__hx_current) : (haxe.root.Main_new_104__Fun.__hx_current = ((haxe.root.Main_new_104__Fun) (new haxe.root.Main_new_104__Fun()) )) );
	}
	
	
	public static   void main()
	{
		java.lang.String classCode = "";
		haxe.root.Array<java.lang.String> fields = haxe.root.Reflect.fields(nx3.render.svg.SvgElements.class);
		{
			int _g = 0;
			while (( _g < fields.length ))
			{
				java.lang.String field = fields.__get(_g);
				 ++ _g;
				haxe.Log.trace.__hx_invoke2_o(0.0, field, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"Main", "Main.hx", "main"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (62) )) )})));
				java.lang.String svgString = haxe.lang.Runtime.toString(haxe.root.Reflect.field(nx3.render.svg.SvgElements.class, field));
				svgString = cx.java.SvgTranscoder.addNamespace(svgString);
				try 
				{
					cx.java.SvgTranscoder transcoder = new cx.java.SvgTranscoder(haxe.lang.Runtime.toString(svgString));
					java.lang.String classString = transcoder.toClassCode(null);
					java.lang.String shapeCode = cx.java.SvgTranscoder.extractShapeCode(classString);
					java.lang.String procedureCode = cx.java.SvgTranscoder.getShapeProcedureCode(shapeCode, field);
					haxe.Log.trace.__hx_invoke2_o(0.0, procedureCode, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"Main", "Main.hx", "main"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (71) )) )})));
					classCode += ( procedureCode + "\r\r" );
				}
				catch (java.lang.Throwable __temp_catchallException294)
				{
					java.lang.Object __temp_catchall295 = __temp_catchallException294;
					if (( __temp_catchall295 instanceof haxe.lang.HaxeException )) 
					{
						__temp_catchall295 = ((haxe.lang.HaxeException) (__temp_catchallException294) ).obj;
					}
					
					{
						java.lang.Object e = __temp_catchall295;
						haxe.Log.trace.__hx_invoke2_o(0.0, e, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"Main", "Main.hx", "main"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (76) )) )})));
					}
					
				}
				
				
			}
			
		}
		
		haxe.Log.trace.__hx_invoke2_o(0.0, fields, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"Main", "Main.hx", "main"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (80) )) )})));
		cx.FileTools.saveContent("Elements.hx", classCode);
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


