package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PBarConfig extends haxe.lang.HxObject
{
	public    PBarConfig(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PBarConfig(java.lang.Object showClef, java.lang.Object showKey, java.lang.Object showTime, java.lang.Object showCautClef, java.lang.Object showCautKey, java.lang.Object showCautTime)
	{
		nx3.PBarConfig.__hx_ctor_nx3_PBarConfig(this, showClef, showKey, showTime, showCautClef, showCautKey, showCautTime);
	}
	
	
	public static   void __hx_ctor_nx3_PBarConfig(nx3.PBarConfig __temp_me98, java.lang.Object showClef, java.lang.Object showKey, java.lang.Object showTime, java.lang.Object showCautClef, java.lang.Object showCautKey, java.lang.Object showCautTime)
	{
		boolean __temp_showCautTime97 = ( (( showCautTime == null )) ? (haxe.lang.Runtime.toBool(false)) : (haxe.lang.Runtime.toBool(showCautTime)) );
		boolean __temp_showCautKey96 = ( (( showCautKey == null )) ? (haxe.lang.Runtime.toBool(false)) : (haxe.lang.Runtime.toBool(showCautKey)) );
		boolean __temp_showCautClef95 = ( (( showCautClef == null )) ? (haxe.lang.Runtime.toBool(false)) : (haxe.lang.Runtime.toBool(showCautClef)) );
		boolean __temp_showTime94 = ( (( showTime == null )) ? (haxe.lang.Runtime.toBool(false)) : (haxe.lang.Runtime.toBool(showTime)) );
		boolean __temp_showKey93 = ( (( showKey == null )) ? (haxe.lang.Runtime.toBool(false)) : (haxe.lang.Runtime.toBool(showKey)) );
		boolean __temp_showClef92 = ( (( showClef == null )) ? (haxe.lang.Runtime.toBool(false)) : (haxe.lang.Runtime.toBool(showClef)) );
		__temp_me98.showClef = __temp_showClef92;
		__temp_me98.showKey = __temp_showKey93;
		__temp_me98.showTime = __temp_showTime94;
		__temp_me98.showCautClef = __temp_showCautClef95;
		__temp_me98.showCautKey = __temp_showCautKey96;
		__temp_me98.showCautTime = __temp_showCautTime97;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PBarConfig(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PBarConfig(((java.lang.Object) (arr.__get(0)) ), ((java.lang.Object) (arr.__get(1)) ), ((java.lang.Object) (arr.__get(2)) ), ((java.lang.Object) (arr.__get(3)) ), ((java.lang.Object) (arr.__get(4)) ), ((java.lang.Object) (arr.__get(5)) ));
	}
	
	
	public  boolean showClef;
	
	public  boolean showKey;
	
	public  boolean showTime;
	
	public  boolean showCautClef;
	
	public  boolean showCautKey;
	
	public  boolean showCautTime;
	
	public  double calculatedWidth;
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef624 = true;
			switch (field.hashCode())
			{
				case -674612568:
				{
					if (field.equals("calculatedWidth")) 
					{
						__temp_executeDef624 = false;
						this.calculatedWidth = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef624) 
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
			boolean __temp_executeDef625 = true;
			switch (field.hashCode())
			{
				case -674612568:
				{
					if (field.equals("calculatedWidth")) 
					{
						__temp_executeDef625 = false;
						this.calculatedWidth = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -339334297:
				{
					if (field.equals("showClef")) 
					{
						__temp_executeDef625 = false;
						this.showClef = haxe.lang.Runtime.toBool(value);
						return value;
					}
					
					break;
				}
				
				
				case -759550457:
				{
					if (field.equals("showCautTime")) 
					{
						__temp_executeDef625 = false;
						this.showCautTime = haxe.lang.Runtime.toBool(value);
						return value;
					}
					
					break;
				}
				
				
				case 2067271202:
				{
					if (field.equals("showKey")) 
					{
						__temp_executeDef625 = false;
						this.showKey = haxe.lang.Runtime.toBool(value);
						return value;
					}
					
					break;
				}
				
				
				case 945320933:
				{
					if (field.equals("showCautKey")) 
					{
						__temp_executeDef625 = false;
						this.showCautKey = haxe.lang.Runtime.toBool(value);
						return value;
					}
					
					break;
				}
				
				
				case -338830486:
				{
					if (field.equals("showTime")) 
					{
						__temp_executeDef625 = false;
						this.showTime = haxe.lang.Runtime.toBool(value);
						return value;
					}
					
					break;
				}
				
				
				case -760054268:
				{
					if (field.equals("showCautClef")) 
					{
						__temp_executeDef625 = false;
						this.showCautClef = haxe.lang.Runtime.toBool(value);
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef625) 
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
			boolean __temp_executeDef626 = true;
			switch (field.hashCode())
			{
				case -674612568:
				{
					if (field.equals("calculatedWidth")) 
					{
						__temp_executeDef626 = false;
						return this.calculatedWidth;
					}
					
					break;
				}
				
				
				case -339334297:
				{
					if (field.equals("showClef")) 
					{
						__temp_executeDef626 = false;
						return this.showClef;
					}
					
					break;
				}
				
				
				case -759550457:
				{
					if (field.equals("showCautTime")) 
					{
						__temp_executeDef626 = false;
						return this.showCautTime;
					}
					
					break;
				}
				
				
				case 2067271202:
				{
					if (field.equals("showKey")) 
					{
						__temp_executeDef626 = false;
						return this.showKey;
					}
					
					break;
				}
				
				
				case 945320933:
				{
					if (field.equals("showCautKey")) 
					{
						__temp_executeDef626 = false;
						return this.showCautKey;
					}
					
					break;
				}
				
				
				case -338830486:
				{
					if (field.equals("showTime")) 
					{
						__temp_executeDef626 = false;
						return this.showTime;
					}
					
					break;
				}
				
				
				case -760054268:
				{
					if (field.equals("showCautClef")) 
					{
						__temp_executeDef626 = false;
						return this.showCautClef;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef626) 
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
			boolean __temp_executeDef627 = true;
			switch (field.hashCode())
			{
				case -674612568:
				{
					if (field.equals("calculatedWidth")) 
					{
						__temp_executeDef627 = false;
						return this.calculatedWidth;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef627) 
			{
				return super.__hx_getField_f(field, throwErrors, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("calculatedWidth");
		baseArr.push("showCautTime");
		baseArr.push("showCautKey");
		baseArr.push("showCautClef");
		baseArr.push("showTime");
		baseArr.push("showKey");
		baseArr.push("showClef");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


