
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PSystemStatus : global::haxe.lang.Enum {
		static PSystemStatus() {
			#line 7 "F:\\nx3\\src\\nx3\\PSystemStatus.hx"
			global::nx3.PSystemStatus.constructs = new global::Array<object>(new object[]{"Ok", "Problem"});
			#line 9 "F:\\nx3\\src\\nx3\\PSystemStatus.hx"
			global::nx3.PSystemStatus.Ok = new global::nx3.PSystemStatus(((int) (0) ), ((global::Array<object>) (new global::Array<object>(new object[]{})) ));
		}
		public    PSystemStatus(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    PSystemStatus(int index, global::Array<object> @params) : base(index, @params){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::Array<object> constructs;
		
		public static  global::nx3.PSystemStatus Ok;
		
		public static   global::nx3.PSystemStatus Problem(int code, string msg){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PSystemStatus.hx"
				return new global::nx3.PSystemStatus(((int) (1) ), ((global::Array<object>) (new global::Array<object>(new object[]{code, msg})) ));
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PSystemStatus.hx"
				return new global::nx3.PSystemStatus(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PSystemStatus.hx"
				return new global::nx3.PSystemStatus(((int) (global::haxe.lang.Runtime.toInt(arr[0])) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[1]) ))) ));
			}
			#line default
		}
		
		
	}
}


