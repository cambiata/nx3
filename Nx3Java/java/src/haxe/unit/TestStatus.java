package haxe.unit;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class TestStatus extends haxe.lang.HxObject
{
	public    TestStatus(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    TestStatus()
	{
		haxe.unit.TestStatus.__hx_ctor_haxe_unit_TestStatus(this);
	}
	
	
	public static   void __hx_ctor_haxe_unit_TestStatus(haxe.unit.TestStatus __temp_me52)
	{
		__temp_me52.done = false;
		__temp_me52.success = false;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new haxe.unit.TestStatus(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new haxe.unit.TestStatus();
	}
	
	
	public  boolean done;
	
	public  boolean success;
	
	public  java.lang.String error;
	
	public  java.lang.String method;
	
	public  java.lang.String classname;
	
	public  java.lang.Object posInfos;
	
	public  java.lang.String backtrace;
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef384 = true;
			switch (field.hashCode())
			{
				case 718070673:
				{
					if (field.equals("posInfos")) 
					{
						__temp_executeDef384 = false;
						this.posInfos = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef384) 
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
			boolean __temp_executeDef385 = true;
			switch (field.hashCode())
			{
				case 1354491070:
				{
					if (field.equals("backtrace")) 
					{
						__temp_executeDef385 = false;
						this.backtrace = haxe.lang.Runtime.toString(value);
						return value;
					}
					
					break;
				}
				
				
				case 3089282:
				{
					if (field.equals("done")) 
					{
						__temp_executeDef385 = false;
						this.done = haxe.lang.Runtime.toBool(value);
						return value;
					}
					
					break;
				}
				
				
				case 718070673:
				{
					if (field.equals("posInfos")) 
					{
						__temp_executeDef385 = false;
						this.posInfos = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1867169789:
				{
					if (field.equals("success")) 
					{
						__temp_executeDef385 = false;
						this.success = haxe.lang.Runtime.toBool(value);
						return value;
					}
					
					break;
				}
				
				
				case -8935421:
				{
					if (field.equals("classname")) 
					{
						__temp_executeDef385 = false;
						this.classname = haxe.lang.Runtime.toString(value);
						return value;
					}
					
					break;
				}
				
				
				case 96784904:
				{
					if (field.equals("error")) 
					{
						__temp_executeDef385 = false;
						this.error = haxe.lang.Runtime.toString(value);
						return value;
					}
					
					break;
				}
				
				
				case -1077554975:
				{
					if (field.equals("method")) 
					{
						__temp_executeDef385 = false;
						this.method = haxe.lang.Runtime.toString(value);
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef385) 
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
			boolean __temp_executeDef386 = true;
			switch (field.hashCode())
			{
				case 1354491070:
				{
					if (field.equals("backtrace")) 
					{
						__temp_executeDef386 = false;
						return this.backtrace;
					}
					
					break;
				}
				
				
				case 3089282:
				{
					if (field.equals("done")) 
					{
						__temp_executeDef386 = false;
						return this.done;
					}
					
					break;
				}
				
				
				case 718070673:
				{
					if (field.equals("posInfos")) 
					{
						__temp_executeDef386 = false;
						return this.posInfos;
					}
					
					break;
				}
				
				
				case -1867169789:
				{
					if (field.equals("success")) 
					{
						__temp_executeDef386 = false;
						return this.success;
					}
					
					break;
				}
				
				
				case -8935421:
				{
					if (field.equals("classname")) 
					{
						__temp_executeDef386 = false;
						return this.classname;
					}
					
					break;
				}
				
				
				case 96784904:
				{
					if (field.equals("error")) 
					{
						__temp_executeDef386 = false;
						return this.error;
					}
					
					break;
				}
				
				
				case -1077554975:
				{
					if (field.equals("method")) 
					{
						__temp_executeDef386 = false;
						return this.method;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef386) 
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
			boolean __temp_executeDef387 = true;
			switch (field.hashCode())
			{
				case 718070673:
				{
					if (field.equals("posInfos")) 
					{
						__temp_executeDef387 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.posInfos)) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef387) 
			{
				return super.__hx_getField_f(field, throwErrors, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("backtrace");
		baseArr.push("posInfos");
		baseArr.push("classname");
		baseArr.push("method");
		baseArr.push("error");
		baseArr.push("success");
		baseArr.push("done");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


