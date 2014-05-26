package nx3.qs;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class BarParser extends nx3.qs.BaseParser
{
	public    BarParser(haxe.lang.EmptyObject empty)
	{
		super(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public    BarParser(nx3.qs.QuickSyntaxParser parser)
	{
		super(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
		nx3.qs.BarParser.__hx_ctor_nx3_qs_BarParser(this, parser);
	}
	
	
	public static   void __hx_ctor_nx3_qs_BarParser(nx3.qs.BarParser __temp_me188, nx3.qs.QuickSyntaxParser parser)
	{
		nx3.qs.BaseParser.__hx_ctor_nx3_qs_BaseParser(__temp_me188, parser);
		__temp_me188.barIndex = 0;
		__temp_me188.partIndex = 0;
		__temp_me188.voiceIndex = 0;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.qs.BarParser(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.qs.BarParser(((nx3.qs.QuickSyntaxParser) (arr.__get(0)) ));
	}
	
	
	public  int barIndex;
	
	public  int partIndex;
	
	public  int voiceIndex;
	
	@Override public   void createFunctions()
	{
		haxe.root.Array<nx3.qs.BarParser> _g = new haxe.root.Array<nx3.qs.BarParser>(new nx3.qs.BarParser[]{this});
		this.functions.set(";", new nx3.qs.BarParser_createFunctions_27__Fun(((haxe.root.Array<nx3.qs.BarParser>) (_g) )));
		this.functions.set("|", new nx3.qs.BarParser_createFunctions_32__Fun(((haxe.root.Array<nx3.qs.BarParser>) (_g) )));
		this.functions.set("//", new nx3.qs.BarParser_createFunctions_39__Fun(((haxe.root.Array<nx3.qs.BarParser>) (_g) )));
		this.functions.set("/", new nx3.qs.BarParser_createFunctions_46__Fun(((haxe.root.Array<nx3.qs.BarParser>) (_g) )));
		this.functions.set("%%", new nx3.qs.BarParser_createFunctions_53__Fun(((haxe.root.Array<nx3.qs.BarParser>) (_g) )));
		this.functions.set("%", new nx3.qs.BarParser_createFunctions_63__Fun(((haxe.root.Array<nx3.qs.BarParser>) (_g) )));
		this.functions.set("clef:G", new nx3.qs.BarParser_createFunctions_70__Fun(((haxe.root.Array<nx3.qs.BarParser>) (_g) )));
	}
	
	
	@Override public   void tokenFinished(java.lang.String originaltoken)
	{
		{
		}
		
	}
	
	
	public   java.lang.Object getBpvIndex()
	{
		java.lang.Object bpvIndex = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"barIndex", "partIndex", "voiceIndex"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (this.barIndex) )) ), ((java.lang.Object) (((double) (this.partIndex) )) ), ((java.lang.Object) (((double) (this.voiceIndex) )) )}));
		return bpvIndex;
	}
	
	
	@Override public   void recieveEvent(nx3.qs.ParserEvents event)
	{
		{
		}
		
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef848 = true;
			switch (field.hashCode())
			{
				case -1535359296:
				{
					if (field.equals("voiceIndex")) 
					{
						__temp_executeDef848 = false;
						this.voiceIndex = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1775218561:
				{
					if (field.equals("barIndex")) 
					{
						__temp_executeDef848 = false;
						this.barIndex = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1829546849:
				{
					if (field.equals("partIndex")) 
					{
						__temp_executeDef848 = false;
						this.partIndex = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef848) 
			{
				return super.__hx_setField_f(field, value, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef849 = true;
			switch (field.hashCode())
			{
				case -1535359296:
				{
					if (field.equals("voiceIndex")) 
					{
						__temp_executeDef849 = false;
						this.voiceIndex = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -1775218561:
				{
					if (field.equals("barIndex")) 
					{
						__temp_executeDef849 = false;
						this.barIndex = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -1829546849:
				{
					if (field.equals("partIndex")) 
					{
						__temp_executeDef849 = false;
						this.partIndex = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef849) 
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
			boolean __temp_executeDef850 = true;
			switch (field.hashCode())
			{
				case -2111738369:
				{
					if (field.equals("recieveEvent")) 
					{
						__temp_executeDef850 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("recieveEvent"))) );
					}
					
					break;
				}
				
				
				case -1775218561:
				{
					if (field.equals("barIndex")) 
					{
						__temp_executeDef850 = false;
						return this.barIndex;
					}
					
					break;
				}
				
				
				case 844851520:
				{
					if (field.equals("getBpvIndex")) 
					{
						__temp_executeDef850 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBpvIndex"))) );
					}
					
					break;
				}
				
				
				case -1829546849:
				{
					if (field.equals("partIndex")) 
					{
						__temp_executeDef850 = false;
						return this.partIndex;
					}
					
					break;
				}
				
				
				case -1760504437:
				{
					if (field.equals("tokenFinished")) 
					{
						__temp_executeDef850 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("tokenFinished"))) );
					}
					
					break;
				}
				
				
				case -1535359296:
				{
					if (field.equals("voiceIndex")) 
					{
						__temp_executeDef850 = false;
						return this.voiceIndex;
					}
					
					break;
				}
				
				
				case -1605705217:
				{
					if (field.equals("createFunctions")) 
					{
						__temp_executeDef850 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("createFunctions"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef850) 
			{
				return super.__hx_getField(field, throwErrors, isCheck, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   double __hx_getField_f(java.lang.String field, boolean throwErrors, boolean handleProperties)
	{
		{
			boolean __temp_executeDef851 = true;
			switch (field.hashCode())
			{
				case -1535359296:
				{
					if (field.equals("voiceIndex")) 
					{
						__temp_executeDef851 = false;
						return ((double) (this.voiceIndex) );
					}
					
					break;
				}
				
				
				case -1775218561:
				{
					if (field.equals("barIndex")) 
					{
						__temp_executeDef851 = false;
						return ((double) (this.barIndex) );
					}
					
					break;
				}
				
				
				case -1829546849:
				{
					if (field.equals("partIndex")) 
					{
						__temp_executeDef851 = false;
						return ((double) (this.partIndex) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef851) 
			{
				return super.__hx_getField_f(field, throwErrors, handleProperties);
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
			int __temp_hash853 = field.hashCode();
			boolean __temp_executeDef852 = true;
			switch (__temp_hash853)
			{
				case -2111738369:case -1760504437:case -1605705217:
				{
					if (( (( ( __temp_hash853 == -2111738369 ) && field.equals("recieveEvent") )) || ( (( ( __temp_hash853 == -1760504437 ) && field.equals("tokenFinished") )) || field.equals("createFunctions") ) )) 
					{
						__temp_executeDef852 = false;
						return haxe.lang.Runtime.slowCallField(this, field, dynargs);
					}
					
					break;
				}
				
				
				case 844851520:
				{
					if (field.equals("getBpvIndex")) 
					{
						__temp_executeDef852 = false;
						return this.getBpvIndex();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef852) 
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
		baseArr.push("voiceIndex");
		baseArr.push("partIndex");
		baseArr.push("barIndex");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


