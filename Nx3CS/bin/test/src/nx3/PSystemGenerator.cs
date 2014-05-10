
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PSystemGenerator : global::haxe.lang.HxObject {
		static PSystemGenerator() {
			#line 22 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
			global::nx3.PSystemGenerator.defaultClef = global::nx3.EClef.ClefF;
			global::nx3.PSystemGenerator.defaultKey = global::nx3.EKey.Flat2;
			global::nx3.PSystemGenerator.defaultTime = global::nx3.ETime.Time6_4;
		}
		public    PSystemGenerator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PSystemGenerator(global::Array<object> bars, object systemConfig, object prevBarAttributes, double breakSystemwidth, global::nx3.IBarWidthCalculator barWidthCalculator){
			unchecked {
				#line 33 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				global::nx3.PSystemGenerator.__hx_ctor_nx3_PSystemGenerator(this, bars, systemConfig, prevBarAttributes, breakSystemwidth, barWidthCalculator);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PSystemGenerator(global::nx3.PSystemGenerator __temp_me122, global::Array<object> bars, object systemConfig, object prevBarAttributes, double breakSystemwidth, global::nx3.IBarWidthCalculator barWidthCalculator){
			unchecked {
				#line 35 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
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
				#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return new global::nx3.PSystemGenerator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return new global::nx3.PSystemGenerator(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ), ((object) (arr[1]) ), ((object) (arr[2]) ), ((double) (global::haxe.lang.Runtime.toDouble(arr[3])) ), ((global::nx3.IBarWidthCalculator) (arr[4]) ));
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
				#line 45 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				this.system.systemBreakWidth = this.breakSystemwidth;
				#line 47 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				bool tryAnotherBar = true;
				while (tryAnotherBar){
					#line 50 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					global::nx3.PBar currentBar = ((global::nx3.PBar) (this.bars[0]) );
					global::nx3.PBarConfig currentBarConfig = new global::nx3.PBarConfig(((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ), ((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ), ((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ), ((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ), ((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ), ((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ));
					object currentBarAttributes = this.getBarAttributes(currentBar);
					#line 54 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					if (( ! (global::haxe.lang.Runtime.refEq(this.prevBarAttributes, default(object))) )) {
						#line 55 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						this.overrideActualAttributesFromPrevBarAttributes(currentBarAttributes, currentBar, this.prevBarAttributes);
					}
					
					#line 57 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					this.overrideActualAttributesWithDefaultsIfStillNotSet(currentBarAttributes);
					#line 60 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					if (( this.system.getSystembars().length == 0 )) {
						#line 62 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						this.adaptBarConfig(currentBar, currentBarConfig, this.prevBarAttributes, global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.getField(this.systemConfig, "showFirstClef", 1756293853, true)), global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.getField(this.systemConfig, "showFirstKey", 480140652, true)), global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.getField(this.systemConfig, "showFirstTime", 1944669088, true)));
					}
					 else {
						#line 66 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						this.adaptBarConfig(currentBar, currentBarConfig, this.prevBarAttributes, global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.getField(this.systemConfig, "showFollowingClef", 2050428094, true)), global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.getField(this.systemConfig, "showFollowingKey", 96260779, true)), global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.getField(this.systemConfig, "showFollowingTime", 91319681, true)));
					}
					
					#line 69 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					object currentBarMeasurements = this.getBarWidth(currentBar, currentBarAttributes, currentBarConfig, default(object));
					#line 71 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					double testSystemWidth = ( this.system.width + ((double) (global::haxe.lang.Runtime.getField_f(currentBarMeasurements, "width", 1247983110, true)) ) );
					if (( testSystemWidth > this.breakSystemwidth )) {
						#line 74 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						this.takeCareOfLastBarCautions();
						#line 76 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.system;
					}
					
					#line 79 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					this.system.width += ((double) (global::haxe.lang.Runtime.getField_f(currentBarMeasurements, "width", 1247983110, true)) );
					this.system.getSystembars().push(new global::nx3.PSystemBar(((global::nx3.PBar) (currentBar) ), ((global::nx3.PBarConfig) (currentBarConfig) ), ((object) (currentBarMeasurements) ), ((object) (currentBarAttributes) ), ((object) (default(object)) )));
					#line 89 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					this.bars.shift();
					#line 91 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					this.prevBarAttributes = this.copyBarAttributes(currentBarAttributes);
					if (( this.bars.length < 1 )) {
						#line 92 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						tryAnotherBar = false;
					}
					
				}
				
				#line 97 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				this.system.status = global::nx3.PSystemStatus.Ok;
				return this.system;
			}
			#line default
		}
		
		
		public virtual   void takeCareOfLastBarCautions(){
			unchecked {
				#line 117 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				this.system.status = global::nx3.PSystemStatus.Ok;
				global::nx3.PSystemBar __temp_stmt260 = default(global::nx3.PSystemBar);
				#line 118 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
					#line 118 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					global::Array<object> array = this.system.getSystembars();
					#line 118 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					__temp_stmt260 = ((global::nx3.PSystemBar) (array[( array.length - 1 )]) );
				}
				
				#line 118 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				global::nx3.PBar sysBar = __temp_stmt260.bar;
				global::nx3.PSystemBar __temp_stmt261 = default(global::nx3.PSystemBar);
				#line 119 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
					#line 119 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					global::Array<object> array1 = this.system.getSystembars();
					#line 119 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					__temp_stmt261 = ((global::nx3.PSystemBar) (array1[( array1.length - 1 )]) );
				}
				
				#line 119 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				object sysBarAttributes = __temp_stmt261.actAttributes;
				#line 121 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				global::nx3.PBar __temp_stmt262 = default(global::nx3.PBar);
				#line 121 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
					#line 121 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					global::Array<object> array2 = this.bars;
					#line 121 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					__temp_stmt262 = ((global::nx3.PBar) (array2[( array2.length - 1 )]) );
				}
				
				#line 121 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				if (( sysBar != __temp_stmt262 )) {
					#line 123 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					global::nx3.PBar nextBar = ((global::nx3.PBar) (this.bars[0]) );
					object nextBarAttributes = this.getBarAttributes(nextBar);
					#line 126 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					bool newClef = this.arrayBNullOrDiffers<global::nx3.EClef>(((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(sysBarAttributes, "clefs", 1213953513, true)) ))) ), ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(nextBarAttributes, "clefs", 1213953513, true)) ))) ));
					bool newKey = this.arrayBNullOrDiffers<global::nx3.EKey>(((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(sysBarAttributes, "keys", 1191633396, true)) ))) ), ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(nextBarAttributes, "keys", 1191633396, true)) ))) ));
					bool newTime = this.nullOrDiffers<global::nx3.ETime>(((global::nx3.ETime) (global::haxe.lang.Runtime.getField(sysBarAttributes, "time", 1291635725, true)) ), ((global::nx3.ETime) (global::haxe.lang.Runtime.getField(nextBarAttributes, "time", 1291635725, true)) ));
					#line 130 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					if (( ( newClef || newKey ) || newTime )) {
						#line 133 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						object sysBarCautAttributes = this.copyAndRemoveRedundantAttributes(sysBarAttributes, nextBarAttributes);
						global::nx3.PSystemBar __temp_stmt263 = default(global::nx3.PSystemBar);
						#line 134 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						{
							#line 134 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							global::Array<object> array3 = this.system.getSystembars();
							#line 134 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							__temp_stmt263 = ((global::nx3.PSystemBar) (array3[( array3.length - 1 )]) );
						}
						
						#line 134 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						global::nx3.PBarConfig sysBarConfig = __temp_stmt263.barConfig;
						global::nx3.PSystemBar __temp_stmt265 = default(global::nx3.PSystemBar);
						#line 135 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						{
							#line 135 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							global::Array<object> array4 = this.system.getSystembars();
							#line 135 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							__temp_stmt265 = ((global::nx3.PSystemBar) (array4[( array4.length - 1 )]) );
						}
						
						#line 135 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						double __temp_stmt264 = global::haxe.lang.Runtime.getField_f(__temp_stmt265.barWidths, "width", 1247983110, true);
						#line 135 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						double sysBarWidth = ((double) (__temp_stmt264) );
						#line 137 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						double systemWidthWithoutLastBar = ( this.system.width - sysBarWidth );
						#line 139 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						global::nx3.PBarConfig sysBarConfigWithCautions = new global::nx3.PBarConfig(new global::haxe.lang.Null<bool>(sysBarConfig.showClef, true), new global::haxe.lang.Null<bool>(sysBarConfig.showKey, true), new global::haxe.lang.Null<bool>(sysBarConfig.showTime, true), ((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ), ((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ), ((global::haxe.lang.Null<bool>) (default(global::haxe.lang.Null<bool>)) ));
						if (newClef) {
							#line 140 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							sysBarConfigWithCautions.showCautClef = true;
						}
						
						#line 141 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						if (newKey) {
							#line 141 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							sysBarConfigWithCautions.showCautKey = true;
						}
						
						#line 142 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						if (newTime) {
							#line 142 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							sysBarConfigWithCautions.showCautTime = true;
						}
						
						#line 144 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						object measurementsWithCautions = this.getBarWidth(sysBar, sysBarAttributes, sysBarConfigWithCautions, sysBarCautAttributes);
						#line 146 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						if (( ( systemWidthWithoutLastBar + ((double) (global::haxe.lang.Runtime.getField_f(measurementsWithCautions, "width", 1247983110, true)) ) ) <= this.breakSystemwidth )) {
							#line 148 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							global::nx3.PSystemBar __temp_stmt266 = default(global::nx3.PSystemBar);
							#line 148 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							{
								#line 148 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
								global::Array<object> array5 = this.system.getSystembars();
								#line 148 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
								__temp_stmt266 = ((global::nx3.PSystemBar) (array5[( array5.length - 1 )]) );
							}
							
							#line 148 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							__temp_stmt266.caAttributes = sysBarCautAttributes;
							global::nx3.PSystemBar __temp_stmt267 = default(global::nx3.PSystemBar);
							#line 149 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							{
								#line 149 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
								global::Array<object> array6 = this.system.getSystembars();
								#line 149 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
								__temp_stmt267 = ((global::nx3.PSystemBar) (array6[( array6.length - 1 )]) );
							}
							
							#line 149 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							__temp_stmt267.barConfig = sysBarConfigWithCautions;
							global::nx3.PSystemBar __temp_stmt268 = default(global::nx3.PSystemBar);
							#line 150 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							{
								#line 150 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
								global::Array<object> array7 = this.system.getSystembars();
								#line 150 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
								__temp_stmt268 = ((global::nx3.PSystemBar) (array7[( array7.length - 1 )]) );
							}
							
							#line 150 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							global::haxe.lang.Runtime.setField_f(__temp_stmt268.barWidths, "width", 1247983110, ((double) (global::haxe.lang.Runtime.getField_f(measurementsWithCautions, "width", 1247983110, true)) ));
							this.system.width = ( ( this.system.getWidth() - sysBarWidth ) + ((double) (global::haxe.lang.Runtime.getField_f(measurementsWithCautions, "width", 1247983110, true)) ) );
						}
						 else {
							#line 155 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							this.system.status = global::nx3.PSystemStatus.Problem(101, "Last bar fits without caution attributes but not with them");
							if (( this.system.getSystembars().length == 1 )) {
								#line 158 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
								this.system.status = global::nx3.PSystemStatus.Problem(102, "First bar doesn\'t fit when adding required cational attributes");
								return ;
							}
							
							#line 163 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							this.system.getSystembars().pop();
							#line 165 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
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
				#line 175 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				object result = this.copyBarAttributes(nextBarAttributes);
				{
					#line 176 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					int _g1 = 0;
					#line 176 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					int _g = ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(sysBarAttributes, "clefs", 1213953513, true)) ))) ).length;
					#line 176 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					while (( _g1 < _g )){
						#line 176 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						int i = _g1++;
						#line 176 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						if (( ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(result, "clefs", 1213953513, true)) ))) )[i] == ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(sysBarAttributes, "clefs", 1213953513, true)) ))) )[i] )) {
							#line 176 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(result, "clefs", 1213953513, true)) ))) )[i] = default(global::nx3.EClef);
						}
						
					}
					
				}
				
				#line 177 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
					#line 177 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					int _g11 = 0;
					#line 177 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					int _g2 = ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(sysBarAttributes, "keys", 1191633396, true)) ))) ).length;
					#line 177 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					while (( _g11 < _g2 )){
						#line 177 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						int i1 = _g11++;
						#line 177 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						if (( ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(result, "keys", 1191633396, true)) ))) )[i1] == ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(sysBarAttributes, "keys", 1191633396, true)) ))) )[i1] )) {
							#line 177 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(result, "keys", 1191633396, true)) ))) )[i1] = default(global::nx3.EKey);
						}
						
					}
					
				}
				
				#line 178 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				if (( ((global::nx3.ETime) (global::haxe.lang.Runtime.getField(result, "time", 1291635725, true)) ) == ((global::nx3.ETime) (global::haxe.lang.Runtime.getField(sysBarAttributes, "time", 1291635725, true)) ) )) {
					#line 178 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					global::haxe.lang.Runtime.setField(result, "time", 1291635725, default(global::nx3.ETime));
				}
				
				#line 179 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   void adaptBarConfig(global::nx3.PBar bar, global::nx3.PBarConfig barConfig, object prevBarAttributes, bool showClef, bool showKey, bool showTime){
			unchecked {
				#line 184 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				if (( showClef == true )) {
					#line 184 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					showClef = true;
				}
				 else {
					#line 184 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					showClef = false;
				}
				
				#line 185 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				if (( showKey == true )) {
					#line 185 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					showKey = true;
				}
				 else {
					#line 185 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					showKey = false;
				}
				
				#line 186 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				if (( showTime == true )) {
					#line 186 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					showTime = true;
				}
				 else {
					#line 186 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					showTime = false;
				}
				
				#line 187 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				object barAttributes = this.getBarAttributes(bar);
				#line 189 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
					#line 189 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					global::nx3.EDisplayALN _g = bar.get_displayClefs();
					#line 189 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					switch (global::Type.enumIndex(_g)){
						case 2:
						{
							#line 191 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							barConfig.showClef = false;
							#line 191 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							break;
						}
						
						
						case 0:
						{
							#line 192 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							barConfig.showClef = true;
							#line 192 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							break;
						}
						
						
						default:
						{
							#line 195 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							barConfig.showClef = showClef;
							if (( ( showClef == false ) && ( ! (global::haxe.lang.Runtime.refEq(prevBarAttributes, default(object))) ) )) {
								#line 198 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
								int _g2 = 0;
								#line 198 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
								int _g1 = ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(prevBarAttributes, "clefs", 1213953513, true)) ))) ).length;
								#line 198 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
								while (( _g2 < _g1 )){
									#line 198 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
									int i = _g2++;
									#line 200 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
									if (( bar.get_clefs()[i] == default(global::nx3.EClef) )) {
										#line 200 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
										continue;
									}
									
									#line 201 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
									if (( bar.get_clefs()[i] == ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(prevBarAttributes, "clefs", 1213953513, true)) ))) )[i] )) {
										#line 201 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
										continue;
									}
									
									#line 202 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
									barConfig.showClef = true;
									break;
								}
								
							}
							
							#line 193 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							break;
						}
						
					}
					
				}
				
				#line 208 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
					#line 208 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					global::nx3.EDisplayALN _g3 = bar.get_displayKeys();
					#line 208 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					switch (global::Type.enumIndex(_g3)){
						case 2:
						{
							#line 210 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							barConfig.showKey = false;
							#line 210 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							break;
						}
						
						
						case 0:
						{
							#line 211 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							barConfig.showKey = true;
							#line 211 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							break;
						}
						
						
						default:
						{
							#line 214 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							barConfig.showKey = showKey;
							if (( ( showKey == false ) && ( ! (global::haxe.lang.Runtime.refEq(prevBarAttributes, default(object))) ) )) {
								#line 217 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
								int _g21 = 0;
								#line 217 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
								int _g11 = ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(prevBarAttributes, "keys", 1191633396, true)) ))) ).length;
								#line 217 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
								while (( _g21 < _g11 )){
									#line 217 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
									int i1 = _g21++;
									#line 219 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
									if (( bar.get_keys()[i1] == default(global::nx3.EKey) )) {
										#line 219 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
										continue;
									}
									
									#line 220 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
									if (( bar.get_keys()[i1] == ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(prevBarAttributes, "keys", 1191633396, true)) ))) )[i1] )) {
										#line 220 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
										continue;
									}
									
									#line 221 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
									barConfig.showKey = true;
									break;
								}
								
							}
							
							#line 212 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							break;
						}
						
					}
					
				}
				
				#line 227 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
					#line 227 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					global::nx3.EDisplayALN _g4 = bar.get_displayTime();
					#line 227 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					switch (global::Type.enumIndex(_g4)){
						case 2:
						{
							#line 229 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							barConfig.showTime = false;
							#line 229 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							break;
						}
						
						
						case 0:
						{
							#line 230 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							barConfig.showTime = true;
							#line 230 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							break;
						}
						
						
						default:
						{
							#line 232 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							barConfig.showTime = showTime;
							if (( ( showTime == false ) && ( ! (global::haxe.lang.Runtime.refEq(prevBarAttributes, default(object))) ) )) {
								#line 235 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
								if (( bar.get_time() == default(global::nx3.ETime) )) {
									#line 236 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
									{
									}
									
								}
								 else {
									#line 238 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
									if (( bar.get_time() == ((global::nx3.ETime) (global::haxe.lang.Runtime.getField(prevBarAttributes, "time", 1291635725, true)) ) )) {
										#line 239 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
										{
										}
										
									}
									 else {
										#line 242 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
										barConfig.showTime = true;
									}
									
								}
								
							}
							
							#line 231 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							break;
						}
						
					}
					
				}
				
			}
			#line default
		}
		
		
		public virtual   object getBarWidth(global::nx3.PBar bar, object barAttributes, global::nx3.PBarConfig barConfig, object cautAttributes){
			unchecked {
				#line 249 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				global::nx3.PSystemBarWidthCalculator calculator = new global::nx3.PSystemBarWidthCalculator(((global::nx3.IBarWidthCalculator) (this.barWidthCalculator) ));
				return calculator.getBarWidth(bar, barAttributes, barConfig, cautAttributes);
			}
			#line default
		}
		
		
		public virtual   object copyBarAttributes(object barAttributes){
			unchecked {
				#line 323 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				object result = default(object);
				#line 323 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
					#line 323 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					global::Array<global::nx3.EClef> __temp_odecl269 = new global::Array<global::nx3.EClef>();
					#line 323 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					global::Array<global::nx3.EKey> __temp_odecl270 = new global::Array<global::nx3.EKey>();
					#line 323 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					result = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{1191633396, 1213953513, 1291635725}), new global::Array<object>(new object[]{__temp_odecl270, __temp_odecl269, default(global::nx3.ETime)}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}));
				}
				
				#line 324 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.setField(result, "clefs", 1213953513, ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(barAttributes, "clefs", 1213953513, true)) ))) ).copy())) ));
				global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.setField(result, "keys", 1191633396, ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(barAttributes, "keys", 1191633396, true)) ))) ).copy())) ));
				global::haxe.lang.Runtime.setField(result, "time", 1291635725, ((global::nx3.ETime) (global::haxe.lang.Runtime.getField(barAttributes, "time", 1291635725, true)) ));
				return result;
			}
			#line default
		}
		
		
		public virtual   void overrideActualAttributesWithDefaultsIfStillNotSet(object currentBarAttributes){
			unchecked {
				#line 333 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
					#line 333 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					int _g1 = 0;
					#line 333 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					int _g = ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(currentBarAttributes, "clefs", 1213953513, true)) ))) ).length;
					#line 333 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					while (( _g1 < _g )){
						#line 333 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						int i = _g1++;
						#line 335 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						if (( ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(currentBarAttributes, "clefs", 1213953513, true)) ))) )[i] == default(global::nx3.EClef) )) {
							#line 335 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(currentBarAttributes, "clefs", 1213953513, true)) ))) )[i] = global::nx3.PSystemGenerator.defaultClef;
						}
						
					}
					
				}
				
				#line 337 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
					#line 337 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					int _g11 = 0;
					#line 337 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					int _g2 = ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(currentBarAttributes, "keys", 1191633396, true)) ))) ).length;
					#line 337 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					while (( _g11 < _g2 )){
						#line 337 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						int i1 = _g11++;
						#line 339 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						if (( ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(currentBarAttributes, "keys", 1191633396, true)) ))) )[i1] == default(global::nx3.EKey) )) {
							#line 339 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(currentBarAttributes, "keys", 1191633396, true)) ))) )[i1] = global::nx3.PSystemGenerator.defaultKey;
						}
						
					}
					
				}
				
				#line 341 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				if (( ((global::nx3.ETime) (global::haxe.lang.Runtime.getField(currentBarAttributes, "time", 1291635725, true)) ) == default(global::nx3.ETime) )) {
					#line 341 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					global::haxe.lang.Runtime.setField(currentBarAttributes, "time", 1291635725, global::nx3.PSystemGenerator.defaultTime);
				}
				
			}
			#line default
		}
		
		
		public virtual   void overrideActualAttributesFromPrevBarAttributes(object currentBarAttributes, global::nx3.PBar currentBar, object prevBarAttributes){
			unchecked {
				#line 346 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				if ( ! (this.compareBarAttributesValidity(currentBarAttributes, prevBarAttributes)) ) {
					#line 346 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					throw global::haxe.lang.HaxeException.wrap("Attributes non compatible");
				}
				
				#line 347 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
					#line 347 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					int _g1 = 0;
					#line 347 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					int _g = currentBar.get_clefs().length;
					#line 347 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					while (( _g1 < _g )){
						#line 347 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						int i = _g1++;
						#line 349 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						if (( ( currentBar.get_clefs()[i] == default(global::nx3.EClef) ) && ( ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(prevBarAttributes, "clefs", 1213953513, true)) ))) )[i] != default(global::nx3.EClef) ) )) {
							#line 349 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(currentBarAttributes, "clefs", 1213953513, true)) ))) )[i] = ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(prevBarAttributes, "clefs", 1213953513, true)) ))) )[i];
						}
						
					}
					
				}
				
				#line 351 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
					#line 351 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					int _g11 = 0;
					#line 351 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					int _g2 = currentBar.get_keys().length;
					#line 351 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					while (( _g11 < _g2 )){
						#line 351 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						int i1 = _g11++;
						#line 353 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						if (( ( currentBar.get_keys()[i1] == default(global::nx3.EKey) ) && ( ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(prevBarAttributes, "keys", 1191633396, true)) ))) )[i1] != default(global::nx3.EKey) ) )) {
							#line 353 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(currentBarAttributes, "keys", 1191633396, true)) ))) )[i1] = ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(prevBarAttributes, "keys", 1191633396, true)) ))) )[i1];
						}
						
					}
					
				}
				
				#line 355 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				if (( ( currentBar.get_time() == default(global::nx3.ETime) ) && ( ((global::nx3.ETime) (global::haxe.lang.Runtime.getField(prevBarAttributes, "time", 1291635725, true)) ) != default(global::nx3.ETime) ) )) {
					#line 355 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					global::haxe.lang.Runtime.setField(currentBarAttributes, "time", 1291635725, ((global::nx3.ETime) (global::haxe.lang.Runtime.getField(prevBarAttributes, "time", 1291635725, true)) ));
				}
				
			}
			#line default
		}
		
		
		public virtual   object getBarAttributes(global::nx3.PBar bar){
			unchecked {
				#line 361 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				global::nx3.ETime time = default(global::nx3.ETime);
				#line 361 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
					#line 361 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					global::Array<global::nx3.ETime> array = new global::Array<global::nx3.ETime>(new global::nx3.ETime[]{bar.get_time()}).copy();
					#line 361 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					time = array[0];
				}
				
				#line 362 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				object result = default(object);
				#line 362 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
					#line 362 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					global::Array<global::nx3.EClef> __temp_odecl271 = bar.get_clefs().copy();
					#line 362 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					global::Array<global::nx3.EKey> __temp_odecl272 = bar.get_keys().copy();
					#line 362 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					result = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{1191633396, 1213953513, 1291635725}), new global::Array<object>(new object[]{__temp_odecl272, __temp_odecl271, time}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}));
				}
				
				#line 363 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   bool compareBarAttributesValidity(object barAttributesA, object barAttributesB){
			unchecked {
				#line 368 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				if (( ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(barAttributesA, "clefs", 1213953513, true)) ))) ).length != ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (global::haxe.lang.Runtime.getField(barAttributesB, "clefs", 1213953513, true)) ))) ).length )) {
					#line 368 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					return false;
				}
				
				#line 369 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				if (( ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(barAttributesA, "keys", 1191633396, true)) ))) ).length != ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (global::haxe.lang.Runtime.getField(barAttributesB, "keys", 1191633396, true)) ))) ).length )) {
					#line 369 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					return false;
				}
				
				#line 370 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return true;
			}
			#line default
		}
		
		
		public virtual   bool arrayBNullOrDiffers<T>(global::Array<T> itemA, global::Array<T> itemB){
			unchecked {
				#line 375 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				if (global::cx.ArrayTools.allNull<T>(itemB)) {
					#line 375 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					return false;
				}
				
				#line 377 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
					#line 377 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					int _g1 = 0;
					#line 377 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					int _g = itemA.length;
					#line 377 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					while (( _g1 < _g )){
						#line 377 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						int i = _g1++;
						#line 379 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						if (( ( ! (global::haxe.lang.Runtime.eq(itemB[i], default(T))) ) && ( ! (global::haxe.lang.Runtime.eq(itemB[i], itemA[i])) ) )) {
							#line 379 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							return true;
						}
						
					}
					
				}
				
				#line 381 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return false;
			}
			#line default
		}
		
		
		public virtual   bool nullOrDiffers<T>(T itemA, T itemB){
			unchecked {
				#line 386 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				if (global::haxe.lang.Runtime.eq(itemB, default(T))) {
					#line 386 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					return false;
				}
				
				#line 387 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return ( ! (global::haxe.lang.Runtime.eq(itemB, itemA)) );
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				switch (hash){
					case 1873762872:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						this.breakSystemwidth = ((double) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return @value;
					}
					
					
					case 1470101911:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						this.prevBarAttributes = ((object) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return @value;
					}
					
					
					case 719830801:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						this.systemConfig = ((object) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				switch (hash){
					case 1770276373:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						this.barWidthCalculator = ((global::nx3.IBarWidthCalculator) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return @value;
					}
					
					
					case 1927452399:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						this.system = ((global::nx3.PSystem) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return @value;
					}
					
					
					case 1873762872:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						this.breakSystemwidth = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return @value;
					}
					
					
					case 1470101911:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						this.prevBarAttributes = ((object) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return @value;
					}
					
					
					case 719830801:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						this.systemConfig = ((object) (@value) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return @value;
					}
					
					
					case 1091626816:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						this.bars = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				switch (hash){
					case 422409751:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("nullOrDiffers") ), ((int) (422409751) ))) );
					}
					
					
					case 1627646926:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("arrayBNullOrDiffers") ), ((int) (1627646926) ))) );
					}
					
					
					case 1841448055:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("compareBarAttributesValidity") ), ((int) (1841448055) ))) );
					}
					
					
					case 2022157844:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBarAttributes") ), ((int) (2022157844) ))) );
					}
					
					
					case 898315676:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("overrideActualAttributesFromPrevBarAttributes") ), ((int) (898315676) ))) );
					}
					
					
					case 151051057:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("overrideActualAttributesWithDefaultsIfStillNotSet") ), ((int) (151051057) ))) );
					}
					
					
					case 176532373:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("copyBarAttributes") ), ((int) (176532373) ))) );
					}
					
					
					case 1059371497:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBarWidth") ), ((int) (1059371497) ))) );
					}
					
					
					case 2126733555:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("adaptBarConfig") ), ((int) (2126733555) ))) );
					}
					
					
					case 1781416638:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("copyAndRemoveRedundantAttributes") ), ((int) (1781416638) ))) );
					}
					
					
					case 731240118:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("takeCareOfLastBarCautions") ), ((int) (731240118) ))) );
					}
					
					
					case 1866014757:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSystem") ), ((int) (1866014757) ))) );
					}
					
					
					case 1770276373:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.barWidthCalculator;
					}
					
					
					case 1927452399:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.system;
					}
					
					
					case 1873762872:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.breakSystemwidth;
					}
					
					
					case 1470101911:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.prevBarAttributes;
					}
					
					
					case 719830801:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.systemConfig;
					}
					
					
					case 1091626816:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.bars;
					}
					
					
					default:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				switch (hash){
					case 1873762872:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.breakSystemwidth;
					}
					
					
					case 1470101911:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((double) (global::haxe.lang.Runtime.toDouble(this.prevBarAttributes)) );
					}
					
					
					case 719830801:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((double) (global::haxe.lang.Runtime.toDouble(this.systemConfig)) );
					}
					
					
					default:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				switch (hash){
					case 422409751:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.nullOrDiffers<object>(dynargs[0], dynargs[1]);
					}
					
					
					case 1627646926:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.arrayBNullOrDiffers<object>(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[1]) ))) ));
					}
					
					
					case 1841448055:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.compareBarAttributesValidity(dynargs[0], dynargs[1]);
					}
					
					
					case 2022157844:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.getBarAttributes(((global::nx3.PBar) (dynargs[0]) ));
					}
					
					
					case 898315676:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						this.overrideActualAttributesFromPrevBarAttributes(dynargs[0], ((global::nx3.PBar) (dynargs[1]) ), dynargs[2]);
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						break;
					}
					
					
					case 151051057:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						this.overrideActualAttributesWithDefaultsIfStillNotSet(dynargs[0]);
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						break;
					}
					
					
					case 176532373:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.copyBarAttributes(dynargs[0]);
					}
					
					
					case 1059371497:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.getBarWidth(((global::nx3.PBar) (dynargs[0]) ), dynargs[1], ((global::nx3.PBarConfig) (dynargs[2]) ), dynargs[3]);
					}
					
					
					case 2126733555:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						this.adaptBarConfig(((global::nx3.PBar) (dynargs[0]) ), ((global::nx3.PBarConfig) (dynargs[1]) ), dynargs[2], global::haxe.lang.Runtime.toBool(dynargs[3]), global::haxe.lang.Runtime.toBool(dynargs[4]), global::haxe.lang.Runtime.toBool(dynargs[5]));
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						break;
					}
					
					
					case 1781416638:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.copyAndRemoveRedundantAttributes(dynargs[0], dynargs[1]);
					}
					
					
					case 731240118:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						this.takeCareOfLastBarCautions();
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						break;
					}
					
					
					case 1866014757:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.getSystem();
					}
					
					
					default:
					{
						#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				baseArr.push("barWidthCalculator");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				baseArr.push("system");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				baseArr.push("breakSystemwidth");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				baseArr.push("prevBarAttributes");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				baseArr.push("systemConfig");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				baseArr.push("bars");
				#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
					#line 20 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PSimpleBarWidthCalculator : global::haxe.lang.HxObject, global::nx3.IBarWidthCalculator {
		public    PSimpleBarWidthCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PSimpleBarWidthCalculator(){
			unchecked {
				#line 393 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				global::nx3.PSimpleBarWidthCalculator.__hx_ctor_nx3_PSimpleBarWidthCalculator(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PSimpleBarWidthCalculator(global::nx3.PSimpleBarWidthCalculator __temp_me123){
			unchecked {
				#line 393 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return new global::nx3.PSimpleBarWidthCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return new global::nx3.PSimpleBarWidthCalculator();
			}
			#line default
		}
		
		
		public virtual   double getClefWidth(global::nx3.EClef clef){
			unchecked {
				#line 396 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				if (( clef == default(global::nx3.EClef) )) {
					#line 396 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					return ((double) (0) );
				}
				
				#line 397 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return ((double) (20) );
			}
			#line default
		}
		
		
		public virtual   double getKeyWidth(global::nx3.EKey key){
			unchecked {
				#line 402 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				if (( key == default(global::nx3.EKey) )) {
					#line 402 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					return ((double) (0) );
				}
				
				#line 403 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				switch (global::Type.enumIndex(key)){
					case 5:case 7:
					{
						#line 405 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((double) (10) );
					}
					
					
					case 4:case 8:
					{
						#line 406 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((double) (20) );
					}
					
					
					case 3:case 9:
					{
						#line 407 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((double) (30) );
					}
					
					
					case 2:case 10:
					{
						#line 408 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((double) (40) );
					}
					
					
					case 1:case 11:
					{
						#line 409 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((double) (50) );
					}
					
					
					case 0:case 12:
					{
						#line 410 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((double) (60) );
					}
					
					
					default:
					{
						#line 411 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((double) (0) );
					}
					
				}
				
			}
			#line default
		}
		
		
		public virtual   double getTimeWidth(global::nx3.ETime time){
			unchecked {
				#line 417 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				if (( time == default(global::nx3.ETime) )) {
					#line 417 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					return ((double) (0) );
				}
				
				#line 418 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return ((double) (10) );
			}
			#line default
		}
		
		
		public virtual   double getContentWidth(global::nx3.PBar bar){
			unchecked {
				#line 423 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				{
					#line 423 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					double x = ( ((double) (bar.getValue()) ) / 100 );
					#line 423 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					return ((double) (((int) (x) )) );
				}
				
			}
			#line default
		}
		
		
		public virtual   double getLeftBarlineWidth(global::nx3.EBarlineLeft barline){
			unchecked {
				#line 430 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return ((double) (0) );
			}
			#line default
		}
		
		
		public virtual   double getBarlineWidth(global::nx3.EBarline barline){
			unchecked {
				#line 435 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return ((double) (0) );
			}
			#line default
		}
		
		
		public virtual   double getClefsWidth(global::Array<global::nx3.EClef> clefs){
			unchecked {
				#line 442 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				double result = 0.0;
				{
					#line 443 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					int _g = 0;
					#line 443 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					while (( _g < clefs.length )){
						#line 443 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						global::nx3.EClef clef = clefs[_g];
						#line 443 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						 ++ _g;
						#line 445 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						if (( clef == default(global::nx3.EClef) )) {
							#line 445 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							continue;
						}
						
						#line 446 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						{
							#line 446 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							double b = this.getClefWidth(clef);
							#line 446 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							result = global::System.Math.Max(((double) (result) ), ((double) (b) ));
						}
						
					}
					
				}
				
				#line 448 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   double getKeysWidth(global::Array<global::nx3.EKey> keys){
			unchecked {
				#line 453 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				double result = 0.0;
				{
					#line 454 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					int _g = 0;
					#line 454 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
					while (( _g < keys.length )){
						#line 454 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						global::nx3.EKey key = keys[_g];
						#line 454 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						 ++ _g;
						#line 456 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						if (( key == default(global::nx3.EKey) )) {
							#line 456 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							continue;
						}
						
						#line 457 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						{
							#line 457 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							double b = this.getKeyWidth(key);
							#line 457 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
							result = global::System.Math.Max(((double) (result) ), ((double) (b) ));
						}
						
					}
					
				}
				
				#line 459 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return result;
			}
			#line default
		}
		
		
		   double global::nx3.IBarWidthCalculator.getContentLeftMarginWidth(global::nx3.PBar bar){
			unchecked {
				#line 464 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return ((double) (((int) (this.getContentLeftMarginWidth(((global::nx3.PBar) (bar) ))) )) );
			}
			#line default
		}
		
		
		public virtual   int getContentLeftMarginWidth(global::nx3.PBar bar){
			unchecked {
				#line 466 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				return 0;
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				switch (hash){
					case 1065219630:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getContentLeftMarginWidth") ), ((int) (1065219630) ))) );
					}
					
					
					case 1264864252:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getKeysWidth") ), ((int) (1264864252) ))) );
					}
					
					
					case 841351059:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getClefsWidth") ), ((int) (841351059) ))) );
					}
					
					
					case 1426066165:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBarlineWidth") ), ((int) (1426066165) ))) );
					}
					
					
					case 808312988:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getLeftBarlineWidth") ), ((int) (808312988) ))) );
					}
					
					
					case 1406885827:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getContentWidth") ), ((int) (1406885827) ))) );
					}
					
					
					case 246032195:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getTimeWidth") ), ((int) (246032195) ))) );
					}
					
					
					case 885005981:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getKeyWidth") ), ((int) (885005981) ))) );
					}
					
					
					case 1374235366:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getClefWidth") ), ((int) (1374235366) ))) );
					}
					
					
					default:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
				switch (hash){
					case 1065219630:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return ((int) (this.getContentLeftMarginWidth(((global::nx3.PBar) (dynargs[0]) ))) );
					}
					
					
					case 1264864252:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.getKeysWidth(((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 841351059:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.getClefsWidth(((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 1426066165:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.getBarlineWidth(((global::nx3.EBarline) (dynargs[0]) ));
					}
					
					
					case 808312988:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.getLeftBarlineWidth(((global::nx3.EBarlineLeft) (dynargs[0]) ));
					}
					
					
					case 1406885827:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.getContentWidth(((global::nx3.PBar) (dynargs[0]) ));
					}
					
					
					case 246032195:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.getTimeWidth(((global::nx3.ETime) (dynargs[0]) ));
					}
					
					
					case 885005981:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.getKeyWidth(((global::nx3.EKey) (dynargs[0]) ));
					}
					
					
					case 1374235366:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return this.getClefWidth(((global::nx3.EClef) (dynargs[0]) ));
					}
					
					
					default:
					{
						#line 391 "F:\\nx3\\src\\nx3\\PSystemGenerator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
	}
}


