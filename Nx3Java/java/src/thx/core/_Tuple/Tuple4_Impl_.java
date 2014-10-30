package thx.core._Tuple;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public final class Tuple4_Impl_
{
	public static  <T3, T2, T1, T0, T01, T12, T23, T34> java.lang.Object _new(T01 _0, T12 _1, T23 _2, T34 _3)
	{
		return new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"_0", "_1", "_2", "_3"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{_0, _1, _2, _3}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
	}
	
	
	public static  <T3, T2, T1, T0, T01, T12, T23, T34> java.lang.Object flip(java.lang.Object this1)
	{
		{
			T34 __temp_odecl881 = ((T34) (haxe.lang.Runtime.getField(this1, "_3", true)) );
			T23 __temp_odecl882 = ((T23) (haxe.lang.Runtime.getField(this1, "_2", true)) );
			T12 __temp_odecl883 = ((T12) (haxe.lang.Runtime.getField(this1, "_1", true)) );
			T01 __temp_odecl884 = ((T01) (haxe.lang.Runtime.getField(this1, "_0", true)) );
			return new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"_0", "_1", "_2", "_3"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{__temp_odecl881, __temp_odecl882, __temp_odecl883, __temp_odecl884}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		}
		
	}
	
	
	public static  <T3, T2, T1, T0, T01, T12, T23, T34> java.lang.Object dropLeft(java.lang.Object this1)
	{
		java.lang.Object __temp_stmt888 = null;
		{
			T12 __temp_odecl885 = ((T12) (haxe.lang.Runtime.getField(this1, "_1", true)) );
			T23 __temp_odecl886 = ((T23) (haxe.lang.Runtime.getField(this1, "_2", true)) );
			T34 __temp_odecl887 = ((T34) (haxe.lang.Runtime.getField(this1, "_3", true)) );
			__temp_stmt888 = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"_0", "_1", "_2"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{__temp_odecl885, __temp_odecl886, __temp_odecl887}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		}
		
		return ((java.lang.Object) (__temp_stmt888) );
	}
	
	
	public static  <T3, T2, T1, T0, T01, T12, T23, T34> java.lang.Object dropRight(java.lang.Object this1)
	{
		java.lang.Object __temp_stmt892 = null;
		{
			T01 __temp_odecl889 = ((T01) (haxe.lang.Runtime.getField(this1, "_0", true)) );
			T12 __temp_odecl890 = ((T12) (haxe.lang.Runtime.getField(this1, "_1", true)) );
			T23 __temp_odecl891 = ((T23) (haxe.lang.Runtime.getField(this1, "_2", true)) );
			__temp_stmt892 = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"_0", "_1", "_2"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{__temp_odecl889, __temp_odecl890, __temp_odecl891}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		}
		
		return ((java.lang.Object) (__temp_stmt892) );
	}
	
	
	public static  <T3, T2, T1, T0, T4, T01, T12, T23, T34> java.lang.Object with(java.lang.Object this1, T4 v)
	{
		java.lang.Object __temp_stmt897 = null;
		{
			T01 __temp_odecl893 = ((T01) (haxe.lang.Runtime.getField(this1, "_0", true)) );
			T12 __temp_odecl894 = ((T12) (haxe.lang.Runtime.getField(this1, "_1", true)) );
			T23 __temp_odecl895 = ((T23) (haxe.lang.Runtime.getField(this1, "_2", true)) );
			T34 __temp_odecl896 = ((T34) (haxe.lang.Runtime.getField(this1, "_3", true)) );
			__temp_stmt897 = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"_0", "_1", "_2", "_3", "_4"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{__temp_odecl893, __temp_odecl894, __temp_odecl895, __temp_odecl896, v}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		}
		
		return ((java.lang.Object) (__temp_stmt897) );
	}
	
	
	public static  <T3, T2, T1, T0, T01, T12, T23, T34> java.lang.String toString(java.lang.Object this1)
	{
		return ( ( ( ( ( ( ( ( "Tuple4(" + haxe.root.Std.string(((T01) (haxe.lang.Runtime.getField(this1, "_0", true)) )) ) + "," ) + haxe.root.Std.string(((T12) (haxe.lang.Runtime.getField(this1, "_1", true)) )) ) + "," ) + haxe.root.Std.string(((T23) (haxe.lang.Runtime.getField(this1, "_2", true)) )) ) + "," ) + haxe.root.Std.string(((T34) (haxe.lang.Runtime.getField(this1, "_3", true)) )) ) + ")" );
	}
	
	
}


