package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NRefTools extends haxe.lang.HxObject
{
	public    NRefTools(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    NRefTools()
	{
		nx3.NRefTools.__hx_ctor_nx3_NRefTools(this);
	}
	
	
	public static   void __hx_ctor_nx3_NRefTools(nx3.NRefTools __temp_me85)
	{
		{
		}
		
	}
	
	
	public static   java.lang.Object refNote(nx3.NScore score, java.lang.Object barIdx, java.lang.Object partIdx, java.lang.Object voiceIdx, java.lang.Object noteIdx)
	{
		int __temp_noteIdx79 = ( (( noteIdx == null )) ? (((int) (0) )) : (((int) (haxe.lang.Runtime.toInt(noteIdx)) )) );
		int __temp_voiceIdx78 = ( (( voiceIdx == null )) ? (((int) (0) )) : (((int) (haxe.lang.Runtime.toInt(voiceIdx)) )) );
		int __temp_partIdx77 = ( (( partIdx == null )) ? (((int) (0) )) : (((int) (haxe.lang.Runtime.toInt(partIdx)) )) );
		int __temp_barIdx76 = ( (( barIdx == null )) ? (((int) (0) )) : (((int) (haxe.lang.Runtime.toInt(barIdx)) )) );
		return new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"score"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{score}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"bar", "head", "note", "part", "voice"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (__temp_barIdx76) )) ), ((java.lang.Object) (((double) (0) )) ), ((java.lang.Object) (((double) (__temp_noteIdx79) )) ), ((java.lang.Object) (((double) (__temp_partIdx77) )) ), ((java.lang.Object) (((double) (__temp_voiceIdx78) )) )}));
	}
	
	
	public static   java.lang.Object refHead(nx3.NScore score, java.lang.Object barIdx, java.lang.Object partIdx, java.lang.Object voiceIdx, java.lang.Object noteIdx, java.lang.Object headIdx)
	{
		int __temp_headIdx84 = ( (( headIdx == null )) ? (((int) (0) )) : (((int) (haxe.lang.Runtime.toInt(headIdx)) )) );
		int __temp_noteIdx83 = ( (( noteIdx == null )) ? (((int) (0) )) : (((int) (haxe.lang.Runtime.toInt(noteIdx)) )) );
		int __temp_voiceIdx82 = ( (( voiceIdx == null )) ? (((int) (0) )) : (((int) (haxe.lang.Runtime.toInt(voiceIdx)) )) );
		int __temp_partIdx81 = ( (( partIdx == null )) ? (((int) (0) )) : (((int) (haxe.lang.Runtime.toInt(partIdx)) )) );
		int __temp_barIdx80 = ( (( barIdx == null )) ? (((int) (0) )) : (((int) (haxe.lang.Runtime.toInt(barIdx)) )) );
		return new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"score"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{score}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"bar", "head", "note", "part", "voice"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (__temp_barIdx80) )) ), ((java.lang.Object) (((double) (__temp_headIdx84) )) ), ((java.lang.Object) (((double) (__temp_noteIdx83) )) ), ((java.lang.Object) (((double) (__temp_partIdx81) )) ), ((java.lang.Object) (((double) (__temp_voiceIdx82) )) )}));
	}
	
	
	public static   boolean checkRefNoteError(java.lang.Object ref)
	{
		if (( nx3.NRefTools.getNote(ref) == null )) 
		{
			return true;
		}
		
		return false;
	}
	
	
	public static   nx3.NNote getNote(java.lang.Object ref)
	{
		nx3.NNote targetnote = null;
		try 
		{
			targetnote = ((nx3.NScore) (haxe.lang.Runtime.getField(ref, "score", true)) ).getNBar(((int) (haxe.lang.Runtime.getField_f(ref, "bar", true)) )).getNPart(((int) (haxe.lang.Runtime.getField_f(ref, "part", true)) )).getNVoice(((int) (haxe.lang.Runtime.getField_f(ref, "voice", true)) )).getNNote(((int) (haxe.lang.Runtime.getField_f(ref, "note", true)) ));
		}
		catch (java.lang.Throwable __temp_catchallException606)
		{
			java.lang.Object __temp_catchall607 = __temp_catchallException606;
			if (( __temp_catchall607 instanceof haxe.lang.HaxeException )) 
			{
				__temp_catchall607 = ((haxe.lang.HaxeException) (__temp_catchallException606) ).obj;
			}
			
			{
				java.lang.Object e = __temp_catchall607;
				return null;
			}
			
		}
		
		
		return targetnote;
	}
	
	
	public static   nx3.NHead getHead(java.lang.Object ref)
	{
		nx3.NHead targethead = null;
		try 
		{
			targethead = ((nx3.NScore) (haxe.lang.Runtime.getField(ref, "score", true)) ).getNBar(((int) (haxe.lang.Runtime.getField_f(ref, "bar", true)) )).getNPart(((int) (haxe.lang.Runtime.getField_f(ref, "part", true)) )).getNVoice(((int) (haxe.lang.Runtime.getField_f(ref, "voice", true)) )).getNNote(((int) (haxe.lang.Runtime.getField_f(ref, "note", true)) )).getNHead(((int) (haxe.lang.Runtime.getField_f(ref, "head", true)) ));
		}
		catch (java.lang.Throwable __temp_catchallException608)
		{
			java.lang.Object __temp_catchall609 = __temp_catchallException608;
			if (( __temp_catchall609 instanceof haxe.lang.HaxeException )) 
			{
				__temp_catchall609 = ((haxe.lang.HaxeException) (__temp_catchallException608) ).obj;
			}
			
			{
				java.lang.Object e = __temp_catchall609;
				return null;
			}
			
		}
		
		
		return targethead;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.NRefTools(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.NRefTools();
	}
	
	
}


