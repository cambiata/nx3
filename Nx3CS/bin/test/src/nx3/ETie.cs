
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class ETie : global::haxe.lang.Enum {
		static ETie() {
			#line 8 "F:\\nx3\\src\\nx3\\ETie.hx"
			global::nx3.ETie.constructs = new global::Array<object>(new object[]{"Tie", "Gliss"});
		}
		public    ETie(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    ETie(int index, global::Array<object> @params) : base(index, @params){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::Array<object> constructs;
		
		public static   global::nx3.ETie Tie(global::nx3.EDirectionUAD direction, int level){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\ETie.hx"
				return new global::nx3.ETie(((int) (0) ), ((global::Array<object>) (new global::Array<object>(new object[]{direction, level})) ));
			}
			#line default
		}
		
		
		public static   global::nx3.ETie Gliss(global::nx3.EDirectionUAD direction, int levelLeft, int levelRight){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\ETie.hx"
				return new global::nx3.ETie(((int) (1) ), ((global::Array<object>) (new global::Array<object>(new object[]{direction, levelLeft, levelRight})) ));
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\ETie.hx"
				return new global::nx3.ETie(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\ETie.hx"
				return new global::nx3.ETie(((int) (global::haxe.lang.Runtime.toInt(arr[0])) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[1]) ))) ));
			}
			#line default
		}
		
		
	}
}


