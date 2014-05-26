package haxe.root;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Date extends haxe.lang.HxObject
{
	public    Date(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    Date(int year, int month, int day, int hour, int min, int sec)
	{
		haxe.root.Date.__hx_ctor__Date(this, year, month, day, hour, min, sec);
	}
	
	
	public static   void __hx_ctor__Date(haxe.root.Date __temp_me3, int year, int month, int day, int hour, int min, int sec)
	{
		if (( year != 0 )) 
		{
			year = ( year - 1900 );
		}
		 else 
		{
			year = 0;
		}
		
		__temp_me3.date = new java.util.Date(((int) (year) ), ((int) (month) ), ((int) (day) ), ((int) (hour) ), ((int) (min) ), ((int) (sec) ));
	}
	
	
	public static   haxe.root.Date now()
	{
		haxe.root.Date d = new haxe.root.Date(((int) (0) ), ((int) (0) ), ((int) (0) ), ((int) (0) ), ((int) (0) ), ((int) (0) ));
		d.date = new java.util.Date();
		return d;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new haxe.root.Date(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new haxe.root.Date(((int) (haxe.lang.Runtime.toInt(arr.__get(0))) ), ((int) (haxe.lang.Runtime.toInt(arr.__get(1))) ), ((int) (haxe.lang.Runtime.toInt(arr.__get(2))) ), ((int) (haxe.lang.Runtime.toInt(arr.__get(3))) ), ((int) (haxe.lang.Runtime.toInt(arr.__get(4))) ), ((int) (haxe.lang.Runtime.toInt(arr.__get(5))) ));
	}
	
	
	public  java.util.Date date;
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef275 = true;
			switch (field.hashCode())
			{
				case 3076014:
				{
					if (field.equals("date")) 
					{
						__temp_executeDef275 = false;
						this.date = ((java.util.Date) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef275) 
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
			boolean __temp_executeDef276 = true;
			switch (field.hashCode())
			{
				case 3076014:
				{
					if (field.equals("date")) 
					{
						__temp_executeDef276 = false;
						return this.date;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef276) 
			{
				return super.__hx_getField(field, throwErrors, isCheck, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("date");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


