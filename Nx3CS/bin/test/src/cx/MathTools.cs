
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace cx{
	public  class MathTools : global::haxe.lang.HxObject {
		public    MathTools(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 9 "F:\\nx3\\src\\cx\\MathTools.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    MathTools(){
			unchecked {
				#line 9 "F:\\nx3\\src\\cx\\MathTools.hx"
				global::cx.MathTools.__hx_ctor_cx_MathTools(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_cx_MathTools(global::cx.MathTools __temp_me27){
			unchecked {
				#line 9 "F:\\nx3\\src\\cx\\MathTools.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static   double floatFromString(string str, string comma){
			unchecked {
				#line 13 "F:\\nx3\\src\\cx\\MathTools.hx"
				if (string.Equals(comma, default(string))) {
					#line 13 "F:\\nx3\\src\\cx\\MathTools.hx"
					comma = ",";
				}
				
				#line 14 "F:\\nx3\\src\\cx\\MathTools.hx"
				str = global::StringTools.replace(str, ",", ".");
				return global::Std.parseFloat(str);
			}
			#line default
		}
		
		
		public static   string floatToString(double val, string comma){
			unchecked {
				#line 19 "F:\\nx3\\src\\cx\\MathTools.hx"
				if (string.Equals(comma, default(string))) {
					#line 19 "F:\\nx3\\src\\cx\\MathTools.hx"
					comma = ",";
				}
				
				#line 20 "F:\\nx3\\src\\cx\\MathTools.hx"
				string result = global::Std.@string(val);
				if ( ! (string.Equals(comma, ".")) ) {
					#line 21 "F:\\nx3\\src\\cx\\MathTools.hx"
					result = global::StringTools.replace(result, ".", comma);
				}
				
				#line 22 "F:\\nx3\\src\\cx\\MathTools.hx"
				return result;
			}
			#line default
		}
		
		
		public static   bool floatEquals(double a, double b){
			unchecked {
				#line 27 "F:\\nx3\\src\\cx\\MathTools.hx"
				return ( global::System.Math.Abs(((double) (( a - b )) )) <= 0.00001 );
			}
			#line default
		}
		
		
		public static   bool inRange(double min, double @value, double max){
			unchecked {
				#line 31 "F:\\nx3\\src\\cx\\MathTools.hx"
				if (( @value < min )) {
					#line 31 "F:\\nx3\\src\\cx\\MathTools.hx"
					return false;
				}
				
				#line 32 "F:\\nx3\\src\\cx\\MathTools.hx"
				if (( @value > max )) {
					#line 32 "F:\\nx3\\src\\cx\\MathTools.hx"
					return false;
				}
				
				#line 33 "F:\\nx3\\src\\cx\\MathTools.hx"
				return true;
			}
			#line default
		}
		
		
		public static   double floatRange(double min, double @value, double max){
			unchecked {
				#line 37 "F:\\nx3\\src\\cx\\MathTools.hx"
				if (( @value < min )) {
					#line 37 "F:\\nx3\\src\\cx\\MathTools.hx"
					return min;
				}
				
				#line 38 "F:\\nx3\\src\\cx\\MathTools.hx"
				if (( @value > max )) {
					#line 38 "F:\\nx3\\src\\cx\\MathTools.hx"
					return max;
				}
				
				#line 39 "F:\\nx3\\src\\cx\\MathTools.hx"
				return @value;
			}
			#line default
		}
		
		
		public static   double round2(double number, global::haxe.lang.Null<int> precision){
			unchecked {
				#line 42 "F:\\nx3\\src\\cx\\MathTools.hx"
				int __temp_precision26 = ( ( ! (precision.hasValue) ) ? (((int) (6) )) : (precision.@value) );
				number = ( number * global::System.Math.Pow(((double) (10) ), ((double) (__temp_precision26) )) );
				number = ( global::Math.round(number) / global::System.Math.Pow(((double) (10) ), ((double) (__temp_precision26) )) );
				return number;
			}
			#line default
		}
		
		
		public static   int intRange(int min, int @value, int max){
			unchecked {
				#line 49 "F:\\nx3\\src\\cx\\MathTools.hx"
				if (( @value < min )) {
					#line 49 "F:\\nx3\\src\\cx\\MathTools.hx"
					return min;
				}
				
				#line 50 "F:\\nx3\\src\\cx\\MathTools.hx"
				if (( @value > max )) {
					#line 50 "F:\\nx3\\src\\cx\\MathTools.hx"
					return max;
				}
				
				#line 51 "F:\\nx3\\src\\cx\\MathTools.hx"
				return @value;
			}
			#line default
		}
		
		
		public static   int intMin(int a, int b){
			unchecked {
				#line 55 "F:\\nx3\\src\\cx\\MathTools.hx"
				if (( a < b )) {
					#line 55 "F:\\nx3\\src\\cx\\MathTools.hx"
					return a;
				}
				
				#line 56 "F:\\nx3\\src\\cx\\MathTools.hx"
				return b;
			}
			#line default
		}
		
		
		public static   int intMax(int a, int b){
			unchecked {
				#line 60 "F:\\nx3\\src\\cx\\MathTools.hx"
				if (( a > b )) {
					#line 60 "F:\\nx3\\src\\cx\\MathTools.hx"
					return a;
				}
				
				#line 61 "F:\\nx3\\src\\cx\\MathTools.hx"
				return b;
			}
			#line default
		}
		
		
		public static   double ipol(double a, double b, double delta){
			unchecked {
				#line 65 "F:\\nx3\\src\\cx\\MathTools.hx"
				return ( ( delta * (( b - a )) ) + a );
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 9 "F:\\nx3\\src\\cx\\MathTools.hx"
				return new global::cx.MathTools(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 9 "F:\\nx3\\src\\cx\\MathTools.hx"
				return new global::cx.MathTools();
			}
			#line default
		}
		
		
	}
}


