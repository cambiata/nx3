package nx3.qs;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NoteParser_createFunctions_108__Fun extends haxe.lang.Function
{
	public    NoteParser_createFunctions_108__Fun(haxe.root.Array<nx3.qs.NoteParser> _g)
	{
		super(1, 0);
		this._g = _g;
	}
	
	
	@Override public   java.lang.Object __hx_invoke1_o(double __fn_float1, java.lang.Object __fn_dyn1)
	{
		java.lang.String token39 = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (haxe.lang.Runtime.toString(__fn_float1)) : (haxe.lang.Runtime.toString(__fn_dyn1)) );
		this._g.__get(0).prevlevel = 3;
		this._g.__get(0).octAdjust = 0;
		return haxe.lang.StringExt.substr(token39, 1, null);
	}
	
	
	public  haxe.root.Array<nx3.qs.NoteParser> _g;
	
}


