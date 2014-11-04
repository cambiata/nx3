package nx3.qs;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QuickSyntaxParser extends haxe.lang.HxObject
{
	public    QuickSyntaxParser(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    QuickSyntaxParser(java.lang.String str)
	{
		nx3.qs.QuickSyntaxParser.__hx_ctor_nx3_qs_QuickSyntaxParser(this, str);
	}
	
	
	public static   void __hx_ctor_nx3_qs_QuickSyntaxParser(nx3.qs.QuickSyntaxParser __temp_me170, java.lang.String str)
	{
		str = nx3.qs.QSyntaxTools.removeComments(str);
		str = nx3.qs.QSyntaxTools.removeSpaces(str);
		__temp_me170.str = str;
		__temp_me170.tokens = __temp_me170.parseTokens(__temp_me170.str);
		__temp_me170.qsnotes = new haxe.ds.StringMap<haxe.root.Array>();
		__temp_me170.modeparser = new nx3.qs.ModeParser(((nx3.qs.QuickSyntaxParser) (__temp_me170) ));
		__temp_me170.barparser = new nx3.qs.BarParser(((nx3.qs.QuickSyntaxParser) (__temp_me170) ));
		__temp_me170.noteparser = new nx3.qs.NoteParser(((nx3.qs.QuickSyntaxParser) (__temp_me170) ));
		__temp_me170.lyricsparser = new nx3.qs.LyricsParser(((nx3.qs.QuickSyntaxParser) (__temp_me170) ));
		__temp_me170.mode = nx3.qs.ContentMode.Notes;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.qs.QuickSyntaxParser(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.qs.QuickSyntaxParser(haxe.lang.Runtime.toString(arr.__get(0)));
	}
	
	
	public  java.lang.String str;
	
	public  haxe.root.Array<java.lang.String> tokens;
	
	public  haxe.ds.StringMap<haxe.root.Array> qsnotes;
	
	public  nx3.qs.ModeParser modeparser;
	
	public  nx3.qs.BarParser barparser;
	
	public  nx3.qs.NoteParser noteparser;
	
	public  nx3.qs.LyricsParser lyricsparser;
	
	public  nx3.qs.ContentMode mode;
	
	public   haxe.ds.StringMap<haxe.root.Array> parseToQSyntaxNotes()
	{
		{
			int _g = 0;
			haxe.root.Array<java.lang.String> _g1 = this.tokens;
			while (( _g < _g1.length ))
			{
				java.lang.String token = _g1.__get(_g);
				 ++ _g;
				java.lang.String testtoken = token;
				testtoken = this.modeparser.parse(token, this);
				if (haxe.lang.Runtime.valEq(testtoken, "")) 
				{
					continue;
				}
				
				testtoken = this.barparser.parse(token, this);
				if (haxe.lang.Runtime.valEq(testtoken, "")) 
				{
					continue;
				}
				
				{
					nx3.qs.ContentMode _g2 = this.mode;
					switch (haxe.root.Type.enumIndex(_g2))
					{
						case 0:
						{
							testtoken = this.noteparser.parse(token, this);
							if (haxe.lang.Runtime.valEq(testtoken, "")) 
							{
								continue;
							}
							
							break;
						}
						
						
						case 2:
						{
							haxe.Log.trace.__hx_invoke2_o(0.0, "LYYYRICS", 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.qs.QuickSyntaxParser", "QuickSyntaxParser.hx", "parseToQSyntaxNotes"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (77) )) )})));
							testtoken = this.lyricsparser.parse(token, this);
							break;
						}
						
						
						default:
						{
							{
							}
							
							break;
						}
						
					}
					
				}
				
			}
			
		}
		
		return this.qsnotes;
	}
	
	
	public   haxe.root.Array<java.lang.String> parseTokens(java.lang.String str)
	{
		haxe.root.Array<java.lang.String> result = new haxe.root.Array<java.lang.String>(new java.lang.String[]{});
		result = haxe.lang.StringExt.split(str, " ");
		return result;
	}
	
	
	public   void addNote(nx3.NNote nnote, java.lang.Object bpvIndex)
	{
		if (( bpvIndex == null )) 
		{
			bpvIndex = this.barparser.getBpvIndex();
		}
		
		java.lang.String bpvString = nx3.qs.QSyntaxTools.bpvToString(bpvIndex);
		if ( ! (this.qsnotes.exists(bpvString)) ) 
		{
			haxe.root.Array<nx3.NNote> value = new haxe.root.Array<nx3.NNote>();
			this.qsnotes.set(bpvString, ((haxe.root.Array) (value) ));
		}
		
		((haxe.root.Array<nx3.NNote>) (((haxe.root.Array) (this.qsnotes.get(bpvString)) )) ).push(nnote);
	}
	
	
	public   void passEvent(nx3.qs.ParserEvents event)
	{
		this.modeparser.recieveEvent(event);
		this.barparser.recieveEvent(event);
		this.noteparser.recieveEvent(event);
		switch (haxe.root.Type.enumIndex(event))
		{
			case 3:
			{
				nx3.qs.ContentMode mode = ((nx3.qs.ContentMode) (event.params.__get(0)) );
				this.mode = mode;
				break;
			}
			
			
			default:
			{
				{
				}
				
				break;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef680 = true;
			switch (field.hashCode())
			{
				case 3357091:
				{
					if (field.equals("mode")) 
					{
						__temp_executeDef680 = false;
						this.mode = ((nx3.qs.ContentMode) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 114225:
				{
					if (field.equals("str")) 
					{
						__temp_executeDef680 = false;
						this.str = haxe.lang.Runtime.toString(value);
						return value;
					}
					
					break;
				}
				
				
				case -335782637:
				{
					if (field.equals("lyricsparser")) 
					{
						__temp_executeDef680 = false;
						this.lyricsparser = ((nx3.qs.LyricsParser) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -868186726:
				{
					if (field.equals("tokens")) 
					{
						__temp_executeDef680 = false;
						this.tokens = ((haxe.root.Array<java.lang.String>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -154947951:
				{
					if (field.equals("noteparser")) 
					{
						__temp_executeDef680 = false;
						this.noteparser = ((nx3.qs.NoteParser) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 606062047:
				{
					if (field.equals("qsnotes")) 
					{
						__temp_executeDef680 = false;
						this.qsnotes = ((haxe.ds.StringMap<haxe.root.Array>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1907760626:
				{
					if (field.equals("barparser")) 
					{
						__temp_executeDef680 = false;
						this.barparser = ((nx3.qs.BarParser) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -2073596030:
				{
					if (field.equals("modeparser")) 
					{
						__temp_executeDef680 = false;
						this.modeparser = ((nx3.qs.ModeParser) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef680) 
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
			boolean __temp_executeDef681 = true;
			switch (field.hashCode())
			{
				case -974126839:
				{
					if (field.equals("passEvent")) 
					{
						__temp_executeDef681 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("passEvent"))) );
					}
					
					break;
				}
				
				
				case 114225:
				{
					if (field.equals("str")) 
					{
						__temp_executeDef681 = false;
						return this.str;
					}
					
					break;
				}
				
				
				case -1148754893:
				{
					if (field.equals("addNote")) 
					{
						__temp_executeDef681 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("addNote"))) );
					}
					
					break;
				}
				
				
				case -868186726:
				{
					if (field.equals("tokens")) 
					{
						__temp_executeDef681 = false;
						return this.tokens;
					}
					
					break;
				}
				
				
				case -654476755:
				{
					if (field.equals("parseTokens")) 
					{
						__temp_executeDef681 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("parseTokens"))) );
					}
					
					break;
				}
				
				
				case 606062047:
				{
					if (field.equals("qsnotes")) 
					{
						__temp_executeDef681 = false;
						return this.qsnotes;
					}
					
					break;
				}
				
				
				case -2128149733:
				{
					if (field.equals("parseToQSyntaxNotes")) 
					{
						__temp_executeDef681 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("parseToQSyntaxNotes"))) );
					}
					
					break;
				}
				
				
				case -2073596030:
				{
					if (field.equals("modeparser")) 
					{
						__temp_executeDef681 = false;
						return this.modeparser;
					}
					
					break;
				}
				
				
				case 3357091:
				{
					if (field.equals("mode")) 
					{
						__temp_executeDef681 = false;
						return this.mode;
					}
					
					break;
				}
				
				
				case 1907760626:
				{
					if (field.equals("barparser")) 
					{
						__temp_executeDef681 = false;
						return this.barparser;
					}
					
					break;
				}
				
				
				case -335782637:
				{
					if (field.equals("lyricsparser")) 
					{
						__temp_executeDef681 = false;
						return this.lyricsparser;
					}
					
					break;
				}
				
				
				case -154947951:
				{
					if (field.equals("noteparser")) 
					{
						__temp_executeDef681 = false;
						return this.noteparser;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef681) 
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
			boolean __temp_executeDef682 = true;
			switch (field.hashCode())
			{
				case -974126839:
				{
					if (field.equals("passEvent")) 
					{
						__temp_executeDef682 = false;
						this.passEvent(((nx3.qs.ParserEvents) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -2128149733:
				{
					if (field.equals("parseToQSyntaxNotes")) 
					{
						__temp_executeDef682 = false;
						return this.parseToQSyntaxNotes();
					}
					
					break;
				}
				
				
				case -1148754893:
				{
					if (field.equals("addNote")) 
					{
						__temp_executeDef682 = false;
						this.addNote(((nx3.NNote) (dynargs.__get(0)) ), dynargs.__get(1));
					}
					
					break;
				}
				
				
				case -654476755:
				{
					if (field.equals("parseTokens")) 
					{
						__temp_executeDef682 = false;
						return this.parseTokens(haxe.lang.Runtime.toString(dynargs.__get(0)));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef682) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("mode");
		baseArr.push("lyricsparser");
		baseArr.push("noteparser");
		baseArr.push("barparser");
		baseArr.push("modeparser");
		baseArr.push("qsnotes");
		baseArr.push("tokens");
		baseArr.push("str");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


