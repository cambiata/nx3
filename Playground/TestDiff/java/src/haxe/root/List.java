package haxe.root;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class List<T> extends haxe.lang.HxObject
{
	public    List(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    List()
	{
		haxe.root.List.__hx_ctor__List(this);
	}
	
	
	public static  <T_c> void __hx_ctor__List(haxe.root.List<T_c> __temp_me6)
	{
		__temp_me6.length = 0;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new haxe.root.List<java.lang.Object>(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new haxe.root.List<java.lang.Object>();
	}
	
	
	public  haxe.root.Array h;
	
	public  haxe.root.Array q;
	
	public  int length;
	
	public   void add(T item)
	{
		haxe.root.Array x = new haxe.root.Array(new java.lang.Object[]{item});
		if (( this.h == null )) 
		{
			this.h = x;
		}
		 else 
		{
			this.q.__set(1, x);
		}
		
		this.q = x;
		this.length++;
	}
	
	
	public   void push(T item)
	{
		haxe.root.Array x = new haxe.root.Array(new java.lang.Object[]{item, this.h});
		this.h = x;
		if (( this.q == null )) 
		{
			this.q = x;
		}
		
		this.length++;
	}
	
	
	public   T pop()
	{
		if (( this.h == null )) 
		{
			return null;
		}
		
		T x = ((T) (this.h.__get(0)) );
		this.h = ((haxe.root.Array) (this.h.__get(1)) );
		if (( this.h == null )) 
		{
			this.q = null;
		}
		
		this.length--;
		return x;
	}
	
	
	public   java.lang.Object iterator()
	{
		haxe.root.Array<haxe.root.Array> h = new haxe.root.Array<haxe.root.Array>(new haxe.root.Array[]{this.h});
		java.lang.Object __temp_stmt225 = null;
		{
			haxe.lang.Function __temp_odecl223 = new haxe.root.List_iterator_165__Fun(((haxe.root.Array<haxe.root.Array>) (h) ));
			haxe.lang.Function __temp_odecl224 = new haxe.root.List_iterator_168__Fun(((haxe.root.Array<haxe.root.Array>) (h) ));
			__temp_stmt225 = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"hasNext", "next"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{__temp_odecl223, __temp_odecl224}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		}
		
		return ((java.lang.Object) (__temp_stmt225) );
	}
	
	
	public  <X> haxe.root.List<X> map(haxe.lang.Function f)
	{
		haxe.root.List<X> b = new haxe.root.List<X>();
		haxe.root.Array l = this.h;
		while (( l != null ))
		{
			T v = ((T) (l.__get(0)) );
			l = ((haxe.root.Array) (l.__get(1)) );
			b.add(((X) (f.__hx_invoke1_o(0.0, v)) ));
		}
		
		return b;
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef226 = true;
			switch (field.hashCode())
			{
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef226 = false;
						this.length = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef226) 
			{
				return super.__hx_setField_f(field, value, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef227 = true;
			switch (field.hashCode())
			{
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef227 = false;
						this.length = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 104:
				{
					if (field.equals("h")) 
					{
						__temp_executeDef227 = false;
						this.h = ((haxe.root.Array) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 113:
				{
					if (field.equals("q")) 
					{
						__temp_executeDef227 = false;
						this.q = ((haxe.root.Array) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef227) 
			{
				return super.__hx_setField(field, value, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef228 = true;
			switch (field.hashCode())
			{
				case 107868:
				{
					if (field.equals("map")) 
					{
						__temp_executeDef228 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("map"))) );
					}
					
					break;
				}
				
				
				case 104:
				{
					if (field.equals("h")) 
					{
						__temp_executeDef228 = false;
						return this.h;
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef228 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("iterator"))) );
					}
					
					break;
				}
				
				
				case 113:
				{
					if (field.equals("q")) 
					{
						__temp_executeDef228 = false;
						return this.q;
					}
					
					break;
				}
				
				
				case 111185:
				{
					if (field.equals("pop")) 
					{
						__temp_executeDef228 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("pop"))) );
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef228 = false;
						return this.length;
					}
					
					break;
				}
				
				
				case 3452698:
				{
					if (field.equals("push")) 
					{
						__temp_executeDef228 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("push"))) );
					}
					
					break;
				}
				
				
				case 96417:
				{
					if (field.equals("add")) 
					{
						__temp_executeDef228 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("add"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef228) 
			{
				return super.__hx_getField(field, throwErrors, isCheck, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   double __hx_getField_f(java.lang.String field, boolean throwErrors, boolean handleProperties)
	{
		{
			boolean __temp_executeDef229 = true;
			switch (field.hashCode())
			{
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef229 = false;
						return ((double) (this.length) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef229) 
			{
				return super.__hx_getField_f(field, throwErrors, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_invokeField(java.lang.String field, haxe.root.Array dynargs)
	{
		{
			boolean __temp_executeDef230 = true;
			switch (field.hashCode())
			{
				case 107868:
				{
					if (field.equals("map")) 
					{
						__temp_executeDef230 = false;
						return this.map(((haxe.lang.Function) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 96417:
				{
					if (field.equals("add")) 
					{
						__temp_executeDef230 = false;
						this.add(((T) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef230 = false;
						return this.iterator();
					}
					
					break;
				}
				
				
				case 3452698:
				{
					if (field.equals("push")) 
					{
						__temp_executeDef230 = false;
						this.push(((T) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 111185:
				{
					if (field.equals("pop")) 
					{
						__temp_executeDef230 = false;
						return this.pop();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef230) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("length");
		baseArr.push("q");
		baseArr.push("h");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


