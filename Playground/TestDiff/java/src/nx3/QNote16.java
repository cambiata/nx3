package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QNote16 extends nx3.QNote
{
	public    QNote16(haxe.lang.EmptyObject empty)
	{
		super(haxe.lang.EmptyObject.EMPTY);
	}
	
	
	public    QNote16(java.lang.Object headLevel, haxe.root.Array<java.lang.Object> headLevels, java.lang.String signs)
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.QNote16.__hx_ctor_nx3_QNote16(this, headLevel, headLevels, signs);
	}
	
	
	public static   void __hx_ctor_nx3_QNote16(nx3.QNote16 __temp_me146, java.lang.Object headLevel, haxe.root.Array<java.lang.Object> headLevels, java.lang.String signs)
	{
		nx3.QNote.__hx_ctor_nx3_QNote(__temp_me146, ( (( headLevel == null )) ? (((java.lang.Object) (null) )) : (headLevel) ), ( (( headLevels == null )) ? (((haxe.root.Array<java.lang.Object>) (null) )) : (headLevels) ), null, null, nx3.ENoteVal.Nv16, ( (( signs == null )) ? (haxe.lang.Runtime.toString("")) : (signs) ), null);
		if (( signs == null )) 
		{
			signs = "";
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.QNote16(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.QNote16(((java.lang.Object) (arr.__get(0)) ), ((haxe.root.Array<java.lang.Object>) (arr.__get(1)) ), haxe.lang.Runtime.toString(arr.__get(2)));
	}
	
	
}


