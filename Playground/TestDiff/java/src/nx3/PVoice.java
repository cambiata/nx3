package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PVoice extends haxe.lang.HxObject
{
	public    PVoice(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PVoice(nx3.NVoice nvoice)
	{
		nx3.PVoice.__hx_ctor_nx3_PVoice(this, nvoice);
	}
	
	
	public static   void __hx_ctor_nx3_PVoice(nx3.PVoice __temp_me118, nx3.NVoice nvoice)
	{
		__temp_me118.nvoice = nvoice;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PVoice(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PVoice(((nx3.NVoice) (arr.__get(0)) ));
	}
	
	
	public  nx3.NVoice nvoice;
	
	public   java.lang.Object iterator()
	{
		{
			haxe.root.Array<nx3.PNote> _this = this.getNotes();
			return new _Array.ArrayIterator<nx3.PNote>(((haxe.root.Array<nx3.PNote>) (_this) ));
		}
		
	}
	
	
	public  int length;
	
	public   int get_length()
	{
		return this.getNotes().length;
	}
	
	
	public  nx3.PPart part;
	
	public   nx3.PPart getPart()
	{
		return this.part;
	}
	
	
	public  haxe.root.Array<nx3.PNote> notes;
	
	public   haxe.root.Array<nx3.PNote> getNotes()
	{
		if (( this.notes != null )) 
		{
			return this.notes;
		}
		
		this.notes = new haxe.root.Array<nx3.PNote>(new nx3.PNote[]{});
		{
			int _g = 0;
			haxe.root.Array<nx3.NNote> _g1 = this.nvoice.nnotes;
			while (( _g < _g1.length ))
			{
				nx3.NNote nnote = _g1.__get(_g);
				 ++ _g;
				nx3.PNote pnote = new nx3.PNote(((nx3.NNote) (nnote) ));
				pnote.voice = this;
				this.notes.push(pnote);
			}
			
		}
		
		return this.notes;
	}
	
	
	public   nx3.PNote getNote(int idx)
	{
		if (( ( idx < 0 ) || ( idx > this.getNotes().length ) )) 
		{
			return null;
		}
		 else 
		{
			return this.getNotes().__get(idx);
		}
		
	}
	
	
	public  java.lang.Object value;
	
	public   int getValue()
	{
		if (( ! (( this.value == null )) )) 
		{
			return ((int) (haxe.lang.Runtime.toInt(this.value)) );
		}
		
		if (( this.notes == null )) 
		{
			this.getNotes();
		}
		
		this.value = 0;
		{
			int _g = 0;
			haxe.root.Array<nx3.PNote> _g1 = this.notes;
			while (( _g < _g1.length ))
			{
				nx3.PNote pnote = _g1.__get(_g);
				 ++ _g;
				{
					nx3.PVoice __temp_dynop200 = this;
					__temp_dynop200.value = ((java.lang.Object) (haxe.lang.Runtime.plus(__temp_dynop200.value, nx3.ENoteValTools.value(pnote.nnote.value))) );
				}
				
			}
			
		}
		
		return ((int) (haxe.lang.Runtime.toInt(this.value)) );
	}
	
	
	public  haxe.root.Array<nx3.PBeamgroup> beamgroups;
	
	public  haxe.root.Array<nx3.ENoteVal> beampattern;
	
	public   haxe.root.Array<nx3.PBeamgroup> getBeamgroups(haxe.root.Array<nx3.ENoteVal> pattern)
	{
		if (( ( pattern != null ) && ( pattern != this.beampattern ) )) 
		{
			this.beampattern = pattern;
			this.beamgroups = null;
		}
		
		if (( this.beamgroups != null )) 
		{
			return this.beamgroups;
		}
		
		this.beamgroups = new nx3.PVoiceBeamgroupsGenerator(((haxe.root.Array<nx3.PNote>) (this.getNotes()) ), ((haxe.root.Array<nx3.ENoteVal>) (pattern) )).getBeamgroups();
		return this.beamgroups;
	}
	
	
	public  haxe.ds.ObjectMap<nx3.PNote, java.lang.Object> pnotePositions;
	
	public   haxe.ds.ObjectMap<nx3.PNote, java.lang.Object> getNotePositions()
	{
		if (( this.pnotePositions != null )) 
		{
			return this.pnotePositions;
		}
		
		if (( this.notes == null )) 
		{
			this.getNotes();
		}
		
		this.pnotePositions = new haxe.ds.ObjectMap<nx3.PNote, java.lang.Object>();
		int pos = 0;
		{
			int _g = 0;
			haxe.root.Array<nx3.PNote> _g1 = this.notes;
			while (( _g < _g1.length ))
			{
				nx3.PNote pnote = _g1.__get(_g);
				 ++ _g;
				this.pnotePositions.set(pnote, pos);
				pos += nx3.ENoteValTools.value(pnote.nnote.value);
			}
			
		}
		
		return this.pnotePositions;
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef623 = true;
			switch (field.hashCode())
			{
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef623 = false;
						this.value = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef623 = false;
						this.length = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef623) 
			{
				return super.__hx_setField_f(field, value, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef624 = true;
			switch (field.hashCode())
			{
				case 1495859752:
				{
					if (field.equals("pnotePositions")) 
					{
						__temp_executeDef624 = false;
						this.pnotePositions = ((haxe.ds.ObjectMap<nx3.PNote, java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1033374332:
				{
					if (field.equals("nvoice")) 
					{
						__temp_executeDef624 = false;
						this.nvoice = ((nx3.NVoice) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1708317439:
				{
					if (field.equals("beampattern")) 
					{
						__temp_executeDef624 = false;
						this.beampattern = ((haxe.root.Array<nx3.ENoteVal>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef624 = false;
						this.length = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -1682690493:
				{
					if (field.equals("beamgroups")) 
					{
						__temp_executeDef624 = false;
						this.beamgroups = ((haxe.root.Array<nx3.PBeamgroup>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3433459:
				{
					if (field.equals("part")) 
					{
						__temp_executeDef624 = false;
						this.part = ((nx3.PPart) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef624 = false;
						this.value = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 105008833:
				{
					if (field.equals("notes")) 
					{
						__temp_executeDef624 = false;
						this.notes = ((haxe.root.Array<nx3.PNote>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef624) 
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
			boolean __temp_executeDef625 = true;
			switch (field.hashCode())
			{
				case 1166051554:
				{
					if (field.equals("getNotePositions")) 
					{
						__temp_executeDef625 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNotePositions"))) );
					}
					
					break;
				}
				
				
				case -1033374332:
				{
					if (field.equals("nvoice")) 
					{
						__temp_executeDef625 = false;
						return this.nvoice;
					}
					
					break;
				}
				
				
				case 1495859752:
				{
					if (field.equals("pnotePositions")) 
					{
						__temp_executeDef625 = false;
						return this.pnotePositions;
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef625 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("iterator"))) );
					}
					
					break;
				}
				
				
				case -1980438983:
				{
					if (field.equals("getBeamgroups")) 
					{
						__temp_executeDef625 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBeamgroups"))) );
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef625 = false;
						if (handleProperties) 
						{
							return this.get_length();
						}
						 else 
						{
							return this.length;
						}
						
					}
					
					break;
				}
				
				
				case -1708317439:
				{
					if (field.equals("beampattern")) 
					{
						__temp_executeDef625 = false;
						return this.beampattern;
					}
					
					break;
				}
				
				
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef625 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_length"))) );
					}
					
					break;
				}
				
				
				case -1682690493:
				{
					if (field.equals("beamgroups")) 
					{
						__temp_executeDef625 = false;
						return this.beamgroups;
					}
					
					break;
				}
				
				
				case 3433459:
				{
					if (field.equals("part")) 
					{
						__temp_executeDef625 = false;
						return this.part;
					}
					
					break;
				}
				
				
				case 1967798203:
				{
					if (field.equals("getValue")) 
					{
						__temp_executeDef625 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getValue"))) );
					}
					
					break;
				}
				
				
				case -75248535:
				{
					if (field.equals("getPart")) 
					{
						__temp_executeDef625 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getPart"))) );
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef625 = false;
						return this.value;
					}
					
					break;
				}
				
				
				case 105008833:
				{
					if (field.equals("notes")) 
					{
						__temp_executeDef625 = false;
						return this.notes;
					}
					
					break;
				}
				
				
				case -75294616:
				{
					if (field.equals("getNote")) 
					{
						__temp_executeDef625 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNote"))) );
					}
					
					break;
				}
				
				
				case 1960834315:
				{
					if (field.equals("getNotes")) 
					{
						__temp_executeDef625 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNotes"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef625) 
			{
				return super.__hx_getField(field, throwErrors, isCheck, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   double __hx_getField_f(java.lang.String field, boolean throwErrors, boolean handleProperties)
	{
		{
			boolean __temp_executeDef626 = true;
			switch (field.hashCode())
			{
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef626 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.value)) );
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef626 = false;
						if (handleProperties) 
						{
							return ((double) (this.get_length()) );
						}
						 else 
						{
							return ((double) (this.length) );
						}
						
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef626) 
			{
				return super.__hx_getField_f(field, throwErrors, handleProperties);
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
			boolean __temp_executeDef627 = true;
			switch (field.hashCode())
			{
				case 1166051554:
				{
					if (field.equals("getNotePositions")) 
					{
						__temp_executeDef627 = false;
						return this.getNotePositions();
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef627 = false;
						return this.iterator();
					}
					
					break;
				}
				
				
				case -1980438983:
				{
					if (field.equals("getBeamgroups")) 
					{
						__temp_executeDef627 = false;
						return this.getBeamgroups(((haxe.root.Array<nx3.ENoteVal>) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef627 = false;
						return this.get_length();
					}
					
					break;
				}
				
				
				case 1967798203:
				{
					if (field.equals("getValue")) 
					{
						__temp_executeDef627 = false;
						return this.getValue();
					}
					
					break;
				}
				
				
				case -75248535:
				{
					if (field.equals("getPart")) 
					{
						__temp_executeDef627 = false;
						return this.getPart();
					}
					
					break;
				}
				
				
				case -75294616:
				{
					if (field.equals("getNote")) 
					{
						__temp_executeDef627 = false;
						return this.getNote(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
				case 1960834315:
				{
					if (field.equals("getNotes")) 
					{
						__temp_executeDef627 = false;
						return this.getNotes();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef627) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("pnotePositions");
		baseArr.push("beampattern");
		baseArr.push("beamgroups");
		baseArr.push("value");
		baseArr.push("notes");
		baseArr.push("part");
		baseArr.push("length");
		baseArr.push("nvoice");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


