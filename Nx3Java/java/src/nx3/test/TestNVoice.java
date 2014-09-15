package nx3.test;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class TestNVoice extends haxe.unit.TestCase
{
	public    TestNVoice(haxe.lang.EmptyObject empty)
	{
		super(haxe.lang.EmptyObject.EMPTY);
	}
	
	
	public    TestNVoice()
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.test.TestNVoice.__hx_ctor_nx3_test_TestNVoice(this);
	}
	
	
	public static   void __hx_ctor_nx3_test_TestNVoice(nx3.test.TestNVoice __temp_me106)
	{
		haxe.unit.TestCase.__hx_ctor_haxe_unit_TestCase(__temp_me106);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.test.TestNVoice(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.test.TestNVoice();
	}
	
	
	public   void testVoiceXml()
	{
		nx3.NVoice nvoice = new nx3.NVoice(((haxe.root.Array<nx3.NNote>) (new haxe.root.Array<nx3.NNote>(new nx3.NNote[]{new nx3.QNote4(((java.lang.Object) (null) ), ((java.lang.Object) (1) ), ((haxe.root.Array<java.lang.Object>) (null) ), haxe.lang.Runtime.toString(null)), new nx3.NNote(((nx3.ENoteType) (nx3.ENoteType.Pause(1)) ), ((haxe.root.Array<nx3.NHead>) (null) ), ((nx3.ENoteVal) (nx3.ENoteVal.Nv4) ), ((nx3.EDirectionUAD) (null) ))})) ), ((nx3.EVoiceType) (null) ), ((nx3.EDirectionUAD) (null) ));
		java.lang.String xmlStr = nx3.xml.VoiceXML.toXml(nvoice).toString();
		nx3.NVoice nvoice2 = nx3.xml.VoiceXML.fromXmlStr(xmlStr);
		java.lang.String xmlStr2 = nx3.xml.VoiceXML.toXml(nvoice2).toString();
		this.assertEquals(xmlStr, xmlStr2, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestNVoice", "TestNVoice.hx", "testVoiceXml"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (28) )) )})));
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef324 = true;
			switch (field.hashCode())
			{
				case -1258190793:
				{
					if (field.equals("testVoiceXml")) 
					{
						__temp_executeDef324 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("testVoiceXml"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef324) 
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
			boolean __temp_executeDef325 = true;
			switch (field.hashCode())
			{
				case -1258190793:
				{
					if (field.equals("testVoiceXml")) 
					{
						__temp_executeDef325 = false;
						this.testVoiceXml();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef325) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
}


