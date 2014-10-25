
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace cx{
	public  class StrTools : global::haxe.lang.HxObject {
		public    StrTools(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 9 "F:\\nx3\\src\\cx\\StrTools.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    StrTools(){
			unchecked {
				#line 9 "F:\\nx3\\src\\cx\\StrTools.hx"
				global::cx.StrTools.__hx_ctor_cx_StrTools(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_cx_StrTools(global::cx.StrTools __temp_me40){
			unchecked {
				#line 9 "F:\\nx3\\src\\cx\\StrTools.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static   int countSub(string str, string lookForStr){
			unchecked {
				#line 13 "F:\\nx3\\src\\cx\\StrTools.hx"
				return ( global::haxe.lang.StringExt.split(str, lookForStr).length - 1 );
			}
			#line default
		}
		
		
		public static   string until(string str, string untilStr, global::haxe.lang.Null<bool> includeUntilStr){
			unchecked {
				#line 18 "F:\\nx3\\src\\cx\\StrTools.hx"
				bool __temp_includeUntilStr28 = ( ( ! (includeUntilStr.hasValue) ) ? (global::haxe.lang.Runtime.toBool(false)) : (includeUntilStr.@value) );
				int pos = global::haxe.lang.StringExt.indexOf(str, untilStr, default(global::haxe.lang.Null<int>));
				if (__temp_includeUntilStr28) {
					#line 20 "F:\\nx3\\src\\cx\\StrTools.hx"
					pos++;
				}
				
				#line 21 "F:\\nx3\\src\\cx\\StrTools.hx"
				return global::haxe.lang.StringExt.substring(str, 0, new global::haxe.lang.Null<int>(pos, true));
			}
			#line default
		}
		
		
		public static   string untilLast(string str, string untilStr, global::haxe.lang.Null<bool> includeUntilStr){
			unchecked {
				#line 25 "F:\\nx3\\src\\cx\\StrTools.hx"
				bool __temp_includeUntilStr29 = ( ( ! (includeUntilStr.hasValue) ) ? (global::haxe.lang.Runtime.toBool(false)) : (includeUntilStr.@value) );
				int pos = global::haxe.lang.StringExt.lastIndexOf(str, untilStr, default(global::haxe.lang.Null<int>));
				if (__temp_includeUntilStr29) {
					#line 27 "F:\\nx3\\src\\cx\\StrTools.hx"
					pos++;
				}
				
				#line 28 "F:\\nx3\\src\\cx\\StrTools.hx"
				return global::haxe.lang.StringExt.substring(str, 0, new global::haxe.lang.Null<int>(pos, true));
			}
			#line default
		}
		
		
		public static   string tab(string str){
			unchecked {
				#line 33 "F:\\nx3\\src\\cx\\StrTools.hx"
				return global::haxe.lang.Runtime.concat(str, "\t");
			}
			#line default
		}
		
		
		public static   string newline(string str){
			unchecked {
				#line 37 "F:\\nx3\\src\\cx\\StrTools.hx"
				return global::haxe.lang.Runtime.concat(str, "\n");
			}
			#line default
		}
		
		
		public static   string repeat(string repeatString, int count){
			unchecked {
				#line 41 "F:\\nx3\\src\\cx\\StrTools.hx"
				string result = "";
				{
					#line 42 "F:\\nx3\\src\\cx\\StrTools.hx"
					int _g = 0;
					#line 42 "F:\\nx3\\src\\cx\\StrTools.hx"
					while (( _g < count )){
						#line 42 "F:\\nx3\\src\\cx\\StrTools.hx"
						int i = _g++;
						#line 42 "F:\\nx3\\src\\cx\\StrTools.hx"
						result = global::haxe.lang.Runtime.concat(result, repeatString);
					}
					
				}
				
				#line 43 "F:\\nx3\\src\\cx\\StrTools.hx"
				return result;
			}
			#line default
		}
		
		
		public static   string fill(string str, global::haxe.lang.Null<int> toLength, string with, string replaceNull){
			unchecked {
				#line 46 "F:\\nx3\\src\\cx\\StrTools.hx"
				if (string.Equals(replaceNull, default(string))) {
					#line 46 "F:\\nx3\\src\\cx\\StrTools.hx"
					replaceNull = "-";
				}
				
				#line 46 "F:\\nx3\\src\\cx\\StrTools.hx"
				if (string.Equals(with, default(string))) {
					#line 46 "F:\\nx3\\src\\cx\\StrTools.hx"
					with = " ";
				}
				
				#line 46 "F:\\nx3\\src\\cx\\StrTools.hx"
				int __temp_toLength30 = ( ( ! (toLength.hasValue) ) ? (((int) (32) )) : (toLength.@value) );
				if (string.Equals(str, default(string))) {
					#line 47 "F:\\nx3\\src\\cx\\StrTools.hx"
					str = replaceNull;
				}
				
				#line 48 "F:\\nx3\\src\\cx\\StrTools.hx"
				do {
					#line 48 "F:\\nx3\\src\\cx\\StrTools.hx"
					str = global::haxe.lang.Runtime.concat(str, with);
				}
				while (( str.Length < __temp_toLength30 ));
				#line 49 "F:\\nx3\\src\\cx\\StrTools.hx"
				return global::haxe.lang.StringExt.substr(str, 0, new global::haxe.lang.Null<int>(__temp_toLength30, true));
			}
			#line default
		}
		
		
		public static   global::Array<object> splitTrim(string str, string delimiter){
			unchecked {
				#line 52 "F:\\nx3\\src\\cx\\StrTools.hx"
				if (string.Equals(delimiter, default(string))) {
					#line 52 "F:\\nx3\\src\\cx\\StrTools.hx"
					delimiter = ",";
				}
				
				#line 53 "F:\\nx3\\src\\cx\\StrTools.hx"
				if (string.Equals(str, default(string))) {
					#line 53 "F:\\nx3\\src\\cx\\StrTools.hx"
					return new global::Array<object>(new object[]{});
				}
				
				#line 54 "F:\\nx3\\src\\cx\\StrTools.hx"
				global::Array<object> a = global::haxe.lang.StringExt.split(str, delimiter);
				global::Array<object> a2 = new global::Array<object>();
				{
					#line 56 "F:\\nx3\\src\\cx\\StrTools.hx"
					int _g = 0;
					#line 56 "F:\\nx3\\src\\cx\\StrTools.hx"
					while (( _g < a.length )){
						#line 56 "F:\\nx3\\src\\cx\\StrTools.hx"
						string part = global::haxe.lang.Runtime.toString(a[_g]);
						#line 56 "F:\\nx3\\src\\cx\\StrTools.hx"
						 ++ _g;
						string part2 = part.Trim();
						if (( part2.Length > 0 )) {
							#line 58 "F:\\nx3\\src\\cx\\StrTools.hx"
							a2.push(part2);
						}
						
					}
					
				}
				
				#line 60 "F:\\nx3\\src\\cx\\StrTools.hx"
				return a2;
			}
			#line default
		}
		
		
		public static   string replaceNull(string str, string with){
			unchecked {
				#line 71 "F:\\nx3\\src\\cx\\StrTools.hx"
				if (string.Equals(with, default(string))) {
					#line 71 "F:\\nx3\\src\\cx\\StrTools.hx"
					with = "-";
				}
				
				#line 71 "F:\\nx3\\src\\cx\\StrTools.hx"
				if (string.Equals(str, default(string))) {
					#line 71 "F:\\nx3\\src\\cx\\StrTools.hx"
					return with;
				}
				 else {
					#line 71 "F:\\nx3\\src\\cx\\StrTools.hx"
					return str;
				}
				
			}
			#line default
		}
		
		
		public static   string firstUpperCase(string str, global::haxe.lang.Null<bool> restToLowercase){
			unchecked {
				#line 74 "F:\\nx3\\src\\cx\\StrTools.hx"
				bool __temp_restToLowercase31 = ( ( ! (restToLowercase.hasValue) ) ? (global::haxe.lang.Runtime.toBool(true)) : (restToLowercase.@value) );
				string rest = default(string);
				#line 75 "F:\\nx3\\src\\cx\\StrTools.hx"
				if (__temp_restToLowercase31) {
					#line 75 "F:\\nx3\\src\\cx\\StrTools.hx"
					rest = global::haxe.lang.StringExt.substr(str, 1, default(global::haxe.lang.Null<int>)).ToLower();
				}
				 else {
					#line 75 "F:\\nx3\\src\\cx\\StrTools.hx"
					rest = global::haxe.lang.StringExt.substr(str, 1, default(global::haxe.lang.Null<int>));
				}
				
				#line 76 "F:\\nx3\\src\\cx\\StrTools.hx"
				return global::haxe.lang.Runtime.concat(global::haxe.lang.StringExt.substr(str, 0, new global::haxe.lang.Null<int>(1, true)).ToUpper(), rest);
			}
			#line default
		}
		
		
		public static   string afterLast(string str, string @char, global::haxe.lang.Null<bool> includeChar){
			unchecked {
				#line 79 "F:\\nx3\\src\\cx\\StrTools.hx"
				bool __temp_includeChar32 = ( ( ! (includeChar.hasValue) ) ? (global::haxe.lang.Runtime.toBool(false)) : (includeChar.@value) );
				int idx = global::haxe.lang.StringExt.lastIndexOf(str, @char, default(global::haxe.lang.Null<int>));
				if (( idx == -1 )) {
					#line 81 "F:\\nx3\\src\\cx\\StrTools.hx"
					return str;
				}
				
				#line 82 "F:\\nx3\\src\\cx\\StrTools.hx"
				if ( ! (__temp_includeChar32) ) {
					#line 82 "F:\\nx3\\src\\cx\\StrTools.hx"
					idx += @char.Length;
				}
				
				#line 83 "F:\\nx3\\src\\cx\\StrTools.hx"
				return global::haxe.lang.StringExt.substr(str, idx, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public static   double similarityCaseIgnore(string strA, string strB){
			unchecked {
				#line 87 "F:\\nx3\\src\\cx\\StrTools.hx"
				return global::cx.StrTools.similarity(strA.ToLower(), strB.ToLower());
			}
			#line default
		}
		
		
		public static   double similarityCaseBalance(string strA, string strB){
			unchecked {
				#line 91 "F:\\nx3\\src\\cx\\StrTools.hx"
				return ( (( global::cx.StrTools.similarity(strA, strB) + global::cx.StrTools.similarity(strA.ToLower(), strB.ToLower()) )) / 2 );
			}
			#line default
		}
		
		
		public static   double similarity(string strA, string strB){
			unchecked {
				#line 95 "F:\\nx3\\src\\cx\\StrTools.hx"
				if (string.Equals(strA, strB)) {
					#line 95 "F:\\nx3\\src\\cx\\StrTools.hx"
					return ((double) (1) );
				}
				
				#line 97 "F:\\nx3\\src\\cx\\StrTools.hx"
				if (( strA.Length > strB.Length )) {
					#line 98 "F:\\nx3\\src\\cx\\StrTools.hx"
					string strC = strA;
					strA = strB;
					strB = strC;
				}
				
				#line 103 "F:\\nx3\\src\\cx\\StrTools.hx"
				return global::cx.StrTools._similarity(strA, strB);
			}
			#line default
		}
		
		
		public static   double similarityAssymetric(string strShorter, string strLonger){
			unchecked {
				#line 107 "F:\\nx3\\src\\cx\\StrTools.hx"
				if (string.Equals(strShorter, strLonger)) {
					#line 107 "F:\\nx3\\src\\cx\\StrTools.hx"
					return ((double) (1) );
				}
				
				#line 108 "F:\\nx3\\src\\cx\\StrTools.hx"
				return global::cx.StrTools._similarity(strShorter, strShorter);
			}
			#line default
		}
		
		
		public static   double _similarity(string strA, string strB){
			unchecked {
				#line 112 "F:\\nx3\\src\\cx\\StrTools.hx"
				int lengthA = strA.Length;
				int lengthB = strB.Length;
				int i = 0;
				int segmentCount = 0;
				global::Array<object> segmentsInfos = new global::Array<object>();
				string segment = "";
				while (( i < lengthA )){
					#line 119 "F:\\nx3\\src\\cx\\StrTools.hx"
					string @char = global::haxe.lang.StringExt.charAt(strA, i);
					if (( global::haxe.lang.StringExt.indexOf(strB, @char, default(global::haxe.lang.Null<int>)) > -1 )) {
						#line 121 "F:\\nx3\\src\\cx\\StrTools.hx"
						segment = global::haxe.lang.Runtime.concat(segment, @char);
						if (( global::haxe.lang.StringExt.indexOf(strB, segment, default(global::haxe.lang.Null<int>)) > -1 )) {
							#line 123 "F:\\nx3\\src\\cx\\StrTools.hx"
							int segmentPosA = ( ( i - segment.Length ) + 1 );
							int segmentPosB = global::haxe.lang.StringExt.indexOf(strB, segment, default(global::haxe.lang.Null<int>));
							double positionDiff = global::System.Math.Abs(((double) (( segmentPosA - segmentPosB )) ));
							double posFactor = ( (( lengthA - positionDiff )) / lengthB );
							double lengthFactor = ( ((double) (segment.Length) ) / lengthA );
							segmentsInfos[segmentCount] = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{651087795}), new global::Array<object>(new object[]{segment}), new global::Array<int>(new int[]{2027516754}), new global::Array<double>(new double[]{( posFactor * lengthFactor )}));
						}
						 else {
							#line 130 "F:\\nx3\\src\\cx\\StrTools.hx"
							segment = "";
							segmentCount++;
							i--;
						}
						
					}
					 else {
						#line 135 "F:\\nx3\\src\\cx\\StrTools.hx"
						segment = "";
						segmentCount++;
					}
					
					#line 138 "F:\\nx3\\src\\cx\\StrTools.hx"
					i++;
				}
				
				#line 141 "F:\\nx3\\src\\cx\\StrTools.hx"
				int usedSegmentsCount = -2;
				double totalScore = 0.0;
				{
					#line 143 "F:\\nx3\\src\\cx\\StrTools.hx"
					int _g = 0;
					#line 143 "F:\\nx3\\src\\cx\\StrTools.hx"
					while (( _g < segmentsInfos.length )){
						#line 143 "F:\\nx3\\src\\cx\\StrTools.hx"
						object si = segmentsInfos[_g];
						#line 143 "F:\\nx3\\src\\cx\\StrTools.hx"
						 ++ _g;
						if (( ! (global::haxe.lang.Runtime.refEq(si, default(object))) )) {
							#line 145 "F:\\nx3\\src\\cx\\StrTools.hx"
							totalScore += ((double) (global::haxe.lang.Runtime.getField_f(si, "score", 2027516754, true)) );
							usedSegmentsCount++;
						}
						
					}
					
				}
				
				#line 150 "F:\\nx3\\src\\cx\\StrTools.hx"
				totalScore = ( totalScore - ( global::System.Math.Max(((double) (usedSegmentsCount) ), ((double) (0) )) * 0.02 ) );
				{
					#line 151 "F:\\nx3\\src\\cx\\StrTools.hx"
					double b = global::System.Math.Min(((double) (totalScore) ), ((double) (1) ));
					#line 151 "F:\\nx3\\src\\cx\\StrTools.hx"
					return global::System.Math.Max(((double) (0) ), ((double) (b) ));
				}
				
			}
			#line default
		}
		
		
		public static   bool has(string str, string substr){
			unchecked {
				#line 155 "F:\\nx3\\src\\cx\\StrTools.hx"
				return ( global::haxe.lang.StringExt.indexOf(str, substr, default(global::haxe.lang.Null<int>)) > -1 );
			}
			#line default
		}
		
		
		public static   string reverse(string @string){
			unchecked {
				#line 159 "F:\\nx3\\src\\cx\\StrTools.hx"
				string result = "";
				{
					#line 160 "F:\\nx3\\src\\cx\\StrTools.hx"
					int _g1 = 0;
					#line 160 "F:\\nx3\\src\\cx\\StrTools.hx"
					int _g = @string.Length;
					#line 160 "F:\\nx3\\src\\cx\\StrTools.hx"
					while (( _g1 < _g )){
						#line 160 "F:\\nx3\\src\\cx\\StrTools.hx"
						int i = _g1++;
						#line 160 "F:\\nx3\\src\\cx\\StrTools.hx"
						result = global::haxe.lang.Runtime.concat(global::haxe.lang.StringExt.charAt(@string, i), result);
					}
					
				}
				
				#line 161 "F:\\nx3\\src\\cx\\StrTools.hx"
				return result;
			}
			#line default
		}
		
		
		public static   string intToChar(int @int, global::haxe.lang.Null<int> offset){
			unchecked {
				#line 164 "F:\\nx3\\src\\cx\\StrTools.hx"
				int __temp_offset33 = ( ( ! (offset.hasValue) ) ? (((int) (65) )) : (offset.@value) );
				if (( @int > 9 )) {
					#line 165 "F:\\nx3\\src\\cx\\StrTools.hx"
					throw global::haxe.lang.HaxeException.wrap("int to char error");
				}
				
				#line 166 "F:\\nx3\\src\\cx\\StrTools.hx"
				if (( @int < 0 )) {
					#line 166 "F:\\nx3\\src\\cx\\StrTools.hx"
					throw global::haxe.lang.HaxeException.wrap("int to char error");
				}
				
				#line 167 "F:\\nx3\\src\\cx\\StrTools.hx"
				int c = ( @int + __temp_offset33 );
				#line 169 "F:\\nx3\\src\\cx\\StrTools.hx"
				string @char = new string(((char) (c) ), 1);
				#line 171 "F:\\nx3\\src\\cx\\StrTools.hx"
				return @char;
			}
			#line default
		}
		
		
		public static   int charToInt(string @char, global::haxe.lang.Null<int> offset){
			unchecked {
				#line 174 "F:\\nx3\\src\\cx\\StrTools.hx"
				int __temp_offset34 = ( ( ! (offset.hasValue) ) ? (((int) (65) )) : (offset.@value) );
				if (( @char.Length > 1 )) {
					#line 175 "F:\\nx3\\src\\cx\\StrTools.hx"
					throw global::haxe.lang.HaxeException.wrap("char to int error");
				}
				
				#line 176 "F:\\nx3\\src\\cx\\StrTools.hx"
				return ( global::haxe.lang.StringExt.charCodeAt(@char, 0).@value - __temp_offset34 );
			}
			#line default
		}
		
		
		public static   string numToStr(string numStr, global::haxe.lang.Null<int> offset){
			unchecked {
				#line 179 "F:\\nx3\\src\\cx\\StrTools.hx"
				int __temp_offset35 = ( ( ! (offset.hasValue) ) ? (((int) (65) )) : (offset.@value) );
				global::haxe.lang.Null<int> testParse = global::Std.parseInt(numStr);
				#line 182 "F:\\nx3\\src\\cx\\StrTools.hx"
				string result = "";
				{
					#line 183 "F:\\nx3\\src\\cx\\StrTools.hx"
					int _g1 = 0;
					#line 183 "F:\\nx3\\src\\cx\\StrTools.hx"
					int _g = numStr.Length;
					#line 183 "F:\\nx3\\src\\cx\\StrTools.hx"
					while (( _g1 < _g )){
						#line 183 "F:\\nx3\\src\\cx\\StrTools.hx"
						int i = _g1++;
						global::haxe.lang.Null<int> @int = global::Std.parseInt(global::haxe.lang.StringExt.charAt(numStr, i));
						string @char = global::cx.StrTools.intToChar(@int.@value, new global::haxe.lang.Null<int>(__temp_offset35, true));
						result = global::haxe.lang.Runtime.concat(result, @char);
					}
					
				}
				
				#line 189 "F:\\nx3\\src\\cx\\StrTools.hx"
				return result;
			}
			#line default
		}
		
		
		public static   string strToNum(string str, global::haxe.lang.Null<int> offset){
			unchecked {
				#line 192 "F:\\nx3\\src\\cx\\StrTools.hx"
				int __temp_offset36 = ( ( ! (offset.hasValue) ) ? (((int) (65) )) : (offset.@value) );
				string result = "";
				{
					#line 194 "F:\\nx3\\src\\cx\\StrTools.hx"
					int _g1 = 0;
					#line 194 "F:\\nx3\\src\\cx\\StrTools.hx"
					int _g = str.Length;
					#line 194 "F:\\nx3\\src\\cx\\StrTools.hx"
					while (( _g1 < _g )){
						#line 194 "F:\\nx3\\src\\cx\\StrTools.hx"
						int i = _g1++;
						string @char = global::haxe.lang.StringExt.charAt(str, i);
						int @int = global::cx.StrTools.charToInt(@char, new global::haxe.lang.Null<int>(__temp_offset36, true));
						result = global::haxe.lang.Runtime.concat(result, global::Std.@string(@int));
					}
					
				}
				
				#line 200 "F:\\nx3\\src\\cx\\StrTools.hx"
				return result;
			}
			#line default
		}
		
		
		public static   string rotate(string str, global::haxe.lang.Null<int> positions){
			unchecked {
				#line 208 "F:\\nx3\\src\\cx\\StrTools.hx"
				int __temp_positions37 = ( ( ! (positions.hasValue) ) ? (((int) (1) )) : (positions.@value) );
				string result = str;
				{
					#line 210 "F:\\nx3\\src\\cx\\StrTools.hx"
					int _g = 0;
					#line 210 "F:\\nx3\\src\\cx\\StrTools.hx"
					while (( _g < __temp_positions37 )){
						#line 210 "F:\\nx3\\src\\cx\\StrTools.hx"
						int i = _g++;
						result = global::haxe.lang.Runtime.concat(global::haxe.lang.StringExt.substr(result, 1, new global::haxe.lang.Null<int>(result.Length, true)), global::haxe.lang.StringExt.substr(result, 0, new global::haxe.lang.Null<int>(1, true)));
					}
					
				}
				
				#line 213 "F:\\nx3\\src\\cx\\StrTools.hx"
				return result;
			}
			#line default
		}
		
		
		public static   string rotateBack(string str, global::haxe.lang.Null<int> positions){
			unchecked {
				#line 216 "F:\\nx3\\src\\cx\\StrTools.hx"
				int __temp_positions38 = ( ( ! (positions.hasValue) ) ? (((int) (1) )) : (positions.@value) );
				string result = str;
				{
					#line 218 "F:\\nx3\\src\\cx\\StrTools.hx"
					int _g = 0;
					#line 218 "F:\\nx3\\src\\cx\\StrTools.hx"
					while (( _g < __temp_positions38 )){
						#line 218 "F:\\nx3\\src\\cx\\StrTools.hx"
						int i = _g++;
						result = global::haxe.lang.Runtime.concat(global::haxe.lang.StringExt.substr(result, -1, default(global::haxe.lang.Null<int>)), global::haxe.lang.StringExt.substr(result, 0, new global::haxe.lang.Null<int>(( result.Length - 1 ), true)));
					}
					
				}
				
				#line 221 "F:\\nx3\\src\\cx\\StrTools.hx"
				return result;
			}
			#line default
		}
		
		
		public static   string toLatin1(string str){
			unchecked {
				#line 245 "F:\\nx3\\src\\cx\\StrTools.hx"
				return global::haxe.Utf8.decode(str);
			}
			#line default
		}
		
		
		public static   int lastIdxOf(string str, string search, global::haxe.lang.Null<int> lastPos){
			unchecked {
				#line 251 "F:\\nx3\\src\\cx\\StrTools.hx"
				int __temp_lastPos39 = ( ( ! (lastPos.hasValue) ) ? (((int) (0) )) : (lastPos.@value) );
				if (( __temp_lastPos39 == 0 )) {
					#line 252 "F:\\nx3\\src\\cx\\StrTools.hx"
					return global::haxe.lang.StringExt.lastIndexOf(str, search, default(global::haxe.lang.Null<int>));
				}
				
				#line 253 "F:\\nx3\\src\\cx\\StrTools.hx"
				{
					#line 253 "F:\\nx3\\src\\cx\\StrTools.hx"
					int _g = 0;
					#line 253 "F:\\nx3\\src\\cx\\StrTools.hx"
					while (( _g < __temp_lastPos39 )){
						#line 253 "F:\\nx3\\src\\cx\\StrTools.hx"
						int i = _g++;
						str = global::haxe.lang.StringExt.substr(str, 0, new global::haxe.lang.Null<int>(global::haxe.lang.StringExt.lastIndexOf(str, search, default(global::haxe.lang.Null<int>)), true));
					}
					
				}
				
				#line 256 "F:\\nx3\\src\\cx\\StrTools.hx"
				return global::haxe.lang.StringExt.lastIndexOf(str, search, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public static   int toInt(string str){
			unchecked {
				#line 259 "F:\\nx3\\src\\cx\\StrTools.hx"
				return global::Std.parseInt(str).@value;
			}
			#line default
		}
		
		
		public static   double toFloat(string str){
			unchecked {
				#line 260 "F:\\nx3\\src\\cx\\StrTools.hx"
				return global::Std.parseFloat(str);
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 9 "F:\\nx3\\src\\cx\\StrTools.hx"
				return new global::cx.StrTools(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 9 "F:\\nx3\\src\\cx\\StrTools.hx"
				return new global::cx.StrTools();
			}
			#line default
		}
		
		
	}
}


