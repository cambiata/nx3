package cx.diff.mtwin.text;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Diff_diff_194__Fun extends haxe.lang.Function
{
	public    Diff_diff_194__Fun(haxe.root.Array<java.lang.Object> srcNoNewLine, haxe.root.Array<haxe.root.Array> sourceLines)
	{
		super(3, 0);
		this.srcNoNewLine = srcNoNewLine;
		this.sourceLines = sourceLines;
	}
	
	
	@Override public   java.lang.Object __hx_invoke3_o(double __fn_float1, java.lang.Object __fn_dyn1, double __fn_float2, java.lang.Object __fn_dyn2, double __fn_float3, java.lang.Object __fn_dyn3)
	{
		int dest1 = ( (( __fn_dyn3 == haxe.lang.Runtime.undefined )) ? (((int) (__fn_float3) )) : (((int) (haxe.lang.Runtime.toInt(__fn_dyn3)) )) );
		int to1 = ( (( __fn_dyn2 == haxe.lang.Runtime.undefined )) ? (((int) (__fn_float2) )) : (((int) (haxe.lang.Runtime.toInt(__fn_dyn2)) )) );
		int from1 = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (((int) (__fn_float1) )) : (((int) (haxe.lang.Runtime.toInt(__fn_dyn1)) )) );
		haxe.root.StringBuf op1 = new haxe.root.StringBuf();
		if (( from1 == to1 )) 
		{
			op1.add(from1);
		}
		 else 
		{
			op1.add(from1);
			op1.add(",");
			op1.add(to1);
		}
		
		op1.add("d");
		op1.add(dest1);
		op1.add("\n");
		{
			int _g1 = ( from1 - 1 );
			while (( _g1 < to1 ))
			{
				int i1 = _g1++;
				op1.add("< ");
				op1.add(((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (this.sourceLines.__get(0)) )) ).__get(i1));
				if (( haxe.lang.Runtime.toBool(this.srcNoNewLine.__get(0)) && ( i1 == ( ((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (this.sourceLines.__get(0)) )) ).length - 2 ) ) )) 
				{
					op1.add(cx.diff.mtwin.text.Diff.NO_NEW_LINE);
					break;
				}
				
			}
			
		}
		
		return op1.toString();
	}
	
	
	public  haxe.root.Array<java.lang.Object> srcNoNewLine;
	
	public  haxe.root.Array<haxe.root.Array> sourceLines;
	
}


