package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NScore extends haxe.lang.HxObject
{
	public    NScore(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    NScore(haxe.root.Array<nx3.NBar> nbars)
	{
		nx3.NScore.__hx_ctor_nx3_NScore(this, nbars);
	}
	
	
	public static   void __hx_ctor_nx3_NScore(nx3.NScore __temp_me65, haxe.root.Array<nx3.NBar> nbars)
	{
		__temp_me65.nbars = nbars;
		{
			int _g = 0;
			while (( _g < nbars.length ))
			{
				nx3.NBar bar = nbars.__get(_g);
				 ++ _g;
				bar.nscore = __temp_me65;
			}
			
		}
		
		__temp_me65.configuration = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		haxe.lang.Runtime.setField_f(__temp_me65.configuration, "test", ((double) (123) ));
		haxe.lang.Runtime.setField_f(__temp_me65.configuration, "rtempo", ((double) (80) ));
		haxe.lang.Runtime.setField_f(__temp_me65.configuration, "rlength", ((double) (3) ));
		haxe.lang.Runtime.setField_f(__temp_me65.configuration, "rcountin", ((double) (2) ));
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.NScore(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.NScore(((haxe.root.Array<nx3.NBar>) (arr.__get(0)) ));
	}
	
	
	public  haxe.root.Array<nx3.NBar> nbars;
	
	public  java.lang.Object configuration;
	
	public   nx3.NBar getNBar(int idx)
	{
		if (( ( idx < 0 ) || ( idx > this.nbars.length ) )) 
		{
			return null;
		}
		 else 
		{
			return this.nbars.__get(idx);
		}
		
	}
	
	
	public   java.lang.Object iterator()
	{
		return ((java.lang.Object) (new _Array.ArrayIterator<nx3.NBar>(((haxe.root.Array<nx3.NBar>) (this.nbars) ))) );
	}
	
	
	public  int length;
	
	public   int get_length()
	{
		return this.nbars.length;
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef425 = true;
			switch (field.hashCode())
			{
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef425 = false;
						this.length = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1932752118:
				{
					if (field.equals("configuration")) 
					{
						__temp_executeDef425 = false;
						this.configuration = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef425) 
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
			boolean __temp_executeDef426 = true;
			switch (field.hashCode())
			{
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef426 = false;
						this.length = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 104603694:
				{
					if (field.equals("nbars")) 
					{
						__temp_executeDef426 = false;
						this.nbars = ((haxe.root.Array<nx3.NBar>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1932752118:
				{
					if (field.equals("configuration")) 
					{
						__temp_executeDef426 = false;
						this.configuration = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef426) 
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
			boolean __temp_executeDef427 = true;
			switch (field.hashCode())
			{
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef427 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_length"))) );
					}
					
					break;
				}
				
				
				case 104603694:
				{
					if (field.equals("nbars")) 
					{
						__temp_executeDef427 = false;
						return this.nbars;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef427 = false;
						if (handleProperties) 
						{
							return this.get_length();
						}
						 else 
						{
							return this.length;
						}
						
					}
					
					break;
				}
				
				
				case 1932752118:
				{
					if (field.equals("configuration")) 
					{
						__temp_executeDef427 = false;
						return this.configuration;
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef427 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("iterator"))) );
					}
					
					break;
				}
				
				
				case -75338437:
				{
					if (field.equals("getNBar")) 
					{
						__temp_executeDef427 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNBar"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef427) 
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
			boolean __temp_executeDef428 = true;
			switch (field.hashCode())
			{
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef428 = false;
						if (handleProperties) 
						{
							return ((double) (this.get_length()) );
						}
						 else 
						{
							return ((double) (this.length) );
						}
						
					}
					
					break;
				}
				
				
				case 1932752118:
				{
					if (field.equals("configuration")) 
					{
						__temp_executeDef428 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.configuration)) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef428) 
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
			boolean __temp_executeDef429 = true;
			switch (field.hashCode())
			{
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef429 = false;
						return this.get_length();
					}
					
					break;
				}
				
				
				case -75338437:
				{
					if (field.equals("getNBar")) 
					{
						__temp_executeDef429 = false;
						return this.getNBar(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef429 = false;
						return this.iterator();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef429) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("length");
		baseArr.push("configuration");
		baseArr.push("nbars");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


