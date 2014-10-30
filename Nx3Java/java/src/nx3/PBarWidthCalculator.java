package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PBarWidthCalculator extends haxe.lang.HxObject implements nx3.IBarWidthCalculator
{
	public    PBarWidthCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PBarWidthCalculator()
	{
		nx3.PBarWidthCalculator.__hx_ctor_nx3_PBarWidthCalculator(this);
	}
	
	
	public static   void __hx_ctor_nx3_PBarWidthCalculator(nx3.PBarWidthCalculator __temp_me88)
	{
		{
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PBarWidthCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PBarWidthCalculator();
	}
	
	
	public   double getClefWidth(nx3.EClef clef)
	{
		return nx3.PAttributesRectsCalculator.getClefRect(clef).width;
	}
	
	
	public   double getKeyWidth(nx3.EKey key)
	{
		return nx3.PAttributesRectsCalculator.getKeyRect(key).width;
	}
	
	
	public   double getTimeWidth(nx3.ETime time)
	{
		return nx3.PAttributesRectsCalculator.getTimeRect(time).width;
	}
	
	
	public   double getContentLeftMarginWidth(nx3.PBar bar)
	{
		return 3.0;
	}
	
	
	public   double getContentWidth(nx3.PBar bar)
	{
		return bar.getContentwidth();
	}
	
	
	public   double getBarlineWidth(nx3.EBarline barline)
	{
		return 1.0;
	}
	
	
	public   double getLeftBarlineWidth(nx3.EBarlineLeft barline)
	{
		return 1.0;
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
				
				result = java.lang.Math.max(result, nx3.PAttributesRectsCalculator.getClefRect(clef).width);
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
				
				result = java.lang.Math.max(result, nx3.PAttributesRectsCalculator.getKeyRect(key).width);
			}
			
		}
		
		return result;
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef618 = true;
			switch (field.hashCode())
			{
				case -1108797060:
				{
					if (field.equals("getKeysWidth")) 
					{
						__temp_executeDef618 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getKeysWidth"))) );
					}
					
					break;
				}
				
				
				case -1161676186:
				{
					if (field.equals("getClefWidth")) 
					{
						__temp_executeDef618 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getClefWidth"))) );
					}
					
					break;
				}
				
				
				case -867096493:
				{
					if (field.equals("getClefsWidth")) 
					{
						__temp_executeDef618 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getClefsWidth"))) );
					}
					
					break;
				}
				
				
				case -1723662307:
				{
					if (field.equals("getKeyWidth")) 
					{
						__temp_executeDef618 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getKeyWidth"))) );
					}
					
					break;
				}
				
				
				case 441800860:
				{
					if (field.equals("getLeftBarlineWidth")) 
					{
						__temp_executeDef618 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getLeftBarlineWidth"))) );
					}
					
					break;
				}
				
				
				case 19338307:
				{
					if (field.equals("getTimeWidth")) 
					{
						__temp_executeDef618 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getTimeWidth"))) );
					}
					
					break;
				}
				
				
				case 449602037:
				{
					if (field.equals("getBarlineWidth")) 
					{
						__temp_executeDef618 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBarlineWidth"))) );
					}
					
					break;
				}
				
				
				case -144639122:
				{
					if (field.equals("getContentLeftMarginWidth")) 
					{
						__temp_executeDef618 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getContentLeftMarginWidth"))) );
					}
					
					break;
				}
				
				
				case -1844347069:
				{
					if (field.equals("getContentWidth")) 
					{
						__temp_executeDef618 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getContentWidth"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef618) 
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
			boolean __temp_executeDef619 = true;
			switch (field.hashCode())
			{
				case -1108797060:
				{
					if (field.equals("getKeysWidth")) 
					{
						__temp_executeDef619 = false;
						return this.getKeysWidth(((haxe.root.Array<nx3.EKey>) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -1161676186:
				{
					if (field.equals("getClefWidth")) 
					{
						__temp_executeDef619 = false;
						return this.getClefWidth(((nx3.EClef) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -867096493:
				{
					if (field.equals("getClefsWidth")) 
					{
						__temp_executeDef619 = false;
						return this.getClefsWidth(((haxe.root.Array<nx3.EClef>) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -1723662307:
				{
					if (field.equals("getKeyWidth")) 
					{
						__temp_executeDef619 = false;
						return this.getKeyWidth(((nx3.EKey) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 441800860:
				{
					if (field.equals("getLeftBarlineWidth")) 
					{
						__temp_executeDef619 = false;
						return this.getLeftBarlineWidth(((nx3.EBarlineLeft) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 19338307:
				{
					if (field.equals("getTimeWidth")) 
					{
						__temp_executeDef619 = false;
						return this.getTimeWidth(((nx3.ETime) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 449602037:
				{
					if (field.equals("getBarlineWidth")) 
					{
						__temp_executeDef619 = false;
						return this.getBarlineWidth(((nx3.EBarline) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -144639122:
				{
					if (field.equals("getContentLeftMarginWidth")) 
					{
						__temp_executeDef619 = false;
						return this.getContentLeftMarginWidth(((nx3.PBar) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -1844347069:
				{
					if (field.equals("getContentWidth")) 
					{
						__temp_executeDef619 = false;
						return this.getContentWidth(((nx3.PBar) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef619) 
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


