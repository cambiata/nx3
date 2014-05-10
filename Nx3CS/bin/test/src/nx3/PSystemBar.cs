
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PSystemBar : global::haxe.lang.HxObject {
		public    PSystemBar(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PSystemBar(global::nx3.PBar bar, global::nx3.PBarConfig barConfig, object barWidths, object actAttributes, object caAttributes){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				global::nx3.PSystemBar.__hx_ctor_nx3_PSystemBar(this, bar, barConfig, barWidths, actAttributes, caAttributes);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PSystemBar(global::nx3.PSystemBar __temp_me120, global::nx3.PBar bar, global::nx3.PBarConfig barConfig, object barWidths, object actAttributes, object caAttributes){
			unchecked {
				#line 37 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				__temp_me120.stretchamount = ((double) (0) );
				#line 24 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				__temp_me120.bar = bar;
				__temp_me120.barConfig = barConfig;
				__temp_me120.barWidths = barWidths;
				__temp_me120.actAttributes = actAttributes;
				__temp_me120.caAttributes = caAttributes;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				return new global::nx3.PSystemBar(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				return new global::nx3.PSystemBar(((global::nx3.PBar) (arr[0]) ), ((global::nx3.PBarConfig) (arr[1]) ), ((object) (arr[2]) ), ((object) (arr[3]) ), ((object) (arr[4]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PBar bar;
		
		public  global::nx3.PBarConfig barConfig;
		
		public  object actAttributes;
		
		public  object caAttributes;
		
		public  double stretchamount;
		
		public virtual   void setBarStretch(double amount){
			unchecked {
				#line 40 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				if (( amount == this.stretchamount )) {
					#line 40 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
					return ;
				}
				
				#line 41 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				global::nx3.PBarStretchCalculator calculator = new global::nx3.PBarStretchCalculator(((global::nx3.PSystemBar) (this) ));
				if (( amount == 0 )) {
					#line 44 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
					calculator.resetStretch();
				}
				 else {
					#line 49 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
					calculator.stretch(amount);
				}
				
			}
			#line default
		}
		
		
		public  object barWidths;
		
		public virtual   object getBarWidths(){
			unchecked {
				#line 56 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				if (( ! (global::haxe.lang.Runtime.refEq(this.barWidths, default(object))) )) {
					#line 56 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
					return this.barWidths;
				}
				
				#line 57 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				this.barWidths = new global::nx3.PSystemBarWidthCalculator(((global::nx3.IBarWidthCalculator) (default(global::nx3.IBarWidthCalculator)) )).getBarWidth(this.bar, this.actAttributes, this.barConfig, this.caAttributes);
				return this.barWidths;
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				switch (hash){
					case 1906791904:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.barWidths = ((object) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					case 1313087901:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.stretchamount = ((double) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					case 1332786453:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.caAttributes = ((object) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					case 1306671305:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.actAttributes = ((object) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					default:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				switch (hash){
					case 1906791904:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.barWidths = ((object) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					case 1313087901:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.stretchamount = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					case 1332786453:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.caAttributes = ((object) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					case 1306671305:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.actAttributes = ((object) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					case 1836915957:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.barConfig = ((global::nx3.PBarConfig) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					case 4895187:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.bar = ((global::nx3.PBar) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					default:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				switch (hash){
					case 16642666:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBarWidths") ), ((int) (16642666) ))) );
					}
					
					
					case 1906791904:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.barWidths;
					}
					
					
					case 1737368244:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("setBarStretch") ), ((int) (1737368244) ))) );
					}
					
					
					case 1313087901:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.stretchamount;
					}
					
					
					case 1332786453:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.caAttributes;
					}
					
					
					case 1306671305:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.actAttributes;
					}
					
					
					case 1836915957:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.barConfig;
					}
					
					
					case 4895187:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.bar;
					}
					
					
					default:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				switch (hash){
					case 1906791904:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return ((double) (global::haxe.lang.Runtime.toDouble(this.barWidths)) );
					}
					
					
					case 1313087901:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.stretchamount;
					}
					
					
					case 1332786453:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return ((double) (global::haxe.lang.Runtime.toDouble(this.caAttributes)) );
					}
					
					
					case 1306671305:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return ((double) (global::haxe.lang.Runtime.toDouble(this.actAttributes)) );
					}
					
					
					default:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				switch (hash){
					case 16642666:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.getBarWidths();
					}
					
					
					case 1737368244:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.setBarStretch(((double) (global::haxe.lang.Runtime.toDouble(dynargs[0])) ));
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						break;
					}
					
					
					default:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				baseArr.push("barWidths");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				baseArr.push("stretchamount");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				baseArr.push("caAttributes");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				baseArr.push("actAttributes");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				baseArr.push("barConfig");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				baseArr.push("bar");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				{
					#line 20 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


