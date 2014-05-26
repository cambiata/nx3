package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PBarStretchCalculator extends haxe.lang.HxObject
{
	public    PBarStretchCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PBarStretchCalculator(nx3.PSystemBar systembar)
	{
		nx3.PBarStretchCalculator.__hx_ctor_nx3_PBarStretchCalculator(this, systembar);
	}
	
	
	public static   void __hx_ctor_nx3_PBarStretchCalculator(nx3.PBarStretchCalculator __temp_me99, nx3.PSystemBar systembar)
	{
		__temp_me99.systembar = systembar;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PBarStretchCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PBarStretchCalculator(((nx3.PSystemBar) (arr.__get(0)) ));
	}
	
	
	public  nx3.PSystemBar systembar;
	
	public   void stretch(double amount)
	{
		this.systembar.getBarMeasurements().setContentWidth(( this.systembar.getBarMeasurements().getContentWidth() + amount ));
		if (( this.systembar.bar.getColumns().length < 2 )) 
		{
			return ;
		}
		
		haxe.root.Array<nx3.PColumn> columns = this.systembar.bar.getColumns();
		nx3.PColumn firstcolumn = columns.__get(0);
		haxe.ds.ObjectMap<nx3.PColumn, java.lang.Object> aDistance = new haxe.ds.ObjectMap<nx3.PColumn, java.lang.Object>();
		haxe.ds.ObjectMap<nx3.PColumn, java.lang.Object> gotShared = new haxe.ds.ObjectMap<nx3.PColumn, java.lang.Object>();
		{
			int _g = 0;
			while (( _g < columns.length ))
			{
				nx3.PColumn column = columns.__get(_g);
				 ++ _g;
				{
					double value = column.getADistance();
					aDistance.set(column, value);
				}
				
				gotShared.set(column, 0);
			}
			
		}
		
		haxe.ds.IntMap<java.lang.Object> seedThreshold = new haxe.ds.IntMap<java.lang.Object>();
		double seedrest = amount;
		int countIterations = 0;
		while (( seedrest > 0 ))
		{
			double seed = .5;
			{
				int _g1 = 0;
				while (( _g1 < columns.length ))
				{
					nx3.PColumn column1 = columns.__get(_g1);
					 ++ _g1;
					double grain = ( column1.getDistanceDelta() * seed );
					int valueDeltaInt = 0;
					{
						double x = ( column1.getDistanceDelta() * 100000 );
						valueDeltaInt = ((int) (x) );
					}
					
					if ( ! (seedThreshold.exists(valueDeltaInt)) ) 
					{
						seedThreshold.set(valueDeltaInt, 0);
					}
					
					{
						double value1 = ((double) (haxe.lang.Runtime.toDouble(haxe.lang.Runtime.plus(seedThreshold.get(((int) (valueDeltaInt) )), grain))) );
						seedThreshold.set(valueDeltaInt, value1);
					}
					
					java.lang.Object threshold = seedThreshold.get(((int) (valueDeltaInt) ));
					double benefit = 0.0;
					if (( column1 == firstcolumn )) 
					{
						benefit = 0.0;
					}
					 else 
					{
						benefit = column1.getADistanceBenefit();
					}
					
					if (( haxe.lang.Runtime.compare(threshold, benefit) > 0 )) 
					{
						{
							double value2 = ((double) (haxe.lang.Runtime.toDouble(haxe.lang.Runtime.plus(gotShared.get(column1), grain))) );
							gotShared.set(column1, value2);
						}
						
						seedrest -= grain;
					}
					
				}
				
			}
			
			countIterations++;
		}
		
		double gain = 0.0;
		{
			int _g2 = 0;
			while (( _g2 < columns.length ))
			{
				nx3.PColumn column2 = columns.__get(_g2);
				 ++ _g2;
				column2.sposition = ( column2.getAPostion() + gain );
				gain = ((double) (haxe.lang.Runtime.toDouble(haxe.lang.Runtime.plus(gain, gotShared.get(column2)))) );
			}
			
		}
		
	}
	
	
	public   void resetStretch()
	{
		int _g = 0;
		haxe.root.Array<nx3.PColumn> _g1 = this.systembar.bar.getColumns();
		while (( _g < _g1.length ))
		{
			nx3.PColumn column = _g1.__get(_g);
			 ++ _g;
			column.sposition = null;
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef628 = true;
			switch (field.hashCode())
			{
				case 1129129860:
				{
					if (field.equals("systembar")) 
					{
						__temp_executeDef628 = false;
						this.systembar = ((nx3.PSystemBar) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef628) 
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
			boolean __temp_executeDef629 = true;
			switch (field.hashCode())
			{
				case 1818860214:
				{
					if (field.equals("resetStretch")) 
					{
						__temp_executeDef629 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("resetStretch"))) );
					}
					
					break;
				}
				
				
				case 1129129860:
				{
					if (field.equals("systembar")) 
					{
						__temp_executeDef629 = false;
						return this.systembar;
					}
					
					break;
				}
				
				
				case -1881872635:
				{
					if (field.equals("stretch")) 
					{
						__temp_executeDef629 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("stretch"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef629) 
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
			boolean __temp_executeDef630 = true;
			switch (field.hashCode())
			{
				case 1818860214:
				{
					if (field.equals("resetStretch")) 
					{
						__temp_executeDef630 = false;
						this.resetStretch();
					}
					
					break;
				}
				
				
				case -1881872635:
				{
					if (field.equals("stretch")) 
					{
						__temp_executeDef630 = false;
						this.stretch(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef630) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("systembar");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


