
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PSystemBar : global::haxe.lang.HxObject {
		public    PSystemBar(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PSystemBar(global::nx3.PBar bar, global::nx3.PBarConfig barConfig, global::nx3.PSystembarMeasurements barMeasurements, object actAttributes, object caAttributes){
			unchecked {
				#line 23 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				global::nx3.PSystemBar.__hx_ctor_nx3_PSystemBar(this, bar, barConfig, barMeasurements, actAttributes, caAttributes);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PSystemBar(global::nx3.PSystemBar __temp_me122, global::nx3.PBar bar, global::nx3.PBarConfig barConfig, global::nx3.PSystembarMeasurements barMeasurements, object actAttributes, object caAttributes){
			unchecked {
				#line 39 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				__temp_me122.stretchamount = ((double) (0) );
				#line 25 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				__temp_me122.bar = bar;
				__temp_me122.bar.systembar = __temp_me122;
				__temp_me122.barConfig = barConfig;
				__temp_me122.barMeasurements = barMeasurements;
				__temp_me122.actAttributes = actAttributes;
				__temp_me122.caAttributes = caAttributes;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				return new global::nx3.PSystemBar(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				return new global::nx3.PSystemBar(((global::nx3.PBar) (arr[0]) ), ((global::nx3.PBarConfig) (arr[1]) ), ((global::nx3.PSystembarMeasurements) (arr[2]) ), ((object) (arr[3]) ), ((object) (arr[4]) ));
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
				#line 42 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				if (( amount == this.stretchamount )) {
					#line 42 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
					return ;
				}
				
				#line 43 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				global::nx3.PBarStretchCalculator calculator = new global::nx3.PBarStretchCalculator(((global::nx3.PSystemBar) (this) ));
				if (( amount == 0 )) {
					#line 46 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
					calculator.resetStretch();
				}
				 else {
					#line 51 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
					calculator.stretch(amount);
				}
				
			}
			#line default
		}
		
		
		public  global::nx3.PSystembarMeasurements barMeasurements;
		
		public virtual   global::nx3.PSystembarMeasurements getBarMeasurements(){
			unchecked {
				#line 58 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				if (( this.barMeasurements != default(global::nx3.PSystembarMeasurements) )) {
					#line 58 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
					return this.barMeasurements;
				}
				
				#line 60 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				this.barMeasurements = new global::nx3.PSystembarMeasurements(((global::nx3.PBar) (this.bar) )).init(this.actAttributes, this.barConfig, this.caAttributes);
				return this.barMeasurements;
			}
			#line default
		}
		
		
		public  double xposition;
		
		public virtual   double getXPosition(){
			unchecked {
				#line 67 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				return this.xposition;
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				switch (hash){
					case 740546849:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.xposition = ((double) (@value) );
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					case 1313087901:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.stretchamount = ((double) (@value) );
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					case 1332786453:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.caAttributes = ((object) (@value) );
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					case 1306671305:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.actAttributes = ((object) (@value) );
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					default:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				switch (hash){
					case 740546849:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.xposition = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					case 690070378:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.barMeasurements = ((global::nx3.PSystembarMeasurements) (@value) );
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					case 1313087901:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.stretchamount = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					case 1332786453:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.caAttributes = ((object) (@value) );
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					case 1306671305:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.actAttributes = ((object) (@value) );
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					case 1836915957:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.barConfig = ((global::nx3.PBarConfig) (@value) );
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					case 4895187:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.bar = ((global::nx3.PBar) (@value) );
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return @value;
					}
					
					
					default:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				switch (hash){
					case 355217867:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getXPosition") ), ((int) (355217867) ))) );
					}
					
					
					case 740546849:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.xposition;
					}
					
					
					case 1541882740:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBarMeasurements") ), ((int) (1541882740) ))) );
					}
					
					
					case 690070378:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.barMeasurements;
					}
					
					
					case 1737368244:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("setBarStretch") ), ((int) (1737368244) ))) );
					}
					
					
					case 1313087901:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.stretchamount;
					}
					
					
					case 1332786453:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.caAttributes;
					}
					
					
					case 1306671305:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.actAttributes;
					}
					
					
					case 1836915957:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.barConfig;
					}
					
					
					case 4895187:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.bar;
					}
					
					
					default:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				switch (hash){
					case 740546849:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.xposition;
					}
					
					
					case 1313087901:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.stretchamount;
					}
					
					
					case 1332786453:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return ((double) (global::haxe.lang.Runtime.toDouble(this.caAttributes)) );
					}
					
					
					case 1306671305:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return ((double) (global::haxe.lang.Runtime.toDouble(this.actAttributes)) );
					}
					
					
					default:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				switch (hash){
					case 355217867:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.getXPosition();
					}
					
					
					case 1541882740:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return this.getBarMeasurements();
					}
					
					
					case 1737368244:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						this.setBarStretch(((double) (global::haxe.lang.Runtime.toDouble(dynargs[0])) ));
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						break;
					}
					
					
					default:
					{
						#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				baseArr.push("xposition");
				#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				baseArr.push("barMeasurements");
				#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				baseArr.push("stretchamount");
				#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				baseArr.push("caAttributes");
				#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				baseArr.push("actAttributes");
				#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				baseArr.push("barConfig");
				#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				baseArr.push("bar");
				#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
				{
					#line 21 "F:\\nx3\\src\\nx3\\PSystemBar.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


