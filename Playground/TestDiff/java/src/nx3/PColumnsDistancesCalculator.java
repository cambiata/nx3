package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PColumnsDistancesCalculator extends haxe.lang.HxObject
{
	public    PColumnsDistancesCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PColumnsDistancesCalculator(nx3.PBar bar)
	{
		nx3.PColumnsDistancesCalculator.__hx_ctor_nx3_PColumnsDistancesCalculator(this, bar);
	}
	
	
	public static   void __hx_ctor_nx3_PColumnsDistancesCalculator(nx3.PColumnsDistancesCalculator __temp_me87, nx3.PBar bar)
	{
		__temp_me87.bar = bar;
		__temp_me87.prevLeftComplex = new haxe.ds.IntMap<java.lang.Object>();
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PColumnsDistancesCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PColumnsDistancesCalculator(((nx3.PBar) (arr.__get(0)) ));
	}
	
	
	public  nx3.PBar bar;
	
	public   void calculate()
	{
		nx3.PColumn leftColumn = null;
		double xposition = 0.0;
		{
			int _g1 = 0;
			int _g = this.bar.getColumns().length;
			while (( _g1 < _g ))
			{
				int columnIdx = _g1++;
				nx3.PColumn rightColumn = this.bar.getColumns().__get(columnIdx);
				rightColumn.mdistance = 0;
				if (( columnIdx == 0 )) 
				{
					int complexId = 0;
					{
						int _g2 = 0;
						nx3.PColumn __temp_stmt489 = null;
						{
							haxe.root.Array<nx3.PColumn> array = this.bar.getColumns();
							__temp_stmt489 = array.__get(0);
						}
						
						haxe.root.Array<nx3.PComplex> _g3 = __temp_stmt489.getComplexes();
						while (( _g2 < _g3.length ))
						{
							nx3.PComplex complex = _g3.__get(_g2);
							 ++ _g2;
							this.prevLeftComplex.set(complexId, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"leftComplex"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{complex}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"columnIdx"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (0) )) )})));
							complexId++;
						}
						
					}
					
				}
				 else 
				{
					if (( columnIdx < this.bar.getColumns().length )) 
					{
						haxe.root.Array<nx3.PComplex> leftComplexes = leftColumn.getComplexes();
						haxe.root.Array<nx3.PComplex> rightComplexes = rightColumn.getComplexes();
						double columndistance = 0.0;
						{
							int _g31 = 0;
							int _g21 = leftComplexes.length;
							while (( _g31 < _g21 ))
							{
								int complexIdx = _g31++;
								nx3.PComplex leftComplex = leftComplexes.__get(complexIdx);
								nx3.PComplex rightComplex = rightComplexes.__get(complexIdx);
								double distance = this.getComplexDistances(columnIdx, complexIdx, leftComplex, rightComplex);
								columndistance = java.lang.Math.max(columndistance, distance);
							}
							
						}
						
						{
							double number = columndistance;
							int precision = 6;
							number = ( number * java.lang.Math.pow(((double) (10) ), ((double) (precision) )) );
							number = ( ((int) (java.lang.Math.round(number)) ) / java.lang.Math.pow(((double) (10) ), ((double) (precision) )) );
							columndistance = number;
						}
						
						leftColumn.mdistance = columndistance;
						xposition += columndistance;
						rightColumn.mposition = xposition;
					}
					
				}
				
				if (( columnIdx == ( this.bar.getColumns().length - 1 ) )) 
				{
					nx3.PColumn lastColumn = this.bar.getColumns().__get(columnIdx);
					lastColumn.mdistance = lastColumn.getRightX();
					return ;
				}
				
				leftColumn = rightColumn;
			}
			
		}
		
	}
	
	
	public  haxe.ds.IntMap<java.lang.Object> prevLeftComplex;
	
	public   double getComplexDistances(int columnIdx, int complexIdx, nx3.PComplex leftComplex, nx3.PComplex rightComplex)
	{
		if (( rightComplex == null )) 
		{
			if (( leftComplex != null )) 
			{
				int leftColumnIdx = ( columnIdx - 1 );
				this.prevLeftComplex.set(complexIdx, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"leftComplex"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{leftComplex}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"columnIdx"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (leftColumnIdx) )) )})));
			}
			
			return ((double) (0) );
		}
		
		if (( leftComplex == null )) 
		{
			int currentLeftColumIdx = ( columnIdx - 1 );
			int prevLeftColumnIdx = ((int) (haxe.lang.Runtime.getField_f(this.prevLeftComplex.get(((int) (complexIdx) )), "columnIdx", true)) );
			double currentLeftXPos = this.bar.getColumns().__get(currentLeftColumIdx).getMPosition();
			double prevLeftXPos = this.bar.getColumns().__get(prevLeftColumnIdx).getMPosition();
			double distanceBenefit = ( currentLeftXPos - prevLeftXPos );
			nx3.PComplex currentLeftComplex = ((nx3.PComplex) (haxe.lang.Runtime.getField(this.prevLeftComplex.get(((int) (complexIdx) )), "leftComplex", true)) );
			double distance = new nx3.PComplexDistancesCalculator().getDistance(currentLeftComplex, rightComplex);
			double actualDistance = java.lang.Math.max(((double) (0) ), ( distance - distanceBenefit ));
			return actualDistance;
		}
		
		int leftColumnIdx1 = ( columnIdx - 1 );
		double distance1 = new nx3.PComplexDistancesCalculator().getDistance(leftComplex, rightComplex);
		this.prevLeftComplex.set(complexIdx, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"leftComplex"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{leftComplex}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"columnIdx"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (leftColumnIdx1) )) )})));
		return distance1;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef490 = true;
			switch (field.hashCode())
			{
				case -530493834:
				{
					if (field.equals("prevLeftComplex")) 
					{
						__temp_executeDef490 = false;
						this.prevLeftComplex = ((haxe.ds.IntMap<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 97299:
				{
					if (field.equals("bar")) 
					{
						__temp_executeDef490 = false;
						this.bar = ((nx3.PBar) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef490) 
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
			boolean __temp_executeDef491 = true;
			switch (field.hashCode())
			{
				case 1781619652:
				{
					if (field.equals("getComplexDistances")) 
					{
						__temp_executeDef491 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getComplexDistances"))) );
					}
					
					break;
				}
				
				
				case 97299:
				{
					if (field.equals("bar")) 
					{
						__temp_executeDef491 = false;
						return this.bar;
					}
					
					break;
				}
				
				
				case -530493834:
				{
					if (field.equals("prevLeftComplex")) 
					{
						__temp_executeDef491 = false;
						return this.prevLeftComplex;
					}
					
					break;
				}
				
				
				case -1283652762:
				{
					if (field.equals("calculate")) 
					{
						__temp_executeDef491 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("calculate"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef491) 
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
			boolean __temp_executeDef492 = true;
			switch (field.hashCode())
			{
				case 1781619652:
				{
					if (field.equals("getComplexDistances")) 
					{
						__temp_executeDef492 = false;
						return this.getComplexDistances(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ), ((int) (haxe.lang.Runtime.toInt(dynargs.__get(1))) ), ((nx3.PComplex) (dynargs.__get(2)) ), ((nx3.PComplex) (dynargs.__get(3)) ));
					}
					
					break;
				}
				
				
				case -1283652762:
				{
					if (field.equals("calculate")) 
					{
						__temp_executeDef492 = false;
						this.calculate();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef492) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("prevLeftComplex");
		baseArr.push("bar");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


