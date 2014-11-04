package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PSystemBar extends haxe.lang.HxObject
{
	public    PSystemBar(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PSystemBar(nx3.PBar bar, nx3.PBarConfig barConfig, nx3.PSystembarMeasurements barMeasurements, java.lang.Object actAttributes, java.lang.Object caAttributes)
	{
		nx3.PSystemBar.__hx_ctor_nx3_PSystemBar(this, bar, barConfig, barMeasurements, actAttributes, caAttributes);
	}
	
	
	public static   void __hx_ctor_nx3_PSystemBar(nx3.PSystemBar __temp_me115, nx3.PBar bar, nx3.PBarConfig barConfig, nx3.PSystembarMeasurements barMeasurements, java.lang.Object actAttributes, java.lang.Object caAttributes)
	{
		__temp_me115.stretchamount = ((double) (0) );
		__temp_me115.bar = bar;
		__temp_me115.bar.systembar = __temp_me115;
		__temp_me115.barConfig = barConfig;
		__temp_me115.barMeasurements = barMeasurements;
		__temp_me115.actAttributes = actAttributes;
		__temp_me115.caAttributes = caAttributes;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PSystemBar(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PSystemBar(((nx3.PBar) (arr.__get(0)) ), ((nx3.PBarConfig) (arr.__get(1)) ), ((nx3.PSystembarMeasurements) (arr.__get(2)) ), ((java.lang.Object) (arr.__get(3)) ), ((java.lang.Object) (arr.__get(4)) ));
	}
	
	
	public  nx3.PBar bar;
	
	public  nx3.PBarConfig barConfig;
	
	public  java.lang.Object actAttributes;
	
	public  java.lang.Object caAttributes;
	
	public  double stretchamount;
	
	public   void setBarStretch(double amount)
	{
		if (( amount == this.stretchamount )) 
		{
			return ;
		}
		
		nx3.PBarStretchCalculator calculator = new nx3.PBarStretchCalculator(((nx3.PSystemBar) (this) ));
		if (( amount == 0 )) 
		{
			calculator.resetStretch();
		}
		 else 
		{
			calculator.stretch(amount);
		}
		
	}
	
	
	public  nx3.PSystembarMeasurements barMeasurements;
	
	public   nx3.PSystembarMeasurements getBarMeasurements()
	{
		if (( this.barMeasurements != null )) 
		{
			return this.barMeasurements;
		}
		
		this.barMeasurements = new nx3.PSystembarMeasurements(((nx3.PBar) (this.bar) )).init(this.actAttributes, this.barConfig, this.caAttributes);
		return this.barMeasurements;
	}
	
	
	public  double xposition;
	
	public   double getXPosition()
	{
		return this.xposition;
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef592 = true;
			switch (field.hashCode())
			{
				case -1398365791:
				{
					if (field.equals("xposition")) 
					{
						__temp_executeDef592 = false;
						this.xposition = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1610149769:
				{
					if (field.equals("actAttributes")) 
					{
						__temp_executeDef592 = false;
						this.actAttributes = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -729473123:
				{
					if (field.equals("stretchamount")) 
					{
						__temp_executeDef592 = false;
						this.stretchamount = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -212192171:
				{
					if (field.equals("caAttributes")) 
					{
						__temp_executeDef592 = false;
						this.caAttributes = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef592) 
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
			boolean __temp_executeDef593 = true;
			switch (field.hashCode())
			{
				case -1398365791:
				{
					if (field.equals("xposition")) 
					{
						__temp_executeDef593 = false;
						this.xposition = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 97299:
				{
					if (field.equals("bar")) 
					{
						__temp_executeDef593 = false;
						this.bar = ((nx3.PBar) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 630515690:
				{
					if (field.equals("barMeasurements")) 
					{
						__temp_executeDef593 = false;
						this.barMeasurements = ((nx3.PSystembarMeasurements) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 632246581:
				{
					if (field.equals("barConfig")) 
					{
						__temp_executeDef593 = false;
						this.barConfig = ((nx3.PBarConfig) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -729473123:
				{
					if (field.equals("stretchamount")) 
					{
						__temp_executeDef593 = false;
						this.stretchamount = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 1610149769:
				{
					if (field.equals("actAttributes")) 
					{
						__temp_executeDef593 = false;
						this.actAttributes = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -212192171:
				{
					if (field.equals("caAttributes")) 
					{
						__temp_executeDef593 = false;
						this.caAttributes = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef593) 
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
			boolean __temp_executeDef594 = true;
			switch (field.hashCode())
			{
				case -1343326453:
				{
					if (field.equals("getXPosition")) 
					{
						__temp_executeDef594 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getXPosition"))) );
					}
					
					break;
				}
				
				
				case 97299:
				{
					if (field.equals("bar")) 
					{
						__temp_executeDef594 = false;
						return this.bar;
					}
					
					break;
				}
				
				
				case -1398365791:
				{
					if (field.equals("xposition")) 
					{
						__temp_executeDef594 = false;
						return this.xposition;
					}
					
					break;
				}
				
				
				case 632246581:
				{
					if (field.equals("barConfig")) 
					{
						__temp_executeDef594 = false;
						return this.barConfig;
					}
					
					break;
				}
				
				
				case 167164340:
				{
					if (field.equals("getBarMeasurements")) 
					{
						__temp_executeDef594 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBarMeasurements"))) );
					}
					
					break;
				}
				
				
				case 1610149769:
				{
					if (field.equals("actAttributes")) 
					{
						__temp_executeDef594 = false;
						return this.actAttributes;
					}
					
					break;
				}
				
				
				case 630515690:
				{
					if (field.equals("barMeasurements")) 
					{
						__temp_executeDef594 = false;
						return this.barMeasurements;
					}
					
					break;
				}
				
				
				case -212192171:
				{
					if (field.equals("caAttributes")) 
					{
						__temp_executeDef594 = false;
						return this.caAttributes;
					}
					
					break;
				}
				
				
				case 63167860:
				{
					if (field.equals("setBarStretch")) 
					{
						__temp_executeDef594 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("setBarStretch"))) );
					}
					
					break;
				}
				
				
				case -729473123:
				{
					if (field.equals("stretchamount")) 
					{
						__temp_executeDef594 = false;
						return this.stretchamount;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef594) 
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
			boolean __temp_executeDef595 = true;
			switch (field.hashCode())
			{
				case -1398365791:
				{
					if (field.equals("xposition")) 
					{
						__temp_executeDef595 = false;
						return this.xposition;
					}
					
					break;
				}
				
				
				case 1610149769:
				{
					if (field.equals("actAttributes")) 
					{
						__temp_executeDef595 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.actAttributes)) );
					}
					
					break;
				}
				
				
				case -729473123:
				{
					if (field.equals("stretchamount")) 
					{
						__temp_executeDef595 = false;
						return this.stretchamount;
					}
					
					break;
				}
				
				
				case -212192171:
				{
					if (field.equals("caAttributes")) 
					{
						__temp_executeDef595 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.caAttributes)) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef595) 
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
			boolean __temp_executeDef596 = true;
			switch (field.hashCode())
			{
				case -1343326453:
				{
					if (field.equals("getXPosition")) 
					{
						__temp_executeDef596 = false;
						return this.getXPosition();
					}
					
					break;
				}
				
				
				case 63167860:
				{
					if (field.equals("setBarStretch")) 
					{
						__temp_executeDef596 = false;
						this.setBarStretch(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
				case 167164340:
				{
					if (field.equals("getBarMeasurements")) 
					{
						__temp_executeDef596 = false;
						return this.getBarMeasurements();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef596) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("xposition");
		baseArr.push("barMeasurements");
		baseArr.push("stretchamount");
		baseArr.push("caAttributes");
		baseArr.push("actAttributes");
		baseArr.push("barConfig");
		baseArr.push("bar");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


