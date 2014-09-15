package nx3.qs;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QSNote extends nx3.NNote
{
	public    QSNote(haxe.lang.EmptyObject empty)
	{
		super(haxe.lang.EmptyObject.EMPTY);
	}
	
	
	public    QSNote(java.lang.String qsstring, java.lang.Object mode)
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.qs.QSNote.__hx_ctor_nx3_qs_QSNote(this, qsstring, mode);
	}
	
	
	public static   void __hx_ctor_nx3_qs_QSNote(nx3.qs.QSNote __temp_me101, java.lang.String qsstring, java.lang.Object mode)
	{
		__temp_me101.headstrings = new haxe.root.Array<java.lang.String>(new java.lang.String[]{});
		while (( haxe.lang.StringExt.indexOf(qsstring, " ", null) > -1 ))
		{
			haxe.root.StringTools.replace(qsstring, " ", "");
		}
		
		__temp_me101.modestr = "";
		__temp_me101.headstrings = new haxe.root.Array<java.lang.String>(new java.lang.String[]{});
		qsstring = qsstring.trim();
		if (haxe.lang.Runtime.valEq(qsstring, "")) 
		{
			throw haxe.lang.HaxeException.wrap("qsString could not be empty ");
		}
		
		__temp_me101.qsstring = qsstring;
		__temp_me101.findModeString();
		__temp_me101.findHeadstrings();
		nx3.ENoteType newnote = null;
		{
			nx3.qs.QSNotemode _g = __temp_me101.mode;
			newnote = __temp_me101.createNotePause();
		}
		
		nx3.NNote.__hx_ctor_nx3_NNote(__temp_me101, null, null, null, null);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.qs.QSNote(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.qs.QSNote(haxe.lang.Runtime.toString(arr.__get(0)), ((java.lang.Object) (arr.__get(1)) ));
	}
	
	
	public  java.lang.String modestr;
	
	public  java.lang.String qsstring;
	
	public   nx3.ENoteType createNotePause()
	{
		java.lang.String firstheadstring = this.headstrings.__get(0);
		if (cx.StrTools.has(firstheadstring, "p")) 
		{
			return this.createPause(firstheadstring);
		}
		
		haxe.root.Array<nx3.NHead> heads = new haxe.root.Array<nx3.NHead>();
		{
			int _g = 0;
			haxe.root.Array<java.lang.String> _g1 = this.headstrings;
			while (( _g < _g1.length ))
			{
				java.lang.String headstring = _g1.__get(_g);
				 ++ _g;
				nx3.NHead head = this.createHead(headstring);
				heads.push(head);
			}
			
		}
		
		return nx3.ENoteType.Note(heads, null, null, null);
	}
	
	
	public   nx3.NHead createHead(java.lang.String str)
	{
		return new nx3.NHead(((nx3.EHeadType) (null) ), ((java.lang.Object) (0) ), ((nx3.ESign) (null) ), ((nx3.ETie) (null) ), ((nx3.ETie) (null) ));
	}
	
	
	public   nx3.ENoteType createPause(java.lang.String str)
	{
		java.lang.String firstheadstring = this.headstrings.__get(0);
		int level = 0;
		if (cx.StrTools.has(firstheadstring, "++")) 
		{
			level = 4;
		}
		 else 
		{
			if (cx.StrTools.has(firstheadstring, "++")) 
			{
				level = 4;
			}
			 else 
			{
				if (cx.StrTools.has(firstheadstring, "+")) 
				{
					level = 2;
				}
				 else 
				{
					if (cx.StrTools.has(firstheadstring, "-")) 
					{
						level = -2;
					}
					
				}
				
			}
			
		}
		
		return nx3.ENoteType.Pause(level);
	}
	
	
	public  haxe.root.Array<java.lang.String> headstrings;
	
	public  nx3.qs.QSNotemode mode;
	
	public   void findHeadstrings()
	{
		haxe.root.Array<java.lang.String> arr = haxe.lang.StringExt.split(this.qsstring, ",");
		{
			int _g = 0;
			while (( _g < arr.length ))
			{
				java.lang.String ns = arr.__get(_g);
				 ++ _g;
				this.headstrings.push(ns.trim());
			}
			
		}
		
	}
	
	
	public   void findModeString()
	{
		haxe.root.Array<java.lang.String> arr = haxe.lang.StringExt.split(this.qsstring, ":");
		this.mode = nx3.qs.QSNotemode.NotePause;
		if (( arr.length > 1 )) 
		{
			java.lang.String modestr = arr.shift();
			{
				java.lang.String __temp_svar314 = haxe.lang.Runtime.toString((modestr));
				boolean __temp_executeDef315 = true;
				switch (__temp_svar314.hashCode())
				{
					case 107653:
					{
						if (__temp_svar314.equals("lyr")) 
						{
							__temp_executeDef315 = false;
							this.mode = nx3.qs.QSNotemode.Lyric;
						}
						
						break;
					}
					
					
					case 115056:
					{
						if (__temp_svar314.equals("tpl")) 
						{
							__temp_executeDef315 = false;
							this.mode = nx3.qs.QSNotemode.Tpl;
						}
						
						break;
					}
					
					
				}
				
				if (__temp_executeDef315) 
				{
					this.mode = nx3.qs.QSNotemode.NotePause;
				}
				
			}
			
			this.qsstring = arr.join(":");
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef316 = true;
			switch (field.hashCode())
			{
				case 3357091:
				{
					if (field.equals("mode")) 
					{
						__temp_executeDef316 = false;
						this.mode = ((nx3.qs.QSNotemode) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1226964398:
				{
					if (field.equals("modestr")) 
					{
						__temp_executeDef316 = false;
						this.modestr = haxe.lang.Runtime.toString(value);
						return value;
					}
					
					break;
				}
				
				
				case 798783650:
				{
					if (field.equals("headstrings")) 
					{
						__temp_executeDef316 = false;
						this.headstrings = ((haxe.root.Array<java.lang.String>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1755761843:
				{
					if (field.equals("qsstring")) 
					{
						__temp_executeDef316 = false;
						this.qsstring = haxe.lang.Runtime.toString(value);
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef316) 
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
			boolean __temp_executeDef317 = true;
			switch (field.hashCode())
			{
				case 344931885:
				{
					if (field.equals("findModeString")) 
					{
						__temp_executeDef317 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("findModeString"))) );
					}
					
					break;
				}
				
				
				case 1226964398:
				{
					if (field.equals("modestr")) 
					{
						__temp_executeDef317 = false;
						return this.modestr;
					}
					
					break;
				}
				
				
				case -2112123607:
				{
					if (field.equals("findHeadstrings")) 
					{
						__temp_executeDef317 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("findHeadstrings"))) );
					}
					
					break;
				}
				
				
				case 1755761843:
				{
					if (field.equals("qsstring")) 
					{
						__temp_executeDef317 = false;
						return this.qsstring;
					}
					
					break;
				}
				
				
				case 3357091:
				{
					if (field.equals("mode")) 
					{
						__temp_executeDef317 = false;
						return this.mode;
					}
					
					break;
				}
				
				
				case 301434760:
				{
					if (field.equals("createNotePause")) 
					{
						__temp_executeDef317 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("createNotePause"))) );
					}
					
					break;
				}
				
				
				case 798783650:
				{
					if (field.equals("headstrings")) 
					{
						__temp_executeDef317 = false;
						return this.headstrings;
					}
					
					break;
				}
				
				
				case 1368851708:
				{
					if (field.equals("createHead")) 
					{
						__temp_executeDef317 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("createHead"))) );
					}
					
					break;
				}
				
				
				case -507981222:
				{
					if (field.equals("createPause")) 
					{
						__temp_executeDef317 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("createPause"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef317) 
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
			boolean __temp_executeDef318 = true;
			switch (field.hashCode())
			{
				case 344931885:
				{
					if (field.equals("findModeString")) 
					{
						__temp_executeDef318 = false;
						this.findModeString();
					}
					
					break;
				}
				
				
				case 301434760:
				{
					if (field.equals("createNotePause")) 
					{
						__temp_executeDef318 = false;
						return this.createNotePause();
					}
					
					break;
				}
				
				
				case -2112123607:
				{
					if (field.equals("findHeadstrings")) 
					{
						__temp_executeDef318 = false;
						this.findHeadstrings();
					}
					
					break;
				}
				
				
				case 1368851708:
				{
					if (field.equals("createHead")) 
					{
						__temp_executeDef318 = false;
						return this.createHead(haxe.lang.Runtime.toString(dynargs.__get(0)));
					}
					
					break;
				}
				
				
				case -507981222:
				{
					if (field.equals("createPause")) 
					{
						__temp_executeDef318 = false;
						return this.createPause(haxe.lang.Runtime.toString(dynargs.__get(0)));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef318) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("mode");
		baseArr.push("headstrings");
		baseArr.push("qsstring");
		baseArr.push("modestr");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


