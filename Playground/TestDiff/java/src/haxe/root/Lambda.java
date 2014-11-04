package haxe.root;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Lambda extends haxe.lang.HxObject
{
	public    Lambda(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    Lambda()
	{
		haxe.root.Lambda.__hx_ctor__Lambda(this);
	}
	
	
	public static   void __hx_ctor__Lambda(haxe.root.Lambda __temp_me5)
	{
		{
		}
		
	}
	
	
	public static  <A> haxe.root.Array<A> array(java.lang.Object it)
	{
		haxe.root.Array<A> a = new haxe.root.Array<A>();
		{
			java.lang.Object __temp_iterator178 = ((java.lang.Object) (haxe.lang.Runtime.callField(it, "iterator", null)) );
			while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator178, "hasNext", null)))
			{
				A i = ((A) (haxe.lang.Runtime.callField(__temp_iterator178, "next", null)) );
				a.push(i);
			}
			
		}
		
		return a;
	}
	
	
	public static  <A, B> haxe.root.List<B> map(java.lang.Object it, haxe.lang.Function f)
	{
		haxe.root.List<B> l = new haxe.root.List<B>();
		{
			java.lang.Object __temp_iterator179 = ((java.lang.Object) (haxe.lang.Runtime.callField(it, "iterator", null)) );
			while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator179, "hasNext", null)))
			{
				A x = ((A) (haxe.lang.Runtime.callField(__temp_iterator179, "next", null)) );
				l.add(((B) (f.__hx_invoke1_o(0.0, x)) ));
			}
			
		}
		
		return l;
	}
	
	
	public static  <A> boolean has(java.lang.Object it, A elt)
	{
		{
			java.lang.Object __temp_iterator180 = ((java.lang.Object) (haxe.lang.Runtime.callField(it, "iterator", null)) );
			while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator180, "hasNext", null)))
			{
				A x = ((A) (haxe.lang.Runtime.callField(__temp_iterator180, "next", null)) );
				if (haxe.lang.Runtime.eq(x, elt)) 
				{
					return true;
				}
				
			}
			
		}
		
		return false;
	}
	
	
	public static  <A> boolean foreach(java.lang.Object it, haxe.lang.Function f)
	{
		{
			java.lang.Object __temp_iterator181 = ((java.lang.Object) (haxe.lang.Runtime.callField(it, "iterator", null)) );
			while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator181, "hasNext", null)))
			{
				A x = ((A) (haxe.lang.Runtime.callField(__temp_iterator181, "next", null)) );
				if ( ! (haxe.lang.Runtime.toBool(f.__hx_invoke1_o(0.0, x))) ) 
				{
					return false;
				}
				
			}
			
		}
		
		return true;
	}
	
	
	public static  <A> haxe.root.List<A> filter(java.lang.Object it, haxe.lang.Function f)
	{
		haxe.root.List<A> l = new haxe.root.List<A>();
		{
			java.lang.Object __temp_iterator182 = ((java.lang.Object) (haxe.lang.Runtime.callField(it, "iterator", null)) );
			while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator182, "hasNext", null)))
			{
				A x = ((A) (haxe.lang.Runtime.callField(__temp_iterator182, "next", null)) );
				if (haxe.lang.Runtime.toBool(f.__hx_invoke1_o(0.0, x))) 
				{
					l.add(x);
				}
				
			}
			
		}
		
		return l;
	}
	
	
	public static  <T> int indexOf(java.lang.Object it, T v)
	{
		int i = 0;
		{
			java.lang.Object __temp_iterator183 = ((java.lang.Object) (haxe.lang.Runtime.callField(it, "iterator", null)) );
			while (haxe.lang.Runtime.toBool(haxe.lang.Runtime.callField(__temp_iterator183, "hasNext", null)))
			{
				T v2 = ((T) (haxe.lang.Runtime.callField(__temp_iterator183, "next", null)) );
				if (haxe.lang.Runtime.eq(v, v2)) 
				{
					return i;
				}
				
				i++;
			}
			
		}
		
		return -1;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new haxe.root.Lambda(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new haxe.root.Lambda();
	}
	
	
}


