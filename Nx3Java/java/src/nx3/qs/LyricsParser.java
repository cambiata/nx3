package nx3.qs;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class LyricsParser extends nx3.qs.BaseParser
{
	public    LyricsParser(haxe.lang.EmptyObject empty)
	{
		super(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public    LyricsParser(nx3.qs.QuickSyntaxParser builder)
	{
		super(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
		nx3.qs.LyricsParser.__hx_ctor_nx3_qs_LyricsParser(this, builder);
	}
	
	
	public static   void __hx_ctor_nx3_qs_LyricsParser(nx3.qs.LyricsParser __temp_me189, nx3.qs.QuickSyntaxParser builder)
	{
		nx3.qs.BaseParser.__hx_ctor_nx3_qs_BaseParser(__temp_me189, builder);
		__temp_me189.notevalue = nx3.ENoteVal.Nv4;
		__temp_me189.flagWord = false;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.qs.LyricsParser(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.qs.LyricsParser(((nx3.qs.QuickSyntaxParser) (arr.__get(0)) ));
	}
	
	
	public  nx3.ENoteVal notevalue;
	
	public  boolean flagWord;
	
	@Override public   void createFunctions()
	{
		haxe.root.Array<nx3.qs.LyricsParser> _g = new haxe.root.Array<nx3.qs.LyricsParser>(new nx3.qs.LyricsParser[]{this});
		this.functions.set("1.", new nx3.qs.LyricsParser_createFunctions_26__Fun(((haxe.root.Array<nx3.qs.LyricsParser>) (_g) )));
		this.functions.set("1", new nx3.qs.LyricsParser_createFunctions_27__Fun(((haxe.root.Array<nx3.qs.LyricsParser>) (_g) )));
		this.functions.set("2.", new nx3.qs.LyricsParser_createFunctions_28__Fun(((haxe.root.Array<nx3.qs.LyricsParser>) (_g) )));
		this.functions.set("2", new nx3.qs.LyricsParser_createFunctions_29__Fun(((haxe.root.Array<nx3.qs.LyricsParser>) (_g) )));
		this.functions.set("4.", new nx3.qs.LyricsParser_createFunctions_30__Fun(((haxe.root.Array<nx3.qs.LyricsParser>) (_g) )));
		this.functions.set("4", new nx3.qs.LyricsParser_createFunctions_31__Fun(((haxe.root.Array<nx3.qs.LyricsParser>) (_g) )));
		this.functions.set("8.", new nx3.qs.LyricsParser_createFunctions_32__Fun(((haxe.root.Array<nx3.qs.LyricsParser>) (_g) )));
		this.functions.set("8", new nx3.qs.LyricsParser_createFunctions_33__Fun(((haxe.root.Array<nx3.qs.LyricsParser>) (_g) )));
		this.functions.set("16.", new nx3.qs.LyricsParser_createFunctions_34__Fun(((haxe.root.Array<nx3.qs.LyricsParser>) (_g) )));
		this.functions.set("16", new nx3.qs.LyricsParser_createFunctions_35__Fun(((haxe.root.Array<nx3.qs.LyricsParser>) (_g) )));
		this.functions.set("__ALL__", new nx3.qs.LyricsParser_createFunctions_38__Fun(((haxe.root.Array<nx3.qs.LyricsParser>) (_g) )));
	}
	
	
	@Override public   void tokenFinished(java.lang.String originaltoken)
	{
		if (this.flagWord) 
		{
			nx3.NNote nnote = new nx3.NNote(((nx3.ENoteType) (nx3.ENoteType.Lyric(originaltoken, null, null, null)) ), ((haxe.root.Array<nx3.NHead>) (null) ), ((nx3.ENoteVal) (this.notevalue) ), ((nx3.EDirectionUAD) (null) ));
			this.builder.addNote(nnote, null);
			this.flagWord = false;
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef854 = true;
			switch (field.hashCode())
			{
				case 1613997206:
				{
					if (field.equals("flagWord")) 
					{
						__temp_executeDef854 = false;
						this.flagWord = haxe.lang.Runtime.toBool(value);
						return value;
					}
					
					break;
				}
				
				
				case 1801652415:
				{
					if (field.equals("notevalue")) 
					{
						__temp_executeDef854 = false;
						this.notevalue = ((nx3.ENoteVal) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef854) 
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
			boolean __temp_executeDef855 = true;
			switch (field.hashCode())
			{
				case -1760504437:
				{
					if (field.equals("tokenFinished")) 
					{
						__temp_executeDef855 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("tokenFinished"))) );
					}
					
					break;
				}
				
				
				case 1801652415:
				{
					if (field.equals("notevalue")) 
					{
						__temp_executeDef855 = false;
						return this.notevalue;
					}
					
					break;
				}
				
				
				case -1605705217:
				{
					if (field.equals("createFunctions")) 
					{
						__temp_executeDef855 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("createFunctions"))) );
					}
					
					break;
				}
				
				
				case 1613997206:
				{
					if (field.equals("flagWord")) 
					{
						__temp_executeDef855 = false;
						return this.flagWord;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef855) 
			{
				return super.__hx_getField(field, throwErrors, isCheck, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("flagWord");
		baseArr.push("notevalue");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


