package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PSystem extends haxe.lang.HxObject
{
	public    PSystem(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PSystem()
	{
		nx3.PSystem.__hx_ctor_nx3_PSystem(this);
	}
	
	
	public static   void __hx_ctor_nx3_PSystem(nx3.PSystem __temp_me114)
	{
		__temp_me114.systemBreakWidth = ((double) (0) );
		__temp_me114.systembars = new haxe.root.Array<nx3.PSystemBar>(new nx3.PSystemBar[]{});
		__temp_me114.width = ((double) (0) );
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PSystem(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PSystem();
	}
	
	
	public  nx3.PSystemStatus status;
	
	public   nx3.PSystemStatus getStatus()
	{
		return this.status;
	}
	
	
	public  double width;
	
	public   double getWidth()
	{
		return this.width;
	}
	
	
	public  haxe.root.Array<nx3.PSystemBar> systembars;
	
	public   haxe.root.Array<nx3.PSystemBar> getSystembars()
	{
		return this.systembars;
	}
	
	
	public   java.lang.Object getLastBarAttributes()
	{
		if (( this.systembars.length == 0 )) 
		{
			return null;
		}
		
		nx3.PSystemBar __temp_stmt586 = null;
		{
			haxe.root.Array<nx3.PSystemBar> array = this.systembars;
			__temp_stmt586 = array.__get(( array.length - 1 ));
		}
		
		return __temp_stmt586.actAttributes;
	}
	
	
	public  double systemBreakWidth;
	
	public   double getSystemBreakWidth()
	{
		return this.systemBreakWidth;
	}
	
	
	public  java.lang.Object value;
	
	public   int getValue()
	{
		if (( ! (( this.value == null )) )) 
		{
			return ((int) (haxe.lang.Runtime.toInt(this.value)) );
		}
		
		this.value = 0;
		{
			int _g = 0;
			haxe.root.Array<nx3.PSystemBar> _g1 = this.getSystembars();
			while (( _g < _g1.length ))
			{
				nx3.PSystemBar systembar = _g1.__get(_g);
				 ++ _g;
				{
					nx3.PSystem __temp_dynop199 = this;
					__temp_dynop199.value = ((java.lang.Object) (haxe.lang.Runtime.plus(__temp_dynop199.value, systembar.bar.getValue())) );
				}
				
			}
			
		}
		
		return ((int) (haxe.lang.Runtime.toInt(this.value)) );
	}
	
	
	public   void calculateSystembarXs()
	{
		double x = 0.0;
		{
			int _g = 0;
			haxe.root.Array<nx3.PSystemBar> _g1 = this.getSystembars();
			while (( _g < _g1.length ))
			{
				nx3.PSystemBar systemBar = _g1.__get(_g);
				 ++ _g;
				systemBar.xposition = x;
				x += systemBar.getBarMeasurements().getTotalWidth();
			}
			
		}
		
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef587 = true;
			switch (field.hashCode())
			{
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef587 = false;
						this.value = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 113126854:
				{
					if (field.equals("width")) 
					{
						__temp_executeDef587 = false;
						this.width = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1983886442:
				{
					if (field.equals("systemBreakWidth")) 
					{
						__temp_executeDef587 = false;
						this.systemBreakWidth = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef587) 
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
			boolean __temp_executeDef588 = true;
			switch (field.hashCode())
			{
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef588 = false;
						this.value = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -892481550:
				{
					if (field.equals("status")) 
					{
						__temp_executeDef588 = false;
						this.status = ((nx3.PSystemStatus) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1983886442:
				{
					if (field.equals("systemBreakWidth")) 
					{
						__temp_executeDef588 = false;
						this.systemBreakWidth = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 113126854:
				{
					if (field.equals("width")) 
					{
						__temp_executeDef588 = false;
						this.width = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 643287407:
				{
					if (field.equals("systembars")) 
					{
						__temp_executeDef588 = false;
						this.systembars = ((haxe.root.Array<nx3.PSystemBar>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef588) 
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
			boolean __temp_executeDef589 = true;
			switch (field.hashCode())
			{
				case 1512442457:
				{
					if (field.equals("calculateSystembarXs")) 
					{
						__temp_executeDef589 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("calculateSystembarXs"))) );
					}
					
					break;
				}
				
				
				case -892481550:
				{
					if (field.equals("status")) 
					{
						__temp_executeDef589 = false;
						return this.status;
					}
					
					break;
				}
				
				
				case 1967798203:
				{
					if (field.equals("getValue")) 
					{
						__temp_executeDef589 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getValue"))) );
					}
					
					break;
				}
				
				
				case 803533544:
				{
					if (field.equals("getStatus")) 
					{
						__temp_executeDef589 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getStatus"))) );
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef589 = false;
						return this.value;
					}
					
					break;
				}
				
				
				case 113126854:
				{
					if (field.equals("width")) 
					{
						__temp_executeDef589 = false;
						return this.width;
					}
					
					break;
				}
				
				
				case 832090892:
				{
					if (field.equals("getSystemBreakWidth")) 
					{
						__temp_executeDef589 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getSystemBreakWidth"))) );
					}
					
					break;
				}
				
				
				case 1968952336:
				{
					if (field.equals("getWidth")) 
					{
						__temp_executeDef589 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getWidth"))) );
					}
					
					break;
				}
				
				
				case -1983886442:
				{
					if (field.equals("systemBreakWidth")) 
					{
						__temp_executeDef589 = false;
						return this.systemBreakWidth;
					}
					
					break;
				}
				
				
				case 643287407:
				{
					if (field.equals("systembars")) 
					{
						__temp_executeDef589 = false;
						return this.systembars;
					}
					
					break;
				}
				
				
				case -836645346:
				{
					if (field.equals("getLastBarAttributes")) 
					{
						__temp_executeDef589 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getLastBarAttributes"))) );
					}
					
					break;
				}
				
				
				case 345538917:
				{
					if (field.equals("getSystembars")) 
					{
						__temp_executeDef589 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getSystembars"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef589) 
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
			boolean __temp_executeDef590 = true;
			switch (field.hashCode())
			{
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef590 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.value)) );
					}
					
					break;
				}
				
				
				case 113126854:
				{
					if (field.equals("width")) 
					{
						__temp_executeDef590 = false;
						return this.width;
					}
					
					break;
				}
				
				
				case -1983886442:
				{
					if (field.equals("systemBreakWidth")) 
					{
						__temp_executeDef590 = false;
						return this.systemBreakWidth;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef590) 
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
			boolean __temp_executeDef591 = true;
			switch (field.hashCode())
			{
				case 1512442457:
				{
					if (field.equals("calculateSystembarXs")) 
					{
						__temp_executeDef591 = false;
						this.calculateSystembarXs();
					}
					
					break;
				}
				
				
				case 803533544:
				{
					if (field.equals("getStatus")) 
					{
						__temp_executeDef591 = false;
						return this.getStatus();
					}
					
					break;
				}
				
				
				case 1967798203:
				{
					if (field.equals("getValue")) 
					{
						__temp_executeDef591 = false;
						return this.getValue();
					}
					
					break;
				}
				
				
				case 1968952336:
				{
					if (field.equals("getWidth")) 
					{
						__temp_executeDef591 = false;
						return this.getWidth();
					}
					
					break;
				}
				
				
				case 832090892:
				{
					if (field.equals("getSystemBreakWidth")) 
					{
						__temp_executeDef591 = false;
						return this.getSystemBreakWidth();
					}
					
					break;
				}
				
				
				case 345538917:
				{
					if (field.equals("getSystembars")) 
					{
						__temp_executeDef591 = false;
						return this.getSystembars();
					}
					
					break;
				}
				
				
				case -836645346:
				{
					if (field.equals("getLastBarAttributes")) 
					{
						__temp_executeDef591 = false;
						return this.getLastBarAttributes();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef591) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("value");
		baseArr.push("systemBreakWidth");
		baseArr.push("systembars");
		baseArr.push("width");
		baseArr.push("status");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


