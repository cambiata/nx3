package nx3.test;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class TestEvents extends haxe.unit.TestCase
{
	public    TestEvents(haxe.lang.EmptyObject empty)
	{
		super(haxe.lang.EmptyObject.EMPTY);
	}
	
	
	public    TestEvents()
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.test.TestEvents.__hx_ctor_nx3_test_TestEvents(this);
	}
	
	
	public static   void __hx_ctor_nx3_test_TestEvents(nx3.test.TestEvents __temp_me207)
	{
		haxe.unit.TestCase.__hx_ctor_haxe_unit_TestCase(__temp_me207);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.test.TestEvents(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.test.TestEvents();
	}
	
	
	public   nx3.NScore score1()
	{
		nx3.NBar nbar0 = new nx3.NBar(((haxe.root.Array<nx3.NPart>) (new haxe.root.Array<nx3.NPart>(new nx3.NPart[]{new nx3.NPart(((haxe.root.Array<nx3.NVoice>) (new haxe.root.Array<nx3.NVoice>(new nx3.NVoice[]{new nx3.NVoice(((haxe.root.Array<nx3.NNote>) (new haxe.root.Array<nx3.NNote>(new nx3.NNote[]{new nx3.NNote(((nx3.ENoteType) (null) ), ((haxe.root.Array<nx3.NHead>) (new haxe.root.Array<nx3.NHead>(new nx3.NHead[]{new nx3.NHead(((nx3.EHeadType) (null) ), ((java.lang.Object) (0) ), ((nx3.ESign) (nx3.ESign.Flat) ), ((nx3.ETie) (null) ), ((nx3.ETie) (null) ))})) ), ((nx3.ENoteVal) (null) ), ((nx3.EDirectionUAD) (null) ))})) ), ((nx3.EVoiceType) (null) ), ((nx3.EDirectionUAD) (null) ))})) ), ((nx3.EPartType) (null) ), ((nx3.EClef) (null) ), ((nx3.EDisplayALN) (null) ), ((nx3.EKey) (null) ), ((nx3.EDisplayALN) (null) ))})) ), ((nx3.EBarType) (null) ), ((nx3.ETime) (null) ), ((nx3.EDisplayALN) (null) ), ((nx3.EAllotment) (null) ), ((java.lang.Object) (null) ));
		nx3.NScore score = new nx3.NScore(((haxe.root.Array<nx3.NBar>) (new haxe.root.Array<nx3.NBar>(new nx3.NBar[]{nbar0})) ));
		return score;
	}
	
	
	public   void testEventAddNote()
	{
		nx3.NScore score = this.score1();
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 1, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestEvents", "TestEvents.hx", "testEventAddNote"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (48) )) )})));
		haxe.root.Array<nx3.NNote> notestoadd = new haxe.root.Array<nx3.NNote>(new nx3.NNote[]{new nx3.NNote(((nx3.ENoteType) (null) ), ((haxe.root.Array<nx3.NHead>) (new haxe.root.Array<nx3.NHead>(new nx3.NHead[]{new nx3.NHead(((nx3.EHeadType) (null) ), ((java.lang.Object) (1) ), ((nx3.ESign) (null) ), ((nx3.ETie) (null) ), ((nx3.ETie) (null) ))})) ), ((nx3.ENoteVal) (null) ), ((nx3.EDirectionUAD) (null) )), new nx3.NNote(((nx3.ENoteType) (null) ), ((haxe.root.Array<nx3.NHead>) (new haxe.root.Array<nx3.NHead>(new nx3.NHead[]{new nx3.NHead(((nx3.EHeadType) (null) ), ((java.lang.Object) (2) ), ((nx3.ESign) (null) ), ((nx3.ETie) (null) ), ((nx3.ETie) (null) ))})) ), ((nx3.ENoteVal) (null) ), ((nx3.EDirectionUAD) (null) ))});
		java.lang.Object target = nx3.NRefTools.refNote(score, 0, 0, 0, 0);
		nx3.events.EvAddNote event = new nx3.events.EvAddNote(((java.lang.Object) (target) ), ((haxe.root.Array<nx3.NNote>) (notestoadd) ));
		event.doEvent();
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 3, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestEvents", "TestEvents.hx", "testEventAddNote"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (53) )) )})));
		event.undoEvent();
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 1, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestEvents", "TestEvents.hx", "testEventAddNote"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (55) )) )})));
		event.doEvent();
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 3, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestEvents", "TestEvents.hx", "testEventAddNote"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (57) )) )})));
		event.undoEvent();
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 1, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestEvents", "TestEvents.hx", "testEventAddNote"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (59) )) )})));
	}
	
	
	public   void testEventHeadSign()
	{
		nx3.NScore score = this.score1();
		this.assertEquals(nx3.NRefTools.getHead(nx3.NRefTools.refHead(score, 0, 0, 0, 0, 0)).sign, nx3.ESign.Flat, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestEvents", "TestEvents.hx", "testEventHeadSign"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (65) )) )})));
		java.lang.Object target = nx3.NRefTools.refHead(score, 0, 0, 0, 0, 0);
		nx3.events.EvHeadSign event = new nx3.events.EvHeadSign(((java.lang.Object) (target) ), ((nx3.ESign) (nx3.ESign.None) ));
		event.doEvent();
		this.assertEquals(nx3.NRefTools.getHead(nx3.NRefTools.refHead(score, 0, 0, 0, 0, 0)).sign, nx3.ESign.None, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestEvents", "TestEvents.hx", "testEventHeadSign"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (69) )) )})));
		event.undoEvent();
		this.assertEquals(nx3.NRefTools.getHead(nx3.NRefTools.refHead(score, 0, 0, 0, 0, 0)).sign, nx3.ESign.Flat, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestEvents", "TestEvents.hx", "testEventHeadSign"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (71) )) )})));
		event.doEvent();
		this.assertEquals(nx3.NRefTools.getHead(nx3.NRefTools.refHead(score, 0, 0, 0, 0, 0)).sign, nx3.ESign.None, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestEvents", "TestEvents.hx", "testEventHeadSign"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (73) )) )})));
		event.undoEvent();
		this.assertEquals(nx3.NRefTools.getHead(nx3.NRefTools.refHead(score, 0, 0, 0, 0, 0)).sign, nx3.ESign.Flat, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestEvents", "TestEvents.hx", "testEventHeadSign"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (75) )) )})));
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef880 = true;
			switch (field.hashCode())
			{
				case -1125370619:
				{
					if (field.equals("testEventHeadSign")) 
					{
						__temp_executeDef880 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("testEventHeadSign"))) );
					}
					
					break;
				}
				
				
				case -907766817:
				{
					if (field.equals("score1")) 
					{
						__temp_executeDef880 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("score1"))) );
					}
					
					break;
				}
				
				
				case 790599147:
				{
					if (field.equals("testEventAddNote")) 
					{
						__temp_executeDef880 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("testEventAddNote"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef880) 
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
			boolean __temp_executeDef881 = true;
			switch (field.hashCode())
			{
				case -1125370619:
				{
					if (field.equals("testEventHeadSign")) 
					{
						__temp_executeDef881 = false;
						this.testEventHeadSign();
					}
					
					break;
				}
				
				
				case -907766817:
				{
					if (field.equals("score1")) 
					{
						__temp_executeDef881 = false;
						return this.score1();
					}
					
					break;
				}
				
				
				case 790599147:
				{
					if (field.equals("testEventAddNote")) 
					{
						__temp_executeDef881 = false;
						this.testEventAddNote();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef881) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
}


