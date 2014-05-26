package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QPause16 extends nx3.NNote
{
	public    QPause16(haxe.lang.EmptyObject empty)
	{
		super(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public    QPause16(java.lang.Object level)
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.QPause16.__hx_ctor_nx3_QPause16(this, level);
	}
	
	
	public static   void __hx_ctor_nx3_QPause16(nx3.QPause16 __temp_me152, java.lang.Object level)
	{
		nx3.NNote.__hx_ctor_nx3_NNote(__temp_me152, nx3.ENoteType.Pause(((int) (haxe.lang.Runtime.toInt(( (( level == null )) ? (((java.lang.Object) (0) )) : (level) ))) )), null, nx3.ENoteVal.Nv16, null);
		java.lang.Object __temp_level151 = ( (( level == null )) ? (((java.lang.Object) (0) )) : (((java.lang.Object) (level) )) );
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.QPause16(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.QPause16(((java.lang.Object) (arr.__get(0)) ));
	}
	
	
}


