package haxe.unit;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class TestRunner extends haxe.lang.HxObject
{
	static 
	{
		haxe.unit.TestRunner.print = ( (( haxe.unit.TestRunner_new_35__Fun.__hx_current != null )) ? (haxe.unit.TestRunner_new_35__Fun.__hx_current) : (haxe.unit.TestRunner_new_35__Fun.__hx_current = ((haxe.unit.TestRunner_new_35__Fun) (new haxe.unit.TestRunner_new_35__Fun()) )) );
	}
	public    TestRunner(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    TestRunner()
	{
		haxe.unit.TestRunner.__hx_ctor_haxe_unit_TestRunner(this);
	}
	
	
	public static   void __hx_ctor_haxe_unit_TestRunner(haxe.unit.TestRunner __temp_me50)
	{
		__temp_me50.result = new haxe.unit.TestResult();
		__temp_me50.cases = new haxe.root.List<haxe.unit.TestCase>();
	}
	
	
	public static  haxe.lang.Function print;
	
	public static   void customTrace(java.lang.Object v, java.lang.Object p)
	{
		haxe.unit.TestRunner.print.__hx_invoke1_o(0.0, ( ( ( ( ( haxe.lang.Runtime.toString(haxe.lang.Runtime.getField(p, "fileName", true)) + ":" ) + ((int) (haxe.lang.Runtime.getField_f(p, "lineNumber", true)) ) ) + ": " ) + haxe.root.Std.string(v) ) + "\n" ));
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new haxe.unit.TestRunner(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new haxe.unit.TestRunner();
	}
	
	
	public  haxe.unit.TestResult result;
	
	public  haxe.root.List<haxe.unit.TestCase> cases;
	
	public   void add(haxe.unit.TestCase c)
	{
		this.cases.add(c);
	}
	
	
	public   boolean run()
	{
		this.result = new haxe.unit.TestResult();
		{
			java.lang.Object __temp_iterator212 = this.cases.iterator();
			while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator212, "hasNext", null)))
			{
				haxe.unit.TestCase c = ((haxe.unit.TestCase) (haxe.lang.Runtime.callField(__temp_iterator212, "next", null)) );
				this.runCase(c);
			}
			
		}
		
		haxe.unit.TestRunner.print.__hx_invoke1_o(0.0, this.result.toString());
		return this.result.success;
	}
	
	
	public   void runCase(haxe.unit.TestCase t)
	{
		haxe.lang.Function old = haxe.Log.trace;
		haxe.Log.trace = ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (haxe.unit.TestRunner.class) ), haxe.lang.Runtime.toString("customTrace"))) );
		java.lang.Class<haxe.unit.TestCase> cl = haxe.root.Type.getClass(t);
		haxe.root.Array<java.lang.String> fields = haxe.root.Type.getInstanceFields(((java.lang.Class) (cl) ));
		haxe.unit.TestRunner.print.__hx_invoke1_o(0.0, ( ( "Class: " + haxe.root.Type.getClassName(((java.lang.Class) (cl) )) ) + " " ));
		{
			int _g = 0;
			while (( _g < fields.length ))
			{
				java.lang.String f = fields.__get(_g);
				 ++ _g;
				java.lang.String fname = f;
				java.lang.Object field = haxe.root.Reflect.field(t, f);
				if (( fname.startsWith("test") && haxe.root.Reflect.isFunction(field) )) 
				{
					t.currentTest = new haxe.unit.TestStatus();
					t.currentTest.classname = haxe.root.Type.getClassName(((java.lang.Class) (cl) ));
					t.currentTest.method = fname;
					t.setup();
					try 
					{
						haxe.root.Reflect.callMethod(t, field, new haxe.root.Array());
						if (t.currentTest.done) 
						{
							t.currentTest.success = true;
							haxe.unit.TestRunner.print.__hx_invoke1_o(0.0, ".");
						}
						 else 
						{
							t.currentTest.success = false;
							t.currentTest.error = "(warning) no assert";
							haxe.unit.TestRunner.print.__hx_invoke1_o(0.0, "W");
						}
						
					}
					catch (java.lang.Throwable __temp_catchallException362)
					{
						java.lang.Object __temp_catchall363 = __temp_catchallException362;
						if (( __temp_catchall363 instanceof haxe.lang.HaxeException )) 
						{
							__temp_catchall363 = ((haxe.lang.HaxeException) (__temp_catchallException362) ).obj;
						}
						
						if (( __temp_catchall363 instanceof haxe.unit.TestStatus )) 
						{
							haxe.unit.TestStatus e = ((haxe.unit.TestStatus) (__temp_catchall363) );
							{
								haxe.unit.TestRunner.print.__hx_invoke1_o(0.0, "F");
								t.currentTest.backtrace = haxe.CallStack.toString(haxe.CallStack.exceptionStack());
							}
							
						}
						 else 
						{
							java.lang.Object e1 = __temp_catchall363;
							haxe.unit.TestRunner.print.__hx_invoke1_o(0.0, "E");
							t.currentTest.error = ( "exception thrown : " + haxe.root.Std.string(e1) );
							t.currentTest.backtrace = haxe.CallStack.toString(haxe.CallStack.exceptionStack());
						}
						
					}
					
					
					this.result.add(t.currentTest);
					t.tearDown();
				}
				
			}
			
		}
		
		haxe.unit.TestRunner.print.__hx_invoke1_o(0.0, "\n");
		haxe.Log.trace = old;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef364 = true;
			switch (field.hashCode())
			{
				case 94432067:
				{
					if (field.equals("cases")) 
					{
						__temp_executeDef364 = false;
						this.cases = ((haxe.root.List<haxe.unit.TestCase>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -934426595:
				{
					if (field.equals("result")) 
					{
						__temp_executeDef364 = false;
						this.result = ((haxe.unit.TestResult) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef364) 
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
			boolean __temp_executeDef365 = true;
			switch (field.hashCode())
			{
				case 1549495387:
				{
					if (field.equals("runCase")) 
					{
						__temp_executeDef365 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("runCase"))) );
					}
					
					break;
				}
				
				
				case -934426595:
				{
					if (field.equals("result")) 
					{
						__temp_executeDef365 = false;
						return this.result;
					}
					
					break;
				}
				
				
				case 113291:
				{
					if (field.equals("run")) 
					{
						__temp_executeDef365 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("run"))) );
					}
					
					break;
				}
				
				
				case 94432067:
				{
					if (field.equals("cases")) 
					{
						__temp_executeDef365 = false;
						return this.cases;
					}
					
					break;
				}
				
				
				case 96417:
				{
					if (field.equals("add")) 
					{
						__temp_executeDef365 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("add"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef365) 
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
			boolean __temp_executeDef366 = true;
			switch (field.hashCode())
			{
				case 1549495387:
				{
					if (field.equals("runCase")) 
					{
						__temp_executeDef366 = false;
						this.runCase(((haxe.unit.TestCase) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 96417:
				{
					if (field.equals("add")) 
					{
						__temp_executeDef366 = false;
						this.add(((haxe.unit.TestCase) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 113291:
				{
					if (field.equals("run")) 
					{
						__temp_executeDef366 = false;
						return this.run();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef366) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("cases");
		baseArr.push("result");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


