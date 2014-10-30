package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PNoteHeadsRectsLyricsCalculator extends haxe.lang.HxObject
{
	public    PNoteHeadsRectsLyricsCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PNoteHeadsRectsLyricsCalculator(nx3.PNote note, java.lang.String text, java.lang.Object font)
	{
		nx3.PNoteHeadsRectsLyricsCalculator.__hx_ctor_nx3_PNoteHeadsRectsLyricsCalculator(this, note, text, font);
	}
	
	
	public static   void __hx_ctor_nx3_PNoteHeadsRectsLyricsCalculator(nx3.PNoteHeadsRectsLyricsCalculator __temp_me110, nx3.PNote note, java.lang.String text, java.lang.Object font)
	{
		__temp_me110.note = note;
		__temp_me110.text = text;
		__temp_me110.font = font;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PNoteHeadsRectsLyricsCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PNoteHeadsRectsLyricsCalculator(((nx3.PNote) (arr.__get(0)) ), haxe.lang.Runtime.toString(arr.__get(1)), ((java.lang.Object) (arr.__get(2)) ));
	}
	
	
	public  nx3.PNote note;
	
	public  java.lang.String text;
	
	public  java.lang.Object font;
	
	public   haxe.root.Array<nx3.geom.Rectangle> getHeadsRects()
	{
		haxe.Log.trace.__hx_invoke2_o(0.0, "non possible!", 0.0, new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"className", "fileName", "methodName"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{"nx3.PNoteHeadsRectsLyricsCalculator", "PNoteHeadsRectsLyricsCalculator.hx", "getHeadsRects"}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"lineNumber"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (47) )) )})));
		return null;
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef707 = true;
			switch (field.hashCode())
			{
				case 3148879:
				{
					if (field.equals("font")) 
					{
						__temp_executeDef707 = false;
						this.font = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef707) 
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
			boolean __temp_executeDef708 = true;
			switch (field.hashCode())
			{
				case 3148879:
				{
					if (field.equals("font")) 
					{
						__temp_executeDef708 = false;
						this.font = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3387378:
				{
					if (field.equals("note")) 
					{
						__temp_executeDef708 = false;
						this.note = ((nx3.PNote) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3556653:
				{
					if (field.equals("text")) 
					{
						__temp_executeDef708 = false;
						this.text = haxe.lang.Runtime.toString(value);
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef708) 
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
			boolean __temp_executeDef709 = true;
			switch (field.hashCode())
			{
				case 2051530802:
				{
					if (field.equals("getHeadsRects")) 
					{
						__temp_executeDef709 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getHeadsRects"))) );
					}
					
					break;
				}
				
				
				case 3387378:
				{
					if (field.equals("note")) 
					{
						__temp_executeDef709 = false;
						return this.note;
					}
					
					break;
				}
				
				
				case 3148879:
				{
					if (field.equals("font")) 
					{
						__temp_executeDef709 = false;
						return this.font;
					}
					
					break;
				}
				
				
				case 3556653:
				{
					if (field.equals("text")) 
					{
						__temp_executeDef709 = false;
						return this.text;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef709) 
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
			boolean __temp_executeDef710 = true;
			switch (field.hashCode())
			{
				case 3148879:
				{
					if (field.equals("font")) 
					{
						__temp_executeDef710 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.font)) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef710) 
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
			boolean __temp_executeDef711 = true;
			switch (field.hashCode())
			{
				case 2051530802:
				{
					if (field.equals("getHeadsRects")) 
					{
						__temp_executeDef711 = false;
						return this.getHeadsRects();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef711) 
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
		baseArr.push("font");
		baseArr.push("text");
		baseArr.push("note");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


