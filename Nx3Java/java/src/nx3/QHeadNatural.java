package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QHeadNatural extends nx3.QHead
{
	public    QHeadNatural(haxe.lang.EmptyObject empty)
	{
		super(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public    QHeadNatural(java.lang.Object level)
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.QHeadNatural.__hx_ctor_nx3_QHeadNatural(this, level);
	}
	
	
	public static   void __hx_ctor_nx3_QHeadNatural(nx3.QHeadNatural __temp_me137, java.lang.Object level)
	{
		nx3.QHead.__hx_ctor_nx3_QHead(__temp_me137, ( (( level == null )) ? (((java.lang.Object) (0) )) : (level) ), nx3.ESign.Natural);
		java.lang.Object __temp_level136 = ( (( level == null )) ? (((java.lang.Object) (0) )) : (((java.lang.Object) (level) )) );
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.QHeadNatural(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.QHeadNatural(((java.lang.Object) (arr.__get(0)) ));
	}
	
	
}


