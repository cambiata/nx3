package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NNote_get_ties_69__Fun extends haxe.lang.Function
{
	public    NNote_get_ties_69__Fun()
	{
		super(1, 0);
	}
	
	
	public static  nx3.NNote_get_ties_69__Fun __hx_current;
	
	@Override public   java.lang.Object __hx_invoke1_o(double __fn_float1, java.lang.Object __fn_dyn1)
	{
		nx3.NHead head = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (((nx3.NHead) (((java.lang.Object) (__fn_float1) )) )) : (((nx3.NHead) (__fn_dyn1) )) );
		return ( head.tie != null );
	}
	
	
}


