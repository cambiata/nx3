package cx;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class ArrayTools_sorta_203__Fun<T> extends haxe.lang.Function
{
	public    ArrayTools_sorta_203__Fun()
	{
		super(2, 1);
	}
	
	
	@Override public   double __hx_invoke2_f(double __fn_float1, java.lang.Object __fn_dyn1, double __fn_float2, java.lang.Object __fn_dyn2)
	{
		T b = ( (( __fn_dyn2 == haxe.lang.Runtime.undefined )) ? (((T) (((java.lang.Object) (__fn_float2) )) )) : (((T) (__fn_dyn2) )) );
		T a1 = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (((T) (((java.lang.Object) (__fn_float1) )) )) : (((T) (__fn_dyn1) )) );
		return ((double) (haxe.root.Reflect.compare(a1, b)) );
	}
	
	
}


