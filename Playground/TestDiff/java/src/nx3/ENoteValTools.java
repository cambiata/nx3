package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class ENoteValTools extends haxe.lang.HxObject
{
	static 
	{
		nx3.ENoteValTools.DOT = 1.5;
		nx3.ENoteValTools.DOTDOT = 1.75;
		nx3.ENoteValTools.TRI = 0.66666666;
		nx3.ENoteValTools.N1 = 4;
		nx3.ENoteValTools.N2 = 2;
		nx3.ENoteValTools.N4 = 1;
		nx3.ENoteValTools.N8 = .5;
		nx3.ENoteValTools.N16 = .25;
		nx3.ENoteValTools.N32 = .125;
		nx3.ENoteValTools.valNv1 = 12096;
		nx3.ENoteValTools.valNv1dot = 18144;
		nx3.ENoteValTools.valNv1ddot = 21168;
		nx3.ENoteValTools.valNv1tri = 8063;
		nx3.ENoteValTools.valNv2 = 6048;
		nx3.ENoteValTools.valNv2dot = 9072;
		nx3.ENoteValTools.valNv2ddot = 10584;
		nx3.ENoteValTools.valNv2tri = 4031;
		nx3.ENoteValTools.valNv4 = 3024;
		nx3.ENoteValTools.valNv4dot = 4536;
		nx3.ENoteValTools.valNv4ddot = 5292;
		nx3.ENoteValTools.valNv4tri = 2015;
		nx3.ENoteValTools.valNv8 = 1512;
		nx3.ENoteValTools.valNv8dot = 2268;
		nx3.ENoteValTools.valNv8ddot = 2646;
		nx3.ENoteValTools.valNv8tri = 1007;
		nx3.ENoteValTools.valNv16 = 756;
		nx3.ENoteValTools.valNv16dot = 1134;
		nx3.ENoteValTools.valNv16ddot = 1323;
		nx3.ENoteValTools.valNv16tri = 503;
		nx3.ENoteValTools.valNv32 = 378;
		nx3.ENoteValTools.valNv32dot = 567;
		nx3.ENoteValTools.valNv32ddot = 661;
		nx3.ENoteValTools.valNv32tri = 251;
	}
	public    ENoteValTools(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    ENoteValTools()
	{
		nx3.ENoteValTools.__hx_ctor_nx3_ENoteValTools(this);
	}
	
	
	public static   void __hx_ctor_nx3_ENoteValTools(nx3.ENoteValTools __temp_me57)
	{
		{
		}
		
	}
	
	
	public static  double DOT;
	
	public static  double DOTDOT;
	
	public static  double TRI;
	
	public static  int N1;
	
	public static  int N2;
	
	public static  int N4;
	
	public static  double N8;
	
	public static  double N16;
	
	public static  double N32;
	
	public static  int valNv1;
	
	public static  int valNv1dot;
	
	public static  int valNv1ddot;
	
	public static  int valNv1tri;
	
	public static  int valNv2;
	
	public static  int valNv2dot;
	
	public static  int valNv2ddot;
	
	public static  int valNv2tri;
	
	public static  int valNv4;
	
	public static  int valNv4dot;
	
	public static  int valNv4ddot;
	
	public static  int valNv4tri;
	
	public static  int valNv8;
	
	public static  int valNv8dot;
	
	public static  int valNv8ddot;
	
	public static  int valNv8tri;
	
	public static  int valNv16;
	
	public static  int valNv16dot;
	
	public static  int valNv16ddot;
	
	public static  int valNv16tri;
	
	public static  int valNv32;
	
	public static  int valNv32dot;
	
	public static  int valNv32ddot;
	
	public static  int valNv32tri;
	
	public static   int beaminglevel(nx3.ENoteVal val)
	{
		switch (haxe.root.Type.enumIndex(val))
		{
			case 12:
			{
				return 1;
			}
			
			
			case 15:
			{
				return 1;
			}
			
			
			case 13:
			{
				return 1;
			}
			
			
			case 14:
			{
				return 1;
			}
			
			
			case 16:
			{
				return 2;
			}
			
			
			case 19:
			{
				return 2;
			}
			
			
			case 17:
			{
				return 2;
			}
			
			
			case 18:
			{
				return 2;
			}
			
			
			case 20:
			{
				return 3;
			}
			
			
			case 23:
			{
				return 3;
			}
			
			
			case 21:
			{
				return 3;
			}
			
			
			case 22:
			{
				return 3;
			}
			
			
			default:
			{
				return 0;
			}
			
		}
		
	}
	
	
	public static   int stavinglevel(nx3.ENoteVal val)
	{
		switch (haxe.root.Type.enumIndex(val))
		{
			case 0:
			{
				return 0;
			}
			
			
			case 3:
			{
				return 0;
			}
			
			
			case 1:
			{
				return 0;
			}
			
			
			case 2:
			{
				return 0;
			}
			
			
			default:
			{
				return 1;
			}
			
		}
		
	}
	
	
	public static   int dotlevel(nx3.ENoteVal val)
	{
		switch (haxe.root.Type.enumIndex(val))
		{
			case 1:case 5:case 9:case 13:case 17:case 21:
			{
				return 1;
			}
			
			
			case 2:case 6:case 10:case 14:case 18:case 22:
			{
				return 2;
			}
			
			
			default:
			{
				return 0;
			}
			
		}
		
	}
	
	
	public static   nx3.EHeadValueType head(nx3.ENoteVal val)
	{
		switch (haxe.root.Type.enumIndex(val))
		{
			case 0:
			{
				return nx3.EHeadValueType.HVT1;
			}
			
			
			case 3:
			{
				return nx3.EHeadValueType.HVT1;
			}
			
			
			case 1:
			{
				return nx3.EHeadValueType.HVT1;
			}
			
			
			case 2:
			{
				return nx3.EHeadValueType.HVT1;
			}
			
			
			case 4:
			{
				return nx3.EHeadValueType.HVT2;
			}
			
			
			case 7:
			{
				return nx3.EHeadValueType.HVT2;
			}
			
			
			case 5:
			{
				return nx3.EHeadValueType.HVT2;
			}
			
			
			case 6:
			{
				return nx3.EHeadValueType.HVT2;
			}
			
			
			default:
			{
				return nx3.EHeadValueType.HVT4;
			}
			
		}
		
	}
	
	
	public static   int value(nx3.ENoteVal noteval)
	{
		switch (haxe.root.Type.enumIndex(noteval))
		{
			case 0:
			{
				return 12096;
			}
			
			
			case 1:
			{
				return 18144;
			}
			
			
			case 2:
			{
				return 21168;
			}
			
			
			case 3:
			{
				return 8063;
			}
			
			
			case 4:
			{
				return 6048;
			}
			
			
			case 5:
			{
				return 9072;
			}
			
			
			case 6:
			{
				return 10584;
			}
			
			
			case 7:
			{
				return 4031;
			}
			
			
			case 8:
			{
				return 3024;
			}
			
			
			case 9:
			{
				return 4536;
			}
			
			
			case 10:
			{
				return 5292;
			}
			
			
			case 11:
			{
				return 2015;
			}
			
			
			case 12:
			{
				return 1512;
			}
			
			
			case 13:
			{
				return 2268;
			}
			
			
			case 14:
			{
				return 2646;
			}
			
			
			case 15:
			{
				return 1007;
			}
			
			
			case 16:
			{
				return 756;
			}
			
			
			case 17:
			{
				return 1134;
			}
			
			
			case 18:
			{
				return 1323;
			}
			
			
			case 19:
			{
				return 503;
			}
			
			
			case 20:
			{
				return 378;
			}
			
			
			case 21:
			{
				return 567;
			}
			
			
			case 22:
			{
				return 661;
			}
			
			
			case 23:
			{
				return 251;
			}
			
			
		}
		
		return 0;
	}
	
	
	public static   nx3.ENoteVal getFromValue(int value)
	{
		switch (value)
		{
			case 12096:
			{
				return nx3.ENoteVal.Nv1;
			}
			
			
			case 18144:
			{
				return nx3.ENoteVal.Nv1dot;
			}
			
			
			case 21168:
			{
				return nx3.ENoteVal.Nv1ddot;
			}
			
			
			case 8063:
			{
				return nx3.ENoteVal.Nv1tri;
			}
			
			
			case 6048:
			{
				return nx3.ENoteVal.Nv2;
			}
			
			
			case 9072:
			{
				return nx3.ENoteVal.Nv2dot;
			}
			
			
			case 10584:
			{
				return nx3.ENoteVal.Nv2ddot;
			}
			
			
			case 4031:
			{
				return nx3.ENoteVal.Nv2tri;
			}
			
			
			case 3024:
			{
				return nx3.ENoteVal.Nv4;
			}
			
			
			case 4536:
			{
				return nx3.ENoteVal.Nv4dot;
			}
			
			
			case 5292:
			{
				return nx3.ENoteVal.Nv4ddot;
			}
			
			
			case 2015:
			{
				return nx3.ENoteVal.Nv4tri;
			}
			
			
			case 1512:
			{
				return nx3.ENoteVal.Nv8;
			}
			
			
			case 2268:
			{
				return nx3.ENoteVal.Nv8dot;
			}
			
			
			case 2646:
			{
				return nx3.ENoteVal.Nv8ddot;
			}
			
			
			case 1007:
			{
				return nx3.ENoteVal.Nv8tri;
			}
			
			
			case 756:
			{
				return nx3.ENoteVal.Nv16;
			}
			
			
			case 1134:
			{
				return nx3.ENoteVal.Nv16dot;
			}
			
			
			case 1323:
			{
				return nx3.ENoteVal.Nv16ddot;
			}
			
			
			case 503:
			{
				return nx3.ENoteVal.Nv16tri;
			}
			
			
			case 378:
			{
				return nx3.ENoteVal.Nv32;
			}
			
			
			case 567:
			{
				return nx3.ENoteVal.Nv32dot;
			}
			
			
			case 661:
			{
				return nx3.ENoteVal.Nv32ddot;
			}
			
			
			case 251:
			{
				return nx3.ENoteVal.Nv32tri;
			}
			
			
			default:
			{
				return null;
			}
			
		}
		
	}
	
	
	public static   java.lang.String toValString(nx3.ENoteVal val)
	{
		switch (haxe.root.Type.enumIndex(val))
		{
			case 0:
			{
				return "1";
			}
			
			
			case 1:
			{
				return "1.";
			}
			
			
			case 2:
			{
				return "1..";
			}
			
			
			case 3:
			{
				return "1-3";
			}
			
			
			case 4:
			{
				return "2";
			}
			
			
			case 5:
			{
				return "2.";
			}
			
			
			case 6:
			{
				return "2..";
			}
			
			
			case 7:
			{
				return "2-3";
			}
			
			
			case 8:
			{
				return "4";
			}
			
			
			case 9:
			{
				return "4.";
			}
			
			
			case 10:
			{
				return "4..";
			}
			
			
			case 11:
			{
				return "4-3";
			}
			
			
			case 12:
			{
				return "8";
			}
			
			
			case 13:
			{
				return "8.";
			}
			
			
			case 14:
			{
				return "8..";
			}
			
			
			case 15:
			{
				return "8-3";
			}
			
			
			case 16:
			{
				return "16";
			}
			
			
			case 17:
			{
				return "16.";
			}
			
			
			case 18:
			{
				return "16..";
			}
			
			
			case 19:
			{
				return "16-3";
			}
			
			
			case 20:
			{
				return "32";
			}
			
			
			case 21:
			{
				return "32.";
			}
			
			
			case 22:
			{
				return "32..";
			}
			
			
			case 23:
			{
				return "32-3";
			}
			
			
		}
		
		return null;
	}
	
	
	public static   nx3.ENoteVal fromValString(java.lang.String valString)
	{
		if (( valString == null )) 
		{
			return nx3.ENoteVal.Nv4;
		}
		 else 
		{
			{
				java.lang.String __temp_svar401 = (valString);
				boolean __temp_executeDef402 = true;
				switch (__temp_svar401.hashCode())
				{
					case 0:
					{
						if (__temp_svar401.equals("")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv4;
						}
						
						break;
					}
					
					
					case 1568837:
					{
						if (__temp_svar401.equals("32-3")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv32tri;
						}
						
						break;
					}
					
					
					case 49:
					{
						if (__temp_svar401.equals("1")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv1;
						}
						
						break;
					}
					
					
					case 1568863:
					{
						if (__temp_svar401.equals("32..")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv32ddot;
						}
						
						break;
					}
					
					
					case 1565:
					{
						if (__temp_svar401.equals("1.")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv1dot;
						}
						
						break;
					}
					
					
					case 50607:
					{
						if (__temp_svar401.equals("32.")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv32dot;
						}
						
						break;
					}
					
					
					case 48561:
					{
						if (__temp_svar401.equals("1..")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv1ddot;
						}
						
						break;
					}
					
					
					case 1631:
					{
						if (__temp_svar401.equals("32")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv32;
						}
						
						break;
					}
					
					
					case 48535:
					{
						if (__temp_svar401.equals("1-3")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv1tri;
						}
						
						break;
					}
					
					
					case 1513099:
					{
						if (__temp_svar401.equals("16-3")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv16tri;
						}
						
						break;
					}
					
					
					case 50:
					{
						if (__temp_svar401.equals("2")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv2;
						}
						
						break;
					}
					
					
					case 1513125:
					{
						if (__temp_svar401.equals("16..")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv16ddot;
						}
						
						break;
					}
					
					
					case 1596:
					{
						if (__temp_svar401.equals("2.")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv2dot;
						}
						
						break;
					}
					
					
					case 48809:
					{
						if (__temp_svar401.equals("16.")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv16dot;
						}
						
						break;
					}
					
					
					case 49522:
					{
						if (__temp_svar401.equals("2..")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv2ddot;
						}
						
						break;
					}
					
					
					case 1573:
					{
						if (__temp_svar401.equals("16")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv16;
						}
						
						break;
					}
					
					
					case 49496:
					{
						if (__temp_svar401.equals("2-3")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv2tri;
						}
						
						break;
					}
					
					
					case 55262:
					{
						if (__temp_svar401.equals("8-3")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv8tri;
						}
						
						break;
					}
					
					
					case 52:
					{
						if (__temp_svar401.equals("4")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv4;
						}
						
						break;
					}
					
					
					case 55288:
					{
						if (__temp_svar401.equals("8..")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv8ddot;
						}
						
						break;
					}
					
					
					case 1658:
					{
						if (__temp_svar401.equals("4.")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv4dot;
						}
						
						break;
					}
					
					
					case 1782:
					{
						if (__temp_svar401.equals("8.")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv8dot;
						}
						
						break;
					}
					
					
					case 51444:
					{
						if (__temp_svar401.equals("4..")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv4ddot;
						}
						
						break;
					}
					
					
					case 56:
					{
						if (__temp_svar401.equals("8")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv8;
						}
						
						break;
					}
					
					
					case 51418:
					{
						if (__temp_svar401.equals("4-3")) 
						{
							__temp_executeDef402 = false;
							return nx3.ENoteVal.Nv4tri;
						}
						
						break;
					}
					
					
				}
				
				if (__temp_executeDef402) 
				{
					throw haxe.lang.HaxeException.wrap(( "unhandled note value: " + valString ));
				}
				 else 
				{
					throw null;
				}
				
			}
			
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.ENoteValTools(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.ENoteValTools();
	}
	
	
}


