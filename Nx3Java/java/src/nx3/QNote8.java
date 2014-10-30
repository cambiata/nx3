package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QNote8 extends nx3.QNote
{
	public    QNote8(haxe.lang.EmptyObject empty)
	{
		super(haxe.lang.EmptyObject.EMPTY);
	}
	
	
	public    QNote8(java.lang.Object dot, java.lang.Object headLevel, haxe.root.Array<java.lang.Object> headLevels, java.lang.String signs)
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.QNote8.__hx_ctor_nx3_QNote8(this, dot, headLevel, headLevels, signs);
	}
	
	
	public static   void __hx_ctor_nx3_QNote8(nx3.QNote8 __temp_me155, java.lang.Object dot, java.lang.Object headLevel, haxe.root.Array<java.lang.Object> headLevels, java.lang.String signs)
	{
		if (( signs == null )) 
		{
			signs = "";
		}
		
		java.lang.Object __temp_dot154 = ( (( dot == null )) ? (((java.lang.Object) (false) )) : (((java.lang.Object) (dot) )) );
		nx3.ENoteVal val = null;
		if (haxe.lang.Runtime.toBool((__temp_dot154))) 
		{
			val = nx3.ENoteVal.Nv8dot;
		}
		 else 
		{
			val = nx3.ENoteVal.Nv8;
		}
		
		nx3.QNote.__hx_ctor_nx3_QNote(__temp_me155, headLevel, headLevels, null, null, val, signs, null);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.QNote8(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.QNote8(((java.lang.Object) (arr.__get(0)) ), ((java.lang.Object) (arr.__get(1)) ), ((haxe.root.Array<java.lang.Object>) (arr.__get(2)) ), haxe.lang.Runtime.toString(arr.__get(3)));
	}
	
	
}


