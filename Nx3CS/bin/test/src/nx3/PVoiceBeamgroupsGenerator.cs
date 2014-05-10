
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PVoiceBeamgroupsGenerator : global::haxe.lang.HxObject {
		public    PVoiceBeamgroupsGenerator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PVoiceBeamgroupsGenerator(global::Array<object> pnotes, global::Array<global::nx3.ENoteVal> pattern){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				global::nx3.PVoiceBeamgroupsGenerator.__hx_ctor_nx3_PVoiceBeamgroupsGenerator(this, pnotes, pattern);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PVoiceBeamgroupsGenerator(global::nx3.PVoiceBeamgroupsGenerator __temp_me125, global::Array<object> pnotes, global::Array<global::nx3.ENoteVal> pattern){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				if (( pattern == default(global::Array<global::nx3.ENoteVal>) )) {
					#line 16 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					pattern = new global::Array<global::nx3.ENoteVal>(new global::nx3.ENoteVal[]{global::nx3.ENoteVal.Nv4});
				}
				
				#line 17 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				__temp_me125.voice = ((global::nx3.PNote) (pnotes[0]) ).getVoice();
				__temp_me125.notes = pnotes;
				__temp_me125.pattern = pattern;
				__temp_me125.adjustPatternLenght();
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				return new global::nx3.PVoiceBeamgroupsGenerator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				return new global::nx3.PVoiceBeamgroupsGenerator(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ), ((global::Array<global::nx3.ENoteVal>) (global::Array<object>.__hx_cast<global::nx3.ENoteVal>(((global::Array) (arr[1]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> notes;
		
		public  global::Array<global::nx3.ENoteVal> pattern;
		
		public  global::nx3.PVoice voice;
		
		public virtual   global::Array<object> getBeamgroups(){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				global::Array<object> patternPositions = this.getPatternPositions();
				global::Array<object> notesPositions = this.getNotesPositions();
				global::Array<int> notesBeamgroupPosIndexes = this.getNotesBeamgroupPosIndexes(patternPositions, notesPositions);
				global::Array<object> beamgroups = this.createBeamgroups(notesBeamgroupPosIndexes);
				return beamgroups;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> createBeamgroups(global::Array<int> indexes){
			unchecked {
				#line 34 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				int noteIdx = 0;
				int prevBeamgroupPosIdx = -1;
				int groupIdx = -1;
				global::Array<object> result = new global::Array<object>(new object[]{});
				global::Array<int> pnoteGroupIdx = new global::Array<int>(new int[]{});
				global::Array<object> groupIdxpnotes = new global::Array<object>(new object[]{});
				#line 41 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				{
					#line 41 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					int _g = 0;
					#line 41 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					global::Array<object> _g1 = this.notes;
					#line 41 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					while (( _g < _g1.length )){
						#line 41 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						global::nx3.PNote pnote = ((global::nx3.PNote) (_g1[_g]) );
						#line 41 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						 ++ _g;
						#line 43 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						int beamgroupPosIdx = indexes[noteIdx];
						if (( beamgroupPosIdx == -1 )) {
							#line 46 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
							groupIdx++;
							pnoteGroupIdx.push(groupIdx);
						}
						 else {
							#line 51 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
							if (( prevBeamgroupPosIdx != beamgroupPosIdx )) {
								#line 51 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
								groupIdx++;
							}
							
							#line 52 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
							pnoteGroupIdx.push(groupIdx);
						}
						
						#line 54 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						prevBeamgroupPosIdx = beamgroupPosIdx;
						noteIdx++;
					}
					
				}
				
				#line 58 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				int noteIdx1 = 0;
				global::Array<object> grouppnotes = new global::Array<object>(new object[]{});
				global::Array<object> pnotes = default(global::Array<object>);
				{
					#line 61 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					int _g2 = 0;
					#line 61 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					global::Array<object> _g11 = this.notes;
					#line 61 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					while (( _g2 < _g11.length )){
						#line 61 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						global::nx3.PNote pnote1 = ((global::nx3.PNote) (_g11[_g2]) );
						#line 61 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						 ++ _g2;
						#line 63 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						int groupIdx1 = pnoteGroupIdx[noteIdx1];
						if (( ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (grouppnotes[groupIdx1]) ))) ) == default(global::Array<object>) )) {
							#line 64 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
							grouppnotes[groupIdx1] = new global::Array<object>(new object[]{});
						}
						
						#line 65 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (grouppnotes[groupIdx1]) ))) ).push(pnote1);
						noteIdx1++;
					}
					
				}
				
				#line 69 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				{
					#line 69 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					int _g3 = 0;
					#line 69 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					while (( _g3 < grouppnotes.length )){
						#line 69 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						global::Array<object> @group = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (grouppnotes[_g3]) ))) );
						#line 69 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						 ++ _g3;
						#line 71 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						global::nx3.PBeamgroup beamgroup = new global::nx3.PBeamgroup(((global::Array<object>) (@group) ));
						result.push(beamgroup);
					}
					
				}
				
				#line 75 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   global::Array<int> getNotesBeamgroupPosIndexes(global::Array<object> patternPositions, global::Array<object> notesPositions){
			unchecked {
				#line 78 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				global::Array<object> patternPositions1 = new global::Array<object>(new object[]{patternPositions});
				#line 80 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				global::haxe.lang.Function findPatternIdxForNote = new global::nx3.PVoiceBeamgroupsGenerator_getNotesBeamgroupPosIndexes_80__Fun(((global::Array<object>) (patternPositions1) ));
				#line 93 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				global::Array<int> result = new global::Array<int>(new int[]{});
				int p1 = 0;
				object curPatternPos1 = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (patternPositions1[0]) ))) )[p1];
				{
					#line 96 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					int _g11 = 0;
					#line 96 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					int _g2 = this.notes.length;
					#line 96 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					while (( _g11 < _g2 )){
						#line 96 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						int n = _g11++;
						#line 98 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						object curNotePos1 = notesPositions[n];
						global::nx3.NNote nnote = ((global::nx3.PNote) (this.notes[n]) ).nnote;
						#line 102 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						int patternIdx = default(int);
						#line 102 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						{
							#line 102 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
							global::nx3.ENoteType _g21 = nnote.type;
							#line 102 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
							switch (global::Type.enumIndex(_g21)){
								case 0:
								{
									#line 102 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
									global::Array<object> attributes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (_g21.@params[3]) ))) );
									#line 102 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
									global::Array<global::nx3.ENoteArticulation> articluation = ((global::Array<global::nx3.ENoteArticulation>) (global::Array<object>.__hx_cast<global::nx3.ENoteArticulation>(((global::Array) (_g21.@params[2]) ))) );
									#line 102 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
									global::nx3.ENotationVariant variant = ((global::nx3.ENotationVariant) (_g21.@params[1]) );
									#line 102 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
									global::Array<object> heads = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (_g21.@params[0]) ))) );
									#line 105 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
									if (( global::nx3.ENoteValTools.beaminglevel(nnote.@value) <= 0 )) {
										#line 105 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
										patternIdx = -1;
									}
									 else {
										#line 105 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
										patternIdx = ((int) (findPatternIdxForNote.__hx_invoke1_f(default(double), curNotePos1)) );
									}
									
									#line 104 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
									break;
								}
								
								
								case 1:
								{
									#line 102 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
									int level = ((int) (global::haxe.lang.Runtime.toInt(_g21.@params[0])) );
									#line 106 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
									patternIdx = -1;
									#line 106 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
									break;
								}
								
								
								default:
								{
									#line 107 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
									patternIdx = -1;
									#line 107 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
									break;
								}
								
							}
							
						}
						
						#line 109 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						result.push(patternIdx);
					}
					
				}
				
				#line 112 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getNotesPositions(){
			unchecked {
				#line 117 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				global::Array<object> result = new global::Array<object>(new object[]{});
				int currPos = 0;
				{
					#line 119 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					int _g = 0;
					#line 119 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					global::Array<object> _g1 = this.notes;
					#line 119 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					while (( _g < _g1.length )){
						#line 119 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						global::nx3.PNote pnote = ((global::nx3.PNote) (_g1[_g]) );
						#line 119 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						 ++ _g;
						#line 121 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						int @value = global::nx3.ENoteValTools.@value(pnote.nnote.@value);
						object posinfo = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{}), new global::Array<object>(new object[]{}), new global::Array<int>(new int[]{5047259, 67859554}), new global::Array<double>(new double[]{((double) (( currPos + @value )) ), ((double) (currPos) )}));
						result.push(posinfo);
						currPos += @value;
					}
					
				}
				
				#line 126 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getPatternPositions(){
			unchecked {
				#line 131 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				global::Array<object> result = new global::Array<object>(new object[]{});
				int currPos = 0;
				{
					#line 133 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					int _g = 0;
					#line 133 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					global::Array<global::nx3.ENoteVal> _g1 = this.pattern;
					#line 133 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					while (( _g < _g1.length )){
						#line 133 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						global::nx3.ENoteVal segment = _g1[_g];
						#line 133 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						 ++ _g;
						#line 135 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						int @value = global::nx3.ENoteValTools.@value(segment);
						object posinfo = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{}), new global::Array<object>(new object[]{}), new global::Array<int>(new int[]{5047259, 67859554}), new global::Array<double>(new double[]{((double) (( currPos + @value )) ), ((double) (currPos) )}));
						result.push(posinfo);
						currPos += @value;
					}
					
				}
				
				#line 140 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				return result;
			}
			#line default
		}
		
		
		public virtual   void adjustPatternLenght(){
			unchecked {
				#line 145 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				int notesValue = 0;
				{
					#line 146 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					int _g = 0;
					#line 146 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					global::Array<object> _g1 = this.notes;
					#line 146 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					while (( _g < _g1.length )){
						#line 146 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						global::nx3.PNote pnote = ((global::nx3.PNote) (_g1[_g]) );
						#line 146 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						 ++ _g;
						#line 146 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						notesValue += global::nx3.ENoteValTools.@value(pnote.nnote.@value);
					}
					
				}
				
				#line 148 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				int patternValue = 0;
				{
					#line 149 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					int _g2 = 0;
					#line 149 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					global::Array<global::nx3.ENoteVal> _g11 = this.pattern;
					#line 149 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					while (( _g2 < _g11.length )){
						#line 149 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						global::nx3.ENoteVal @value = _g11[_g2];
						#line 149 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						 ++ _g2;
						#line 149 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						patternValue += global::nx3.ENoteValTools.@value(@value);
					}
					
				}
				
				#line 151 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				while (( patternValue < notesValue )){
					#line 153 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					this.pattern = this.pattern.concat(this.pattern);
					patternValue *= 2;
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				switch (hash){
					case 989275570:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						this.voice = ((global::nx3.PVoice) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return @value;
					}
					
					
					case 293013072:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						this.pattern = ((global::Array<global::nx3.ENoteVal>) (global::Array<object>.__hx_cast<global::nx3.ENoteVal>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return @value;
					}
					
					
					case 533388353:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						this.notes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				switch (hash){
					case 508114655:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("adjustPatternLenght") ), ((int) (508114655) ))) );
					}
					
					
					case 168356848:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getPatternPositions") ), ((int) (168356848) ))) );
					}
					
					
					case 1299879519:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNotesPositions") ), ((int) (1299879519) ))) );
					}
					
					
					case 922134353:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNotesBeamgroupPosIndexes") ), ((int) (922134353) ))) );
					}
					
					
					case 131514655:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("createBeamgroups") ), ((int) (131514655) ))) );
					}
					
					
					case 790339385:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBeamgroups") ), ((int) (790339385) ))) );
					}
					
					
					case 989275570:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return this.voice;
					}
					
					
					case 293013072:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return this.pattern;
					}
					
					
					case 533388353:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return this.notes;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				switch (hash){
					case 508114655:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						this.adjustPatternLenght();
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						break;
					}
					
					
					case 168356848:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return this.getPatternPositions();
					}
					
					
					case 1299879519:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return this.getNotesPositions();
					}
					
					
					case 922134353:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return this.getNotesBeamgroupPosIndexes(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[1]) ))) ));
					}
					
					
					case 131514655:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return this.createBeamgroups(((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 790339385:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return this.getBeamgroups();
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				baseArr.push("voice");
				#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				baseArr.push("pattern");
				#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				baseArr.push("notes");
				#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				{
					#line 8 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PVoiceBeamgroupsGenerator_getNotesBeamgroupPosIndexes_80__Fun : global::haxe.lang.Function {
		public    PVoiceBeamgroupsGenerator_getNotesBeamgroupPosIndexes_80__Fun(global::Array<object> patternPositions1) : base(1, 1){
			unchecked {
				#line 81 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				this.patternPositions1 = patternPositions1;
			}
			#line default
		}
		
		
		public override   double __hx_invoke1_f(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 80 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				object curNotePos = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (((object) (__fn_float1) )) : (((object) (__fn_dyn1) )) );
				#line 82 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				{
					#line 82 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					int _g1 = 0;
					#line 82 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					int _g = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.patternPositions1[0]) ))) ).length;
					#line 82 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
					while (( _g1 < _g )){
						#line 82 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						int p = _g1++;
						#line 84 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
						object curPatternPos = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.patternPositions1[0]) ))) )[p];
						if (( ( global::haxe.lang.Runtime.compare(((int) (global::haxe.lang.Runtime.getField_f(curNotePos, "start", 67859554, true)) ), ((int) (global::haxe.lang.Runtime.getField_f(curPatternPos, "start", 67859554, true)) )) >= 0 ) && ( global::haxe.lang.Runtime.compare(((int) (global::haxe.lang.Runtime.getField_f(curNotePos, "end", 5047259, true)) ), ((int) (global::haxe.lang.Runtime.getField_f(curPatternPos, "end", 5047259, true)) )) <= 0 ) )) {
							#line 87 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
							return ((double) (p) );
						}
						
					}
					
				}
				
				#line 90 "F:\\nx3\\src\\nx3\\PVoiceBeamgroupsGenerator.hx"
				return ((double) (-1) );
			}
			#line default
		}
		
		
		public  global::Array<object> patternPositions1;
		
	}
}


