package nx3.test;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class TestNHead extends haxe.unit.TestCase
{
	public    TestNHead(haxe.lang.EmptyObject empty)
	{
		super(haxe.lang.EmptyObject.EMPTY);
	}
	
	
	public    TestNHead()
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.test.TestNHead.__hx_ctor_nx3_test_TestNHead(this);
	}
	
	
	public static   void __hx_ctor_nx3_test_TestNHead(nx3.test.TestNHead __temp_me104)
	{
		haxe.unit.TestCase.__hx_ctor_haxe_unit_TestCase(__temp_me104);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.test.TestNHead(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.test.TestNHead();
	}
	
	
	public   void testHeadXml()
	{
		nx3.NHead item1 = new nx3.NHead(((nx3.EHeadType) (null) ), ((java.lang.Object) (2) ), ((nx3.ESign) (nx3.ESign.Flat) ), ((nx3.ETie) (null) ), ((nx3.ETie) (null) ));
		java.lang.String xmlstr1 = nx3.xml.HeadXML.toXml(item1).toString();
		nx3.NHead item2 = nx3.xml.HeadXML.fromXmlStr(xmlstr1);
		java.lang.String xmlstr2 = nx3.xml.HeadXML.toXml(item2).toString();
		this.assertEquals(xmlstr1, xmlstr2, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestNHead", "TestNHead.hx", "testHeadXml"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (21) )) )})));
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef320 = true;
			switch (field.hashCode())
			{
				case 402696485:
				{
					if (field.equals("testHeadXml")) 
					{
						__temp_executeDef320 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("testHeadXml"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef320) 
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
			boolean __temp_executeDef321 = true;
			switch (field.hashCode())
			{
				case 402696485:
				{
					if (field.equals("testHeadXml")) 
					{
						__temp_executeDef321 = false;
						this.testHeadXml();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef321) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
}


