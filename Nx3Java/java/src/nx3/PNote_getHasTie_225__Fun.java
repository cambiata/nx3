package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PNote_getHasTie_225__Fun extends haxe.lang.Function
{
	public    PNote_getHasTie_225__Fun()
	{
		super(1, 0);
	}
	
	
	public static  nx3.PNote_getHasTie_225__Fun __hx_current;
	
	@Override public   java.lang.Object __hx_invoke1_o(double __fn_float1, java.lang.Object __fn_dyn1)
	{
		nx3.NHead nhead = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (((nx3.NHead) (((java.lang.Object) (__fn_float1) )) )) : (((nx3.NHead) (__fn_dyn1) )) );
		return  ! ((( nhead.tie != null ))) ;
	}
	
	
}


