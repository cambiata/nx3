
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
		
		
		public static   void __hx_ctor_nx3_PBar(global::nx3.PBar __temp_me76, global::nx3.NBar nbar){
			unchecked {
				#line 201 "F:\\nx3\\src\\nx3\\PBar.hx"
				__temp_me76.stretchwidth = ((double) (0) );
				#line 47 "F:\\nx3\\src\\nx3\\PBar.hx"
				__temp_me76._keys = default(global::Array<global::nx3.EKey>);
				#line 38 "F:\\nx3\\src\\nx3\\PBar.hx"
				__temp_me76._clefs = default(global::Array<global::nx3.EClef>);
				#line 14 "F:\\nx3\\src\\nx3\\PBar.hx"
				__temp_me76.nbar = nbar;
				__temp_me76.@value = 0;
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
		
		public virtual   object iterator(){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\PBar.hx"
				{
					#line 18 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> _this = this.getParts();
					#line 18 "F:\\nx3\\src\\nx3\\PBar.hx"
					return new global::_Array.ArrayIterator<object>(((global::Array<object>) (_this) ));
				}
				
			}
			#line default
		}
		
		
		public  int length;
		
		public virtual   int get_length(){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.getParts().length;
			}
			#line default
		}
		
		
		public  global::nx3.PScore score;
		
		public virtual   global::nx3.PScore getScore(){
			unchecked {
				#line 26 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.score;
			}
			#line default
		}
		
		
		public  global::nx3.PSystemBar systembar;
		
		public virtual   global::nx3.PSystemBar getSystembar(){
			unchecked {
				#line 30 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.systembar;
			}
			#line default
		}
		
		
		public  global::Array<global::nx3.EClef> clefs;
		
		public  global::Array<global::nx3.EKey> keys;
		
		public  global::nx3.ETime time;
		
		public  global::Array<global::nx3.EClef> _clefs;
		
		public virtual   global::Array<global::nx3.EClef> get_clefs(){
			unchecked {
				#line 41 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (( this._clefs != default(global::Array<global::nx3.EClef>) )) {
					#line 41 "F:\\nx3\\src\\nx3\\PBar.hx"
					return this._clefs;
				}
				
				#line 42 "F:\\nx3\\src\\nx3\\PBar.hx"
				this._clefs = new global::Array<global::nx3.EClef>();
				{
					#line 43 "F:\\nx3\\src\\nx3\\PBar.hx"
					int _g = 0;
					#line 43 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> _g1 = this.getParts();
					#line 43 "F:\\nx3\\src\\nx3\\PBar.hx"
					while (( _g < _g1.length )){
						#line 43 "F:\\nx3\\src\\nx3\\PBar.hx"
						global::nx3.PPart vpart = ((global::nx3.PPart) (_g1[_g]) );
						#line 43 "F:\\nx3\\src\\nx3\\PBar.hx"
						 ++ _g;
						#line 43 "F:\\nx3\\src\\nx3\\PBar.hx"
						this._clefs.push(vpart.npart.clef);
					}
					
				}
				
				#line 44 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this._clefs;
			}
			#line default
		}
		
		
		public  global::Array<global::nx3.EKey> _keys;
		
		public virtual   global::Array<global::nx3.EKey> get_keys(){
			unchecked {
				#line 50 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (( this._keys != default(global::Array<global::nx3.EKey>) )) {
					#line 50 "F:\\nx3\\src\\nx3\\PBar.hx"
					return this._keys;
				}
				
				#line 51 "F:\\nx3\\src\\nx3\\PBar.hx"
				this._keys = new global::Array<global::nx3.EKey>();
				{
					#line 52 "F:\\nx3\\src\\nx3\\PBar.hx"
					int _g = 0;
					#line 52 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> _g1 = this.getParts();
					#line 52 "F:\\nx3\\src\\nx3\\PBar.hx"
					while (( _g < _g1.length )){
						#line 52 "F:\\nx3\\src\\nx3\\PBar.hx"
						global::nx3.PPart vpart = ((global::nx3.PPart) (_g1[_g]) );
						#line 52 "F:\\nx3\\src\\nx3\\PBar.hx"
						 ++ _g;
						#line 52 "F:\\nx3\\src\\nx3\\PBar.hx"
						this._keys.push(vpart.npart.key);
					}
					
				}
				
				#line 53 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this._keys;
			}
			#line default
		}
		
		
		public virtual   global::nx3.ETime get_time(){
			unchecked {
				#line 58 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.nbar.time;
			}
			#line default
		}
		
		
		public  global::nx3.EDisplayALN displayClefs;
		
		public  global::nx3.EDisplayALN displayKeys;
		
		public  global::nx3.EDisplayALN displayTime;
		
		public virtual   global::nx3.EDisplayALN get_displayClefs(){
			unchecked {
				#line 67 "F:\\nx3\\src\\nx3\\PBar.hx"
				global::nx3.EDisplayALN result = global::nx3.EDisplayALN.Never;
				{
					#line 68 "F:\\nx3\\src\\nx3\\PBar.hx"
					int _g = 0;
					#line 68 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> _g1 = this.getParts();
					#line 68 "F:\\nx3\\src\\nx3\\PBar.hx"
					while (( _g < _g1.length )){
						#line 68 "F:\\nx3\\src\\nx3\\PBar.hx"
						global::nx3.PPart vpart = ((global::nx3.PPart) (_g1[_g]) );
						#line 68 "F:\\nx3\\src\\nx3\\PBar.hx"
						 ++ _g;
						#line 70 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (( vpart.npart.clefDisplay == default(global::nx3.EDisplayALN) )) {
							#line 70 "F:\\nx3\\src\\nx3\\PBar.hx"
							result = global::nx3.EDisplayALN.Layout;
						}
						
						#line 71 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (( vpart.npart.clefDisplay == global::nx3.EDisplayALN.Layout )) {
							#line 71 "F:\\nx3\\src\\nx3\\PBar.hx"
							result = global::nx3.EDisplayALN.Layout;
						}
						
						#line 72 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (( vpart.npart.clefDisplay == global::nx3.EDisplayALN.Always )) {
							#line 74 "F:\\nx3\\src\\nx3\\PBar.hx"
							result = global::nx3.EDisplayALN.Always;
							break;
						}
						
					}
					
				}
				
				#line 78 "F:\\nx3\\src\\nx3\\PBar.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   global::nx3.EDisplayALN get_displayKeys(){
			unchecked {
				#line 83 "F:\\nx3\\src\\nx3\\PBar.hx"
				global::nx3.EDisplayALN result = global::nx3.EDisplayALN.Never;
				{
					#line 84 "F:\\nx3\\src\\nx3\\PBar.hx"
					int _g = 0;
					#line 84 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> _g1 = this.getParts();
					#line 84 "F:\\nx3\\src\\nx3\\PBar.hx"
					while (( _g < _g1.length )){
						#line 84 "F:\\nx3\\src\\nx3\\PBar.hx"
						global::nx3.PPart vpart = ((global::nx3.PPart) (_g1[_g]) );
						#line 84 "F:\\nx3\\src\\nx3\\PBar.hx"
						 ++ _g;
						#line 86 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (( vpart.npart.keyDisplay == default(global::nx3.EDisplayALN) )) {
							#line 86 "F:\\nx3\\src\\nx3\\PBar.hx"
							result = global::nx3.EDisplayALN.Layout;
						}
						
						#line 87 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (( vpart.npart.keyDisplay == global::nx3.EDisplayALN.Layout )) {
							#line 87 "F:\\nx3\\src\\nx3\\PBar.hx"
							result = global::nx3.EDisplayALN.Layout;
						}
						
						#line 88 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (( vpart.npart.keyDisplay == global::nx3.EDisplayALN.Always )) {
							#line 90 "F:\\nx3\\src\\nx3\\PBar.hx"
							result = global::nx3.EDisplayALN.Always;
							break;
						}
						
					}
					
				}
				
				#line 95 "F:\\nx3\\src\\nx3\\PBar.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   global::nx3.EDisplayALN get_displayTime(){
			unchecked {
				#line 100 "F:\\nx3\\src\\nx3\\PBar.hx"
				global::nx3.EDisplayALN result = default(global::nx3.EDisplayALN);
				#line 100 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (( this.nbar.timeDisplay != default(global::nx3.EDisplayALN) )) {
					#line 100 "F:\\nx3\\src\\nx3\\PBar.hx"
					result = this.nbar.timeDisplay;
				}
				 else {
					#line 100 "F:\\nx3\\src\\nx3\\PBar.hx"
					result = global::nx3.EDisplayALN.Layout;
				}
				
				#line 101 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.nbar.timeDisplay;
			}
			#line default
		}
		
		
		public  global::Array<object> parts;
		
		public virtual   global::Array<object> getParts(){
			unchecked {
				#line 111 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (( this.parts != default(global::Array<object>) )) {
					#line 111 "F:\\nx3\\src\\nx3\\PBar.hx"
					return this.parts;
				}
				
				#line 112 "F:\\nx3\\src\\nx3\\PBar.hx"
				this.parts = new global::Array<object>(new object[]{});
				#line 114 "F:\\nx3\\src\\nx3\\PBar.hx"
				{
					#line 114 "F:\\nx3\\src\\nx3\\PBar.hx"
					int _g = 0;
					#line 114 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> _g1 = this.nbar.nparts;
					#line 114 "F:\\nx3\\src\\nx3\\PBar.hx"
					while (( _g < _g1.length )){
						#line 114 "F:\\nx3\\src\\nx3\\PBar.hx"
						global::nx3.NPart npart = ((global::nx3.NPart) (_g1[_g]) );
						#line 114 "F:\\nx3\\src\\nx3\\PBar.hx"
						 ++ _g;
						#line 116 "F:\\nx3\\src\\nx3\\PBar.hx"
						global::nx3.PPart ppart = new global::nx3.PPart(((global::nx3.NPart) (npart) ));
						ppart.bar = this;
						this.parts.push(ppart);
					}
					
				}
				
				#line 121 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.parts;
			}
			#line default
		}
		
		
		public virtual   global::nx3.PPart getPart(int idx){
			unchecked {
				#line 124 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (( ( idx < 0 ) || ( idx > this.getParts().length ) )) {
					#line 124 "F:\\nx3\\src\\nx3\\PBar.hx"
					return default(global::nx3.PPart);
				}
				 else {
					#line 124 "F:\\nx3\\src\\nx3\\PBar.hx"
					return ((global::nx3.PPart) (this.getParts()[idx]) );
				}
				
			}
			#line default
		}
		
		
		public  global::Array<object> columns;
		
		public virtual   global::Array<object> getColumns(){
			unchecked {
				#line 130 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (( this.columns != default(global::Array<object>) )) {
					#line 130 "F:\\nx3\\src\\nx3\\PBar.hx"
					return this.columns;
				}
				
				#line 131 "F:\\nx3\\src\\nx3\\PBar.hx"
				global::nx3.PColumnsGenerator generator = new global::nx3.PColumnsGenerator(((global::nx3.PBar) (this) ));
				this.columns = generator.getColumns();
				#line 134 "F:\\nx3\\src\\nx3\\PBar.hx"
				this.calculateMDistances();
				#line 137 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.columns;
			}
			#line default
		}
		
		
		public virtual   int getIndex(){
			unchecked {
				#line 142 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.getScore().getBars().indexOf(this, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public virtual   void calculateMDistances(){
			unchecked {
				#line 148 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (( this.columns == default(global::Array<object>) )) {
					#line 148 "F:\\nx3\\src\\nx3\\PBar.hx"
					this.getColumns();
				}
				
				#line 149 "F:\\nx3\\src\\nx3\\PBar.hx"
				new global::nx3.PColumnsDistancesCalculator(((global::nx3.PBar) (this) )).calculate();
			}
			#line default
		}
		
		
		public virtual   void calculateAPositions(){
			unchecked {
				#line 154 "F:\\nx3\\src\\nx3\\PBar.hx"
				new global::nx3.PColumnsAllotmentCalculator(((global::nx3.PBar) (this) )).calculate(default(global::haxe.lang.Null<double>));
			}
			#line default
		}
		
		
		public  int @value;
		
		public virtual   int getValue(){
			unchecked {
				#line 172 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (( this.@value != 0 )) {
					#line 172 "F:\\nx3\\src\\nx3\\PBar.hx"
					return this.@value;
				}
				
				#line 173 "F:\\nx3\\src\\nx3\\PBar.hx"
				{
					#line 173 "F:\\nx3\\src\\nx3\\PBar.hx"
					int _g = 0;
					#line 173 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> _g1 = this.getParts();
					#line 173 "F:\\nx3\\src\\nx3\\PBar.hx"
					while (( _g < _g1.length )){
						#line 173 "F:\\nx3\\src\\nx3\\PBar.hx"
						global::nx3.PPart part = ((global::nx3.PPart) (_g1[_g]) );
						#line 173 "F:\\nx3\\src\\nx3\\PBar.hx"
						 ++ _g;
						#line 175 "F:\\nx3\\src\\nx3\\PBar.hx"
						{
							#line 175 "F:\\nx3\\src\\nx3\\PBar.hx"
							double x = default(double);
							#line 175 "F:\\nx3\\src\\nx3\\PBar.hx"
							{
								#line 175 "F:\\nx3\\src\\nx3\\PBar.hx"
								double b = ((double) (part.getValue()) );
								#line 175 "F:\\nx3\\src\\nx3\\PBar.hx"
								x = global::System.Math.Max(((double) (this.@value) ), ((double) (b) ));
							}
							
							#line 175 "F:\\nx3\\src\\nx3\\PBar.hx"
							this.@value = ((int) (x) );
						}
						
					}
					
				}
				
				#line 177 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.@value;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> contentwidth;
		
		public virtual   double getContentwidth(){
			unchecked {
				#line 183 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (this.contentwidth.hasValue) {
					#line 183 "F:\\nx3\\src\\nx3\\PBar.hx"
					return this.contentwidth.@value;
				}
				
				#line 184 "F:\\nx3\\src\\nx3\\PBar.hx"
				global::nx3.PColumn lastcolumn = default(global::nx3.PColumn);
				#line 184 "F:\\nx3\\src\\nx3\\PBar.hx"
				{
					#line 184 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> array = this.getColumns();
					#line 184 "F:\\nx3\\src\\nx3\\PBar.hx"
					lastcolumn = ((global::nx3.PColumn) (array[( array.length - 1 )]) );
				}
				
				#line 188 "F:\\nx3\\src\\nx3\\PBar.hx"
				double __temp_stmt235 = lastcolumn.getAPostion();
				#line 188 "F:\\nx3\\src\\nx3\\PBar.hx"
				double __temp_stmt236 = default(double);
				#line 188 "F:\\nx3\\src\\nx3\\PBar.hx"
				{
					#line 188 "F:\\nx3\\src\\nx3\\PBar.hx"
					double a = lastcolumn.getADistance();
					#line 188 "F:\\nx3\\src\\nx3\\PBar.hx"
					double b = lastcolumn.getRightX();
					#line 188 "F:\\nx3\\src\\nx3\\PBar.hx"
					__temp_stmt236 = global::System.Math.Max(((double) (a) ), ((double) (b) ));
				}
				
				#line 188 "F:\\nx3\\src\\nx3\\PBar.hx"
				this.contentwidth = new global::haxe.lang.Null<double>(( __temp_stmt235 + __temp_stmt236 ), true);
				#line 190 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.contentwidth.@value;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> contentx;
		
		public virtual   double getContentXZero(){
			unchecked {
				#line 196 "F:\\nx3\\src\\nx3\\PBar.hx"
				global::nx3.PColumn firstcolumn = default(global::nx3.PColumn);
				#line 196 "F:\\nx3\\src\\nx3\\PBar.hx"
				{
					#line 196 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> array = this.getColumns();
					#line 196 "F:\\nx3\\src\\nx3\\PBar.hx"
					firstcolumn = ((global::nx3.PColumn) (array[0]) );
				}
				
				#line 197 "F:\\nx3\\src\\nx3\\PBar.hx"
				this.contentx = new global::haxe.lang.Null<double>( - (firstcolumn.getLeftX()) , true);
				return this.contentx.@value;
			}
			#line default
		}
		
		
		public  double stretchwidth;
		
		public  global::haxe.lang.Null<double> allottedDistanceSum;
		
		public virtual   double getAllottedDistanceSum(){
			unchecked {
				#line 217 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (this.allottedDistanceSum.hasValue) {
					#line 217 "F:\\nx3\\src\\nx3\\PBar.hx"
					return this.allottedDistanceSum.@value;
				}
				
				#line 218 "F:\\nx3\\src\\nx3\\PBar.hx"
				this.getContentwidth();
				return this.allottedDistanceSum.@value;
			}
			#line default
		}
		
		
		public virtual   double getStretchWidth(){
			unchecked {
				#line 225 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.stretchwidth;
			}
			#line default
		}
		
		
		public  global::Array<object> tieconnections;
		
		public virtual   global::Array<object> getTieConnections(){
			unchecked {
				#line 232 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (( this.tieconnections != default(global::Array<object>) )) {
					#line 232 "F:\\nx3\\src\\nx3\\PBar.hx"
					return this.tieconnections;
				}
				
				#line 233 "F:\\nx3\\src\\nx3\\PBar.hx"
				this.tieconnections = new global::Array<object>(new object[]{});
				#line 235 "F:\\nx3\\src\\nx3\\PBar.hx"
				global::nx3.PBar nextBar = default(global::nx3.PBar);
				#line 235 "F:\\nx3\\src\\nx3\\PBar.hx"
				{
					#line 235 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> a = this.score.getBars();
					#line 235 "F:\\nx3\\src\\nx3\\PBar.hx"
					int idx = ( this.getIndex() + 1 );
					#line 235 "F:\\nx3\\src\\nx3\\PBar.hx"
					if (( ( idx < 0 ) || ( idx > ( a.length - 1 ) ) )) {
						#line 235 "F:\\nx3\\src\\nx3\\PBar.hx"
						nextBar = default(global::nx3.PBar);
					}
					 else {
						#line 235 "F:\\nx3\\src\\nx3\\PBar.hx"
						nextBar = ((global::nx3.PBar) (a[idx]) );
					}
					
				}
				
				#line 236 "F:\\nx3\\src\\nx3\\PBar.hx"
				if (( nextBar == default(global::nx3.PBar) )) {
					#line 238 "F:\\nx3\\src\\nx3\\PBar.hx"
					return this.tieconnections;
				}
				
				#line 241 "F:\\nx3\\src\\nx3\\PBar.hx"
				{
					#line 241 "F:\\nx3\\src\\nx3\\PBar.hx"
					int _g = 0;
					#line 241 "F:\\nx3\\src\\nx3\\PBar.hx"
					global::Array<object> _g1 = this.getParts();
					#line 241 "F:\\nx3\\src\\nx3\\PBar.hx"
					while (( _g < _g1.length )){
						#line 241 "F:\\nx3\\src\\nx3\\PBar.hx"
						global::nx3.PPart part = ((global::nx3.PPart) (_g1[_g]) );
						#line 241 "F:\\nx3\\src\\nx3\\PBar.hx"
						 ++ _g;
						#line 243 "F:\\nx3\\src\\nx3\\PBar.hx"
						global::nx3.PPart nextPart = default(global::nx3.PPart);
						#line 243 "F:\\nx3\\src\\nx3\\PBar.hx"
						{
							#line 243 "F:\\nx3\\src\\nx3\\PBar.hx"
							global::Array<object> a1 = nextBar.getParts();
							#line 243 "F:\\nx3\\src\\nx3\\PBar.hx"
							int idx1 = part.getIndex();
							#line 243 "F:\\nx3\\src\\nx3\\PBar.hx"
							if (( ( idx1 < 0 ) || ( idx1 > ( a1.length - 1 ) ) )) {
								#line 243 "F:\\nx3\\src\\nx3\\PBar.hx"
								nextPart = default(global::nx3.PPart);
							}
							 else {
								#line 243 "F:\\nx3\\src\\nx3\\PBar.hx"
								nextPart = ((global::nx3.PPart) (a1[idx1]) );
							}
							
						}
						
						#line 245 "F:\\nx3\\src\\nx3\\PBar.hx"
						{
							#line 245 "F:\\nx3\\src\\nx3\\PBar.hx"
							int _g2 = 0;
							#line 245 "F:\\nx3\\src\\nx3\\PBar.hx"
							global::Array<object> _g3 = part.getVoices();
							#line 245 "F:\\nx3\\src\\nx3\\PBar.hx"
							while (( _g2 < _g3.length )){
								#line 245 "F:\\nx3\\src\\nx3\\PBar.hx"
								global::nx3.PVoice voice = ((global::nx3.PVoice) (_g3[_g2]) );
								#line 245 "F:\\nx3\\src\\nx3\\PBar.hx"
								 ++ _g2;
								#line 247 "F:\\nx3\\src\\nx3\\PBar.hx"
								global::nx3.PNote lastnote = default(global::nx3.PNote);
								#line 247 "F:\\nx3\\src\\nx3\\PBar.hx"
								{
									#line 247 "F:\\nx3\\src\\nx3\\PBar.hx"
									global::Array<object> array = voice.getNotes();
									#line 247 "F:\\nx3\\src\\nx3\\PBar.hx"
									lastnote = ((global::nx3.PNote) (array[( array.length - 1 )]) );
								}
								
								#line 248 "F:\\nx3\\src\\nx3\\PBar.hx"
								if (( ! (lastnote.getHasTie().@value) )) {
									#line 248 "F:\\nx3\\src\\nx3\\PBar.hx"
									continue;
								}
								
								#line 250 "F:\\nx3\\src\\nx3\\PBar.hx"
								{
									#line 250 "F:\\nx3\\src\\nx3\\PBar.hx"
									int _g4 = 0;
									#line 250 "F:\\nx3\\src\\nx3\\PBar.hx"
									global::Array<object> _g5 = lastnote.nnote.get_nheads();
									#line 250 "F:\\nx3\\src\\nx3\\PBar.hx"
									while (( _g4 < _g5.length )){
										#line 250 "F:\\nx3\\src\\nx3\\PBar.hx"
										global::nx3.NHead nhead = ((global::nx3.NHead) (_g5[_g4]) );
										#line 250 "F:\\nx3\\src\\nx3\\PBar.hx"
										 ++ _g4;
										#line 252 "F:\\nx3\\src\\nx3\\PBar.hx"
										if (( nhead.tie != default(global::nx3.ETie) )) {
											#line 254 "F:\\nx3\\src\\nx3\\PBar.hx"
											int level = nhead.level;
											#line 257 "F:\\nx3\\src\\nx3\\PBar.hx"
											global::nx3.PPart nextPart1 = default(global::nx3.PPart);
											#line 257 "F:\\nx3\\src\\nx3\\PBar.hx"
											{
												#line 257 "F:\\nx3\\src\\nx3\\PBar.hx"
												global::Array<object> a2 = nextBar.getParts();
												#line 257 "F:\\nx3\\src\\nx3\\PBar.hx"
												int idx2 = part.getIndex();
												#line 257 "F:\\nx3\\src\\nx3\\PBar.hx"
												if (( ( idx2 < 0 ) || ( idx2 > ( a2.length - 1 ) ) )) {
													#line 257 "F:\\nx3\\src\\nx3\\PBar.hx"
													nextPart1 = default(global::nx3.PPart);
												}
												 else {
													#line 257 "F:\\nx3\\src\\nx3\\PBar.hx"
													nextPart1 = ((global::nx3.PPart) (a2[idx2]) );
												}
												
											}
											
											#line 258 "F:\\nx3\\src\\nx3\\PBar.hx"
											if (( nextPart1 == default(global::nx3.PPart) )) {
												#line 258 "F:\\nx3\\src\\nx3\\PBar.hx"
												break;
											}
											
											#line 260 "F:\\nx3\\src\\nx3\\PBar.hx"
											{
												#line 260 "F:\\nx3\\src\\nx3\\PBar.hx"
												int _g6 = 0;
												#line 260 "F:\\nx3\\src\\nx3\\PBar.hx"
												global::Array<object> _g7 = nextPart1.getVoices();
												#line 260 "F:\\nx3\\src\\nx3\\PBar.hx"
												while (( _g6 < _g7.length )){
													#line 260 "F:\\nx3\\src\\nx3\\PBar.hx"
													global::nx3.PVoice voice1 = ((global::nx3.PVoice) (_g7[_g6]) );
													#line 260 "F:\\nx3\\src\\nx3\\PBar.hx"
													 ++ _g6;
													#line 262 "F:\\nx3\\src\\nx3\\PBar.hx"
													global::nx3.PNote nextnote = default(global::nx3.PNote);
													#line 262 "F:\\nx3\\src\\nx3\\PBar.hx"
													{
														#line 262 "F:\\nx3\\src\\nx3\\PBar.hx"
														global::Array<object> array1 = voice1.getNotes();
														#line 262 "F:\\nx3\\src\\nx3\\PBar.hx"
														nextnote = ((global::nx3.PNote) (array1[0]) );
													}
													
													#line 263 "F:\\nx3\\src\\nx3\\PBar.hx"
													{
														#line 263 "F:\\nx3\\src\\nx3\\PBar.hx"
														int _g8 = 0;
														#line 263 "F:\\nx3\\src\\nx3\\PBar.hx"
														global::Array<object> _g9 = nextnote.nnote.get_nheads();
														#line 263 "F:\\nx3\\src\\nx3\\PBar.hx"
														while (( _g8 < _g9.length )){
															#line 263 "F:\\nx3\\src\\nx3\\PBar.hx"
															global::nx3.NHead nnhead = ((global::nx3.NHead) (_g9[_g8]) );
															#line 263 "F:\\nx3\\src\\nx3\\PBar.hx"
															 ++ _g8;
															#line 265 "F:\\nx3\\src\\nx3\\PBar.hx"
															if (( nnhead.level == nhead.level )) {
																#line 268 "F:\\nx3\\src\\nx3\\PBar.hx"
																this.tieconnections.push(new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{25979, 5792080, 1136829802}), new global::Array<object>(new object[]{nextnote, nhead.tie, lastnote}), new global::Array<int>(new int[]{1919096196}), new global::Array<double>(new double[]{((double) (nhead.level) )})));
																break;
															}
															
														}
														
													}
													
												}
												
											}
											
										}
										
									}
									
								}
								
							}
							
						}
						
					}
					
				}
				
				#line 278 "F:\\nx3\\src\\nx3\\PBar.hx"
				return this.tieconnections;
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
					
					
					case 520590566:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.length = ((int) (@value) );
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
					case 1044183877:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.tieconnections = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return @value;
					}
					
					
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
					
					
					case 1252252228:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.systembar = ((global::nx3.PSystemBar) (@value) );
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
					
					
					case 520590566:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						this.length = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
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
					case 350437979:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getTieConnections") ), ((int) (350437979) ))) );
					}
					
					
					case 1044183877:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.tieconnections;
					}
					
					
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
					
					
					case 501983900:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getIndex") ), ((int) (501983900) ))) );
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
					
					
					case 483693481:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getPart") ), ((int) (483693481) ))) );
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
					
					
					case 1509586638:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSystembar") ), ((int) (1509586638) ))) );
					}
					
					
					case 1252252228:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.systembar;
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
					
					
					case 261031087:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_length") ), ((int) (261031087) ))) );
					}
					
					
					case 520590566:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (handleProperties) {
							#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
							return this.get_length();
						}
						 else {
							#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
							return this.length;
						}
						
					}
					
					
					case 328878574:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("iterator") ), ((int) (328878574) ))) );
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
					
					
					case 520590566:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						if (handleProperties) {
							#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
							return ((double) (this.get_length()) );
						}
						 else {
							#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
							return ((double) (this.length) );
						}
						
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
					case 350437979:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.getTieConnections();
					}
					
					
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
					
					
					case 501983900:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.getIndex();
					}
					
					
					case 1119564519:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.getColumns();
					}
					
					
					case 483693481:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.getPart(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ));
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
					
					
					case 1509586638:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.getSystembar();
					}
					
					
					case 1487962844:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.getScore();
					}
					
					
					case 261031087:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.get_length();
					}
					
					
					case 328878574:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
						return this.iterator();
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
				baseArr.push("tieconnections");
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
				baseArr.push("systembar");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("score");
				#line 8 "F:\\nx3\\src\\nx3\\PBar.hx"
				baseArr.push("length");
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


