package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QVoiceUp extends nx3.QVoice
{
	public    QVoiceUp(haxe.lang.EmptyObject empty)
	{
		super(haxe.lang.EmptyObject.EMPTY);
	}
	
	
	public    QVoiceUp(haxe.root.Array<java.lang.Object> notevalues, java.lang.Object notevalue, haxe.root.Array<java.lang.Object> headlevels, java.lang.Object levelrepeats, java.lang.String signs)
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.QVoiceUp.__hx_ctor_nx3_QVoiceUp(this, notevalues, notevalue, headlevels, levelrepeats, signs);
	}
	
	
	public static   void __hx_ctor_nx3_QVoiceUp(nx3.QVoiceUp __temp_me153, haxe.root.Array<java.lang.Object> notevalues, java.lang.Object notevalue, haxe.root.Array<java.lang.Object> headlevels, java.lang.Object levelrepeats, java.lang.String signs)
	{
		nx3.QVoice.__hx_ctor_nx3_QVoice(__temp_me153, ( (( notevalues == null )) ? (((haxe.root.Array<java.lang.Object>) (null) )) : (notevalues) ), ( (( notevalue == null )) ? (((java.lang.Object) (null) )) : (notevalue) ), ( (( headlevels == null )) ? (((haxe.root.Array<java.lang.Object>) (null) )) : (headlevels) ), ( (( levelrepeats == null )) ? (((java.lang.Object) (null) )) : (levelrepeats) ), ( (( signs == null )) ? (haxe.lang.Runtime.toString(null)) : (signs) ), nx3.EDirectionUAD.Up);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.QVoiceUp(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.QVoiceUp(((haxe.root.Array<java.lang.Object>) (arr.__get(0)) ), ((java.lang.Object) (arr.__get(1)) ), ((haxe.root.Array<java.lang.Object>) (arr.__get(2)) ), ((java.lang.Object) (arr.__get(3)) ), haxe.lang.Runtime.toString(arr.__get(4)));
	}
	
	
}


