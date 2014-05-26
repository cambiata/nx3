package nx3.qs;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NoteParser_createFunctions_103__Fun extends haxe.lang.Function
{
	public    NoteParser_createFunctions_103__Fun(haxe.root.Array<nx3.qs.NoteParser> _g)
	{
		super(1, 0);
		this._g = _g;
	}
	
	
	@Override public   java.lang.Object __hx_invoke1_o(double __fn_float1, java.lang.Object __fn_dyn1)
	{
		java.lang.String token36 = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (haxe.lang.Runtime.toString(__fn_float1)) : (haxe.lang.Runtime.toString(__fn_dyn1)) );
		this._g.__get(0).notevalue = nx3.ENoteVal.Nv16dot;
		return haxe.lang.StringExt.substr(token36, 3, null);
	}
	
	
	public  haxe.root.Array<nx3.qs.NoteParser> _g;
	
}


