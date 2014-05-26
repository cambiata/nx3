package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PSimpleBarWidthCalculator extends haxe.lang.HxObject implements nx3.IBarWidthCalculator
{
	public    PSimpleBarWidthCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PSimpleBarWidthCalculator()
	{
		nx3.PSimpleBarWidthCalculator.__hx_ctor_nx3_PSimpleBarWidthCalculator(this);
	}
	
	
	public static   void __hx_ctor_nx3_PSimpleBarWidthCalculator(nx3.PSimpleBarWidthCalculator __temp_me137)
	{
		{
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PSimpleBarWidthCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PSimpleBarWidthCalculator();
	}
	
	
	public   double getClefWidth(nx3.EClef clef)
	{
		if (( clef == null )) 
		{
			return 0.0;
		}
		
		return 20.0;
	}
	
	
	public   double getKeyWidth(nx3.EKey key)
	{
		if (( key == null )) 
		{
			return 0.0;
		}
		
		switch (haxe.root.Type.enumIndex(key))
		{
			case 5:case 7:
			{
				return 10.0;
			}
			
			
			case 4:case 8:
			{
				return 20.0;
			}
			
			
			case 3:case 9:
			{
				return 30.0;
			}
			
			
			case 2:case 10:
			{
				return 40.0;
			}
			
			
			case 1:case 11:
			{
				return 50.0;
			}
			
			
			case 0:case 12:
			{
				return 60.0;
			}
			
			
			default:
			{
				return 0.0;
			}
			
		}
		
	}
	
	
	public   double getTimeWidth(nx3.ETime time)
	{
		if (( time == null )) 
		{
			return ((double) (0) );
		}
		
		return ((double) (10) );
	}
	
	
	public   double getContentWidth(nx3.PBar bar)
	{
		{
			double x = ( ((double) (bar.getValue()) ) / 100 );
			return ((double) (((int) (x) )) );
		}
		
	}
	
	
	public   double getLeftBarlineWidth(nx3.EBarlineLeft barline)
	{
		return ((double) (0) );
	}
	
	
	public   double getBarlineWidth(nx3.EBarline barline)
	{
		return ((double) (0) );
	}
	
	
	public   double getClefsWidth(haxe.root.Array<nx3.EClef> clefs)
	{
		double result = 0.0;
		{
			int _g = 0;
			while (( _g < clefs.length ))
			{
				nx3.EClef clef = clefs.__get(_g);
				 ++ _g;
				if (( clef == null )) 
				{
					continue;
				}
				
				result = java.lang.Math.max(result, this.getClefWidth(clef));
			}
			
		}
		
		return result;
	}
	
	
	public   double getKeysWidth(haxe.root.Array<nx3.EKey> keys)
	{
		double result = 0.0;
		{
			int _g = 0;
			while (( _g < keys.length ))
			{
				nx3.EKey key = keys.__get(_g);
				 ++ _g;
				if (( key == null )) 
				{
					continue;
				}
				
				result = java.lang.Math.max(result, this.getKeyWidth(key));
			}
			
		}
		
		return result;
	}
	
	
	public   int getContentLeftMarginWidth(nx3.PBar bar)
	{
		return 0;
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef786 = true;
			switch (field.hashCode())
			{
				case -144639122:
				{
					if (field.equals("getContentLeftMarginWidth")) 
					{
						__temp_executeDef786 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getContentLeftMarginWidth"))) );
					}
					
					break;
				}
				
				
				case -1161676186:
				{
					if (field.equals("getClefWidth")) 
					{
						__temp_executeDef786 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getClefWidth"))) );
					}
					
					break;
				}
				
				
				case -1108797060:
				{
					if (field.equals("getKeysWidth")) 
					{
						__temp_executeDef786 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getKeysWidth"))) );
					}
					
					break;
				}
				
				
				case -1723662307:
				{
					if (field.equals("getKeyWidth")) 
					{
						__temp_executeDef786 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getKeyWidth"))) );
					}
					
					break;
				}
				
				
				case -867096493:
				{
					if (field.equals("getClefsWidth")) 
					{
						__temp_executeDef786 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getClefsWidth"))) );
					}
					
					break;
				}
				
				
				case 19338307:
				{
					if (field.equals("getTimeWidth")) 
					{
						__temp_executeDef786 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getTimeWidth"))) );
					}
					
					break;
				}
				
				
				case 449602037:
				{
					if (field.equals("getBarlineWidth")) 
					{
						__temp_executeDef786 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBarlineWidth"))) );
					}
					
					break;
				}
				
				
				case -1844347069:
				{
					if (field.equals("getContentWidth")) 
					{
						__temp_executeDef786 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getContentWidth"))) );
					}
					
					break;
				}
				
				
				case 441800860:
				{
					if (field.equals("getLeftBarlineWidth")) 
					{
						__temp_executeDef786 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getLeftBarlineWidth"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef786) 
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
			boolean __temp_executeDef787 = true;
			switch (field.hashCode())
			{
				case -144639122:
				{
					if (field.equals("getContentLeftMarginWidth")) 
					{
						__temp_executeDef787 = false;
						return this.getContentLeftMarginWidth(((nx3.PBar) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -1161676186:
				{
					if (field.equals("getClefWidth")) 
					{
						__temp_executeDef787 = false;
						return this.getClefWidth(((nx3.EClef) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -1108797060:
				{
					if (field.equals("getKeysWidth")) 
					{
						__temp_executeDef787 = false;
						return this.getKeysWidth(((haxe.root.Array<nx3.EKey>) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -1723662307:
				{
					if (field.equals("getKeyWidth")) 
					{
						__temp_executeDef787 = false;
						return this.getKeyWidth(((nx3.EKey) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -867096493:
				{
					if (field.equals("getClefsWidth")) 
					{
						__temp_executeDef787 = false;
						return this.getClefsWidth(((haxe.root.Array<nx3.EClef>) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 19338307:
				{
					if (field.equals("getTimeWidth")) 
					{
						__temp_executeDef787 = false;
						return this.getTimeWidth(((nx3.ETime) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 449602037:
				{
					if (field.equals("getBarlineWidth")) 
					{
						__temp_executeDef787 = false;
						return this.getBarlineWidth(((nx3.EBarline) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -1844347069:
				{
					if (field.equals("getContentWidth")) 
					{
						__temp_executeDef787 = false;
						return this.getContentWidth(((nx3.PBar) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 441800860:
				{
					if (field.equals("getLeftBarlineWidth")) 
					{
						__temp_executeDef787 = false;
						return this.getLeftBarlineWidth(((nx3.EBarlineLeft) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef787) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
}


