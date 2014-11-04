package nx3.qs;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NoteParser extends nx3.qs.BaseParser
{
	public    NoteParser(haxe.lang.EmptyObject empty)
	{
		super(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public    NoteParser(nx3.qs.QuickSyntaxParser parser)
	{
		super(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
		nx3.qs.NoteParser.__hx_ctor_nx3_qs_NoteParser(this, parser);
	}
	
	
	public static   void __hx_ctor_nx3_qs_NoteParser(nx3.qs.NoteParser __temp_me167, nx3.qs.QuickSyntaxParser parser)
	{
		nx3.qs.BaseParser.__hx_ctor_nx3_qs_BaseParser(__temp_me167, parser);
		__temp_me167.guessOctave = false;
		__temp_me167.notelevels = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		__temp_me167.notesigns = new haxe.root.Array<nx3.ESign>(new nx3.ESign[]{});
		__temp_me167.notevalue = null;
		__temp_me167.prevlevel = 3;
		__temp_me167.prevlevels = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{3});
		__temp_me167.prevsigns = new haxe.root.Array<nx3.ESign>(new nx3.ESign[]{nx3.ESign.None});
		__temp_me167.prevvalue = nx3.ENoteVal.Nv4;
		__temp_me167.clefAdjust = 0;
		__temp_me167.octAdjust = 0;
		__temp_me167.pause = false;
		__temp_me167.pauselevel = 0;
		__temp_me167.tie = false;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.qs.NoteParser(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.qs.NoteParser(((nx3.qs.QuickSyntaxParser) (arr.__get(0)) ));
	}
	
	
	public  haxe.root.Array<java.lang.Object> notelevels;
	
	public  nx3.ENoteVal notevalue;
	
	public  haxe.root.Array<nx3.ESign> notesigns;
	
	public  haxe.root.Array<java.lang.Object> prevlevels;
	
	public  nx3.ENoteVal prevvalue;
	
	public  haxe.root.Array<nx3.ESign> prevsigns;
	
	public  int clefAdjust;
	
	public  int octAdjust;
	
	public  boolean pause;
	
	public  int pauselevel;
	
	public  int prevlevel;
	
	public  boolean tie;
	
	public  boolean guessOctave;
	
	@Override public   void createFunctions()
	{
		haxe.root.Array<nx3.qs.NoteParser> _g = new haxe.root.Array<nx3.qs.NoteParser>(new nx3.qs.NoteParser[]{this});
		this.functions.set("c#", new nx3.qs.NoteParser_createFunctions_60__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("cB", new nx3.qs.NoteParser_createFunctions_61__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("cN", new nx3.qs.NoteParser_createFunctions_62__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("c", new nx3.qs.NoteParser_createFunctions_63__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("d#", new nx3.qs.NoteParser_createFunctions_65__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("dB", new nx3.qs.NoteParser_createFunctions_66__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("dN", new nx3.qs.NoteParser_createFunctions_67__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("d", new nx3.qs.NoteParser_createFunctions_68__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("e#", new nx3.qs.NoteParser_createFunctions_70__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("eB", new nx3.qs.NoteParser_createFunctions_71__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("eN", new nx3.qs.NoteParser_createFunctions_72__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("e", new nx3.qs.NoteParser_createFunctions_73__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("f#", new nx3.qs.NoteParser_createFunctions_75__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("fB", new nx3.qs.NoteParser_createFunctions_76__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("fN", new nx3.qs.NoteParser_createFunctions_77__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("f", new nx3.qs.NoteParser_createFunctions_78__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("g#", new nx3.qs.NoteParser_createFunctions_80__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("gB", new nx3.qs.NoteParser_createFunctions_81__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("gN", new nx3.qs.NoteParser_createFunctions_82__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("g", new nx3.qs.NoteParser_createFunctions_83__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("a#", new nx3.qs.NoteParser_createFunctions_85__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("aB", new nx3.qs.NoteParser_createFunctions_86__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("aN", new nx3.qs.NoteParser_createFunctions_87__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("a", new nx3.qs.NoteParser_createFunctions_88__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("b#", new nx3.qs.NoteParser_createFunctions_90__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("bB", new nx3.qs.NoteParser_createFunctions_91__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("bN", new nx3.qs.NoteParser_createFunctions_92__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("b", new nx3.qs.NoteParser_createFunctions_93__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("1.", new nx3.qs.NoteParser_createFunctions_95__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("1", new nx3.qs.NoteParser_createFunctions_96__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("2.", new nx3.qs.NoteParser_createFunctions_97__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("2", new nx3.qs.NoteParser_createFunctions_98__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("4.", new nx3.qs.NoteParser_createFunctions_99__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("4", new nx3.qs.NoteParser_createFunctions_100__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("8.", new nx3.qs.NoteParser_createFunctions_101__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("8", new nx3.qs.NoteParser_createFunctions_102__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("16.", new nx3.qs.NoteParser_createFunctions_103__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("16", new nx3.qs.NoteParser_createFunctions_104__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("_", new nx3.qs.NoteParser_createFunctions_106__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("=", new nx3.qs.NoteParser_createFunctions_108__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("+", new nx3.qs.NoteParser_createFunctions_109__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("++", new nx3.qs.NoteParser_createFunctions_110__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("-", new nx3.qs.NoteParser_createFunctions_111__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("--", new nx3.qs.NoteParser_createFunctions_112__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("p", new nx3.qs.NoteParser_createFunctions_114__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("p+", new nx3.qs.NoteParser_createFunctions_115__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
		this.functions.set("p-", new nx3.qs.NoteParser_createFunctions_116__Fun(((haxe.root.Array<nx3.qs.NoteParser>) (_g) )));
	}
	
	
	public   void pushNotelevel(int value)
	{
		if (this.guessOctave) 
		{
			int delta = ( ( value + this.octAdjust ) - this.prevlevel );
			haxe.Log.trace.__hx_invoke2_o(0.0, new haxe.root.Array(new java.lang.Object[]{( value + this.octAdjust ), this.prevlevel, ( ( value + this.octAdjust ) - this.prevlevel )}), 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.qs.NoteParser", "NoteParser.hx", "pushNotelevel"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (128) )) )})));
			if (( delta >= 4 )) 
			{
				this.octAdjust = ( this.octAdjust - 7 );
			}
			
			if (( delta <= -4 )) 
			{
				this.octAdjust = ( this.octAdjust + 7 );
			}
			
		}
		
		this.notelevels.push(value);
	}
	
	
	@Override public   void tokenFinished(java.lang.String originaltoken)
	{
		if (haxe.root.Lambda.has(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"+", "++", "-", "--", "="}), originaltoken)) 
		{
			return ;
		}
		
		if (( this.notelevels.length < 1 )) 
		{
			this.notelevels = ((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (this.prevlevels.copy()) )) );
		}
		
		if (( this.notesigns.length < 1 )) 
		{
			this.notesigns = this.prevsigns.copy();
		}
		
		if (( this.notevalue == null )) 
		{
			this.notevalue = this.prevvalue;
		}
		
		nx3.ENoteVal val = this.notevalue;
		nx3.NNote nnote = null;
		if (this.pause) 
		{
			nnote = new nx3.NNote(((nx3.ENoteType) (nx3.ENoteType.Pause(this.pauselevel)) ), ((haxe.root.Array<nx3.NHead>) (null) ), ((nx3.ENoteVal) (val) ), ((nx3.EDirectionUAD) (null) ));
			this.pause = false;
		}
		 else 
		{
			haxe.root.Array<nx3.NHead> nheads = new haxe.root.Array<nx3.NHead>(new nx3.NHead[]{});
			{
				int _g1 = 0;
				int _g = this.notelevels.length;
				while (( _g1 < _g ))
				{
					int i = _g1++;
					int level = ( ( ((int) (haxe.lang.Runtime.toInt(this.notelevels.__get(i))) ) + this.octAdjust ) + this.clefAdjust );
					nx3.ESign sign = this.notesigns.__get(i);
					nx3.ETie tie = null;
					if (this.tie) 
					{
						tie = nx3.ETie.Tie(nx3.EDirectionUAD.Auto, 0);
					}
					 else 
					{
						tie = null;
					}
					
					nheads.push(new nx3.NHead(((nx3.EHeadType) (null) ), ((java.lang.Object) (level) ), ((nx3.ESign) (sign) ), ((nx3.ETie) (tie) ), ((nx3.ETie) (null) )));
					this.prevlevel = level;
				}
				
			}
			
			nnote = new nx3.NNote(((nx3.ENoteType) (null) ), ((haxe.root.Array<nx3.NHead>) (nheads) ), ((nx3.ENoteVal) (val) ), ((nx3.EDirectionUAD) (null) ));
		}
		
		this.builder.addNote(nnote, null);
		this.prevlevels = ((haxe.root.Array<java.lang.Object>) (((haxe.root.Array) (this.notelevels.copy()) )) );
		this.prevsigns = this.notesigns.copy();
		this.prevvalue = this.notevalue;
		this.notelevels = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		this.notesigns = new haxe.root.Array<nx3.ESign>(new nx3.ESign[]{});
		this.notevalue = null;
		this.tie = false;
	}
	
	
	@Override public   void recieveEvent(nx3.qs.ParserEvents event)
	{
		switch (haxe.root.Type.enumIndex(event))
		{
			case 1:
			{
				int octave = ((int) (haxe.lang.Runtime.toInt(event.params.__get(0))) );
				this.octAdjust = octave;
				break;
			}
			
			
			case 2:
			{
				nx3.ENoteVal val = ((nx3.ENoteVal) (event.params.__get(0)) );
				this.notevalue = val;
				break;
			}
			
			
			case 0:
			{
				boolean mode = haxe.lang.Runtime.toBool(event.params.__get(0));
				this.guessOctave = mode;
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
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef666 = true;
			switch (field.hashCode())
			{
				case -829857487:
				{
					if (field.equals("prevlevel")) 
					{
						__temp_executeDef666 = false;
						this.prevlevel = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1988753671:
				{
					if (field.equals("clefAdjust")) 
					{
						__temp_executeDef666 = false;
						this.clefAdjust = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -35602610:
				{
					if (field.equals("pauselevel")) 
					{
						__temp_executeDef666 = false;
						this.pauselevel = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -491685681:
				{
					if (field.equals("octAdjust")) 
					{
						__temp_executeDef666 = false;
						this.octAdjust = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef666) 
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
			boolean __temp_executeDef667 = true;
			switch (field.hashCode())
			{
				case 111171175:
				{
					if (field.equals("guessOctave")) 
					{
						__temp_executeDef667 = false;
						this.guessOctave = haxe.lang.Runtime.toBool(value);
						return value;
					}
					
					break;
				}
				
				
				case -265664543:
				{
					if (field.equals("notelevels")) 
					{
						__temp_executeDef667 = false;
						this.notelevels = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 114832:
				{
					if (field.equals("tie")) 
					{
						__temp_executeDef667 = false;
						this.tie = haxe.lang.Runtime.toBool(value);
						return value;
					}
					
					break;
				}
				
				
				case 1801652415:
				{
					if (field.equals("notevalue")) 
					{
						__temp_executeDef667 = false;
						this.notevalue = ((nx3.ENoteVal) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -829857487:
				{
					if (field.equals("prevlevel")) 
					{
						__temp_executeDef667 = false;
						this.prevlevel = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 1799115172:
				{
					if (field.equals("notesigns")) 
					{
						__temp_executeDef667 = false;
						this.notesigns = ((haxe.root.Array<nx3.ESign>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -35602610:
				{
					if (field.equals("pauselevel")) 
					{
						__temp_executeDef667 = false;
						this.pauselevel = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 44221794:
				{
					if (field.equals("prevlevels")) 
					{
						__temp_executeDef667 = false;
						this.prevlevels = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 106440182:
				{
					if (field.equals("pause")) 
					{
						__temp_executeDef667 = false;
						this.pause = haxe.lang.Runtime.toBool(value);
						return value;
					}
					
					break;
				}
				
				
				case -820750562:
				{
					if (field.equals("prevvalue")) 
					{
						__temp_executeDef667 = false;
						this.prevvalue = ((nx3.ENoteVal) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -491685681:
				{
					if (field.equals("octAdjust")) 
					{
						__temp_executeDef667 = false;
						this.octAdjust = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -823287805:
				{
					if (field.equals("prevsigns")) 
					{
						__temp_executeDef667 = false;
						this.prevsigns = ((haxe.root.Array<nx3.ESign>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1988753671:
				{
					if (field.equals("clefAdjust")) 
					{
						__temp_executeDef667 = false;
						this.clefAdjust = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef667) 
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
			boolean __temp_executeDef668 = true;
			switch (field.hashCode())
			{
				case -2111738369:
				{
					if (field.equals("recieveEvent")) 
					{
						__temp_executeDef668 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("recieveEvent"))) );
					}
					
					break;
				}
				
				
				case -265664543:
				{
					if (field.equals("notelevels")) 
					{
						__temp_executeDef668 = false;
						return this.notelevels;
					}
					
					break;
				}
				
				
				case -1760504437:
				{
					if (field.equals("tokenFinished")) 
					{
						__temp_executeDef668 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("tokenFinished"))) );
					}
					
					break;
				}
				
				
				case 1801652415:
				{
					if (field.equals("notevalue")) 
					{
						__temp_executeDef668 = false;
						return this.notevalue;
					}
					
					break;
				}
				
				
				case -530587432:
				{
					if (field.equals("pushNotelevel")) 
					{
						__temp_executeDef668 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("pushNotelevel"))) );
					}
					
					break;
				}
				
				
				case 1799115172:
				{
					if (field.equals("notesigns")) 
					{
						__temp_executeDef668 = false;
						return this.notesigns;
					}
					
					break;
				}
				
				
				case -1605705217:
				{
					if (field.equals("createFunctions")) 
					{
						__temp_executeDef668 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("createFunctions"))) );
					}
					
					break;
				}
				
				
				case 44221794:
				{
					if (field.equals("prevlevels")) 
					{
						__temp_executeDef668 = false;
						return this.prevlevels;
					}
					
					break;
				}
				
				
				case 111171175:
				{
					if (field.equals("guessOctave")) 
					{
						__temp_executeDef668 = false;
						return this.guessOctave;
					}
					
					break;
				}
				
				
				case -820750562:
				{
					if (field.equals("prevvalue")) 
					{
						__temp_executeDef668 = false;
						return this.prevvalue;
					}
					
					break;
				}
				
				
				case 114832:
				{
					if (field.equals("tie")) 
					{
						__temp_executeDef668 = false;
						return this.tie;
					}
					
					break;
				}
				
				
				case -823287805:
				{
					if (field.equals("prevsigns")) 
					{
						__temp_executeDef668 = false;
						return this.prevsigns;
					}
					
					break;
				}
				
				
				case -829857487:
				{
					if (field.equals("prevlevel")) 
					{
						__temp_executeDef668 = false;
						return this.prevlevel;
					}
					
					break;
				}
				
				
				case -1988753671:
				{
					if (field.equals("clefAdjust")) 
					{
						__temp_executeDef668 = false;
						return this.clefAdjust;
					}
					
					break;
				}
				
				
				case -35602610:
				{
					if (field.equals("pauselevel")) 
					{
						__temp_executeDef668 = false;
						return this.pauselevel;
					}
					
					break;
				}
				
				
				case -491685681:
				{
					if (field.equals("octAdjust")) 
					{
						__temp_executeDef668 = false;
						return this.octAdjust;
					}
					
					break;
				}
				
				
				case 106440182:
				{
					if (field.equals("pause")) 
					{
						__temp_executeDef668 = false;
						return this.pause;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef668) 
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
			boolean __temp_executeDef669 = true;
			switch (field.hashCode())
			{
				case -829857487:
				{
					if (field.equals("prevlevel")) 
					{
						__temp_executeDef669 = false;
						return ((double) (this.prevlevel) );
					}
					
					break;
				}
				
				
				case -1988753671:
				{
					if (field.equals("clefAdjust")) 
					{
						__temp_executeDef669 = false;
						return ((double) (this.clefAdjust) );
					}
					
					break;
				}
				
				
				case -35602610:
				{
					if (field.equals("pauselevel")) 
					{
						__temp_executeDef669 = false;
						return ((double) (this.pauselevel) );
					}
					
					break;
				}
				
				
				case -491685681:
				{
					if (field.equals("octAdjust")) 
					{
						__temp_executeDef669 = false;
						return ((double) (this.octAdjust) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef669) 
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
			int __temp_hash671 = field.hashCode();
			boolean __temp_executeDef670 = true;
			switch (__temp_hash671)
			{
				case -2111738369:case -1760504437:case -1605705217:
				{
					if (( (( ( __temp_hash671 == -2111738369 ) && field.equals("recieveEvent") )) || ( (( ( __temp_hash671 == -1760504437 ) && field.equals("tokenFinished") )) || field.equals("createFunctions") ) )) 
					{
						__temp_executeDef670 = false;
						return haxe.lang.Runtime.slowCallField(this, field, dynargs);
					}
					
					break;
				}
				
				
				case -530587432:
				{
					if (field.equals("pushNotelevel")) 
					{
						__temp_executeDef670 = false;
						this.pushNotelevel(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef670) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("guessOctave");
		baseArr.push("tie");
		baseArr.push("prevlevel");
		baseArr.push("pauselevel");
		baseArr.push("pause");
		baseArr.push("octAdjust");
		baseArr.push("clefAdjust");
		baseArr.push("prevsigns");
		baseArr.push("prevvalue");
		baseArr.push("prevlevels");
		baseArr.push("notesigns");
		baseArr.push("notevalue");
		baseArr.push("notelevels");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


