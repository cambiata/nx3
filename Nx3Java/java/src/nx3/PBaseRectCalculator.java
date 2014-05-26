package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PBaseRectCalculator extends haxe.lang.HxObject
{
	static 
	{
		nx3.PBaseRectCalculator.BASERECT_HEIGHT = ((double) (3) );
		nx3.PBaseRectCalculator.BASERECT_HEIGHT_X_2 = ( ((double) (3) ) * 2 );
		nx3.PBaseRectCalculator.BASERECT_MARGIN = 0.6;
		nx3.PBaseRectCalculator.BASERECT_MARGIN_X_2 = 1.2;
	}
	public    PBaseRectCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PBaseRectCalculator(nx3.PNote note)
	{
		nx3.PBaseRectCalculator.__hx_ctor_nx3_PBaseRectCalculator(this, note);
	}
	
	
	public static   void __hx_ctor_nx3_PBaseRectCalculator(nx3.PBaseRectCalculator __temp_me101, nx3.PNote note)
	{
		__temp_me101.note = note;
	}
	
	
	public static  double BASERECT_HEIGHT;
	
	public static  double BASERECT_HEIGHT_X_2;
	
	public static  double BASERECT_MARGIN;
	
	public static  double BASERECT_MARGIN_X_2;
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PBaseRectCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PBaseRectCalculator(((nx3.PNote) (arr.__get(0)) ));
	}
	
	
	public  nx3.PNote note;
	
	public   nx3.geom.Rectangle getBaseRect()
	{
		{
			nx3.ENoteType _g = this.note.nnote.type;
			switch (haxe.root.Type.enumIndex(_g))
			{
				case 0:
				{
					haxe.root.Array<nx3.ENoteAttributes> atr = ((haxe.root.Array<nx3.ENoteAttributes>) (_g.params.__get(3)) );
					haxe.root.Array<nx3.ENoteArticulation> a = ((haxe.root.Array<nx3.ENoteArticulation>) (_g.params.__get(2)) );
					nx3.ENotationVariant v = ((nx3.ENotationVariant) (_g.params.__get(1)) );
					haxe.root.Array<nx3.NHead> h = ((haxe.root.Array<nx3.NHead>) (_g.params.__get(0)) );
					{
						nx3.EHeadValueType _g1 = nx3.ENoteValTools.head(this.note.nnote.value);
						switch (haxe.root.Type.enumIndex(_g1))
						{
							case 2:
							{
								return new nx3.geom.Rectangle(((java.lang.Object) (-2.8000000000000003) ), ((java.lang.Object) ( - (((double) (3) )) ) ), ((java.lang.Object) (5.6000000000000005) ), ((java.lang.Object) (( ((double) (3) ) * 2 )) ));
							}
							
							
							default:
							{
								return new nx3.geom.Rectangle(((java.lang.Object) (-2.2) ), ((java.lang.Object) ( - (((double) (3) )) ) ), ((java.lang.Object) (4.4) ), ((java.lang.Object) (( ((double) (3) ) * 2 )) ));
							}
							
						}
						
					}
					
				}
				
				
				case 4:
				{
					java.lang.Object f = _g.params.__get(3);
					nx3.ELyricContinuation c = ((nx3.ELyricContinuation) (_g.params.__get(2)) );
					nx3.EPosition o = ((nx3.EPosition) (_g.params.__get(1)) );
					java.lang.String text = haxe.lang.Runtime.toString(_g.params.__get(0));
					nx3.geom.Rectangle __temp_stmt633 = null;
					{
						haxe.root.Array<nx3.geom.Rectangle> array = this.note.getHeadsRects();
						__temp_stmt633 = array.__get(0);
					}
					
					return __temp_stmt633.clone();
				}
				
				
				default:
				{
					return new nx3.geom.Rectangle(((java.lang.Object) (-4) ), ((java.lang.Object) ( - (((double) (3) )) ) ), ((java.lang.Object) (8) ), ((java.lang.Object) (( ((double) (3) ) * 2 )) ));
				}
				
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef634 = true;
			switch (field.hashCode())
			{
				case 3387378:
				{
					if (field.equals("note")) 
					{
						__temp_executeDef634 = false;
						this.note = ((nx3.PNote) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef634) 
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
			boolean __temp_executeDef635 = true;
			switch (field.hashCode())
			{
				case 356336075:
				{
					if (field.equals("getBaseRect")) 
					{
						__temp_executeDef635 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBaseRect"))) );
					}
					
					break;
				}
				
				
				case 3387378:
				{
					if (field.equals("note")) 
					{
						__temp_executeDef635 = false;
						return this.note;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef635) 
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
			boolean __temp_executeDef636 = true;
			switch (field.hashCode())
			{
				case 356336075:
				{
					if (field.equals("getBaseRect")) 
					{
						__temp_executeDef636 = false;
						return this.getBaseRect();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef636) 
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
		baseArr.push("note");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


