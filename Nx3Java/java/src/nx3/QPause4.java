package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QPause4 extends nx3.NNote
{
	public    QPause4(haxe.lang.EmptyObject empty)
	{
		super(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public    QPause4(java.lang.Object level)
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.QPause4.__hx_ctor_nx3_QPause4(this, level);
	}
	
	
	public static   void __hx_ctor_nx3_QPause4(nx3.QPause4 __temp_me144, java.lang.Object level)
	{
		nx3.NNote.__hx_ctor_nx3_NNote(__temp_me144, nx3.ENoteType.Pause(((int) (haxe.lang.Runtime.toInt(( (( level == null )) ? (((java.lang.Object) (0) )) : (level) ))) )), null, nx3.ENoteVal.Nv4, null);
		java.lang.Object __temp_level143 = ( (( level == null )) ? (((java.lang.Object) (0) )) : (((java.lang.Object) (level) )) );
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.QPause4(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.QPause4(((java.lang.Object) (arr.__get(0)) ));
	}
	
	
}


