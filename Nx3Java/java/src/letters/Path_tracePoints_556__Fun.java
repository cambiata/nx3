package letters;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Path_tracePoints_556__Fun extends haxe.lang.Function
{
	public    Path_tracePoints_556__Fun(haxe.root.Array<java.lang.String> str)
	{
		super(1, 0);
		this.str = str;
	}
	
	
	@Override public   java.lang.Object __hx_invoke1_o(double __fn_float1, java.lang.Object __fn_dyn1)
	{
		java.lang.Object v = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (((java.lang.Object) (__fn_float1) )) : (((java.lang.Object) (__fn_dyn1) )) );
		{
			int __temp_index253 = 0;
			this.str.__set(__temp_index253, ( this.str.__get(__temp_index253) + ( ( ( haxe.root.Std.string(((double) (haxe.lang.Runtime.toDouble(((haxe.root.Array<java.lang.Object>) (haxe.lang.Runtime.getField(v, "v0", true)) ).__get(0))) )) + " " ) + haxe.root.Std.string(((double) (haxe.lang.Runtime.toDouble(((haxe.root.Array<java.lang.Object>) (haxe.lang.Runtime.getField(v, "v0", true)) ).__get(1))) )) ) + "\n" ) ));
		}
		
		return v;
	}
	
	
	public  haxe.root.Array<java.lang.String> str;
	
}


