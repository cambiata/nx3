
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QNote : global::nx3.NNote {
		public    QNote(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    QNote(global::haxe.lang.Null<int> headLevel, global::Array<int> headLevels, global::nx3.NHead head, global::Array<object> heads, global::nx3.ENoteVal @value, string signs, global::nx3.EDirectionUAD direction) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 42 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QNote.__hx_ctor_nx3_QNote(this, headLevel, headLevels, head, heads, @value, signs, direction);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QNote(global::nx3.QNote __temp_me135, global::haxe.lang.Null<int> headLevel, global::Array<int> headLevels, global::nx3.NHead head, global::Array<object> heads, global::nx3.ENoteVal @value, string signs, global::nx3.EDirectionUAD direction){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\QNote.hx"
				if (string.Equals(signs, default(string))) {
					#line 19 "F:\\nx3\\src\\nx3\\QNote.hx"
					signs = "";
				}
				
				#line 22 "F:\\nx3\\src\\nx3\\QNote.hx"
				signs = global::haxe.lang.Runtime.concat(signs, "...........");
				global::Array<object> aSigns = global::haxe.lang.StringExt.split(signs, "");
				#line 25 "F:\\nx3\\src\\nx3\\QNote.hx"
				if (headLevel.hasValue) {
					#line 25 "F:\\nx3\\src\\nx3\\QNote.hx"
					headLevels = new global::Array<int>(new int[]{headLevel.@value});
				}
				
				#line 26 "F:\\nx3\\src\\nx3\\QNote.hx"
				if (( headLevels != default(global::Array<int>) )) {
					#line 28 "F:\\nx3\\src\\nx3\\QNote.hx"
					heads = new global::Array<object>(new object[]{});
					int i = 0;
					{
						#line 30 "F:\\nx3\\src\\nx3\\QNote.hx"
						int _g = 0;
						#line 30 "F:\\nx3\\src\\nx3\\QNote.hx"
						while (( _g < headLevels.length )){
							#line 30 "F:\\nx3\\src\\nx3\\QNote.hx"
							int level = headLevels[_g];
							#line 30 "F:\\nx3\\src\\nx3\\QNote.hx"
							 ++ _g;
							#line 30 "F:\\nx3\\src\\nx3\\QNote.hx"
							heads.push(new global::nx3.NHead(((global::nx3.EHeadType) (default(global::nx3.EHeadType)) ), new global::haxe.lang.Null<int>(level, true), ((global::nx3.ESign) (__temp_me135.getSign(global::haxe.lang.Runtime.toString(aSigns[i++]))) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) )));
						}
						
					}
					
				}
				
				#line 33 "F:\\nx3\\src\\nx3\\QNote.hx"
				if (( head != default(global::nx3.NHead) )) {
					#line 33 "F:\\nx3\\src\\nx3\\QNote.hx"
					heads = new global::Array<object>(new object[]{head});
				}
				
				#line 35 "F:\\nx3\\src\\nx3\\QNote.hx"
				if (( heads == default(global::Array<object>) )) {
					#line 35 "F:\\nx3\\src\\nx3\\QNote.hx"
					heads = new global::Array<object>(new object[]{new global::nx3.NHead(((global::nx3.EHeadType) (default(global::nx3.EHeadType)) ), new global::haxe.lang.Null<int>(0, true), ((global::nx3.ESign) (default(global::nx3.ESign)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ), ((global::nx3.ETie) (default(global::nx3.ETie)) ))});
				}
				
				#line 37 "F:\\nx3\\src\\nx3\\QNote.hx"
				if (( @value == default(global::nx3.ENoteVal) )) {
					#line 37 "F:\\nx3\\src\\nx3\\QNote.hx"
					@value = global::nx3.ENoteVal.Nv4;
				}
				
				#line 42 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.NNote.__hx_ctor_nx3_NNote(__temp_me135, default(global::nx3.ENoteType), heads, @value, direction);
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QNote(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QNote(global::haxe.lang.Null<object>.ofDynamic<int>(arr[0]), ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (arr[1]) ))) ), ((global::nx3.NHead) (arr[2]) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[3]) ))) ), ((global::nx3.ENoteVal) (arr[4]) ), global::haxe.lang.Runtime.toString(arr[5]), ((global::nx3.EDirectionUAD) (arr[6]) ));
			}
			#line default
		}
		
		
		public virtual   global::nx3.ESign getSign(string val){
			unchecked {
				#line 47 "F:\\nx3\\src\\nx3\\QNote.hx"
				switch (val){
					case "#":
					{
						#line 49 "F:\\nx3\\src\\nx3\\QNote.hx"
						return global::nx3.ESign.Sharp;
					}
					
					
					case "b":
					{
						#line 50 "F:\\nx3\\src\\nx3\\QNote.hx"
						return global::nx3.ESign.Flat;
					}
					
					
					case "N":case "n":
					{
						#line 51 "F:\\nx3\\src\\nx3\\QNote.hx"
						return global::nx3.ESign.Natural;
					}
					
					
					default:
					{
						#line 52 "F:\\nx3\\src\\nx3\\QNote.hx"
						return default(global::nx3.ESign);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\QNote.hx"
				switch (hash){
					case 517357555:
					{
						#line 15 "F:\\nx3\\src\\nx3\\QNote.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSign") ), ((int) (517357555) ))) );
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\QNote.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\QNote.hx"
				switch (hash){
					case 517357555:
					{
						#line 15 "F:\\nx3\\src\\nx3\\QNote.hx"
						return this.getSign(global::haxe.lang.Runtime.toString(dynargs[0]));
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\QNote.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QPause16 : global::nx3.NNote {
		public    QPause16(global::haxe.lang.EmptyObject empty) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
			}
			#line default
		}
		
		
		public    QPause16(global::haxe.lang.Null<int> level) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 59 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QPause16.__hx_ctor_nx3_QPause16(this, level);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QPause16(global::nx3.QPause16 __temp_me137, global::haxe.lang.Null<int> level){
			unchecked {
				#line 59 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.NNote.__hx_ctor_nx3_NNote(__temp_me137, global::nx3.ENoteType.Pause(( ( ! (level.hasValue) ) ? (((global::haxe.lang.Null<int>) (0) )) : (level) ).@value), default(global::Array<object>), global::nx3.ENoteVal.Nv16, default(global::nx3.EDirectionUAD));
				#line 59 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::haxe.lang.Null<int> __temp_level136 = ( ( ! (level.hasValue) ) ? (new global::haxe.lang.Null<int>(0, true)) : (((global::haxe.lang.Null<int>) (level) )) );
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 59 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QPause16(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 59 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QPause16(global::haxe.lang.Null<object>.ofDynamic<int>(arr[0]));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QPause8 : global::nx3.NNote {
		public    QPause8(global::haxe.lang.EmptyObject empty) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
			}
			#line default
		}
		
		
		public    QPause8(global::haxe.lang.Null<int> level) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 60 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QPause8.__hx_ctor_nx3_QPause8(this, level);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QPause8(global::nx3.QPause8 __temp_me139, global::haxe.lang.Null<int> level){
			unchecked {
				#line 60 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.NNote.__hx_ctor_nx3_NNote(__temp_me139, global::nx3.ENoteType.Pause(( ( ! (level.hasValue) ) ? (((global::haxe.lang.Null<int>) (0) )) : (level) ).@value), default(global::Array<object>), global::nx3.ENoteVal.Nv8, default(global::nx3.EDirectionUAD));
				#line 60 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::haxe.lang.Null<int> __temp_level138 = ( ( ! (level.hasValue) ) ? (new global::haxe.lang.Null<int>(0, true)) : (((global::haxe.lang.Null<int>) (level) )) );
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 60 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QPause8(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 60 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QPause8(global::haxe.lang.Null<object>.ofDynamic<int>(arr[0]));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QPause4 : global::nx3.NNote {
		public    QPause4(global::haxe.lang.EmptyObject empty) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
			}
			#line default
		}
		
		
		public    QPause4(global::haxe.lang.Null<int> level) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 61 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QPause4.__hx_ctor_nx3_QPause4(this, level);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QPause4(global::nx3.QPause4 __temp_me141, global::haxe.lang.Null<int> level){
			unchecked {
				#line 61 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.NNote.__hx_ctor_nx3_NNote(__temp_me141, global::nx3.ENoteType.Pause(( ( ! (level.hasValue) ) ? (((global::haxe.lang.Null<int>) (0) )) : (level) ).@value), default(global::Array<object>), global::nx3.ENoteVal.Nv4, default(global::nx3.EDirectionUAD));
				#line 61 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::haxe.lang.Null<int> __temp_level140 = ( ( ! (level.hasValue) ) ? (new global::haxe.lang.Null<int>(0, true)) : (((global::haxe.lang.Null<int>) (level) )) );
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 61 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QPause4(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 61 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QPause4(global::haxe.lang.Null<object>.ofDynamic<int>(arr[0]));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QPause2 : global::nx3.NNote {
		public    QPause2(global::haxe.lang.EmptyObject empty) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
			}
			#line default
		}
		
		
		public    QPause2(global::haxe.lang.Null<int> level) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 62 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QPause2.__hx_ctor_nx3_QPause2(this, level);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QPause2(global::nx3.QPause2 __temp_me143, global::haxe.lang.Null<int> level){
			unchecked {
				#line 62 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.NNote.__hx_ctor_nx3_NNote(__temp_me143, global::nx3.ENoteType.Pause(( ( ! (level.hasValue) ) ? (((global::haxe.lang.Null<int>) (0) )) : (level) ).@value), default(global::Array<object>), global::nx3.ENoteVal.Nv2, default(global::nx3.EDirectionUAD));
				#line 62 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::haxe.lang.Null<int> __temp_level142 = ( ( ! (level.hasValue) ) ? (new global::haxe.lang.Null<int>(0, true)) : (((global::haxe.lang.Null<int>) (level) )) );
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 62 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QPause2(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 62 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QPause2(global::haxe.lang.Null<object>.ofDynamic<int>(arr[0]));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QPause1 : global::nx3.NNote {
		public    QPause1(global::haxe.lang.EmptyObject empty) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
			}
			#line default
		}
		
		
		public    QPause1(global::haxe.lang.Null<int> level) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 63 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QPause1.__hx_ctor_nx3_QPause1(this, level);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QPause1(global::nx3.QPause1 __temp_me145, global::haxe.lang.Null<int> level){
			unchecked {
				#line 63 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.NNote.__hx_ctor_nx3_NNote(__temp_me145, global::nx3.ENoteType.Pause(( ( ! (level.hasValue) ) ? (((global::haxe.lang.Null<int>) (0) )) : (level) ).@value), default(global::Array<object>), global::nx3.ENoteVal.Nv1, default(global::nx3.EDirectionUAD));
				#line 63 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::haxe.lang.Null<int> __temp_level144 = ( ( ! (level.hasValue) ) ? (new global::haxe.lang.Null<int>(0, true)) : (((global::haxe.lang.Null<int>) (level) )) );
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 63 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QPause1(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 63 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QPause1(global::haxe.lang.Null<object>.ofDynamic<int>(arr[0]));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QLyric8 : global::nx3.NNote {
		public    QLyric8(global::haxe.lang.EmptyObject empty) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
			}
			#line default
		}
		
		
		public    QLyric8(string text) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 65 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QLyric8.__hx_ctor_nx3_QLyric8(this, text);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QLyric8(global::nx3.QLyric8 __temp_me146, string text){
			unchecked {
				#line 65 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.NNote.__hx_ctor_nx3_NNote(__temp_me146, global::nx3.ENoteType.Lyric(( (string.Equals(text, default(string))) ? (((string) ("QLyric4") )) : (text) ), default(global::nx3.EPosition), default(global::nx3.ELyricContinuation), default(object)), default(global::Array<object>), global::nx3.ENoteVal.Nv8, default(global::nx3.EDirectionUAD));
				#line 65 "F:\\nx3\\src\\nx3\\QNote.hx"
				if (string.Equals(text, default(string))) {
					#line 65 "F:\\nx3\\src\\nx3\\QNote.hx"
					text = "QLyric4";
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 65 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QLyric8(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 65 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QLyric8(global::haxe.lang.Runtime.toString(arr[0]));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QLyric4 : global::nx3.NNote {
		public    QLyric4(global::haxe.lang.EmptyObject empty) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
			}
			#line default
		}
		
		
		public    QLyric4(string text) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 66 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QLyric4.__hx_ctor_nx3_QLyric4(this, text);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QLyric4(global::nx3.QLyric4 __temp_me147, string text){
			unchecked {
				#line 66 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.NNote.__hx_ctor_nx3_NNote(__temp_me147, global::nx3.ENoteType.Lyric(( (string.Equals(text, default(string))) ? (((string) ("QLyric4") )) : (text) ), default(global::nx3.EPosition), default(global::nx3.ELyricContinuation), default(object)), default(global::Array<object>), global::nx3.ENoteVal.Nv4, default(global::nx3.EDirectionUAD));
				#line 66 "F:\\nx3\\src\\nx3\\QNote.hx"
				if (string.Equals(text, default(string))) {
					#line 66 "F:\\nx3\\src\\nx3\\QNote.hx"
					text = "QLyric4";
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 66 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QLyric4(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 66 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QLyric4(global::haxe.lang.Runtime.toString(arr[0]));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QLyric2 : global::nx3.NNote {
		public    QLyric2(global::haxe.lang.EmptyObject empty) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
			}
			#line default
		}
		
		
		public    QLyric2(string text) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 67 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QLyric2.__hx_ctor_nx3_QLyric2(this, text);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QLyric2(global::nx3.QLyric2 __temp_me148, string text){
			unchecked {
				#line 67 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.NNote.__hx_ctor_nx3_NNote(__temp_me148, global::nx3.ENoteType.Lyric(( (string.Equals(text, default(string))) ? (((string) ("QLyric4") )) : (text) ), default(global::nx3.EPosition), default(global::nx3.ELyricContinuation), default(object)), default(global::Array<object>), global::nx3.ENoteVal.Nv2, default(global::nx3.EDirectionUAD));
				#line 67 "F:\\nx3\\src\\nx3\\QNote.hx"
				if (string.Equals(text, default(string))) {
					#line 67 "F:\\nx3\\src\\nx3\\QNote.hx"
					text = "QLyric4";
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 67 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QLyric2(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 67 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QLyric2(global::haxe.lang.Runtime.toString(arr[0]));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QNote4 : global::nx3.QNote {
		public    QNote4(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    QNote4(global::haxe.lang.Null<bool> dot, global::haxe.lang.Null<int> headLevel, global::Array<int> headLevels, string signs) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 75 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QNote4.__hx_ctor_nx3_QNote4(this, dot, headLevel, headLevels, signs);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QNote4(global::nx3.QNote4 __temp_me150, global::haxe.lang.Null<bool> dot, global::haxe.lang.Null<int> headLevel, global::Array<int> headLevels, string signs){
			unchecked {
				#line 73 "F:\\nx3\\src\\nx3\\QNote.hx"
				if (string.Equals(signs, default(string))) {
					#line 73 "F:\\nx3\\src\\nx3\\QNote.hx"
					signs = "";
				}
				
				#line 73 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::haxe.lang.Null<bool> __temp_dot149 = ( ( ! (dot.hasValue) ) ? (new global::haxe.lang.Null<bool>(false, true)) : (((global::haxe.lang.Null<bool>) (dot) )) );
				global::nx3.ENoteVal val = default(global::nx3.ENoteVal);
				#line 74 "F:\\nx3\\src\\nx3\\QNote.hx"
				if ((__temp_dot149).@value) {
					#line 74 "F:\\nx3\\src\\nx3\\QNote.hx"
					val = global::nx3.ENoteVal.Nv4dot;
				}
				 else {
					#line 74 "F:\\nx3\\src\\nx3\\QNote.hx"
					val = global::nx3.ENoteVal.Nv4;
				}
				
				#line 75 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QNote.__hx_ctor_nx3_QNote(__temp_me150, headLevel, headLevels, default(global::nx3.NHead), default(global::Array<object>), val, signs, default(global::nx3.EDirectionUAD));
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 70 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QNote4(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 70 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QNote4(global::haxe.lang.Null<object>.ofDynamic<bool>(arr[0]), global::haxe.lang.Null<object>.ofDynamic<int>(arr[1]), ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (arr[2]) ))) ), global::haxe.lang.Runtime.toString(arr[3]));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QNote8 : global::nx3.QNote {
		public    QNote8(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    QNote8(global::haxe.lang.Null<bool> dot, global::haxe.lang.Null<int> headLevel, global::Array<int> headLevels, string signs) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 85 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QNote8.__hx_ctor_nx3_QNote8(this, dot, headLevel, headLevels, signs);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QNote8(global::nx3.QNote8 __temp_me152, global::haxe.lang.Null<bool> dot, global::haxe.lang.Null<int> headLevel, global::Array<int> headLevels, string signs){
			unchecked {
				#line 83 "F:\\nx3\\src\\nx3\\QNote.hx"
				if (string.Equals(signs, default(string))) {
					#line 83 "F:\\nx3\\src\\nx3\\QNote.hx"
					signs = "";
				}
				
				#line 83 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::haxe.lang.Null<bool> __temp_dot151 = ( ( ! (dot.hasValue) ) ? (new global::haxe.lang.Null<bool>(false, true)) : (((global::haxe.lang.Null<bool>) (dot) )) );
				global::nx3.ENoteVal val = default(global::nx3.ENoteVal);
				#line 84 "F:\\nx3\\src\\nx3\\QNote.hx"
				if ((__temp_dot151).@value) {
					#line 84 "F:\\nx3\\src\\nx3\\QNote.hx"
					val = global::nx3.ENoteVal.Nv8dot;
				}
				 else {
					#line 84 "F:\\nx3\\src\\nx3\\QNote.hx"
					val = global::nx3.ENoteVal.Nv8;
				}
				
				#line 85 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QNote.__hx_ctor_nx3_QNote(__temp_me152, headLevel, headLevels, default(global::nx3.NHead), default(global::Array<object>), val, signs, default(global::nx3.EDirectionUAD));
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 80 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QNote8(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 80 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QNote8(global::haxe.lang.Null<object>.ofDynamic<bool>(arr[0]), global::haxe.lang.Null<object>.ofDynamic<int>(arr[1]), ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (arr[2]) ))) ), global::haxe.lang.Runtime.toString(arr[3]));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QNote16 : global::nx3.QNote {
		public    QNote16(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    QNote16(global::haxe.lang.Null<int> headLevel, global::Array<int> headLevels, string signs) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 93 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QNote16.__hx_ctor_nx3_QNote16(this, headLevel, headLevels, signs);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QNote16(global::nx3.QNote16 __temp_me153, global::haxe.lang.Null<int> headLevel, global::Array<int> headLevels, string signs){
			unchecked {
				#line 93 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QNote.__hx_ctor_nx3_QNote(__temp_me153, ( ( ! (headLevel.hasValue) ) ? (default(global::haxe.lang.Null<int>)) : (headLevel) ), ( (( headLevels == default(global::Array<int>) )) ? (default(global::Array<int>)) : (headLevels) ), default(global::nx3.NHead), default(global::Array<object>), global::nx3.ENoteVal.Nv16, ( (string.Equals(signs, default(string))) ? (((string) ("") )) : (signs) ), default(global::nx3.EDirectionUAD));
				#line 93 "F:\\nx3\\src\\nx3\\QNote.hx"
				if (string.Equals(signs, default(string))) {
					#line 93 "F:\\nx3\\src\\nx3\\QNote.hx"
					signs = "";
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 89 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QNote16(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 89 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QNote16(global::haxe.lang.Null<object>.ofDynamic<int>(arr[0]), ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (arr[1]) ))) ), global::haxe.lang.Runtime.toString(arr[2]));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QNote2 : global::nx3.QNote {
		public    QNote2(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    QNote2(global::haxe.lang.Null<bool> dot, global::haxe.lang.Null<int> headLevel, global::Array<int> headLevels, string signs) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 104 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QNote2.__hx_ctor_nx3_QNote2(this, dot, headLevel, headLevels, signs);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QNote2(global::nx3.QNote2 __temp_me155, global::haxe.lang.Null<bool> dot, global::haxe.lang.Null<int> headLevel, global::Array<int> headLevels, string signs){
			unchecked {
				#line 102 "F:\\nx3\\src\\nx3\\QNote.hx"
				if (string.Equals(signs, default(string))) {
					#line 102 "F:\\nx3\\src\\nx3\\QNote.hx"
					signs = "";
				}
				
				#line 102 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::haxe.lang.Null<bool> __temp_dot154 = ( ( ! (dot.hasValue) ) ? (new global::haxe.lang.Null<bool>(false, true)) : (((global::haxe.lang.Null<bool>) (dot) )) );
				global::nx3.ENoteVal val = default(global::nx3.ENoteVal);
				#line 103 "F:\\nx3\\src\\nx3\\QNote.hx"
				if ((__temp_dot154).@value) {
					#line 103 "F:\\nx3\\src\\nx3\\QNote.hx"
					val = global::nx3.ENoteVal.Nv2dot;
				}
				 else {
					#line 103 "F:\\nx3\\src\\nx3\\QNote.hx"
					val = global::nx3.ENoteVal.Nv2;
				}
				
				#line 104 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QNote.__hx_ctor_nx3_QNote(__temp_me155, headLevel, headLevels, default(global::nx3.NHead), default(global::Array<object>), val, signs, default(global::nx3.EDirectionUAD));
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 99 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QNote2(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 99 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QNote2(global::haxe.lang.Null<object>.ofDynamic<bool>(arr[0]), global::haxe.lang.Null<object>.ofDynamic<int>(arr[1]), ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (arr[2]) ))) ), global::haxe.lang.Runtime.toString(arr[3]));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QNote1 : global::nx3.QNote {
		public    QNote1(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    QNote1(global::haxe.lang.Null<int> headLevel, global::Array<int> headLevels, string signs) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 112 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QNote1.__hx_ctor_nx3_QNote1(this, headLevel, headLevels, signs);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QNote1(global::nx3.QNote1 __temp_me156, global::haxe.lang.Null<int> headLevel, global::Array<int> headLevels, string signs){
			unchecked {
				#line 112 "F:\\nx3\\src\\nx3\\QNote.hx"
				global::nx3.QNote.__hx_ctor_nx3_QNote(__temp_me156, ( ( ! (headLevel.hasValue) ) ? (default(global::haxe.lang.Null<int>)) : (headLevel) ), ( (( headLevels == default(global::Array<int>) )) ? (default(global::Array<int>)) : (headLevels) ), default(global::nx3.NHead), default(global::Array<object>), global::nx3.ENoteVal.Nv1, ( (string.Equals(signs, default(string))) ? (((string) ("") )) : (signs) ), default(global::nx3.EDirectionUAD));
				#line 112 "F:\\nx3\\src\\nx3\\QNote.hx"
				if (string.Equals(signs, default(string))) {
					#line 112 "F:\\nx3\\src\\nx3\\QNote.hx"
					signs = "";
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 108 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QNote1(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 108 "F:\\nx3\\src\\nx3\\QNote.hx"
				return new global::nx3.QNote1(global::haxe.lang.Null<object>.ofDynamic<int>(arr[0]), ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (arr[1]) ))) ), global::haxe.lang.Runtime.toString(arr[2]));
			}
			#line default
		}
		
		
	}
}


