package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NNote_get_headLevels_68__Fun extends haxe.lang.Function
{
	public    NNote_get_headLevels_68__Fun()
	{
		super(1, 1);
	}
	
	
	public static  nx3.NNote_get_headLevels_68__Fun __hx_current;
	
	@Override public   double __hx_invoke1_f(double __fn_float1, java.lang.Object __fn_dyn1)
	{
		nx3.NHead head = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (((nx3.NHead) (((java.lang.Object) (__fn_float1) )) )) : (((nx3.NHead) (__fn_dyn1) )) );
		return ((double) (head.level) );
	}
	
	
}


