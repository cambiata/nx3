
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VVoiceBeamgroupsGenerator : global::haxe.lang.HxObject {
		public    VVoiceBeamgroupsGenerator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VVoiceBeamgroupsGenerator(global::Array<object> vnotes, global::Array<global::nx3.ENoteVal> pattern){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				global::nx3.VVoiceBeamgroupsGenerator.__hx_ctor_nx3_VVoiceBeamgroupsGenerator(this, vnotes, pattern);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VVoiceBeamgroupsGenerator(global::nx3.VVoiceBeamgroupsGenerator __temp_me191, global::Array<object> vnotes, global::Array<global::nx3.ENoteVal> pattern){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				if (( pattern == default(global::Array<global::nx3.ENoteVal>) )) {
					#line 20 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					pattern = new global::Array<global::nx3.ENoteVal>(new global::nx3.ENoteVal[]{global::nx3.ENoteVal.Nv4});
				}
				
				#line 22 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				__temp_me191.vnotes = vnotes;
				__temp_me191.pattern = pattern;
				__temp_me191.adjustPatternLenght();
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				return new global::nx3.VVoiceBeamgroupsGenerator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				return new global::nx3.VVoiceBeamgroupsGenerator(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ), ((global::Array<global::nx3.ENoteVal>) (global::Array<object>.__hx_cast<global::nx3.ENoteVal>(((global::Array) (arr[1]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> vnotes;
		
		public  global::Array<global::nx3.ENoteVal> pattern;
		
		public virtual   global::Array<object> getBeamgroups(){
			unchecked {
				#line 29 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				global::Array<object> patternPositions = this.getPatternPositions();
				global::Array<object> notesPositions = this.getNotesPositions();
				global::Array<int> notesBeamgroupPosIndexes = this.getNotesBeamgroupPosIndexes(patternPositions, notesPositions);
				#line 33 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				global::Array<object> beamgroups = this.createBeamgroups(notesBeamgroupPosIndexes);
				#line 35 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				return beamgroups;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> createBeamgroups(global::Array<int> indexes){
			unchecked {
				#line 40 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				int noteIdx = 0;
				int prevBeamgroupPosIdx = -1;
				int groupIdx = -1;
				global::Array<object> result = new global::Array<object>(new object[]{});
				global::Array<int> vnoteGroupIdx = new global::Array<int>(new int[]{});
				global::Array<object> groupIdxVNotes = new global::Array<object>(new object[]{});
				#line 47 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				{
					#line 47 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					int _g = 0;
					#line 47 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					global::Array<object> _g1 = this.vnotes;
					#line 47 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					while (( _g < _g1.length )){
						#line 47 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						global::nx3.VNote vnote = ((global::nx3.VNote) (_g1[_g]) );
						#line 47 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						 ++ _g;
						#line 49 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						int beamgroupPosIdx = indexes[noteIdx];
						if (( beamgroupPosIdx == -1 )) {
							#line 52 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
							groupIdx++;
							vnoteGroupIdx.push(groupIdx);
						}
						 else {
							#line 57 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
							if (( prevBeamgroupPosIdx != beamgroupPosIdx )) {
								#line 57 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
								groupIdx++;
							}
							
							#line 58 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
							vnoteGroupIdx.push(groupIdx);
						}
						
						#line 60 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						prevBeamgroupPosIdx = beamgroupPosIdx;
						noteIdx++;
					}
					
				}
				
				#line 64 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				int noteIdx1 = 0;
				global::Array<object> groupVNotes = new global::Array<object>(new object[]{});
				global::Array<object> vnotes = default(global::Array<object>);
				{
					#line 67 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					int _g2 = 0;
					#line 67 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					global::Array<object> _g11 = this.vnotes;
					#line 67 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					while (( _g2 < _g11.length )){
						#line 67 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						global::nx3.VNote vnote1 = ((global::nx3.VNote) (_g11[_g2]) );
						#line 67 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						 ++ _g2;
						#line 69 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						int groupIdx1 = vnoteGroupIdx[noteIdx1];
						if (( ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (groupVNotes[groupIdx1]) ))) ) == default(global::Array<object>) )) {
							#line 70 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
							groupVNotes[groupIdx1] = new global::Array<object>(new object[]{});
						}
						
						#line 71 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (groupVNotes[groupIdx1]) ))) ).push(vnote1);
						noteIdx1++;
					}
					
				}
				
				#line 75 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				{
					#line 75 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					int _g3 = 0;
					#line 75 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					while (( _g3 < groupVNotes.length )){
						#line 75 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						global::Array<object> @group = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (groupVNotes[_g3]) ))) );
						#line 75 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						 ++ _g3;
						#line 77 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						global::nx3.VBeamgroup beamgroup = new global::nx3.VBeamgroup(((global::Array<object>) (@group) ));
						result.push(beamgroup);
					}
					
				}
				
				#line 81 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   global::Array<int> getNotesBeamgroupPosIndexes(global::Array<object> patternPositions, global::Array<object> notesPositions){
			unchecked {
				#line 84 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				global::Array<object> patternPositions1 = new global::Array<object>(new object[]{patternPositions});
				#line 86 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				global::haxe.lang.Function findPatternIdxForNote = new global::nx3.VVoiceBeamgroupsGenerator_getNotesBeamgroupPosIndexes_86__Fun(((global::Array<object>) (patternPositions1) ));
				#line 99 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				global::Array<int> result = new global::Array<int>(new int[]{});
				int p1 = 0;
				object curPatternPos1 = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (patternPositions1[0]) ))) )[p1];
				{
					#line 102 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					int _g11 = 0;
					#line 102 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					int _g2 = this.vnotes.length;
					#line 102 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					while (( _g11 < _g2 )){
						#line 102 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						int n = _g11++;
						#line 104 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						object curNotePos1 = notesPositions[n];
						global::nx3.NNote nnote = ((global::nx3.VNote) (this.vnotes[n]) ).nnote;
						#line 108 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						int patternIdx = default(int);
						#line 108 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						{
							#line 108 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
							global::nx3.ENoteType _g21 = nnote.type;
							#line 108 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
							switch (global::Type.enumIndex(_g21)){
								case 0:
								{
									#line 108 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
									global::Array<object> attributes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (_g21.@params[3]) ))) );
									#line 108 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
									global::Array<global::nx3.ENoteArticulation> articluation = ((global::Array<global::nx3.ENoteArticulation>) (global::Array<object>.__hx_cast<global::nx3.ENoteArticulation>(((global::Array) (_g21.@params[2]) ))) );
									#line 108 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
									global::nx3.ENotationVariant variant = ((global::nx3.ENotationVariant) (_g21.@params[1]) );
									#line 108 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
									global::Array<object> heads = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (_g21.@params[0]) ))) );
									#line 111 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
									if (( global::nx3.ENoteValTools.beaminglevel(nnote.@value) <= 0 )) {
										#line 111 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
										patternIdx = -1;
									}
									 else {
										#line 111 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
										patternIdx = ((int) (findPatternIdxForNote.__hx_invoke1_f(default(double), curNotePos1)) );
									}
									
									#line 110 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
									break;
								}
								
								
								case 1:
								{
									#line 108 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
									int level = ((int) (global::haxe.lang.Runtime.toInt(_g21.@params[0])) );
									#line 112 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
									patternIdx = -1;
									#line 112 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
									break;
								}
								
								
								default:
								{
									#line 113 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
									patternIdx = -1;
									#line 113 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
									break;
								}
								
							}
							
						}
						
						#line 115 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						result.push(patternIdx);
					}
					
				}
				
				#line 118 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getNotesPositions(){
			unchecked {
				#line 123 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				global::Array<object> result = new global::Array<object>(new object[]{});
				int currPos = 0;
				{
					#line 125 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					int _g = 0;
					#line 125 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					global::Array<object> _g1 = this.vnotes;
					#line 125 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					while (( _g < _g1.length )){
						#line 125 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						global::nx3.VNote vnote = ((global::nx3.VNote) (_g1[_g]) );
						#line 125 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						 ++ _g;
						#line 127 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						int @value = global::nx3.ENoteValTools.@value(vnote.nnote.@value);
						object posinfo = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{}), new global::Array<object>(new object[]{}), new global::Array<int>(new int[]{5047259, 67859554}), new global::Array<double>(new double[]{((double) (( currPos + @value )) ), ((double) (currPos) )}));
						result.push(posinfo);
						currPos += @value;
					}
					
				}
				
				#line 132 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getPatternPositions(){
			unchecked {
				#line 137 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				global::Array<object> result = new global::Array<object>(new object[]{});
				int currPos = 0;
				{
					#line 139 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					int _g = 0;
					#line 139 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					global::Array<global::nx3.ENoteVal> _g1 = this.pattern;
					#line 139 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					while (( _g < _g1.length )){
						#line 139 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						global::nx3.ENoteVal segment = _g1[_g];
						#line 139 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						 ++ _g;
						#line 141 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						int @value = global::nx3.ENoteValTools.@value(segment);
						object posinfo = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{}), new global::Array<object>(new object[]{}), new global::Array<int>(new int[]{5047259, 67859554}), new global::Array<double>(new double[]{((double) (( currPos + @value )) ), ((double) (currPos) )}));
						result.push(posinfo);
						currPos += @value;
					}
					
				}
				
				#line 146 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   void adjustPatternLenght(){
			unchecked {
				#line 151 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				int notesValue = 0;
				{
					#line 152 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					int _g = 0;
					#line 152 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					global::Array<object> _g1 = this.vnotes;
					#line 152 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					while (( _g < _g1.length )){
						#line 152 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						global::nx3.VNote vnote = ((global::nx3.VNote) (_g1[_g]) );
						#line 152 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						 ++ _g;
						#line 152 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						notesValue += global::nx3.ENoteValTools.@value(vnote.nnote.@value);
					}
					
				}
				
				#line 154 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				int patternValue = 0;
				{
					#line 155 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					int _g2 = 0;
					#line 155 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					global::Array<global::nx3.ENoteVal> _g11 = this.pattern;
					#line 155 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					while (( _g2 < _g11.length )){
						#line 155 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						global::nx3.ENoteVal @value = _g11[_g2];
						#line 155 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						 ++ _g2;
						#line 155 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						patternValue += global::nx3.ENoteValTools.@value(@value);
					}
					
				}
				
				#line 157 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				while (( patternValue < notesValue )){
					#line 159 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					this.pattern = this.pattern.concat(this.pattern);
					patternValue *= 2;
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				switch (hash){
					case 293013072:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						this.pattern = ((global::Array<global::nx3.ENoteVal>) (global::Array<object>.__hx_cast<global::nx3.ENoteVal>(((global::Array) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return @value;
					}
					
					
					case 1307013131:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						this.vnotes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				switch (hash){
					case 508114655:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("adjustPatternLenght") ), ((int) (508114655) ))) );
					}
					
					
					case 168356848:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getPatternPositions") ), ((int) (168356848) ))) );
					}
					
					
					case 1299879519:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNotesPositions") ), ((int) (1299879519) ))) );
					}
					
					
					case 922134353:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNotesBeamgroupPosIndexes") ), ((int) (922134353) ))) );
					}
					
					
					case 131514655:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("createBeamgroups") ), ((int) (131514655) ))) );
					}
					
					
					case 790339385:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBeamgroups") ), ((int) (790339385) ))) );
					}
					
					
					case 293013072:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return this.pattern;
					}
					
					
					case 1307013131:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return this.vnotes;
					}
					
					
					default:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				switch (hash){
					case 508114655:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						this.adjustPatternLenght();
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						break;
					}
					
					
					case 168356848:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return this.getPatternPositions();
					}
					
					
					case 1299879519:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return this.getNotesPositions();
					}
					
					
					case 922134353:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return this.getNotesBeamgroupPosIndexes(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[1]) ))) ));
					}
					
					
					case 131514655:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return this.createBeamgroups(((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 790339385:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return this.getBeamgroups();
					}
					
					
					default:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				baseArr.push("pattern");
				#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				baseArr.push("vnotes");
				#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				{
					#line 13 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VVoiceBeamgroupsGenerator_getNotesBeamgroupPosIndexes_86__Fun : global::haxe.lang.Function {
		public    VVoiceBeamgroupsGenerator_getNotesBeamgroupPosIndexes_86__Fun(global::Array<object> patternPositions1) : base(1, 1){
			unchecked {
				#line 87 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				this.patternPositions1 = patternPositions1;
			}
			#line default
		}
		
		
		public override   double __hx_invoke1_f(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 86 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				object curNotePos = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (((object) (__fn_float1) )) : (((object) (__fn_dyn1) )) );
				#line 88 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				{
					#line 88 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					int _g1 = 0;
					#line 88 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					int _g = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.patternPositions1[0]) ))) ).length;
					#line 88 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
					while (( _g1 < _g )){
						#line 88 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						int p = _g1++;
						#line 90 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
						object curPatternPos = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.patternPositions1[0]) ))) )[p];
						if (( ( global::haxe.lang.Runtime.compare(((int) (global::haxe.lang.Runtime.getField_f(curNotePos, "start", 67859554, true)) ), ((int) (global::haxe.lang.Runtime.getField_f(curPatternPos, "start", 67859554, true)) )) >= 0 ) && ( global::haxe.lang.Runtime.compare(((int) (global::haxe.lang.Runtime.getField_f(curNotePos, "end", 5047259, true)) ), ((int) (global::haxe.lang.Runtime.getField_f(curPatternPos, "end", 5047259, true)) )) <= 0 ) )) {
							#line 93 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
							return ((double) (p) );
						}
						
					}
					
				}
				
				#line 96 "F:\\nx3\\src\\nx3\\VVoiceBeamgroupsGenerator.hx"
				return ((double) (-1) );
			}
			#line default
		}
		
		
		public  global::Array<object> patternPositions1;
		
	}
}


