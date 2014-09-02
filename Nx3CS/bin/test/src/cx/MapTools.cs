
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace cx{
	public  class MapTools : global::haxe.lang.HxObject {
		public    MapTools(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 7 "F:\\nx3\\src\\cx\\MapTools.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    MapTools(){
			unchecked {
				#line 7 "F:\\nx3\\src\\cx\\MapTools.hx"
				global::cx.MapTools.__hx_ctor_cx_MapTools(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_cx_MapTools(global::cx.MapTools __temp_me24){
			unchecked {
				#line 7 "F:\\nx3\\src\\cx\\MapTools.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static   global::Array<T> keysToArray<T>(object it){
			unchecked {
				#line 10 "F:\\nx3\\src\\cx\\MapTools.hx"
				global::Array<T> result = new global::Array<T>(new T[]{});
				{
					#line 11 "F:\\nx3\\src\\cx\\MapTools.hx"
					object __temp_iterator151 = it;
					#line 11 "F:\\nx3\\src\\cx\\MapTools.hx"
					while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator151, "hasNext", 407283053, default(global::Array)))){
						#line 11 "F:\\nx3\\src\\cx\\MapTools.hx"
						T v = global::haxe.lang.Runtime.genericCast<T>(global::haxe.lang.Runtime.callField(__temp_iterator151, "next", 1224901875, default(global::Array)));
						#line 11 "F:\\nx3\\src\\cx\\MapTools.hx"
						result.push(v);
					}
					
				}
				
				#line 12 "F:\\nx3\\src\\cx\\MapTools.hx"
				return result;
			}
			#line default
		}
		
		
		public static   global::Array<T> sortarray<T>(global::Array<T> a){
			unchecked {
				#line 17 "F:\\nx3\\src\\cx\\MapTools.hx"
				a.sort(new global::cx.MapTools_sortarray_17__Fun<T>());
				return a;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 7 "F:\\nx3\\src\\cx\\MapTools.hx"
				return new global::cx.MapTools(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 7 "F:\\nx3\\src\\cx\\MapTools.hx"
				return new global::cx.MapTools();
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace cx{
	public  class MapTools_sortarray_17__Fun<T> : global::haxe.lang.Function {
		public    MapTools_sortarray_17__Fun() : base(2, 1){
			unchecked {
			}
			#line default
		}
		
		
		public override   double __hx_invoke2_f(double __fn_float1, object __fn_dyn1, double __fn_float2, object __fn_dyn2){
			unchecked {
				#line 17 "F:\\nx3\\src\\cx\\MapTools.hx"
				T b = ( (global::haxe.lang.Runtime.eq(__fn_dyn2, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.genericCast<T>(((object) (__fn_float2) ))) : (global::haxe.lang.Runtime.genericCast<T>(__fn_dyn2)) );
				#line 17 "F:\\nx3\\src\\cx\\MapTools.hx"
				T a1 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.genericCast<T>(((object) (__fn_float1) ))) : (global::haxe.lang.Runtime.genericCast<T>(__fn_dyn1)) );
				#line 17 "F:\\nx3\\src\\cx\\MapTools.hx"
				return ((double) (global::Reflect.compare<T>(a1, b)) );
			}
			#line default
		}
		
		
	}
}


