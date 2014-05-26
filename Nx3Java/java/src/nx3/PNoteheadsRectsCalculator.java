package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PNoteheadsRectsCalculator extends haxe.lang.HxObject
{
	public    PNoteheadsRectsCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PNoteheadsRectsCalculator(nx3.PNote note)
	{
		nx3.PNoteheadsRectsCalculator.__hx_ctor_nx3_PNoteheadsRectsCalculator(this, note);
	}
	
	
	public static   void __hx_ctor_nx3_PNoteheadsRectsCalculator(nx3.PNoteheadsRectsCalculator __temp_me125, nx3.PNote note)
	{
		__temp_me125.note = note;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PNoteheadsRectsCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PNoteheadsRectsCalculator(((nx3.PNote) (arr.__get(0)) ));
	}
	
	
	public  nx3.PNote note;
	
	public  haxe.root.Array<nx3.PHead> heads;
	
	public  haxe.root.Array<java.lang.Object> placements;
	
	public   haxe.root.Array<nx3.geom.Rectangle> getHeadsRects()
	{
		{
			nx3.ENoteType _g = this.note.nnote.type;
			switch (haxe.root.Type.enumIndex(_g))
			{
				case 0:
				{
					haxe.root.Array<nx3.ENoteAttributes> a2 = ((haxe.root.Array<nx3.ENoteAttributes>) (_g.params.__get(3)) );
					haxe.root.Array<nx3.ENoteArticulation> a = ((haxe.root.Array<nx3.ENoteArticulation>) (_g.params.__get(2)) );
					nx3.ENotationVariant v = ((nx3.ENotationVariant) (_g.params.__get(1)) );
					haxe.root.Array<nx3.NHead> h = ((haxe.root.Array<nx3.NHead>) (_g.params.__get(0)) );
					return new nx3.PHeadsRectsCalculator(((nx3.PNote) (this.note) ), ((nx3.EDirectionUD) (null) )).getHeadsRects();
				}
				
				
				case 1:
				{
					int l = ((int) (haxe.lang.Runtime.toInt(_g.params.__get(0))) );
					return new nx3.PNoteHeadsRectsPausesCalculator(((nx3.PNote) (this.note) )).getHeadsRects();
				}
				
				
				case 4:
				{
					java.lang.Object font = _g.params.__get(3);
					nx3.ELyricContinuation c = ((nx3.ELyricContinuation) (_g.params.__get(2)) );
					nx3.EPosition o = ((nx3.EPosition) (_g.params.__get(1)) );
					java.lang.String text = haxe.lang.Runtime.toString(_g.params.__get(0));
					return new nx3.PNoteHeadsRectsLyricsCalculator(((nx3.PNote) (this.note) ), haxe.lang.Runtime.toString(text), ((java.lang.Object) (font) )).getHeadsRects();
				}
				
				
				case 3:
				{
					int l1 = ((int) (haxe.lang.Runtime.toInt(_g.params.__get(0))) );
					return new nx3.PNoteHeadsRectTplCalculator(((nx3.PNote) (this.note) )).getHeadsRects();
				}
				
				
				default:
				{
					throw haxe.lang.HaxeException.wrap(( "Non implemented ENoteType: " + haxe.root.Type.enumConstructor(this.note.nnote.type) ));
				}
				
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef732 = true;
			switch (field.hashCode())
			{
				case -253474258:
				{
					if (field.equals("placements")) 
					{
						__temp_executeDef732 = false;
						this.placements = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3387378:
				{
					if (field.equals("note")) 
					{
						__temp_executeDef732 = false;
						this.note = ((nx3.PNote) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 99151507:
				{
					if (field.equals("heads")) 
					{
						__temp_executeDef732 = false;
						this.heads = ((haxe.root.Array<nx3.PHead>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef732) 
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
			boolean __temp_executeDef733 = true;
			switch (field.hashCode())
			{
				case 2051530802:
				{
					if (field.equals("getHeadsRects")) 
					{
						__temp_executeDef733 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getHeadsRects"))) );
					}
					
					break;
				}
				
				
				case 3387378:
				{
					if (field.equals("note")) 
					{
						__temp_executeDef733 = false;
						return this.note;
					}
					
					break;
				}
				
				
				case -253474258:
				{
					if (field.equals("placements")) 
					{
						__temp_executeDef733 = false;
						return this.placements;
					}
					
					break;
				}
				
				
				case 99151507:
				{
					if (field.equals("heads")) 
					{
						__temp_executeDef733 = false;
						return this.heads;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef733) 
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
			boolean __temp_executeDef734 = true;
			switch (field.hashCode())
			{
				case 2051530802:
				{
					if (field.equals("getHeadsRects")) 
					{
						__temp_executeDef734 = false;
						return this.getHeadsRects();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef734) 
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
		baseArr.push("placements");
		baseArr.push("heads");
		baseArr.push("note");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


