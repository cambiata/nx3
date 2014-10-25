
namespace nx3{
	public enum ETime{
		Time2_2, Time3_2, Time4_2, Time2_4, Time3_4, Time4_4, Time5_4, Time6_4, Time7_4, Time2_8, Time3_8, Time4_8, Time5_8, Time6_8, Time7_8, Time9_8, Time12_8, TimeCommon, TimeAllabreve
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class ETimeUtils : global::haxe.lang.HxObject {
		public    ETimeUtils(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 34 "F:\\nx3\\src\\nx3\\ETime.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    ETimeUtils(){
			unchecked {
				#line 34 "F:\\nx3\\src\\nx3\\ETime.hx"
				global::nx3.ETimeUtils.__hx_ctor_nx3_ETimeUtils(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_ETimeUtils(global::nx3.ETimeUtils __temp_me65){
			unchecked {
				#line 34 "F:\\nx3\\src\\nx3\\ETime.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static   string toString(global::nx3.ETime time){
			unchecked {
				#line 37 "F:\\nx3\\src\\nx3\\ETime.hx"
				switch (global::Type.enumIndex(time)){
					case 0:
					{
						#line 38 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "2/2";
					}
					
					
					case 1:
					{
						#line 39 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "3/2";
					}
					
					
					case 2:
					{
						#line 40 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "4/2";
					}
					
					
					case 8:
					{
						#line 42 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "7/4";
					}
					
					
					case 7:
					{
						#line 43 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "6/4";
					}
					
					
					case 6:
					{
						#line 44 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "5/4";
					}
					
					
					case 5:
					{
						#line 45 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "4/4";
					}
					
					
					case 4:
					{
						#line 46 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "3/4";
					}
					
					
					case 3:
					{
						#line 47 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "2/4";
					}
					
					
					case 9:
					{
						#line 49 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "2/8";
					}
					
					
					case 10:
					{
						#line 50 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "3/8";
					}
					
					
					case 11:
					{
						#line 51 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "4/8";
					}
					
					
					case 12:
					{
						#line 52 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "5/8";
					}
					
					
					case 13:
					{
						#line 53 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "6/8";
					}
					
					
					case 14:
					{
						#line 54 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "7/8";
					}
					
					
					case 15:
					{
						#line 55 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "9/8";
					}
					
					
					case 16:
					{
						#line 56 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "12/8";
					}
					
					
					case 17:
					{
						#line 58 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "C";
					}
					
					
					case 18:
					{
						#line 59 "F:\\nx3\\src\\nx3\\ETime.hx"
						return "AllaBreve";
					}
					
					
				}
				
				#line 61 "F:\\nx3\\src\\nx3\\ETime.hx"
				return "time-unknown";
			}
			#line default
		}
		
		
		public static   global::nx3.ETime fromString(string str){
			unchecked {
				#line 65 "F:\\nx3\\src\\nx3\\ETime.hx"
				if (string.Equals(str, default(string))) {
					#line 65 "F:\\nx3\\src\\nx3\\ETime.hx"
					return default(global::nx3.ETime);
				}
				
				#line 66 "F:\\nx3\\src\\nx3\\ETime.hx"
				switch (str){
					case "4/2":
					{
						#line 67 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.Time4_2;
					}
					
					
					case "3/2":
					{
						#line 68 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.Time3_2;
					}
					
					
					case "224":
					{
						#line 69 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.Time2_2;
					}
					
					
					case "7/4":
					{
						#line 71 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.Time7_4;
					}
					
					
					case "6/4":
					{
						#line 72 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.Time6_4;
					}
					
					
					case "5/4":
					{
						#line 73 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.Time5_4;
					}
					
					
					case "4/4":
					{
						#line 74 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.Time4_4;
					}
					
					
					case "3/4":
					{
						#line 75 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.Time3_4;
					}
					
					
					case "2/4":
					{
						#line 76 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.Time2_4;
					}
					
					
					case "2/8":
					{
						#line 78 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.Time2_8;
					}
					
					
					case "3/8":
					{
						#line 79 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.Time3_8;
					}
					
					
					case "4/8":
					{
						#line 80 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.Time4_8;
					}
					
					
					case "5/8":
					{
						#line 81 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.Time5_8;
					}
					
					
					case "6/8":
					{
						#line 82 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.Time6_8;
					}
					
					
					case "7/8":
					{
						#line 83 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.Time7_8;
					}
					
					
					case "9/8":
					{
						#line 84 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.Time9_8;
					}
					
					
					case "12/8":
					{
						#line 85 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.Time12_8;
					}
					
					
					case "C":
					{
						#line 87 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.TimeCommon;
					}
					
					
					case "AllaBreve":
					{
						#line 88 "F:\\nx3\\src\\nx3\\ETime.hx"
						return global::nx3.ETime.TimeAllabreve;
					}
					
					
					default:
					{
						#line 89 "F:\\nx3\\src\\nx3\\ETime.hx"
						return default(global::nx3.ETime);
					}
					
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 34 "F:\\nx3\\src\\nx3\\ETime.hx"
				return new global::nx3.ETimeUtils(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 34 "F:\\nx3\\src\\nx3\\ETime.hx"
				return new global::nx3.ETimeUtils();
			}
			#line default
		}
		
		
	}
}


