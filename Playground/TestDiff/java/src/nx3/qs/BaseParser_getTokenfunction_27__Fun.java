package nx3.qs;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class BaseParser_getTokenfunction_27__Fun extends haxe.lang.Function
{
	public    BaseParser_getTokenfunction_27__Fun()
	{
		super(2, 1);
	}
	
	
	public static  nx3.qs.BaseParser_getTokenfunction_27__Fun __hx_current;
	
	@Override public   double __hx_invoke2_f(double __fn_float1, java.lang.Object __fn_dyn1, double __fn_float2, java.lang.Object __fn_dyn2)
	{
		java.lang.String b = ( (( __fn_dyn2 == haxe.lang.Runtime.undefined )) ? (haxe.lang.Runtime.toString(__fn_float2)) : (haxe.lang.Runtime.toString(__fn_dyn2)) );
		java.lang.String a = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (haxe.lang.Runtime.toString(__fn_float1)) : (haxe.lang.Runtime.toString(__fn_dyn1)) );
		return ((double) ( - (haxe.root.Reflect.compare(a.length(), b.length())) ) );
	}
	
	
}


