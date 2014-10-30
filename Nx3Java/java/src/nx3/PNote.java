package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PNote extends haxe.lang.HxObject implements hxlazy.Lazy
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
	
	
	public static   void __hx_ctor_nx3_PNote(nx3.PNote __temp_me108, nx3.NNote nnote)
	{
		__temp_me108.nnote = nnote;
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
	
	public   java.lang.Object iterator()
	{
		{
			haxe.root.Array<nx3.PHead> _this = this.get_heads();
			return new _Array.ArrayIterator<nx3.PHead>(((haxe.root.Array<nx3.PHead>) (_this) ));
		}
		
	}
	
	
	public  int length;
	
	public   int get_length()
	{
		return this.get_heads().length;
	}
	
	
	public  nx3.PVoice voice;
	
	public   nx3.PVoice getVoice()
	{
		return this.voice;
	}
	
	
	public  nx3.PBeamgroup beamgroup;
	
	public   nx3.PBeamgroup getBeamgroup()
	{
		if (( this.voice == null )) 
		{
			throw haxe.lang.HaxeException.wrap("PNote doesn\'t have a parent PVoice");
		}
		
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
		if (( this.voice == null )) 
		{
			throw haxe.lang.HaxeException.wrap("PNote doesn\'t have a parent PVoice");
		}
		
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
	
	
	public   haxe.root.Array<nx3.ETie> getTies()
	{
		return this.nnote.get_ties();
	}
	
	
	public  haxe.root.Array<nx3.PHead> __lazyheads;
	
	
	
	public   haxe.root.Array<nx3.PHead> get_heads()
	{
		haxe.root.Array<nx3.PNote> _g = new haxe.root.Array<nx3.PNote>(new nx3.PNote[]{this});
		if (( this.__lazyheads != null )) 
		{
			return this.__lazyheads;
		}
		
		return this.__lazyheads = ((haxe.root.Array<nx3.PHead>) (((haxe.root.Array) (haxe.root.Lambda.array(((haxe.root.List<nx3.PHead>) (((haxe.root.List) (haxe.root.Lambda.map(this.nnote, new nx3.PNote_get_heads_54__Fun(((haxe.root.Array<nx3.PNote>) (_g) )))) )) ))) )) );
	}
	
	
	public  haxe.root.Array<nx3.geom.Rectangle> __lazyheadsRects;
	
	public   haxe.root.Array<nx3.geom.Rectangle> getHeadsRects()
	{
		if (( this.__lazyheadsRects != null )) 
		{
			return this.__lazyheadsRects;
		}
		
		return this.__lazyheadsRects = new nx3.PNoteheadsRectsCalculator(((nx3.PNote) (this) )).getHeadsRects();
	}
	
	
	public  nx3.geom.Rectangle __lazystaveRect;
	
	public   nx3.geom.Rectangle getStaveRect()
	{
		if (( this.__lazystaveRect != null )) 
		{
			return this.__lazystaveRect;
		}
		
		return this.__lazystaveRect = this.getComplex().getStaveRect(this);
	}
	
	
	public  java.lang.Object __lazystaveXPosition;
	
	public   java.lang.Object getStaveXPosition()
	{
		if (( ! (( this.__lazystaveXPosition == null )) )) 
		{
			return this.__lazystaveXPosition;
		}
		
		nx3.geom.Rectangle staverect = this.getStaveRect();
		if (( staverect == null )) 
		{
			return this.__lazystaveXPosition = 0;
		}
		
		return ( (( this.getDirection() == nx3.EDirectionUD.Up )) ? (this.__lazystaveXPosition = staverect.width) : (this.__lazystaveXPosition = staverect.x) );
	}
	
	
	public  nx3.geom.Rectangle __lazybaseRect;
	
	public   nx3.geom.Rectangle getBaseRect()
	{
		if (( this.__lazybaseRect != null )) 
		{
			return this.__lazybaseRect;
		}
		
		return this.__lazybaseRect = new nx3.PBaseRectCalculator(((nx3.PNote) (this) )).getBaseRect();
	}
	
	
	public  java.lang.Object __lazyxOffset;
	
	public   java.lang.Object getXOffset()
	{
		if (( ! (( this.__lazyxOffset == null )) )) 
		{
			return this.__lazyxOffset;
		}
		
		return this.__lazyxOffset = this.getComplex().getNoteXOffset(this);
	}
	
	
	public  java.lang.Object __lazyxPosition;
	
	public   java.lang.Object getXPosition()
	{
		if (( ! (( this.__lazyxPosition == null )) )) 
		{
			return this.__lazyxPosition;
		}
		
		return this.__lazyxPosition = ((double) (haxe.lang.Runtime.toDouble(haxe.lang.Runtime.plus(this.getComplex().getXPosition(), this.getXOffset()))) );
	}
	
	
	public  nx3.PNote __lazynext;
	
	public   nx3.PNote getNext()
	{
		if (( this.__lazynext != null )) 
		{
			return this.__lazynext;
		}
		
		int idx = this.voice.getNotes().indexOf(this, null);
		{
			haxe.root.Array<nx3.PNote> a = this.voice.getNotes();
			int idx1 = ( idx + 1 );
			return ( (( ( idx1 < 0 ) || ( idx1 > ( a.length - 1 ) ) )) ? (this.__lazynext = null) : (this.__lazynext = a.__get(idx1)) );
		}
		
	}
	
	
	public  java.lang.Object __lazyhasTie;
	
	public   java.lang.Object getHasTie()
	{
		if (( ! (( this.__lazyhasTie == null )) )) 
		{
			return this.__lazyhasTie;
		}
		
		return this.__lazyhasTie =  ! (haxe.root.Lambda.foreach(this.nnote, ( (( nx3.PNote_getHasTie_225__Fun.__hx_current != null )) ? (nx3.PNote_getHasTie_225__Fun.__hx_current) : (nx3.PNote_getHasTie_225__Fun.__hx_current = ((nx3.PNote_getHasTie_225__Fun) (new nx3.PNote_getHasTie_225__Fun()) )) ))) ;
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef699 = true;
			switch (field.hashCode())
			{
				case -1847961622:
				{
					if (field.equals("__lazyhasTie")) 
					{
						__temp_executeDef699 = false;
						this.__lazyhasTie = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef699 = false;
						this.length = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -813345555:
				{
					if (field.equals("__lazyxPosition")) 
					{
						__temp_executeDef699 = false;
						this.__lazyxPosition = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1544660486:
				{
					if (field.equals("__lazystaveXPosition")) 
					{
						__temp_executeDef699 = false;
						this.__lazystaveXPosition = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -663862953:
				{
					if (field.equals("__lazyxOffset")) 
					{
						__temp_executeDef699 = false;
						this.__lazyxOffset = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef699) 
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
			boolean __temp_executeDef700 = true;
			switch (field.hashCode())
			{
				case -1847961622:
				{
					if (field.equals("__lazyhasTie")) 
					{
						__temp_executeDef700 = false;
						this.__lazyhasTie = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 104974688:
				{
					if (field.equals("nnote")) 
					{
						__temp_executeDef700 = false;
						this.nnote = ((nx3.NNote) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1642950727:
				{
					if (field.equals("__lazynext")) 
					{
						__temp_executeDef700 = false;
						this.__lazynext = ((nx3.PNote) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef700 = false;
						this.length = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -813345555:
				{
					if (field.equals("__lazyxPosition")) 
					{
						__temp_executeDef700 = false;
						this.__lazyxPosition = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 112386354:
				{
					if (field.equals("voice")) 
					{
						__temp_executeDef700 = false;
						this.voice = ((nx3.PVoice) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -663862953:
				{
					if (field.equals("__lazyxOffset")) 
					{
						__temp_executeDef700 = false;
						this.__lazyxOffset = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1993942992:
				{
					if (field.equals("beamgroup")) 
					{
						__temp_executeDef700 = false;
						this.beamgroup = ((nx3.PBeamgroup) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 373432233:
				{
					if (field.equals("__lazybaseRect")) 
					{
						__temp_executeDef700 = false;
						this.__lazybaseRect = ((nx3.geom.Rectangle) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 950494384:
				{
					if (field.equals("complex")) 
					{
						__temp_executeDef700 = false;
						this.complex = ((nx3.PComplex) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1544660486:
				{
					if (field.equals("__lazystaveXPosition")) 
					{
						__temp_executeDef700 = false;
						this.__lazystaveXPosition = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -613698625:
				{
					if (field.equals("__lazyheads")) 
					{
						__temp_executeDef700 = false;
						this.__lazyheads = ((haxe.root.Array<nx3.PHead>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1508318593:
				{
					if (field.equals("__lazystaveRect")) 
					{
						__temp_executeDef700 = false;
						this.__lazystaveRect = ((nx3.geom.Rectangle) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1301069456:
				{
					if (field.equals("__lazyheadsRects")) 
					{
						__temp_executeDef700 = false;
						this.__lazyheadsRects = ((haxe.root.Array<nx3.geom.Rectangle>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef700) 
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
			boolean __temp_executeDef701 = true;
			switch (field.hashCode())
			{
				case 471571084:
				{
					if (field.equals("getHasTie")) 
					{
						__temp_executeDef701 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getHasTie"))) );
					}
					
					break;
				}
				
				
				case 104974688:
				{
					if (field.equals("nnote")) 
					{
						__temp_executeDef701 = false;
						return this.nnote;
					}
					
					break;
				}
				
				
				case -1847961622:
				{
					if (field.equals("__lazyhasTie")) 
					{
						__temp_executeDef701 = false;
						return this.__lazyhasTie;
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef701 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("iterator"))) );
					}
					
					break;
				}
				
				
				case -75304087:
				{
					if (field.equals("getNext")) 
					{
						__temp_executeDef701 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNext"))) );
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef701 = false;
						if (handleProperties) 
						{
							return this.get_length();
						}
						 else 
						{
							return this.length;
						}
						
					}
					
					break;
				}
				
				
				case 1642950727:
				{
					if (field.equals("__lazynext")) 
					{
						__temp_executeDef701 = false;
						return this.__lazynext;
					}
					
					break;
				}
				
				
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef701 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_length"))) );
					}
					
					break;
				}
				
				
				case -1343326453:
				{
					if (field.equals("getXPosition")) 
					{
						__temp_executeDef701 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getXPosition"))) );
					}
					
					break;
				}
				
				
				case 112386354:
				{
					if (field.equals("voice")) 
					{
						__temp_executeDef701 = false;
						return this.voice;
					}
					
					break;
				}
				
				
				case -813345555:
				{
					if (field.equals("__lazyxPosition")) 
					{
						__temp_executeDef701 = false;
						return this.__lazyxPosition;
					}
					
					break;
				}
				
				
				case 1968211836:
				{
					if (field.equals("getVoice")) 
					{
						__temp_executeDef701 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getVoice"))) );
					}
					
					break;
				}
				
				
				case -1772793099:
				{
					if (field.equals("getXOffset")) 
					{
						__temp_executeDef701 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getXOffset"))) );
					}
					
					break;
				}
				
				
				case -1993942992:
				{
					if (field.equals("beamgroup")) 
					{
						__temp_executeDef701 = false;
						return this.beamgroup;
					}
					
					break;
				}
				
				
				case -663862953:
				{
					if (field.equals("__lazyxOffset")) 
					{
						__temp_executeDef701 = false;
						return this.__lazyxOffset;
					}
					
					break;
				}
				
				
				case -2003547782:
				{
					if (field.equals("getBeamgroup")) 
					{
						__temp_executeDef701 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBeamgroup"))) );
					}
					
					break;
				}
				
				
				case 356336075:
				{
					if (field.equals("getBaseRect")) 
					{
						__temp_executeDef701 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getBaseRect"))) );
					}
					
					break;
				}
				
				
				case -972195639:
				{
					if (field.equals("getDirection")) 
					{
						__temp_executeDef701 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getDirection"))) );
					}
					
					break;
				}
				
				
				case 373432233:
				{
					if (field.equals("__lazybaseRect")) 
					{
						__temp_executeDef701 = false;
						return this.__lazybaseRect;
					}
					
					break;
				}
				
				
				case 950494384:
				{
					if (field.equals("complex")) 
					{
						__temp_executeDef701 = false;
						return this.complex;
					}
					
					break;
				}
				
				
				case -1925241176:
				{
					if (field.equals("getStaveXPosition")) 
					{
						__temp_executeDef701 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getStaveXPosition"))) );
					}
					
					break;
				}
				
				
				case 1987354746:
				{
					if (field.equals("getComplex")) 
					{
						__temp_executeDef701 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getComplex"))) );
					}
					
					break;
				}
				
				
				case 1544660486:
				{
					if (field.equals("__lazystaveXPosition")) 
					{
						__temp_executeDef701 = false;
						return this.__lazystaveXPosition;
					}
					
					break;
				}
				
				
				case -75122087:
				{
					if (field.equals("getTies")) 
					{
						__temp_executeDef701 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getTies"))) );
					}
					
					break;
				}
				
				
				case -2038299491:
				{
					if (field.equals("getStaveRect")) 
					{
						__temp_executeDef701 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getStaveRect"))) );
					}
					
					break;
				}
				
				
				case -613698625:
				{
					if (field.equals("__lazyheads")) 
					{
						__temp_executeDef701 = false;
						return this.__lazyheads;
					}
					
					break;
				}
				
				
				case -1508318593:
				{
					if (field.equals("__lazystaveRect")) 
					{
						__temp_executeDef701 = false;
						return this.__lazystaveRect;
					}
					
					break;
				}
				
				
				case 99151507:
				{
					if (field.equals("heads")) 
					{
						__temp_executeDef701 = false;
						return this.get_heads();
					}
					
					break;
				}
				
				
				case 2051530802:
				{
					if (field.equals("getHeadsRects")) 
					{
						__temp_executeDef701 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getHeadsRects"))) );
					}
					
					break;
				}
				
				
				case 1136101482:
				{
					if (field.equals("get_heads")) 
					{
						__temp_executeDef701 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_heads"))) );
					}
					
					break;
				}
				
				
				case 1301069456:
				{
					if (field.equals("__lazyheadsRects")) 
					{
						__temp_executeDef701 = false;
						return this.__lazyheadsRects;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef701) 
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
			boolean __temp_executeDef702 = true;
			switch (field.hashCode())
			{
				case -1847961622:
				{
					if (field.equals("__lazyhasTie")) 
					{
						__temp_executeDef702 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.__lazyhasTie)) );
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef702 = false;
						if (handleProperties) 
						{
							return ((double) (this.get_length()) );
						}
						 else 
						{
							return ((double) (this.length) );
						}
						
					}
					
					break;
				}
				
				
				case -813345555:
				{
					if (field.equals("__lazyxPosition")) 
					{
						__temp_executeDef702 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.__lazyxPosition)) );
					}
					
					break;
				}
				
				
				case 1544660486:
				{
					if (field.equals("__lazystaveXPosition")) 
					{
						__temp_executeDef702 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.__lazystaveXPosition)) );
					}
					
					break;
				}
				
				
				case -663862953:
				{
					if (field.equals("__lazyxOffset")) 
					{
						__temp_executeDef702 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.__lazyxOffset)) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef702) 
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
			boolean __temp_executeDef703 = true;
			switch (field.hashCode())
			{
				case 471571084:
				{
					if (field.equals("getHasTie")) 
					{
						__temp_executeDef703 = false;
						return this.getHasTie();
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef703 = false;
						return this.iterator();
					}
					
					break;
				}
				
				
				case -75304087:
				{
					if (field.equals("getNext")) 
					{
						__temp_executeDef703 = false;
						return this.getNext();
					}
					
					break;
				}
				
				
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef703 = false;
						return this.get_length();
					}
					
					break;
				}
				
				
				case -1343326453:
				{
					if (field.equals("getXPosition")) 
					{
						__temp_executeDef703 = false;
						return this.getXPosition();
					}
					
					break;
				}
				
				
				case 1968211836:
				{
					if (field.equals("getVoice")) 
					{
						__temp_executeDef703 = false;
						return this.getVoice();
					}
					
					break;
				}
				
				
				case -1772793099:
				{
					if (field.equals("getXOffset")) 
					{
						__temp_executeDef703 = false;
						return this.getXOffset();
					}
					
					break;
				}
				
				
				case -2003547782:
				{
					if (field.equals("getBeamgroup")) 
					{
						__temp_executeDef703 = false;
						return this.getBeamgroup();
					}
					
					break;
				}
				
				
				case 356336075:
				{
					if (field.equals("getBaseRect")) 
					{
						__temp_executeDef703 = false;
						return this.getBaseRect();
					}
					
					break;
				}
				
				
				case -972195639:
				{
					if (field.equals("getDirection")) 
					{
						__temp_executeDef703 = false;
						return this.getDirection();
					}
					
					break;
				}
				
				
				case -1925241176:
				{
					if (field.equals("getStaveXPosition")) 
					{
						__temp_executeDef703 = false;
						return this.getStaveXPosition();
					}
					
					break;
				}
				
				
				case 1987354746:
				{
					if (field.equals("getComplex")) 
					{
						__temp_executeDef703 = false;
						return this.getComplex();
					}
					
					break;
				}
				
				
				case -2038299491:
				{
					if (field.equals("getStaveRect")) 
					{
						__temp_executeDef703 = false;
						return this.getStaveRect();
					}
					
					break;
				}
				
				
				case -75122087:
				{
					if (field.equals("getTies")) 
					{
						__temp_executeDef703 = false;
						return this.getTies();
					}
					
					break;
				}
				
				
				case 2051530802:
				{
					if (field.equals("getHeadsRects")) 
					{
						__temp_executeDef703 = false;
						return this.getHeadsRects();
					}
					
					break;
				}
				
				
				case 1136101482:
				{
					if (field.equals("get_heads")) 
					{
						__temp_executeDef703 = false;
						return this.get_heads();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef703) 
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
		baseArr.push("__lazyhasTie");
		baseArr.push("__lazynext");
		baseArr.push("__lazyxPosition");
		baseArr.push("__lazyxOffset");
		baseArr.push("__lazybaseRect");
		baseArr.push("__lazystaveXPosition");
		baseArr.push("__lazystaveRect");
		baseArr.push("__lazyheadsRects");
		baseArr.push("heads");
		baseArr.push("__lazyheads");
		baseArr.push("complex");
		baseArr.push("beamgroup");
		baseArr.push("voice");
		baseArr.push("length");
		baseArr.push("nnote");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


