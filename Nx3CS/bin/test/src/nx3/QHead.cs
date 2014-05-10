
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QHead : global::nx3.NHead {
		public    QHead(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    QHead(global::haxe.lang.Null<int> level, global::nx3.ESign sign) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\QHead.hx"
				global::nx3.QHead.__hx_ctor_nx3_QHead(this, level, sign);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QHead(global::nx3.QHead __temp_me128, global::haxe.lang.Null<int> level, global::nx3.ESign sign){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\QHead.hx"
				global::nx3.NHead.__hx_ctor_nx3_NHead(__temp_me128, default(global::nx3.EHeadType), ( ( ! (level.hasValue) ) ? (((global::haxe.lang.Null<int>) (0) )) : (level) ), ( (( sign == default(global::nx3.ESign) )) ? (default(global::nx3.ESign)) : (sign) ), default(global::nx3.ETie), default(global::nx3.ETie));
				#line 13 "F:\\nx3\\src\\nx3\\QHead.hx"
				global::haxe.lang.Null<int> __temp_level127 = ( ( ! (level.hasValue) ) ? (new global::haxe.lang.Null<int>(0, true)) : (((global::haxe.lang.Null<int>) (level) )) );
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\QHead.hx"
				return new global::nx3.QHead(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\QHead.hx"
				return new global::nx3.QHead(global::haxe.lang.Null<object>.ofDynamic<int>(arr[0]), ((global::nx3.ESign) (arr[1]) ));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QHeadSharp : global::nx3.QHead {
		public    QHeadSharp(global::haxe.lang.EmptyObject empty) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
			}
			#line default
		}
		
		
		public    QHeadSharp(global::haxe.lang.Null<int> level) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\QHead.hx"
				global::nx3.QHeadSharp.__hx_ctor_nx3_QHeadSharp(this, level);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QHeadSharp(global::nx3.QHeadSharp __temp_me130, global::haxe.lang.Null<int> level){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\QHead.hx"
				global::nx3.QHead.__hx_ctor_nx3_QHead(__temp_me130, ( ( ! (level.hasValue) ) ? (((global::haxe.lang.Null<int>) (0) )) : (level) ), global::nx3.ESign.Sharp);
				#line 21 "F:\\nx3\\src\\nx3\\QHead.hx"
				global::haxe.lang.Null<int> __temp_level129 = ( ( ! (level.hasValue) ) ? (new global::haxe.lang.Null<int>(0, true)) : (((global::haxe.lang.Null<int>) (level) )) );
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\QHead.hx"
				return new global::nx3.QHeadSharp(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\QHead.hx"
				return new global::nx3.QHeadSharp(global::haxe.lang.Null<object>.ofDynamic<int>(arr[0]));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QHeadFlat : global::nx3.QHead {
		public    QHeadFlat(global::haxe.lang.EmptyObject empty) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
			}
			#line default
		}
		
		
		public    QHeadFlat(global::haxe.lang.Null<int> level) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 29 "F:\\nx3\\src\\nx3\\QHead.hx"
				global::nx3.QHeadFlat.__hx_ctor_nx3_QHeadFlat(this, level);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QHeadFlat(global::nx3.QHeadFlat __temp_me132, global::haxe.lang.Null<int> level){
			unchecked {
				#line 29 "F:\\nx3\\src\\nx3\\QHead.hx"
				global::nx3.QHead.__hx_ctor_nx3_QHead(__temp_me132, ( ( ! (level.hasValue) ) ? (((global::haxe.lang.Null<int>) (0) )) : (level) ), global::nx3.ESign.Flat);
				#line 29 "F:\\nx3\\src\\nx3\\QHead.hx"
				global::haxe.lang.Null<int> __temp_level131 = ( ( ! (level.hasValue) ) ? (new global::haxe.lang.Null<int>(0, true)) : (((global::haxe.lang.Null<int>) (level) )) );
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\QHead.hx"
				return new global::nx3.QHeadFlat(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\QHead.hx"
				return new global::nx3.QHeadFlat(global::haxe.lang.Null<object>.ofDynamic<int>(arr[0]));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class QHeadNatural : global::nx3.QHead {
		public    QHeadNatural(global::haxe.lang.EmptyObject empty) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
			}
			#line default
		}
		
		
		public    QHeadNatural(global::haxe.lang.Null<int> level) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
				#line 37 "F:\\nx3\\src\\nx3\\QHead.hx"
				global::nx3.QHeadNatural.__hx_ctor_nx3_QHeadNatural(this, level);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_QHeadNatural(global::nx3.QHeadNatural __temp_me134, global::haxe.lang.Null<int> level){
			unchecked {
				#line 37 "F:\\nx3\\src\\nx3\\QHead.hx"
				global::nx3.QHead.__hx_ctor_nx3_QHead(__temp_me134, ( ( ! (level.hasValue) ) ? (((global::haxe.lang.Null<int>) (0) )) : (level) ), global::nx3.ESign.Natural);
				#line 37 "F:\\nx3\\src\\nx3\\QHead.hx"
				global::haxe.lang.Null<int> __temp_level133 = ( ( ! (level.hasValue) ) ? (new global::haxe.lang.Null<int>(0, true)) : (((global::haxe.lang.Null<int>) (level) )) );
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 33 "F:\\nx3\\src\\nx3\\QHead.hx"
				return new global::nx3.QHeadNatural(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 33 "F:\\nx3\\src\\nx3\\QHead.hx"
				return new global::nx3.QHeadNatural(global::haxe.lang.Null<object>.ofDynamic<int>(arr[0]));
			}
			#line default
		}
		
		
	}
}


