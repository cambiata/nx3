
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class ENoteAttributes : global::haxe.lang.Enum {
		static ENoteAttributes() {
			#line 7 "F:\\nx3\\src\\nx3\\ENoteAttributes.hx"
			global::nx3.ENoteAttributes.constructs = new global::Array<object>(new object[]{"Arpeggio", "Clef"});
		}
		public    ENoteAttributes(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    ENoteAttributes(int index, global::Array<object> @params) : base(index, @params){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::Array<object> constructs;
		
		public static   global::nx3.ENoteAttributes Arpeggio(int top, int bottomY){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\ENoteAttributes.hx"
				return new global::nx3.ENoteAttributes(((int) (0) ), ((global::Array<object>) (new global::Array<object>(new object[]{top, bottomY})) ));
			}
			#line default
		}
		
		
		public static   global::nx3.ENoteAttributes Clef(global::nx3.EClef variant){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\ENoteAttributes.hx"
				return new global::nx3.ENoteAttributes(((int) (1) ), ((global::Array<object>) (new global::Array<object>(new object[]{variant})) ));
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\ENoteAttributes.hx"
				return new global::nx3.ENoteAttributes(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\ENoteAttributes.hx"
				return new global::nx3.ENoteAttributes(((int) (global::haxe.lang.Runtime.toInt(arr[0])) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[1]) ))) ));
			}
			#line default
		}
		
		
	}
}


