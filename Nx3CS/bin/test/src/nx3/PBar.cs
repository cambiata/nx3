
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PBar : global::haxe.lang.HxObject {
		public    PBar(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PBar(global::nx3.NBar nbar){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PBar.hx"
				global::nx3.PBar.__hx_ctor_nx3_PBar(this, nbar);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PBar(global::nx3.PBar __temp_me74, global::nx3.NBar nbar){
			unchecked {
				#line 183 "F:\\nx3\\src\\nx3\\PBar.hx"
				__temp_me74.stretchwidth = ((double) (0) );
				#line 39 "F:\\nx3\\src\\nx3\\PBar.hx"
				__temp_me74._keys = default(global::Array<global::nx3.EKey>);
				#line 30 "F:\\nx3\\src\\nx3\\PBar.hx"
				__temp_me74._clefs = default(global::Array<global::nx3.EClef>);
				#line 14 "F:\\nx3\\src\\nx3\\PBar.hx"
				__temp_me74.nbar = nbar;
				__temp_me74.@value = 0;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				return new global::nx3.PBar(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				return new global::nx3.PBar(((global::nx3.NBar) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.NBar nbar;
		
		public  global::nx3.PScore score;
		
		public virtual   global::nx3.PScore getScore(){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.score;
			}
			#line default
		}
		
		
		public  global::Array<global::nx3.EClef> clefs;
		
		public  global::Array<global::nx3.EKey> keys;
		
		public  global::nx3.ETime time;
		
		public  global::Array<global::nx3.EClef> _clefs;
		
		public virtual   global::Array<global::nx3.EClef> get_clefs(){
			unchecked {
				#line 33 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (( this._clefs != default(global::Array<global::nx3.EClef>) )) {
					#line 33 "F:\\nx3\\src\\nx3\\PBar.hx"
					return this._clefs;
				}
				
				#line 34 "F:\\nx3\\src\\nx3\\PBar.hx"
				this._clefs = new global::Array<global::nx3.EClef>();
				{
					#line 35 "F:\\nx3\\src\\nx3\\PBar.hx"
					int _g = 0;
					#line 35 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> _g1 = this.getParts();
					#line 35 "F:\\nx3\\src\\nx3\\PBar.hx"
					while (( _g < _g1.length )){
						#line 35 "F:\\nx3\\src\\nx3\\PBar.hx"
						global::nx3.PPart vpart = ((global::nx3.PPart) (_g1[_g]) );
						#line 35 "F:\\nx3\\src\\nx3\\PBar.hx"
						 ++ _g;
						#line 35 "F:\\nx3\\src\\nx3\\PBar.hx"
						this._clefs.push(vpart.npart.clef);
					}
					
				}
				
				#line 36 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this._clefs;
			}
			#line default
		}
		
		
		public  global::Array<global::nx3.EKey> _keys;
		
		public virtual   global::Array<global::nx3.EKey> get_keys(){
			unchecked {
				#line 42 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (( this._keys != default(global::Array<global::nx3.EKey>) )) {
					#line 42 "F:\\nx3\\src\\nx3\\PBar.hx"
					return this._keys;
				}
				
				#line 43 "F:\\nx3\\src\\nx3\\PBar.hx"
				this._keys = new global::Array<global::nx3.EKey>();
				{
					#line 44 "F:\\nx3\\src\\nx3\\PBar.hx"
					int _g = 0;
					#line 44 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> _g1 = this.getParts();
					#line 44 "F:\\nx3\\src\\nx3\\PBar.hx"
					while (( _g < _g1.length )){
						#line 44 "F:\\nx3\\src\\nx3\\PBar.hx"
						global::nx3.PPart vpart = ((global::nx3.PPart) (_g1[_g]) );
						#line 44 "F:\\nx3\\src\\nx3\\PBar.hx"
						 ++ _g;
						#line 44 "F:\\nx3\\src\\nx3\\PBar.hx"
						this._keys.push(vpart.npart.key);
					}
					
				}
				
				#line 45 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this._keys;
			}
			#line default
		}
		
		
		public virtual   global::nx3.ETime get_time(){
			unchecked {
				#line 50 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.nbar.time;
			}
			#line default
		}
		
		
		public  global::nx3.EDisplayALN displayClefs;
		
		public  global::nx3.EDisplayALN displayKeys;
		
		public  global::nx3.EDisplayALN displayTime;
		
		public virtual   global::nx3.EDisplayALN get_displayClefs(){
			unchecked {
				#line 59 "F:\\nx3\\src\\nx3\\PBar.hx"
				global::nx3.EDisplayALN result = global::nx3.EDisplayALN.Never;
				{
					#line 60 "F:\\nx3\\src\\nx3\\PBar.hx"
					int _g = 0;
					#line 60 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> _g1 = this.getParts();
					#line 60 "F:\\nx3\\src\\nx3\\PBar.hx"
					while (( _g < _g1.length )){
						#line 60 "F:\\nx3\\src\\nx3\\PBar.hx"
						global::nx3.PPart vpart = ((global::nx3.PPart) (_g1[_g]) );
						#line 60 "F:\\nx3\\src\\nx3\\PBar.hx"
						 ++ _g;
						#line 62 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (( vpart.npart.clefDisplay == default(global::nx3.EDisplayALN) )) {
							#line 62 "F:\\nx3\\src\\nx3\\PBar.hx"
							result = global::nx3.EDisplayALN.Layout;
						}
						
						#line 63 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (( vpart.npart.clefDisplay == global::nx3.EDisplayALN.Layout )) {
							#line 63 "F:\\nx3\\src\\nx3\\PBar.hx"
							result = global::nx3.EDisplayALN.Layout;
						}
						
						#line 64 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (( vpart.npart.clefDisplay == global::nx3.EDisplayALN.Always )) {
							#line 66 "F:\\nx3\\src\\nx3\\PBar.hx"
							result = global::nx3.EDisplayALN.Always;
							break;
						}
						
					}
					
				}
				
				#line 70 "F:\\nx3\\src\\nx3\\PBar.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   global::nx3.EDisplayALN get_displayKeys(){
			unchecked {
				#line 75 "F:\\nx3\\src\\nx3\\PBar.hx"
				global::nx3.EDisplayALN result = global::nx3.EDisplayALN.Never;
				{
					#line 76 "F:\\nx3\\src\\nx3\\PBar.hx"
					int _g = 0;
					#line 76 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> _g1 = this.getParts();
					#line 76 "F:\\nx3\\src\\nx3\\PBar.hx"
					while (( _g < _g1.length )){
						#line 76 "F:\\nx3\\src\\nx3\\PBar.hx"
						global::nx3.PPart vpart = ((global::nx3.PPart) (_g1[_g]) );
						#line 76 "F:\\nx3\\src\\nx3\\PBar.hx"
						 ++ _g;
						#line 78 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (( vpart.npart.keyDisplay == default(global::nx3.EDisplayALN) )) {
							#line 78 "F:\\nx3\\src\\nx3\\PBar.hx"
							result = global::nx3.EDisplayALN.Layout;
						}
						
						#line 79 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (( vpart.npart.keyDisplay == global::nx3.EDisplayALN.Layout )) {
							#line 79 "F:\\nx3\\src\\nx3\\PBar.hx"
							result = global::nx3.EDisplayALN.Layout;
						}
						
						#line 80 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (( vpart.npart.keyDisplay == global::nx3.EDisplayALN.Always )) {
							#line 82 "F:\\nx3\\src\\nx3\\PBar.hx"
							result = global::nx3.EDisplayALN.Always;
							break;
						}
						
					}
					
				}
				
				#line 87 "F:\\nx3\\src\\nx3\\PBar.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   global::nx3.EDisplayALN get_displayTime(){
			unchecked {
				#line 92 "F:\\nx3\\src\\nx3\\PBar.hx"
				global::nx3.EDisplayALN result = default(global::nx3.EDisplayALN);
				#line 92 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (( this.nbar.timeDisplay != default(global::nx3.EDisplayALN) )) {
					#line 92 "F:\\nx3\\src\\nx3\\PBar.hx"
					result = this.nbar.timeDisplay;
				}
				 else {
					#line 92 "F:\\nx3\\src\\nx3\\PBar.hx"
					result = global::nx3.EDisplayALN.Layout;
				}
				
				#line 93 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.nbar.timeDisplay;
			}
			#line default
		}
		
		
		public  global::Array<object> parts;
		
		public virtual   global::Array<object> getParts(){
			unchecked {
				#line 103 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (( this.parts != default(global::Array<object>) )) {
					#line 103 "F:\\nx3\\src\\nx3\\PBar.hx"
					return this.parts;
				}
				
				#line 104 "F:\\nx3\\src\\nx3\\PBar.hx"
				this.parts = new global::Array<object>(new object[]{});
				#line 106 "F:\\nx3\\src\\nx3\\PBar.hx"
				{
					#line 106 "F:\\nx3\\src\\nx3\\PBar.hx"
					int _g = 0;
					#line 106 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> _g1 = this.nbar.nparts;
					#line 106 "F:\\nx3\\src\\nx3\\PBar.hx"
					while (( _g < _g1.length )){
						#line 106 "F:\\nx3\\src\\nx3\\PBar.hx"
						global::nx3.NPart npart = ((global::nx3.NPart) (_g1[_g]) );
						#line 106 "F:\\nx3\\src\\nx3\\PBar.hx"
						 ++ _g;
						#line 108 "F:\\nx3\\src\\nx3\\PBar.hx"
						global::nx3.PPart ppart = new global::nx3.PPart(((global::nx3.NPart) (npart) ));
						ppart.bar = this;
						this.parts.push(ppart);
					}
					
				}
				
				#line 113 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.parts;
			}
			#line default
		}
		
		
		public  global::Array<object> columns;
		
		public virtual   global::Array<object> getColumns(){
			unchecked {
				#line 120 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (( this.columns != default(global::Array<object>) )) {
					#line 120 "F:\\nx3\\src\\nx3\\PBar.hx"
					return this.columns;
				}
				
				#line 121 "F:\\nx3\\src\\nx3\\PBar.hx"
				global::nx3.PColumnsGenerator generator = new global::nx3.PColumnsGenerator(((global::nx3.PBar) (this) ));
				this.columns = generator.getColumns();
				#line 124 "F:\\nx3\\src\\nx3\\PBar.hx"
				this.calculateMDistances();
				#line 127 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.columns;
			}
			#line default
		}
		
		
		public virtual   void calculateMDistances(){
			unchecked {
				#line 133 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (( this.columns == default(global::Array<object>) )) {
					#line 133 "F:\\nx3\\src\\nx3\\PBar.hx"
					this.getColumns();
				}
				
				#line 134 "F:\\nx3\\src\\nx3\\PBar.hx"
				new global::nx3.PColumnsDistancesCalculator(((global::nx3.PBar) (this) )).calculate();
			}
			#line default
		}
		
		
		public virtual   void calculateAPositions(){
			unchecked {
				#line 139 "F:\\nx3\\src\\nx3\\PBar.hx"
				new global::nx3.PColumnsAllotmentCalculator(((global::nx3.PBar) (this) )).calculate(default(global::haxe.lang.Null<double>));
			}
			#line default
		}
		
		
		public  int @value;
		
		public virtual   int getValue(){
			unchecked {
				#line 157 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (( this.@value != 0 )) {
					#line 157 "F:\\nx3\\src\\nx3\\PBar.hx"
					return this.@value;
				}
				
				#line 158 "F:\\nx3\\src\\nx3\\PBar.hx"
				{
					#line 158 "F:\\nx3\\src\\nx3\\PBar.hx"
					int _g = 0;
					#line 158 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> _g1 = this.getParts();
					#line 158 "F:\\nx3\\src\\nx3\\PBar.hx"
					while (( _g < _g1.length )){
						#line 158 "F:\\nx3\\src\\nx3\\PBar.hx"
						global::nx3.PPart part = ((global::nx3.PPart) (_g1[_g]) );
						#line 158 "F:\\nx3\\src\\nx3\\PBar.hx"
						 ++ _g;
						#line 160 "F:\\nx3\\src\\nx3\\PBar.hx"
						{
							#line 160 "F:\\nx3\\src\\nx3\\PBar.hx"
							double x = default(double);
							#line 160 "F:\\nx3\\src\\nx3\\PBar.hx"
							{
								#line 160 "F:\\nx3\\src\\nx3\\PBar.hx"
								double b = ((double) (part.getValue()) );
								#line 160 "F:\\nx3\\src\\nx3\\PBar.hx"
								x = global::System.Math.Max(((double) (this.@value) ), ((double) (b) ));
							}
							
							#line 160 "F:\\nx3\\src\\nx3\\PBar.hx"
							this.@value = ((int) (x) );
						}
						
					}
					
				}
				
				#line 162 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.@value;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> contentwidth;
		
		public virtual   double getContentwidth(){
			unchecked {
				#line 168 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (this.contentwidth.hasValue) {
					#line 168 "F:\\nx3\\src\\nx3\\PBar.hx"
					return this.contentwidth.@value;
				}
				
				#line 169 "F:\\nx3\\src\\nx3\\PBar.hx"
				global::nx3.PColumn lastcolumn = default(global::nx3.PColumn);
				#line 169 "F:\\nx3\\src\\nx3\\PBar.hx"
				{
					#line 169 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> array = this.getColumns();
					#line 169 "F:\\nx3\\src\\nx3\\PBar.hx"
					lastcolumn = ((global::nx3.PColumn) (array[( array.length - 1 )]) );
				}
				
				#line 170 "F:\\nx3\\src\\nx3\\PBar.hx"
				double __temp_stmt242 = lastcolumn.getAPostion();
				#line 170 "F:\\nx3\\src\\nx3\\PBar.hx"
				double __temp_stmt243 = default(double);
				#line 170 "F:\\nx3\\src\\nx3\\PBar.hx"
				{
					#line 170 "F:\\nx3\\src\\nx3\\PBar.hx"
					double a = lastcolumn.getADistance();
					#line 170 "F:\\nx3\\src\\nx3\\PBar.hx"
					double b = lastcolumn.getRightX();
					#line 170 "F:\\nx3\\src\\nx3\\PBar.hx"
					__temp_stmt243 = global::System.Math.Max(((double) (a) ), ((double) (b) ));
				}
				
				#line 170 "F:\\nx3\\src\\nx3\\PBar.hx"
				this.contentwidth = new global::haxe.lang.Null<double>(( __temp_stmt242 + __temp_stmt243 ), true);
				#line 172 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.contentwidth.@value;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> contentx;
		
		public virtual   double getContentXZero(){
			unchecked {
				#line 178 "F:\\nx3\\src\\nx3\\PBar.hx"
				global::nx3.PColumn firstcolumn = default(global::nx3.PColumn);
				#line 178 "F:\\nx3\\src\\nx3\\PBar.hx"
				{
					#line 178 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> array = this.getColumns();
					#line 178 "F:\\nx3\\src\\nx3\\PBar.hx"
					firstcolumn = ((global::nx3.PColumn) (array[0]) );
				}
				
				#line 179 "F:\\nx3\\src\\nx3\\PBar.hx"
				this.contentx = new global::haxe.lang.Null<double>( - (firstcolumn.getLeftX()) , true);
				return this.contentx.@value;
			}
			#line default
		}
		
		
		public  double stretchwidth;
		
		public  global::haxe.lang.Null<double> allottedDistanceSum;
		
		public virtual   double getAllottedDistanceSum(){
			unchecked {
				#line 199 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (this.allottedDistanceSum.hasValue) {
					#line 199 "F:\\nx3\\src\\nx3\\PBar.hx"
					return this.allottedDistanceSum.@value;
				}
				
				#line 200 "F:\\nx3\\src\\nx3\\PBar.hx"
				this.getContentwidth();
				return this.allottedDistanceSum.@value;
			}
			#line default
		}
		
		
		public virtual   double getStretchWidth(){
			unchecked {
				#line 207 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.stretchwidth;
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				switch (hash){
					case 660047329:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.stretchwidth = ((double) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					case 834174833:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.@value = ((int) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				switch (hash){
					case 2090923337:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.allottedDistanceSum = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					case 660047329:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.stretchwidth = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					case 790889759:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.contentx = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					case 499358253:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.contentwidth = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					case 834174833:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.@value = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					case 1935256797:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.columns = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					case 1029017888:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.parts = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					case 888105839:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.displayTime = ((global::nx3.EDisplayALN) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					case 788103510:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.displayKeys = ((global::nx3.EDisplayALN) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					case 1421102151:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.displayClefs = ((global::nx3.EDisplayALN) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					case 2048392659:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this._keys = ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					case 1145224490:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this._clefs = ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					case 1291635725:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.time = ((global::nx3.ETime) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					case 1191633396:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.keys = ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					case 1213953513:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.clefs = ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					case 2027516754:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.score = ((global::nx3.PScore) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					case 1224747557:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.nbar = ((global::nx3.NBar) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				switch (hash){
					case 1567574903:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getStretchWidth") ), ((int) (1567574903) ))) );
					}
					
					
					case 1421369939:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getAllottedDistanceSum") ), ((int) (1421369939) ))) );
					}
					
					
					case 2090923337:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return (this.allottedDistanceSum).toDynamic();
					}
					
					
					case 660047329:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.stretchwidth;
					}
					
					
					case 1566081405:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getContentXZero") ), ((int) (1566081405) ))) );
					}
					
					
					case 790889759:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return (this.contentx).toDynamic();
					}
					
					
					case 1085140963:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getContentwidth") ), ((int) (1085140963) ))) );
					}
					
					
					case 499358253:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return (this.contentwidth).toDynamic();
					}
					
					
					case 294620923:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getValue") ), ((int) (294620923) ))) );
					}
					
					
					case 834174833:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.@value;
					}
					
					
					case 1073927183:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calculateAPositions") ), ((int) (1073927183) ))) );
					}
					
					
					case 26589815:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calculateMDistances") ), ((int) (26589815) ))) );
					}
					
					
					case 1119564519:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getColumns") ), ((int) (1119564519) ))) );
					}
					
					
					case 1935256797:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.columns;
					}
					
					
					case 489463978:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getParts") ), ((int) (489463978) ))) );
					}
					
					
					case 1029017888:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.parts;
					}
					
					
					case 1976640262:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_displayTime") ), ((int) (1976640262) ))) );
					}
					
					
					case 1876637933:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_displayKeys") ), ((int) (1876637933) ))) );
					}
					
					
					case 1498626256:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_displayClefs") ), ((int) (1498626256) ))) );
					}
					
					
					case 888105839:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (handleProperties) {
							#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
							return this.get_displayTime();
						}
						 else {
							#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
							return this.displayTime;
						}
						
					}
					
					
					case 788103510:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (handleProperties) {
							#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
							return this.get_displayKeys();
						}
						 else {
							#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
							return this.displayKeys;
						}
						
					}
					
					
					case 1421102151:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (handleProperties) {
							#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
							return this.get_displayClefs();
						}
						 else {
							#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
							return this.displayClefs;
						}
						
					}
					
					
					case 1287096214:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_time") ), ((int) (1287096214) ))) );
					}
					
					
					case 1187093885:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_keys") ), ((int) (1187093885) ))) );
					}
					
					
					case 2048392659:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this._keys;
					}
					
					
					case 201642560:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_clefs") ), ((int) (201642560) ))) );
					}
					
					
					case 1145224490:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this._clefs;
					}
					
					
					case 1291635725:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (handleProperties) {
							#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
							return this.get_time();
						}
						 else {
							#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
							return this.time;
						}
						
					}
					
					
					case 1191633396:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (handleProperties) {
							#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
							return this.get_keys();
						}
						 else {
							#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
							return this.keys;
						}
						
					}
					
					
					case 1213953513:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (handleProperties) {
							#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
							return this.get_clefs();
						}
						 else {
							#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
							return this.clefs;
						}
						
					}
					
					
					case 1487962844:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getScore") ), ((int) (1487962844) ))) );
					}
					
					
					case 2027516754:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.score;
					}
					
					
					case 1224747557:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.nbar;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				switch (hash){
					case 660047329:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.stretchwidth;
					}
					
					
					case 834174833:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((double) (this.@value) );
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				switch (hash){
					case 1567574903:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.getStretchWidth();
					}
					
					
					case 1421369939:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.getAllottedDistanceSum();
					}
					
					
					case 1566081405:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.getContentXZero();
					}
					
					
					case 1085140963:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.getContentwidth();
					}
					
					
					case 294620923:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.getValue();
					}
					
					
					case 1073927183:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.calculateAPositions();
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						break;
					}
					
					
					case 26589815:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.calculateMDistances();
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						break;
					}
					
					
					case 1119564519:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.getColumns();
					}
					
					
					case 489463978:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.getParts();
					}
					
					
					case 1976640262:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.get_displayTime();
					}
					
					
					case 1876637933:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.get_displayKeys();
					}
					
					
					case 1498626256:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.get_displayClefs();
					}
					
					
					case 1287096214:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.get_time();
					}
					
					
					case 1187093885:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.get_keys();
					}
					
					
					case 201642560:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.get_clefs();
					}
					
					
					case 1487962844:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.getScore();
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("allottedDistanceSum");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("stretchwidth");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("contentx");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("contentwidth");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("value");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("columns");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("parts");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("displayTime");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("displayKeys");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("displayClefs");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("_keys");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("_clefs");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("time");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("keys");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("clefs");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("score");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("nbar");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				{
					#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


