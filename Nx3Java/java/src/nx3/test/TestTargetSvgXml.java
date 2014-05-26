package nx3.test;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class TestTargetSvgXml extends haxe.unit.TestCase
{
	public    TestTargetSvgXml(haxe.lang.EmptyObject empty)
	{
		super(haxe.lang.EmptyObject.EMPTY);
	}
	
	
	public    TestTargetSvgXml()
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.test.TestTargetSvgXml.__hx_ctor_nx3_test_TestTargetSvgXml(this);
	}
	
	
	public static   void __hx_ctor_nx3_test_TestTargetSvgXml(nx3.test.TestTargetSvgXml __temp_me210)
	{
		haxe.unit.TestCase.__hx_ctor_haxe_unit_TestCase(__temp_me210);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.test.TestTargetSvgXml(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.test.TestTargetSvgXml();
	}
	
	
	public   void testNew()
	{
		this.assertTrue(true, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestTargetSvgXml", "TestTargetSvgXml.hx", "testNew"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (13) )) )})));
		nx3.render.TargetSvgXml svg = new nx3.render.TargetSvgXml(haxe.lang.Runtime.toString("test"), ((java.lang.Object) (null) ));
		svg.line(((double) (10) ), ((double) (10) ), ((double) (20) ), ((double) (20) ), null, null);
		java.lang.String xmlStr = svg.getXml().toString();
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef885 = true;
			switch (field.hashCode())
			{
				case -1422472274:
				{
					if (field.equals("testNew")) 
					{
						__temp_executeDef885 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("testNew"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef885) 
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
			boolean __temp_executeDef886 = true;
			switch (field.hashCode())
			{
				case -1422472274:
				{
					if (field.equals("testNew")) 
					{
						__temp_executeDef886 = false;
						this.testNew();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef886) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
}


