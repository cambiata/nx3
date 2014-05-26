package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PVoiceBeamgroupsGenerator_getNotesBeamgroupPosIndexes_80__Fun extends haxe.lang.Function
{
	public    PVoiceBeamgroupsGenerator_getNotesBeamgroupPosIndexes_80__Fun(haxe.root.Array<haxe.root.Array> patternPositions1)
	{
		super(1, 1);
		this.patternPositions1 = patternPositions1;
	}
	
	
	@Override public   double __hx_invoke1_f(double __fn_float1, java.lang.Object __fn_dyn1)
	{
		java.lang.Object curNotePos = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (((java.lang.Object) (__fn_float1) )) : (((java.lang.Object) (__fn_dyn1) )) );
		{
			int _g1 = 0;
			int _g = this.patternPositions1.__get(0).length;
			while (( _g1 < _g ))
			{
				int p = _g1++;
				java.lang.Object curPatternPos = this.patternPositions1.__get(0).__get(p);
				if (( ( haxe.lang.Runtime.compare(((int) (haxe.lang.Runtime.getField_f(curNotePos, "start", true)) ), ((int) (haxe.lang.Runtime.getField_f(curPatternPos, "start", true)) )) >= 0 ) && ( haxe.lang.Runtime.compare(((int) (haxe.lang.Runtime.getField_f(curNotePos, "end", true)) ), ((int) (haxe.lang.Runtime.getField_f(curPatternPos, "end", true)) )) <= 0 ) )) 
				{
					return ((double) (p) );
				}
				
			}
			
		}
		
		return ((double) (-1) );
	}
	
	
	public  haxe.root.Array<haxe.root.Array> patternPositions1;
	
}


