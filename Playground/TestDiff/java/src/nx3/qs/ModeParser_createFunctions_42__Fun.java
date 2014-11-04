package nx3.qs;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class ModeParser_createFunctions_42__Fun extends haxe.lang.Function
{
	public    ModeParser_createFunctions_42__Fun(haxe.root.Array<nx3.qs.ModeParser> _g)
	{
		super(1, 0);
		this._g = _g;
	}
	
	
	@Override public   java.lang.Object __hx_invoke1_o(double __fn_float1, java.lang.Object __fn_dyn1)
	{
		java.lang.String token4 = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (haxe.lang.Runtime.toString(__fn_float1)) : (haxe.lang.Runtime.toString(__fn_dyn1)) );
		this._g.__get(0).sendEvent(nx3.qs.ParserEvents.SetGuessOctave(true));
		return haxe.lang.StringExt.substr(token4, 6, null);
	}
	
	
	public  haxe.root.Array<nx3.qs.ModeParser> _g;
	
}


