package haxe.unit;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class TestResult extends haxe.lang.HxObject
{
	public    TestResult(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    TestResult()
	{
		haxe.unit.TestResult.__hx_ctor_haxe_unit_TestResult(this);
	}
	
	
	public static   void __hx_ctor_haxe_unit_TestResult(haxe.unit.TestResult __temp_me50)
	{
		__temp_me50.m_tests = new haxe.root.List<haxe.unit.TestStatus>();
		__temp_me50.success = true;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new haxe.unit.TestResult(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new haxe.unit.TestResult();
	}
	
	
	public  haxe.root.List<haxe.unit.TestStatus> m_tests;
	
	public  boolean success;
	
	public   void add(haxe.unit.TestStatus t)
	{
		this.m_tests.add(t);
		if ( ! (t.success) ) 
		{
			this.success = false;
		}
		
	}
	
	
	@Override public   java.lang.String toString()
	{
		haxe.root.StringBuf buf = new haxe.root.StringBuf();
		int failures = 0;
		{
			java.lang.Object __temp_iterator229 = this.m_tests.iterator();
			while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator229, "hasNext", null)))
			{
				haxe.unit.TestStatus test = ((haxe.unit.TestStatus) (haxe.lang.Runtime.callField(__temp_iterator229, "next", null)) );
				if (( test.success == false )) 
				{
					buf.add("* ");
					buf.add(test.classname);
					buf.add("::");
					buf.add(test.method);
					buf.add("()");
					buf.add("\n");
					buf.add("ERR: ");
					if (( ! (( test.posInfos == null )) )) 
					{
						buf.add(haxe.lang.Runtime.toString(haxe.lang.Runtime.getField(test.posInfos, "fileName", true)));
						buf.add(":");
						buf.add(((int) (haxe.lang.Runtime.getField_f(test.posInfos, "lineNumber", true)) ));
						buf.add("(");
						buf.add(haxe.lang.Runtime.toString(haxe.lang.Runtime.getField(test.posInfos, "className", true)));
						buf.add(".");
						buf.add(haxe.lang.Runtime.toString(haxe.lang.Runtime.getField(test.posInfos, "methodName", true)));
						buf.add(") - ");
					}
					
					buf.add(test.error);
					buf.add("\n");
					if (( test.backtrace != null )) 
					{
						buf.add(test.backtrace);
						buf.add("\n");
					}
					
					buf.add("\n");
					failures++;
				}
				
			}
			
		}
		
		buf.add("\n");
		if (( failures == 0 )) 
		{
			buf.add("OK ");
		}
		 else 
		{
			buf.add("FAILED ");
		}
		
		buf.add(this.m_tests.length);
		buf.add(" tests, ");
		buf.add(failures);
		buf.add(" failed, ");
		buf.add(( this.m_tests.length - failures ));
		buf.add(" success");
		buf.add("\n");
		return buf.toString();
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef376 = true;
			switch (field.hashCode())
			{
				case -1867169789:
				{
					if (field.equals("success")) 
					{
						__temp_executeDef376 = false;
						this.success = haxe.lang.Runtime.toBool(value);
						return value;
					}
					
					break;
				}
				
				
				case 783674319:
				{
					if (field.equals("m_tests")) 
					{
						__temp_executeDef376 = false;
						this.m_tests = ((haxe.root.List<haxe.unit.TestStatus>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef376) 
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
			boolean __temp_executeDef377 = true;
			switch (field.hashCode())
			{
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef377 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("toString"))) );
					}
					
					break;
				}
				
				
				case 783674319:
				{
					if (field.equals("m_tests")) 
					{
						__temp_executeDef377 = false;
						return this.m_tests;
					}
					
					break;
				}
				
				
				case 96417:
				{
					if (field.equals("add")) 
					{
						__temp_executeDef377 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("add"))) );
					}
					
					break;
				}
				
				
				case -1867169789:
				{
					if (field.equals("success")) 
					{
						__temp_executeDef377 = false;
						return this.success;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef377) 
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
			boolean __temp_executeDef378 = true;
			switch (field.hashCode())
			{
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef378 = false;
						return this.toString();
					}
					
					break;
				}
				
				
				case 96417:
				{
					if (field.equals("add")) 
					{
						__temp_executeDef378 = false;
						this.add(((haxe.unit.TestStatus) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef378) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("success");
		baseArr.push("m_tests");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


