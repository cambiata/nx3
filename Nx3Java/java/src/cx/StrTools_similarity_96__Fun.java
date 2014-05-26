package cx;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class StrTools_similarity_96__Fun extends haxe.lang.Function
{
	public    StrTools_similarity_96__Fun()
	{
		super(2, 1);
	}
	
	
	public static  cx.StrTools_similarity_96__Fun __hx_current;
	
	@Override public   double __hx_invoke2_f(double __fn_float1, java.lang.Object __fn_dyn1, double __fn_float2, java.lang.Object __fn_dyn2)
	{
		java.lang.String strB1 = ( (( __fn_dyn2 == haxe.lang.Runtime.undefined )) ? (haxe.lang.Runtime.toString(__fn_float2)) : (haxe.lang.Runtime.toString(__fn_dyn2)) );
		java.lang.String strA1 = ( (( __fn_dyn1 == haxe.lang.Runtime.undefined )) ? (haxe.lang.Runtime.toString(__fn_float1)) : (haxe.lang.Runtime.toString(__fn_dyn1)) );
		double score = cx.StrTools._similarity(strA1, strB1);
		if (( strA1.length() != strB1.length() )) 
		{
			score = ( (( score + cx.StrTools._similarity(strB1, strA1) )) / 2 );
		}
		
		return score;
	}
	
	
}


