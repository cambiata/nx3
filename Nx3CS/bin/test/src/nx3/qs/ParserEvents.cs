
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class ParserEvents : global::haxe.lang.Enum {
		static ParserEvents() {
			#line 9 "F:\\nx3\\src\\nx3\\qs\\ParserEvents.hx"
			global::nx3.qs.ParserEvents.constructs = new global::Array<object>(new object[]{"SetGuessOctave", "SetOctave", "SetNoteVal", "SetMode", "SetBarClef"});
		}
		public    ParserEvents(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    ParserEvents(int index, global::Array<object> @params) : base(index, @params){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::Array<object> constructs;
		
		public static   global::nx3.qs.ParserEvents SetGuessOctave(bool mode){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\qs\\ParserEvents.hx"
				return new global::nx3.qs.ParserEvents(((int) (0) ), ((global::Array<object>) (new global::Array<object>(new object[]{mode})) ));
			}
			#line default
		}
		
		
		public static   global::nx3.qs.ParserEvents SetOctave(int octave){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\qs\\ParserEvents.hx"
				return new global::nx3.qs.ParserEvents(((int) (1) ), ((global::Array<object>) (new global::Array<object>(new object[]{octave})) ));
			}
			#line default
		}
		
		
		public static   global::nx3.qs.ParserEvents SetNoteVal(global::nx3.ENoteVal @value){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\qs\\ParserEvents.hx"
				return new global::nx3.qs.ParserEvents(((int) (2) ), ((global::Array<object>) (new global::Array<object>(new object[]{@value})) ));
			}
			#line default
		}
		
		
		public static   global::nx3.qs.ParserEvents SetMode(global::nx3.qs.ContentMode mode){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\qs\\ParserEvents.hx"
				return new global::nx3.qs.ParserEvents(((int) (3) ), ((global::Array<object>) (new global::Array<object>(new object[]{mode})) ));
			}
			#line default
		}
		
		
		public static   global::nx3.qs.ParserEvents SetBarClef(global::nx3.EClef clef){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\qs\\ParserEvents.hx"
				return new global::nx3.qs.ParserEvents(((int) (4) ), ((global::Array<object>) (new global::Array<object>(new object[]{clef})) ));
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\qs\\ParserEvents.hx"
				return new global::nx3.qs.ParserEvents(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\qs\\ParserEvents.hx"
				return new global::nx3.qs.ParserEvents(((int) (global::haxe.lang.Runtime.toInt(arr[0])) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[1]) ))) ));
			}
			#line default
		}
		
		
	}
}


