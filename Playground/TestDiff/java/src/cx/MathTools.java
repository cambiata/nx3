package cx;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class MathTools extends haxe.lang.HxObject
{
	public    MathTools(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    MathTools()
	{
		cx.MathTools.__hx_ctor_cx_MathTools(this);
	}
	
	
	public static   void __hx_ctor_cx_MathTools(cx.MathTools __temp_me18)
	{
		{
		}
		
	}
	
	
	public static   double floatFromString(java.lang.String str, java.lang.String comma)
	{
		if (( comma == null )) 
		{
			comma = ",";
		}
		
		str = haxe.root.StringTools.replace(str, ",", ".");
		return haxe.root.Std.parseFloat(str);
	}
	
	
	public static   java.lang.String floatToString(double val, java.lang.String comma)
	{
		if (( comma == null )) 
		{
			comma = ",";
		}
		
		java.lang.String result = haxe.root.Std.string(val);
		if ( ! (haxe.lang.Runtime.valEq(comma, ".")) ) 
		{
			result = haxe.root.StringTools.replace(result, ".", comma);
		}
		
		return result;
	}
	
	
	public static   boolean floatEquals(double a, double b)
	{
		return ( java.lang.Math.abs(( a - b )) <= 0.00001 );
	}
	
	
	public static   boolean inRange(double min, double value, double max)
	{
		if (( value < min )) 
		{
			return false;
		}
		
		if (( value > max )) 
		{
			return false;
		}
		
		return true;
	}
	
	
	public static   double floatRange(double min, double value, double max)
	{
		if (( value < min )) 
		{
			return min;
		}
		
		if (( value > max )) 
		{
			return max;
		}
		
		return value;
	}
	
	
	public static   double round2(double number, java.lang.Object precision)
	{
		int __temp_precision17 = ( (( precision == null )) ? (((int) (6) )) : (((int) (haxe.lang.Runtime.toInt(precision)) )) );
		number = ( number * java.lang.Math.pow(((double) (10) ), ((double) (__temp_precision17) )) );
		number = ( ((int) (java.lang.Math.round(number)) ) / java.lang.Math.pow(((double) (10) ), ((double) (__temp_precision17) )) );
		return number;
	}
	
	
	public static   int intRange(int min, int value, int max)
	{
		if (( value < min )) 
		{
			return min;
		}
		
		if (( value > max )) 
		{
			return max;
		}
		
		return value;
	}
	
	
	public static   int intMin(int a, int b)
	{
		if (( a < b )) 
		{
			return a;
		}
		
		return b;
	}
	
	
	public static   int intMax(int a, int b)
	{
		if (( a > b )) 
		{
			return a;
		}
		
		return b;
	}
	
	
	public static   double ipol(double a, double b, double delta)
	{
		return ( ( delta * (( b - a )) ) + a );
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new cx.MathTools(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new cx.MathTools();
	}
	
	
}


