
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class ENotationVariant : global::haxe.lang.Enum {
		static ENotationVariant() {
			#line 7 "F:\\nx3\\src\\nx3\\ENotationVariant.hx"
			global::nx3.ENotationVariant.constructs = new global::Array<object>(new object[]{"Normal", "Rythmic", "RythmicSingleLevel", "HeadsOnly", "StavesOnly"});
			#line 9 "F:\\nx3\\src\\nx3\\ENotationVariant.hx"
			global::nx3.ENotationVariant.Normal = new global::nx3.ENotationVariant(((int) (0) ), ((global::Array<object>) (new global::Array<object>(new object[]{})) ));
			global::nx3.ENotationVariant.Rythmic = new global::nx3.ENotationVariant(((int) (1) ), ((global::Array<object>) (new global::Array<object>(new object[]{})) ));
			#line 12 "F:\\nx3\\src\\nx3\\ENotationVariant.hx"
			global::nx3.ENotationVariant.HeadsOnly = new global::nx3.ENotationVariant(((int) (3) ), ((global::Array<object>) (new global::Array<object>(new object[]{})) ));
			global::nx3.ENotationVariant.StavesOnly = new global::nx3.ENotationVariant(((int) (4) ), ((global::Array<object>) (new global::Array<object>(new object[]{})) ));
		}
		public    ENotationVariant(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    ENotationVariant(int index, global::Array<object> @params) : base(index, @params){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::Array<object> constructs;
		
		public static  global::nx3.ENotationVariant Normal;
		
		public static  global::nx3.ENotationVariant Rythmic;
		
		public static   global::nx3.ENotationVariant RythmicSingleLevel(int level){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\ENotationVariant.hx"
				return new global::nx3.ENotationVariant(((int) (2) ), ((global::Array<object>) (new global::Array<object>(new object[]{level})) ));
			}
			#line default
		}
		
		
		public static  global::nx3.ENotationVariant HeadsOnly;
		
		public static  global::nx3.ENotationVariant StavesOnly;
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\ENotationVariant.hx"
				return new global::nx3.ENotationVariant(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\ENotationVariant.hx"
				return new global::nx3.ENotationVariant(((int) (global::haxe.lang.Runtime.toInt(arr[0])) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[1]) ))) ));
			}
			#line default
		}
		
		
	}
}


