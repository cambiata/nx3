package haxe.unit;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class TestCase extends haxe.lang.HxObject
{
	public    TestCase(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    TestCase()
	{
		haxe.unit.TestCase.__hx_ctor_haxe_unit_TestCase(this);
	}
	
	
	public static   void __hx_ctor_haxe_unit_TestCase(haxe.unit.TestCase __temp_me48)
	{
		{
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new haxe.unit.TestCase(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new haxe.unit.TestCase();
	}
	
	
	public  haxe.unit.TestStatus currentTest;
	
	public   void setup()
	{
		{
		}
		
	}
	
	
	public   void tearDown()
	{
		{
		}
		
	}
	
	
	public   void print(java.lang.Object v)
	{
		haxe.unit.TestRunner.print.__hx_invoke1_o(0.0, v);
	}
	
	
	public   void assertTrue(boolean b, java.lang.Object c)
	{
		this.currentTest.done = true;
		if (( b == false )) 
		{
			this.currentTest.success = false;
			this.currentTest.error = "expected true but was false";
			this.currentTest.posInfos = c;
			throw haxe.lang.HaxeException.wrap(this.currentTest);
		}
		
	}
	
	
	public   void assertFalse(boolean b, java.lang.Object c)
	{
		this.currentTest.done = true;
		if (( b == true )) 
		{
			this.currentTest.success = false;
			this.currentTest.error = "expected false but was true";
			this.currentTest.posInfos = c;
			throw haxe.lang.HaxeException.wrap(this.currentTest);
		}
		
	}
	
	
	public  <T> void assertEquals(T expected, T actual, java.lang.Object c)
	{
		this.currentTest.done = true;
		if (( ! (haxe.lang.Runtime.eq(actual, expected)) )) 
		{
			this.currentTest.success = false;
			this.currentTest.error = ( ( ( ( "expected \'" + haxe.root.Std.string(expected) ) + "\' but was \'" ) + haxe.root.Std.string(actual) ) + "\'" );
			this.currentTest.posInfos = c;
			throw haxe.lang.HaxeException.wrap(this.currentTest);
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef356 = true;
			switch (field.hashCode())
			{
				case 601231787:
				{
					if (field.equals("currentTest")) 
					{
						__temp_executeDef356 = false;
						this.currentTest = ((haxe.unit.TestStatus) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef356) 
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
			boolean __temp_executeDef357 = true;
			switch (field.hashCode())
			{
				case -1076899163:
				{
					if (field.equals("assertEquals")) 
					{
						__temp_executeDef357 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("assertEquals"))) );
					}
					
					break;
				}
				
				
				case 601231787:
				{
					if (field.equals("currentTest")) 
					{
						__temp_executeDef357 = false;
						return this.currentTest;
					}
					
					break;
				}
				
				
				case 381342077:
				{
					if (field.equals("assertFalse")) 
					{
						__temp_executeDef357 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("assertFalse"))) );
					}
					
					break;
				}
				
				
				case 109329021:
				{
					if (field.equals("setup")) 
					{
						__temp_executeDef357 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("setup"))) );
					}
					
					break;
				}
				
				
				case 2090945012:
				{
					if (field.equals("assertTrue")) 
					{
						__temp_executeDef357 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("assertTrue"))) );
					}
					
					break;
				}
				
				
				case -1664427484:
				{
					if (field.equals("tearDown")) 
					{
						__temp_executeDef357 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("tearDown"))) );
					}
					
					break;
				}
				
				
				case 106934957:
				{
					if (field.equals("print")) 
					{
						__temp_executeDef357 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("print"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef357) 
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
			boolean __temp_executeDef358 = true;
			switch (field.hashCode())
			{
				case -1076899163:
				{
					if (field.equals("assertEquals")) 
					{
						__temp_executeDef358 = false;
						this.assertEquals(dynargs.__get(0), dynargs.__get(1), dynargs.__get(2));
					}
					
					break;
				}
				
				
				case 109329021:
				{
					if (field.equals("setup")) 
					{
						__temp_executeDef358 = false;
						this.setup();
					}
					
					break;
				}
				
				
				case 381342077:
				{
					if (field.equals("assertFalse")) 
					{
						__temp_executeDef358 = false;
						this.assertFalse(haxe.lang.Runtime.toBool(dynargs.__get(0)), dynargs.__get(1));
					}
					
					break;
				}
				
				
				case -1664427484:
				{
					if (field.equals("tearDown")) 
					{
						__temp_executeDef358 = false;
						this.tearDown();
					}
					
					break;
				}
				
				
				case 2090945012:
				{
					if (field.equals("assertTrue")) 
					{
						__temp_executeDef358 = false;
						this.assertTrue(haxe.lang.Runtime.toBool(dynargs.__get(0)), dynargs.__get(1));
					}
					
					break;
				}
				
				
				case 106934957:
				{
					if (field.equals("print")) 
					{
						__temp_executeDef358 = false;
						this.print(dynargs.__get(0));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef358) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("currentTest");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


