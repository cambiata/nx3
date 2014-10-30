package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PHeadsRectsCalculator extends haxe.lang.HxObject
{
	public    PHeadsRectsCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PHeadsRectsCalculator(nx3.PNote note, nx3.EDirectionUD direction)
	{
		nx3.PHeadsRectsCalculator.__hx_ctor_nx3_PHeadsRectsCalculator(this, note, direction);
	}
	
	
	public static   void __hx_ctor_nx3_PHeadsRectsCalculator(nx3.PHeadsRectsCalculator __temp_me107, nx3.PNote note, nx3.EDirectionUD direction)
	{
		if (( direction != null )) 
		{
			__temp_me107.direction = direction;
		}
		 else 
		{
			__temp_me107.direction = note.getDirection();
		}
		
		__temp_me107.vheads = note.get_heads();
		__temp_me107.placements = new nx3.PHeadPlacementsCalculator(((haxe.root.Array<nx3.PHead>) (__temp_me107.vheads) ), ((nx3.EDirectionUD) (__temp_me107.direction) )).getHeadsPlacements();
		__temp_me107.notevalue = note.nnote.value;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PHeadsRectsCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PHeadsRectsCalculator(((nx3.PNote) (arr.__get(0)) ), ((nx3.EDirectionUD) (arr.__get(1)) ));
	}
	
	
	public  haxe.root.Array<nx3.PHead> vheads;
	
	public  haxe.root.Array<java.lang.Object> placements;
	
	public  nx3.ENoteVal notevalue;
	
	public  nx3.ENoteType notetype;
	
	public  nx3.EDirectionUD direction;
	
	public   haxe.root.Array<nx3.geom.Rectangle> getHeadsRects()
	{
		haxe.root.Array<nx3.geom.Rectangle> rects = new haxe.root.Array<nx3.geom.Rectangle>();
		int i = 0;
		{
			int _g = 0;
			haxe.root.Array<java.lang.Object> _g1 = this.placements;
			while (( _g < _g1.length ))
			{
				java.lang.Object placement = _g1.__get(_g);
				 ++ _g;
				nx3.EHeadType headtype = this.vheads.__get(i).nhead.type;
				nx3.geom.Rectangle rect = null;
				double headw = ((double) (0) );
				this.headRect(headtype, this.notevalue);
				{
					nx3.EHeadValueType _g2 = nx3.ENoteValTools.head(this.notevalue);
					switch (haxe.root.Type.enumIndex(_g2))
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
				
				nx3.geom.Rectangle rect1 = new nx3.geom.Rectangle(((java.lang.Object) ( - (headw) ) ), ((java.lang.Object) (-1) ), ((java.lang.Object) (( 2 * headw )) ), ((java.lang.Object) (2) ));
				double pos = 0.0;
				{
					nx3.EHeadPosition _g21 = ((nx3.EHeadPosition) (haxe.lang.Runtime.getField(placement, "pos", true)) );
					switch (haxe.root.Type.enumIndex(_g21))
					{
						case 0:
						{
							pos = ( -2 * headw );
							break;
						}
						
						
						case 2:
						{
							pos = ( 2 * headw );
							break;
						}
						
						
						default:
						{
							pos = ((double) (0) );
							break;
						}
						
					}
					
				}
				
				rect1.offset(pos, ((double) (((int) (haxe.lang.Runtime.getField_f(placement, "level", true)) )) ));
				rects.push(rect1);
				i++;
			}
			
		}
		
		return rects;
	}
	
	
	public   nx3.geom.Rectangle headRect(nx3.EHeadType type, nx3.ENoteVal notevalue)
	{
		int headw = 2;
		int headh = 2;
		switch (haxe.root.Type.enumIndex(type))
		{
			case 0:
			{
				nx3.EHeadValueType _g = nx3.ENoteValTools.head(this.notevalue);
				switch (haxe.root.Type.enumIndex(_g))
				{
					case 2:
					{
						return new nx3.geom.Rectangle(((java.lang.Object) (-2.2) ), ((java.lang.Object) (-1) ), ((java.lang.Object) (4.4) ), ((java.lang.Object) (2) ));
					}
					
					
					default:
					{
						return new nx3.geom.Rectangle(((java.lang.Object) (-1.6) ), ((java.lang.Object) (-1) ), ((java.lang.Object) (3.2) ), ((java.lang.Object) (2) ));
					}
					
				}
				
			}
			
			
			case 3:
			{
				int _g1 = nx3.ENoteValTools.beaminglevel(this.notevalue);
				switch (_g1)
				{
					case 1:
					{
						return new nx3.geom.Rectangle(((java.lang.Object) (-1.8) ), ((java.lang.Object) (-3) ), ((java.lang.Object) (3.6) ), ((java.lang.Object) (6) ));
					}
					
					
					case 2:
					{
						return new nx3.geom.Rectangle(((java.lang.Object) (-2) ), ((java.lang.Object) (-3) ), ((java.lang.Object) (4) ), ((java.lang.Object) (6) ));
					}
					
					
					default:
					{
						return new nx3.geom.Rectangle(((java.lang.Object) (-1.6) ), ((java.lang.Object) (-3.3) ), ((java.lang.Object) (3.2) ), ((java.lang.Object) (6.6) ));
					}
					
				}
				
			}
			
			
			default:
			{
				return new nx3.geom.Rectangle(((java.lang.Object) (-2) ), ((java.lang.Object) (-2) ), ((java.lang.Object) (4) ), ((java.lang.Object) (4) ));
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef696 = true;
			switch (field.hashCode())
			{
				case -962590849:
				{
					if (field.equals("direction")) 
					{
						__temp_executeDef696 = false;
						this.direction = ((nx3.EDirectionUD) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -817575971:
				{
					if (field.equals("vheads")) 
					{
						__temp_executeDef696 = false;
						this.vheads = ((haxe.root.Array<nx3.PHead>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1582102060:
				{
					if (field.equals("notetype")) 
					{
						__temp_executeDef696 = false;
						this.notetype = ((nx3.ENoteType) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -253474258:
				{
					if (field.equals("placements")) 
					{
						__temp_executeDef696 = false;
						this.placements = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1801652415:
				{
					if (field.equals("notevalue")) 
					{
						__temp_executeDef696 = false;
						this.notevalue = ((nx3.ENoteVal) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef696) 
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
			boolean __temp_executeDef697 = true;
			switch (field.hashCode())
			{
				case -1115837468:
				{
					if (field.equals("headRect")) 
					{
						__temp_executeDef697 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("headRect"))) );
					}
					
					break;
				}
				
				
				case -817575971:
				{
					if (field.equals("vheads")) 
					{
						__temp_executeDef697 = false;
						return this.vheads;
					}
					
					break;
				}
				
				
				case 2051530802:
				{
					if (field.equals("getHeadsRects")) 
					{
						__temp_executeDef697 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getHeadsRects"))) );
					}
					
					break;
				}
				
				
				case -253474258:
				{
					if (field.equals("placements")) 
					{
						__temp_executeDef697 = false;
						return this.placements;
					}
					
					break;
				}
				
				
				case -962590849:
				{
					if (field.equals("direction")) 
					{
						__temp_executeDef697 = false;
						return this.direction;
					}
					
					break;
				}
				
				
				case 1801652415:
				{
					if (field.equals("notevalue")) 
					{
						__temp_executeDef697 = false;
						return this.notevalue;
					}
					
					break;
				}
				
				
				case 1582102060:
				{
					if (field.equals("notetype")) 
					{
						__temp_executeDef697 = false;
						return this.notetype;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef697) 
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
			boolean __temp_executeDef698 = true;
			switch (field.hashCode())
			{
				case -1115837468:
				{
					if (field.equals("headRect")) 
					{
						__temp_executeDef698 = false;
						return this.headRect(((nx3.EHeadType) (dynargs.__get(0)) ), ((nx3.ENoteVal) (dynargs.__get(1)) ));
					}
					
					break;
				}
				
				
				case 2051530802:
				{
					if (field.equals("getHeadsRects")) 
					{
						__temp_executeDef698 = false;
						return this.getHeadsRects();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef698) 
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
		baseArr.push("direction");
		baseArr.push("notetype");
		baseArr.push("notevalue");
		baseArr.push("placements");
		baseArr.push("vheads");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


