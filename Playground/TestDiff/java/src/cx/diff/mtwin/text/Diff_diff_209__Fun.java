package cx.diff.mtwin.text;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Diff_diff_209__Fun extends haxe.lang.Function
{
	public    Diff_diff_209__Fun(haxe.root.Array<java.lang.Object> srcNoNewLine, haxe.root.Array<java.lang.Object> dstNoNewLine, haxe.root.Array<haxe.root.Array> sourceLines, haxe.root.Array<haxe.root.Array> destLines)
	{
		super(4, 0);
		this.srcNoNewLine = srcNoNewLine;
		this.dstNoNewLine = dstNoNewLine;
		this.sourceLines = sourceLines;
		this.destLines = destLines;
	}
	
	
	@Override public   java.lang.Object __hx_invoke4_o(double __fn_float1, java.lang.Object __fn_dyn1, double __fn_float2, java.lang.Object __fn_dyn2, double __fn_float3, java.lang.Object __fn_dyn3, double __fn_float4, java.lang.Object __fn_dyn4)
	{
		int byTo = ( (( __fn_dyn4 == haxe.lang.Runtime.undefined )) ? (((int) (__fn_float4) )) : (((int) (haxe.lang.Runtime.toInt(__fn_dyn4)) )) );
		int byFrom = ( (( __fn_dyn3 == haxe.lang.Runtime.undefined )) ? (((int) (__fn_float3) )) : (((int) (haxe.lang.Runtime.toInt(__fn_dyn3)) )) );
		int to2 = ( (( __fn_dyn2 == haxe.lang.Runtime.undefined )) ? (((int) (__fn_float2) )) : (((int) (haxe.lang.Runtime.toInt(__fn_dyn2)) )) );
		int from2 = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (((int) (__fn_float1) )) : (((int) (haxe.lang.Runtime.toInt(__fn_dyn1)) )) );
		haxe.root.StringBuf op2 = new haxe.root.StringBuf();
		if (( from2 == to2 )) 
		{
			op2.add(from2);
		}
		 else 
		{
			op2.add(from2);
			op2.add(",");
			op2.add(to2);
		}
		
		op2.add("c");
		if (( byFrom == byTo )) 
		{
			op2.add(byFrom);
		}
		 else 
		{
			op2.add(byFrom);
			op2.add(",");
			op2.add(byTo);
		}
		
		op2.add("\n");
		{
			int _g2 = ( from2 - 1 );
			while (( _g2 < to2 ))
			{
				int i2 = _g2++;
				op2.add("< ");
				op2.add(((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (this.sourceLines.__get(0)) )) ).__get(i2));
				if (( haxe.lang.Runtime.toBool(this.srcNoNewLine.__get(0)) && ( i2 == ( ((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (this.sourceLines.__get(0)) )) ).length - 2 ) ) )) 
				{
					op2.add(cx.diff.mtwin.text.Diff.NO_NEW_LINE);
					break;
				}
				
			}
			
		}
		
		op2.add("---\n");
		{
			int _g3 = ( byFrom - 1 );
			while (( _g3 < byTo ))
			{
				int i3 = _g3++;
				op2.add("> ");
				op2.add(((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (this.destLines.__get(0)) )) ).__get(i3));
				if (( haxe.lang.Runtime.toBool(this.dstNoNewLine.__get(0)) && ( i3 == ( ((haxe.root.Array<java.lang.String>) (((haxe.root.Array) (this.destLines.__get(0)) )) ).length - 2 ) ) )) 
				{
					op2.add(cx.diff.mtwin.text.Diff.NO_NEW_LINE);
					break;
				}
				
			}
			
		}
		
		return op2.toString();
	}
	
	
	public  haxe.root.Array<java.lang.Object> srcNoNewLine;
	
	public  haxe.root.Array<java.lang.Object> dstNoNewLine;
	
	public  haxe.root.Array<haxe.root.Array> sourceLines;
	
	public  haxe.root.Array<haxe.root.Array> destLines;
	
}


