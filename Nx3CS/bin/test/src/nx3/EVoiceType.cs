
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class EVoiceType : global::haxe.lang.Enum {
		static EVoiceType() {
			#line 8 "F:\\nx3\\src\\nx3\\EVoiceType.hx"
			global::nx3.EVoiceType.constructs = new global::Array<object>(new object[]{"Normal", "Barpause"});
			#line 10 "F:\\nx3\\src\\nx3\\EVoiceType.hx"
			global::nx3.EVoiceType.Normal = new global::nx3.EVoiceType(((int) (0) ), ((global::Array<object>) (new global::Array<object>(new object[]{})) ));
		}
		public    EVoiceType(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    EVoiceType(int index, global::Array<object> @params) : base(index, @params){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::Array<object> constructs;
		
		public static  global::nx3.EVoiceType Normal;
		
		public static   global::nx3.EVoiceType Barpause(int level){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\EVoiceType.hx"
				return new global::nx3.EVoiceType(((int) (1) ), ((global::Array<object>) (new global::Array<object>(new object[]{level})) ));
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\EVoiceType.hx"
				return new global::nx3.EVoiceType(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\EVoiceType.hx"
				return new global::nx3.EVoiceType(((int) (global::haxe.lang.Runtime.toInt(arr[0])) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[1]) ))) ));
			}
			#line default
		}
		
		
	}
}


