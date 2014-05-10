
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class EPosition : global::haxe.lang.Enum {
		static EPosition() {
			#line 7 "F:\\nx3\\src\\nx3\\EPosition.hx"
			global::nx3.EPosition.constructs = new global::Array<object>(new object[]{"X", "Y", "XY", "XYW"});
		}
		public    EPosition(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    EPosition(int index, global::Array<object> @params) : base(index, @params){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::Array<object> constructs;
		
		public static   global::nx3.EPosition X(double x){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\EPosition.hx"
				return new global::nx3.EPosition(((int) (0) ), ((global::Array<object>) (new global::Array<object>(new object[]{x})) ));
			}
			#line default
		}
		
		
		public static   global::nx3.EPosition Y(double y){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\EPosition.hx"
				return new global::nx3.EPosition(((int) (1) ), ((global::Array<object>) (new global::Array<object>(new object[]{y})) ));
			}
			#line default
		}
		
		
		public static   global::nx3.EPosition XY(double x, double y){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\EPosition.hx"
				return new global::nx3.EPosition(((int) (2) ), ((global::Array<object>) (new global::Array<object>(new object[]{x, y})) ));
			}
			#line default
		}
		
		
		public static   global::nx3.EPosition XYW(double x, double y, double w){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\EPosition.hx"
				return new global::nx3.EPosition(((int) (3) ), ((global::Array<object>) (new global::Array<object>(new object[]{x, y, w})) ));
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\EPosition.hx"
				return new global::nx3.EPosition(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\EPosition.hx"
				return new global::nx3.EPosition(((int) (global::haxe.lang.Runtime.toInt(arr[0])) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[1]) ))) ));
			}
			#line default
		}
		
		
	}
}


