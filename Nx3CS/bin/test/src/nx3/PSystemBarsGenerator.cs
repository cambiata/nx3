
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PSystemBarsGenerator : global::haxe.lang.HxObject {
		static PSystemBarsGenerator() {
			#line 22 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
			global::nx3.PSystemBarsGenerator.defaultClef = global::nx3.EClef.ClefF;
			global::nx3.PSystemBarsGenerator.defaultKey = global::nx3.EKey.Flat2;
			global::nx3.PSystemBarsGenerator.defaultTime = global::nx3.ETime.Time6_4;
		}
		public    PSystemBarsGenerator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PSystemBarsGenerator(global::Array<object> bars, object systemConfig, object prevBarAttributes, double breakSystemwidth, global::nx3.IBarWidthCalculator barWidthCalculator){
			unchecked {
				#line 33 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				global::nx3.PSystemBarsGenerator.__hx_ctor_nx3_PSystemBarsGenerator(this, bars, systemConfig, prevBarAttributes, breakSystemwidth, barWidthCalculator);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PSystemBarsGenerator(global::nx3.PSystemBarsGenerator __temp_me122, global::Array<object> bars, object systemConfig, object prevBarAttributes, double breakSystemwidth, global::nx3.IBarWidthCalculator barWidthCalculator){
			unchecked {
				#line 35 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				__temp_me122.bars = bars;
				__temp_me122.systemConfig = systemConfig;
				__temp_me122.prevBarAttributes = prevBarAttributes;
				__temp_me122.breakSystemwidth = breakSystemwidth;
				__temp_me122.system = new global::nx3.PSystem();
				__temp_me122.barWidthCalculator = barWidthCalculator;
			}
			#line default
		}
		
		
		public static  global::nx3.EClef defaultClef;
		
		public static  global::nx3.EKey defaultKey;
		
		public static  global::nx3.ETime defaultTime;
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				return new global::nx3.PSystemBarsGenerator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				return new global::nx3.PSystemBarsGenerator(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ), ((object) (arr[1]) ), ((object) (arr[2]) ), ((double) (global::haxe.lang.Runtime.toDouble(arr[3])) ), ((global::nx3.IBarWidthCalculator) (arr[4]) ));
			}
			#line default
		}
		
		
		public  global::Array<object> bars;
		
		public  object systemConfig;
		
		public  object prevBarAttributes;
		
		public  double breakSystemwidth;
		
		public  global::nx3.PSystem system;
		
		public  global::nx3.IBarWidthCalculator barWidthCalculator;
		
		public virtual   global::nx3.PSystem getSystem(){
			unchecked {
				#line 45 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				this.system.systemBreakWidth = this.breakSystemwidth;
				#line 47 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				bool tryAnotherBar = true;
				while (tryAnotherBar){
					#line 50 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					global::nx3.PBar currentBar = ((global::nx3.PBar) (this.bars[0]) );
					global::nx3.PBarConfig currentBarConfig = new global::nx3.PBarConfig(((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ), ((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ), ((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ), ((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ), ((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ), ((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ));
					object currentBarAttributes = this.getBarAttributes(currentBar);
					#line 54 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					if (( ! (global::haxe.lang.Runtime.refEq(this.prevBarAttributes, default(object))) )) {
						#line 55 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						this.overrideActualAttributesFromPrevBarAttributes(currentBarAttributes, currentBar, this.prevBarAttributes);
					}
					
					#line 57 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					this.overrideActualAttributesWithDefaultsIfStillNotSet(currentBarAttributes);
					#line 60 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					if (( this.system.getSystembars().length == 0 )) {
						#line 62 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						this.adaptBarConfig(currentBar, currentBarConfig, this.prevBarAttributes, global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.getField(this.systemConfig, "showFirstClef", 1756293853, true)), global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.getField(this.systemConfig, "showFirstKey", 480140652, true)), global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.getField(this.systemConfig, "showFirstTime", 1944669088, true)));
					}
					 else {
						#line 66 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						this.adaptBarConfig(currentBar, currentBarConfig, this.prevBarAttributes, global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.getField(this.systemConfig, "showFollowingClef", 2050428094, true)), global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.getField(this.systemConfig, "showFollowingKey", 96260779, true)), global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.getField(this.systemConfig, "showFollowingTime", 91319681, true)));
					}
					
					#line 69 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					global::nx3.PSystembarMeasurements currentMeasurements = new global::nx3.PSystembarMeasurements(((global::nx3.PBar) (currentBar) )).init(currentBarAttributes, currentBarConfig, default(object));
					#line 71 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					double testSystemWidth = ( this.system.width + currentMeasurements.getTotalWidth() );
					if (( testSystemWidth > this.breakSystemwidth )) {
						#line 74 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						this.takeCareOfLastBarCautions();
						#line 76 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return this.system;
					}
					
					#line 79 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					this.system.width += currentMeasurements.getTotalWidth();
					this.system.getSystembars().push(new global::nx3.PSystemBar(((global::nx3.PBar) (currentBar) ), ((global::nx3.PBarConfig) (currentBarConfig) ), ((global::nx3.PSystembarMeasurements) (currentMeasurements) ), ((object) (currentBarAttributes) ), ((object) (default(object)) )));
					#line 88 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					this.bars.shift();
					#line 90 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					this.prevBarAttributes = this.copyBarAttributes(currentBarAttributes);
					if (( this.bars.length < 1 )) {
						#line 91 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						tryAnotherBar = false;
					}
					
				}
				
				#line 96 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				this.system.status = global::nx3.PSystemStatus.Ok;
				return this.system;
			}
			#line default
		}
		
		
		public virtual   void takeCareOfLastBarCautions(){
			unchecked {
				#line 116 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				this.system.status = global::nx3.PSystemStatus.Ok;
				global::nx3.PSystemBar __temp_stmt245 = default(global::nx3.PSystemBar);
				#line 117 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				{
					#line 117 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					global::Array<object> array = this.system.getSystembars();
					#line 117 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					__temp_stmt245 = ((global::nx3.PSystemBar) (array[( array.length - 1 )]) );
				}
				
				#line 117 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				global::nx3.PBar sysBar = __temp_stmt245.bar;
				global::nx3.PSystemBar __temp_stmt246 = default(global::nx3.PSystemBar);
				#line 118 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				{
					#line 118 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					global::Array<object> array1 = this.system.getSystembars();
					#line 118 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					__temp_stmt246 = ((global::nx3.PSystemBar) (array1[( array1.length - 1 )]) );
				}
				
				#line 118 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				object sysBarAttributes = __temp_stmt246.actAttributes;
				#line 120 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				global::nx3.PBar __temp_stmt247 = default(global::nx3.PBar);
				#line 120 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				{
					#line 120 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					global::Array<object> array2 = this.bars;
					#line 120 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					__temp_stmt247 = ((global::nx3.PBar) (array2[( array2.length - 1 )]) );
				}
				
				#line 120 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				if (( sysBar != __temp_stmt247 )) {
					#line 122 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					global::nx3.PBar nextBar = ((global::nx3.PBar) (this.bars[0]) );
					object nextBarAttributes = this.getBarAttributes(nextBar);
					#line 125 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					bool newClef = this.arrayBNullOrDiffers<global::nx3.EClef>(((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(sysBarAttributes, "clefs", 1213953513, true)) ))) ), ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(nextBarAttributes, "clefs", 1213953513, true)) ))) ));
					bool newKey = this.arrayBNullOrDiffers<global::nx3.EKey>(((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(sysBarAttributes, "keys", 1191633396, true)) ))) ), ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(nextBarAttributes, "keys", 1191633396, true)) ))) ));
					bool newTime = this.nullOrDiffers<global::nx3.ETime>(((global::nx3.ETime) (global::haxe.lang.Runtime.getField(sysBarAttributes, "time", 1291635725, true)) ), ((global::nx3.ETime) (global::haxe.lang.Runtime.getField(nextBarAttributes, "time", 1291635725, true)) ));
					#line 129 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					if (( ( newClef || newKey ) || newTime )) {
						#line 132 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						object sysBarCautAttributes = this.copyAndRemoveRedundantAttributes(sysBarAttributes, nextBarAttributes);
						global::nx3.PSystemBar __temp_stmt248 = default(global::nx3.PSystemBar);
						#line 133 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						{
							#line 133 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							global::Array<object> array3 = this.system.getSystembars();
							#line 133 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							__temp_stmt248 = ((global::nx3.PSystemBar) (array3[( array3.length - 1 )]) );
						}
						
						#line 133 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						global::nx3.PBarConfig sysBarConfig = __temp_stmt248.barConfig;
						global::nx3.PSystemBar __temp_stmt250 = default(global::nx3.PSystemBar);
						#line 134 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						{
							#line 134 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							global::Array<object> array4 = this.system.getSystembars();
							#line 134 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							__temp_stmt250 = ((global::nx3.PSystemBar) (array4[( array4.length - 1 )]) );
						}
						
						#line 134 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						global::nx3.PSystembarMeasurements __temp_stmt249 = __temp_stmt250.getBarMeasurements();
						#line 134 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						double sysBarWidth = __temp_stmt249.getTotalWidth();
						#line 136 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						double systemWidthWithoutLastBar = ( this.system.width - sysBarWidth );
						#line 138 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						global::nx3.PBarConfig sysBarConfigWithCautions = new global::nx3.PBarConfig(new global::haxe.lang.Null<bool>(sysBarConfig.showClef, true), new global::haxe.lang.Null<bool>(sysBarConfig.showKey, true), new global::haxe.lang.Null<bool>(sysBarConfig.showTime, true), ((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ), ((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ), ((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ));
						if (newClef) {
							#line 139 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							sysBarConfigWithCautions.showCautClef = true;
						}
						
						#line 140 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						if (newKey) {
							#line 140 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							sysBarConfigWithCautions.showCautKey = true;
						}
						
						#line 141 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						if (newTime) {
							#line 141 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							sysBarConfigWithCautions.showCautTime = true;
						}
						
						#line 143 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						global::nx3.PSystembarMeasurements measurementsWithCautions = new global::nx3.PSystembarMeasurements(((global::nx3.PBar) (sysBar) )).init(sysBarAttributes, sysBarConfigWithCautions, sysBarCautAttributes);
						#line 145 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						if (( ( systemWidthWithoutLastBar + measurementsWithCautions.getTotalWidth() ) <= this.breakSystemwidth )) {
							#line 147 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							global::nx3.PSystemBar __temp_stmt251 = default(global::nx3.PSystemBar);
							#line 147 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							{
								#line 147 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
								global::Array<object> array5 = this.system.getSystembars();
								#line 147 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
								__temp_stmt251 = ((global::nx3.PSystemBar) (array5[( array5.length - 1 )]) );
							}
							
							#line 147 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							__temp_stmt251.caAttributes = sysBarCautAttributes;
							global::nx3.PSystemBar __temp_stmt252 = default(global::nx3.PSystemBar);
							#line 148 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							{
								#line 148 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
								global::Array<object> array6 = this.system.getSystembars();
								#line 148 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
								__temp_stmt252 = ((global::nx3.PSystemBar) (array6[( array6.length - 1 )]) );
							}
							
							#line 148 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							__temp_stmt252.barConfig = sysBarConfigWithCautions;
							double __temp_stmt253 = ( this.system.getWidth() - sysBarWidth );
							#line 149 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							global::nx3.PSystemBar __temp_stmt256 = default(global::nx3.PSystemBar);
							#line 149 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							{
								#line 149 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
								global::Array<object> array7 = this.system.getSystembars();
								#line 149 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
								__temp_stmt256 = ((global::nx3.PSystemBar) (array7[( array7.length - 1 )]) );
							}
							
							#line 149 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							global::nx3.PSystembarMeasurements __temp_stmt255 = __temp_stmt256.getBarMeasurements();
							#line 149 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							double __temp_stmt254 = __temp_stmt255.getTotalWidth();
							#line 149 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							this.system.width = ( __temp_stmt253 + __temp_stmt254 );
						}
						 else {
							#line 153 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							this.system.status = global::nx3.PSystemStatus.Problem(101, "Last bar fits without caution attributes but not with them");
							if (( this.system.getSystembars().length == 1 )) {
								#line 156 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
								this.system.status = global::nx3.PSystemStatus.Problem(102, "First bar doesn\'t fit when adding required cational attributes");
								return ;
							}
							
							#line 160 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							this.system.getSystembars().pop();
							#line 162 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							this.bars.unshift(sysBar);
							this.system.width = ( this.system.width - sysBarWidth );
							this.system.status = global::nx3.PSystemStatus.Ok;
						}
						
					}
					
				}
				
			}
			#line default
		}
		
		
		public virtual   object copyAndRemoveRedundantAttributes(object sysBarAttributes, object nextBarAttributes){
			unchecked {
				#line 172 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				object result = this.copyBarAttributes(nextBarAttributes);
				{
					#line 173 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					int _g1 = 0;
					#line 173 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					int _g = ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(sysBarAttributes, "clefs", 1213953513, true)) ))) ).length;
					#line 173 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					while (( _g1 < _g )){
						#line 173 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						int i = _g1++;
						#line 173 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						if (( ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(result, "clefs", 1213953513, true)) ))) )[i] == ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(sysBarAttributes, "clefs", 1213953513, true)) ))) )[i] )) {
							#line 173 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(result, "clefs", 1213953513, true)) ))) )[i] = default(global::nx3.EClef);
						}
						
					}
					
				}
				
				#line 174 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				{
					#line 174 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					int _g11 = 0;
					#line 174 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					int _g2 = ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(sysBarAttributes, "keys", 1191633396, true)) ))) ).length;
					#line 174 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					while (( _g11 < _g2 )){
						#line 174 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						int i1 = _g11++;
						#line 174 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						if (( ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(result, "keys", 1191633396, true)) ))) )[i1] == ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(sysBarAttributes, "keys", 1191633396, true)) ))) )[i1] )) {
							#line 174 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(result, "keys", 1191633396, true)) ))) )[i1] = default(global::nx3.EKey);
						}
						
					}
					
				}
				
				#line 175 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				if (( ((global::nx3.ETime) (global::haxe.lang.Runtime.getField(result, "time", 1291635725, true)) ) == ((global::nx3.ETime) (global::haxe.lang.Runtime.getField(sysBarAttributes, "time", 1291635725, true)) ) )) {
					#line 175 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					global::haxe.lang.Runtime.setField(result, "time", 1291635725, default(global::nx3.ETime));
				}
				
				#line 176 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   void adaptBarConfig(global::nx3.PBar bar, global::nx3.PBarConfig barConfig, object prevBarAttributes, bool showClef, bool showKey, bool showTime){
			unchecked {
				#line 181 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				if (( showClef == true )) {
					#line 181 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					showClef = true;
				}
				 else {
					#line 181 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					showClef = false;
				}
				
				#line 182 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				if (( showKey == true )) {
					#line 182 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					showKey = true;
				}
				 else {
					#line 182 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					showKey = false;
				}
				
				#line 183 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				if (( showTime == true )) {
					#line 183 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					showTime = true;
				}
				 else {
					#line 183 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					showTime = false;
				}
				
				#line 184 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				object barAttributes = this.getBarAttributes(bar);
				#line 186 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				{
					#line 186 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					global::nx3.EDisplayALN _g = bar.get_displayClefs();
					#line 186 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					switch (global::Type.enumIndex(_g)){
						case 2:
						{
							#line 188 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							barConfig.showClef = false;
							#line 188 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							break;
						}
						
						
						case 0:
						{
							#line 189 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							barConfig.showClef = true;
							#line 189 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							break;
						}
						
						
						default:
						{
							#line 192 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							barConfig.showClef = showClef;
							if (( ( showClef == false ) && ( ! (global::haxe.lang.Runtime.refEq(prevBarAttributes, default(object))) ) )) {
								#line 195 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
								int _g2 = 0;
								#line 195 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
								int _g1 = ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(prevBarAttributes, "clefs", 1213953513, true)) ))) ).length;
								#line 195 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
								while (( _g2 < _g1 )){
									#line 195 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
									int i = _g2++;
									#line 197 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
									if (( bar.get_clefs()[i] == default(global::nx3.EClef) )) {
										#line 197 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
										continue;
									}
									
									#line 198 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
									if (( bar.get_clefs()[i] == ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(prevBarAttributes, "clefs", 1213953513, true)) ))) )[i] )) {
										#line 198 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
										continue;
									}
									
									#line 199 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
									barConfig.showClef = true;
									break;
								}
								
							}
							
							#line 190 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							break;
						}
						
					}
					
				}
				
				#line 205 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				{
					#line 205 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					global::nx3.EDisplayALN _g3 = bar.get_displayKeys();
					#line 205 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					switch (global::Type.enumIndex(_g3)){
						case 2:
						{
							#line 207 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							barConfig.showKey = false;
							#line 207 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							break;
						}
						
						
						case 0:
						{
							#line 208 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							barConfig.showKey = true;
							#line 208 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							break;
						}
						
						
						default:
						{
							#line 211 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							barConfig.showKey = showKey;
							if (( ( showKey == false ) && ( ! (global::haxe.lang.Runtime.refEq(prevBarAttributes, default(object))) ) )) {
								#line 214 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
								int _g21 = 0;
								#line 214 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
								int _g11 = ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(prevBarAttributes, "keys", 1191633396, true)) ))) ).length;
								#line 214 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
								while (( _g21 < _g11 )){
									#line 214 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
									int i1 = _g21++;
									#line 216 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
									if (( bar.get_keys()[i1] == default(global::nx3.EKey) )) {
										#line 216 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
										continue;
									}
									
									#line 217 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
									if (( bar.get_keys()[i1] == ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(prevBarAttributes, "keys", 1191633396, true)) ))) )[i1] )) {
										#line 217 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
										continue;
									}
									
									#line 218 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
									barConfig.showKey = true;
									break;
								}
								
							}
							
							#line 209 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							break;
						}
						
					}
					
				}
				
				#line 224 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				{
					#line 224 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					global::nx3.EDisplayALN _g4 = bar.get_displayTime();
					#line 224 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					switch (global::Type.enumIndex(_g4)){
						case 2:
						{
							#line 226 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							barConfig.showTime = false;
							#line 226 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							break;
						}
						
						
						case 0:
						{
							#line 227 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							barConfig.showTime = true;
							#line 227 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							break;
						}
						
						
						default:
						{
							#line 229 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							barConfig.showTime = showTime;
							if (( ( showTime == false ) && ( ! (global::haxe.lang.Runtime.refEq(prevBarAttributes, default(object))) ) )) {
								#line 232 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
								if (( bar.get_time() == default(global::nx3.ETime) )) {
									#line 233 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
									{
									}
									
								}
								 else {
									#line 235 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
									if (( bar.get_time() == ((global::nx3.ETime) (global::haxe.lang.Runtime.getField(prevBarAttributes, "time", 1291635725, true)) ) )) {
										#line 236 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
										{
										}
										
									}
									 else {
										#line 239 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
										barConfig.showTime = true;
									}
									
								}
								
							}
							
							#line 228 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							break;
						}
						
					}
					
				}
				
			}
			#line default
		}
		
		
		public virtual   object copyBarAttributes(object barAttributes){
			unchecked {
				#line 248 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				object result = default(object);
				#line 248 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				{
					#line 248 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					global::Array<global::nx3.EClef> __temp_odecl257 = new global::Array<global::nx3.EClef>();
					#line 248 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					global::Array<global::nx3.EKey> __temp_odecl258 = new global::Array<global::nx3.EKey>();
					#line 248 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					result = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{1191633396, 1213953513, 1291635725}), new global::Array<object>(new object[]{__temp_odecl258, __temp_odecl257, default(global::nx3.ETime)}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}));
				}
				
				#line 249 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.setField(result, "clefs", 1213953513, ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(barAttributes, "clefs", 1213953513, true)) ))) ).copy())) ));
				global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.setField(result, "keys", 1191633396, ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(barAttributes, "keys", 1191633396, true)) ))) ).copy())) ));
				global::haxe.lang.Runtime.setField(result, "time", 1291635725, ((global::nx3.ETime) (global::haxe.lang.Runtime.getField(barAttributes, "time", 1291635725, true)) ));
				return result;
			}
			#line default
		}
		
		
		public virtual   void overrideActualAttributesWithDefaultsIfStillNotSet(object currentBarAttributes){
			unchecked {
				#line 258 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				{
					#line 258 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					int _g1 = 0;
					#line 258 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					int _g = ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(currentBarAttributes, "clefs", 1213953513, true)) ))) ).length;
					#line 258 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					while (( _g1 < _g )){
						#line 258 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						int i = _g1++;
						#line 260 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						if (( ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(currentBarAttributes, "clefs", 1213953513, true)) ))) )[i] == default(global::nx3.EClef) )) {
							#line 260 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(currentBarAttributes, "clefs", 1213953513, true)) ))) )[i] = global::nx3.PSystemBarsGenerator.defaultClef;
						}
						
					}
					
				}
				
				#line 262 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				{
					#line 262 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					int _g11 = 0;
					#line 262 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					int _g2 = ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(currentBarAttributes, "keys", 1191633396, true)) ))) ).length;
					#line 262 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					while (( _g11 < _g2 )){
						#line 262 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						int i1 = _g11++;
						#line 264 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						if (( ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(currentBarAttributes, "keys", 1191633396, true)) ))) )[i1] == default(global::nx3.EKey) )) {
							#line 264 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(currentBarAttributes, "keys", 1191633396, true)) ))) )[i1] = global::nx3.PSystemBarsGenerator.defaultKey;
						}
						
					}
					
				}
				
				#line 266 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				if (( ((global::nx3.ETime) (global::haxe.lang.Runtime.getField(currentBarAttributes, "time", 1291635725, true)) ) == default(global::nx3.ETime) )) {
					#line 266 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					global::haxe.lang.Runtime.setField(currentBarAttributes, "time", 1291635725, global::nx3.PSystemBarsGenerator.defaultTime);
				}
				
			}
			#line default
		}
		
		
		public virtual   void overrideActualAttributesFromPrevBarAttributes(object currentBarAttributes, global::nx3.PBar currentBar, object prevBarAttributes){
			unchecked {
				#line 271 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				if ( ! (this.compareBarAttributesValidity(currentBarAttributes, prevBarAttributes)) ) {
					#line 271 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					throw global::haxe.lang.HaxeException.wrap("Attributes non compatible");
				}
				
				#line 272 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				{
					#line 272 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					int _g1 = 0;
					#line 272 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					int _g = currentBar.get_clefs().length;
					#line 272 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					while (( _g1 < _g )){
						#line 272 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						int i = _g1++;
						#line 274 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						if (( ( currentBar.get_clefs()[i] == default(global::nx3.EClef) ) && ( ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(prevBarAttributes, "clefs", 1213953513, true)) ))) )[i] != default(global::nx3.EClef) ) )) {
							#line 274 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(currentBarAttributes, "clefs", 1213953513, true)) ))) )[i] = ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(prevBarAttributes, "clefs", 1213953513, true)) ))) )[i];
						}
						
					}
					
				}
				
				#line 276 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				{
					#line 276 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					int _g11 = 0;
					#line 276 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					int _g2 = currentBar.get_keys().length;
					#line 276 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					while (( _g11 < _g2 )){
						#line 276 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						int i1 = _g11++;
						#line 278 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						if (( ( currentBar.get_keys()[i1] == default(global::nx3.EKey) ) && ( ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(prevBarAttributes, "keys", 1191633396, true)) ))) )[i1] != default(global::nx3.EKey) ) )) {
							#line 278 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(currentBarAttributes, "keys", 1191633396, true)) ))) )[i1] = ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(prevBarAttributes, "keys", 1191633396, true)) ))) )[i1];
						}
						
					}
					
				}
				
				#line 280 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				if (( ( currentBar.get_time() == default(global::nx3.ETime) ) && ( ((global::nx3.ETime) (global::haxe.lang.Runtime.getField(prevBarAttributes, "time", 1291635725, true)) ) != default(global::nx3.ETime) ) )) {
					#line 280 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					global::haxe.lang.Runtime.setField(currentBarAttributes, "time", 1291635725, ((global::nx3.ETime) (global::haxe.lang.Runtime.getField(prevBarAttributes, "time", 1291635725, true)) ));
				}
				
			}
			#line default
		}
		
		
		public virtual   object getBarAttributes(global::nx3.PBar bar){
			unchecked {
				#line 286 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				global::nx3.ETime time = default(global::nx3.ETime);
				#line 286 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				{
					#line 286 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					global::Array<global::nx3.ETime> array = new global::Array<global::nx3.ETime>(new global::nx3.ETime[]{bar.get_time()}).copy();
					#line 286 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					time = array[0];
				}
				
				#line 287 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				object result = default(object);
				#line 287 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				{
					#line 287 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					global::Array<global::nx3.EClef> __temp_odecl259 = bar.get_clefs().copy();
					#line 287 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					global::Array<global::nx3.EKey> __temp_odecl260 = bar.get_keys().copy();
					#line 287 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					result = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{1191633396, 1213953513, 1291635725}), new global::Array<object>(new object[]{__temp_odecl260, __temp_odecl259, time}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}));
				}
				
				#line 288 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   bool compareBarAttributesValidity(object barAttributesA, object barAttributesB){
			unchecked {
				#line 293 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				if (( ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(barAttributesA, "clefs", 1213953513, true)) ))) ).length != ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(barAttributesB, "clefs", 1213953513, true)) ))) ).length )) {
					#line 293 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					return false;
				}
				
				#line 294 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				if (( ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(barAttributesA, "keys", 1191633396, true)) ))) ).length != ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(barAttributesB, "keys", 1191633396, true)) ))) ).length )) {
					#line 294 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					return false;
				}
				
				#line 295 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				return true;
			}
			#line default
		}
		
		
		public virtual   bool arrayBNullOrDiffers<T>(global::Array<T> itemA, global::Array<T> itemB){
			unchecked {
				#line 300 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				if (global::cx.ArrayTools.allNull<T>(itemB)) {
					#line 300 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					return false;
				}
				
				#line 302 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				{
					#line 302 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					int _g1 = 0;
					#line 302 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					int _g = itemA.length;
					#line 302 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					while (( _g1 < _g )){
						#line 302 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						int i = _g1++;
						#line 304 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						if (( ( ! (global::haxe.lang.Runtime.eq(itemB[i], default(T))) ) && ( ! (global::haxe.lang.Runtime.eq(itemB[i], itemA[i])) ) )) {
							#line 304 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
							return true;
						}
						
					}
					
				}
				
				#line 306 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				return false;
			}
			#line default
		}
		
		
		public virtual   bool nullOrDiffers<T>(T itemA, T itemB){
			unchecked {
				#line 311 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				if (global::haxe.lang.Runtime.eq(itemB, default(T))) {
					#line 311 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					return false;
				}
				
				#line 312 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				return ( ! (global::haxe.lang.Runtime.eq(itemB, itemA)) );
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				switch (hash){
					case 1873762872:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						this.breakSystemwidth = ((double) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return @value;
					}
					
					
					case 1470101911:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						this.prevBarAttributes = ((object) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return @value;
					}
					
					
					case 719830801:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						this.systemConfig = ((object) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				switch (hash){
					case 1770276373:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						this.barWidthCalculator = ((global::nx3.IBarWidthCalculator) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return @value;
					}
					
					
					case 1927452399:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						this.system = ((global::nx3.PSystem) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return @value;
					}
					
					
					case 1873762872:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						this.breakSystemwidth = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return @value;
					}
					
					
					case 1470101911:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						this.prevBarAttributes = ((object) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return @value;
					}
					
					
					case 719830801:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						this.systemConfig = ((object) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return @value;
					}
					
					
					case 1091626816:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						this.bars = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				switch (hash){
					case 422409751:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("nullOrDiffers") ), ((int) (422409751) ))) );
					}
					
					
					case 1627646926:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("arrayBNullOrDiffers") ), ((int) (1627646926) ))) );
					}
					
					
					case 1841448055:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("compareBarAttributesValidity") ), ((int) (1841448055) ))) );
					}
					
					
					case 2022157844:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBarAttributes") ), ((int) (2022157844) ))) );
					}
					
					
					case 898315676:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("overrideActualAttributesFromPrevBarAttributes") ), ((int) (898315676) ))) );
					}
					
					
					case 151051057:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("overrideActualAttributesWithDefaultsIfStillNotSet") ), ((int) (151051057) ))) );
					}
					
					
					case 176532373:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("copyBarAttributes") ), ((int) (176532373) ))) );
					}
					
					
					case 2126733555:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("adaptBarConfig") ), ((int) (2126733555) ))) );
					}
					
					
					case 1781416638:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("copyAndRemoveRedundantAttributes") ), ((int) (1781416638) ))) );
					}
					
					
					case 731240118:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("takeCareOfLastBarCautions") ), ((int) (731240118) ))) );
					}
					
					
					case 1866014757:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSystem") ), ((int) (1866014757) ))) );
					}
					
					
					case 1770276373:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return this.barWidthCalculator;
					}
					
					
					case 1927452399:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return this.system;
					}
					
					
					case 1873762872:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return this.breakSystemwidth;
					}
					
					
					case 1470101911:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return this.prevBarAttributes;
					}
					
					
					case 719830801:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return this.systemConfig;
					}
					
					
					case 1091626816:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return this.bars;
					}
					
					
					default:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				switch (hash){
					case 1873762872:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return this.breakSystemwidth;
					}
					
					
					case 1470101911:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return ((double) (global::haxe.lang.Runtime.toDouble(this.prevBarAttributes)) );
					}
					
					
					case 719830801:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return ((double) (global::haxe.lang.Runtime.toDouble(this.systemConfig)) );
					}
					
					
					default:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				switch (hash){
					case 422409751:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return this.nullOrDiffers<object>(dynargs[0], dynargs[1]);
					}
					
					
					case 1627646926:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return this.arrayBNullOrDiffers<object>(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[1]) ))) ));
					}
					
					
					case 1841448055:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return this.compareBarAttributesValidity(dynargs[0], dynargs[1]);
					}
					
					
					case 2022157844:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return this.getBarAttributes(((global::nx3.PBar) (dynargs[0]) ));
					}
					
					
					case 898315676:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						this.overrideActualAttributesFromPrevBarAttributes(dynargs[0], ((global::nx3.PBar) (dynargs[1]) ), dynargs[2]);
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						break;
					}
					
					
					case 151051057:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						this.overrideActualAttributesWithDefaultsIfStillNotSet(dynargs[0]);
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						break;
					}
					
					
					case 176532373:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return this.copyBarAttributes(dynargs[0]);
					}
					
					
					case 2126733555:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						this.adaptBarConfig(((global::nx3.PBar) (dynargs[0]) ), ((global::nx3.PBarConfig) (dynargs[1]) ), dynargs[2], global::haxe.lang.Runtime.toBool(dynargs[3]), global::haxe.lang.Runtime.toBool(dynargs[4]), global::haxe.lang.Runtime.toBool(dynargs[5]));
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						break;
					}
					
					
					case 1781416638:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return this.copyAndRemoveRedundantAttributes(dynargs[0], dynargs[1]);
					}
					
					
					case 731240118:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						this.takeCareOfLastBarCautions();
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						break;
					}
					
					
					case 1866014757:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return this.getSystem();
					}
					
					
					default:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				baseArr.push("barWidthCalculator");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				baseArr.push("system");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				baseArr.push("breakSystemwidth");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				baseArr.push("prevBarAttributes");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				baseArr.push("systemConfig");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				baseArr.push("bars");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
				{
					#line 20 "F:\\nx3\\src\\nx3\\PSystemBarsGenerator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


