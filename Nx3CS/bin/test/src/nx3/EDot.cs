
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class EDot : global::haxe.lang.Enum {
		static EDot() {
			#line 7 "F:\\nx3\\src\\nx3\\EDot.hx"
			global::nx3.EDot.constructs = new global::Array<object>(new object[]{"Normal", "Double"});
		}
		public    EDot(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    EDot(int index, global::Array<object> @params) : base(index, @params){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::Array<object> constructs;
		
		public static   global::nx3.EDot Normal(int level){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\EDot.hx"
				return new global::nx3.EDot(((int) (0) ), ((global::Array<object>) (new global::Array<object>(new object[]{level})) ));
			}
			#line default
		}
		
		
		public static   global::nx3.EDot Double(int level){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\EDot.hx"
				return new global::nx3.EDot(((int) (1) ), ((global::Array<object>) (new global::Array<object>(new object[]{level})) ));
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\EDot.hx"
				return new global::nx3.EDot(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\EDot.hx"
				return new global::nx3.EDot(((int) (global::haxe.lang.Runtime.toInt(arr[0])) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[1]) ))) ));
			}
			#line default
		}
		
		
	}
}


