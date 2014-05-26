package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QHead extends nx3.NHead
{
	public    QHead(haxe.lang.EmptyObject empty)
	{
		super(haxe.lang.EmptyObject.EMPTY);
	}
	
	
	public    QHead(java.lang.Object level, nx3.ESign sign)
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.QHead.__hx_ctor_nx3_QHead(this, level, sign);
	}
	
	
	public static   void __hx_ctor_nx3_QHead(nx3.QHead __temp_me143, java.lang.Object level, nx3.ESign sign)
	{
		nx3.NHead.__hx_ctor_nx3_NHead(__temp_me143, null, ( (( level == null )) ? (((java.lang.Object) (0) )) : (level) ), ( (( sign == null )) ? (((nx3.ESign) (null) )) : (sign) ), null, null);
		java.lang.Object __temp_level142 = ( (( level == null )) ? (((java.lang.Object) (0) )) : (((java.lang.Object) (level) )) );
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.QHead(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.QHead(((java.lang.Object) (arr.__get(0)) ), ((nx3.ESign) (arr.__get(1)) ));
	}
	
	
}


