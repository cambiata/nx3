package nx3.qs;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class ModeParser extends nx3.qs.BaseParser
{
	public    ModeParser(haxe.lang.EmptyObject empty)
	{
		super(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public    ModeParser(nx3.qs.QuickSyntaxParser parser)
	{
		super(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
		nx3.qs.ModeParser.__hx_ctor_nx3_qs_ModeParser(this, parser);
	}
	
	
	public static   void __hx_ctor_nx3_qs_ModeParser(nx3.qs.ModeParser __temp_me166, nx3.qs.QuickSyntaxParser parser)
	{
		nx3.qs.BaseParser.__hx_ctor_nx3_qs_BaseParser(__temp_me166, parser);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.qs.ModeParser(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.qs.ModeParser(((nx3.qs.QuickSyntaxParser) (arr.__get(0)) ));
	}
	
	
	@Override public   void createFunctions()
	{
		haxe.root.Array<nx3.qs.ModeParser> _g = new haxe.root.Array<nx3.qs.ModeParser>(new nx3.qs.ModeParser[]{this});
		this.functions.set("not:", new nx3.qs.ModeParser_createFunctions_19__Fun(((haxe.root.Array<nx3.qs.ModeParser>) (_g) )));
		this.functions.set("tpl:", new nx3.qs.ModeParser_createFunctions_25__Fun(((haxe.root.Array<nx3.qs.ModeParser>) (_g) )));
		this.functions.set("lyr:", new nx3.qs.ModeParser_createFunctions_31__Fun(((haxe.root.Array<nx3.qs.ModeParser>) (_g) )));
		this.functions.set("xxx", ( (( nx3.qs.ModeParser_createFunctions_37__Fun.__hx_current != null )) ? (nx3.qs.ModeParser_createFunctions_37__Fun.__hx_current) : (nx3.qs.ModeParser_createFunctions_37__Fun.__hx_current = ((nx3.qs.ModeParser_createFunctions_37__Fun) (new nx3.qs.ModeParser_createFunctions_37__Fun()) )) ));
		this.functions.set("guess:", new nx3.qs.ModeParser_createFunctions_42__Fun(((haxe.root.Array<nx3.qs.ModeParser>) (_g) )));
	}
	
	
	@Override public   void tokenFinished(java.lang.String originaltoken)
	{
		{
		}
		
	}
	
	
	@Override public   void recieveEvent(nx3.qs.ParserEvents event)
	{
		{
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef665 = true;
			switch (field.hashCode())
			{
				case -2111738369:
				{
					if (field.equals("recieveEvent")) 
					{
						__temp_executeDef665 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("recieveEvent"))) );
					}
					
					break;
				}
				
				
				case -1605705217:
				{
					if (field.equals("createFunctions")) 
					{
						__temp_executeDef665 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("createFunctions"))) );
					}
					
					break;
				}
				
				
				case -1760504437:
				{
					if (field.equals("tokenFinished")) 
					{
						__temp_executeDef665 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("tokenFinished"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef665) 
			{
				return super.__hx_getField(field, throwErrors, isCheck, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
}


