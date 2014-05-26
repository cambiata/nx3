package cx.java;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class SvtTranscoder extends haxe.lang.HxObject
{
	public    SvtTranscoder(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    SvtTranscoder(java.lang.String svgString)
	{
		cx.java.SvtTranscoder.__hx_ctor_cx_java_SvtTranscoder(this, svgString);
	}
	
	
	public static   void __hx_ctor_cx_java_SvtTranscoder(cx.java.SvtTranscoder __temp_me40, java.lang.String svgString)
	{
		__temp_me40.svgString = svgString;
	}
	
	
	public static   java.lang.String extractShapeCode(java.lang.String str)
	{
		haxe.root.EReg r = new haxe.root.EReg(haxe.lang.Runtime.toString("paintShapeNode_0_0_0_0\\(Graphics2D g\\) \\{([\\s\\S]*?)g\\.setPaint"), haxe.lang.Runtime.toString(""));
		r.match(str);
		java.lang.String shapeCode = r.matched(1);
		return shapeCode;
	}
	
	
	public static   java.lang.String addNamespace(java.lang.String svgString)
	{
		haxe.root.Xml xml = haxe.root.Xml.parse(svgString);
		if ( ! (xml.firstElement().exists("xmlns")) ) 
		{
			xml.firstElement().set("xmlns", "http://www.w3.org/2000/svg");
		}
		
		return xml.toString();
	}
	
	
	public static   java.lang.String getShapeProcedureCode(java.lang.String shapeCode, java.lang.String fieldName)
	{
		if (( fieldName == null )) 
		{
			fieldName = "testField";
		}
		
		return ( ( ( ( "static public function " + fieldName ) + "():GeneralPath { \r " ) + shapeCode ) + "   shape0.closePath(); \r }" );
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new cx.java.SvtTranscoder(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new cx.java.SvtTranscoder(haxe.lang.Runtime.toString(arr.__get(0)));
	}
	
	
	public  java.lang.String svgString;
	
	public   java.lang.String toClassCode(java.lang.String className)
	{
		if (( className == null )) 
		{
			className = "ResultingClassName";
		}
		
		java.io.StringWriter writer = null;
		java.io.InputStream inputStream = new java.io.StringBufferInputStream(haxe.lang.Runtime.toString(this.svgString));
		try 
		{
			writer = new java.io.StringWriter();
		}
		catch (java.lang.Throwable __temp_catchallException319)
		{
			java.lang.Object __temp_catchall320 = __temp_catchallException319;
			if (( __temp_catchall320 instanceof haxe.lang.HaxeException )) 
			{
				__temp_catchall320 = ((haxe.lang.HaxeException) (__temp_catchallException319) ).obj;
			}
			
			{
				java.lang.Object e = __temp_catchall320;
				haxe.Log.trace.__hx_invoke2_o(0.0, e, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"cx.java.SvtTranscoder", "SvtTranscoder.hx", "toClassCode"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (36) )) )})));
			}
			
		}
		
		
		com.btr.svg2java.java2d.SvgToJava2DTranscoder transcoder = new com.btr.svg2java.java2d.SvgToJava2DTranscoder();
		transcoder.transcode(((java.io.InputStream) (inputStream) ), ((java.io.Writer) (writer) ), haxe.lang.Runtime.toString(className));
		java.lang.String text = writer.toString();
		return text;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef321 = true;
			switch (field.hashCode())
			{
				case 1499770773:
				{
					if (field.equals("svgString")) 
					{
						__temp_executeDef321 = false;
						this.svgString = haxe.lang.Runtime.toString(value);
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef321) 
			{
				return super.__hx_setField(field, value, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef322 = true;
			switch (field.hashCode())
			{
				case -632325302:
				{
					if (field.equals("toClassCode")) 
					{
						__temp_executeDef322 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("toClassCode"))) );
					}
					
					break;
				}
				
				
				case 1499770773:
				{
					if (field.equals("svgString")) 
					{
						__temp_executeDef322 = false;
						return this.svgString;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef322) 
			{
				return super.__hx_getField(field, throwErrors, isCheck, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_invokeField(java.lang.String field, haxe.root.Array dynargs)
	{
		{
			boolean __temp_executeDef323 = true;
			switch (field.hashCode())
			{
				case -632325302:
				{
					if (field.equals("toClassCode")) 
					{
						__temp_executeDef323 = false;
						return this.toClassCode(haxe.lang.Runtime.toString(dynargs.__get(0)));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef323) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("svgString");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


