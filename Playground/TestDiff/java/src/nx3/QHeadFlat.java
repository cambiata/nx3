package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QHeadFlat extends nx3.QHead
{
	public    QHeadFlat(haxe.lang.EmptyObject empty)
	{
		super(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public    QHeadFlat(java.lang.Object level)
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.QHeadFlat.__hx_ctor_nx3_QHeadFlat(this, level);
	}
	
	
	public static   void __hx_ctor_nx3_QHeadFlat(nx3.QHeadFlat __temp_me125, java.lang.Object level)
	{
		nx3.QHead.__hx_ctor_nx3_QHead(__temp_me125, ( (( level == null )) ? (((java.lang.Object) (0) )) : (level) ), nx3.ESign.Flat);
		java.lang.Object __temp_level124 = ( (( level == null )) ? (((java.lang.Object) (0) )) : (((java.lang.Object) (level) )) );
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.QHeadFlat(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.QHeadFlat(((java.lang.Object) (arr.__get(0)) ));
	}
	
	
}


