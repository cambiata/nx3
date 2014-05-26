package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PSignsCalculator_calcSortSigns_63__Fun extends haxe.lang.Function
{
	public    PSignsCalculator_calcSortSigns_63__Fun()
	{
		super(2, 1);
	}
	
	
	public static  nx3.PSignsCalculator_calcSortSigns_63__Fun __hx_current;
	
	@Override public   double __hx_invoke2_f(double __fn_float1, java.lang.Object __fn_dyn1, double __fn_float2, java.lang.Object __fn_dyn2)
	{
		java.lang.Object b = ( (( __fn_dyn2 == haxe.lang.Runtime.undefined )) ? (((java.lang.Object) (__fn_float2) )) : (((java.lang.Object) (__fn_dyn2) )) );
		java.lang.Object a = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (((java.lang.Object) (__fn_float1) )) : (((java.lang.Object) (__fn_dyn1) )) );
		return ((double) (haxe.root.Reflect.compare(((int) (haxe.lang.Runtime.getField_f(a, "level", true)) ), ((int) (haxe.lang.Runtime.getField_f(b, "level", true)) ))) );
	}
	
	
}


