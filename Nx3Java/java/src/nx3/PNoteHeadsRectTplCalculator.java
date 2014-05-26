package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PNoteHeadsRectTplCalculator extends haxe.lang.HxObject
{
	public    PNoteHeadsRectTplCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PNoteHeadsRectTplCalculator(nx3.PNote note)
	{
		nx3.PNoteHeadsRectTplCalculator.__hx_ctor_nx3_PNoteHeadsRectTplCalculator(this, note);
	}
	
	
	public static   void __hx_ctor_nx3_PNoteHeadsRectTplCalculator(nx3.PNoteHeadsRectTplCalculator __temp_me121, nx3.PNote note)
	{
		__temp_me121.note = note;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PNoteHeadsRectTplCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PNoteHeadsRectTplCalculator(((nx3.PNote) (arr.__get(0)) ));
	}
	
	
	public  nx3.PNote note;
	
	public   haxe.root.Array<nx3.geom.Rectangle> getHeadsRects()
	{
		return new haxe.root.Array<nx3.geom.Rectangle>(new nx3.geom.Rectangle[]{new nx3.geom.Rectangle(((java.lang.Object) (-6) ), ((java.lang.Object) (-5.3) ), ((java.lang.Object) (10) ), ((java.lang.Object) (8.8) ))});
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef717 = true;
			switch (field.hashCode())
			{
				case 3387378:
				{
					if (field.equals("note")) 
					{
						__temp_executeDef717 = false;
						this.note = ((nx3.PNote) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef717) 
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
			boolean __temp_executeDef718 = true;
			switch (field.hashCode())
			{
				case 2051530802:
				{
					if (field.equals("getHeadsRects")) 
					{
						__temp_executeDef718 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getHeadsRects"))) );
					}
					
					break;
				}
				
				
				case 3387378:
				{
					if (field.equals("note")) 
					{
						__temp_executeDef718 = false;
						return this.note;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef718) 
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
			boolean __temp_executeDef719 = true;
			switch (field.hashCode())
			{
				case 2051530802:
				{
					if (field.equals("getHeadsRects")) 
					{
						__temp_executeDef719 = false;
						return this.getHeadsRects();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef719) 
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


