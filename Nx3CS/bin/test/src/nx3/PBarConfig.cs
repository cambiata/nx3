
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PBarConfig : global::haxe.lang.HxObject {
		public    PBarConfig(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PBarConfig(global::haxe.lang.Null<bool> showClef, global::haxe.lang.Null<bool> showKey, global::haxe.lang.Null<bool> showTime, global::haxe.lang.Null<bool> showCautClef, global::haxe.lang.Null<bool> showCautKey, global::haxe.lang.Null<bool> showCautTime){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				global::nx3.PBarConfig.__hx_ctor_nx3_PBarConfig(this, showClef, showKey, showTime, showCautClef, showCautKey, showCautTime);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PBarConfig(global::nx3.PBarConfig __temp_me81, global::haxe.lang.Null<bool> showClef, global::haxe.lang.Null<bool> showKey, global::haxe.lang.Null<bool> showTime, global::haxe.lang.Null<bool> showCautClef, global::haxe.lang.Null<bool> showCautKey, global::haxe.lang.Null<bool> showCautTime){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				bool __temp_showCautTime80 = ( ( ! (showCautTime.hasValue) ) ? (global::haxe.lang.Runtime.toBool(false)) : (showCautTime.@value) );
				#line 20 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				bool __temp_showCautKey79 = ( ( ! (showCautKey.hasValue) ) ? (global::haxe.lang.Runtime.toBool(false)) : (showCautKey.@value) );
				#line 20 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				bool __temp_showCautClef78 = ( ( ! (showCautClef.hasValue) ) ? (global::haxe.lang.Runtime.toBool(false)) : (showCautClef.@value) );
				#line 20 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				bool __temp_showTime77 = ( ( ! (showTime.hasValue) ) ? (global::haxe.lang.Runtime.toBool(false)) : (showTime.@value) );
				#line 20 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				bool __temp_showKey76 = ( ( ! (showKey.hasValue) ) ? (global::haxe.lang.Runtime.toBool(false)) : (showKey.@value) );
				#line 20 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				bool __temp_showClef75 = ( ( ! (showClef.hasValue) ) ? (global::haxe.lang.Runtime.toBool(false)) : (showClef.@value) );
				__temp_me81.showClef = __temp_showClef75;
				__temp_me81.showKey = __temp_showKey76;
				__temp_me81.showTime = __temp_showTime77;
				__temp_me81.showCautClef = __temp_showCautClef78;
				__temp_me81.showCautKey = __temp_showCautKey79;
				__temp_me81.showCautTime = __temp_showCautTime80;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				return new global::nx3.PBarConfig(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				return new global::nx3.PBarConfig(global::haxe.lang.Null<object>.ofDynamic<bool>(arr[0]), global::haxe.lang.Null<object>.ofDynamic<bool>(arr[1]), global::haxe.lang.Null<object>.ofDynamic<bool>(arr[2]), global::haxe.lang.Null<object>.ofDynamic<bool>(arr[3]), global::haxe.lang.Null<object>.ofDynamic<bool>(arr[4]), global::haxe.lang.Null<object>.ofDynamic<bool>(arr[5]));
			}
			#line default
		}
		
		
		public  bool showClef;
		
		public  bool showKey;
		
		public  bool showTime;
		
		public  bool showCautClef;
		
		public  bool showCautKey;
		
		public  bool showCautTime;
		
		public  double calculatedWidth;
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				switch (hash){
					case 1507188968:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						this.calculatedWidth = ((double) (@value) );
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return @value;
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				switch (hash){
					case 1507188968:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						this.calculatedWidth = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return @value;
					}
					
					
					case 1438904647:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						this.showCautTime = global::haxe.lang.Runtime.toBool(@value);
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return @value;
					}
					
					
					case 1691249061:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						this.showCautKey = global::haxe.lang.Runtime.toBool(@value);
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return @value;
					}
					
					
					case 1250529412:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						this.showCautClef = global::haxe.lang.Runtime.toBool(@value);
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return @value;
					}
					
					
					case 881037226:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						this.showTime = global::haxe.lang.Runtime.toBool(@value);
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return @value;
					}
					
					
					case 2073946274:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						this.showKey = global::haxe.lang.Runtime.toBool(@value);
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return @value;
					}
					
					
					case 692661991:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						this.showClef = global::haxe.lang.Runtime.toBool(@value);
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return @value;
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				switch (hash){
					case 1507188968:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return this.calculatedWidth;
					}
					
					
					case 1438904647:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return this.showCautTime;
					}
					
					
					case 1691249061:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return this.showCautKey;
					}
					
					
					case 1250529412:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return this.showCautClef;
					}
					
					
					case 881037226:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return this.showTime;
					}
					
					
					case 2073946274:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return this.showKey;
					}
					
					
					case 692661991:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return this.showClef;
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				switch (hash){
					case 1507188968:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return this.calculatedWidth;
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				baseArr.push("calculatedWidth");
				#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				baseArr.push("showCautTime");
				#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				baseArr.push("showCautKey");
				#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				baseArr.push("showCautClef");
				#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				baseArr.push("showTime");
				#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				baseArr.push("showKey");
				#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				baseArr.push("showClef");
				#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
				{
					#line 7 "F:\\nx3\\src\\nx3\\PBarConfig.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


