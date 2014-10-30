package cx.java;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class SvgTranscoder extends haxe.lang.HxObject
{
	public    SvgTranscoder(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    SvgTranscoder(java.lang.String svgString)
	{
		cx.java.SvgTranscoder.__hx_ctor_cx_java_SvgTranscoder(this, svgString);
	}
	
	
	public static   void __hx_ctor_cx_java_SvgTranscoder(cx.java.SvgTranscoder __temp_me39, java.lang.String svgString)
	{
		__temp_me39.svgString = svgString;
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
		try 
		{
			haxe.root.Xml xml = haxe.root.Xml.parse(svgString);
			if ( ! (xml.firstElement().exists("xmlns")) ) 
			{
				xml.firstElement().set("xmlns", "http://www.w3.org/2000/svg");
			}
			
			return xml.toString();
		}
		catch (java.lang.Throwable __temp_catchallException309)
		{
			java.lang.Object __temp_catchall310 = __temp_catchallException309;
			if (( __temp_catchall310 instanceof haxe.lang.HaxeException )) 
			{
				__temp_catchall310 = ((haxe.lang.HaxeException) (__temp_catchallException309) ).obj;
			}
			
			{
				java.lang.Object e = __temp_catchall310;
				return svgString;
			}
			
		}
		
		
	}
	
	
	public static   java.lang.String getShapeProcedureCode(java.lang.String shapeCode, java.lang.String fieldName)
	{
		if (( fieldName == null )) 
		{
			fieldName = "testField";
		}
		
		return ( ( ( ( "static public function " + fieldName ) + "():GeneralPath { \r " ) + shapeCode ) + "  \r\t shape0.closePath(); \r \t return shape0; \r }" );
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new cx.java.SvgTranscoder(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new cx.java.SvgTranscoder(haxe.lang.Runtime.toString(arr.__get(0)));
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
		catch (java.lang.Throwable __temp_catchallException304)
		{
			java.lang.Object __temp_catchall305 = __temp_catchallException304;
			if (( __temp_catchall305 instanceof haxe.lang.HaxeException )) 
			{
				__temp_catchall305 = ((haxe.lang.HaxeException) (__temp_catchallException304) ).obj;
			}
			
			{
				java.lang.Object e = __temp_catchall305;
				haxe.Log.trace.__hx_invoke2_o(0.0, e, 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"cx.java.SvgTranscoder", "SvgTranscoder.hx", "toClassCode"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (36) )) )})));
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
			boolean __temp_executeDef306 = true;
			switch (field.hashCode())
			{
				case 1499770773:
				{
					if (field.equals("svgString")) 
					{
						__temp_executeDef306 = false;
						this.svgString = haxe.lang.Runtime.toString(value);
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef306) 
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
			boolean __temp_executeDef307 = true;
			switch (field.hashCode())
			{
				case -632325302:
				{
					if (field.equals("toClassCode")) 
					{
						__temp_executeDef307 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("toClassCode"))) );
					}
					
					break;
				}
				
				
				case 1499770773:
				{
					if (field.equals("svgString")) 
					{
						__temp_executeDef307 = false;
						return this.svgString;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef307) 
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
			boolean __temp_executeDef308 = true;
			switch (field.hashCode())
			{
				case -632325302:
				{
					if (field.equals("toClassCode")) 
					{
						__temp_executeDef308 = false;
						return this.toClassCode(haxe.lang.Runtime.toString(dynargs.__get(0)));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef308) 
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


