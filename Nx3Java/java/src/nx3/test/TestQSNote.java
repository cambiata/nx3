package nx3.test;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class TestQSNote extends haxe.unit.TestCase
{
	public    TestQSNote(haxe.lang.EmptyObject empty)
	{
		super(haxe.lang.EmptyObject.EMPTY);
	}
	
	
	public    TestQSNote()
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.test.TestQSNote.__hx_ctor_nx3_test_TestQSNote(this);
	}
	
	
	public static   void __hx_ctor_nx3_test_TestQSNote(nx3.test.TestQSNote __temp_me107)
	{
		haxe.unit.TestCase.__hx_ctor_haxe_unit_TestCase(__temp_me107);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.test.TestQSNote(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.test.TestQSNote();
	}
	
	
	public   void test1()
	{
		nx3.qs.QSNote qn = new nx3.qs.QSNote(haxe.lang.Runtime.toString("a"), ((java.lang.Object) (null) ));
		this.assertEquals(qn.modestr, "", new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestQSNote", "TestQSNote.hx", "test1"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (19) )) )})));
		this.assertEquals(qn.mode, nx3.qs.QSNotemode.NotePause, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestQSNote", "TestQSNote.hx", "test1"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (20) )) )})));
		this.assertEquals(qn.qsstring, "a", new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestQSNote", "TestQSNote.hx", "test1"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (21) )) )})));
		nx3.qs.QSNote qn1 = new nx3.qs.QSNote(haxe.lang.Runtime.toString("lyr:a"), ((java.lang.Object) (null) ));
		this.assertEquals(qn1.mode, nx3.qs.QSNotemode.Lyric, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestQSNote", "TestQSNote.hx", "test1"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (24) )) )})));
		this.assertEquals(qn1.qsstring, "a", new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestQSNote", "TestQSNote.hx", "test1"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (25) )) )})));
		nx3.qs.QSNote qn2 = new nx3.qs.QSNote(haxe.lang.Runtime.toString("a"), ((java.lang.Object) (null) ));
		this.assertEquals(qn2.mode, nx3.qs.QSNotemode.NotePause, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestQSNote", "TestQSNote.hx", "test1"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (28) )) )})));
		this.assertEquals(qn2.headstrings.toString(), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"a"}).toString(), new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestQSNote", "TestQSNote.hx", "test1"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (29) )) )})));
		nx3.qs.QSNote qn3 = new nx3.qs.QSNote(haxe.lang.Runtime.toString("a,b"), ((java.lang.Object) (null) ));
		this.assertEquals(qn3.headstrings.toString(), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"a", "b"}).toString(), new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestQSNote", "TestQSNote.hx", "test1"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (31) )) )})));
		nx3.qs.QSNote qn4 = new nx3.qs.QSNote(haxe.lang.Runtime.toString("a , b"), ((java.lang.Object) (null) ));
		this.assertEquals(qn4.headstrings.toString(), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"a", "b"}).toString(), new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestQSNote", "TestQSNote.hx", "test1"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (33) )) )})));
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef326 = true;
			switch (field.hashCode())
			{
				case 110251487:
				{
					if (field.equals("test1")) 
					{
						__temp_executeDef326 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("test1"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef326) 
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
			boolean __temp_executeDef327 = true;
			switch (field.hashCode())
			{
				case 110251487:
				{
					if (field.equals("test1")) 
					{
						__temp_executeDef327 = false;
						this.test1();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef327) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
}


