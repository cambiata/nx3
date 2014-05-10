
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PSystemBarWidthCalculator : global::haxe.lang.HxObject {
		public    PSystemBarWidthCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PSystemBarWidthCalculator(global::nx3.IBarWidthCalculator barWidthCalculator){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				global::nx3.PSystemBarWidthCalculator.__hx_ctor_nx3_PSystemBarWidthCalculator(this, barWidthCalculator);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PSystemBarWidthCalculator(global::nx3.PSystemBarWidthCalculator __temp_me121, global::nx3.IBarWidthCalculator barWidthCalculator){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				if (( barWidthCalculator != default(global::nx3.IBarWidthCalculator) )) {
					#line 16 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
					__temp_me121.barWidthCalculator = barWidthCalculator;
				}
				 else {
					#line 16 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
					__temp_me121.barWidthCalculator = new global::nx3.PSimpleBarWidthCalculator();
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				return new global::nx3.PSystemBarWidthCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				return new global::nx3.PSystemBarWidthCalculator(((global::nx3.IBarWidthCalculator) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.IBarWidthCalculator barWidthCalculator;
		
		public virtual   object getBarWidth(global::nx3.PBar bar, object barAttributes, global::nx3.PBarConfig barConfig, object cautAttributes){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				object result = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{}), new global::Array<object>(new object[]{}), new global::Array<int>(new int[]{120, 193254012, 248273895, 557350276, 821103117, 840283455, 980298695, 1076577578, 1116900956, 1191108142, 1247983110, 1321457183, 2136181433}), new global::Array<double>(new double[]{((double) (0) ), ((double) (0) ), ((double) (0) ), ((double) (0) ), ((double) (0) ), ((double) (0) ), ((double) (0) ), ((double) (0) ), ((double) (0) ), ((double) (0) ), ((double) (0) ), ((double) (0) ), ((double) (0) )}));
				#line 38 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				double totalwidth = 0.0;
				#line 42 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				global::haxe.lang.Runtime.setField_f(result, "ackoladeWidth", 1076577578, ((double) (this.barWidthCalculator.getLeftBarlineWidth(global::nx3.EBarlineLeft.None)) ));
				totalwidth += ((double) (global::haxe.lang.Runtime.getField_f(result, "ackoladeWidth", 1076577578, true)) );
				#line 45 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				if (barConfig.showClef) {
					#line 45 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
					global::haxe.lang.Runtime.setField_f(result, "clefWidth", 1116900956, ((double) (this.barWidthCalculator.getClefsWidth(((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(barAttributes, "clefs", 1213953513, true)) ))) ))) ));
				}
				
				#line 46 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				totalwidth += ((double) (global::haxe.lang.Runtime.getField_f(result, "clefWidth", 1116900956, true)) );
				#line 48 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				if (barConfig.showKey) {
					#line 48 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
					global::haxe.lang.Runtime.setField_f(result, "keyWidth", 248273895, ((double) (this.barWidthCalculator.getKeysWidth(((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(barAttributes, "keys", 1191633396, true)) ))) ))) ));
				}
				
				#line 49 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				totalwidth += ((double) (global::haxe.lang.Runtime.getField_f(result, "keyWidth", 248273895, true)) );
				#line 51 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				if (barConfig.showTime) {
					#line 51 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
					object __temp_dynop170 = result;
					#line 51 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
					global::haxe.lang.Runtime.setField_f(__temp_dynop170, "timeWidth", 2136181433, ((double) (( ((double) (global::haxe.lang.Runtime.getField_f(__temp_dynop170, "timeWidth", 2136181433, true)) ) + this.barWidthCalculator.getTimeWidth(((global::nx3.ETime) (global::haxe.lang.Runtime.getField(barAttributes, "time", 1291635725, true)) )) )) ));
				}
				
				#line 52 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				totalwidth += ((double) (global::haxe.lang.Runtime.getField_f(result, "timeWidth", 2136181433, true)) );
				#line 56 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				global::haxe.lang.Runtime.setField_f(result, "contentLeftMargin", 1191108142, ((double) (this.barWidthCalculator.getContentLeftMarginWidth(bar)) ));
				totalwidth += ((double) (global::haxe.lang.Runtime.getField_f(result, "contentLeftMargin", 1191108142, true)) );
				#line 59 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				global::haxe.lang.Runtime.setField_f(result, "contentWidth", 821103117, ((double) (this.barWidthCalculator.getContentWidth(bar)) ));
				totalwidth += ((double) (global::haxe.lang.Runtime.getField_f(result, "contentWidth", 821103117, true)) );
				global::haxe.lang.Runtime.setField_f(result, "contentXZero", 980298695, ((double) (bar.getContentXZero()) ));
				#line 65 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				if (( barConfig.showCautClef && ( ! (global::haxe.lang.Runtime.refEq(cautAttributes, default(object))) ) )) {
					#line 65 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
					global::haxe.lang.Runtime.setField_f(result, "cautClefWidth", 1321457183, ((double) (this.barWidthCalculator.getClefsWidth(((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(cautAttributes, "clefs", 1213953513, true)) ))) ))) ));
				}
				
				#line 66 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				totalwidth += ((double) (global::haxe.lang.Runtime.getField_f(result, "cautClefWidth", 1321457183, true)) );
				#line 69 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				if (( barConfig.showCautKey && ( ! (global::haxe.lang.Runtime.refEq(cautAttributes, default(object))) ) )) {
					#line 69 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
					global::haxe.lang.Runtime.setField_f(result, "cautKeyWidth", 557350276, ((double) (this.barWidthCalculator.getKeysWidth(((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(cautAttributes, "keys", 1191633396, true)) ))) ))) ));
				}
				
				#line 70 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				totalwidth += ((double) (global::haxe.lang.Runtime.getField_f(result, "cautKeyWidth", 557350276, true)) );
				#line 72 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				if (( barConfig.showCautTime && ( ! (global::haxe.lang.Runtime.refEq(cautAttributes, default(object))) ) )) {
					#line 72 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
					object __temp_dynop171 = result;
					#line 72 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
					global::haxe.lang.Runtime.setField_f(__temp_dynop171, "cautTimeWidth", 193254012, ((double) (( ((double) (global::haxe.lang.Runtime.getField_f(__temp_dynop171, "cautTimeWidth", 193254012, true)) ) + this.barWidthCalculator.getTimeWidth(((global::nx3.ETime) (global::haxe.lang.Runtime.getField(cautAttributes, "time", 1291635725, true)) )) )) ));
				}
				
				#line 73 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				totalwidth += ((double) (global::haxe.lang.Runtime.getField_f(result, "cautTimeWidth", 193254012, true)) );
				#line 75 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				global::haxe.lang.Runtime.setField_f(result, "barlineWidth", 840283455, ((double) (this.barWidthCalculator.getBarlineWidth(global::nx3.EBarline.Normal)) ));
				totalwidth += ((double) (global::haxe.lang.Runtime.getField_f(result, "barlineWidth", 840283455, true)) );
				#line 80 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				global::haxe.lang.Runtime.setField_f(result, "width", 1247983110, ((double) (totalwidth) ));
				#line 82 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				return result;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				switch (hash){
					case 1770276373:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
						this.barWidthCalculator = ((global::nx3.IBarWidthCalculator) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				switch (hash){
					case 1059371497:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBarWidth") ), ((int) (1059371497) ))) );
					}
					
					
					case 1770276373:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
						return this.barWidthCalculator;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				switch (hash){
					case 1059371497:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
						return this.getBarWidth(((global::nx3.PBar) (dynargs[0]) ), dynargs[1], ((global::nx3.PBarConfig) (dynargs[2]) ), dynargs[3]);
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				baseArr.push("barWidthCalculator");
				#line 10 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
				{
					#line 10 "F:\\nx3\\src\\nx3\\PSystemBarWidthCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


