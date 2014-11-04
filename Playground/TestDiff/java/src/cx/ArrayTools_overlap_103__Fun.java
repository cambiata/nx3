package cx;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class ArrayTools_overlap_103__Fun<T> extends haxe.lang.Function
{
	public    ArrayTools_overlap_103__Fun(haxe.root.Array<haxe.root.Array> array21)
	{
		super(1, 0);
		this.array21 = array21;
	}
	
	
	@Override public   java.lang.Object __hx_invoke1_o(double __fn_float1, java.lang.Object __fn_dyn1)
	{
		T value1 = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (((T) (((java.lang.Object) (__fn_float1) )) )) : (((T) (__fn_dyn1) )) );
		boolean ret = haxe.root.Lambda.has(((haxe.root.Array<T>) (((haxe.root.Array) (this.array21.__get(0)) )) ), value1);
		return ret;
	}
	
	
	public  haxe.root.Array<haxe.root.Array> array21;
	
}


