
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace cx{
	public  class ArrayTools : global::haxe.lang.HxObject {
		public    ArrayTools(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 14 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    ArrayTools(){
			unchecked {
				#line 14 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				global::cx.ArrayTools.__hx_ctor_cx_ArrayTools(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_cx_ArrayTools(global::cx.ArrayTools __temp_me22){
			unchecked {
				#line 14 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static   global::haxe.lang.Null<T> next<T>(global::Array<T> a, T item){
			unchecked {
				#line 19 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				int idx = a.indexOf(item, default(global::haxe.lang.Null<int>));
				if (( idx == -1 )) {
					#line 20 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					return default(global::haxe.lang.Null<T>);
				}
				
				#line 21 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				if (( idx == ( a.length - 1 ) )) {
					#line 21 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					return default(global::haxe.lang.Null<T>);
				}
				
				#line 22 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return new global::haxe.lang.Null<T>(a[( idx + 1 )], true);
			}
			#line default
		}
		
		
		public static   global::haxe.lang.Null<T> prev<T>(global::Array<T> a, T item){
			unchecked {
				#line 27 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				int idx = a.indexOf(item, default(global::haxe.lang.Null<int>));
				if (( idx <= 0 )) {
					#line 28 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					return default(global::haxe.lang.Null<T>);
				}
				
				#line 29 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return new global::haxe.lang.Null<T>(a[( idx - 1 )], true);
			}
			#line default
		}
		
		
		public static   bool has<T>(global::Array<T> a, T item){
			unchecked {
				#line 36 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return ( a.indexOf(item, default(global::haxe.lang.Null<int>)) != -1 );
			}
			#line default
		}
		
		
		public static   global::haxe.lang.Null<T> indexOrNull<T>(global::Array<T> a, int idx){
			unchecked {
				#line 42 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				if (( ( idx < 0 ) || ( idx > ( a.length - 1 ) ) )) {
					#line 42 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					return default(global::haxe.lang.Null<T>);
				}
				 else {
					#line 42 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					return new global::haxe.lang.Null<T>(a[idx], true);
				}
				
			}
			#line default
		}
		
		
		public static   T indexOrValue<T>(global::Array<T> a, int idx, T fallbackValue){
			unchecked {
				#line 47 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				if ((( (( ( idx < 0 ) || ( idx > ( a.length - 1 ) ) )) ? (default(global::haxe.lang.Null<T>)) : (new global::haxe.lang.Null<T>(a[idx], true)) )).hasValue) {
					#line 47 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					return a[idx];
				}
				 else {
					#line 47 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					return fallbackValue;
				}
				
			}
			#line default
		}
		
		
		public static   bool @equals<T>(global::Array<T> a, global::Array<T> b){
			unchecked {
				#line 53 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return string.Equals(a.toString(), b.toString());
			}
			#line default
		}
		
		
		public static   global::Array<T> unique<T>(global::Array<T> arr){
			unchecked {
				#line 57 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				global::Array<T> result = new global::Array<T>();
				{
					#line 58 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					int _g = 0;
					#line 58 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					while (( _g < arr.length )){
						#line 58 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						T item = arr[_g];
						#line 58 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						 ++ _g;
						#line 58 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						if ( ! (global::Lambda.has<T>(result, item)) ) {
							#line 58 "F:\\nx3\\src\\cx\\ArrayTools.hx"
							result.push(item);
						}
						
					}
					
				}
				
				#line 59 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				result.sort(new global::cx.ArrayTools_unique_59__Fun<T>());
				return result;
			}
			#line default
		}
		
		
		public static   global::Array<T> fromIterator<T>(object it){
			unchecked {
				#line 64 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				global::Array<T> result = new global::Array<T>(new T[]{});
				{
					#line 65 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					object __temp_iterator161 = it;
					#line 65 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator161, "hasNext", 407283053, default(global::Array)))){
						#line 65 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						T v = global::haxe.lang.Runtime.genericCast<T>(global::haxe.lang.Runtime.callField(__temp_iterator161, "next", 1224901875, default(global::Array)));
						#line 65 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						result.push(v);
					}
					
				}
				
				#line 66 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return result;
			}
			#line default
		}
		
		
		public static   global::Array<T> fromIterables<T>(object it){
			unchecked {
				#line 70 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return global::cx.ArrayTools.fromIterator<T>(((object) (global::haxe.lang.Runtime.callField(it, "iterator", 328878574, default(global::Array))) ));
			}
			#line default
		}
		
		
		public static   global::Array<T> fromHashKeys<T>(object it){
			unchecked {
				#line 74 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return global::cx.ArrayTools.fromIterator<T>(it);
			}
			#line default
		}
		
		
		public static   bool allNull<T>(global::Array<T> it){
			unchecked {
				#line 79 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				{
					#line 79 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					int _g = 0;
					#line 79 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					while (( _g < it.length )){
						#line 79 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						T v = it[_g];
						#line 79 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						 ++ _g;
						#line 79 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						if (( ! (global::haxe.lang.Runtime.eq(v, default(T))) )) {
							#line 79 "F:\\nx3\\src\\cx\\ArrayTools.hx"
							return false;
						}
						
					}
					
				}
				
				#line 80 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return true;
			}
			#line default
		}
		
		
		public static   bool doOverlap(global::Array array1, global::Array array2){
			unchecked {
				#line 96 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				{
					#line 96 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					int _g = 0;
					#line 96 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					while (( global::haxe.lang.Runtime.compare(_g, ((int) (global::haxe.lang.Runtime.getField_f(array1, "length", 520590566, true)) )) < 0 )){
						#line 96 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						object item = array1[_g];
						#line 96 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						 ++ _g;
						if (global::Lambda.has<object>(array2, item)) {
							#line 97 "F:\\nx3\\src\\cx\\ArrayTools.hx"
							return true;
						}
						
					}
					
				}
				
				#line 99 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return false;
			}
			#line default
		}
		
		
		public static   global::Array<T> overlap<T>(global::Array<T> array1, global::Array<T> array2){
			unchecked {
				#line 102 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				global::Array<object> array21 = new global::Array<object>(new object[]{array2});
				return global::Lambda.array<T>(array1.filter(new global::cx.ArrayTools_overlap_103__Fun<T>(((global::Array<object>) (array21) ))));
			}
			#line default
		}
		
		
		public static   global::Array<T> diff<T>(global::Array<T> array1, global::Array<T> array2){
			unchecked {
				#line 111 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				global::Array<T> result = new global::Array<T>();
				#line 113 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				{
					#line 113 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					int _g = 0;
					#line 113 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					while (( _g < array1.length )){
						#line 113 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						T item = array1[_g];
						#line 113 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						 ++ _g;
						if ( ! (global::Lambda.has<T>(array2, item)) ) {
							#line 114 "F:\\nx3\\src\\cx\\ArrayTools.hx"
							result.push(item);
						}
						
					}
					
				}
				
				#line 116 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				{
					#line 116 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					int _g1 = 0;
					#line 116 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					while (( _g1 < array2.length )){
						#line 116 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						T item1 = array2[_g1];
						#line 116 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						 ++ _g1;
						if ( ! (global::Lambda.has<T>(array1, item1)) ) {
							#line 117 "F:\\nx3\\src\\cx\\ArrayTools.hx"
							result.push(item1);
						}
						
					}
					
				}
				
				#line 119 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return result;
			}
			#line default
		}
		
		
		public static   T first<T>(global::Array<T> array){
			unchecked {
				#line 124 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return array[0];
			}
			#line default
		}
		
		
		public static   bool isFirst<T>(global::Array<T> array, T item){
			unchecked {
				#line 128 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return global::haxe.lang.Runtime.eq(array[0], item);
			}
			#line default
		}
		
		
		public static   T last<T>(global::Array<T> array){
			unchecked {
				#line 133 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return array[( array.length - 1 )];
			}
			#line default
		}
		
		
		public static   bool isLast<T>(global::Array<T> array, T item){
			unchecked {
				#line 137 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return global::haxe.lang.Runtime.eq(array[( array.length - 1 )], item);
			}
			#line default
		}
		
		
		public static   int index<T>(global::Array<T> array, T item){
			unchecked {
				#line 141 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return global::Lambda.indexOf<T>(array, item);
			}
			#line default
		}
		
		
		public static   T second<T>(global::Array<T> array){
			unchecked {
				#line 145 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return array[1];
			}
			#line default
		}
		
		
		public static   T third<T>(global::Array<T> array){
			unchecked {
				#line 149 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return array[2];
			}
			#line default
		}
		
		
		public static   T fourth<T>(global::Array<T> array){
			unchecked {
				#line 153 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return array[3];
			}
			#line default
		}
		
		
		public static   T fifth<T>(global::Array<T> array){
			unchecked {
				#line 157 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return array[4];
			}
			#line default
		}
		
		
		public static   T sixth<T>(global::Array<T> array){
			unchecked {
				#line 161 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return array[5];
			}
			#line default
		}
		
		
		public static   T seventh<T>(global::Array<T> array){
			unchecked {
				#line 165 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return array[6];
			}
			#line default
		}
		
		
		public static   T eighth<T>(global::Array<T> array){
			unchecked {
				#line 169 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return array[7];
			}
			#line default
		}
		
		
		public static   T nineth<T>(global::Array<T> array){
			unchecked {
				#line 173 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return array[8];
			}
			#line default
		}
		
		
		public static   global::Array<T> shuffle<T>(global::Array<T> a){
			unchecked {
				#line 179 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				global::Array<int> t = global::cx.ArrayTools.range(a.length, default(global::haxe.lang.Null<int>), default(global::haxe.lang.Null<int>));
				global::Array<T> arr = new global::Array<T>(new T[]{});
				while (( t.length > 0 )){
					#line 183 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					int pos = global::Std.random(t.length);
					int index = t[pos];
					t.splice(pos, 1);
					arr.push(a[index]);
				}
				
				#line 188 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return arr;
			}
			#line default
		}
		
		
		public static   int countItem<T>(global::Array<T> a, T item){
			unchecked {
				#line 193 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				int cnt = 0;
				{
					#line 194 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					int _g = 0;
					#line 194 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					while (( _g < a.length )){
						#line 194 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						T ai = a[_g];
						#line 194 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						 ++ _g;
						if (global::haxe.lang.Runtime.eq(ai, item)) {
							#line 195 "F:\\nx3\\src\\cx\\ArrayTools.hx"
							cnt++;
						}
						
					}
					
				}
				
				#line 197 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return cnt;
			}
			#line default
		}
		
		
		public static   global::Array<T> sorta<T>(global::Array<T> a){
			unchecked {
				#line 203 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				a.sort(new global::cx.ArrayTools_sorta_203__Fun<T>());
				return a;
			}
			#line default
		}
		
		
		public static   global::Array<int> range(int start, global::haxe.lang.Null<int> stop, global::haxe.lang.Null<int> step){
			unchecked {
				#line 210 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				int __temp_step21 = ( ( ! (step.hasValue) ) ? (((int) (1) )) : (step.@value) );
				if ( ! (stop.hasValue) ) {
					#line 213 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					stop = new global::haxe.lang.Null<int>(start, true);
					start = 0;
				}
				
				#line 216 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				if (( ( ((double) ((( stop.@value - start ))) ) / __temp_step21 ) == global::Math.POSITIVE_INFINITY )) {
					#line 216 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					throw global::haxe.lang.HaxeException.wrap("infinite range");
				}
				
				#line 217 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				global::Array<int> range = new global::Array<int>(new int[]{});
				#line 217 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				int i = -1;
				#line 217 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				int j = default(int);
				if (( __temp_step21 < 0 )) {
					#line 219 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					while (( (j = ( start + ( __temp_step21 *  ++ i ) )) > stop.@value )){
						#line 219 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						range.push(j);
					}
					
				}
				 else {
					#line 221 "F:\\nx3\\src\\cx\\ArrayTools.hx"
					while (( (j = ( start + ( __temp_step21 *  ++ i ) )) < stop.@value )){
						#line 221 "F:\\nx3\\src\\cx\\ArrayTools.hx"
						range.push(j);
					}
					
				}
				
				#line 222 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return range;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 14 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return new global::cx.ArrayTools(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 14 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return new global::cx.ArrayTools();
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace cx{
	public  class ArrayTools_unique_59__Fun<T> : global::haxe.lang.Function {
		public    ArrayTools_unique_59__Fun() : base(2, 1){
			unchecked {
			}
			#line default
		}
		
		
		public override   double __hx_invoke2_f(double __fn_float1, object __fn_dyn1, double __fn_float2, object __fn_dyn2){
			unchecked {
				#line 59 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				T b = ( (global::haxe.lang.Runtime.eq(__fn_dyn2, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.genericCast<T>(((object) (__fn_float2) ))) : (global::haxe.lang.Runtime.genericCast<T>(__fn_dyn2)) );
				#line 59 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				T a = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.genericCast<T>(((object) (__fn_float1) ))) : (global::haxe.lang.Runtime.genericCast<T>(__fn_dyn1)) );
				#line 59 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return ((double) (global::Reflect.compare<T>(a, b)) );
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace cx{
	public  class ArrayTools_overlap_103__Fun<T> : global::haxe.lang.Function {
		public    ArrayTools_overlap_103__Fun(global::Array<object> array21) : base(1, 0){
			unchecked {
				#line 103 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				this.array21 = array21;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 103 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				T value1 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.genericCast<T>(((object) (__fn_float1) ))) : (global::haxe.lang.Runtime.genericCast<T>(__fn_dyn1)) );
				bool ret = global::Lambda.has<T>(((global::Array<T>) (global::Array<object>.__hx_cast<T>(((global::Array) (this.array21[0]) ))) ), value1);
				return ret;
			}
			#line default
		}
		
		
		public  global::Array<object> array21;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace cx{
	public  class ArrayTools_sorta_203__Fun<T> : global::haxe.lang.Function {
		public    ArrayTools_sorta_203__Fun() : base(2, 1){
			unchecked {
			}
			#line default
		}
		
		
		public override   double __hx_invoke2_f(double __fn_float1, object __fn_dyn1, double __fn_float2, object __fn_dyn2){
			unchecked {
				#line 203 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				T b = ( (global::haxe.lang.Runtime.eq(__fn_dyn2, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.genericCast<T>(((object) (__fn_float2) ))) : (global::haxe.lang.Runtime.genericCast<T>(__fn_dyn2)) );
				#line 203 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				T a1 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.genericCast<T>(((object) (__fn_float1) ))) : (global::haxe.lang.Runtime.genericCast<T>(__fn_dyn1)) );
				#line 203 "F:\\nx3\\src\\cx\\ArrayTools.hx"
				return ((double) (global::Reflect.compare<T>(a1, b)) );
			}
			#line default
		}
		
		
	}
}


