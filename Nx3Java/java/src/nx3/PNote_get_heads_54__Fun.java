package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PNote_get_heads_54__Fun extends haxe.lang.Function
{
	public    PNote_get_heads_54__Fun(haxe.root.Array<nx3.PNote> _g)
	{
		super(1, 0);
		this._g = _g;
	}
	
	
	@Override public   java.lang.Object __hx_invoke1_o(double __fn_float1, java.lang.Object __fn_dyn1)
	{
		nx3.NHead nhead = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (((nx3.NHead) (((java.lang.Object) (__fn_float1) )) )) : (((nx3.NHead) (__fn_dyn1) )) );
		nx3.PHead phead = new nx3.PHead(((nx3.NHead) (nhead) ));
		phead.note = this._g.__get(0);
		return phead;
	}
	
	
	public  haxe.root.Array<nx3.PNote> _g;
	
}


