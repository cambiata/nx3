
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class ENoteValTools : global::haxe.lang.HxObject {
		static ENoteValTools() {
			#line 13 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
			global::nx3.ENoteValTools.DOT = 1.5;
			global::nx3.ENoteValTools.DOTDOT = 1.75;
			global::nx3.ENoteValTools.TRI = 0.66666666;
			#line 17 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
			global::nx3.ENoteValTools.N1 = 4;
			global::nx3.ENoteValTools.N2 = 2;
			global::nx3.ENoteValTools.N4 = 1;
			global::nx3.ENoteValTools.N8 = .5;
			global::nx3.ENoteValTools.N16 = .25;
			global::nx3.ENoteValTools.N32 = .125;
			#line 24 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
			global::nx3.ENoteValTools.valNv1 = 12096;
			global::nx3.ENoteValTools.valNv1dot = 18144;
			global::nx3.ENoteValTools.valNv1ddot = 21168;
			global::nx3.ENoteValTools.valNv1tri = 8063;
			#line 29 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
			global::nx3.ENoteValTools.valNv2 = 6048;
			global::nx3.ENoteValTools.valNv2dot = 9072;
			global::nx3.ENoteValTools.valNv2ddot = 10584;
			global::nx3.ENoteValTools.valNv2tri = 4031;
			#line 34 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
			global::nx3.ENoteValTools.valNv4 = 3024;
			global::nx3.ENoteValTools.valNv4dot = 4536;
			global::nx3.ENoteValTools.valNv4ddot = 5292;
			global::nx3.ENoteValTools.valNv4tri = 2015;
			#line 39 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
			global::nx3.ENoteValTools.valNv8 = 1512;
			global::nx3.ENoteValTools.valNv8dot = 2268;
			global::nx3.ENoteValTools.valNv8ddot = 2646;
			global::nx3.ENoteValTools.valNv8tri = 1007;
			#line 44 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
			global::nx3.ENoteValTools.valNv16 = 756;
			global::nx3.ENoteValTools.valNv16dot = 1134;
			global::nx3.ENoteValTools.valNv16ddot = 1323;
			global::nx3.ENoteValTools.valNv16tri = 503;
			#line 49 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
			global::nx3.ENoteValTools.valNv32 = 378;
			global::nx3.ENoteValTools.valNv32dot = 567;
			global::nx3.ENoteValTools.valNv32ddot = 661;
			global::nx3.ENoteValTools.valNv32tri = 251;
		}
		public    ENoteValTools(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    ENoteValTools(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
				global::nx3.ENoteValTools.__hx_ctor_nx3_ENoteValTools(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_ENoteValTools(global::nx3.ENoteValTools __temp_me64){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
				{
				}
				
			}
			#line default
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
		
		public static   int beaminglevel(global::nx3.ENoteVal val){
			unchecked {
				#line 57 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
				switch (global::Type.enumIndex(val)){
					case 12:
					{
						#line 59 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 1;
					}
					
					
					case 15:
					{
						#line 60 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 1;
					}
					
					
					case 13:
					{
						#line 61 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 1;
					}
					
					
					case 14:
					{
						#line 62 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 1;
					}
					
					
					case 16:
					{
						#line 63 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 2;
					}
					
					
					case 19:
					{
						#line 64 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 2;
					}
					
					
					case 17:
					{
						#line 65 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 2;
					}
					
					
					case 18:
					{
						#line 66 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 2;
					}
					
					
					case 20:
					{
						#line 67 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 3;
					}
					
					
					case 23:
					{
						#line 68 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 3;
					}
					
					
					case 21:
					{
						#line 69 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 3;
					}
					
					
					case 22:
					{
						#line 70 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 3;
					}
					
					
					default:
					{
						#line 71 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 0;
					}
					
				}
				
			}
			#line default
		}
		
		
		public static   int stavinglevel(global::nx3.ENoteVal val){
			unchecked {
				#line 78 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
				switch (global::Type.enumIndex(val)){
					case 0:
					{
						#line 80 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 0;
					}
					
					
					case 3:
					{
						#line 81 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 0;
					}
					
					
					case 1:
					{
						#line 82 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 0;
					}
					
					
					case 2:
					{
						#line 83 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 0;
					}
					
					
					default:
					{
						#line 84 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 1;
					}
					
				}
				
			}
			#line default
		}
		
		
		public static   int dotlevel(global::nx3.ENoteVal val){
			unchecked {
				#line 90 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
				switch (global::Type.enumIndex(val)){
					case 1:case 5:case 9:case 13:case 17:case 21:
					{
						#line 93 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 1;
					}
					
					
					case 2:case 6:case 10:case 14:case 18:case 22:
					{
						#line 95 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 2;
					}
					
					
					default:
					{
						#line 96 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 0;
					}
					
				}
				
			}
			#line default
		}
		
		
		public static   global::nx3.EHeadValueType head(global::nx3.ENoteVal val){
			unchecked {
				#line 103 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
				switch (global::Type.enumIndex(val)){
					case 0:
					{
						#line 105 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.EHeadValueType.HVT1;
					}
					
					
					case 3:
					{
						#line 106 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.EHeadValueType.HVT1;
					}
					
					
					case 1:
					{
						#line 107 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.EHeadValueType.HVT1;
					}
					
					
					case 2:
					{
						#line 108 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.EHeadValueType.HVT1;
					}
					
					
					case 4:
					{
						#line 110 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.EHeadValueType.HVT2;
					}
					
					
					case 7:
					{
						#line 111 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.EHeadValueType.HVT2;
					}
					
					
					case 5:
					{
						#line 112 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.EHeadValueType.HVT2;
					}
					
					
					case 6:
					{
						#line 113 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.EHeadValueType.HVT2;
					}
					
					
					default:
					{
						#line 114 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.EHeadValueType.HVT4;
					}
					
				}
				
			}
			#line default
		}
		
		
		public static   int @value(global::nx3.ENoteVal noteval){
			unchecked {
				#line 120 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
				switch (global::Type.enumIndex(noteval)){
					case 0:
					{
						#line 122 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 12096;
					}
					
					
					case 1:
					{
						#line 123 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 18144;
					}
					
					
					case 2:
					{
						#line 124 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 21168;
					}
					
					
					case 3:
					{
						#line 125 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 8063;
					}
					
					
					case 4:
					{
						#line 127 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 6048;
					}
					
					
					case 5:
					{
						#line 128 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 9072;
					}
					
					
					case 6:
					{
						#line 129 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 10584;
					}
					
					
					case 7:
					{
						#line 130 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 4031;
					}
					
					
					case 8:
					{
						#line 132 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 3024;
					}
					
					
					case 9:
					{
						#line 133 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 4536;
					}
					
					
					case 10:
					{
						#line 134 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 5292;
					}
					
					
					case 11:
					{
						#line 135 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 2015;
					}
					
					
					case 12:
					{
						#line 137 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 1512;
					}
					
					
					case 13:
					{
						#line 138 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 2268;
					}
					
					
					case 14:
					{
						#line 139 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 2646;
					}
					
					
					case 15:
					{
						#line 140 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 1007;
					}
					
					
					case 16:
					{
						#line 142 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 756;
					}
					
					
					case 17:
					{
						#line 143 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 1134;
					}
					
					
					case 18:
					{
						#line 144 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 1323;
					}
					
					
					case 19:
					{
						#line 145 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 503;
					}
					
					
					case 20:
					{
						#line 147 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 378;
					}
					
					
					case 21:
					{
						#line 148 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 567;
					}
					
					
					case 22:
					{
						#line 149 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 661;
					}
					
					
					case 23:
					{
						#line 150 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return 251;
					}
					
					
				}
				
				#line 118 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
				return default(int);
			}
			#line default
		}
		
		
		public static   global::nx3.ENoteVal getFromValue(int @value){
			unchecked {
				#line 156 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
				switch (@value){
					case 12096:
					{
						#line 158 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv1;
					}
					
					
					case 18144:
					{
						#line 159 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv1dot;
					}
					
					
					case 21168:
					{
						#line 160 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv1ddot;
					}
					
					
					case 8063:
					{
						#line 161 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv1tri;
					}
					
					
					case 6048:
					{
						#line 162 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv2;
					}
					
					
					case 9072:
					{
						#line 163 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv2dot;
					}
					
					
					case 10584:
					{
						#line 164 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv2ddot;
					}
					
					
					case 4031:
					{
						#line 165 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv2tri;
					}
					
					
					case 3024:
					{
						#line 166 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv4;
					}
					
					
					case 4536:
					{
						#line 167 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv4dot;
					}
					
					
					case 5292:
					{
						#line 168 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv4ddot;
					}
					
					
					case 2015:
					{
						#line 169 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv4tri;
					}
					
					
					case 1512:
					{
						#line 170 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv8;
					}
					
					
					case 2268:
					{
						#line 171 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv8dot;
					}
					
					
					case 2646:
					{
						#line 172 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv8ddot;
					}
					
					
					case 1007:
					{
						#line 173 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv8tri;
					}
					
					
					case 756:
					{
						#line 174 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv16;
					}
					
					
					case 1134:
					{
						#line 175 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv16dot;
					}
					
					
					case 1323:
					{
						#line 176 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv16ddot;
					}
					
					
					case 503:
					{
						#line 177 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv16tri;
					}
					
					
					case 378:
					{
						#line 178 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv32;
					}
					
					
					case 567:
					{
						#line 179 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv32dot;
					}
					
					
					case 661:
					{
						#line 180 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv32ddot;
					}
					
					
					case 251:
					{
						#line 181 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return global::nx3.ENoteVal.Nv32tri;
					}
					
					
					default:
					{
						#line 183 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return default(global::nx3.ENoteVal);
					}
					
				}
				
			}
			#line default
		}
		
		
		public static   string toValString(global::nx3.ENoteVal val){
			unchecked {
				#line 191 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
				switch (global::Type.enumIndex(val)){
					case 0:
					{
						#line 193 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "1";
					}
					
					
					case 1:
					{
						#line 194 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "1.";
					}
					
					
					case 2:
					{
						#line 195 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "1..";
					}
					
					
					case 3:
					{
						#line 196 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "1-3";
					}
					
					
					case 4:
					{
						#line 197 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "2";
					}
					
					
					case 5:
					{
						#line 198 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "2.";
					}
					
					
					case 6:
					{
						#line 199 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "2..";
					}
					
					
					case 7:
					{
						#line 200 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "2-3";
					}
					
					
					case 8:
					{
						#line 201 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "4";
					}
					
					
					case 9:
					{
						#line 202 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "4.";
					}
					
					
					case 10:
					{
						#line 203 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "4..";
					}
					
					
					case 11:
					{
						#line 204 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "4-3";
					}
					
					
					case 12:
					{
						#line 205 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "8";
					}
					
					
					case 13:
					{
						#line 206 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "8.";
					}
					
					
					case 14:
					{
						#line 207 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "8..";
					}
					
					
					case 15:
					{
						#line 208 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "8-3";
					}
					
					
					case 16:
					{
						#line 209 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "16";
					}
					
					
					case 17:
					{
						#line 210 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "16.";
					}
					
					
					case 18:
					{
						#line 211 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "16..";
					}
					
					
					case 19:
					{
						#line 212 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "16-3";
					}
					
					
					case 20:
					{
						#line 213 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "32";
					}
					
					
					case 21:
					{
						#line 214 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "32.";
					}
					
					
					case 22:
					{
						#line 215 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "32..";
					}
					
					
					case 23:
					{
						#line 216 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
						return "32-3";
					}
					
					
				}
				
				#line 189 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
				return default(string);
			}
			#line default
		}
		
		
		public static   global::nx3.ENoteVal fromValString(string valString){
			unchecked {
				#line 224 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
				if (global::haxe.lang.Runtime.eq(valString, default(object))) {
					#line 226 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
					return global::nx3.ENoteVal.Nv4;
				}
				 else {
					#line 224 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
					switch (valString){
						case "":
						{
							#line 227 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv4;
						}
						
						
						case "1":
						{
							#line 229 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv1;
						}
						
						
						case "1.":
						{
							#line 230 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv1dot;
						}
						
						
						case "1..":
						{
							#line 231 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv1ddot;
						}
						
						
						case "1-3":
						{
							#line 232 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv1tri;
						}
						
						
						case "2":
						{
							#line 234 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv2;
						}
						
						
						case "2.":
						{
							#line 235 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv2dot;
						}
						
						
						case "2..":
						{
							#line 236 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv2ddot;
						}
						
						
						case "2-3":
						{
							#line 237 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv2tri;
						}
						
						
						case "4":
						{
							#line 239 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv4;
						}
						
						
						case "4.":
						{
							#line 240 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv4dot;
						}
						
						
						case "4..":
						{
							#line 241 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv4ddot;
						}
						
						
						case "4-3":
						{
							#line 242 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv4tri;
						}
						
						
						case "8":
						{
							#line 244 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv8;
						}
						
						
						case "8.":
						{
							#line 245 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv8dot;
						}
						
						
						case "8..":
						{
							#line 246 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv8ddot;
						}
						
						
						case "8-3":
						{
							#line 247 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv8tri;
						}
						
						
						case "16":
						{
							#line 249 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv16;
						}
						
						
						case "16.":
						{
							#line 250 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv16dot;
						}
						
						
						case "16..":
						{
							#line 251 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv16ddot;
						}
						
						
						case "16-3":
						{
							#line 252 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv16tri;
						}
						
						
						case "32":
						{
							#line 254 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv32;
						}
						
						
						case "32.":
						{
							#line 255 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv32dot;
						}
						
						
						case "32..":
						{
							#line 256 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv32ddot;
						}
						
						
						case "32-3":
						{
							#line 257 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							return global::nx3.ENoteVal.Nv32tri;
						}
						
						
						default:
						{
							#line 260 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
							throw global::haxe.lang.HaxeException.wrap(global::haxe.lang.Runtime.concat("unhandled note value: ", valString));
						}
						
					}
					
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
				return new global::nx3.ENoteValTools(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\ENoteValTools.hx"
				return new global::nx3.ENoteValTools();
			}
			#line default
		}
		
		
	}
}


