package nx3.test;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class TestNNote extends haxe.unit.TestCase
{
	public    TestNNote(haxe.lang.EmptyObject empty)
	{
		super(haxe.lang.EmptyObject.EMPTY);
	}
	
	
	public    TestNNote()
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.test.TestNNote.__hx_ctor_nx3_test_TestNNote(this);
	}
	
	
	public static   void __hx_ctor_nx3_test_TestNNote(nx3.test.TestNNote __temp_me105)
	{
		haxe.unit.TestCase.__hx_ctor_haxe_unit_TestCase(__temp_me105);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.test.TestNNote(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.test.TestNNote();
	}
	
	
	public   void testNoteXml()
	{
		nx3.NNote item1 = new nx3.NNote(((nx3.ENoteType) (null) ), ((haxe.root.Array<nx3.NHead>) (new haxe.root.Array<nx3.NHead>(new nx3.NHead[]{new nx3.NHead(((nx3.EHeadType) (null) ), ((java.lang.Object) (-3) ), ((nx3.ESign) (null) ), ((nx3.ETie) (null) ), ((nx3.ETie) (null) )), new nx3.NHead(((nx3.EHeadType) (null) ), ((java.lang.Object) (-2) ), ((nx3.ESign) (nx3.ESign.Flat) ), ((nx3.ETie) (null) ), ((nx3.ETie) (null) )), new nx3.NHead(((nx3.EHeadType) (null) ), ((java.lang.Object) (4) ), ((nx3.ESign) (nx3.ESign.Natural) ), ((nx3.ETie) (null) ), ((nx3.ETie) (null) )), new nx3.NHead(((nx3.EHeadType) (null) ), ((java.lang.Object) (1) ), ((nx3.ESign) (null) ), ((nx3.ETie) (null) ), ((nx3.ETie) (null) ))})) ), ((nx3.ENoteVal) (nx3.ENoteVal.Nv2dot) ), ((nx3.EDirectionUAD) (nx3.EDirectionUAD.Down) ));
		java.lang.String xmlstr1 = nx3.xml.NoteXML.toXml(item1).toString();
		nx3.NNote item2 = nx3.xml.NoteXML.fromXmlStr(xmlstr1);
		java.lang.String xmlstr2 = nx3.xml.NoteXML.toXml(item2).toString();
		this.assertEquals(xmlstr1, xmlstr2, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestNNote", "TestNNote.hx", "testNoteXml"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (26) )) )})));
		this.assertEquals(new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{-3, -2, 1, 4}).toString(), item1.getHeadLevels().toString(), new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestNNote", "TestNNote.hx", "testNoteXml"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (29) )) )})));
	}
	
	
	public   void testNotePause()
	{
		nx3.NNote note = new nx3.NNote(((nx3.ENoteType) (nx3.ENoteType.Pause(1)) ), ((haxe.root.Array<nx3.NHead>) (null) ), ((nx3.ENoteVal) (nx3.ENoteVal.Nv4) ), ((nx3.EDirectionUAD) (null) ));
		java.lang.String xmlStr = nx3.xml.NoteXML.toXml(note).toString();
		nx3.NNote note2 = nx3.xml.NoteXML.fromXmlStr(xmlStr);
		java.lang.String xmlStr2 = nx3.xml.NoteXML.toXml(note2).toString();
		this.assertEquals(xmlStr, xmlStr2, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestNNote", "TestNNote.hx", "testNotePause"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (38) )) )})));
	}
	
	
	public   void testNoteXml2()
	{
		nx3.NNote item = new nx3.NNote(((nx3.ENoteType) (nx3.ENoteType.Pause(0)) ), ((haxe.root.Array<nx3.NHead>) (null) ), ((nx3.ENoteVal) (nx3.ENoteVal.Nv4) ), ((nx3.EDirectionUAD) (null) ));
		this.assertEquals(haxe.root.Type.enumIndex(item.type), 1, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestNNote", "TestNNote.hx", "testNoteXml2"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (44) )) )})));
		nx3.NNote item1 = new nx3.NNote(((nx3.ENoteType) (nx3.ENoteType.Lyric("Hello", null, null, null)) ), ((haxe.root.Array<nx3.NHead>) (null) ), ((nx3.ENoteVal) (nx3.ENoteVal.Nv4) ), ((nx3.EDirectionUAD) (null) ));
		this.assertEquals(haxe.root.Type.enumIndex(item1.type), 4, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestNNote", "TestNNote.hx", "testNoteXml2"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (46) )) )})));
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef322 = true;
			switch (field.hashCode())
			{
				case -1999371073:
				{
					if (field.equals("testNoteXml2")) 
					{
						__temp_executeDef322 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("testNoteXml2"))) );
					}
					
					break;
				}
				
				
				case 1736619475:
				{
					if (field.equals("testNoteXml")) 
					{
						__temp_executeDef322 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("testNoteXml"))) );
					}
					
					break;
				}
				
				
				case -1858696014:
				{
					if (field.equals("testNotePause")) 
					{
						__temp_executeDef322 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("testNotePause"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef322) 
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
			boolean __temp_executeDef323 = true;
			switch (field.hashCode())
			{
				case -1999371073:
				{
					if (field.equals("testNoteXml2")) 
					{
						__temp_executeDef323 = false;
						this.testNoteXml2();
					}
					
					break;
				}
				
				
				case 1736619475:
				{
					if (field.equals("testNoteXml")) 
					{
						__temp_executeDef323 = false;
						this.testNoteXml();
					}
					
					break;
				}
				
				
				case -1858696014:
				{
					if (field.equals("testNotePause")) 
					{
						__temp_executeDef323 = false;
						this.testNotePause();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef323) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
}


