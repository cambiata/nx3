package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PNoteOffsetCalculator extends haxe.lang.HxObject
{
	public    PNoteOffsetCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PNoteOffsetCalculator(nx3.PComplex complex)
	{
		nx3.PNoteOffsetCalculator.__hx_ctor_nx3_PNoteOffsetCalculator(this, complex);
	}
	
	
	public static   void __hx_ctor_nx3_PNoteOffsetCalculator(nx3.PNoteOffsetCalculator __temp_me102, nx3.PComplex complex)
	{
		__temp_me102.complex = complex;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PNoteOffsetCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PNoteOffsetCalculator(((nx3.PComplex) (arr.__get(0)) ));
	}
	
	
	public  nx3.PComplex complex;
	
	public   double getNoteOffset(nx3.PNote note)
	{
		nx3.PNote __temp_stmt547 = null;
		{
			haxe.root.Array<nx3.PNote> array = this.complex.getNotes();
			__temp_stmt547 = array.__get(0);
		}
		
		if (( note == __temp_stmt547 )) 
		{
			return ((double) (0) );
		}
		
		haxe.root.Array<nx3.geom.Rectangle> firstrects = this.complex.notes.__get(0).getHeadsRects();
		haxe.root.Array<nx3.geom.Rectangle> secondrects = this.complex.notes.__get(1).getHeadsRects().copy();
		double secondoffset = nx3.geom.RectanglesTools.getXIntersection(firstrects, secondrects);
		nx3.PNote firstnote = null;
		{
			haxe.root.Array<nx3.PNote> array1 = this.complex.getNotes();
			firstnote = array1.__get(0);
		}
		
		int diff = ( ((int) (haxe.lang.Runtime.toInt(note.nnote.get_topLevel())) ) - ((int) (haxe.lang.Runtime.toInt(firstnote.nnote.get_bottomLevel())) ) );
		if (( diff == 1 )) 
		{
			secondoffset = ( secondoffset * 0.8 );
		}
		
		if (( diff < 1 )) 
		{
			if (( nx3.ENoteValTools.dotlevel(firstnote.nnote.value) > 0 )) 
			{
				if (( nx3.ENoteValTools.dotlevel(firstnote.nnote.value) == 1 )) 
				{
					secondoffset += 2.0;
				}
				 else 
				{
					secondoffset += 3.0;
				}
				
			}
			
		}
		
		return secondoffset;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef548 = true;
			switch (field.hashCode())
			{
				case 950494384:
				{
					if (field.equals("complex")) 
					{
						__temp_executeDef548 = false;
						this.complex = ((nx3.PComplex) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef548) 
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
			boolean __temp_executeDef549 = true;
			switch (field.hashCode())
			{
				case -1393198309:
				{
					if (field.equals("getNoteOffset")) 
					{
						__temp_executeDef549 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNoteOffset"))) );
					}
					
					break;
				}
				
				
				case 950494384:
				{
					if (field.equals("complex")) 
					{
						__temp_executeDef549 = false;
						return this.complex;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef549) 
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
			boolean __temp_executeDef550 = true;
			switch (field.hashCode())
			{
				case -1393198309:
				{
					if (field.equals("getNoteOffset")) 
					{
						__temp_executeDef550 = false;
						return this.getNoteOffset(((nx3.PNote) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef550) 
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
		baseArr.push("complex");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


