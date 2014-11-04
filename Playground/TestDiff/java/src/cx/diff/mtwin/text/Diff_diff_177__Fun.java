package cx.diff.mtwin.text;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Diff_diff_177__Fun extends haxe.lang.Function
{
	public    Diff_diff_177__Fun(haxe.root.Array<java.lang.Object> dstNoNewLine, haxe.root.Array<haxe.root.Array> destLines)
	{
		super(3, 0);
		this.dstNoNewLine = dstNoNewLine;
		this.destLines = destLines;
	}
	
	
	@Override public   java.lang.Object __hx_invoke3_o(double __fn_float1, java.lang.Object __fn_dyn1, double __fn_float2, java.lang.Object __fn_dyn2, double __fn_float3, java.lang.Object __fn_dyn3)
	{
		int to = ( (( __fn_dyn3 == haxe.lang.Runtime.undefined )) ? (((int) (__fn_float3) )) : (((int) (haxe.lang.Runtime.toInt(__fn_dyn3)) )) );
		int from = ( (( __fn_dyn2 == haxe.lang.Runtime.undefined )) ? (((int) (__fn_float2) )) : (((int) (haxe.lang.Runtime.toInt(__fn_dyn2)) )) );
		int after = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (((int) (__fn_float1) )) : (((int) (haxe.lang.Runtime.toInt(__fn_dyn1)) )) );
		haxe.root.StringBuf op = new haxe.root.StringBuf();
		op.add(after);
		op.add("a");
		if (( from == to )) 
		{
			op.add(from);
		}
		 else 
		{
			op.add(from);
			op.add(",");
			op.add(to);
		}
		
		op.add("\n");
		{
			int _g = ( from - 1 );
			while (( _g < to ))
			{
				int i = _g++;
				op.add("> ");
				op.add(((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (this.destLines.__get(0)) )) ).__get(i));
				if (( haxe.lang.Runtime.toBool(this.dstNoNewLine.__get(0)) && ( i == ( ((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (this.destLines.__get(0)) )) ).length - 2 ) ) )) 
				{
					op.add(cx.diff.mtwin.text.Diff.NO_NEW_LINE);
					break;
				}
				
			}
			
		}
		
		return op.toString();
	}
	
	
	public  haxe.root.Array<java.lang.Object> dstNoNewLine;
	
	public  haxe.root.Array<haxe.root.Array> destLines;
	
}


