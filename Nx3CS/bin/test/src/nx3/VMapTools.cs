
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VMapTools : global::haxe.lang.HxObject {
		public    VMapTools(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\VMapTools.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VMapTools(){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\VMapTools.hx"
				global::nx3.VMapTools.__hx_ctor_nx3_VMapTools(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VMapTools(global::nx3.VMapTools __temp_me129){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\VMapTools.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static   global::Array<T> keysToArray<T>(object it){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VMapTools.hx"
				global::Array<T> result = new global::Array<T>(new T[]{});
				{
					#line 11 "F:\\nx3\\src\\nx3\\VMapTools.hx"
					object __temp_iterator173 = it;
					#line 11 "F:\\nx3\\src\\nx3\\VMapTools.hx"
					while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator173, "hasNext", 407283053, default(global::Array)))){
						#line 11 "F:\\nx3\\src\\nx3\\VMapTools.hx"
						T v = global::haxe.lang.Runtime.genericCast<T>(global::haxe.lang.Runtime.callField(__temp_iterator173, "next", 1224901875, default(global::Array)));
						#line 11 "F:\\nx3\\src\\nx3\\VMapTools.hx"
						result.push(v);
					}
					
				}
				
				#line 12 "F:\\nx3\\src\\nx3\\VMapTools.hx"
				return result;
			}
			#line default
		}
		
		
		public static   global::Array<T> sortarray<T>(global::Array<T> a){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\VMapTools.hx"
				a.sort(new global::nx3.VMapTools_sortarray_17__Fun<T>());
				return a;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\VMapTools.hx"
				return new global::nx3.VMapTools(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\VMapTools.hx"
				return new global::nx3.VMapTools();
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VMapTools_sortarray_17__Fun<T> : global::haxe.lang.Function {
		public    VMapTools_sortarray_17__Fun() : base(2, 1){
			unchecked {
			}
			#line default
		}
		
		
		public override   double __hx_invoke2_f(double __fn_float1, object __fn_dyn1, double __fn_float2, object __fn_dyn2){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\VMapTools.hx"
				T b = ( (global::haxe.lang.Runtime.eq(__fn_dyn2, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.genericCast<T>(((object) (__fn_float2) ))) : (global::haxe.lang.Runtime.genericCast<T>(__fn_dyn2)) );
				#line 17 "F:\\nx3\\src\\nx3\\VMapTools.hx"
				T a1 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.genericCast<T>(((object) (__fn_float1) ))) : (global::haxe.lang.Runtime.genericCast<T>(__fn_dyn1)) );
				#line 17 "F:\\nx3\\src\\nx3\\VMapTools.hx"
				return ((double) (global::Reflect.compare<T>(a1, b)) );
			}
			#line default
		}
		
		
	}
}


