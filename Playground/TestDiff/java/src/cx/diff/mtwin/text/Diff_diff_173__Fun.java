package cx.diff.mtwin.text;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Diff_diff_173__Fun extends haxe.lang.Function
{
	public    Diff_diff_173__Fun(haxe.root.Array<haxe.root.Array> lcs)
	{
		super(1, 1);
		this.lcs = lcs;
	}
	
	
	@Override public   double __hx_invoke1_f(double __fn_float1, java.lang.Object __fn_dyn1)
	{
		haxe.root.Array<java.lang.Object> p = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (((haxe.root.Array<java.lang.Object>) (((java.lang.Object) (__fn_float1) )) )) : (((haxe.root.Array<java.lang.Object>) (__fn_dyn1) )) );
		return ((double) (((int) (haxe.lang.Runtime.toInt(((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (((haxe.root.Array<haxe.root.Array>) (((haxe.root.Array) (this.lcs.__get(0)) )) ).__get(((int) (haxe.lang.Runtime.toInt(p.__get(0))) ))) )) ).__get(((int) (haxe.lang.Runtime.toInt(p.__get(1))) )))) )) );
	}
	
	
	public  haxe.root.Array<haxe.root.Array> lcs;
	
}


