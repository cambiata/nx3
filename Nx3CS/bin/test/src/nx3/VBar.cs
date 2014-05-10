
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VBar : global::haxe.lang.HxObject {
		public    VBar(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VBar(global::nx3.NBar nbar){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\VBar.hx"
				global::nx3.VBar.__hx_ctor_nx3_VBar(this, nbar);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VBar(global::nx3.VBar __temp_me162, global::nx3.NBar nbar){
			unchecked {
				#line 31 "F:\\nx3\\src\\nx3\\VBar.hx"
				__temp_me162._keys = default(global::Array<global::nx3.EKey>);
				#line 22 "F:\\nx3\\src\\nx3\\VBar.hx"
				__temp_me162._clefs = default(global::Array<global::nx3.EClef>);
				#line 16 "F:\\nx3\\src\\nx3\\VBar.hx"
				__temp_me162.nbar = nbar;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				return new global::nx3.VBar(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				return new global::nx3.VBar(((global::nx3.NBar) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.NBar nbar;
		
		public  global::Array<global::nx3.EClef> clefs;
		
		public  global::Array<global::nx3.EKey> keys;
		
		public  global::nx3.ETime time;
		
		public  global::Array<global::nx3.EClef> _clefs;
		
		public virtual   global::Array<global::nx3.EClef> get_clefs(){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\VBar.hx"
				if (( this._clefs != default(global::Array<global::nx3.EClef>) )) {
					#line 25 "F:\\nx3\\src\\nx3\\VBar.hx"
					return this._clefs;
				}
				
				#line 26 "F:\\nx3\\src\\nx3\\VBar.hx"
				this._clefs = new global::Array<global::nx3.EClef>();
				{
					#line 27 "F:\\nx3\\src\\nx3\\VBar.hx"
					int _g = 0;
					#line 27 "F:\\nx3\\src\\nx3\\VBar.hx"
					global::Array<object> _g1 = this.getVParts();
					#line 27 "F:\\nx3\\src\\nx3\\VBar.hx"
					while (( _g < _g1.length )){
						#line 27 "F:\\nx3\\src\\nx3\\VBar.hx"
						global::nx3.VPart vpart = ((global::nx3.VPart) (_g1[_g]) );
						#line 27 "F:\\nx3\\src\\nx3\\VBar.hx"
						 ++ _g;
						#line 27 "F:\\nx3\\src\\nx3\\VBar.hx"
						this._clefs.push(vpart.npart.clef);
					}
					
				}
				
				#line 28 "F:\\nx3\\src\\nx3\\VBar.hx"
				return this._clefs;
			}
			#line default
		}
		
		
		public  global::Array<global::nx3.EKey> _keys;
		
		public virtual   global::Array<global::nx3.EKey> get_keys(){
			unchecked {
				#line 34 "F:\\nx3\\src\\nx3\\VBar.hx"
				if (( this._keys != default(global::Array<global::nx3.EKey>) )) {
					#line 34 "F:\\nx3\\src\\nx3\\VBar.hx"
					return this._keys;
				}
				
				#line 35 "F:\\nx3\\src\\nx3\\VBar.hx"
				this._keys = new global::Array<global::nx3.EKey>();
				{
					#line 36 "F:\\nx3\\src\\nx3\\VBar.hx"
					int _g = 0;
					#line 36 "F:\\nx3\\src\\nx3\\VBar.hx"
					global::Array<object> _g1 = this.getVParts();
					#line 36 "F:\\nx3\\src\\nx3\\VBar.hx"
					while (( _g < _g1.length )){
						#line 36 "F:\\nx3\\src\\nx3\\VBar.hx"
						global::nx3.VPart vpart = ((global::nx3.VPart) (_g1[_g]) );
						#line 36 "F:\\nx3\\src\\nx3\\VBar.hx"
						 ++ _g;
						#line 36 "F:\\nx3\\src\\nx3\\VBar.hx"
						this._keys.push(vpart.npart.key);
					}
					
				}
				
				#line 37 "F:\\nx3\\src\\nx3\\VBar.hx"
				return this._keys;
			}
			#line default
		}
		
		
		public virtual   global::nx3.ETime get_time(){
			unchecked {
				#line 42 "F:\\nx3\\src\\nx3\\VBar.hx"
				return this.nbar.time;
			}
			#line default
		}
		
		
		public  global::nx3.EDisplayALN displayClefs;
		
		public  global::nx3.EDisplayALN displayKeys;
		
		public  global::nx3.EDisplayALN displayTime;
		
		public virtual   global::nx3.EDisplayALN get_displayClefs(){
			unchecked {
				#line 51 "F:\\nx3\\src\\nx3\\VBar.hx"
				global::nx3.EDisplayALN result = global::nx3.EDisplayALN.Never;
				{
					#line 52 "F:\\nx3\\src\\nx3\\VBar.hx"
					int _g = 0;
					#line 52 "F:\\nx3\\src\\nx3\\VBar.hx"
					global::Array<object> _g1 = this.getVParts();
					#line 52 "F:\\nx3\\src\\nx3\\VBar.hx"
					while (( _g < _g1.length )){
						#line 52 "F:\\nx3\\src\\nx3\\VBar.hx"
						global::nx3.VPart vpart = ((global::nx3.VPart) (_g1[_g]) );
						#line 52 "F:\\nx3\\src\\nx3\\VBar.hx"
						 ++ _g;
						#line 54 "F:\\nx3\\src\\nx3\\VBar.hx"
						if (( vpart.npart.clefDisplay == default(global::nx3.EDisplayALN) )) {
							#line 54 "F:\\nx3\\src\\nx3\\VBar.hx"
							result = global::nx3.EDisplayALN.Layout;
						}
						
						#line 55 "F:\\nx3\\src\\nx3\\VBar.hx"
						if (( vpart.npart.clefDisplay == global::nx3.EDisplayALN.Layout )) {
							#line 55 "F:\\nx3\\src\\nx3\\VBar.hx"
							result = global::nx3.EDisplayALN.Layout;
						}
						
						#line 56 "F:\\nx3\\src\\nx3\\VBar.hx"
						if (( vpart.npart.clefDisplay == global::nx3.EDisplayALN.Always )) {
							#line 58 "F:\\nx3\\src\\nx3\\VBar.hx"
							result = global::nx3.EDisplayALN.Always;
							break;
						}
						
					}
					
				}
				
				#line 62 "F:\\nx3\\src\\nx3\\VBar.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   global::nx3.EDisplayALN get_displayKeys(){
			unchecked {
				#line 67 "F:\\nx3\\src\\nx3\\VBar.hx"
				global::nx3.EDisplayALN result = global::nx3.EDisplayALN.Never;
				{
					#line 68 "F:\\nx3\\src\\nx3\\VBar.hx"
					int _g = 0;
					#line 68 "F:\\nx3\\src\\nx3\\VBar.hx"
					global::Array<object> _g1 = this.getVParts();
					#line 68 "F:\\nx3\\src\\nx3\\VBar.hx"
					while (( _g < _g1.length )){
						#line 68 "F:\\nx3\\src\\nx3\\VBar.hx"
						global::nx3.VPart vpart = ((global::nx3.VPart) (_g1[_g]) );
						#line 68 "F:\\nx3\\src\\nx3\\VBar.hx"
						 ++ _g;
						#line 70 "F:\\nx3\\src\\nx3\\VBar.hx"
						if (( vpart.npart.keyDisplay == default(global::nx3.EDisplayALN) )) {
							#line 70 "F:\\nx3\\src\\nx3\\VBar.hx"
							result = global::nx3.EDisplayALN.Layout;
						}
						
						#line 71 "F:\\nx3\\src\\nx3\\VBar.hx"
						if (( vpart.npart.keyDisplay == global::nx3.EDisplayALN.Layout )) {
							#line 71 "F:\\nx3\\src\\nx3\\VBar.hx"
							result = global::nx3.EDisplayALN.Layout;
						}
						
						#line 72 "F:\\nx3\\src\\nx3\\VBar.hx"
						if (( vpart.npart.keyDisplay == global::nx3.EDisplayALN.Always )) {
							#line 74 "F:\\nx3\\src\\nx3\\VBar.hx"
							result = global::nx3.EDisplayALN.Always;
							break;
						}
						
					}
					
				}
				
				#line 79 "F:\\nx3\\src\\nx3\\VBar.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   global::nx3.EDisplayALN get_displayTime(){
			unchecked {
				#line 84 "F:\\nx3\\src\\nx3\\VBar.hx"
				global::nx3.EDisplayALN result = default(global::nx3.EDisplayALN);
				#line 84 "F:\\nx3\\src\\nx3\\VBar.hx"
				if (( this.nbar.timeDisplay != default(global::nx3.EDisplayALN) )) {
					#line 84 "F:\\nx3\\src\\nx3\\VBar.hx"
					result = this.nbar.timeDisplay;
				}
				 else {
					#line 84 "F:\\nx3\\src\\nx3\\VBar.hx"
					result = global::nx3.EDisplayALN.Layout;
				}
				
				#line 85 "F:\\nx3\\src\\nx3\\VBar.hx"
				return this.nbar.timeDisplay;
			}
			#line default
		}
		
		
		public  global::Array<object> vparts;
		
		public virtual   global::Array<object> getVParts(){
			unchecked {
				#line 95 "F:\\nx3\\src\\nx3\\VBar.hx"
				if (( this.vparts != default(global::Array<object>) )) {
					#line 95 "F:\\nx3\\src\\nx3\\VBar.hx"
					return this.vparts;
				}
				
				#line 96 "F:\\nx3\\src\\nx3\\VBar.hx"
				this.vparts = new global::Array<object>(new object[]{});
				{
					#line 97 "F:\\nx3\\src\\nx3\\VBar.hx"
					int _g = 0;
					#line 97 "F:\\nx3\\src\\nx3\\VBar.hx"
					global::Array<object> _g1 = this.nbar.nparts;
					#line 97 "F:\\nx3\\src\\nx3\\VBar.hx"
					while (( _g < _g1.length )){
						#line 97 "F:\\nx3\\src\\nx3\\VBar.hx"
						global::nx3.NPart npart = ((global::nx3.NPart) (_g1[_g]) );
						#line 97 "F:\\nx3\\src\\nx3\\VBar.hx"
						 ++ _g;
						#line 97 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.vparts.push(new global::nx3.VPart(((global::nx3.NPart) (npart) )));
					}
					
				}
				
				#line 98 "F:\\nx3\\src\\nx3\\VBar.hx"
				return this.vparts;
			}
			#line default
		}
		
		
		public  global::Array<object> vcolumns;
		
		public virtual   global::Array<object> getVColumns(){
			unchecked {
				#line 104 "F:\\nx3\\src\\nx3\\VBar.hx"
				if (( this.vcolumns != default(global::Array<object>) )) {
					#line 104 "F:\\nx3\\src\\nx3\\VBar.hx"
					return this.vcolumns;
				}
				
				#line 105 "F:\\nx3\\src\\nx3\\VBar.hx"
				if (( this.vparts == default(global::Array<object>) )) {
					#line 105 "F:\\nx3\\src\\nx3\\VBar.hx"
					this.getVParts();
				}
				
				#line 106 "F:\\nx3\\src\\nx3\\VBar.hx"
				global::nx3.VBarColumnsGenerator generator = new global::nx3.VBarColumnsGenerator(((global::Array<object>) (this.vparts) ));
				this.vcolumns = generator.getColumns();
				this.positionsVColumns = generator.getPositionsColumns();
				return this.vcolumns;
			}
			#line default
		}
		
		
		public  global::haxe.ds.IntMap<object> positionsVColumns;
		
		public virtual   global::haxe.ds.IntMap<object> getPositionsColumns(){
			unchecked {
				#line 115 "F:\\nx3\\src\\nx3\\VBar.hx"
				if (( this.positionsVColumns == default(global::haxe.ds.IntMap<object>) )) {
					#line 115 "F:\\nx3\\src\\nx3\\VBar.hx"
					this.getVColumns();
				}
				
				#line 116 "F:\\nx3\\src\\nx3\\VBar.hx"
				return this.positionsVColumns;
			}
			#line default
		}
		
		
		public  global::haxe.ds.ObjectMap<object, int> vcolumnsPositions;
		
		public virtual   global::haxe.ds.ObjectMap<object, int> getVColumnsPositions(){
			unchecked {
				#line 122 "F:\\nx3\\src\\nx3\\VBar.hx"
				if (( this.positionsVColumns == default(global::haxe.ds.IntMap<object>) )) {
					#line 122 "F:\\nx3\\src\\nx3\\VBar.hx"
					this.getVColumns();
				}
				
				#line 124 "F:\\nx3\\src\\nx3\\VBar.hx"
				this.vcolumnsPositions = new global::haxe.ds.ObjectMap<object, int>();
				#line 126 "F:\\nx3\\src\\nx3\\VBar.hx"
				{
					#line 126 "F:\\nx3\\src\\nx3\\VBar.hx"
					object __temp_iterator237 = this.positionsVColumns.keys();
					#line 126 "F:\\nx3\\src\\nx3\\VBar.hx"
					while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator237, "hasNext", 407283053, default(global::Array)))){
						#line 126 "F:\\nx3\\src\\nx3\\VBar.hx"
						int pos = ((int) (global::haxe.lang.Runtime.toInt(global::haxe.lang.Runtime.callField(__temp_iterator237, "next", 1224901875, default(global::Array)))) );
						#line 128 "F:\\nx3\\src\\nx3\\VBar.hx"
						global::nx3.VColumn vcolumn = ((global::nx3.VColumn) (this.positionsVColumns.@get(pos).@value) );
						this.vcolumnsPositions.@set(vcolumn, pos);
					}
					
				}
				
				#line 132 "F:\\nx3\\src\\nx3\\VBar.hx"
				return this.vcolumnsPositions;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<int> @value;
		
		public virtual   int getValue(){
			unchecked {
				#line 139 "F:\\nx3\\src\\nx3\\VBar.hx"
				if (this.@value.hasValue) {
					#line 139 "F:\\nx3\\src\\nx3\\VBar.hx"
					return this.@value.@value;
				}
				
				#line 140 "F:\\nx3\\src\\nx3\\VBar.hx"
				double @value = .0;
				{
					#line 141 "F:\\nx3\\src\\nx3\\VBar.hx"
					int _g = 0;
					#line 141 "F:\\nx3\\src\\nx3\\VBar.hx"
					global::Array<object> _g1 = this.getVParts();
					#line 141 "F:\\nx3\\src\\nx3\\VBar.hx"
					while (( _g < _g1.length )){
						#line 141 "F:\\nx3\\src\\nx3\\VBar.hx"
						global::nx3.VPart vpart = ((global::nx3.VPart) (_g1[_g]) );
						#line 141 "F:\\nx3\\src\\nx3\\VBar.hx"
						 ++ _g;
						#line 143 "F:\\nx3\\src\\nx3\\VBar.hx"
						{
							#line 143 "F:\\nx3\\src\\nx3\\VBar.hx"
							double b = ((double) (vpart.getValue()) );
							#line 143 "F:\\nx3\\src\\nx3\\VBar.hx"
							@value = global::System.Math.Max(((double) (@value) ), ((double) (b) ));
						}
						
					}
					
				}
				
				#line 145 "F:\\nx3\\src\\nx3\\VBar.hx"
				this.@value = new global::haxe.lang.Null<int>(((int) (@value) ), true);
				return this.@value.@value;
			}
			#line default
		}
		
		
		public  global::haxe.ds.ObjectMap<object, object> vnotesVColumns;
		
		public virtual   global::haxe.ds.ObjectMap<object, object> getVNotesVColumns(){
			unchecked {
				#line 152 "F:\\nx3\\src\\nx3\\VBar.hx"
				if (( this.vnotesVColumns != default(global::haxe.ds.ObjectMap<object, object>) )) {
					#line 152 "F:\\nx3\\src\\nx3\\VBar.hx"
					return this.vnotesVColumns;
				}
				
				#line 153 "F:\\nx3\\src\\nx3\\VBar.hx"
				this.vnotesVColumns = new global::haxe.ds.ObjectMap<object, object>();
				{
					#line 154 "F:\\nx3\\src\\nx3\\VBar.hx"
					int _g = 0;
					#line 154 "F:\\nx3\\src\\nx3\\VBar.hx"
					global::Array<object> _g1 = this.getVParts();
					#line 154 "F:\\nx3\\src\\nx3\\VBar.hx"
					while (( _g < _g1.length )){
						#line 154 "F:\\nx3\\src\\nx3\\VBar.hx"
						global::nx3.VPart vpart = ((global::nx3.VPart) (_g1[_g]) );
						#line 154 "F:\\nx3\\src\\nx3\\VBar.hx"
						 ++ _g;
						#line 156 "F:\\nx3\\src\\nx3\\VBar.hx"
						{
							#line 156 "F:\\nx3\\src\\nx3\\VBar.hx"
							int _g2 = 0;
							#line 156 "F:\\nx3\\src\\nx3\\VBar.hx"
							global::Array<object> _g3 = vpart.getVVoices();
							#line 156 "F:\\nx3\\src\\nx3\\VBar.hx"
							while (( _g2 < _g3.length )){
								#line 156 "F:\\nx3\\src\\nx3\\VBar.hx"
								global::nx3.VVoice vvoice = ((global::nx3.VVoice) (_g3[_g2]) );
								#line 156 "F:\\nx3\\src\\nx3\\VBar.hx"
								 ++ _g2;
								#line 158 "F:\\nx3\\src\\nx3\\VBar.hx"
								{
									#line 158 "F:\\nx3\\src\\nx3\\VBar.hx"
									int _g4 = 0;
									#line 158 "F:\\nx3\\src\\nx3\\VBar.hx"
									global::Array<object> _g5 = vvoice.getVNotes();
									#line 158 "F:\\nx3\\src\\nx3\\VBar.hx"
									while (( _g4 < _g5.length )){
										#line 158 "F:\\nx3\\src\\nx3\\VBar.hx"
										global::nx3.VNote vnote = ((global::nx3.VNote) (_g5[_g4]) );
										#line 158 "F:\\nx3\\src\\nx3\\VBar.hx"
										 ++ _g4;
										#line 160 "F:\\nx3\\src\\nx3\\VBar.hx"
										global::haxe.lang.Null<int> pos = default(global::haxe.lang.Null<int>);
										#line 160 "F:\\nx3\\src\\nx3\\VBar.hx"
										{
											#line 160 "F:\\nx3\\src\\nx3\\VBar.hx"
											global::IMap<object, int> this1 = vvoice.getVNotePositions();
											#line 160 "F:\\nx3\\src\\nx3\\VBar.hx"
											pos = this1.@get(vnote);
										}
										
										#line 161 "F:\\nx3\\src\\nx3\\VBar.hx"
										global::nx3.VColumn vcolumn = ((global::nx3.VColumn) (this.getPositionsColumns().@get(pos.@value).@value) );
										this.vnotesVColumns.@set(vnote, vcolumn);
									}
									
								}
								
							}
							
						}
						
					}
					
				}
				
				#line 166 "F:\\nx3\\src\\nx3\\VBar.hx"
				return this.vnotesVColumns;
			}
			#line default
		}
		
		
		public  global::haxe.ds.ObjectMap<object, object> vcomplexesVColumns;
		
		public virtual   global::haxe.ds.ObjectMap<object, object> getVComplexesVColumns(){
			unchecked {
				#line 172 "F:\\nx3\\src\\nx3\\VBar.hx"
				if (( this.vcomplexesVColumns != default(global::haxe.ds.ObjectMap<object, object>) )) {
					#line 172 "F:\\nx3\\src\\nx3\\VBar.hx"
					return this.vcomplexesVColumns;
				}
				
				#line 173 "F:\\nx3\\src\\nx3\\VBar.hx"
				this.vcomplexesVColumns = new global::haxe.ds.ObjectMap<object, object>();
				{
					#line 174 "F:\\nx3\\src\\nx3\\VBar.hx"
					int _g = 0;
					#line 174 "F:\\nx3\\src\\nx3\\VBar.hx"
					global::Array<object> _g1 = this.getVParts();
					#line 174 "F:\\nx3\\src\\nx3\\VBar.hx"
					while (( _g < _g1.length )){
						#line 174 "F:\\nx3\\src\\nx3\\VBar.hx"
						global::nx3.VPart vpart = ((global::nx3.VPart) (_g1[_g]) );
						#line 174 "F:\\nx3\\src\\nx3\\VBar.hx"
						 ++ _g;
						#line 177 "F:\\nx3\\src\\nx3\\VBar.hx"
						{
							#line 177 "F:\\nx3\\src\\nx3\\VBar.hx"
							int _g2 = 0;
							#line 177 "F:\\nx3\\src\\nx3\\VBar.hx"
							global::Array<object> _g3 = vpart.getVComplexes();
							#line 177 "F:\\nx3\\src\\nx3\\VBar.hx"
							while (( _g2 < _g3.length )){
								#line 177 "F:\\nx3\\src\\nx3\\VBar.hx"
								global::nx3.VComplex vcomplex = ((global::nx3.VComplex) (_g3[_g2]) );
								#line 177 "F:\\nx3\\src\\nx3\\VBar.hx"
								 ++ _g2;
								#line 179 "F:\\nx3\\src\\nx3\\VBar.hx"
								global::haxe.lang.Null<int> pos = default(global::haxe.lang.Null<int>);
								#line 179 "F:\\nx3\\src\\nx3\\VBar.hx"
								{
									#line 179 "F:\\nx3\\src\\nx3\\VBar.hx"
									global::IMap<object, int> this1 = vpart.getVComplexesPositions();
									#line 179 "F:\\nx3\\src\\nx3\\VBar.hx"
									pos = this1.@get(vcomplex);
								}
								
								#line 180 "F:\\nx3\\src\\nx3\\VBar.hx"
								global::nx3.VColumn vcolumn = ((global::nx3.VColumn) (this.getPositionsColumns().@get(pos.@value).@value) );
								this.vcomplexesVColumns.@set(vcomplex, vcolumn);
							}
							
						}
						
					}
					
				}
				
				#line 184 "F:\\nx3\\src\\nx3\\VBar.hx"
				return this.vcomplexesVColumns;
			}
			#line default
		}
		
		
		public  global::haxe.ds.ObjectMap<object, double> vcolumnsMinDistances;
		
		public  global::haxe.ds.ObjectMap<object, double> vcolumnsMinPositions;
		
		public virtual   global::haxe.ds.ObjectMap<object, double> getVColumnsMinDistances(){
			unchecked {
				#line 195 "F:\\nx3\\src\\nx3\\VBar.hx"
				if (( this.vcolumnsMinDistances != default(global::haxe.ds.ObjectMap<object, double>) )) {
					#line 195 "F:\\nx3\\src\\nx3\\VBar.hx"
					return this.vcolumnsMinDistances;
				}
				
				#line 196 "F:\\nx3\\src\\nx3\\VBar.hx"
				object distancesData = new global::nx3.VBarColumnsMinDistancesGenerator(((global::nx3.VBar) (this) )).getDistancesData();
				#line 198 "F:\\nx3\\src\\nx3\\VBar.hx"
				this.vcolumnsMinDistances = ((global::haxe.ds.ObjectMap<object, double>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, double>(((global::haxe.ds.ObjectMap) (global::haxe.lang.Runtime.getField(distancesData, "distances", 241646494, true)) ))) );
				this.vcolumnsMinPositions = ((global::haxe.ds.ObjectMap<object, double>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, double>(((global::haxe.ds.ObjectMap) (global::haxe.lang.Runtime.getField(distancesData, "positions", 1347548074, true)) ))) );
				return this.vcolumnsMinDistances;
			}
			#line default
		}
		
		
		public virtual   global::haxe.ds.ObjectMap<object, double> getVColumnsMinPositions(){
			unchecked {
				#line 205 "F:\\nx3\\src\\nx3\\VBar.hx"
				if (( this.vcolumnsMinPositions != default(global::haxe.ds.ObjectMap<object, double>) )) {
					#line 205 "F:\\nx3\\src\\nx3\\VBar.hx"
					return this.vcolumnsMinPositions;
				}
				
				#line 206 "F:\\nx3\\src\\nx3\\VBar.hx"
				if (( this.vcolumnsMinDistances == default(global::haxe.ds.ObjectMap<object, double>) )) {
					#line 206 "F:\\nx3\\src\\nx3\\VBar.hx"
					this.getVColumnsMinDistances();
				}
				
				#line 207 "F:\\nx3\\src\\nx3\\VBar.hx"
				return this.vcolumnsMinPositions;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> vcolumnsMinWidth;
		
		public virtual   double getVColumnsMinWidth(){
			unchecked {
				#line 213 "F:\\nx3\\src\\nx3\\VBar.hx"
				if (this.vcolumnsMinWidth.hasValue) {
					#line 213 "F:\\nx3\\src\\nx3\\VBar.hx"
					return this.vcolumnsMinWidth.@value;
				}
				
				#line 214 "F:\\nx3\\src\\nx3\\VBar.hx"
				if (( this.vcolumnsMinDistances == default(global::haxe.ds.ObjectMap<object, double>) )) {
					#line 214 "F:\\nx3\\src\\nx3\\VBar.hx"
					this.getVColumnsMinDistances();
				}
				
				#line 215 "F:\\nx3\\src\\nx3\\VBar.hx"
				global::nx3.VColumn lastColumn = default(global::nx3.VColumn);
				#line 215 "F:\\nx3\\src\\nx3\\VBar.hx"
				{
					#line 215 "F:\\nx3\\src\\nx3\\VBar.hx"
					global::Array<object> array = this.getVColumns();
					#line 215 "F:\\nx3\\src\\nx3\\VBar.hx"
					lastColumn = ((global::nx3.VColumn) (array[( array.length - 1 )]) );
				}
				
				#line 216 "F:\\nx3\\src\\nx3\\VBar.hx"
				global::haxe.lang.Null<double> lastPosition = default(global::haxe.lang.Null<double>);
				#line 216 "F:\\nx3\\src\\nx3\\VBar.hx"
				{
					#line 216 "F:\\nx3\\src\\nx3\\VBar.hx"
					global::IMap<object, double> this1 = this.getVColumnsMinPositions();
					#line 216 "F:\\nx3\\src\\nx3\\VBar.hx"
					lastPosition = this1.@get(lastColumn);
				}
				
				#line 217 "F:\\nx3\\src\\nx3\\VBar.hx"
				global::haxe.lang.Null<double> lastDistance = default(global::haxe.lang.Null<double>);
				#line 217 "F:\\nx3\\src\\nx3\\VBar.hx"
				{
					#line 217 "F:\\nx3\\src\\nx3\\VBar.hx"
					global::IMap<object, double> this2 = this.getVColumnsMinDistances();
					#line 217 "F:\\nx3\\src\\nx3\\VBar.hx"
					lastDistance = this2.@get(lastColumn);
				}
				
				#line 218 "F:\\nx3\\src\\nx3\\VBar.hx"
				this.vcolumnsMinWidth = new global::haxe.lang.Null<double>(( lastPosition.@value + lastDistance.@value ), true);
				return this.vcolumnsMinWidth.@value;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				switch (hash){
					case 751576411:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.vcolumnsMinWidth = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 112079231:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.vcolumnsMinPositions = ((global::haxe.ds.ObjectMap<object, double>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, double>(((global::haxe.ds.ObjectMap) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 1153661299:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.vcolumnsMinDistances = ((global::haxe.ds.ObjectMap<object, double>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, double>(((global::haxe.ds.ObjectMap) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 1956757135:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.vcomplexesVColumns = ((global::haxe.ds.ObjectMap<object, object>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, object>(((global::haxe.ds.ObjectMap) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 852762162:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.vnotesVColumns = ((global::haxe.ds.ObjectMap<object, object>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, object>(((global::haxe.ds.ObjectMap) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 834174833:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.@value = global::haxe.lang.Null<object>.ofDynamic<int>(@value);
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 820113283:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.vcolumnsPositions = ((global::haxe.ds.ObjectMap<object, int>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, int>(((global::haxe.ds.ObjectMap) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 1005181137:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.positionsVColumns = ((global::haxe.ds.IntMap<object>) (global::haxe.ds.IntMap<object>.__hx_cast<object>(((global::haxe.ds.IntMap) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 1352288039:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.vcolumns = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 1802642666:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.vparts = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 888105839:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.displayTime = ((global::nx3.EDisplayALN) (@value) );
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 788103510:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.displayKeys = ((global::nx3.EDisplayALN) (@value) );
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 1421102151:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.displayClefs = ((global::nx3.EDisplayALN) (@value) );
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 2048392659:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this._keys = ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 1145224490:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this._clefs = ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 1291635725:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.time = ((global::nx3.ETime) (@value) );
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 1191633396:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.keys = ((global::Array<global::nx3.EKey>) (global::Array<object>.__hx_cast<global::nx3.EKey>(((global::Array) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 1213953513:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.clefs = ((global::Array<global::nx3.EClef>) (global::Array<object>.__hx_cast<global::nx3.EClef>(((global::Array) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					case 1224747557:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						this.nbar = ((global::nx3.NBar) (@value) );
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return @value;
					}
					
					
					default:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				switch (hash){
					case 1199478257:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVColumnsMinWidth") ), ((int) (1199478257) ))) );
					}
					
					
					case 751576411:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return (this.vcolumnsMinWidth).toDynamic();
					}
					
					
					case 561227029:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVColumnsMinPositions") ), ((int) (561227029) ))) );
					}
					
					
					case 1602809097:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVColumnsMinDistances") ), ((int) (1602809097) ))) );
					}
					
					
					case 112079231:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.vcolumnsMinPositions;
					}
					
					
					case 1153661299:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.vcolumnsMinDistances;
					}
					
					
					case 1967259813:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVComplexesVColumns") ), ((int) (1967259813) ))) );
					}
					
					
					case 1956757135:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.vcomplexesVColumns;
					}
					
					
					case 1832394056:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVNotesVColumns") ), ((int) (1832394056) ))) );
					}
					
					
					case 852762162:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.vnotesVColumns;
					}
					
					
					case 294620923:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getValue") ), ((int) (294620923) ))) );
					}
					
					
					case 834174833:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return (this.@value).toDynamic();
					}
					
					
					case 1917977133:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVColumnsPositions") ), ((int) (1917977133) ))) );
					}
					
					
					case 820113283:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.vcolumnsPositions;
					}
					
					
					case 611545865:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getPositionsColumns") ), ((int) (611545865) ))) );
					}
					
					
					case 1005181137:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.positionsVColumns;
					}
					
					
					case 1138700733:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVColumns") ), ((int) (1138700733) ))) );
					}
					
					
					case 1352288039:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.vcolumns;
					}
					
					
					case 2062949888:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVParts") ), ((int) (2062949888) ))) );
					}
					
					
					case 1802642666:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.vparts;
					}
					
					
					case 1976640262:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_displayTime") ), ((int) (1976640262) ))) );
					}
					
					
					case 1876637933:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_displayKeys") ), ((int) (1876637933) ))) );
					}
					
					
					case 1498626256:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_displayClefs") ), ((int) (1498626256) ))) );
					}
					
					
					case 888105839:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						if (handleProperties) {
							#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
							return this.get_displayTime();
						}
						 else {
							#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
							return this.displayTime;
						}
						
					}
					
					
					case 788103510:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						if (handleProperties) {
							#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
							return this.get_displayKeys();
						}
						 else {
							#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
							return this.displayKeys;
						}
						
					}
					
					
					case 1421102151:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						if (handleProperties) {
							#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
							return this.get_displayClefs();
						}
						 else {
							#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
							return this.displayClefs;
						}
						
					}
					
					
					case 1287096214:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_time") ), ((int) (1287096214) ))) );
					}
					
					
					case 1187093885:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_keys") ), ((int) (1187093885) ))) );
					}
					
					
					case 2048392659:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this._keys;
					}
					
					
					case 201642560:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_clefs") ), ((int) (201642560) ))) );
					}
					
					
					case 1145224490:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this._clefs;
					}
					
					
					case 1291635725:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						if (handleProperties) {
							#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
							return this.get_time();
						}
						 else {
							#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
							return this.time;
						}
						
					}
					
					
					case 1191633396:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						if (handleProperties) {
							#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
							return this.get_keys();
						}
						 else {
							#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
							return this.keys;
						}
						
					}
					
					
					case 1213953513:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						if (handleProperties) {
							#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
							return this.get_clefs();
						}
						 else {
							#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
							return this.clefs;
						}
						
					}
					
					
					case 1224747557:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.nbar;
					}
					
					
					default:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				switch (hash){
					case 1199478257:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.getVColumnsMinWidth();
					}
					
					
					case 561227029:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.getVColumnsMinPositions();
					}
					
					
					case 1602809097:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.getVColumnsMinDistances();
					}
					
					
					case 1967259813:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.getVComplexesVColumns();
					}
					
					
					case 1832394056:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.getVNotesVColumns();
					}
					
					
					case 294620923:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.getValue();
					}
					
					
					case 1917977133:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.getVColumnsPositions();
					}
					
					
					case 611545865:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.getPositionsColumns();
					}
					
					
					case 1138700733:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.getVColumns();
					}
					
					
					case 2062949888:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.getVParts();
					}
					
					
					case 1976640262:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.get_displayTime();
					}
					
					
					case 1876637933:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.get_displayKeys();
					}
					
					
					case 1498626256:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.get_displayClefs();
					}
					
					
					case 1287096214:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.get_time();
					}
					
					
					case 1187093885:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.get_keys();
					}
					
					
					case 201642560:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return this.get_clefs();
					}
					
					
					default:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("vcolumnsMinWidth");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("vcolumnsMinPositions");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("vcolumnsMinDistances");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("vcomplexesVColumns");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("vnotesVColumns");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("value");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("vcolumnsPositions");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("positionsVColumns");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("vcolumns");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("vparts");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("displayTime");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("displayKeys");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("displayClefs");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("_keys");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("_clefs");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("time");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("keys");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("clefs");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				baseArr.push("nbar");
				#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
				{
					#line 13 "F:\\nx3\\src\\nx3\\VBar.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


