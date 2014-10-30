package nx3.qs;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class BaseParser extends haxe.lang.HxObject
{
	public    BaseParser(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    BaseParser(nx3.qs.QuickSyntaxParser builder)
	{
		nx3.qs.BaseParser.__hx_ctor_nx3_qs_BaseParser(this, builder);
	}
	
	
	public static   void __hx_ctor_nx3_qs_BaseParser(nx3.qs.BaseParser __temp_me174, nx3.qs.QuickSyntaxParser builder)
	{
		__temp_me174.builder = builder;
		__temp_me174.functions = new haxe.ds.StringMap<haxe.lang.Function>();
		__temp_me174.createFunctions();
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.qs.BaseParser(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.qs.BaseParser(((nx3.qs.QuickSyntaxParser) (arr.__get(0)) ));
	}
	
	
	public  nx3.qs.QuickSyntaxParser builder;
	
	public  haxe.ds.StringMap<haxe.lang.Function> functions;
	
	public   haxe.lang.Function getTokenfunction(haxe.ds.StringMap<haxe.lang.Function> functions, java.lang.String token)
	{
		haxe.root.Array<java.lang.String> keys = ((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (cx.ArrayTools.fromHashKeys(functions.keys())) )) );
		keys.sort(( (( nx3.qs.BaseParser_getTokenfunction_27__Fun.__hx_current != null )) ? (nx3.qs.BaseParser_getTokenfunction_27__Fun.__hx_current) : (nx3.qs.BaseParser_getTokenfunction_27__Fun.__hx_current = ((nx3.qs.BaseParser_getTokenfunction_27__Fun) (new nx3.qs.BaseParser_getTokenfunction_27__Fun()) )) ));
		{
			int _g = 0;
			while (( _g < keys.length ))
			{
				java.lang.String key = keys.__get(_g);
				 ++ _g;
				if (token.startsWith(key)) 
				{
					return functions.get(key);
				}
				
			}
			
		}
		
		{
			int _g1 = 0;
			while (( _g1 < keys.length ))
			{
				java.lang.String key1 = keys.__get(_g1);
				 ++ _g1;
				if (haxe.lang.Runtime.valEq(key1, "__ALL__")) 
				{
					return functions.get(key1);
				}
				
			}
			
		}
		
		return null;
	}
	
	
	public   java.lang.String parse(java.lang.String token, nx3.qs.QuickSyntaxParser parser)
	{
		java.lang.String originaltoken = token;
		haxe.lang.Function func = this.getTokenfunction(this.functions, token);
		while (( func != null ))
		{
			token = haxe.lang.Runtime.toString(haxe.root.Reflect.callMethod(null, func, new haxe.root.Array(new java.lang.Object[]{token})));
			if (haxe.lang.Runtime.valEq(token, "")) 
			{
				this.tokenFinished(originaltoken);
				return "";
			}
			
			func = this.getTokenfunction(this.functions, token);
		}
		
		if (haxe.lang.Runtime.valEq(originaltoken, token)) 
		{
			return token;
		}
		
		return "";
	}
	
	
	public   void tokenFinished(java.lang.String originaltoken)
	{
		haxe.Log.trace.__hx_invoke2_o(0.0, "all is taken care of", 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.qs.BaseParser", "BaseParser.hx", "tokenFinished"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (75) )) )})));
	}
	
	
	public   void createFunctions()
	{
		haxe.Log.trace.__hx_invoke2_o(0.0, "should be overridden", 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.qs.BaseParser", "BaseParser.hx", "createFunctions"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (80) )) )})));
	}
	
	
	public   void sendEvent(nx3.qs.ParserEvents event)
	{
		this.builder.passEvent(event);
	}
	
	
	public   void recieveEvent(nx3.qs.ParserEvents event)
	{
		throw haxe.lang.HaxeException.wrap("shouldBeOverridden");
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef824 = true;
			switch (field.hashCode())
			{
				case -140572773:
				{
					if (field.equals("functions")) 
					{
						__temp_executeDef824 = false;
						this.functions = ((haxe.ds.StringMap<haxe.lang.Function>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 230944667:
				{
					if (field.equals("builder")) 
					{
						__temp_executeDef824 = false;
						this.builder = ((nx3.qs.QuickSyntaxParser) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef824) 
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
			boolean __temp_executeDef825 = true;
			switch (field.hashCode())
			{
				case -2111738369:
				{
					if (field.equals("recieveEvent")) 
					{
						__temp_executeDef825 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("recieveEvent"))) );
					}
					
					break;
				}
				
				
				case 230944667:
				{
					if (field.equals("builder")) 
					{
						__temp_executeDef825 = false;
						return this.builder;
					}
					
					break;
				}
				
				
				case 2762738:
				{
					if (field.equals("sendEvent")) 
					{
						__temp_executeDef825 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("sendEvent"))) );
					}
					
					break;
				}
				
				
				case -140572773:
				{
					if (field.equals("functions")) 
					{
						__temp_executeDef825 = false;
						return this.functions;
					}
					
					break;
				}
				
				
				case -1605705217:
				{
					if (field.equals("createFunctions")) 
					{
						__temp_executeDef825 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("createFunctions"))) );
					}
					
					break;
				}
				
				
				case -888348389:
				{
					if (field.equals("getTokenfunction")) 
					{
						__temp_executeDef825 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getTokenfunction"))) );
					}
					
					break;
				}
				
				
				case -1760504437:
				{
					if (field.equals("tokenFinished")) 
					{
						__temp_executeDef825 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("tokenFinished"))) );
					}
					
					break;
				}
				
				
				case 106437299:
				{
					if (field.equals("parse")) 
					{
						__temp_executeDef825 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("parse"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef825) 
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
			boolean __temp_executeDef826 = true;
			switch (field.hashCode())
			{
				case -2111738369:
				{
					if (field.equals("recieveEvent")) 
					{
						__temp_executeDef826 = false;
						this.recieveEvent(((nx3.qs.ParserEvents) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -888348389:
				{
					if (field.equals("getTokenfunction")) 
					{
						__temp_executeDef826 = false;
						return this.getTokenfunction(((haxe.ds.StringMap<haxe.lang.Function>) (dynargs.__get(0)) ), haxe.lang.Runtime.toString(dynargs.__get(1)));
					}
					
					break;
				}
				
				
				case 2762738:
				{
					if (field.equals("sendEvent")) 
					{
						__temp_executeDef826 = false;
						this.sendEvent(((nx3.qs.ParserEvents) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 106437299:
				{
					if (field.equals("parse")) 
					{
						__temp_executeDef826 = false;
						return this.parse(haxe.lang.Runtime.toString(dynargs.__get(0)), ((nx3.qs.QuickSyntaxParser) (dynargs.__get(1)) ));
					}
					
					break;
				}
				
				
				case -1605705217:
				{
					if (field.equals("createFunctions")) 
					{
						__temp_executeDef826 = false;
						this.createFunctions();
					}
					
					break;
				}
				
				
				case -1760504437:
				{
					if (field.equals("tokenFinished")) 
					{
						__temp_executeDef826 = false;
						this.tokenFinished(haxe.lang.Runtime.toString(dynargs.__get(0)));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef826) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("functions");
		baseArr.push("builder");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


