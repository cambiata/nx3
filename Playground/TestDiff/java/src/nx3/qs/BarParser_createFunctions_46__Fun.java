package nx3.qs;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class BarParser_createFunctions_46__Fun extends haxe.lang.Function
{
	public    BarParser_createFunctions_46__Fun(haxe.root.Array<nx3.qs.BarParser> _g)
	{
		super(1, 0);
		this._g = _g;
	}
	
	
	@Override public   java.lang.Object __hx_invoke1_o(double __fn_float1, java.lang.Object __fn_dyn1)
	{
		java.lang.String token3 = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (haxe.lang.Runtime.toString(__fn_float1)) : (haxe.lang.Runtime.toString(__fn_dyn1)) );
		this._g.__get(0).partIndex++;
		this._g.__get(0).voiceIndex = 0;
		return haxe.lang.StringExt.substr(token3, 1, null);
	}
	
	
	public  haxe.root.Array<nx3.qs.BarParser> _g;
	
}


