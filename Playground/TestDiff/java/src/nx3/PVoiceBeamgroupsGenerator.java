package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PVoiceBeamgroupsGenerator extends haxe.lang.HxObject
{
	public    PVoiceBeamgroupsGenerator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PVoiceBeamgroupsGenerator(haxe.root.Array<nx3.PNote> pnotes, haxe.root.Array<nx3.ENoteVal> pattern)
	{
		nx3.PVoiceBeamgroupsGenerator.__hx_ctor_nx3_PVoiceBeamgroupsGenerator(this, pnotes, pattern);
	}
	
	
	public static   void __hx_ctor_nx3_PVoiceBeamgroupsGenerator(nx3.PVoiceBeamgroupsGenerator __temp_me119, haxe.root.Array<nx3.PNote> pnotes, haxe.root.Array<nx3.ENoteVal> pattern)
	{
		if (( pattern == null )) 
		{
			pattern = new haxe.root.Array<nx3.ENoteVal>(new nx3.ENoteVal[]{nx3.ENoteVal.Nv4});
		}
		
		__temp_me119.voice = pnotes.__get(0).getVoice();
		__temp_me119.notes = pnotes;
		__temp_me119.pattern = pattern;
		__temp_me119.adjustPatternLenght();
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PVoiceBeamgroupsGenerator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PVoiceBeamgroupsGenerator(((haxe.root.Array<nx3.PNote>) (arr.__get(0)) ), ((haxe.root.Array<nx3.ENoteVal>) (arr.__get(1)) ));
	}
	
	
	public  haxe.root.Array<nx3.PNote> notes;
	
	public  haxe.root.Array<nx3.ENoteVal> pattern;
	
	public  nx3.PVoice voice;
	
	public   haxe.root.Array<nx3.PBeamgroup> getBeamgroups()
	{
		haxe.root.Array<java.lang.Object> patternPositions = this.getPatternPositions();
		haxe.root.Array<java.lang.Object> notesPositions = this.getNotesPositions();
		haxe.root.Array<java.lang.Object> notesBeamgroupPosIndexes = this.getNotesBeamgroupPosIndexes(patternPositions, notesPositions);
		haxe.root.Array<nx3.PBeamgroup> beamgroups = this.createBeamgroups(notesBeamgroupPosIndexes);
		return beamgroups;
	}
	
	
	public   haxe.root.Array<nx3.PBeamgroup> createBeamgroups(haxe.root.Array<java.lang.Object> indexes)
	{
		int noteIdx = 0;
		int prevBeamgroupPosIdx = -1;
		int groupIdx = -1;
		haxe.root.Array<nx3.PBeamgroup> result = new haxe.root.Array<nx3.PBeamgroup>(new nx3.PBeamgroup[]{});
		haxe.root.Array<java.lang.Object> pnoteGroupIdx = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		haxe.root.Array<nx3.PNote> groupIdxpnotes = new haxe.root.Array<nx3.PNote>(new nx3.PNote[]{});
		{
			int _g = 0;
			haxe.root.Array<nx3.PNote> _g1 = this.notes;
			while (( _g < _g1.length ))
			{
				nx3.PNote pnote = _g1.__get(_g);
				 ++ _g;
				int beamgroupPosIdx = ((int) (haxe.lang.Runtime.toInt(indexes.__get(noteIdx))) );
				if (( beamgroupPosIdx == -1 )) 
				{
					groupIdx++;
					pnoteGroupIdx.push(groupIdx);
				}
				 else 
				{
					if (( prevBeamgroupPosIdx != beamgroupPosIdx )) 
					{
						groupIdx++;
					}
					
					pnoteGroupIdx.push(groupIdx);
				}
				
				prevBeamgroupPosIdx = beamgroupPosIdx;
				noteIdx++;
			}
			
		}
		
		int noteIdx1 = 0;
		haxe.root.Array<haxe.root.Array> grouppnotes = new haxe.root.Array<haxe.root.Array>(new haxe.root.Array[]{});
		haxe.root.Array<nx3.PNote> pnotes = null;
		{
			int _g2 = 0;
			haxe.root.Array<nx3.PNote> _g11 = this.notes;
			while (( _g2 < _g11.length ))
			{
				nx3.PNote pnote1 = _g11.__get(_g2);
				 ++ _g2;
				int groupIdx1 = ((int) (haxe.lang.Runtime.toInt(pnoteGroupIdx.__get(noteIdx1))) );
				if (( ((haxe.root.Array<nx3.PNote>) (((haxe.root.Array) (grouppnotes.__get(groupIdx1)) )) ) == null )) 
				{
					grouppnotes.__set(groupIdx1, ((haxe.root.Array) (new haxe.root.Array<nx3.PNote>(new nx3.PNote[]{})) ));
				}
				
				((haxe.root.Array<nx3.PNote>) (((haxe.root.Array) (grouppnotes.__get(groupIdx1)) )) ).push(pnote1);
				noteIdx1++;
			}
			
		}
		
		{
			int _g3 = 0;
			while (( _g3 < grouppnotes.length ))
			{
				haxe.root.Array<nx3.PNote> group = ((haxe.root.Array<nx3.PNote>) (((haxe.root.Array) (grouppnotes.__get(_g3)) )) );
				 ++ _g3;
				nx3.PBeamgroup beamgroup = new nx3.PBeamgroup(((haxe.root.Array<nx3.PNote>) (group) ));
				result.push(beamgroup);
			}
			
		}
		
		return result;
	}
	
	
	public   haxe.root.Array<java.lang.Object> getNotesBeamgroupPosIndexes(haxe.root.Array<java.lang.Object> patternPositions, haxe.root.Array<java.lang.Object> notesPositions)
	{
		haxe.root.Array<haxe.root.Array> patternPositions1 = new haxe.root.Array<haxe.root.Array>(new haxe.root.Array[]{patternPositions});
		haxe.lang.Function findPatternIdxForNote = new nx3.PVoiceBeamgroupsGenerator_getNotesBeamgroupPosIndexes_80__Fun(((haxe.root.Array<haxe.root.Array>) (patternPositions1) ));
		haxe.root.Array<java.lang.Object> result = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		int p1 = 0;
		java.lang.Object curPatternPos1 = patternPositions1.__get(0).__get(p1);
		{
			int _g11 = 0;
			int _g2 = this.notes.length;
			while (( _g11 < _g2 ))
			{
				int n = _g11++;
				java.lang.Object curNotePos1 = notesPositions.__get(n);
				nx3.NNote nnote = this.notes.__get(n).nnote;
				int patternIdx = 0;
				{
					nx3.ENoteType _g21 = nnote.type;
					switch (haxe.root.Type.enumIndex(_g21))
					{
						case 0:
						{
							haxe.root.Array<nx3.ENoteAttributes> attributes = ((haxe.root.Array<nx3.ENoteAttributes>) (_g21.params.__get(3)) );
							haxe.root.Array<nx3.ENoteArticulation> articluation = ((haxe.root.Array<nx3.ENoteArticulation>) (_g21.params.__get(2)) );
							nx3.ENotationVariant variant = ((nx3.ENotationVariant) (_g21.params.__get(1)) );
							haxe.root.Array<nx3.NHead> heads = ((haxe.root.Array<nx3.NHead>) (_g21.params.__get(0)) );
							if (( nx3.ENoteValTools.beaminglevel(nnote.value) <= 0 )) 
							{
								patternIdx = -1;
							}
							 else 
							{
								patternIdx = ((int) (findPatternIdxForNote.__hx_invoke1_f(0.0, curNotePos1)) );
							}
							
							break;
						}
						
						
						case 1:
						{
							int level = ((int) (haxe.lang.Runtime.toInt(_g21.params.__get(0))) );
							patternIdx = -1;
							break;
						}
						
						
						default:
						{
							patternIdx = -1;
							break;
						}
						
					}
					
				}
				
				result.push(patternIdx);
			}
			
		}
		
		return result;
	}
	
	
	public   haxe.root.Array<java.lang.Object> getNotesPositions()
	{
		haxe.root.Array<java.lang.Object> result = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		int currPos = 0;
		{
			int _g = 0;
			haxe.root.Array<nx3.PNote> _g1 = this.notes;
			while (( _g < _g1.length ))
			{
				nx3.PNote pnote = _g1.__get(_g);
				 ++ _g;
				int value = nx3.ENoteValTools.value(pnote.nnote.value);
				java.lang.Object posinfo = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"end", "start"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (( currPos + value )) )) ), ((java.lang.Object) (((double) (currPos) )) )}));
				result.push(posinfo);
				currPos += value;
			}
			
		}
		
		return result;
	}
	
	
	public   haxe.root.Array<java.lang.Object> getPatternPositions()
	{
		haxe.root.Array<java.lang.Object> result = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		int currPos = 0;
		{
			int _g = 0;
			haxe.root.Array<nx3.ENoteVal> _g1 = this.pattern;
			while (( _g < _g1.length ))
			{
				nx3.ENoteVal segment = _g1.__get(_g);
				 ++ _g;
				int value = nx3.ENoteValTools.value(segment);
				java.lang.Object posinfo = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"end", "start"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (( currPos + value )) )) ), ((java.lang.Object) (((double) (currPos) )) )}));
				result.push(posinfo);
				currPos += value;
			}
			
		}
		
		return result;
	}
	
	
	public   void adjustPatternLenght()
	{
		int notesValue = 0;
		{
			int _g = 0;
			haxe.root.Array<nx3.PNote> _g1 = this.notes;
			while (( _g < _g1.length ))
			{
				nx3.PNote pnote = _g1.__get(_g);
				 ++ _g;
				notesValue += nx3.ENoteValTools.value(pnote.nnote.value);
			}
			
		}
		
		int patternValue = 0;
		{
			int _g2 = 0;
			haxe.root.Array<nx3.ENoteVal> _g11 = this.pattern;
			while (( _g2 < _g11.length ))
			{
				nx3.ENoteVal value = _g11.__get(_g2);
				 ++ _g2;
				patternValue += nx3.ENoteValTools.value(value);
			}
			
		}
		
		while (( patternValue < notesValue ))
		{
			this.pattern = this.pattern.concat(this.pattern);
			patternValue *= 2;
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef628 = true;
			switch (field.hashCode())
			{
				case 112386354:
				{
					if (field.equals("voice")) 
					{
						__temp_executeDef628 = false;
						this.voice = ((nx3.PVoice) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 105008833:
				{
					if (field.equals("notes")) 
					{
						__temp_executeDef628 = false;
						this.notes = ((haxe.root.Array<nx3.PNote>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -791090288:
				{
					if (field.equals("pattern")) 
					{
						__temp_executeDef628 = false;
						this.pattern = ((haxe.root.Array<nx3.ENoteVal>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef628) 
			{
				return super.__hx_setField(field, value, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef629 = true;
			switch (field.hashCode())
			{
				case -1972625953:
				{
					if (field.equals("adjustPatternLenght")) 
					{
						__temp_executeDef629 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("adjustPatternLenght"))) );
					}
					
					break;
				}
				
				
				case 105008833:
				{
					if (field.equals("notes")) 
					{
						__temp_executeDef629 = false;
						return this.notes;
					}
					
					break;
				}
				
				
				case -77977040:
				{
					if (field.equals("getPatternPositions")) 
					{
						__temp_executeDef629 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getPatternPositions"))) );
					}
					
					break;
				}
				
				
				case -791090288:
				{
					if (field.equals("pattern")) 
					{
						__temp_executeDef629 = false;
						return this.pattern;
					}
					
					break;
				}
				
				
				case 1000223647:
				{
					if (field.equals("getNotesPositions")) 
					{
						__temp_executeDef629 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNotesPositions"))) );
					}
					
					break;
				}
				
				
				case 112386354:
				{
					if (field.equals("voice")) 
					{
						__temp_executeDef629 = false;
						return this.voice;
					}
					
					break;
				}
				
				
				case -1094727343:
				{
					if (field.equals("getNotesBeamgroupPosIndexes")) 
					{
						__temp_executeDef629 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNotesBeamgroupPosIndexes"))) );
					}
					
					break;
				}
				
				
				case -1980438983:
				{
					if (field.equals("getBeamgroups")) 
					{
						__temp_executeDef629 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBeamgroups"))) );
					}
					
					break;
				}
				
				
				case 142843999:
				{
					if (field.equals("createBeamgroups")) 
					{
						__temp_executeDef629 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("createBeamgroups"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef629) 
			{
				return super.__hx_getField(field, throwErrors, isCheck, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_invokeField(java.lang.String field, haxe.root.Array dynargs)
	{
		{
			boolean __temp_executeDef630 = true;
			switch (field.hashCode())
			{
				case -1972625953:
				{
					if (field.equals("adjustPatternLenght")) 
					{
						__temp_executeDef630 = false;
						this.adjustPatternLenght();
					}
					
					break;
				}
				
				
				case -1980438983:
				{
					if (field.equals("getBeamgroups")) 
					{
						__temp_executeDef630 = false;
						return this.getBeamgroups();
					}
					
					break;
				}
				
				
				case -77977040:
				{
					if (field.equals("getPatternPositions")) 
					{
						__temp_executeDef630 = false;
						return this.getPatternPositions();
					}
					
					break;
				}
				
				
				case 142843999:
				{
					if (field.equals("createBeamgroups")) 
					{
						__temp_executeDef630 = false;
						return this.createBeamgroups(((haxe.root.Array<java.lang.Object>) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 1000223647:
				{
					if (field.equals("getNotesPositions")) 
					{
						__temp_executeDef630 = false;
						return this.getNotesPositions();
					}
					
					break;
				}
				
				
				case -1094727343:
				{
					if (field.equals("getNotesBeamgroupPosIndexes")) 
					{
						__temp_executeDef630 = false;
						return this.getNotesBeamgroupPosIndexes(((haxe.root.Array<java.lang.Object>) (dynargs.__get(0)) ), ((haxe.root.Array<java.lang.Object>) (dynargs.__get(1)) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef630) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("voice");
		baseArr.push("pattern");
		baseArr.push("notes");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


