package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PComplexTierectsCalculator extends haxe.lang.HxObject
{
	public    PComplexTierectsCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PComplexTierectsCalculator(nx3.PComplex complex)
	{
		nx3.PComplexTierectsCalculator.__hx_ctor_nx3_PComplexTierectsCalculator(this, complex);
	}
	
	
	public static   void __hx_ctor_nx3_PComplexTierectsCalculator(nx3.PComplexTierectsCalculator __temp_me104, nx3.PComplex complex)
	{
		__temp_me104.complex = complex;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PComplexTierectsCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PComplexTierectsCalculator(((nx3.PComplex) (arr.__get(0)) ));
	}
	
	
	public  nx3.PComplex complex;
	
	public   haxe.root.Array<nx3.geom.Rectangle> getTieRects()
	{
		int nrofnotes = this.complex.getNotes().length;
		nx3.PNote firstnote = null;
		{
			haxe.root.Array<nx3.PNote> array = this.complex.getNotes();
			firstnote = array.__get(0);
		}
		
		haxe.root.Array<nx3.ETie> firstties = firstnote.getTies();
		nx3.PNote secondnote = null;
		if (( nrofnotes == 2 )) 
		{
			haxe.root.Array<nx3.PNote> array1 = this.complex.getNotes();
			secondnote = array1.__get(1);
		}
		 else 
		{
			secondnote = null;
		}
		
		haxe.root.Array<nx3.ETie> secondties = null;
		if (( nrofnotes == 2 )) 
		{
			nx3.PNote __temp_stmt680 = null;
			{
				haxe.root.Array<nx3.PNote> array2 = this.complex.getNotes();
				__temp_stmt680 = array2.__get(1);
			}
			
			secondties = __temp_stmt680.getTies();
		}
		 else 
		{
			secondties = new haxe.root.Array<nx3.ETie>(new nx3.ETie[]{});
		}
		
		if (( ( firstties == new haxe.root.Array<nx3.ETie>(new nx3.ETie[]{}) ) && ( secondties == new haxe.root.Array<nx3.ETie>(new nx3.ETie[]{}) ) )) 
		{
			return new haxe.root.Array<nx3.geom.Rectangle>(new nx3.geom.Rectangle[]{});
		}
		
		haxe.root.Array<nx3.geom.Rectangle> headrects = this.complex.getHeadsRects();
		haxe.root.Array<nx3.geom.Rectangle> dotrects = this.complex.getDotRects();
		haxe.root.Array<java.lang.Object> tieinfos = new haxe.root.Array<java.lang.Object>();
		haxe.root.Array<nx3.geom.Rectangle> rects = new haxe.root.Array<nx3.geom.Rectangle>();
		int headIdx = 0;
		int dotidx = 0;
		double adjusty = 0.0;
		double tiewidth = 3.2;
		double tieheight = 1.6;
		{
			int _g = 0;
			haxe.root.Array<nx3.PHead> _g1 = firstnote.get_heads();
			while (( _g < _g1.length ))
			{
				nx3.PHead head = _g1.__get(_g);
				 ++ _g;
				nx3.geom.Rectangle headrect = this.complex.getHeadsRects().__get(headIdx);
				double rx = ( headrect.x + headrect.width );
				if (( nx3.ENoteValTools.dotlevel(firstnote.nnote.value) > 0 )) 
				{
					nx3.geom.Rectangle dotrect = this.complex.getDotRects().__get(dotidx);
					rx = ( dotrect.x + dotrect.width );
					dotidx++;
				}
				
				if (( head.nhead.tie != null )) 
				{
					int tielevel = 0;
					{
						nx3.ETie _g2 = head.nhead.tie;
						switch (haxe.root.Type.enumIndex(_g2))
						{
							case 0:
							{
								int tlevel = ((int) (haxe.lang.Runtime.toInt(_g2.params.__get(1))) );
								nx3.EDirectionUAD tiedir = ((nx3.EDirectionUAD) (_g2.params.__get(0)) );
								tielevel = tlevel;
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
					
					int level = ( head.nhead.level + tielevel );
					nx3.EDirectionUD direction = nx3.EDirectionUD.Up;
					if (( firstties.length == 1 )) 
					{
						if (( secondnote == null )) 
						{
							if (( firstnote.getDirection() == nx3.EDirectionUD.Up )) 
							{
								level = ( level + 1 );
							}
							 else 
							{
								level = ( level - 1 );
							}
							
							if (( firstnote.getDirection() == nx3.EDirectionUD.Up )) 
							{
								direction = nx3.EDirectionUD.Down;
							}
							 else 
							{
								direction = nx3.EDirectionUD.Up;
							}
							
							if (( firstnote.getDirection() == nx3.EDirectionUD.Up )) 
							{
								adjusty = .8;
							}
							 else 
							{
								adjusty = -.8;
							}
							
						}
						 else 
						{
							if (( firstnote.getDirection() == nx3.EDirectionUD.Up )) 
							{
								level = ( level - 1 );
							}
							 else 
							{
								level = ( level - 1 );
							}
							
						}
						
						tiewidth = ((double) (3) );
					}
					 else 
					{
						boolean __temp_boolv683 = ( secondnote == null );
						boolean __temp_boolv682 = false;
						if (__temp_boolv683) 
						{
							nx3.PHead __temp_stmt684 = null;
							{
								haxe.root.Array<nx3.PHead> array3 = firstnote.get_heads();
								__temp_stmt684 = array3.__get(( array3.length - 1 ));
							}
							
							__temp_boolv682 = ( head == __temp_stmt684 );
						}
						
						boolean __temp_stmt681 = ( __temp_boolv683 && __temp_boolv682 );
						if (__temp_stmt681) 
						{
							direction = nx3.EDirectionUD.Down;
							adjusty = .5;
						}
						 else 
						{
							adjusty = -.5;
						}
						
					}
					
					nx3.geom.Rectangle r = new nx3.geom.Rectangle(((java.lang.Object) (rx) ), ((java.lang.Object) (( ( level - 0.8 ) + adjusty )) ), ((java.lang.Object) (tiewidth) ), ((java.lang.Object) (1.6) ));
					rects.push(r);
					tieinfos.push(new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"direction", "head", "rect", "target"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{direction, head, r, null}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{})));
				}
				
				headIdx++;
			}
			
		}
		
		tiewidth = 3.2;
		if (( secondnote != null )) 
		{
			int _g3 = 0;
			haxe.root.Array<nx3.PHead> _g11 = secondnote.get_heads();
			while (( _g3 < _g11.length ))
			{
				nx3.PHead head1 = _g11.__get(_g3);
				 ++ _g3;
				if (( head1.nhead.tie != null )) 
				{
					int level1 = head1.nhead.level;
					nx3.geom.Rectangle headrect1 = this.complex.getHeadsRects().__get(headIdx);
					double rx1 = ( headrect1.x + headrect1.width );
					if (( nx3.ENoteValTools.dotlevel(secondnote.nnote.value) > 0 )) 
					{
						nx3.geom.Rectangle dotrect1 = this.complex.getDotRects().__get(dotidx);
						rx1 = ( dotrect1.x + dotrect1.width );
						dotidx++;
					}
					
					if (( secondties.length == 1 )) 
					{
						level1++;
						tiewidth = ((double) (3) );
					}
					
					nx3.geom.Rectangle r1 = new nx3.geom.Rectangle(((java.lang.Object) (rx1) ), ((java.lang.Object) (( level1 - 0.8 )) ), ((java.lang.Object) (tiewidth) ), ((java.lang.Object) (1.6) ));
					rects.push(r1);
					tieinfos.push(new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"direction", "head", "rect", "target"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{nx3.EDirectionUD.Down, head1, r1, null}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{})));
				}
				
				headIdx++;
			}
			
		}
		
		this.complex.setTieinfos(tieinfos);
		return rects;
	}
	
	
	public   void getNoteTies(nx3.PNote note)
	{
		{
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef685 = true;
			switch (field.hashCode())
			{
				case 950494384:
				{
					if (field.equals("complex")) 
					{
						__temp_executeDef685 = false;
						this.complex = ((nx3.PComplex) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef685) 
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
			boolean __temp_executeDef686 = true;
			switch (field.hashCode())
			{
				case -635934101:
				{
					if (field.equals("getNoteTies")) 
					{
						__temp_executeDef686 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNoteTies"))) );
					}
					
					break;
				}
				
				
				case 950494384:
				{
					if (field.equals("complex")) 
					{
						__temp_executeDef686 = false;
						return this.complex;
					}
					
					break;
				}
				
				
				case -245544491:
				{
					if (field.equals("getTieRects")) 
					{
						__temp_executeDef686 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getTieRects"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef686) 
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
			boolean __temp_executeDef687 = true;
			switch (field.hashCode())
			{
				case -635934101:
				{
					if (field.equals("getNoteTies")) 
					{
						__temp_executeDef687 = false;
						this.getNoteTies(((nx3.PNote) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -245544491:
				{
					if (field.equals("getTieRects")) 
					{
						__temp_executeDef687 = false;
						return this.getTieRects();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef687) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("complex");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


