package nx3.qs;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class ModeParser_createFunctions_25__Fun extends haxe.lang.Function
{
	public    ModeParser_createFunctions_25__Fun(haxe.root.Array<nx3.qs.ModeParser> _g)
	{
		super(1, 0);
		this._g = _g;
	}
	
	
	@Override public   java.lang.Object __hx_invoke1_o(double __fn_float1, java.lang.Object __fn_dyn1)
	{
		java.lang.String token1 = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (haxe.lang.Runtime.toString(__fn_float1)) : (haxe.lang.Runtime.toString(__fn_dyn1)) );
		this._g.__get(0).sendEvent(nx3.qs.ParserEvents.SetMode(nx3.qs.ContentMode.Tpls));
		haxe.Log.trace.__hx_invoke2_o(0.0, "handle tpls...", 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.qs.ModeParser", "ModeParser.hx", "createFunctions"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (27) )) )})));
		return haxe.lang.StringExt.substr(token1, 4, null);
	}
	
	
	public  haxe.root.Array<nx3.qs.ModeParser> _g;
	
}


