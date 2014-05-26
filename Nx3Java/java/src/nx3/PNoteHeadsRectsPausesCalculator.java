package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PNoteHeadsRectsPausesCalculator extends haxe.lang.HxObject
{
	public    PNoteHeadsRectsPausesCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PNoteHeadsRectsPausesCalculator(nx3.PNote vnote)
	{
		nx3.PNoteHeadsRectsPausesCalculator.__hx_ctor_nx3_PNoteHeadsRectsPausesCalculator(this, vnote);
	}
	
	
	public static   void __hx_ctor_nx3_PNoteHeadsRectsPausesCalculator(nx3.PNoteHeadsRectsPausesCalculator __temp_me123, nx3.PNote vnote)
	{
		__temp_me123.vnote = vnote;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PNoteHeadsRectsPausesCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PNoteHeadsRectsPausesCalculator(((nx3.PNote) (arr.__get(0)) ));
	}
	
	
	public  nx3.PNote vnote;
	
	public   haxe.root.Array<nx3.geom.Rectangle> getHeadsRects()
	{
		haxe.root.Array<nx3.geom.Rectangle> rects = null;
		{
			int _g = nx3.ENoteValTools.beaminglevel(this.vnote.nnote.value);
			switch (_g)
			{
				case 1:
				{
					rects = new haxe.root.Array<nx3.geom.Rectangle>(new nx3.geom.Rectangle[]{new nx3.geom.Rectangle(((java.lang.Object) (-1.8) ), ((java.lang.Object) (-3) ), ((java.lang.Object) (3.6) ), ((java.lang.Object) (6) ))});
					break;
				}
				
				
				case 2:
				{
					rects = new haxe.root.Array<nx3.geom.Rectangle>(new nx3.geom.Rectangle[]{new nx3.geom.Rectangle(((java.lang.Object) (-2) ), ((java.lang.Object) (-3) ), ((java.lang.Object) (4) ), ((java.lang.Object) (6) ))});
					break;
				}
				
				
				default:
				{
					rects = new haxe.root.Array<nx3.geom.Rectangle>(new nx3.geom.Rectangle[]{new nx3.geom.Rectangle(((java.lang.Object) (-1.6) ), ((java.lang.Object) (-3.3) ), ((java.lang.Object) (3.2) ), ((java.lang.Object) (6.6) ))});
					break;
				}
				
			}
			
		}
		
		int level = 0;
		{
			nx3.ENoteType _g1 = this.vnote.nnote.type;
			switch (haxe.root.Type.enumIndex(_g1))
			{
				case 1:
				{
					int l = ((int) (haxe.lang.Runtime.toInt(_g1.params.__get(0))) );
					level = l;
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
		
		rects.__get(0).offset(((double) (0) ), ((double) (level) ));
		return rects;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef725 = true;
			switch (field.hashCode())
			{
				case 112362856:
				{
					if (field.equals("vnote")) 
					{
						__temp_executeDef725 = false;
						this.vnote = ((nx3.PNote) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef725) 
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
			boolean __temp_executeDef726 = true;
			switch (field.hashCode())
			{
				case 2051530802:
				{
					if (field.equals("getHeadsRects")) 
					{
						__temp_executeDef726 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getHeadsRects"))) );
					}
					
					break;
				}
				
				
				case 112362856:
				{
					if (field.equals("vnote")) 
					{
						__temp_executeDef726 = false;
						return this.vnote;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef726) 
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
			boolean __temp_executeDef727 = true;
			switch (field.hashCode())
			{
				case 2051530802:
				{
					if (field.equals("getHeadsRects")) 
					{
						__temp_executeDef727 = false;
						return this.getHeadsRects();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef727) 
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
		baseArr.push("vnote");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


