package thx.core._Tuple;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public final class Tuple3_Impl_
{
	public static  <T2, T1, T0, T01, T12, T23> java.lang.Object _new(T01 _0, T12 _1, T23 _2)
	{
		return new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"_0", "_1", "_2"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{_0, _1, _2}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
	}
	
	
	public static  <T2, T1, T0, T01, T12, T23> java.lang.Object flip(java.lang.Object this1)
	{
		{
			T23 __temp_odecl868 = ((T23) (haxe.lang.Runtime.getField(this1, "_2", true)) );
			T12 __temp_odecl869 = ((T12) (haxe.lang.Runtime.getField(this1, "_1", true)) );
			T01 __temp_odecl870 = ((T01) (haxe.lang.Runtime.getField(this1, "_0", true)) );
			return new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"_0", "_1", "_2"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{__temp_odecl868, __temp_odecl869, __temp_odecl870}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		}
		
	}
	
	
	public static  <T2, T1, T0, T01, T12, T23> java.lang.Object dropLeft(java.lang.Object this1)
	{
		java.lang.Object __temp_stmt873 = null;
		{
			T12 __temp_odecl871 = ((T12) (haxe.lang.Runtime.getField(this1, "_1", true)) );
			T23 __temp_odecl872 = ((T23) (haxe.lang.Runtime.getField(this1, "_2", true)) );
			__temp_stmt873 = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"_0", "_1"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{__temp_odecl871, __temp_odecl872}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		}
		
		return ((java.lang.Object) (__temp_stmt873) );
	}
	
	
	public static  <T2, T1, T0, T01, T12, T23> java.lang.Object dropRight(java.lang.Object this1)
	{
		java.lang.Object __temp_stmt876 = null;
		{
			T01 __temp_odecl874 = ((T01) (haxe.lang.Runtime.getField(this1, "_0", true)) );
			T12 __temp_odecl875 = ((T12) (haxe.lang.Runtime.getField(this1, "_1", true)) );
			__temp_stmt876 = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"_0", "_1"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{__temp_odecl874, __temp_odecl875}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		}
		
		return ((java.lang.Object) (__temp_stmt876) );
	}
	
	
	public static  <T2, T1, T0, T3, T01, T12, T23> java.lang.Object with(java.lang.Object this1, T3 v)
	{
		java.lang.Object __temp_stmt880 = null;
		{
			T01 __temp_odecl877 = ((T01) (haxe.lang.Runtime.getField(this1, "_0", true)) );
			T12 __temp_odecl878 = ((T12) (haxe.lang.Runtime.getField(this1, "_1", true)) );
			T23 __temp_odecl879 = ((T23) (haxe.lang.Runtime.getField(this1, "_2", true)) );
			__temp_stmt880 = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"_0", "_1", "_2", "_3"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{__temp_odecl877, __temp_odecl878, __temp_odecl879, v}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		}
		
		return ((java.lang.Object) (__temp_stmt880) );
	}
	
	
	public static  <T2, T1, T0, T01, T12, T23> java.lang.String toString(java.lang.Object this1)
	{
		return ( ( ( ( ( ( "Tuple3(" + haxe.root.Std.string(((T01) (haxe.lang.Runtime.getField(this1, "_0", true)) )) ) + "," ) + haxe.root.Std.string(((T12) (haxe.lang.Runtime.getField(this1, "_1", true)) )) ) + "," ) + haxe.root.Std.string(((T23) (haxe.lang.Runtime.getField(this1, "_2", true)) )) ) + ")" );
	}
	
	
}


