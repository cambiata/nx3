package thx.core._Tuple;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public final class Tuple2_Impl_
{
	public static  <T1, T0, T01, T12> java.lang.Object _new(T01 _0, T12 _1)
	{
		return new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"_0", "_1"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{_0, _1}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
	}
	
	
	
	
	
	
	public static  <T1, T0, T01, T12> T01 get_left(java.lang.Object this1)
	{
		return ((T01) (haxe.lang.Runtime.getField(this1, "_0", true)) );
	}
	
	
	public static  <T1, T0, T01, T12> T12 get_right(java.lang.Object this1)
	{
		return ((T12) (haxe.lang.Runtime.getField(this1, "_1", true)) );
	}
	
	
	public static  <T1, T0, T01, T12> java.lang.Object flip(java.lang.Object this1)
	{
		{
			T12 __temp_odecl863 = ((T12) (haxe.lang.Runtime.getField(this1, "_1", true)) );
			T01 __temp_odecl864 = ((T01) (haxe.lang.Runtime.getField(this1, "_0", true)) );
			return new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"_0", "_1"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{__temp_odecl863, __temp_odecl864}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		}
		
	}
	
	
	public static  <T1, T0, T01, T12> T12 dropLeft(java.lang.Object this1)
	{
		return ((T12) (haxe.lang.Runtime.getField(this1, "_1", true)) );
	}
	
	
	public static  <T1, T0, T01, T12> T01 dropRight(java.lang.Object this1)
	{
		return ((T01) (haxe.lang.Runtime.getField(this1, "_0", true)) );
	}
	
	
	public static  <T1, T0, T2, T01, T12> java.lang.Object with(java.lang.Object this1, T2 v)
	{
		java.lang.Object __temp_stmt867 = null;
		{
			T01 __temp_odecl865 = ((T01) (haxe.lang.Runtime.getField(this1, "_0", true)) );
			T12 __temp_odecl866 = ((T12) (haxe.lang.Runtime.getField(this1, "_1", true)) );
			__temp_stmt867 = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"_0", "_1", "_2"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{__temp_odecl865, __temp_odecl866, v}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		}
		
		return ((java.lang.Object) (__temp_stmt867) );
	}
	
	
	public static  <T1, T0, T01, T12> java.lang.String toString(java.lang.Object this1)
	{
		return ( ( ( ( "Tuple2(" + haxe.root.Std.string(((T01) (haxe.lang.Runtime.getField(this1, "_0", true)) )) ) + "," ) + haxe.root.Std.string(((T12) (haxe.lang.Runtime.getField(this1, "_1", true)) )) ) + ")" );
	}
	
	
}


