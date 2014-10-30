package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PComplex extends haxe.lang.HxObject
{
	public    PComplex(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PComplex(nx3.PPart part, haxe.root.Array<nx3.PNote> notes, int valueposition)
	{
		nx3.PComplex.__hx_ctor_nx3_PComplex(this, part, notes, valueposition);
	}
	
	
	public static   void __hx_ctor_nx3_PComplex(nx3.PComplex __temp_me99, nx3.PPart part, haxe.root.Array<nx3.PNote> notes, int valueposition)
	{
		__temp_me99.part = part;
		if (( notes.length > 2 )) 
		{
			throw haxe.lang.HaxeException.wrap("PComplex nr of PNote(s) limited to max 2 - for now");
		}
		
		__temp_me99.notes = notes;
		{
			int _g = 0;
			haxe.root.Array<nx3.PNote> _g1 = __temp_me99.notes;
			while (( _g < _g1.length ))
			{
				nx3.PNote note = _g1.__get(_g);
				 ++ _g;
				note.complex = __temp_me99;
			}
			
		}
		
		__temp_me99.valueposition = valueposition;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PComplex(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PComplex(((nx3.PPart) (arr.__get(0)) ), ((haxe.root.Array<nx3.PNote>) (arr.__get(1)) ), ((int) (haxe.lang.Runtime.toInt(arr.__get(2))) ));
	}
	
	
	public  nx3.PPart part;
	
	public  int valueposition;
	
	public  haxe.root.Array<nx3.PNote> notes;
	
	public   haxe.root.Array<nx3.PNote> getNotes()
	{
		return this.notes;
	}
	
	
	public   int getValueposition()
	{
		return this.valueposition;
	}
	
	
	public   nx3.PPart getPart()
	{
		return this.part;
	}
	
	
	public  nx3.PColumn column;
	
	public   nx3.PColumn getColumn()
	{
		if (( this.column != null )) 
		{
			return this.column;
		}
		
		this.part.getBar().getColumns();
		if (( this.column == null )) 
		{
			throw haxe.lang.HaxeException.wrap("this shouldn\'t happen");
		}
		
		return this.column;
	}
	
	
	public  haxe.root.Array<nx3.geom.Rectangle> headsrects;
	
	public   haxe.root.Array<nx3.geom.Rectangle> getHeadsRects()
	{
		if (( this.headsrects != null )) 
		{
			return this.headsrects;
		}
		
		haxe.root.Array<nx3.geom.Rectangle> firstrects = this.notes.__get(0).getHeadsRects();
		if (( this.notes.length == 1 )) 
		{
			return firstrects;
		}
		
		haxe.root.Array<nx3.geom.Rectangle> secondrects = this.notes.__get(1).getHeadsRects().copy();
		double xoffset = this.getNoteXOffset(this.notes.__get(1));
		nx3.geom.RectanglesTools.offset(secondrects, xoffset, ((double) (0) ));
		this.headsrects = firstrects.concat(secondrects);
		return this.headsrects;
	}
	
	
	public  haxe.root.Array<nx3.geom.Rectangle> signsrects;
	
	public   haxe.root.Array<nx3.geom.Rectangle> getSignsRects()
	{
		if (( this.signsrects != null )) 
		{
			return this.signsrects;
		}
		
		if (( this.getVisibleSigns().length == 0 )) 
		{
			return new haxe.root.Array<nx3.geom.Rectangle>(new nx3.geom.Rectangle[]{});
		}
		
		this.signsrects = new nx3.PSignsRectsCalculator(((haxe.root.Array<java.lang.Object>) (this.getVisibleSigns()) )).getSignRects(this.getHeadsRects());
		return this.signsrects;
	}
	
	
	public  java.lang.Object secondoffset;
	
	public   double getNoteXOffset(nx3.PNote note)
	{
		nx3.PNote __temp_stmt664 = null;
		{
			haxe.root.Array<nx3.PNote> array = this.getNotes();
			__temp_stmt664 = array.__get(0);
		}
		
		if (( note == __temp_stmt664 )) 
		{
			return ((double) (0) );
		}
		
		if (( ! (( this.secondoffset == null )) )) 
		{
			return ((double) (haxe.lang.Runtime.toDouble(this.secondoffset)) );
		}
		
		nx3.PNote __temp_stmt665 = null;
		{
			haxe.root.Array<nx3.PNote> array1 = this.getNotes();
			__temp_stmt665 = array1.__get(1);
		}
		
		nx3.PNoteOffsetCalculator __temp_stmt666 = new nx3.PNoteOffsetCalculator(((nx3.PComplex) (this) ));
		this.secondoffset = __temp_stmt666.getNoteOffset(__temp_stmt665);
		return ((double) (haxe.lang.Runtime.toDouble(this.secondoffset)) );
	}
	
	
	public  haxe.root.Array<java.lang.Object> signs;
	
	public   haxe.root.Array<java.lang.Object> getSigns()
	{
		if (( this.signs != null )) 
		{
			return this.signs;
		}
		
		this.signs = new nx3.PSignsCalculator(((haxe.root.Array<nx3.PNote>) (this.getNotes()) )).getSigns();
		return this.signs;
	}
	
	
	public  haxe.root.Array<java.lang.Object> visiblesigns;
	
	public   haxe.root.Array<java.lang.Object> getVisibleSigns()
	{
		if (( this.visiblesigns != null )) 
		{
			return this.visiblesigns;
		}
		
		this.visiblesigns = new nx3.PSignsCalculator(((haxe.root.Array<nx3.PNote>) (this.getNotes()) )).getVisibleSigns();
		return this.visiblesigns;
	}
	
	
	public  haxe.root.Array<nx3.geom.Rectangle> stavesrects;
	
	public   haxe.root.Array<nx3.geom.Rectangle> getStavesRects()
	{
		if (( this.stavesrects != null )) 
		{
			return this.stavesrects;
		}
		
		this.stavesrects = new haxe.root.Array<nx3.geom.Rectangle>(new nx3.geom.Rectangle[]{});
		{
			int _g = 0;
			haxe.root.Array<nx3.PNote> _g1 = this.notes;
			while (( _g < _g1.length ))
			{
				nx3.PNote note = _g1.__get(_g);
				 ++ _g;
				nx3.geom.Rectangle rect = this.getStaveRect(note);
				if (( rect != null )) 
				{
					this.stavesrects.push(rect);
				}
				
			}
			
		}
		
		{
			int _g2 = 0;
			haxe.root.Array<nx3.PNote> _g11 = this.notes;
			while (( _g2 < _g11.length ))
			{
				nx3.PNote note1 = _g11.__get(_g2);
				 ++ _g2;
				nx3.geom.Rectangle flagrect = new nx3.PStaveRectCalculator(((nx3.PNote) (note1) )).getFlagRect();
				if (( flagrect != null )) 
				{
					this.stavesrects.push(flagrect);
				}
				
			}
			
		}
		
		return this.stavesrects;
	}
	
	
	public   nx3.geom.Rectangle getStaveRect(nx3.PNote note)
	{
		return new nx3.PStaveRectCalculator(((nx3.PNote) (note) )).getStaveRect();
	}
	
	
	public  haxe.root.Array<nx3.geom.Rectangle> tierects;
	
	public   haxe.root.Array<nx3.geom.Rectangle> getTieRects()
	{
		if (( this.tierects != null )) 
		{
			return this.tierects;
		}
		
		this.tierects = new nx3.PComplexTierectsCalculator(((nx3.PComplex) (this) )).getTieRects();
		return this.tierects;
	}
	
	
	public  haxe.root.Array<nx3.geom.Rectangle> dotrects;
	
	public   haxe.root.Array<nx3.geom.Rectangle> getDotRects()
	{
		if (( this.dotrects != null )) 
		{
			return this.dotrects;
		}
		
		this.dotrects = new nx3.PComplexDotsrectsCalculator(((nx3.PComplex) (this) )).getDotRects();
		return this.dotrects;
	}
	
	
	public  nx3.geom.Rectangle baserect;
	
	public   nx3.geom.Rectangle getBaseRect()
	{
		if (( this.baserect != null )) 
		{
			return this.baserect;
		}
		
		this.baserect = new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (0) ), ((java.lang.Object) (0) ), ((java.lang.Object) (0) ));
		{
			int _g = 0;
			haxe.root.Array<nx3.PNote> _g1 = this.getNotes();
			while (( _g < _g1.length ))
			{
				nx3.PNote note = _g1.__get(_g);
				 ++ _g;
				this.baserect = this.baserect.union(note.getBaseRect());
			}
			
		}
		
		return this.baserect;
	}
	
	
	public  haxe.root.Array<nx3.geom.Rectangle> allrects;
	
	public   haxe.root.Array<nx3.geom.Rectangle> getAllRects()
	{
		if (( this.allrects != null )) 
		{
			return this.allrects;
		}
		
		this.allrects = new haxe.root.Array<nx3.geom.Rectangle>(new nx3.geom.Rectangle[]{});
		this.allrects = nx3.geom.RectanglesTools.concat(this.allrects, this.getHeadsRects());
		this.allrects = nx3.geom.RectanglesTools.concat(this.allrects, this.getStavesRects());
		this.allrects = nx3.geom.RectanglesTools.concat(this.allrects, this.getSignsRects());
		this.allrects = nx3.geom.RectanglesTools.concat(this.allrects, this.getTieRects());
		this.allrects = nx3.geom.RectanglesTools.concat(this.allrects, this.getDotRects());
		return this.allrects;
	}
	
	
	public  nx3.geom.Rectangle rect;
	
	public   nx3.geom.Rectangle getRect()
	{
		this.rect = nx3.geom.RectanglesTools.unionAll(this.getAllRects());
		return this.rect;
	}
	
	
	public  java.lang.Object xposition;
	
	public   double getXPosition()
	{
		if (( ! (( this.xposition == null )) )) 
		{
			return ((double) (haxe.lang.Runtime.toDouble(this.xposition)) );
		}
		
		this.getHeadsRects();
		this.xposition = this.getColumn().getSPosition();
		return ((double) (haxe.lang.Runtime.toDouble(this.xposition)) );
	}
	
	
	public   int getIndex()
	{
		return this.part.getComplexes().indexOf(this, null);
	}
	
	
	public  java.lang.Object leftX;
	
	public   double getLeftX()
	{
		if (( ! (( this.leftX == null )) )) 
		{
			return ((double) (haxe.lang.Runtime.toDouble(this.leftX)) );
		}
		
		this.leftX = this.getRect().x;
		return ((double) (haxe.lang.Runtime.toDouble(this.leftX)) );
	}
	
	
	public  java.lang.Object rightX;
	
	public   double getRightX()
	{
		if (( ! (( this.rightX == null )) )) 
		{
			return ((double) (haxe.lang.Runtime.toDouble(this.rightX)) );
		}
		
		this.rightX = ( this.getRect().x + this.getRect().width );
		return ((double) (haxe.lang.Runtime.toDouble(this.rightX)) );
	}
	
	
	public  nx3.PComplex next;
	
	public   nx3.PComplex getNext()
	{
		if (( this.next != null )) 
		{
			return this.next;
		}
		
		this.next = this.getColumn().getNextComplex(this);
		return this.next;
	}
	
	
	public  haxe.root.Array<java.lang.Object> tieinfos;
	
	public   void setTieinfos(haxe.root.Array<java.lang.Object> val)
	{
		this.tieinfos = val;
	}
	
	
	public   haxe.root.Array<java.lang.Object> getTieinfos()
	{
		if (( this.tieinfos == null )) 
		{
			this.getTieRects();
		}
		
		if (( this.getTieRects().length == 0 )) 
		{
			return new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		}
		
		this.tieinfos = new nx3.PComplexTieTargetCalculator(((haxe.root.Array<java.lang.Object>) (this.tieinfos) )).findTargetHeads();
		return this.tieinfos;
	}
	
	
	public   haxe.root.Array<nx3.PHead> getHeads()
	{
		haxe.root.Array<nx3.PHead> result = new haxe.root.Array<nx3.PHead>(new nx3.PHead[]{});
		{
			int _g = 0;
			haxe.root.Array<nx3.PNote> _g1 = this.getNotes();
			while (( _g < _g1.length ))
			{
				nx3.PNote note = _g1.__get(_g);
				 ++ _g;
				result = result.concat(note.get_heads());
			}
			
		}
		
		return result;
	}
	
	
	public  java.lang.Object hasTie;
	
	public   boolean getHasTie()
	{
		if (( ! (( this.hasTie == null )) )) 
		{
			return haxe.lang.Runtime.toBool(this.hasTie);
		}
		
		{
			int _g = 0;
			haxe.root.Array<nx3.PNote> _g1 = this.getNotes();
			while (( _g < _g1.length ))
			{
				nx3.PNote note = _g1.__get(_g);
				 ++ _g;
				if (haxe.lang.Runtime.eq(note.getHasTie(), true)) 
				{
					this.hasTie = true;
					return haxe.lang.Runtime.toBool(this.hasTie);
				}
				
			}
			
		}
		
		this.hasTie = false;
		return haxe.lang.Runtime.toBool(this.hasTie);
	}
	
	
	public  haxe.root.Array<java.lang.Object> headlevels;
	
	public   haxe.root.Array<java.lang.Object> getHeadLevels()
	{
		if (( this.headlevels != null )) 
		{
			return this.headlevels;
		}
		
		this.headlevels = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		{
			int _g = 0;
			haxe.root.Array<nx3.PNote> _g1 = this.getNotes();
			while (( _g < _g1.length ))
			{
				nx3.PNote note = _g1.__get(_g);
				 ++ _g;
				{
					int _g2 = 0;
					haxe.root.Array<nx3.NHead> _g3 = note.nnote.get_nheads();
					while (( _g2 < _g3.length ))
					{
						nx3.NHead nhead = _g3.__get(_g2);
						 ++ _g2;
						this.headlevels.push(nhead.level);
					}
					
				}
				
			}
			
		}
		
		return this.headlevels;
	}
	
	
	@Override public   java.lang.String toString()
	{
		java.lang.String str = "PComplex: \r";
		{
			int _g = 0;
			haxe.root.Array<nx3.PNote> _g1 = this.getNotes();
			while (( _g < _g1.length ))
			{
				nx3.PNote note = _g1.__get(_g);
				 ++ _g;
				str += ( ( "- Note: " + haxe.root.Std.string(note.nnote) ) + "\r" );
			}
			
		}
		
		return str;
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef667 = true;
			switch (field.hashCode())
			{
				case -1224444010:
				{
					if (field.equals("hasTie")) 
					{
						__temp_executeDef667 = false;
						this.hasTie = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -61658726:
				{
					if (field.equals("valueposition")) 
					{
						__temp_executeDef667 = false;
						this.valueposition = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -931102276:
				{
					if (field.equals("rightX")) 
					{
						__temp_executeDef667 = false;
						this.rightX = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 84050439:
				{
					if (field.equals("secondoffset")) 
					{
						__temp_executeDef667 = false;
						this.secondoffset = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 102850865:
				{
					if (field.equals("leftX")) 
					{
						__temp_executeDef667 = false;
						this.leftX = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1398365791:
				{
					if (field.equals("xposition")) 
					{
						__temp_executeDef667 = false;
						this.xposition = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef667) 
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
			boolean __temp_executeDef668 = true;
			switch (field.hashCode())
			{
				case -2128037041:
				{
					if (field.equals("headlevels")) 
					{
						__temp_executeDef668 = false;
						this.headlevels = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3433459:
				{
					if (field.equals("part")) 
					{
						__temp_executeDef668 = false;
						this.part = ((nx3.PPart) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1224444010:
				{
					if (field.equals("hasTie")) 
					{
						__temp_executeDef668 = false;
						this.hasTie = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -61658726:
				{
					if (field.equals("valueposition")) 
					{
						__temp_executeDef668 = false;
						this.valueposition = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 1993034485:
				{
					if (field.equals("tieinfos")) 
					{
						__temp_executeDef668 = false;
						this.tieinfos = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 105008833:
				{
					if (field.equals("notes")) 
					{
						__temp_executeDef668 = false;
						this.notes = ((haxe.root.Array<nx3.PNote>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3377907:
				{
					if (field.equals("next")) 
					{
						__temp_executeDef668 = false;
						this.next = ((nx3.PComplex) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1354837162:
				{
					if (field.equals("column")) 
					{
						__temp_executeDef668 = false;
						this.column = ((nx3.PColumn) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -931102276:
				{
					if (field.equals("rightX")) 
					{
						__temp_executeDef668 = false;
						this.rightX = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1916135332:
				{
					if (field.equals("headsrects")) 
					{
						__temp_executeDef668 = false;
						this.headsrects = ((haxe.root.Array<nx3.geom.Rectangle>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 102850865:
				{
					if (field.equals("leftX")) 
					{
						__temp_executeDef668 = false;
						this.leftX = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -565637511:
				{
					if (field.equals("signsrects")) 
					{
						__temp_executeDef668 = false;
						this.signsrects = ((haxe.root.Array<nx3.geom.Rectangle>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1398365791:
				{
					if (field.equals("xposition")) 
					{
						__temp_executeDef668 = false;
						this.xposition = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 84050439:
				{
					if (field.equals("secondoffset")) 
					{
						__temp_executeDef668 = false;
						this.secondoffset = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3496420:
				{
					if (field.equals("rect")) 
					{
						__temp_executeDef668 = false;
						this.rect = ((nx3.geom.Rectangle) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 109435478:
				{
					if (field.equals("signs")) 
					{
						__temp_executeDef668 = false;
						this.signs = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1815365134:
				{
					if (field.equals("allrects")) 
					{
						__temp_executeDef668 = false;
						this.allrects = ((haxe.root.Array<nx3.geom.Rectangle>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -218996444:
				{
					if (field.equals("visiblesigns")) 
					{
						__temp_executeDef668 = false;
						this.visiblesigns = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1720610763:
				{
					if (field.equals("baserect")) 
					{
						__temp_executeDef668 = false;
						this.baserect = ((nx3.geom.Rectangle) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1296359435:
				{
					if (field.equals("stavesrects")) 
					{
						__temp_executeDef668 = false;
						this.stavesrects = ((haxe.root.Array<nx3.geom.Rectangle>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1345405798:
				{
					if (field.equals("dotrects")) 
					{
						__temp_executeDef668 = false;
						this.dotrects = ((haxe.root.Array<nx3.geom.Rectangle>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 2001075327:
				{
					if (field.equals("tierects")) 
					{
						__temp_executeDef668 = false;
						this.tierects = ((haxe.root.Array<nx3.geom.Rectangle>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef668) 
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
			boolean __temp_executeDef669 = true;
			switch (field.hashCode())
			{
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("toString"))) );
					}
					
					break;
				}
				
				
				case 3433459:
				{
					if (field.equals("part")) 
					{
						__temp_executeDef669 = false;
						return this.part;
					}
					
					break;
				}
				
				
				case 953048933:
				{
					if (field.equals("getHeadLevels")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getHeadLevels"))) );
					}
					
					break;
				}
				
				
				case -61658726:
				{
					if (field.equals("valueposition")) 
					{
						__temp_executeDef669 = false;
						return this.valueposition;
					}
					
					break;
				}
				
				
				case -2128037041:
				{
					if (field.equals("headlevels")) 
					{
						__temp_executeDef669 = false;
						return this.headlevels;
					}
					
					break;
				}
				
				
				case 105008833:
				{
					if (field.equals("notes")) 
					{
						__temp_executeDef669 = false;
						return this.notes;
					}
					
					break;
				}
				
				
				case 471571084:
				{
					if (field.equals("getHasTie")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getHasTie"))) );
					}
					
					break;
				}
				
				
				case 1960834315:
				{
					if (field.equals("getNotes")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNotes"))) );
					}
					
					break;
				}
				
				
				case -1224444010:
				{
					if (field.equals("hasTie")) 
					{
						__temp_executeDef669 = false;
						return this.hasTie;
					}
					
					break;
				}
				
				
				case -1179458076:
				{
					if (field.equals("getValueposition")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getValueposition"))) );
					}
					
					break;
				}
				
				
				case 1954976989:
				{
					if (field.equals("getHeads")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getHeads"))) );
					}
					
					break;
				}
				
				
				case -75248535:
				{
					if (field.equals("getPart")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getPart"))) );
					}
					
					break;
				}
				
				
				case -224032661:
				{
					if (field.equals("getTieinfos")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getTieinfos"))) );
					}
					
					break;
				}
				
				
				case -1354837162:
				{
					if (field.equals("column")) 
					{
						__temp_executeDef669 = false;
						return this.column;
					}
					
					break;
				}
				
				
				case -312612489:
				{
					if (field.equals("setTieinfos")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("setTieinfos"))) );
					}
					
					break;
				}
				
				
				case 341177932:
				{
					if (field.equals("getColumn")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getColumn"))) );
					}
					
					break;
				}
				
				
				case 1993034485:
				{
					if (field.equals("tieinfos")) 
					{
						__temp_executeDef669 = false;
						return this.tieinfos;
					}
					
					break;
				}
				
				
				case -1916135332:
				{
					if (field.equals("headsrects")) 
					{
						__temp_executeDef669 = false;
						return this.headsrects;
					}
					
					break;
				}
				
				
				case -75304087:
				{
					if (field.equals("getNext")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNext"))) );
					}
					
					break;
				}
				
				
				case 2051530802:
				{
					if (field.equals("getHeadsRects")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getHeadsRects"))) );
					}
					
					break;
				}
				
				
				case 3377907:
				{
					if (field.equals("next")) 
					{
						__temp_executeDef669 = false;
						return this.next;
					}
					
					break;
				}
				
				
				case -565637511:
				{
					if (field.equals("signsrects")) 
					{
						__temp_executeDef669 = false;
						return this.signsrects;
					}
					
					break;
				}
				
				
				case 764912818:
				{
					if (field.equals("getRightX")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getRightX"))) );
					}
					
					break;
				}
				
				
				case -892938673:
				{
					if (field.equals("getSignsRects")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getSignsRects"))) );
					}
					
					break;
				}
				
				
				case -931102276:
				{
					if (field.equals("rightX")) 
					{
						__temp_executeDef669 = false;
						return this.rightX;
					}
					
					break;
				}
				
				
				case 84050439:
				{
					if (field.equals("secondoffset")) 
					{
						__temp_executeDef669 = false;
						return this.secondoffset;
					}
					
					break;
				}
				
				
				case 1958676347:
				{
					if (field.equals("getLeftX")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getLeftX"))) );
					}
					
					break;
				}
				
				
				case -1500720733:
				{
					if (field.equals("getNoteXOffset")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNoteXOffset"))) );
					}
					
					break;
				}
				
				
				case 102850865:
				{
					if (field.equals("leftX")) 
					{
						__temp_executeDef669 = false;
						return this.leftX;
					}
					
					break;
				}
				
				
				case 109435478:
				{
					if (field.equals("signs")) 
					{
						__temp_executeDef669 = false;
						return this.signs;
					}
					
					break;
				}
				
				
				case 1956171548:
				{
					if (field.equals("getIndex")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getIndex"))) );
					}
					
					break;
				}
				
				
				case 1965260960:
				{
					if (field.equals("getSigns")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getSigns"))) );
					}
					
					break;
				}
				
				
				case -1343326453:
				{
					if (field.equals("getXPosition")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getXPosition"))) );
					}
					
					break;
				}
				
				
				case -218996444:
				{
					if (field.equals("visiblesigns")) 
					{
						__temp_executeDef669 = false;
						return this.visiblesigns;
					}
					
					break;
				}
				
				
				case -1398365791:
				{
					if (field.equals("xposition")) 
					{
						__temp_executeDef669 = false;
						return this.xposition;
					}
					
					break;
				}
				
				
				case 1377960826:
				{
					if (field.equals("getVisibleSigns")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getVisibleSigns"))) );
					}
					
					break;
				}
				
				
				case -75185574:
				{
					if (field.equals("getRect")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getRect"))) );
					}
					
					break;
				}
				
				
				case 1296359435:
				{
					if (field.equals("stavesrects")) 
					{
						__temp_executeDef669 = false;
						return this.stavesrects;
					}
					
					break;
				}
				
				
				case 3496420:
				{
					if (field.equals("rect")) 
					{
						__temp_executeDef669 = false;
						return this.rect;
					}
					
					break;
				}
				
				
				case 626538165:
				{
					if (field.equals("getStavesRects")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getStavesRects"))) );
					}
					
					break;
				}
				
				
				case -431254684:
				{
					if (field.equals("getAllRects")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getAllRects"))) );
					}
					
					break;
				}
				
				
				case -2038299491:
				{
					if (field.equals("getStaveRect")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getStaveRect"))) );
					}
					
					break;
				}
				
				
				case 1815365134:
				{
					if (field.equals("allrects")) 
					{
						__temp_executeDef669 = false;
						return this.allrects;
					}
					
					break;
				}
				
				
				case 2001075327:
				{
					if (field.equals("tierects")) 
					{
						__temp_executeDef669 = false;
						return this.tierects;
					}
					
					break;
				}
				
				
				case 356336075:
				{
					if (field.equals("getBaseRect")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBaseRect"))) );
					}
					
					break;
				}
				
				
				case -245544491:
				{
					if (field.equals("getTieRects")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getTieRects"))) );
					}
					
					break;
				}
				
				
				case -1720610763:
				{
					if (field.equals("baserect")) 
					{
						__temp_executeDef669 = false;
						return this.baserect;
					}
					
					break;
				}
				
				
				case 1345405798:
				{
					if (field.equals("dotrects")) 
					{
						__temp_executeDef669 = false;
						return this.dotrects;
					}
					
					break;
				}
				
				
				case -901214020:
				{
					if (field.equals("getDotRects")) 
					{
						__temp_executeDef669 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getDotRects"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef669) 
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
			boolean __temp_executeDef670 = true;
			switch (field.hashCode())
			{
				case -1224444010:
				{
					if (field.equals("hasTie")) 
					{
						__temp_executeDef670 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.hasTie)) );
					}
					
					break;
				}
				
				
				case -61658726:
				{
					if (field.equals("valueposition")) 
					{
						__temp_executeDef670 = false;
						return ((double) (this.valueposition) );
					}
					
					break;
				}
				
				
				case -931102276:
				{
					if (field.equals("rightX")) 
					{
						__temp_executeDef670 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.rightX)) );
					}
					
					break;
				}
				
				
				case 84050439:
				{
					if (field.equals("secondoffset")) 
					{
						__temp_executeDef670 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.secondoffset)) );
					}
					
					break;
				}
				
				
				case 102850865:
				{
					if (field.equals("leftX")) 
					{
						__temp_executeDef670 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.leftX)) );
					}
					
					break;
				}
				
				
				case -1398365791:
				{
					if (field.equals("xposition")) 
					{
						__temp_executeDef670 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.xposition)) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef670) 
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
			boolean __temp_executeDef671 = true;
			switch (field.hashCode())
			{
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef671 = false;
						return this.toString();
					}
					
					break;
				}
				
				
				case 1960834315:
				{
					if (field.equals("getNotes")) 
					{
						__temp_executeDef671 = false;
						return this.getNotes();
					}
					
					break;
				}
				
				
				case 953048933:
				{
					if (field.equals("getHeadLevels")) 
					{
						__temp_executeDef671 = false;
						return this.getHeadLevels();
					}
					
					break;
				}
				
				
				case -1179458076:
				{
					if (field.equals("getValueposition")) 
					{
						__temp_executeDef671 = false;
						return this.getValueposition();
					}
					
					break;
				}
				
				
				case 471571084:
				{
					if (field.equals("getHasTie")) 
					{
						__temp_executeDef671 = false;
						return this.getHasTie();
					}
					
					break;
				}
				
				
				case -75248535:
				{
					if (field.equals("getPart")) 
					{
						__temp_executeDef671 = false;
						return this.getPart();
					}
					
					break;
				}
				
				
				case 1954976989:
				{
					if (field.equals("getHeads")) 
					{
						__temp_executeDef671 = false;
						return this.getHeads();
					}
					
					break;
				}
				
				
				case 341177932:
				{
					if (field.equals("getColumn")) 
					{
						__temp_executeDef671 = false;
						return this.getColumn();
					}
					
					break;
				}
				
				
				case -224032661:
				{
					if (field.equals("getTieinfos")) 
					{
						__temp_executeDef671 = false;
						return this.getTieinfos();
					}
					
					break;
				}
				
				
				case 2051530802:
				{
					if (field.equals("getHeadsRects")) 
					{
						__temp_executeDef671 = false;
						return this.getHeadsRects();
					}
					
					break;
				}
				
				
				case -312612489:
				{
					if (field.equals("setTieinfos")) 
					{
						__temp_executeDef671 = false;
						this.setTieinfos(((haxe.root.Array<java.lang.Object>) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -892938673:
				{
					if (field.equals("getSignsRects")) 
					{
						__temp_executeDef671 = false;
						return this.getSignsRects();
					}
					
					break;
				}
				
				
				case -75304087:
				{
					if (field.equals("getNext")) 
					{
						__temp_executeDef671 = false;
						return this.getNext();
					}
					
					break;
				}
				
				
				case -1500720733:
				{
					if (field.equals("getNoteXOffset")) 
					{
						__temp_executeDef671 = false;
						return this.getNoteXOffset(((nx3.PNote) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 764912818:
				{
					if (field.equals("getRightX")) 
					{
						__temp_executeDef671 = false;
						return this.getRightX();
					}
					
					break;
				}
				
				
				case 1965260960:
				{
					if (field.equals("getSigns")) 
					{
						__temp_executeDef671 = false;
						return this.getSigns();
					}
					
					break;
				}
				
				
				case 1958676347:
				{
					if (field.equals("getLeftX")) 
					{
						__temp_executeDef671 = false;
						return this.getLeftX();
					}
					
					break;
				}
				
				
				case 1377960826:
				{
					if (field.equals("getVisibleSigns")) 
					{
						__temp_executeDef671 = false;
						return this.getVisibleSigns();
					}
					
					break;
				}
				
				
				case 1956171548:
				{
					if (field.equals("getIndex")) 
					{
						__temp_executeDef671 = false;
						return this.getIndex();
					}
					
					break;
				}
				
				
				case 626538165:
				{
					if (field.equals("getStavesRects")) 
					{
						__temp_executeDef671 = false;
						return this.getStavesRects();
					}
					
					break;
				}
				
				
				case -1343326453:
				{
					if (field.equals("getXPosition")) 
					{
						__temp_executeDef671 = false;
						return this.getXPosition();
					}
					
					break;
				}
				
				
				case -2038299491:
				{
					if (field.equals("getStaveRect")) 
					{
						__temp_executeDef671 = false;
						return this.getStaveRect(((nx3.PNote) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -75185574:
				{
					if (field.equals("getRect")) 
					{
						__temp_executeDef671 = false;
						return this.getRect();
					}
					
					break;
				}
				
				
				case -245544491:
				{
					if (field.equals("getTieRects")) 
					{
						__temp_executeDef671 = false;
						return this.getTieRects();
					}
					
					break;
				}
				
				
				case -431254684:
				{
					if (field.equals("getAllRects")) 
					{
						__temp_executeDef671 = false;
						return this.getAllRects();
					}
					
					break;
				}
				
				
				case -901214020:
				{
					if (field.equals("getDotRects")) 
					{
						__temp_executeDef671 = false;
						return this.getDotRects();
					}
					
					break;
				}
				
				
				case 356336075:
				{
					if (field.equals("getBaseRect")) 
					{
						__temp_executeDef671 = false;
						return this.getBaseRect();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef671) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("headlevels");
		baseArr.push("hasTie");
		baseArr.push("tieinfos");
		baseArr.push("next");
		baseArr.push("rightX");
		baseArr.push("leftX");
		baseArr.push("xposition");
		baseArr.push("rect");
		baseArr.push("allrects");
		baseArr.push("baserect");
		baseArr.push("dotrects");
		baseArr.push("tierects");
		baseArr.push("stavesrects");
		baseArr.push("visiblesigns");
		baseArr.push("signs");
		baseArr.push("secondoffset");
		baseArr.push("signsrects");
		baseArr.push("headsrects");
		baseArr.push("column");
		baseArr.push("notes");
		baseArr.push("valueposition");
		baseArr.push("part");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


