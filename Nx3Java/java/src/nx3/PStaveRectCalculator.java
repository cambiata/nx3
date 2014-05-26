package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PStaveRectCalculator extends haxe.lang.HxObject
{
	public    PStaveRectCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PStaveRectCalculator(nx3.PNote note)
	{
		nx3.PStaveRectCalculator.__hx_ctor_nx3_PStaveRectCalculator(this, note);
	}
	
	
	public static   void __hx_ctor_nx3_PStaveRectCalculator(nx3.PStaveRectCalculator __temp_me135, nx3.PNote note)
	{
		__temp_me135.note = note;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PStaveRectCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PStaveRectCalculator(((nx3.PNote) (arr.__get(0)) ));
	}
	
	
	public  nx3.PNote note;
	
	public   nx3.geom.Rectangle getStaveRect()
	{
		if ( ! (haxe.lang.Runtime.valEq(haxe.root.Type.enumConstructor(this.note.nnote.type), "Note")) ) 
		{
			return null;
		}
		
		if (( nx3.ENoteValTools.stavinglevel(this.note.nnote.value) < 1 )) 
		{
			return null;
		}
		
		double headw = 0.0;
		{
			nx3.EHeadValueType _g = nx3.ENoteValTools.head(this.note.nnote.value);
			switch (haxe.root.Type.enumIndex(_g))
			{
				case 2:
				{
					headw = 2.2;
					break;
				}
				
				
				default:
				{
					headw = 1.6;
					break;
				}
				
			}
			
		}
		
		nx3.geom.Rectangle rect = null;
		if (( this.note.getDirection() == nx3.EDirectionUD.Up )) 
		{
			rect = new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (( this.note.nnote.getBottomLevel() - ((double) (7) ) )) ), ((java.lang.Object) (headw) ), ((double) (7) ));
		}
		 else 
		{
			rect = new nx3.geom.Rectangle(((java.lang.Object) ( - (headw) ) ), ((java.lang.Object) (this.note.nnote.getTopLevel()) ), ((java.lang.Object) (headw) ), ((double) (7) ));
		}
		
		rect.offset(this.note.getXOffset(), ((double) (0) ));
		return rect;
	}
	
	
	public   nx3.geom.Rectangle getFlagRect()
	{
		if ( ! (haxe.lang.Runtime.valEq(haxe.root.Type.enumConstructor(this.note.nnote.type), "Note")) ) 
		{
			return null;
		}
		
		if (( nx3.ENoteValTools.beaminglevel(this.note.nnote.value) < 1 )) 
		{
			return null;
		}
		
		nx3.PBeamgroup beamgroup = this.note.getBeamgroup();
		if (( ( beamgroup != null ) && ( beamgroup.pnotes.length == 1 ) )) 
		{
			if (( nx3.ENoteValTools.beaminglevel(this.note.nnote.value) > 0 )) 
			{
				double headw = 0.0;
				{
					nx3.EHeadValueType _g = nx3.ENoteValTools.head(this.note.nnote.value);
					switch (haxe.root.Type.enumIndex(_g))
					{
						case 2:
						{
							headw = 2.2;
							break;
						}
						
						
						default:
						{
							headw = 1.6;
							break;
						}
						
					}
					
				}
				
				nx3.geom.Rectangle rect = null;
				if (( this.note.getDirection() == nx3.EDirectionUD.Up )) 
				{
					rect = new nx3.geom.Rectangle(((java.lang.Object) (headw) ), ((java.lang.Object) (( this.note.nnote.getBottomLevel() - ((double) (7) ) )) ), ((java.lang.Object) (2.6) ), ((java.lang.Object) (4.8) ));
				}
				 else 
				{
					rect = new nx3.geom.Rectangle(((java.lang.Object) ( - (headw) ) ), ((java.lang.Object) (( ( this.note.nnote.getTopLevel() + ((double) (7) ) ) - 4.8 )) ), ((java.lang.Object) (2.6) ), ((java.lang.Object) (4.8) ));
				}
				
				rect.offset(this.note.getXOffset(), ((double) (0) ));
				return rect;
			}
			
		}
		
		return null;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef764 = true;
			switch (field.hashCode())
			{
				case 3387378:
				{
					if (field.equals("note")) 
					{
						__temp_executeDef764 = false;
						this.note = ((nx3.PNote) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef764) 
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
			boolean __temp_executeDef765 = true;
			switch (field.hashCode())
			{
				case -603228954:
				{
					if (field.equals("getFlagRect")) 
					{
						__temp_executeDef765 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getFlagRect"))) );
					}
					
					break;
				}
				
				
				case 3387378:
				{
					if (field.equals("note")) 
					{
						__temp_executeDef765 = false;
						return this.note;
					}
					
					break;
				}
				
				
				case -2038299491:
				{
					if (field.equals("getStaveRect")) 
					{
						__temp_executeDef765 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getStaveRect"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef765) 
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
			boolean __temp_executeDef766 = true;
			switch (field.hashCode())
			{
				case -603228954:
				{
					if (field.equals("getFlagRect")) 
					{
						__temp_executeDef766 = false;
						return this.getFlagRect();
					}
					
					break;
				}
				
				
				case -2038299491:
				{
					if (field.equals("getStaveRect")) 
					{
						__temp_executeDef766 = false;
						return this.getStaveRect();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef766) 
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


