package nx3.render.scaling;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Scaling extends haxe.lang.HxObject
{
	static 
	{
		nx3.render.scaling.Scaling.MID = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"fontScaling", "linesWidth", "noteWidth", "quarterNoteWidth", "signPosWidth", "space", "svgScale", "svgX", "svgY", "unitX", "unitY"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (1.5) ), ((java.lang.Object) (1.25) ), ((java.lang.Object) (((double) (10) )) ), ((java.lang.Object) (2.5) ), ((java.lang.Object) (14.0) ), ((java.lang.Object) (12.0) ), ((java.lang.Object) (.27) ), ((java.lang.Object) (((double) (0) )) ), ((java.lang.Object) (-55.0) ), ((java.lang.Object) (((double) (5) )) ), ((java.lang.Object) (6.0) )}));
		nx3.render.scaling.Scaling.NORMAL = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"fontScaling", "linesWidth", "noteWidth", "quarterNoteWidth", "signPosWidth", "space", "svgScale", "svgX", "svgY", "unitX", "unitY"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (1.0) ), ((java.lang.Object) (.75) ), ((java.lang.Object) (7.0) ), ((java.lang.Object) (1.75) ), ((java.lang.Object) (9.5) ), ((java.lang.Object) (8.0) ), ((java.lang.Object) (.175) ), ((java.lang.Object) (((double) (0) )) ), ((java.lang.Object) (-36.0) ), ((java.lang.Object) (3.5) ), ((java.lang.Object) (4.0) )}));
		nx3.render.scaling.Scaling.SMALL = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"fontScaling", "linesWidth", "noteWidth", "quarterNoteWidth", "signPosWidth", "space", "svgScale", "svgX", "svgY", "unitX", "unitY"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (0.75) ), ((java.lang.Object) (.5) ), ((java.lang.Object) (5.0) ), ((java.lang.Object) (1.25) ), ((java.lang.Object) (7.0) ), ((java.lang.Object) (6.0) ), ((java.lang.Object) (.14) ), ((java.lang.Object) (((double) (0) )) ), ((java.lang.Object) (-28.5) ), ((java.lang.Object) (2.5) ), ((java.lang.Object) (3.0) )}));
		nx3.render.scaling.Scaling.BIG = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"fontScaling", "linesWidth", "noteWidth", "quarterNoteWidth", "signPosWidth", "space", "svgScale", "svgX", "svgY", "unitX", "unitY"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (2.0) ), ((java.lang.Object) (1.5) ), ((java.lang.Object) (14.0) ), ((java.lang.Object) (5.5) ), ((java.lang.Object) (19.0) ), ((java.lang.Object) (16.0) ), ((java.lang.Object) (.36) ), ((java.lang.Object) (-0.0) ), ((java.lang.Object) (-74.0) ), ((java.lang.Object) (7.0) ), ((java.lang.Object) (8.0) )}));
		nx3.render.scaling.Scaling.PRINT1 = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"fontScaling", "linesWidth", "noteWidth", "quarterNoteWidth", "signPosWidth", "space", "svgScale", "svgX", "svgY", "unitX", "unitY"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (4.0) ), ((java.lang.Object) (((double) (3) )) ), ((java.lang.Object) (28.0) ), ((java.lang.Object) (11.0) ), ((java.lang.Object) (38.0) ), ((java.lang.Object) (32.0) ), ((java.lang.Object) (.72) ), ((java.lang.Object) (-0.0) ), ((java.lang.Object) (-148.0) ), ((java.lang.Object) (14.0) ), ((java.lang.Object) (16.0) )}));
	}
	public    Scaling(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    Scaling()
	{
		nx3.render.scaling.Scaling.__hx_ctor_nx3_render_scaling_Scaling(this);
	}
	
	
	public static   void __hx_ctor_nx3_render_scaling_Scaling(nx3.render.scaling.Scaling __temp_me205)
	{
		{
		}
		
	}
	
	
	public static  java.lang.Object MID;
	
	public static  java.lang.Object NORMAL;
	
	public static  java.lang.Object SMALL;
	
	public static  java.lang.Object BIG;
	
	public static  java.lang.Object PRINT1;
	
	public static   nx3.geom.Rectangle scaleRect(java.lang.Object scaling, nx3.geom.Rectangle rect)
	{
		return new nx3.geom.Rectangle(((java.lang.Object) (( ((double) (rect.x) ) * ((double) (haxe.lang.Runtime.getField_f(scaling, "unitX", true)) ) )) ), ((java.lang.Object) (( ((double) (rect.y) ) * ((double) (haxe.lang.Runtime.getField_f(scaling, "unitY", true)) ) )) ), ((java.lang.Object) (( ((double) (rect.width) ) * ((double) (haxe.lang.Runtime.getField_f(scaling, "unitX", true)) ) )) ), ((java.lang.Object) (( ((double) (rect.height) ) * ((double) (haxe.lang.Runtime.getField_f(scaling, "unitY", true)) ) )) ));
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.render.scaling.Scaling(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.render.scaling.Scaling();
	}
	
	
}


