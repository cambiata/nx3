package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PNote extends haxe.lang.HxObject
{
	public    PNote(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PNote(nx3.NNote nnote)
	{
		nx3.PNote.__hx_ctor_nx3_PNote(this, nnote);
	}
	
	
	public static   void __hx_ctor_nx3_PNote(nx3.PNote __temp_me120, nx3.NNote nnote)
	{
		__temp_me120.nnote = nnote;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PNote(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PNote(((nx3.NNote) (arr.__get(0)) ));
	}
	
	
	public  nx3.NNote nnote;
	
	public  nx3.PVoice voice;
	
	public   nx3.PVoice getVoice()
	{
		return this.voice;
	}
	
	
	public  haxe.root.Array<nx3.PHead> heads;
	
	public   haxe.root.Array<nx3.PHead> getHeads()
	{
		if (( this.heads != null )) 
		{
			return this.heads;
		}
		
		this.heads = new haxe.root.Array<nx3.PHead>(new nx3.PHead[]{});
		{
			int _g = 0;
			haxe.root.Array<nx3.NHead> _g1 = this.nnote.get_nheads();
			while (( _g < _g1.length ))
			{
				nx3.NHead nhead = _g1.__get(_g);
				 ++ _g;
				nx3.PHead phead = new nx3.PHead(((nx3.NHead) (nhead) ));
				phead.note = this;
				this.heads.push(phead);
			}
			
		}
		
		return this.heads;
	}
	
	
	public  nx3.PBeamgroup beamgroup;
	
	public   nx3.PBeamgroup getBeamgroup()
	{
		if (( this.beamgroup == null )) 
		{
			this.voice.getBeamgroups(null);
		}
		
		if (( this.beamgroup == null )) 
		{
			throw haxe.lang.HaxeException.wrap("this should not happen");
		}
		
		return this.beamgroup;
	}
	
	
	public   nx3.EDirectionUD getDirection()
	{
		return this.getBeamgroup().getDirection();
	}
	
	
	public  nx3.PComplex complex;
	
	public   nx3.PComplex getComplex()
	{
		if (( this.complex == null )) 
		{
			this.voice.getPart().getComplexes();
		}
		
		if (( this.complex == null )) 
		{
			throw haxe.lang.HaxeException.wrap("Shouldn\'t happen");
		}
		
		return this.complex;
	}
	
	
	public  haxe.root.Array<nx3.geom.Rectangle> headsRects;
	
	public   haxe.root.Array<nx3.geom.Rectangle> getHeadsRects()
	{
		if (( this.headsRects != null )) 
		{
			return this.headsRects;
		}
		
		nx3.PNoteheadsRectsCalculator calculator = new nx3.PNoteheadsRectsCalculator(((nx3.PNote) (this) ));
		this.headsRects = calculator.getHeadsRects();
		return this.headsRects;
	}
	
	
	public  nx3.geom.Rectangle staveRect;
	
	public  boolean staveRectChecked;
	
	public   nx3.geom.Rectangle getStaveRect()
	{
		if (this.staveRectChecked) 
		{
			return this.staveRect;
		}
		
		this.staveRect = this.getComplex().getStaveRect(this);
		this.staveRectChecked = true;
		return this.staveRect;
	}
	
	
	public  java.lang.Object staveXPosition;
	
	public   double getStaveXPosition()
	{
		if (( ! (( this.staveXPosition == null )) )) 
		{
			return ((double) (haxe.lang.Runtime.toDouble(this.staveXPosition)) );
		}
		
		nx3.geom.Rectangle staverect = this.getStaveRect();
		if (( staverect == null )) 
		{
			return ((double) (0) );
		}
		
		if (( this.getDirection() == nx3.EDirectionUD.Up )) 
		{
			this.staveXPosition = staverect.width;
		}
		 else 
		{
			this.staveXPosition = staverect.x;
		}
		
		return ((double) (haxe.lang.Runtime.toDouble(this.staveXPosition)) );
	}
	
	
	public  nx3.geom.Rectangle baserect;
	
	public   nx3.geom.Rectangle getBaseRect()
	{
		if (( this.baserect != null )) 
		{
			return this.baserect;
		}
		
		this.baserect = new nx3.PBaseRectCalculator(((nx3.PNote) (this) )).getBaseRect();
		return this.baserect;
	}
	
	
	public  java.lang.Object xoffset;
	
	public   double getXOffset()
	{
		if (( ! (( this.xoffset == null )) )) 
		{
			return ((double) (haxe.lang.Runtime.toDouble(this.xoffset)) );
		}
		
		this.xoffset = this.getComplex().getNoteXOffset(this);
		return ((double) (haxe.lang.Runtime.toDouble(this.xoffset)) );
	}
	
	
	public  java.lang.Object xposition;
	
	public   double getXPosition()
	{
		if (( ! (( this.xposition == null )) )) 
		{
			return ((double) (haxe.lang.Runtime.toDouble(this.xposition)) );
		}
		
		this.xposition = ( this.getComplex().getXPosition() + this.getXOffset() );
		return ((double) (haxe.lang.Runtime.toDouble(this.xposition)) );
	}
	
	
	public   haxe.root.Array<nx3.ETie> getTies()
	{
		return this.nnote.getTies();
	}
	
	
	public  nx3.PNote next;
	
	public   nx3.PNote getNext()
	{
		if (( this.next != null )) 
		{
			return this.next;
		}
		
		int idx = this.voice.getNotes().indexOf(this, null);
		{
			haxe.root.Array<nx3.PNote> a = this.voice.getNotes();
			int idx1 = ( idx + 1 );
			if (( ( idx1 < 0 ) || ( idx1 > ( a.length - 1 ) ) )) 
			{
				this.next = null;
			}
			 else 
			{
				this.next = a.__get(idx1);
			}
			
		}
		
		return this.next;
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
			haxe.root.Array<nx3.NHead> _g1 = this.nnote.get_nheads();
			while (( _g < _g1.length ))
			{
				nx3.NHead nhead = _g1.__get(_g);
				 ++ _g;
				if (( nhead.tie != null )) 
				{
					this.hasTie = true;
					return haxe.lang.Runtime.toBool(this.hasTie);
				}
				
			}
			
		}
		
		this.hasTie = false;
		return haxe.lang.Runtime.toBool(this.hasTie);
	}
	
	
	public   void setTiesInfo(haxe.root.Array<nx3.ETie> info)
	{
		{
		}
		
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef712 = true;
			switch (field.hashCode())
			{
				case -1224444010:
				{
					if (field.equals("hasTie")) 
					{
						__temp_executeDef712 = false;
						this.hasTie = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1633199694:
				{
					if (field.equals("staveXPosition")) 
					{
						__temp_executeDef712 = false;
						this.staveXPosition = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1398365791:
				{
					if (field.equals("xposition")) 
					{
						__temp_executeDef712 = false;
						this.xposition = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1893520629:
				{
					if (field.equals("xoffset")) 
					{
						__temp_executeDef712 = false;
						this.xoffset = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef712) 
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
			boolean __temp_executeDef713 = true;
			switch (field.hashCode())
			{
				case -1224444010:
				{
					if (field.equals("hasTie")) 
					{
						__temp_executeDef713 = false;
						this.hasTie = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 104974688:
				{
					if (field.equals("nnote")) 
					{
						__temp_executeDef713 = false;
						this.nnote = ((nx3.NNote) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3377907:
				{
					if (field.equals("next")) 
					{
						__temp_executeDef713 = false;
						this.next = ((nx3.PNote) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 112386354:
				{
					if (field.equals("voice")) 
					{
						__temp_executeDef713 = false;
						this.voice = ((nx3.PVoice) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1398365791:
				{
					if (field.equals("xposition")) 
					{
						__temp_executeDef713 = false;
						this.xposition = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 99151507:
				{
					if (field.equals("heads")) 
					{
						__temp_executeDef713 = false;
						this.heads = ((haxe.root.Array<nx3.PHead>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1893520629:
				{
					if (field.equals("xoffset")) 
					{
						__temp_executeDef713 = false;
						this.xoffset = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1993942992:
				{
					if (field.equals("beamgroup")) 
					{
						__temp_executeDef713 = false;
						this.beamgroup = ((nx3.PBeamgroup) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1720610763:
				{
					if (field.equals("baserect")) 
					{
						__temp_executeDef713 = false;
						this.baserect = ((nx3.geom.Rectangle) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 950494384:
				{
					if (field.equals("complex")) 
					{
						__temp_executeDef713 = false;
						this.complex = ((nx3.PComplex) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1633199694:
				{
					if (field.equals("staveXPosition")) 
					{
						__temp_executeDef713 = false;
						this.staveXPosition = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1945688004:
				{
					if (field.equals("headsRects")) 
					{
						__temp_executeDef713 = false;
						this.headsRects = ((haxe.root.Array<nx3.geom.Rectangle>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1532428076:
				{
					if (field.equals("staveRectChecked")) 
					{
						__temp_executeDef713 = false;
						this.staveRectChecked = haxe.lang.Runtime.toBool(value);
						return value;
					}
					
					break;
				}
				
				
				case -2028694701:
				{
					if (field.equals("staveRect")) 
					{
						__temp_executeDef713 = false;
						this.staveRect = ((nx3.geom.Rectangle) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef713) 
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
			boolean __temp_executeDef714 = true;
			switch (field.hashCode())
			{
				case -304472141:
				{
					if (field.equals("setTiesInfo")) 
					{
						__temp_executeDef714 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("setTiesInfo"))) );
					}
					
					break;
				}
				
				
				case 104974688:
				{
					if (field.equals("nnote")) 
					{
						__temp_executeDef714 = false;
						return this.nnote;
					}
					
					break;
				}
				
				
				case 471571084:
				{
					if (field.equals("getHasTie")) 
					{
						__temp_executeDef714 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getHasTie"))) );
					}
					
					break;
				}
				
				
				case 112386354:
				{
					if (field.equals("voice")) 
					{
						__temp_executeDef714 = false;
						return this.voice;
					}
					
					break;
				}
				
				
				case -1224444010:
				{
					if (field.equals("hasTie")) 
					{
						__temp_executeDef714 = false;
						return this.hasTie;
					}
					
					break;
				}
				
				
				case 1968211836:
				{
					if (field.equals("getVoice")) 
					{
						__temp_executeDef714 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getVoice"))) );
					}
					
					break;
				}
				
				
				case -75304087:
				{
					if (field.equals("getNext")) 
					{
						__temp_executeDef714 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNext"))) );
					}
					
					break;
				}
				
				
				case 99151507:
				{
					if (field.equals("heads")) 
					{
						__temp_executeDef714 = false;
						return this.heads;
					}
					
					break;
				}
				
				
				case 3377907:
				{
					if (field.equals("next")) 
					{
						__temp_executeDef714 = false;
						return this.next;
					}
					
					break;
				}
				
				
				case 1954976989:
				{
					if (field.equals("getHeads")) 
					{
						__temp_executeDef714 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getHeads"))) );
					}
					
					break;
				}
				
				
				case -75122087:
				{
					if (field.equals("getTies")) 
					{
						__temp_executeDef714 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getTies"))) );
					}
					
					break;
				}
				
				
				case -1993942992:
				{
					if (field.equals("beamgroup")) 
					{
						__temp_executeDef714 = false;
						return this.beamgroup;
					}
					
					break;
				}
				
				
				case -1343326453:
				{
					if (field.equals("getXPosition")) 
					{
						__temp_executeDef714 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getXPosition"))) );
					}
					
					break;
				}
				
				
				case -2003547782:
				{
					if (field.equals("getBeamgroup")) 
					{
						__temp_executeDef714 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBeamgroup"))) );
					}
					
					break;
				}
				
				
				case -1398365791:
				{
					if (field.equals("xposition")) 
					{
						__temp_executeDef714 = false;
						return this.xposition;
					}
					
					break;
				}
				
				
				case -972195639:
				{
					if (field.equals("getDirection")) 
					{
						__temp_executeDef714 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getDirection"))) );
					}
					
					break;
				}
				
				
				case -1772793099:
				{
					if (field.equals("getXOffset")) 
					{
						__temp_executeDef714 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getXOffset"))) );
					}
					
					break;
				}
				
				
				case 950494384:
				{
					if (field.equals("complex")) 
					{
						__temp_executeDef714 = false;
						return this.complex;
					}
					
					break;
				}
				
				
				case -1893520629:
				{
					if (field.equals("xoffset")) 
					{
						__temp_executeDef714 = false;
						return this.xoffset;
					}
					
					break;
				}
				
				
				case 1987354746:
				{
					if (field.equals("getComplex")) 
					{
						__temp_executeDef714 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getComplex"))) );
					}
					
					break;
				}
				
				
				case 356336075:
				{
					if (field.equals("getBaseRect")) 
					{
						__temp_executeDef714 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBaseRect"))) );
					}
					
					break;
				}
				
				
				case -1945688004:
				{
					if (field.equals("headsRects")) 
					{
						__temp_executeDef714 = false;
						return this.headsRects;
					}
					
					break;
				}
				
				
				case -1720610763:
				{
					if (field.equals("baserect")) 
					{
						__temp_executeDef714 = false;
						return this.baserect;
					}
					
					break;
				}
				
				
				case 2051530802:
				{
					if (field.equals("getHeadsRects")) 
					{
						__temp_executeDef714 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getHeadsRects"))) );
					}
					
					break;
				}
				
				
				case -1925241176:
				{
					if (field.equals("getStaveXPosition")) 
					{
						__temp_executeDef714 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getStaveXPosition"))) );
					}
					
					break;
				}
				
				
				case -2028694701:
				{
					if (field.equals("staveRect")) 
					{
						__temp_executeDef714 = false;
						return this.staveRect;
					}
					
					break;
				}
				
				
				case -1633199694:
				{
					if (field.equals("staveXPosition")) 
					{
						__temp_executeDef714 = false;
						return this.staveXPosition;
					}
					
					break;
				}
				
				
				case -1532428076:
				{
					if (field.equals("staveRectChecked")) 
					{
						__temp_executeDef714 = false;
						return this.staveRectChecked;
					}
					
					break;
				}
				
				
				case -2038299491:
				{
					if (field.equals("getStaveRect")) 
					{
						__temp_executeDef714 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getStaveRect"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef714) 
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
			boolean __temp_executeDef715 = true;
			switch (field.hashCode())
			{
				case -1224444010:
				{
					if (field.equals("hasTie")) 
					{
						__temp_executeDef715 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.hasTie)) );
					}
					
					break;
				}
				
				
				case -1633199694:
				{
					if (field.equals("staveXPosition")) 
					{
						__temp_executeDef715 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.staveXPosition)) );
					}
					
					break;
				}
				
				
				case -1398365791:
				{
					if (field.equals("xposition")) 
					{
						__temp_executeDef715 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.xposition)) );
					}
					
					break;
				}
				
				
				case -1893520629:
				{
					if (field.equals("xoffset")) 
					{
						__temp_executeDef715 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.xoffset)) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef715) 
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
			boolean __temp_executeDef716 = true;
			switch (field.hashCode())
			{
				case -304472141:
				{
					if (field.equals("setTiesInfo")) 
					{
						__temp_executeDef716 = false;
						this.setTiesInfo(((haxe.root.Array<nx3.ETie>) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 1968211836:
				{
					if (field.equals("getVoice")) 
					{
						__temp_executeDef716 = false;
						return this.getVoice();
					}
					
					break;
				}
				
				
				case 471571084:
				{
					if (field.equals("getHasTie")) 
					{
						__temp_executeDef716 = false;
						return this.getHasTie();
					}
					
					break;
				}
				
				
				case 1954976989:
				{
					if (field.equals("getHeads")) 
					{
						__temp_executeDef716 = false;
						return this.getHeads();
					}
					
					break;
				}
				
				
				case -75304087:
				{
					if (field.equals("getNext")) 
					{
						__temp_executeDef716 = false;
						return this.getNext();
					}
					
					break;
				}
				
				
				case -2003547782:
				{
					if (field.equals("getBeamgroup")) 
					{
						__temp_executeDef716 = false;
						return this.getBeamgroup();
					}
					
					break;
				}
				
				
				case -75122087:
				{
					if (field.equals("getTies")) 
					{
						__temp_executeDef716 = false;
						return this.getTies();
					}
					
					break;
				}
				
				
				case -972195639:
				{
					if (field.equals("getDirection")) 
					{
						__temp_executeDef716 = false;
						return this.getDirection();
					}
					
					break;
				}
				
				
				case -1343326453:
				{
					if (field.equals("getXPosition")) 
					{
						__temp_executeDef716 = false;
						return this.getXPosition();
					}
					
					break;
				}
				
				
				case 1987354746:
				{
					if (field.equals("getComplex")) 
					{
						__temp_executeDef716 = false;
						return this.getComplex();
					}
					
					break;
				}
				
				
				case -1772793099:
				{
					if (field.equals("getXOffset")) 
					{
						__temp_executeDef716 = false;
						return this.getXOffset();
					}
					
					break;
				}
				
				
				case 2051530802:
				{
					if (field.equals("getHeadsRects")) 
					{
						__temp_executeDef716 = false;
						return this.getHeadsRects();
					}
					
					break;
				}
				
				
				case 356336075:
				{
					if (field.equals("getBaseRect")) 
					{
						__temp_executeDef716 = false;
						return this.getBaseRect();
					}
					
					break;
				}
				
				
				case -2038299491:
				{
					if (field.equals("getStaveRect")) 
					{
						__temp_executeDef716 = false;
						return this.getStaveRect();
					}
					
					break;
				}
				
				
				case -1925241176:
				{
					if (field.equals("getStaveXPosition")) 
					{
						__temp_executeDef716 = false;
						return this.getStaveXPosition();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef716) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("hasTie");
		baseArr.push("next");
		baseArr.push("xposition");
		baseArr.push("xoffset");
		baseArr.push("baserect");
		baseArr.push("staveXPosition");
		baseArr.push("staveRectChecked");
		baseArr.push("staveRect");
		baseArr.push("headsRects");
		baseArr.push("complex");
		baseArr.push("beamgroup");
		baseArr.push("heads");
		baseArr.push("voice");
		baseArr.push("nnote");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


