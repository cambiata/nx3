package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PColumnsAllotmentCalculator extends haxe.lang.HxObject
{
	static 
	{
		nx3.PColumnsAllotmentCalculator.delta = 0.5;
	}
	public    PColumnsAllotmentCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PColumnsAllotmentCalculator(nx3.PBar bar)
	{
		nx3.PColumnsAllotmentCalculator.__hx_ctor_nx3_PColumnsAllotmentCalculator(this, bar);
	}
	
	
	public static   void __hx_ctor_nx3_PColumnsAllotmentCalculator(nx3.PColumnsAllotmentCalculator __temp_me86, nx3.PBar bar)
	{
		__temp_me86.bar = bar;
		__temp_me86.spacing = bar.nbar.spacing;
		__temp_me86.bar.allottedDistanceSum = 0;
	}
	
	
	public static  double delta;
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PColumnsAllotmentCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PColumnsAllotmentCalculator(((nx3.PBar) (arr.__get(0)) ));
	}
	
	
	public  nx3.PBar bar;
	
	public  double spacing;
	
	public   void calculate(java.lang.Object stretch)
	{
		double __temp_stretch85 = ( (( stretch == null )) ? (((double) (0) )) : (((double) (haxe.lang.Runtime.toDouble(stretch)) )) );
		double aposition = this.bar.getContentXZero();
		{
			int _g = 0;
			haxe.root.Array<nx3.PColumn> _g1 = this.bar.getColumns();
			while (( _g < _g1.length ))
			{
				nx3.PColumn column = _g1.__get(_g);
				 ++ _g;
				double dist = this.getADistance(column.getValue(), column);
				column.allottedDistance = dist;
				{
					nx3.PBar __temp_dynop198 = this.bar;
					__temp_dynop198.allottedDistanceSum = ((java.lang.Object) (haxe.lang.Runtime.plus(__temp_dynop198.allottedDistanceSum, dist)) );
				}
				
				double adistance = java.lang.Math.max(column.getMDistance(), dist);
				double adistanceBenefit = java.lang.Math.max(((double) (0) ), ( column.getMDistance() - dist ));
				column.aposition = aposition;
				column.adistance = adistance;
				column.adistanceBenefit = adistanceBenefit;
				aposition += adistance;
			}
			
		}
		
	}
	
	
	public   double getADistance(int val, nx3.PColumn column)
	{
		{
			nx3.EAllotment _g = this.bar.nbar.allotment;
			switch (haxe.root.Type.enumIndex(_g))
			{
				case 1:
				{
					return this.spacing;
				}
				
				
				case 0:
				{
					return column.getMDistance();
				}
				
				
				case 2:
				{
					return ( (( 0.5 + ( ( ((double) (val) ) / 3024 ) / 2 ) )) * this.spacing );
				}
				
				
				default:
				{
					return ( ( ((double) (val) ) / 3024 ) * this.spacing );
				}
				
			}
			
		}
		
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef484 = true;
			switch (field.hashCode())
			{
				case -2012158909:
				{
					if (field.equals("spacing")) 
					{
						__temp_executeDef484 = false;
						this.spacing = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef484) 
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
			boolean __temp_executeDef485 = true;
			switch (field.hashCode())
			{
				case -2012158909:
				{
					if (field.equals("spacing")) 
					{
						__temp_executeDef485 = false;
						this.spacing = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 97299:
				{
					if (field.equals("bar")) 
					{
						__temp_executeDef485 = false;
						this.bar = ((nx3.PBar) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef485) 
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
			boolean __temp_executeDef486 = true;
			switch (field.hashCode())
			{
				case 1114075328:
				{
					if (field.equals("getADistance")) 
					{
						__temp_executeDef486 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getADistance"))) );
					}
					
					break;
				}
				
				
				case 97299:
				{
					if (field.equals("bar")) 
					{
						__temp_executeDef486 = false;
						return this.bar;
					}
					
					break;
				}
				
				
				case -1283652762:
				{
					if (field.equals("calculate")) 
					{
						__temp_executeDef486 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("calculate"))) );
					}
					
					break;
				}
				
				
				case -2012158909:
				{
					if (field.equals("spacing")) 
					{
						__temp_executeDef486 = false;
						return this.spacing;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef486) 
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
			boolean __temp_executeDef487 = true;
			switch (field.hashCode())
			{
				case -2012158909:
				{
					if (field.equals("spacing")) 
					{
						__temp_executeDef487 = false;
						return this.spacing;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef487) 
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
			boolean __temp_executeDef488 = true;
			switch (field.hashCode())
			{
				case 1114075328:
				{
					if (field.equals("getADistance")) 
					{
						__temp_executeDef488 = false;
						return this.getADistance(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ), ((nx3.PColumn) (dynargs.__get(1)) ));
					}
					
					break;
				}
				
				
				case -1283652762:
				{
					if (field.equals("calculate")) 
					{
						__temp_executeDef488 = false;
						this.calculate(dynargs.__get(0));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef488) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("spacing");
		baseArr.push("bar");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


