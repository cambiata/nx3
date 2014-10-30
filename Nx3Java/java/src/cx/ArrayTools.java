package cx;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class ArrayTools extends haxe.lang.HxObject
{
	public    ArrayTools(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    ArrayTools()
	{
		cx.ArrayTools.__hx_ctor_cx_ArrayTools(this);
	}
	
	
	public static   void __hx_ctor_cx_ArrayTools(cx.ArrayTools __temp_me20)
	{
		{
		}
		
	}
	
	
	public static  <T> T next(haxe.root.Array<T> a, T item)
	{
		int idx = a.indexOf(item, null);
		if (( idx == -1 )) 
		{
			return null;
		}
		
		if (( idx == ( a.length - 1 ) )) 
		{
			return null;
		}
		
		return a.__get(( idx + 1 ));
	}
	
	
	public static  <T> T prev(haxe.root.Array<T> a, T item)
	{
		int idx = a.indexOf(item, null);
		if (( idx <= 0 )) 
		{
			return null;
		}
		
		return a.__get(( idx - 1 ));
	}
	
	
	public static  <T> boolean has(haxe.root.Array<T> a, T item)
	{
		return ( a.indexOf(item, null) != -1 );
	}
	
	
	public static  <T> T indexOrNull(haxe.root.Array<T> a, int idx)
	{
		if (( ( idx < 0 ) || ( idx > ( a.length - 1 ) ) )) 
		{
			return null;
		}
		 else 
		{
			return a.__get(idx);
		}
		
	}
	
	
	public static  <T> T indexOrValue(haxe.root.Array<T> a, int idx, T fallbackValue)
	{
		if (( ! (( (( (( ( idx < 0 ) || ( idx > ( a.length - 1 ) ) )) ? (null) : (a.__get(idx)) )) == null )) )) 
		{
			return a.__get(idx);
		}
		 else 
		{
			return fallbackValue;
		}
		
	}
	
	
	public static  <T> boolean equals(haxe.root.Array<T> a, haxe.root.Array<T> b)
	{
		return haxe.lang.Runtime.valEq(a.toString(), b.toString());
	}
	
	
	public static  <T> haxe.root.Array<T> unique(haxe.root.Array<T> arr)
	{
		haxe.root.Array<T> result = new haxe.root.Array<T>();
		{
			int _g = 0;
			while (( _g < arr.length ))
			{
				T item = arr.__get(_g);
				 ++ _g;
				if ( ! (haxe.root.Lambda.has(result, item)) ) 
				{
					result.push(item);
				}
				
			}
			
		}
		
		result.sort(new cx.ArrayTools_unique_59__Fun<T>());
		return result;
	}
	
	
	public static  <T> haxe.root.Array<T> fromIterator(java.lang.Object it)
	{
		haxe.root.Array<T> result = new haxe.root.Array<T>(( (T[]) (new java.lang.Object[] {}) ));
		{
			java.lang.Object __temp_iterator209 = it;
			while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator209, "hasNext", null)))
			{
				T v = ((T) (haxe.lang.Runtime.callField(__temp_iterator209, "next", null)) );
				result.push(v);
			}
			
		}
		
		return result;
	}
	
	
	public static  <T> haxe.root.Array<T> fromIterables(java.lang.Object it)
	{
		return ((haxe.root.Array<T>) (((haxe.root.Array) (cx.ArrayTools.fromIterator(((java.lang.Object) (haxe.lang.Runtime.callField(it, "iterator", null)) ))) )) );
	}
	
	
	public static  <T> haxe.root.Array<T> fromHashKeys(java.lang.Object it)
	{
		return ((haxe.root.Array<T>) (((haxe.root.Array) (cx.ArrayTools.fromIterator(it)) )) );
	}
	
	
	public static  <T> boolean allNull(haxe.root.Array<T> it)
	{
		{
			int _g = 0;
			while (( _g < it.length ))
			{
				T v = it.__get(_g);
				 ++ _g;
				if (( ! (( v == null )) )) 
				{
					return false;
				}
				
			}
			
		}
		
		return true;
	}
	
	
	public static   boolean doOverlap(haxe.root.Array array1, haxe.root.Array array2)
	{
		{
			int _g = 0;
			while (( _g < array1.length ))
			{
				java.lang.Object item = array1.__get(_g);
				 ++ _g;
				if (haxe.root.Lambda.has(array2, item)) 
				{
					return true;
				}
				
			}
			
		}
		
		return false;
	}
	
	
	public static  <T> haxe.root.Array<T> overlap(haxe.root.Array<T> array1, haxe.root.Array<T> array2)
	{
		haxe.root.Array<haxe.root.Array> array21 = new haxe.root.Array<haxe.root.Array>(new haxe.root.Array[]{((haxe.root.Array) (array2) )});
		return ((haxe.root.Array<T>) (((haxe.root.Array) (haxe.root.Lambda.array(array1.filter(new cx.ArrayTools_overlap_103__Fun<T>(((haxe.root.Array<haxe.root.Array>) (array21) ))))) )) );
	}
	
	
	public static  <T> haxe.root.Array<T> diff(haxe.root.Array<T> array1, haxe.root.Array<T> array2)
	{
		haxe.root.Array<T> result = new haxe.root.Array<T>();
		{
			int _g = 0;
			while (( _g < array1.length ))
			{
				T item = array1.__get(_g);
				 ++ _g;
				if ( ! (haxe.root.Lambda.has(array2, item)) ) 
				{
					result.push(item);
				}
				
			}
			
		}
		
		{
			int _g1 = 0;
			while (( _g1 < array2.length ))
			{
				T item1 = array2.__get(_g1);
				 ++ _g1;
				if ( ! (haxe.root.Lambda.has(array1, item1)) ) 
				{
					result.push(item1);
				}
				
			}
			
		}
		
		return result;
	}
	
	
	public static  <T> T first(haxe.root.Array<T> array)
	{
		return array.__get(0);
	}
	
	
	public static  <T> boolean isFirst(haxe.root.Array<T> array, T item)
	{
		return haxe.lang.Runtime.eq(array.__get(0), item);
	}
	
	
	public static  <T> T last(haxe.root.Array<T> array)
	{
		return array.__get(( array.length - 1 ));
	}
	
	
	public static  <T> boolean isLast(haxe.root.Array<T> array, T item)
	{
		return haxe.lang.Runtime.eq(array.__get(( array.length - 1 )), item);
	}
	
	
	public static  <T> int index(haxe.root.Array<T> array, T item)
	{
		return haxe.root.Lambda.indexOf(array, item);
	}
	
	
	public static  <T> T second(haxe.root.Array<T> array)
	{
		return array.__get(1);
	}
	
	
	public static  <T> T third(haxe.root.Array<T> array)
	{
		return array.__get(2);
	}
	
	
	public static  <T> T fourth(haxe.root.Array<T> array)
	{
		return array.__get(3);
	}
	
	
	public static  <T> T fifth(haxe.root.Array<T> array)
	{
		return array.__get(4);
	}
	
	
	public static  <T> T sixth(haxe.root.Array<T> array)
	{
		return array.__get(5);
	}
	
	
	public static  <T> T seventh(haxe.root.Array<T> array)
	{
		return array.__get(6);
	}
	
	
	public static  <T> T eighth(haxe.root.Array<T> array)
	{
		return array.__get(7);
	}
	
	
	public static  <T> T nineth(haxe.root.Array<T> array)
	{
		return array.__get(8);
	}
	
	
	public static  <T> haxe.root.Array<T> shuffle(haxe.root.Array<T> a)
	{
		haxe.root.Array<java.lang.Object> t = cx.ArrayTools.range(a.length, null, null);
		haxe.root.Array<T> arr = new haxe.root.Array<T>(( (T[]) (new java.lang.Object[] {}) ));
		while (( t.length > 0 ))
		{
			int pos = haxe.root.Std.random(t.length);
			int index = ((int) (haxe.lang.Runtime.toInt(t.__get(pos))) );
			t.splice(pos, 1);
			arr.push(a.__get(index));
		}
		
		return arr;
	}
	
	
	public static  <T> int countItem(haxe.root.Array<T> a, T item)
	{
		int cnt = 0;
		{
			int _g = 0;
			while (( _g < a.length ))
			{
				T ai = a.__get(_g);
				 ++ _g;
				if (haxe.lang.Runtime.eq(ai, item)) 
				{
					cnt++;
				}
				
			}
			
		}
		
		return cnt;
	}
	
	
	public static  <T> haxe.root.Array<T> sorta(haxe.root.Array<T> a)
	{
		a.sort(new cx.ArrayTools_sorta_203__Fun<T>());
		return a;
	}
	
	
	public static   haxe.root.Array<java.lang.Object> range(int start, java.lang.Object stop, java.lang.Object step)
	{
		int __temp_step19 = ( (( step == null )) ? (((int) (1) )) : (((int) (haxe.lang.Runtime.toInt(step)) )) );
		if (( null == stop )) 
		{
			stop = start;
			start = 0;
		}
		
		if (( ( ((double) ((( ((int) (haxe.lang.Runtime.toInt(stop)) ) - ((int) (start) ) ))) ) / __temp_step19 ) == java.lang.Double.POSITIVE_INFINITY )) 
		{
			throw haxe.lang.HaxeException.wrap("infinite range");
		}
		
		haxe.root.Array<java.lang.Object> range = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		int i = -1;
		int j = 0;
		if (( __temp_step19 < 0 )) 
		{
			while (( haxe.lang.Runtime.compare((j = ( start + ( __temp_step19 *  ++ i ) )), stop) > 0 ))
			{
				range.push(j);
			}
			
		}
		 else 
		{
			while (( haxe.lang.Runtime.compare((j = ( start + ( __temp_step19 *  ++ i ) )), stop) < 0 ))
			{
				range.push(j);
			}
			
		}
		
		return range;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new cx.ArrayTools(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new cx.ArrayTools();
	}
	
	
}


