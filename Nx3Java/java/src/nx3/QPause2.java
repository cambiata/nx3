package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QPause2 extends nx3.NNote
{
	public    QPause2(haxe.lang.EmptyObject empty)
	{
		super(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public    QPause2(java.lang.Object level)
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.QPause2.__hx_ctor_nx3_QPause2(this, level);
	}
	
	
	public static   void __hx_ctor_nx3_QPause2(nx3.QPause2 __temp_me146, java.lang.Object level)
	{
		nx3.NNote.__hx_ctor_nx3_NNote(__temp_me146, nx3.ENoteType.Pause(((int) (haxe.lang.Runtime.toInt(( (( level == null )) ? (((java.lang.Object) (0) )) : (level) ))) )), null, nx3.ENoteVal.Nv2, null);
		java.lang.Object __temp_level145 = ( (( level == null )) ? (((java.lang.Object) (0) )) : (((java.lang.Object) (level) )) );
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.QPause2(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.QPause2(((java.lang.Object) (arr.__get(0)) ));
	}
	
	
}


