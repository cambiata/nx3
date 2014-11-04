package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NNote_get_nheads_51__Fun extends haxe.lang.Function
{
	public    NNote_get_nheads_51__Fun()
	{
		super(2, 1);
	}
	
	
	public static  nx3.NNote_get_nheads_51__Fun __hx_current;
	
	@Override public   double __hx_invoke2_f(double __fn_float1, java.lang.Object __fn_dyn1, double __fn_float2, java.lang.Object __fn_dyn2)
	{
		nx3.NHead b = ( (( __fn_dyn2 == haxe.lang.Runtime.undefined )) ? (((nx3.NHead) (((java.lang.Object) (__fn_float2) )) )) : (((nx3.NHead) (__fn_dyn2) )) );
		nx3.NHead a = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (((nx3.NHead) (((java.lang.Object) (__fn_float1) )) )) : (((nx3.NHead) (__fn_dyn1) )) );
		return ((double) (haxe.root.Reflect.compare(a.level, b.level)) );
	}
	
	
}


