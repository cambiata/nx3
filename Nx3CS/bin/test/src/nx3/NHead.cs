
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class NHead : global::haxe.lang.HxObject {
		public    NHead(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    NHead(global::nx3.EHeadType type, global::haxe.lang.Null<int> level, global::nx3.ESign sign, global::nx3.ETie tie, global::nx3.ETie tieTo){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\NHead.hx"
				global::nx3.NHead.__hx_ctor_nx3_NHead(this, type, level, sign, tie, tieTo);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_NHead(global::nx3.NHead __temp_me67, global::nx3.EHeadType type, global::haxe.lang.Null<int> level, global::nx3.ESign sign, global::nx3.ETie tie, global::nx3.ETie tieTo){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\NHead.hx"
				global::haxe.lang.Null<int> __temp_level66 = ( ( ! (level.hasValue) ) ? (new global::haxe.lang.Null<int>(0, true)) : (((global::haxe.lang.Null<int>) (level) )) );
				if (( type != default(global::nx3.EHeadType) )) {
					#line 21 "F:\\nx3\\src\\nx3\\NHead.hx"
					__temp_me67.type = type;
				}
				 else {
					#line 21 "F:\\nx3\\src\\nx3\\NHead.hx"
					__temp_me67.type = global::nx3.EHeadType.Normal;
				}
				
				#line 22 "F:\\nx3\\src\\nx3\\NHead.hx"
				if (( sign != default(global::nx3.ESign) )) {
					#line 22 "F:\\nx3\\src\\nx3\\NHead.hx"
					__temp_me67.sign = sign;
				}
				 else {
					#line 22 "F:\\nx3\\src\\nx3\\NHead.hx"
					__temp_me67.sign = global::nx3.ESign.None;
				}
				
				#line 23 "F:\\nx3\\src\\nx3\\NHead.hx"
				if (( tie != default(global::nx3.ETie) )) {
					#line 23 "F:\\nx3\\src\\nx3\\NHead.hx"
					__temp_me67.tie = tie;
				}
				 else {
					#line 23 "F:\\nx3\\src\\nx3\\NHead.hx"
					__temp_me67.tie = default(global::nx3.ETie);
				}
				
				#line 24 "F:\\nx3\\src\\nx3\\NHead.hx"
				if (( tieTo != default(global::nx3.ETie) )) {
					#line 24 "F:\\nx3\\src\\nx3\\NHead.hx"
					__temp_me67.tieTo = tieTo;
				}
				 else {
					#line 24 "F:\\nx3\\src\\nx3\\NHead.hx"
					__temp_me67.tieTo = default(global::nx3.ETie);
				}
				
				#line 25 "F:\\nx3\\src\\nx3\\NHead.hx"
				__temp_me67.level = __temp_level66.@value;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
				return new global::nx3.NHead(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
				return new global::nx3.NHead(((global::nx3.EHeadType) (arr[0]) ), global::haxe.lang.Null<object>.ofDynamic<int>(arr[1]), ((global::nx3.ESign) (arr[2]) ), ((global::nx3.ETie) (arr[3]) ), ((global::nx3.ETie) (arr[4]) ));
			}
			#line default
		}
		
		
		public  int level;
		
		public  global::nx3.EHeadType type;
		
		public  global::nx3.ESign sign;
		
		public  global::nx3.ETie tie;
		
		public  global::nx3.ETie tieTo;
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
				switch (hash){
					case 1919096196:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						this.level = ((int) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
				switch (hash){
					case 271556331:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						this.tieTo = ((global::nx3.ETie) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						return @value;
					}
					
					
					case 5792080:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						this.tie = ((global::nx3.ETie) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						return @value;
					}
					
					
					case 1280544829:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						this.sign = ((global::nx3.ESign) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						return @value;
					}
					
					
					case 1292432058:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						this.type = ((global::nx3.EHeadType) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						return @value;
					}
					
					
					case 1919096196:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						this.level = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
				switch (hash){
					case 271556331:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						return this.tieTo;
					}
					
					
					case 5792080:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						return this.tie;
					}
					
					
					case 1280544829:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						return this.sign;
					}
					
					
					case 1292432058:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						return this.type;
					}
					
					
					case 1919096196:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						return this.level;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
				switch (hash){
					case 1919096196:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						return ((double) (this.level) );
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
				baseArr.push("tieTo");
				#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
				baseArr.push("tie");
				#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
				baseArr.push("sign");
				#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
				baseArr.push("type");
				#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
				baseArr.push("level");
				#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
				{
					#line 11 "F:\\nx3\\src\\nx3\\NHead.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


