package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class ETimeUtils extends haxe.lang.HxObject
{
	public    ETimeUtils(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    ETimeUtils()
	{
		nx3.ETimeUtils.__hx_ctor_nx3_ETimeUtils(this);
	}
	
	
	public static   void __hx_ctor_nx3_ETimeUtils(nx3.ETimeUtils __temp_me69)
	{
		{
		}
		
	}
	
	
	public static   java.lang.String toString(nx3.ETime time)
	{
		switch (haxe.root.Type.enumIndex(time))
		{
			case 0:
			{
				return "2/2";
			}
			
			
			case 1:
			{
				return "3/2";
			}
			
			
			case 2:
			{
				return "4/2";
			}
			
			
			case 8:
			{
				return "7/4";
			}
			
			
			case 7:
			{
				return "6/4";
			}
			
			
			case 6:
			{
				return "5/4";
			}
			
			
			case 5:
			{
				return "4/4";
			}
			
			
			case 4:
			{
				return "3/4";
			}
			
			
			case 3:
			{
				return "2/4";
			}
			
			
			case 9:
			{
				return "2/8";
			}
			
			
			case 10:
			{
				return "3/8";
			}
			
			
			case 11:
			{
				return "4/8";
			}
			
			
			case 12:
			{
				return "5/8";
			}
			
			
			case 13:
			{
				return "6/8";
			}
			
			
			case 14:
			{
				return "7/8";
			}
			
			
			case 15:
			{
				return "9/8";
			}
			
			
			case 16:
			{
				return "12/8";
			}
			
			
			case 17:
			{
				return "C";
			}
			
			
			case 18:
			{
				return "AllaBreve";
			}
			
			
		}
		
		return "time-unknown";
	}
	
	
	public static   nx3.ETime fromString(java.lang.String str)
	{
		if (( str == null )) 
		{
			return null;
		}
		
		{
			java.lang.String __temp_svar588 = (str);
			boolean __temp_executeDef589 = true;
			switch (__temp_svar588.hashCode())
			{
				case 51479:
				{
					if (__temp_svar588.equals("4/2")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.Time4_2;
					}
					
					break;
				}
				
				
				case 1927126116:
				{
					if (__temp_svar588.equals("AllaBreve")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.TimeAllabreve;
					}
					
					break;
				}
				
				
				case 50518:
				{
					if (__temp_svar588.equals("3/2")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.Time3_2;
					}
					
					break;
				}
				
				
				case 67:
				{
					if (__temp_svar588.equals("C")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.TimeCommon;
					}
					
					break;
				}
				
				
				case 49652:
				{
					if (__temp_svar588.equals("224")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.Time2_2;
					}
					
					break;
				}
				
				
				case 1509322:
				{
					if (__temp_svar588.equals("12/8")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.Time12_8;
					}
					
					break;
				}
				
				
				case 54364:
				{
					if (__temp_svar588.equals("7/4")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.Time7_4;
					}
					
					break;
				}
				
				
				case 56290:
				{
					if (__temp_svar588.equals("9/8")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.Time9_8;
					}
					
					break;
				}
				
				
				case 53403:
				{
					if (__temp_svar588.equals("6/4")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.Time6_4;
					}
					
					break;
				}
				
				
				case 54368:
				{
					if (__temp_svar588.equals("7/8")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.Time7_8;
					}
					
					break;
				}
				
				
				case 52442:
				{
					if (__temp_svar588.equals("5/4")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.Time5_4;
					}
					
					break;
				}
				
				
				case 53407:
				{
					if (__temp_svar588.equals("6/8")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.Time6_8;
					}
					
					break;
				}
				
				
				case 51481:
				{
					if (__temp_svar588.equals("4/4")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.Time4_4;
					}
					
					break;
				}
				
				
				case 52446:
				{
					if (__temp_svar588.equals("5/8")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.Time5_8;
					}
					
					break;
				}
				
				
				case 50520:
				{
					if (__temp_svar588.equals("3/4")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.Time3_4;
					}
					
					break;
				}
				
				
				case 51485:
				{
					if (__temp_svar588.equals("4/8")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.Time4_8;
					}
					
					break;
				}
				
				
				case 49559:
				{
					if (__temp_svar588.equals("2/4")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.Time2_4;
					}
					
					break;
				}
				
				
				case 50524:
				{
					if (__temp_svar588.equals("3/8")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.Time3_8;
					}
					
					break;
				}
				
				
				case 49563:
				{
					if (__temp_svar588.equals("2/8")) 
					{
						__temp_executeDef589 = false;
						return nx3.ETime.Time2_8;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef589) 
			{
				return null;
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.ETimeUtils(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.ETimeUtils();
	}
	
	
}


