
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PSystembarMeasurements : global::haxe.lang.HxObject {
		public    PSystembarMeasurements(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PSystembarMeasurements(global::nx3.PBar bar){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				global::nx3.PSystembarMeasurements.__hx_ctor_nx3_PSystembarMeasurements(this, bar);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PSystembarMeasurements(global::nx3.PSystembarMeasurements __temp_me123, global::nx3.PBar bar){
			unchecked {
				#line 60 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				__temp_me123.barlineWidth = ((double) (0) );
				#line 56 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				__temp_me123.cautTimeWidth = ((double) (0) );
				#line 52 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				__temp_me123.cautKeyWidth = ((double) (0) );
				#line 48 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				__temp_me123.cautClefWidth = ((double) (0) );
				#line 42 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				__temp_me123.contentWidth = ((double) (0) );
				#line 40 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				__temp_me123.contentXZero = ((double) (0) );
				#line 36 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				__temp_me123.leftContentMarginWidth = ((double) (0) );
				#line 32 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				__temp_me123.timeWidth = ((double) (0) );
				#line 28 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				__temp_me123.keyWidth = ((double) (0) );
				#line 24 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				__temp_me123.clefWidth = ((double) (0) );
				#line 20 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				__temp_me123.ackoladeWidth = ((double) (0) );
				#line 16 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				__temp_me123.bar = bar;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				return new global::nx3.PSystembarMeasurements(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				return new global::nx3.PSystembarMeasurements(((global::nx3.PBar) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PBar bar;
		
		public  double ackoladeWidth;
		
		public virtual   double getAckoladeXPosition(){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				return ((double) (0) );
			}
			#line default
		}
		
		
		public  double clefWidth;
		
		public virtual   double getClefXPosition(){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				return ( this.getAckoladeXPosition() + this.ackoladeWidth );
			}
			#line default
		}
		
		
		public  double keyWidth;
		
		public virtual   double getKeyXPosition(){
			unchecked {
				#line 29 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				return ( this.getClefXPosition() + this.clefWidth );
			}
			#line default
		}
		
		
		public  double timeWidth;
		
		public virtual   double getTimeXPosition(){
			unchecked {
				#line 33 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				return ( this.getKeyXPosition() + this.keyWidth );
			}
			#line default
		}
		
		
		public  double leftContentMarginWidth;
		
		public virtual   double getLeftContentMarginXPosition(){
			unchecked {
				#line 37 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				return ( this.getTimeXPosition() + this.timeWidth );
			}
			#line default
		}
		
		
		public  double contentXZero;
		
		public virtual   double getContentXZero(){
			unchecked {
				#line 41 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				return this.contentXZero;
			}
			#line default
		}
		
		
		public  double contentWidth;
		
		public virtual   double getContentXPosition(){
			unchecked {
				#line 43 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				return ( this.getLeftContentMarginXPosition() + this.leftContentMarginWidth );
			}
			#line default
		}
		
		
		public virtual   double getContentWidth(){
			unchecked {
				#line 44 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				return this.contentWidth;
			}
			#line default
		}
		
		
		public virtual   void setContentWidth(double val){
			unchecked {
				#line 45 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				this.contentWidth = val;
			}
			#line default
		}
		
		
		public  double cautClefWidth;
		
		public virtual   double getCautClefXPosition(){
			unchecked {
				#line 49 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				return ( this.getContentXPosition() + this.contentWidth );
			}
			#line default
		}
		
		
		public  double cautKeyWidth;
		
		public virtual   double getCautKeyXPosition(){
			unchecked {
				#line 53 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				return ( this.getCautClefXPosition() + this.cautClefWidth );
			}
			#line default
		}
		
		
		public  double cautTimeWidth;
		
		public virtual   double getCautTimeXPosition(){
			unchecked {
				#line 57 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				return ( this.getCautKeyXPosition() + this.cautKeyWidth );
			}
			#line default
		}
		
		
		public  double barlineWidth;
		
		public virtual   double getBarlineXPosition(){
			unchecked {
				#line 61 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				return ( this.getCautTimeXPosition() + this.cautTimeWidth );
			}
			#line default
		}
		
		
		public virtual   double getTotalWidth(){
			unchecked {
				#line 65 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				return ( this.getBarlineXPosition() + this.barlineWidth );
			}
			#line default
		}
		
		
		public virtual   global::nx3.PSystembarMeasurements init(object barAttributes, global::nx3.PBarConfig barConfig, object cautAttributes){
			unchecked {
				#line 69 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				global::nx3.PBarWidthCalculator calculator = new global::nx3.PBarWidthCalculator();
				#line 71 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				this.ackoladeWidth = calculator.getLeftBarlineWidth(global::nx3.EBarlineLeft.None);
				if (barConfig.showClef) {
					#line 72 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
					this.clefWidth = calculator.getClefsWidth(((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(barAttributes, "clefs", 1213953513, true)) ))) ));
				}
				
				#line 73 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				if (barConfig.showKey) {
					#line 73 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
					this.keyWidth = calculator.getKeysWidth(((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(barAttributes, "keys", 1191633396, true)) ))) ));
				}
				
				#line 74 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				if (barConfig.showTime) {
					#line 74 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
					this.timeWidth += calculator.getTimeWidth(((global::nx3.ETime) (global::haxe.lang.Runtime.getField(barAttributes, "time", 1291635725, true)) ));
				}
				
				#line 76 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				this.leftContentMarginWidth = calculator.getContentLeftMarginWidth(this.bar);
				this.contentWidth = calculator.getContentWidth(this.bar);
				this.contentXZero = this.bar.getContentXZero();
				#line 80 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				if (( barConfig.showCautClef && ( ! (global::haxe.lang.Runtime.refEq(cautAttributes, default(object))) ) )) {
					#line 80 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
					this.cautClefWidth = calculator.getClefsWidth(((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(cautAttributes, "clefs", 1213953513, true)) ))) ));
				}
				
				#line 81 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				if (( barConfig.showCautKey && ( ! (global::haxe.lang.Runtime.refEq(cautAttributes, default(object))) ) )) {
					#line 81 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
					this.cautKeyWidth = calculator.getKeysWidth(((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(cautAttributes, "keys", 1191633396, true)) ))) ));
				}
				
				#line 82 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				if (( barConfig.showCautTime && ( ! (global::haxe.lang.Runtime.refEq(cautAttributes, default(object))) ) )) {
					#line 82 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
					this.cautTimeWidth += calculator.getTimeWidth(((global::nx3.ETime) (global::haxe.lang.Runtime.getField(cautAttributes, "time", 1291635725, true)) ));
				}
				
				#line 83 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				this.barlineWidth = calculator.getBarlineWidth(global::nx3.EBarline.Normal);
				#line 85 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				return this;
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				switch (hash){
					case 840283455:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.barlineWidth = ((double) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 193254012:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.cautTimeWidth = ((double) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 557350276:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.cautKeyWidth = ((double) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 1321457183:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.cautClefWidth = ((double) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 821103117:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.contentWidth = ((double) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 980298695:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.contentXZero = ((double) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 992123942:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.leftContentMarginWidth = ((double) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 2136181433:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.timeWidth = ((double) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 248273895:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.keyWidth = ((double) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 1116900956:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.clefWidth = ((double) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 1076577578:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.ackoladeWidth = ((double) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				switch (hash){
					case 840283455:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.barlineWidth = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 193254012:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.cautTimeWidth = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 557350276:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.cautKeyWidth = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 1321457183:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.cautClefWidth = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 821103117:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.contentWidth = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 980298695:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.contentXZero = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 992123942:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.leftContentMarginWidth = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 2136181433:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.timeWidth = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 248273895:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.keyWidth = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 1116900956:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.clefWidth = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 1076577578:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.ackoladeWidth = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					case 4895187:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.bar = ((global::nx3.PBar) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				switch (hash){
					case 1169898256:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("init") ), ((int) (1169898256) ))) );
					}
					
					
					case 762709976:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getTotalWidth") ), ((int) (762709976) ))) );
					}
					
					
					case 1752272304:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBarlineXPosition") ), ((int) (1752272304) ))) );
					}
					
					
					case 840283455:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.barlineWidth;
					}
					
					
					case 1358125889:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getCautTimeXPosition") ), ((int) (1358125889) ))) );
					}
					
					
					case 193254012:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.cautTimeWidth;
					}
					
					
					case 1866357877:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getCautKeyXPosition") ), ((int) (1866357877) ))) );
					}
					
					
					case 557350276:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.cautKeyWidth;
					}
					
					
					case 767585380:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getCautClefXPosition") ), ((int) (767585380) ))) );
					}
					
					
					case 1321457183:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.cautClefWidth;
					}
					
					
					case 1336335567:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("setContentWidth") ), ((int) (1336335567) ))) );
					}
					
					
					case 1406885827:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getContentWidth") ), ((int) (1406885827) ))) );
					}
					
					
					case 907174270:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getContentXPosition") ), ((int) (907174270) ))) );
					}
					
					
					case 821103117:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.contentWidth;
					}
					
					
					case 1566081405:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getContentXZero") ), ((int) (1566081405) ))) );
					}
					
					
					case 980298695:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.contentXZero;
					}
					
					
					case 2007741335:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getLeftContentMarginXPosition") ), ((int) (2007741335) ))) );
					}
					
					
					case 992123942:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.leftContentMarginWidth;
					}
					
					
					case 1620764926:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getTimeXPosition") ), ((int) (1620764926) ))) );
					}
					
					
					case 2136181433:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.timeWidth;
					}
					
					
					case 8951128:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getKeyXPosition") ), ((int) (8951128) ))) );
					}
					
					
					case 248273895:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.keyWidth;
					}
					
					
					case 1030224417:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getClefXPosition") ), ((int) (1030224417) ))) );
					}
					
					
					case 1116900956:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.clefWidth;
					}
					
					
					case 779336943:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getAckoladeXPosition") ), ((int) (779336943) ))) );
					}
					
					
					case 1076577578:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.ackoladeWidth;
					}
					
					
					case 4895187:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.bar;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				switch (hash){
					case 840283455:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.barlineWidth;
					}
					
					
					case 193254012:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.cautTimeWidth;
					}
					
					
					case 557350276:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.cautKeyWidth;
					}
					
					
					case 1321457183:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.cautClefWidth;
					}
					
					
					case 821103117:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.contentWidth;
					}
					
					
					case 980298695:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.contentXZero;
					}
					
					
					case 992123942:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.leftContentMarginWidth;
					}
					
					
					case 2136181433:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.timeWidth;
					}
					
					
					case 248273895:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.keyWidth;
					}
					
					
					case 1116900956:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.clefWidth;
					}
					
					
					case 1076577578:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.ackoladeWidth;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				switch (hash){
					case 1169898256:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.init(dynargs[0], ((global::nx3.PBarConfig) (dynargs[1]) ), dynargs[2]);
					}
					
					
					case 762709976:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.getTotalWidth();
					}
					
					
					case 1752272304:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.getBarlineXPosition();
					}
					
					
					case 1358125889:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.getCautTimeXPosition();
					}
					
					
					case 1866357877:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.getCautKeyXPosition();
					}
					
					
					case 767585380:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.getCautClefXPosition();
					}
					
					
					case 1336335567:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						this.setContentWidth(((double) (global::haxe.lang.Runtime.toDouble(dynargs[0])) ));
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						break;
					}
					
					
					case 1406885827:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.getContentWidth();
					}
					
					
					case 907174270:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.getContentXPosition();
					}
					
					
					case 1566081405:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.getContentXZero();
					}
					
					
					case 2007741335:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.getLeftContentMarginXPosition();
					}
					
					
					case 1620764926:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.getTimeXPosition();
					}
					
					
					case 8951128:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.getKeyXPosition();
					}
					
					
					case 1030224417:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.getClefXPosition();
					}
					
					
					case 779336943:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return this.getAckoladeXPosition();
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				baseArr.push("barlineWidth");
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				baseArr.push("cautTimeWidth");
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				baseArr.push("cautKeyWidth");
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				baseArr.push("cautClefWidth");
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				baseArr.push("contentWidth");
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				baseArr.push("contentXZero");
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				baseArr.push("leftContentMarginWidth");
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				baseArr.push("timeWidth");
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				baseArr.push("keyWidth");
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				baseArr.push("clefWidth");
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				baseArr.push("ackoladeWidth");
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				baseArr.push("bar");
				#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
				{
					#line 11 "F:\\nx3\\src\\nx3\\PSystembarMeasurements.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


