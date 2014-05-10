
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class ENoteType : global::haxe.lang.Enum {
		static ENoteType() {
			#line 8 "F:\\nx3\\src\\nx3\\ENoteType.hx"
			global::nx3.ENoteType.constructs = new global::Array<object>(new object[]{"Note", "Pause", "BarPause", "Tpl", "Lyric", "Chord", "Dynamics"});
			#line 11 "F:\\nx3\\src\\nx3\\ENoteType.hx"
			global::nx3.ENoteType.BarPause = new global::nx3.ENoteType(((int) (2) ), ((global::Array<object>) (new global::Array<object>(new object[]{})) ));
			#line 14 "F:\\nx3\\src\\nx3\\ENoteType.hx"
			global::nx3.ENoteType.Chord = new global::nx3.ENoteType(((int) (5) ), ((global::Array<object>) (new global::Array<object>(new object[]{})) ));
			global::nx3.ENoteType.Dynamics = new global::nx3.ENoteType(((int) (6) ), ((global::Array<object>) (new global::Array<object>(new object[]{})) ));
		}
		public    ENoteType(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    ENoteType(int index, global::Array<object> @params) : base(index, @params){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::Array<object> constructs;
		
		public static   global::nx3.ENoteType Note(global::Array<object> heads, global::nx3.ENotationVariant variant, global::Array<global::nx3.ENoteArticulation> articulations, global::Array<object> attributes){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\ENoteType.hx"
				return new global::nx3.ENoteType(((int) (0) ), ((global::Array<object>) (new global::Array<object>(new object[]{heads, variant, articulations, attributes})) ));
			}
			#line default
		}
		
		
		public static   global::nx3.ENoteType Pause(int level){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\ENoteType.hx"
				return new global::nx3.ENoteType(((int) (1) ), ((global::Array<object>) (new global::Array<object>(new object[]{level})) ));
			}
			#line default
		}
		
		
		public static  global::nx3.ENoteType BarPause;
		
		public static   global::nx3.ENoteType Tpl(int level){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\ENoteType.hx"
				return new global::nx3.ENoteType(((int) (3) ), ((global::Array<object>) (new global::Array<object>(new object[]{level})) ));
			}
			#line default
		}
		
		
		public static   global::nx3.ENoteType Lyric(string text, global::nx3.EPosition offset, global::nx3.ELyricContinuation continuation, object font){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\ENoteType.hx"
				return new global::nx3.ENoteType(((int) (4) ), ((global::Array<object>) (new global::Array<object>(new object[]{text, offset, continuation, font})) ));
			}
			#line default
		}
		
		
		public static  global::nx3.ENoteType Chord;
		
		public static  global::nx3.ENoteType Dynamics;
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\ENoteType.hx"
				return new global::nx3.ENoteType(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\ENoteType.hx"
				return new global::nx3.ENoteType(((int) (global::haxe.lang.Runtime.toInt(arr[0])) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[1]) ))) ));
			}
			#line default
		}
		
		
	}
}


