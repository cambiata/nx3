package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QPause8 extends nx3.NNote
{
	public    QPause8(haxe.lang.EmptyObject empty)
	{
		super(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public    QPause8(java.lang.Object level)
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.QPause8.__hx_ctor_nx3_QPause8(this, level);
	}
	
	
	public static   void __hx_ctor_nx3_QPause8(nx3.QPause8 __temp_me132, java.lang.Object level)
	{
		nx3.NNote.__hx_ctor_nx3_NNote(__temp_me132, nx3.ENoteType.Pause(((int) (haxe.lang.Runtime.toInt(( (( level == null )) ? (((java.lang.Object) (0) )) : (level) ))) )), null, nx3.ENoteVal.Nv8, null);
		java.lang.Object __temp_level131 = ( (( level == null )) ? (((java.lang.Object) (0) )) : (((java.lang.Object) (level) )) );
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.QPause8(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.QPause8(((java.lang.Object) (arr.__get(0)) ));
	}
	
	
}


