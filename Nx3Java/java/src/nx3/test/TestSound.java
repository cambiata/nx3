package nx3.test;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class TestSound extends haxe.unit.TestCase
{
	public    TestSound(haxe.lang.EmptyObject empty)
	{
		super(haxe.lang.EmptyObject.EMPTY);
	}
	
	
	public    TestSound()
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.test.TestSound.__hx_ctor_nx3_test_TestSound(this);
	}
	
	
	public static   void __hx_ctor_nx3_test_TestSound(nx3.test.TestSound __temp_me185)
	{
		haxe.unit.TestCase.__hx_ctor_haxe_unit_TestCase(__temp_me185);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.test.TestSound(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.test.TestSound();
	}
	
	
	public   void testSoundCalc1()
	{
		this.assertTrue(true, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.test.TestSound", "TestSound.hx", "testSoundCalc1"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (19) )) )})));
		nx3.PBar bar = new nx3.PBar(((nx3.NBar) (new nx3.NBar(((haxe.root.Array<nx3.NPart>) (new haxe.root.Array<nx3.NPart>(new nx3.NPart[]{new nx3.NPart(((haxe.root.Array<nx3.NVoice>) (new haxe.root.Array<nx3.NVoice>(new nx3.NVoice[]{new nx3.NVoice(((haxe.root.Array<nx3.NNote>) (new haxe.root.Array<nx3.NNote>(new nx3.NNote[]{new nx3.NNote(((nx3.ENoteType) (null) ), ((haxe.root.Array<nx3.NHead>) (new haxe.root.Array<nx3.NHead>(new nx3.NHead[]{new nx3.NHead(((nx3.EHeadType) (null) ), ((java.lang.Object) (0) ), ((nx3.ESign) (null) ), ((nx3.ETie) (null) ), ((nx3.ETie) (null) ))})) ), ((nx3.ENoteVal) (null) ), ((nx3.EDirectionUAD) (null) ))})) ), ((nx3.EVoiceType) (null) ), ((nx3.EDirectionUAD) (null) ))})) ), ((nx3.EPartType) (null) ), ((nx3.EClef) (null) ), ((nx3.EDisplayALN) (null) ), ((nx3.EKey) (null) ), ((nx3.EDisplayALN) (null) ))})) ), ((nx3.EBarType) (null) ), ((nx3.ETime) (null) ), ((nx3.EDisplayALN) (null) ), ((nx3.EAllotment) (null) ), ((java.lang.Object) (null) ))) ));
		nx3.PNote note = bar.getPart(0).getVoice(0).getNote(0);
		nx3.audio.NoteSoundCalculator sc = new nx3.audio.NoteSoundCalculator();
		haxe.root.Array<java.lang.Object> midinotes = sc.getMidiNotes(note);
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef856 = true;
			switch (field.hashCode())
			{
				case -1082885409:
				{
					if (field.equals("testSoundCalc1")) 
					{
						__temp_executeDef856 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("testSoundCalc1"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef856) 
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
			boolean __temp_executeDef857 = true;
			switch (field.hashCode())
			{
				case -1082885409:
				{
					if (field.equals("testSoundCalc1")) 
					{
						__temp_executeDef857 = false;
						this.testSoundCalc1();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef857) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
}


