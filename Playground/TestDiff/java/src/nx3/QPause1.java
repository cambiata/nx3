package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QPause1 extends nx3.NNote
{
	public    QPause1(haxe.lang.EmptyObject empty)
	{
		super(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public    QPause1(java.lang.Object level)
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.QPause1.__hx_ctor_nx3_QPause1(this, level);
	}
	
	
	public static   void __hx_ctor_nx3_QPause1(nx3.QPause1 __temp_me138, java.lang.Object level)
	{
		nx3.NNote.__hx_ctor_nx3_NNote(__temp_me138, nx3.ENoteType.Pause(((int) (haxe.lang.Runtime.toInt(( (( level == null )) ? (((java.lang.Object) (0) )) : (level) ))) )), null, nx3.ENoteVal.Nv1, null);
		java.lang.Object __temp_level137 = ( (( level == null )) ? (((java.lang.Object) (0) )) : (((java.lang.Object) (level) )) );
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.QPause1(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.QPause1(((java.lang.Object) (arr.__get(0)) ));
	}
	
	
}


