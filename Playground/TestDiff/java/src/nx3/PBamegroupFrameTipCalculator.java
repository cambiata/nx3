package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PBamegroupFrameTipCalculator extends haxe.lang.HxObject
{
	public    PBamegroupFrameTipCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PBamegroupFrameTipCalculator(haxe.root.Array<java.lang.Object> notelevels, nx3.EDirectionUD direction)
	{
		nx3.PBamegroupFrameTipCalculator.__hx_ctor_nx3_PBamegroupFrameTipCalculator(this, notelevels, direction);
	}
	
	
	public static   void __hx_ctor_nx3_PBamegroupFrameTipCalculator(nx3.PBamegroupFrameTipCalculator __temp_me68, haxe.root.Array<java.lang.Object> notelevels, nx3.EDirectionUD direction)
	{
		if (( direction == nx3.EDirectionUD.Down )) 
		{
			haxe.root.Array<java.lang.Object> invertedLevels = new haxe.root.Array<java.lang.Object>();
			{
				int _g = 0;
				while (( _g < notelevels.length ))
				{
					int level = ((int) (haxe.lang.Runtime.toInt(notelevels.__get(_g))) );
					 ++ _g;
					invertedLevels.push(( level * -1 ));
				}
				
			}
			
			notelevels = invertedLevels;
		}
		
		__temp_me68.notelevels = notelevels;
		__temp_me68.direction = direction;
	}
	
	
	public static   double floatMin(haxe.root.Array<java.lang.Object> levels)
	{
		double result = ((double) (haxe.lang.Runtime.toDouble(levels.__get(0))) );
		if (( levels.length == 1 )) 
		{
			return result;
		}
		
		{
			int _g = 0;
			while (( _g < levels.length ))
			{
				double level = ((double) (haxe.lang.Runtime.toDouble(levels.__get(_g))) );
				 ++ _g;
				result = java.lang.Math.min(result, level);
			}
			
		}
		
		return result;
	}
	
	
	public static   int intMin(haxe.root.Array<java.lang.Object> levels)
	{
		int result = ((int) (haxe.lang.Runtime.toInt(levels.__get(0))) );
		if (( levels.length == 1 )) 
		{
			return result;
		}
		
		{
			int _g = 0;
			while (( _g < levels.length ))
			{
				int level = ((int) (haxe.lang.Runtime.toInt(levels.__get(_g))) );
				 ++ _g;
				{
					double x = java.lang.Math.min(((double) (result) ), ((double) (level) ));
					result = ((int) (x) );
				}
				
			}
			
		}
		
		return result;
	}
	
	
	public static   int intMax(haxe.root.Array<java.lang.Object> levels)
	{
		int result = ((int) (haxe.lang.Runtime.toInt(levels.__get(0))) );
		if (( levels.length == 1 )) 
		{
			return result;
		}
		
		{
			int _g = 0;
			while (( _g < levels.length ))
			{
				int level = ((int) (haxe.lang.Runtime.toInt(levels.__get(_g))) );
				 ++ _g;
				{
					double x = java.lang.Math.max(((double) (result) ), ((double) (level) ));
					result = ((int) (x) );
				}
				
			}
			
		}
		
		return result;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PBamegroupFrameTipCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PBamegroupFrameTipCalculator(((haxe.root.Array<java.lang.Object>) (arr.__get(0)) ), ((nx3.EDirectionUD) (arr.__get(1)) ));
	}
	
	
	public  haxe.root.Array<java.lang.Object> notelevels;
	
	public  nx3.EDirectionUD direction;
	
	public   java.lang.Object getTips()
	{
		int stemLength = 7;
		int min = 0;
		{
			haxe.root.Array<java.lang.Object> levels = this.notelevels;
			int result = ((int) (haxe.lang.Runtime.toInt(levels.__get(0))) );
			if (( levels.length == 1 )) 
			{
				min = result;
			}
			 else 
			{
				{
					int _g = 0;
					while (( _g < levels.length ))
					{
						int level = ((int) (haxe.lang.Runtime.toInt(levels.__get(_g))) );
						 ++ _g;
						{
							double x = java.lang.Math.min(((double) (result) ), ((double) (level) ));
							result = ((int) (x) );
						}
						
					}
					
				}
				
				min = result;
			}
			
		}
		
		double leftTip = ((double) (((int) (haxe.lang.Runtime.toInt(this.notelevels.__get(0))) )) );
		double rightTip = 0.0;
		{
			haxe.root.Array<java.lang.Object> array = this.notelevels;
			rightTip = ((double) (((int) (haxe.lang.Runtime.toInt(array.__get(( array.length - 1 )))) )) );
		}
		
		if (( this.notelevels.length == 2 )) 
		{
			int slopevalue = 1;
			{
				haxe.root.Array<java.lang.Object> levels1 = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (leftTip) ), ((java.lang.Object) (( rightTip + slopevalue )) ), ((java.lang.Object) (stemLength) )});
				double result1 = ((double) (haxe.lang.Runtime.toDouble(levels1.__get(0))) );
				if (( levels1.length == 1 )) 
				{
					leftTip = result1;
				}
				 else 
				{
					{
						int _g1 = 0;
						while (( _g1 < levels1.length ))
						{
							double level1 = ((double) (haxe.lang.Runtime.toDouble(levels1.__get(_g1))) );
							 ++ _g1;
							result1 = java.lang.Math.min(result1, level1);
						}
						
					}
					
					leftTip = result1;
				}
				
			}
			
			{
				haxe.root.Array<java.lang.Object> levels2 = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (rightTip) ), ((java.lang.Object) (( leftTip + slopevalue )) ), ((java.lang.Object) (stemLength) )});
				double result2 = ((double) (haxe.lang.Runtime.toDouble(levels2.__get(0))) );
				if (( levels2.length == 1 )) 
				{
					rightTip = result2;
				}
				 else 
				{
					{
						int _g2 = 0;
						while (( _g2 < levels2.length ))
						{
							double level2 = ((double) (haxe.lang.Runtime.toDouble(levels2.__get(_g2))) );
							 ++ _g2;
							result2 = java.lang.Math.min(result2, level2);
						}
						
					}
					
					rightTip = result2;
				}
				
			}
			
		}
		 else 
		{
			double slopevalue1 = ( this.notelevels.length * .25 );
			haxe.root.Array<java.lang.Object> inlevels = ((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (this.notelevels.copy()) )) );
			inlevels.shift();
			inlevels.pop();
			int inmin = 0;
			{
				int result3 = ((int) (haxe.lang.Runtime.toInt(inlevels.__get(0))) );
				if (( inlevels.length == 1 )) 
				{
					inmin = result3;
				}
				 else 
				{
					{
						int _g3 = 0;
						while (( _g3 < inlevels.length ))
						{
							int level3 = ((int) (haxe.lang.Runtime.toInt(inlevels.__get(_g3))) );
							 ++ _g3;
							{
								double x1 = java.lang.Math.min(((double) (result3) ), ((double) (level3) ));
								result3 = ((int) (x1) );
							}
							
						}
						
					}
					
					inmin = result3;
				}
				
			}
			
			if (( ( leftTip >= inmin ) && ( rightTip >= inmin ) )) 
			{
				leftTip = ((double) (inmin) );
				rightTip = ((double) (inmin) );
			}
			 else 
			{
				if (( ( rightTip < leftTip ) && ( min < leftTip ) )) 
				{
					haxe.root.Array<java.lang.Object> levels3 = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (( min + slopevalue1 )) ), ((java.lang.Object) (leftTip) )});
					double result4 = ((double) (haxe.lang.Runtime.toDouble(levels3.__get(0))) );
					if (( levels3.length == 1 )) 
					{
						leftTip = result4;
					}
					 else 
					{
						{
							int _g4 = 0;
							while (( _g4 < levels3.length ))
							{
								double level4 = ((double) (haxe.lang.Runtime.toDouble(levels3.__get(_g4))) );
								 ++ _g4;
								result4 = java.lang.Math.min(result4, level4);
							}
							
						}
						
						leftTip = result4;
					}
					
				}
				 else 
				{
					if (( ( leftTip < rightTip ) && ( min < rightTip ) )) 
					{
						haxe.root.Array<java.lang.Object> levels4 = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (( min + slopevalue1 )) ), ((java.lang.Object) (rightTip) )});
						double result5 = ((double) (haxe.lang.Runtime.toDouble(levels4.__get(0))) );
						if (( levels4.length == 1 )) 
						{
							rightTip = result5;
						}
						 else 
						{
							{
								int _g5 = 0;
								while (( _g5 < levels4.length ))
								{
									double level5 = ((double) (haxe.lang.Runtime.toDouble(levels4.__get(_g5))) );
									 ++ _g5;
									result5 = java.lang.Math.min(result5, level5);
								}
								
							}
							
							rightTip = result5;
						}
						
					}
					
				}
				
			}
			
		}
		
		{
			double x2 = java.lang.Math.min(((double) (stemLength) ), leftTip);
			leftTip = ((double) (((int) (x2) )) );
		}
		
		{
			double x3 = java.lang.Math.min(((double) (stemLength) ), rightTip);
			rightTip = ((double) (((int) (x3) )) );
		}
		
		if (( this.direction == nx3.EDirectionUD.Down )) 
		{
			return new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"leftTip", "rightTip"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) ( - (leftTip) ) ), ((java.lang.Object) ( - (rightTip) ) )}));
		}
		
		return new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"leftTip", "rightTip"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (leftTip) ), ((java.lang.Object) (rightTip) )}));
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef435 = true;
			switch (field.hashCode())
			{
				case -962590849:
				{
					if (field.equals("direction")) 
					{
						__temp_executeDef435 = false;
						this.direction = ((nx3.EDirectionUD) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -265664543:
				{
					if (field.equals("notelevels")) 
					{
						__temp_executeDef435 = false;
						this.notelevels = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef435) 
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
			boolean __temp_executeDef436 = true;
			switch (field.hashCode())
			{
				case -75121746:
				{
					if (field.equals("getTips")) 
					{
						__temp_executeDef436 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getTips"))) );
					}
					
					break;
				}
				
				
				case -265664543:
				{
					if (field.equals("notelevels")) 
					{
						__temp_executeDef436 = false;
						return this.notelevels;
					}
					
					break;
				}
				
				
				case -962590849:
				{
					if (field.equals("direction")) 
					{
						__temp_executeDef436 = false;
						return this.direction;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef436) 
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
			boolean __temp_executeDef437 = true;
			switch (field.hashCode())
			{
				case -75121746:
				{
					if (field.equals("getTips")) 
					{
						__temp_executeDef437 = false;
						return this.getTips();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef437) 
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
		baseArr.push("direction");
		baseArr.push("notelevels");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


