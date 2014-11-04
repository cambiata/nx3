package cx;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class MapTools extends haxe.lang.HxObject
{
	public    MapTools(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    MapTools()
	{
		cx.MapTools.__hx_ctor_cx_MapTools(this);
	}
	
	
	public static   void __hx_ctor_cx_MapTools(cx.MapTools __temp_me16)
	{
		{
		}
		
	}
	
	
	public static  <T> haxe.root.Array<T> keysToArray(java.lang.Object it)
	{
		haxe.root.Array<T> result = new haxe.root.Array<T>(( (T[]) (new java.lang.Object[] {}) ));
		{
			java.lang.Object __temp_iterator190 = it;
			while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator190, "hasNext", null)))
			{
				T v = ((T) (haxe.lang.Runtime.callField(__temp_iterator190, "next", null)) );
				result.push(v);
			}
			
		}
		
		return result;
	}
	
	
	public static  <T> haxe.root.Array<T> sortarray(haxe.root.Array<T> a)
	{
		a.sort(new cx.MapTools_sortarray_17__Fun<T>());
		return a;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new cx.MapTools(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new cx.MapTools();
	}
	
	
}


