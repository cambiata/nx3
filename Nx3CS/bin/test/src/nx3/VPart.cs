
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VPart : global::haxe.lang.HxObject {
		public    VPart(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VPart(global::nx3.NPart npart){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\VPart.hx"
				global::nx3.VPart.__hx_ctor_nx3_VPart(this, npart);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VPart(global::nx3.VPart __temp_me186, global::nx3.NPart npart){
			unchecked {
				#line 140 "F:\\nx3\\src\\nx3\\VPart.hx"
				__temp_me186.caluclateBeamgropuDirectionsFlag = false;
				#line 12 "F:\\nx3\\src\\nx3\\VPart.hx"
				__temp_me186.npart = npart;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				return new global::nx3.VPart(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				return new global::nx3.VPart(((global::nx3.NPart) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.NPart npart;
		
		public  global::Array<object> vvoices;
		
		public virtual   global::Array<object> getVVoices(){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\VPart.hx"
				if (( this.vvoices != default(global::Array<object>) )) {
					#line 17 "F:\\nx3\\src\\nx3\\VPart.hx"
					return this.vvoices;
				}
				
				#line 18 "F:\\nx3\\src\\nx3\\VPart.hx"
				this.vvoices = new global::Array<object>(new object[]{});
				{
					#line 19 "F:\\nx3\\src\\nx3\\VPart.hx"
					int _g = 0;
					#line 19 "F:\\nx3\\src\\nx3\\VPart.hx"
					global::Array<object> _g1 = this.npart.nvoices;
					#line 19 "F:\\nx3\\src\\nx3\\VPart.hx"
					while (( _g < _g1.length )){
						#line 19 "F:\\nx3\\src\\nx3\\VPart.hx"
						global::nx3.NVoice nvoice = ((global::nx3.NVoice) (_g1[_g]) );
						#line 19 "F:\\nx3\\src\\nx3\\VPart.hx"
						 ++ _g;
						#line 19 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.vvoices.push(new global::nx3.VVoice(((global::nx3.NVoice) (nvoice) )));
					}
					
				}
				
				#line 20 "F:\\nx3\\src\\nx3\\VPart.hx"
				return this.vvoices;
			}
			#line default
		}
		
		
		public  global::Array<object> vcomplexes;
		
		public  global::haxe.ds.ObjectMap<object, int> vcomplexesPositions;
		
		public  global::haxe.ds.IntMap<object> positionsVComplexes;
		
		public  global::nx3.VPartComplexesGenerator generator;
		
		public virtual   global::Array<object> getVComplexes(){
			unchecked {
				#line 30 "F:\\nx3\\src\\nx3\\VPart.hx"
				if (( this.vcomplexes != default(global::Array<object>) )) {
					#line 30 "F:\\nx3\\src\\nx3\\VPart.hx"
					return this.vcomplexes;
				}
				
				#line 31 "F:\\nx3\\src\\nx3\\VPart.hx"
				this.generator = new global::nx3.VPartComplexesGenerator(((global::Array<object>) (this.getVVoices()) ));
				this.vcomplexes = this.generator.getComplexes();
				this.vcomplexesPositions = this.generator.getComplexesPositions();
				this.positionsVComplexes = this.generator.getPositionsComplexes();
				return this.vcomplexes;
			}
			#line default
		}
		
		
		public  global::haxe.ds.ObjectMap<object, object> vnotesVComplexes;
		
		public virtual   global::haxe.ds.ObjectMap<object, object> getVNotesVComplexes(){
			unchecked {
				#line 41 "F:\\nx3\\src\\nx3\\VPart.hx"
				if (( this.vnotesVComplexes != default(global::haxe.ds.ObjectMap<object, object>) )) {
					#line 41 "F:\\nx3\\src\\nx3\\VPart.hx"
					return this.vnotesVComplexes;
				}
				
				#line 42 "F:\\nx3\\src\\nx3\\VPart.hx"
				if (( this.vcomplexes == default(global::Array<object>) )) {
					#line 42 "F:\\nx3\\src\\nx3\\VPart.hx"
					this.getVComplexes();
				}
				
				#line 43 "F:\\nx3\\src\\nx3\\VPart.hx"
				this.vnotesVComplexes = new global::haxe.ds.ObjectMap<object, object>();
				{
					#line 44 "F:\\nx3\\src\\nx3\\VPart.hx"
					int _g = 0;
					#line 44 "F:\\nx3\\src\\nx3\\VPart.hx"
					global::Array<object> _g1 = this.vcomplexes;
					#line 44 "F:\\nx3\\src\\nx3\\VPart.hx"
					while (( _g < _g1.length )){
						#line 44 "F:\\nx3\\src\\nx3\\VPart.hx"
						global::nx3.VComplex vcomplex = ((global::nx3.VComplex) (_g1[_g]) );
						#line 44 "F:\\nx3\\src\\nx3\\VPart.hx"
						 ++ _g;
						#line 46 "F:\\nx3\\src\\nx3\\VPart.hx"
						{
							#line 46 "F:\\nx3\\src\\nx3\\VPart.hx"
							int _g2 = 0;
							#line 46 "F:\\nx3\\src\\nx3\\VPart.hx"
							global::Array<object> _g3 = vcomplex.getVNotes();
							#line 46 "F:\\nx3\\src\\nx3\\VPart.hx"
							while (( _g2 < _g3.length )){
								#line 46 "F:\\nx3\\src\\nx3\\VPart.hx"
								global::nx3.VNote vnote = ((global::nx3.VNote) (_g3[_g2]) );
								#line 46 "F:\\nx3\\src\\nx3\\VPart.hx"
								 ++ _g2;
								#line 48 "F:\\nx3\\src\\nx3\\VPart.hx"
								this.vnotesVComplexes.@set(vnote, vcomplex);
							}
							
						}
						
					}
					
				}
				
				#line 51 "F:\\nx3\\src\\nx3\\VPart.hx"
				return this.vnotesVComplexes;
			}
			#line default
		}
		
		
		public virtual   global::haxe.ds.IntMap<object> getPositionsVComplexes(){
			unchecked {
				#line 56 "F:\\nx3\\src\\nx3\\VPart.hx"
				if (( this.vcomplexes == default(global::Array<object>) )) {
					#line 56 "F:\\nx3\\src\\nx3\\VPart.hx"
					this.getVComplexes();
				}
				
				#line 57 "F:\\nx3\\src\\nx3\\VPart.hx"
				return this.positionsVComplexes;
			}
			#line default
		}
		
		
		public virtual   global::haxe.ds.ObjectMap<object, int> getVComplexesPositions(){
			unchecked {
				#line 62 "F:\\nx3\\src\\nx3\\VPart.hx"
				if (( this.vcomplexes == default(global::Array<object>) )) {
					#line 62 "F:\\nx3\\src\\nx3\\VPart.hx"
					this.getVComplexes();
				}
				
				#line 63 "F:\\nx3\\src\\nx3\\VPart.hx"
				return this.vcomplexesPositions;
			}
			#line default
		}
		
		
		public  global::haxe.ds.ObjectMap<object, double> vcomplexesMinDistances;
		
		public virtual   global::haxe.ds.ObjectMap<object, double> getVComplexesMinDistances(){
			unchecked {
				#line 69 "F:\\nx3\\src\\nx3\\VPart.hx"
				if (( this.vcomplexesMinDistances != default(global::haxe.ds.ObjectMap<object, double>) )) {
					#line 69 "F:\\nx3\\src\\nx3\\VPart.hx"
					return this.vcomplexesMinDistances;
				}
				
				#line 70 "F:\\nx3\\src\\nx3\\VPart.hx"
				this.vcomplexesMinDistances = new global::haxe.ds.ObjectMap<object, double>();
				#line 72 "F:\\nx3\\src\\nx3\\VPart.hx"
				global::Array<object> complexes = this.getVComplexes();
				#line 75 "F:\\nx3\\src\\nx3\\VPart.hx"
				this.getBeamgroupsDirections();
				#line 77 "F:\\nx3\\src\\nx3\\VPart.hx"
				int i = 0;
				{
					#line 78 "F:\\nx3\\src\\nx3\\VPart.hx"
					int _g1 = 0;
					#line 78 "F:\\nx3\\src\\nx3\\VPart.hx"
					int _g = complexes.length;
					#line 78 "F:\\nx3\\src\\nx3\\VPart.hx"
					while (( _g1 < _g )){
						#line 78 "F:\\nx3\\src\\nx3\\VPart.hx"
						int i1 = _g1++;
						#line 80 "F:\\nx3\\src\\nx3\\VPart.hx"
						global::nx3.VComplex leftComplex = ((global::nx3.VComplex) (complexes[i1]) );
						global::nx3.VComplex rightComplex = default(global::nx3.VComplex);
						#line 81 "F:\\nx3\\src\\nx3\\VPart.hx"
						if (( i1 < complexes.length )) {
							#line 81 "F:\\nx3\\src\\nx3\\VPart.hx"
							rightComplex = ((global::nx3.VComplex) (complexes[( i1 + 1 )]) );
						}
						 else {
							#line 81 "F:\\nx3\\src\\nx3\\VPart.hx"
							rightComplex = default(global::nx3.VComplex);
						}
						
						#line 83 "F:\\nx3\\src\\nx3\\VPart.hx"
						double distance = new global::nx3.VPartComplexesMinDistancesCalculator(((global::nx3.VPart) (this) )).getDistance(leftComplex, rightComplex);
						this.vcomplexesMinDistances.@set(leftComplex, distance);
					}
					
				}
				
				#line 86 "F:\\nx3\\src\\nx3\\VPart.hx"
				return this.vcomplexesMinDistances;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<int> @value;
		
		public virtual   int getValue(){
			unchecked {
				#line 92 "F:\\nx3\\src\\nx3\\VPart.hx"
				if (this.@value.hasValue) {
					#line 92 "F:\\nx3\\src\\nx3\\VPart.hx"
					return this.@value.@value;
				}
				
				#line 93 "F:\\nx3\\src\\nx3\\VPart.hx"
				if (( this.getVVoices().length == 1 )) {
					#line 95 "F:\\nx3\\src\\nx3\\VPart.hx"
					this.@value = new global::haxe.lang.Null<int>(((global::nx3.VVoice) (this.vvoices[0]) ).getValue(), true);
				}
				
				#line 97 "F:\\nx3\\src\\nx3\\VPart.hx"
				double @value = .0;
				{
					#line 98 "F:\\nx3\\src\\nx3\\VPart.hx"
					int _g = 0;
					#line 98 "F:\\nx3\\src\\nx3\\VPart.hx"
					global::Array<object> _g1 = this.vvoices;
					#line 98 "F:\\nx3\\src\\nx3\\VPart.hx"
					while (( _g < _g1.length )){
						#line 98 "F:\\nx3\\src\\nx3\\VPart.hx"
						global::nx3.VVoice vvoice = ((global::nx3.VVoice) (_g1[_g]) );
						#line 98 "F:\\nx3\\src\\nx3\\VPart.hx"
						 ++ _g;
						#line 100 "F:\\nx3\\src\\nx3\\VPart.hx"
						{
							#line 100 "F:\\nx3\\src\\nx3\\VPart.hx"
							double b = ((double) (vvoice.getValue()) );
							#line 100 "F:\\nx3\\src\\nx3\\VPart.hx"
							@value = global::System.Math.Max(((double) (@value) ), ((double) (b) ));
						}
						
					}
					
				}
				
				#line 102 "F:\\nx3\\src\\nx3\\VPart.hx"
				this.@value = new global::haxe.lang.Null<int>(((int) (@value) ), true);
				return this.@value.@value;
			}
			#line default
		}
		
		
		public  global::Array<object> voicesbeamgroups;
		
		public virtual   global::Array<object> getVoicesBeamgroups(){
			unchecked {
				#line 109 "F:\\nx3\\src\\nx3\\VPart.hx"
				if (( this.voicesbeamgroups != default(global::Array<object>) )) {
					#line 109 "F:\\nx3\\src\\nx3\\VPart.hx"
					return this.voicesbeamgroups;
				}
				
				#line 110 "F:\\nx3\\src\\nx3\\VPart.hx"
				this.voicesbeamgroups = new global::Array<object>();
				{
					#line 111 "F:\\nx3\\src\\nx3\\VPart.hx"
					int _g = 0;
					#line 111 "F:\\nx3\\src\\nx3\\VPart.hx"
					global::Array<object> _g1 = this.getVVoices();
					#line 111 "F:\\nx3\\src\\nx3\\VPart.hx"
					while (( _g < _g1.length )){
						#line 111 "F:\\nx3\\src\\nx3\\VPart.hx"
						global::nx3.VVoice vvoice = ((global::nx3.VVoice) (_g1[_g]) );
						#line 111 "F:\\nx3\\src\\nx3\\VPart.hx"
						 ++ _g;
						#line 113 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.voicesbeamgroups.push(vvoice.getBeamgroups(default(global::Array<global::nx3.ENoteVal>)));
					}
					
				}
				
				#line 116 "F:\\nx3\\src\\nx3\\VPart.hx"
				this.calculateBeamgropusDirections(default(global::haxe.lang.Null<bool>));
				#line 118 "F:\\nx3\\src\\nx3\\VPart.hx"
				return this.voicesbeamgroups;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getVoiceBeamgroups(global::nx3.VVoice vvoice){
			unchecked {
				#line 123 "F:\\nx3\\src\\nx3\\VPart.hx"
				if (( this.voicesbeamgroups == default(global::Array<object>) )) {
					#line 123 "F:\\nx3\\src\\nx3\\VPart.hx"
					this.getVoicesBeamgroups();
				}
				
				#line 124 "F:\\nx3\\src\\nx3\\VPart.hx"
				int voiceIdx = this.getVVoices().indexOf(vvoice, default(global::haxe.lang.Null<int>));
				return ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.voicesbeamgroups[voiceIdx]) ))) );
			}
			#line default
		}
		
		
		public  global::haxe.ds.ObjectMap<object, global::nx3.EDirectionUD> beamgroupsDirections;
		
		public virtual   global::haxe.ds.ObjectMap<object, global::nx3.EDirectionUD> getBeamgroupsDirections(){
			unchecked {
				#line 132 "F:\\nx3\\src\\nx3\\VPart.hx"
				if (( this.beamgroupsDirections != default(global::haxe.ds.ObjectMap<object, global::nx3.EDirectionUD>) )) {
					#line 132 "F:\\nx3\\src\\nx3\\VPart.hx"
					return this.beamgroupsDirections;
				}
				
				#line 133 "F:\\nx3\\src\\nx3\\VPart.hx"
				if (( this.voicesbeamgroups == default(global::Array<object>) )) {
					#line 133 "F:\\nx3\\src\\nx3\\VPart.hx"
					this.getVoicesBeamgroups();
				}
				
				#line 135 "F:\\nx3\\src\\nx3\\VPart.hx"
				global::nx3.VPartbeamgroupsDirectionCalculator calculator = new global::nx3.VPartbeamgroupsDirectionCalculator(((global::nx3.VPart) (this) ));
				this.beamgroupsDirections = calculator.getBeamgroupsDirections();
				return this.beamgroupsDirections;
			}
			#line default
		}
		
		
		public  bool caluclateBeamgropuDirectionsFlag;
		
		public virtual   void calculateBeamgropusDirections(global::haxe.lang.Null<bool> force){
			unchecked {
				#line 142 "F:\\nx3\\src\\nx3\\VPart.hx"
				bool __temp_force185 = ( ( ! (force.hasValue) ) ? (global::haxe.lang.Runtime.toBool(false)) : (force.@value) );
				if (( ( this.caluclateBeamgropuDirectionsFlag == true ) && ( __temp_force185 == false ) )) {
					#line 143 "F:\\nx3\\src\\nx3\\VPart.hx"
					return ;
				}
				
				#line 144 "F:\\nx3\\src\\nx3\\VPart.hx"
				global::nx3.VPartbeamgroupsDirectionCalculator calculator = new global::nx3.VPartbeamgroupsDirectionCalculator(((global::nx3.VPart) (this) ));
				calculator.calculateBeamgroupsDirections();
				this.caluclateBeamgropuDirectionsFlag = true;
			}
			#line default
		}
		
		
		public  global::haxe.ds.ObjectMap<object, object> vnotesVVoices;
		
		public virtual   global::haxe.ds.ObjectMap<object, object> getVNotesVVoices(){
			unchecked {
				#line 154 "F:\\nx3\\src\\nx3\\VPart.hx"
				if (( this.vnotesVVoices != default(global::haxe.ds.ObjectMap<object, object>) )) {
					#line 154 "F:\\nx3\\src\\nx3\\VPart.hx"
					return this.vnotesVVoices;
				}
				
				#line 156 "F:\\nx3\\src\\nx3\\VPart.hx"
				this.vnotesVVoices = new global::haxe.ds.ObjectMap<object, object>();
				#line 158 "F:\\nx3\\src\\nx3\\VPart.hx"
				{
					#line 158 "F:\\nx3\\src\\nx3\\VPart.hx"
					int _g = 0;
					#line 158 "F:\\nx3\\src\\nx3\\VPart.hx"
					global::Array<object> _g1 = this.getVVoices();
					#line 158 "F:\\nx3\\src\\nx3\\VPart.hx"
					while (( _g < _g1.length )){
						#line 158 "F:\\nx3\\src\\nx3\\VPart.hx"
						global::nx3.VVoice vvoice = ((global::nx3.VVoice) (_g1[_g]) );
						#line 158 "F:\\nx3\\src\\nx3\\VPart.hx"
						 ++ _g;
						#line 160 "F:\\nx3\\src\\nx3\\VPart.hx"
						{
							#line 160 "F:\\nx3\\src\\nx3\\VPart.hx"
							int _g2 = 0;
							#line 160 "F:\\nx3\\src\\nx3\\VPart.hx"
							global::Array<object> _g3 = vvoice.getVNotes();
							#line 160 "F:\\nx3\\src\\nx3\\VPart.hx"
							while (( _g2 < _g3.length )){
								#line 160 "F:\\nx3\\src\\nx3\\VPart.hx"
								global::nx3.VNote vnote = ((global::nx3.VNote) (_g3[_g2]) );
								#line 160 "F:\\nx3\\src\\nx3\\VPart.hx"
								 ++ _g2;
								#line 162 "F:\\nx3\\src\\nx3\\VPart.hx"
								this.vnotesVVoices.@set(vnote, vvoice);
							}
							
						}
						
					}
					
				}
				
				#line 165 "F:\\nx3\\src\\nx3\\VPart.hx"
				return this.vnotesVVoices;
			}
			#line default
		}
		
		
		public  global::haxe.ds.ObjectMap<object, object> vcomplexDirections;
		
		public virtual   global::haxe.ds.ObjectMap<object, object> getVComplexDirections(){
			unchecked {
				#line 171 "F:\\nx3\\src\\nx3\\VPart.hx"
				if (( this.vcomplexDirections != default(global::haxe.ds.ObjectMap<object, object>) )) {
					#line 171 "F:\\nx3\\src\\nx3\\VPart.hx"
					return this.vcomplexDirections;
				}
				
				#line 172 "F:\\nx3\\src\\nx3\\VPart.hx"
				this.vcomplexDirections = new global::haxe.ds.ObjectMap<object, object>();
				#line 174 "F:\\nx3\\src\\nx3\\VPart.hx"
				global::haxe.ds.ObjectMap<object, global::nx3.EDirectionUD> beamgroupsDirections = this.getBeamgroupsDirections();
				{
					#line 175 "F:\\nx3\\src\\nx3\\VPart.hx"
					int _g = 0;
					#line 175 "F:\\nx3\\src\\nx3\\VPart.hx"
					global::Array<object> _g1 = this.getVComplexes();
					#line 175 "F:\\nx3\\src\\nx3\\VPart.hx"
					while (( _g < _g1.length )){
						#line 175 "F:\\nx3\\src\\nx3\\VPart.hx"
						global::nx3.VComplex vcomplex = ((global::nx3.VComplex) (_g1[_g]) );
						#line 175 "F:\\nx3\\src\\nx3\\VPart.hx"
						 ++ _g;
						#line 177 "F:\\nx3\\src\\nx3\\VPart.hx"
						global::Array<global::nx3.EDirectionUD> directions = new global::Array<global::nx3.EDirectionUD>();
						{
							#line 178 "F:\\nx3\\src\\nx3\\VPart.hx"
							int _g2 = 0;
							#line 178 "F:\\nx3\\src\\nx3\\VPart.hx"
							global::Array<object> _g3 = vcomplex.getVNotes();
							#line 178 "F:\\nx3\\src\\nx3\\VPart.hx"
							while (( _g2 < _g3.length )){
								#line 178 "F:\\nx3\\src\\nx3\\VPart.hx"
								global::nx3.VNote vnote = ((global::nx3.VNote) (_g3[_g2]) );
								#line 178 "F:\\nx3\\src\\nx3\\VPart.hx"
								 ++ _g2;
								#line 180 "F:\\nx3\\src\\nx3\\VPart.hx"
								global::nx3.VVoice vvoice = default(global::nx3.VVoice);
								#line 180 "F:\\nx3\\src\\nx3\\VPart.hx"
								{
									#line 180 "F:\\nx3\\src\\nx3\\VPart.hx"
									global::IMap<object, object> this1 = this.getVNotesVVoices();
									#line 180 "F:\\nx3\\src\\nx3\\VPart.hx"
									vvoice = ((global::nx3.VVoice) (this1.@get(vnote).@value) );
								}
								
								#line 181 "F:\\nx3\\src\\nx3\\VPart.hx"
								global::nx3.VBeamgroup beamgroup = default(global::nx3.VBeamgroup);
								#line 181 "F:\\nx3\\src\\nx3\\VPart.hx"
								{
									#line 181 "F:\\nx3\\src\\nx3\\VPart.hx"
									global::IMap<object, object> this2 = vvoice.getNotesBeamgroups(default(global::Array<global::nx3.ENoteVal>));
									#line 181 "F:\\nx3\\src\\nx3\\VPart.hx"
									beamgroup = ((global::nx3.VBeamgroup) (this2.@get(vnote).@value) );
								}
								
								#line 182 "F:\\nx3\\src\\nx3\\VPart.hx"
								global::haxe.lang.Null<global::nx3.EDirectionUD> direction = beamgroupsDirections.@get(beamgroup);
								directions.push(direction.@value);
							}
							
						}
						
						#line 185 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.vcomplexDirections.@set(vcomplex, directions);
					}
					
				}
				
				#line 187 "F:\\nx3\\src\\nx3\\VPart.hx"
				return this.vcomplexDirections;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				switch (hash){
					case 2079831662:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.vcomplexDirections = ((global::haxe.ds.ObjectMap<object, object>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, object>(((global::haxe.ds.ObjectMap) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return @value;
					}
					
					
					case 1579525836:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.vnotesVVoices = ((global::haxe.ds.ObjectMap<object, object>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, object>(((global::haxe.ds.ObjectMap) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return @value;
					}
					
					
					case 2105259256:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.caluclateBeamgropuDirectionsFlag = global::haxe.lang.Runtime.toBool(@value);
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return @value;
					}
					
					
					case 2002574903:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.beamgroupsDirections = ((global::haxe.ds.ObjectMap<object, global::nx3.EDirectionUD>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, global::nx3.EDirectionUD>(((global::haxe.ds.ObjectMap) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return @value;
					}
					
					
					case 1659806916:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.voicesbeamgroups = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return @value;
					}
					
					
					case 834174833:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.@value = global::haxe.lang.Null<object>.ofDynamic<int>(@value);
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return @value;
					}
					
					
					case 167639860:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.vcomplexesMinDistances = ((global::haxe.ds.ObjectMap<object, double>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, double>(((global::haxe.ds.ObjectMap) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return @value;
					}
					
					
					case 926210867:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.vnotesVComplexes = ((global::haxe.ds.ObjectMap<object, object>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, object>(((global::haxe.ds.ObjectMap) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return @value;
					}
					
					
					case 342947923:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.generator = ((global::nx3.VPartComplexesGenerator) (@value) );
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return @value;
					}
					
					
					case 2099624850:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.positionsVComplexes = ((global::haxe.ds.IntMap<object>) (global::haxe.ds.IntMap<object>.__hx_cast<object>(((global::haxe.ds.IntMap) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return @value;
					}
					
					
					case 1495350050:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.vcomplexesPositions = ((global::haxe.ds.ObjectMap<object, int>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, int>(((global::haxe.ds.ObjectMap) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return @value;
					}
					
					
					case 1905191784:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.vcomplexes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return @value;
					}
					
					
					case 137270135:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.vvoices = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return @value;
					}
					
					
					case 543535969:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.npart = ((global::nx3.NPart) (@value) );
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return @value;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				switch (hash){
					case 2090334340:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVComplexDirections") ), ((int) (2090334340) ))) );
					}
					
					
					case 2079831662:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.vcomplexDirections;
					}
					
					
					case 274242678:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVNotesVVoices") ), ((int) (274242678) ))) );
					}
					
					
					case 1579525836:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.vnotesVVoices;
					}
					
					
					case 438363987:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calculateBeamgropusDirections") ), ((int) (438363987) ))) );
					}
					
					
					case 2105259256:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.caluclateBeamgropuDirectionsFlag;
					}
					
					
					case 868538861:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBeamgroupsDirections") ), ((int) (868538861) ))) );
					}
					
					
					case 2002574903:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.beamgroupsDirections;
					}
					
					
					case 1912463199:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVoiceBeamgroups") ), ((int) (1912463199) ))) );
					}
					
					
					case 331747738:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVoicesBeamgroups") ), ((int) (331747738) ))) );
					}
					
					
					case 1659806916:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.voicesbeamgroups;
					}
					
					
					case 294620923:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getValue") ), ((int) (294620923) ))) );
					}
					
					
					case 834174833:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return (this.@value).toDynamic();
					}
					
					
					case 2008547402:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVComplexesMinDistances") ), ((int) (2008547402) ))) );
					}
					
					
					case 167639860:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.vcomplexesMinDistances;
					}
					
					
					case 1689963596:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVComplexesPositions") ), ((int) (1689963596) ))) );
					}
					
					
					case 1430071452:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getPositionsVComplexes") ), ((int) (1430071452) ))) );
					}
					
					
					case 1374112713:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVNotesVComplexes") ), ((int) (1374112713) ))) );
					}
					
					
					case 926210867:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.vnotesVComplexes;
					}
					
					
					case 1876174718:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVComplexes") ), ((int) (1876174718) ))) );
					}
					
					
					case 342947923:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.generator;
					}
					
					
					case 2099624850:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.positionsVComplexes;
					}
					
					
					case 1495350050:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.vcomplexesPositions;
					}
					
					
					case 1905191784:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.vcomplexes;
					}
					
					
					case 203722145:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVVoices") ), ((int) (203722145) ))) );
					}
					
					
					case 137270135:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.vvoices;
					}
					
					
					case 543535969:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.npart;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				switch (hash){
					case 2090334340:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.getVComplexDirections();
					}
					
					
					case 274242678:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.getVNotesVVoices();
					}
					
					
					case 438363987:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						this.calculateBeamgropusDirections(global::haxe.lang.Null<object>.ofDynamic<bool>(dynargs[0]));
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						break;
					}
					
					
					case 868538861:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.getBeamgroupsDirections();
					}
					
					
					case 1912463199:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.getVoiceBeamgroups(((global::nx3.VVoice) (dynargs[0]) ));
					}
					
					
					case 331747738:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.getVoicesBeamgroups();
					}
					
					
					case 294620923:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.getValue();
					}
					
					
					case 2008547402:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.getVComplexesMinDistances();
					}
					
					
					case 1689963596:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.getVComplexesPositions();
					}
					
					
					case 1430071452:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.getPositionsVComplexes();
					}
					
					
					case 1374112713:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.getVNotesVComplexes();
					}
					
					
					case 1876174718:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.getVComplexes();
					}
					
					
					case 203722145:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return this.getVVoices();
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				baseArr.push("vcomplexDirections");
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				baseArr.push("vnotesVVoices");
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				baseArr.push("caluclateBeamgropuDirectionsFlag");
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				baseArr.push("beamgroupsDirections");
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				baseArr.push("voicesbeamgroups");
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				baseArr.push("value");
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				baseArr.push("vcomplexesMinDistances");
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				baseArr.push("vnotesVComplexes");
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				baseArr.push("generator");
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				baseArr.push("positionsVComplexes");
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				baseArr.push("vcomplexesPositions");
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				baseArr.push("vcomplexes");
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				baseArr.push("vvoices");
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				baseArr.push("npart");
				#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
				{
					#line 9 "F:\\nx3\\src\\nx3\\VPart.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


