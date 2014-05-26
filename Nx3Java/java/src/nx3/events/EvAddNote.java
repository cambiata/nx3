package nx3.events;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class EvAddNote extends haxe.lang.HxObject implements nx3.events.IEvent
{
	public    EvAddNote(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    EvAddNote(java.lang.Object ref, haxe.root.Array<nx3.NNote> notes)
	{
		nx3.events.EvAddNote.__hx_ctor_nx3_events_EvAddNote(this, ref, notes);
	}
	
	
	public static   void __hx_ctor_nx3_events_EvAddNote(nx3.events.EvAddNote __temp_me176, java.lang.Object ref, haxe.root.Array<nx3.NNote> notes)
	{
		__temp_me176.status = false;
		__temp_me176.ref = ref;
		__temp_me176.notes = notes;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.events.EvAddNote(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.events.EvAddNote(((java.lang.Object) (arr.__get(0)) ), ((haxe.root.Array<nx3.NNote>) (arr.__get(1)) ));
	}
	
	
	public  java.lang.Object ref;
	
	public  haxe.root.Array<nx3.NNote> notes;
	
	public  boolean status;
	
	public   void doEvent()
	{
		if (( this.status == true )) 
		{
			throw haxe.lang.HaxeException.wrap("Cant perform doEvent() twice");
		}
		
		if (nx3.NRefTools.checkRefNoteError(this.ref)) 
		{
			throw haxe.lang.HaxeException.wrap("Reference note error");
		}
		
		haxe.root.Array<nx3.NNote> newnotes = new haxe.root.Array<nx3.NNote>(new nx3.NNote[]{});
		nx3.NNote tnote = ((nx3.NScore) (haxe.lang.Runtime.getField(this.ref, "score", true)) ).getNBar(((int) (haxe.lang.Runtime.getField_f(this.ref, "bar", true)) )).getNPart(((int) (haxe.lang.Runtime.getField_f(this.ref, "part", true)) )).getNVoice(((int) (haxe.lang.Runtime.getField_f(this.ref, "voice", true)) )).getNNote(((int) (haxe.lang.Runtime.getField_f(this.ref, "note", true)) ));
		nx3.NVoice tvoice = tnote.nvoice;
		int tnoteidx = ( tvoice.nnotes.indexOf(tnote, null) + 1 );
		{
			int _g = 0;
			haxe.root.Array<nx3.NNote> _g1 = this.notes;
			while (( _g < _g1.length ))
			{
				nx3.NNote note = _g1.__get(_g);
				 ++ _g;
				nx3.NNote newnote = nx3.xml.NoteXML.clone(note);
				tvoice.nnotes.insert(tnoteidx, newnote);
				newnote.nvoice = tvoice;
				newnotes.push(newnote);
				tnoteidx++;
			}
			
		}
		
		this.notes = newnotes;
		this.status = true;
	}
	
	
	public   void undoEvent()
	{
		if (( this.status == false )) 
		{
			throw haxe.lang.HaxeException.wrap("Cant perform undoEvent() twice");
		}
		
		haxe.ds.ObjectMap<nx3.NVoice, java.lang.Object> refs = new haxe.ds.ObjectMap<nx3.NVoice, java.lang.Object>();
		{
			int _g = 0;
			haxe.root.Array<nx3.NNote> _g1 = this.notes;
			while (( _g < _g1.length ))
			{
				nx3.NNote note = _g1.__get(_g);
				 ++ _g;
				if (( note == null )) 
				{
					throw haxe.lang.HaxeException.wrap("Note to delete can not be null");
				}
				
				nx3.NVoice voice = note.nvoice;
				if (( voice == null )) 
				{
					throw haxe.lang.HaxeException.wrap("Note to delete does not seem to belong to the current score voice");
				}
				
				voice.nnotes.remove(note);
			}
			
		}
		
		this.status = false;
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef823 = true;
			switch (field.hashCode())
			{
				case 112787:
				{
					if (field.equals("ref")) 
					{
						__temp_executeDef823 = false;
						this.ref = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef823) 
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
			boolean __temp_executeDef824 = true;
			switch (field.hashCode())
			{
				case -892481550:
				{
					if (field.equals("status")) 
					{
						__temp_executeDef824 = false;
						this.status = haxe.lang.Runtime.toBool(value);
						return value;
					}
					
					break;
				}
				
				
				case 112787:
				{
					if (field.equals("ref")) 
					{
						__temp_executeDef824 = false;
						this.ref = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 105008833:
				{
					if (field.equals("notes")) 
					{
						__temp_executeDef824 = false;
						this.notes = ((haxe.root.Array<nx3.NNote>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef824) 
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
			boolean __temp_executeDef825 = true;
			switch (field.hashCode())
			{
				case -781936618:
				{
					if (field.equals("undoEvent")) 
					{
						__temp_executeDef825 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("undoEvent"))) );
					}
					
					break;
				}
				
				
				case 112787:
				{
					if (field.equals("ref")) 
					{
						__temp_executeDef825 = false;
						return this.ref;
					}
					
					break;
				}
				
				
				case 1801229519:
				{
					if (field.equals("doEvent")) 
					{
						__temp_executeDef825 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("doEvent"))) );
					}
					
					break;
				}
				
				
				case 105008833:
				{
					if (field.equals("notes")) 
					{
						__temp_executeDef825 = false;
						return this.notes;
					}
					
					break;
				}
				
				
				case -892481550:
				{
					if (field.equals("status")) 
					{
						__temp_executeDef825 = false;
						return this.status;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef825) 
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
			boolean __temp_executeDef826 = true;
			switch (field.hashCode())
			{
				case 112787:
				{
					if (field.equals("ref")) 
					{
						__temp_executeDef826 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.ref)) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef826) 
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
			boolean __temp_executeDef827 = true;
			switch (field.hashCode())
			{
				case -781936618:
				{
					if (field.equals("undoEvent")) 
					{
						__temp_executeDef827 = false;
						this.undoEvent();
					}
					
					break;
				}
				
				
				case 1801229519:
				{
					if (field.equals("doEvent")) 
					{
						__temp_executeDef827 = false;
						this.doEvent();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef827) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("status");
		baseArr.push("notes");
		baseArr.push("ref");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


