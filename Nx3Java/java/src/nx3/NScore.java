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
	
	
	public static   void __hx_ctor_nx3_NScore(nx3.NScore __temp_me86, haxe.root.Array<nx3.NBar> nbars)
	{
		__temp_me86.nbars = nbars;
		{
			int _g = 0;
			while (( _g < nbars.length ))
			{
				nx3.NBar bar = nbars.__get(_g);
				 ++ _g;
				bar.nscore = __temp_me86;
			}
			
		}
		
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
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef610 = true;
			switch (field.hashCode())
			{
				case 104603694:
				{
					if (field.equals("nbars")) 
					{
						__temp_executeDef610 = false;
						this.nbars = ((haxe.root.Array<nx3.NBar>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef610) 
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
			boolean __temp_executeDef611 = true;
			switch (field.hashCode())
			{
				case -75338437:
				{
					if (field.equals("getNBar")) 
					{
						__temp_executeDef611 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNBar"))) );
					}
					
					break;
				}
				
				
				case 104603694:
				{
					if (field.equals("nbars")) 
					{
						__temp_executeDef611 = false;
						return this.nbars;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef611) 
			{
				return super.__hx_getField(field, throwErrors, isCheck, handleProperties);
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
			boolean __temp_executeDef612 = true;
			switch (field.hashCode())
			{
				case -75338437:
				{
					if (field.equals("getNBar")) 
					{
						__temp_executeDef612 = false;
						return this.getNBar(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef612) 
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
		baseArr.push("nbars");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


