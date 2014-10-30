package nx3.audio;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NoteSoundCalculator extends haxe.lang.HxObject
{
	public    NoteSoundCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    NoteSoundCalculator()
	{
		nx3.audio.NoteSoundCalculator.__hx_ctor_nx3_audio_NoteSoundCalculator(this);
	}
	
	
	public static   void __hx_ctor_nx3_audio_NoteSoundCalculator(nx3.audio.NoteSoundCalculator __temp_me164)
	{
		{
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.audio.NoteSoundCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.audio.NoteSoundCalculator();
	}
	
	
	public   haxe.root.Array<java.lang.Object> getMidiNotes(nx3.PNote note)
	{
		nx3.PPart part = note.getVoice().getPart();
		nx3.PBar b = part.getBar();
		nx3.EKey key = part.npart.key;
		if (( key == null )) 
		{
			key = nx3.EKey.Natural;
		}
		
		nx3.EClef clef = part.npart.clef;
		if (( clef == null )) 
		{
			clef = nx3.EClef.ClefG;
		}
		
		int level = ((int) (haxe.lang.Runtime.toInt(note.nnote.get_topLevel())) );
		int tone = this.getMidiNote(key, clef, level, null, note.nnote.type);
		return new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{tone});
	}
	
	
	public   int getMidiNote(nx3.EKey key, nx3.EClef clef, int level, nx3.ESign sign, nx3.ENoteType type)
	{
		int stamton = this.levelToStamton(clef, level);
		int tone = this.toneFromKey(stamton, key);
		switch (haxe.root.Type.enumIndex(type))
		{
			case 1:
			{
				int l = ((int) (haxe.lang.Runtime.toInt(type.params.__get(0))) );
				tone = 0;
				break;
			}
			
			
			default:
			{
				{
				}
				
				break;
			}
			
		}
		
		return tone;
	}
	
	
	public   int levelToStamton(nx3.EClef clef, int level)
	{
		if (( clef == null )) 
		{
			clef = nx3.EClef.ClefG;
		}
		
		int l = ( 6 +  - (level)  );
		int cf = 0;
		switch (haxe.root.Type.enumIndex(clef))
		{
			case 2:
			{
				cf = -6;
				break;
			}
			
			
			case 1:
			{
				cf = -12;
				break;
			}
			
			
			default:
			{
				cf = 0;
				break;
			}
			
		}
		
		return ( l + cf );
	}
	
	
	public   int toneFromKey(int stamton, nx3.EKey key)
	{
		int st = ( (( stamton + 70 )) % 7 );
		int oct = ((int) (java.lang.Math.floor(( ((double) (stamton) ) / 7 ))) );
		int of = ((int) (( 12 * oct )) );
		int basenote = ( stamton - st );
		haxe.root.Array<java.lang.Object> midinotes = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{60, 62, 64, 65, 67, 69, 71});
		int mn = ( ((int) (haxe.lang.Runtime.toInt(midinotes.__get(st))) ) + ((int) (haxe.lang.Runtime.toInt(this.keyModArray(key).__get(st))) ) );
		int mno = ( mn + of );
		return ( mno + 12 );
	}
	
	
	public   int levelToOctave(nx3.EClef clef, int level)
	{
		return 0;
	}
	
	
	public   haxe.root.Array<java.lang.Object> keyModArray(nx3.EKey key)
	{
		switch (haxe.root.Type.enumIndex(key))
		{
			case 5:
			{
				return new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{0, 0, 0, 1, 0, 0, 0});
			}
			
			
			case 4:
			{
				return new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{1, 0, 0, 1, 0, 0, 0});
			}
			
			
			case 6:
			{
				return new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{0, 0, 0, 0, 0, 0, 0});
			}
			
			
			case 7:
			{
				return new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{0, 0, 0, 0, 0, 0, -1});
			}
			
			
			default:
			{
				return new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{0, 0, 0, 0, 0, 0, 0});
			}
			
		}
		
	}
	
	
	public   haxe.root.Array<java.lang.Object> getPlayableNotesFromTopVoice(nx3.NScore nscore)
	{
		nx3.EClef clef = nscore.nbars.__get(0).nparts.__get(0).clef;
		nx3.EKey key = nscore.nbars.__get(0).nparts.__get(0).key;
		haxe.root.Array<java.lang.Object> snotes = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		boolean prevNoteTie = false;
		{
			int _g = 0;
			haxe.root.Array<nx3.NBar> _g1 = nscore.nbars;
			while (( _g < _g1.length ))
			{
				nx3.NBar nbar = _g1.__get(_g);
				 ++ _g;
				nx3.NPart part = nbar.nparts.__get(0);
				nx3.NVoice voice = part.nvoices.__get(0);
				{
					int _g2 = 0;
					haxe.root.Array<nx3.NNote> _g3 = voice.nnotes;
					while (( _g2 < _g3.length ))
					{
						nx3.NNote nnote = _g3.__get(_g2);
						 ++ _g2;
						int level = nnote.get_nheads().__get(0).level;
						nx3.ESign sign = nnote.get_nheads().__get(0).sign;
						boolean tie = ( nnote.get_nheads().__get(0).tie != null );
						int midinote = this.getMidiNote(key, clef, level, sign, nnote.type);
						int length = nx3.ENoteValTools.value(nnote.value);
						if ( ! (prevNoteTie) ) 
						{
							snotes.push(((java.lang.Object) (new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"_0", "_1"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (midinote) )) ), ((java.lang.Object) (((double) (length) )) )}))) ));
						}
						 else 
						{
							java.lang.Object snote = snotes.__get(( snotes.length - 1 ));
							haxe.lang.Runtime.setField_f(snote, "_1", ((double) (( ((int) (haxe.lang.Runtime.getField_f(snote, "_1", true)) ) + length )) ));
						}
						
						prevNoteTie = tie;
					}
					
				}
				
			}
			
		}
		
		int countin = 0;
		if (( ! (( haxe.lang.Runtime.getField(nscore.configuration, "countin", true) == null )) )) 
		{
			countin = ((int) (haxe.lang.Runtime.toInt(haxe.lang.Runtime.getField(nscore.configuration, "countin", true))) );
		}
		 else 
		{
			countin = 0;
		}
		
		haxe.root.Array<java.lang.Object> countinnotes = new haxe.root.Array<java.lang.Object>();
		{
			int _g11 = 1;
			int _g4 = ( countin + 1 );
			while (( _g11 < _g4 ))
			{
				int i = _g11++;
				countinnotes.push(((java.lang.Object) (new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"_0", "_1"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (i) )) ), ((java.lang.Object) (((double) (3024) )) )}))) ));
			}
			
		}
		
		snotes = haxe.root.Lambda.array(haxe.root.Lambda.concat(countinnotes, snotes));
		return snotes;
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef810 = true;
			switch (field.hashCode())
			{
				case 110959716:
				{
					if (field.equals("getPlayableNotesFromTopVoice")) 
					{
						__temp_executeDef810 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getPlayableNotesFromTopVoice"))) );
					}
					
					break;
				}
				
				
				case 495417706:
				{
					if (field.equals("getMidiNotes")) 
					{
						__temp_executeDef810 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getMidiNotes"))) );
					}
					
					break;
				}
				
				
				case -1914363914:
				{
					if (field.equals("keyModArray")) 
					{
						__temp_executeDef810 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("keyModArray"))) );
					}
					
					break;
				}
				
				
				case 431623209:
				{
					if (field.equals("getMidiNote")) 
					{
						__temp_executeDef810 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getMidiNote"))) );
					}
					
					break;
				}
				
				
				case -909219921:
				{
					if (field.equals("levelToOctave")) 
					{
						__temp_executeDef810 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("levelToOctave"))) );
					}
					
					break;
				}
				
				
				case 1603505607:
				{
					if (field.equals("levelToStamton")) 
					{
						__temp_executeDef810 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("levelToStamton"))) );
					}
					
					break;
				}
				
				
				case 1417871491:
				{
					if (field.equals("toneFromKey")) 
					{
						__temp_executeDef810 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("toneFromKey"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef810) 
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
			boolean __temp_executeDef811 = true;
			switch (field.hashCode())
			{
				case 110959716:
				{
					if (field.equals("getPlayableNotesFromTopVoice")) 
					{
						__temp_executeDef811 = false;
						return this.getPlayableNotesFromTopVoice(((nx3.NScore) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 495417706:
				{
					if (field.equals("getMidiNotes")) 
					{
						__temp_executeDef811 = false;
						return this.getMidiNotes(((nx3.PNote) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -1914363914:
				{
					if (field.equals("keyModArray")) 
					{
						__temp_executeDef811 = false;
						return this.keyModArray(((nx3.EKey) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 431623209:
				{
					if (field.equals("getMidiNote")) 
					{
						__temp_executeDef811 = false;
						return this.getMidiNote(((nx3.EKey) (dynargs.__get(0)) ), ((nx3.EClef) (dynargs.__get(1)) ), ((int) (haxe.lang.Runtime.toInt(dynargs.__get(2))) ), ((nx3.ESign) (dynargs.__get(3)) ), ((nx3.ENoteType) (dynargs.__get(4)) ));
					}
					
					break;
				}
				
				
				case -909219921:
				{
					if (field.equals("levelToOctave")) 
					{
						__temp_executeDef811 = false;
						return this.levelToOctave(((nx3.EClef) (dynargs.__get(0)) ), ((int) (haxe.lang.Runtime.toInt(dynargs.__get(1))) ));
					}
					
					break;
				}
				
				
				case 1603505607:
				{
					if (field.equals("levelToStamton")) 
					{
						__temp_executeDef811 = false;
						return this.levelToStamton(((nx3.EClef) (dynargs.__get(0)) ), ((int) (haxe.lang.Runtime.toInt(dynargs.__get(1))) ));
					}
					
					break;
				}
				
				
				case 1417871491:
				{
					if (field.equals("toneFromKey")) 
					{
						__temp_executeDef811 = false;
						return this.toneFromKey(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ), ((nx3.EKey) (dynargs.__get(1)) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef811) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
}


