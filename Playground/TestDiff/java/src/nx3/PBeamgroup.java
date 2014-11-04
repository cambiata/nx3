package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PBeamgroup extends haxe.lang.HxObject
{
	public    PBeamgroup(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PBeamgroup(haxe.root.Array<nx3.PNote> pnotes)
	{
		nx3.PBeamgroup.__hx_ctor_nx3_PBeamgroup(this, pnotes);
	}
	
	
	public static   void __hx_ctor_nx3_PBeamgroup(nx3.PBeamgroup __temp_me81, haxe.root.Array<nx3.PNote> pnotes)
	{
		__temp_me81.value = null;
		__temp_me81.voice = pnotes.__get(0).voice;
		__temp_me81.pnotes = pnotes;
		{
			int _g = 0;
			while (( _g < pnotes.length ))
			{
				nx3.PNote pnote = pnotes.__get(_g);
				 ++ _g;
				pnote.beamgroup = __temp_me81;
			}
			
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PBeamgroup(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PBeamgroup(((haxe.root.Array<nx3.PNote>) (arr.__get(0)) ));
	}
	
	
	public  haxe.root.Array<nx3.PNote> pnotes;
	
	public  java.lang.Object value;
	
	public   int getValue()
	{
		if (( ! (( this.value == null )) )) 
		{
			return ((int) (haxe.lang.Runtime.toInt(this.value)) );
		}
		
		this.value = 0;
		{
			int _g = 0;
			haxe.root.Array<nx3.PNote> _g1 = this.pnotes;
			while (( _g < _g1.length ))
			{
				nx3.PNote pnote = _g1.__get(_g);
				 ++ _g;
				{
					nx3.PBeamgroup __temp_dynop197 = this;
					__temp_dynop197.value = ((java.lang.Object) (haxe.lang.Runtime.plus(__temp_dynop197.value, nx3.ENoteValTools.value(pnote.nnote.value))) );
				}
				
			}
			
		}
		
		return ((int) (haxe.lang.Runtime.toInt(this.value)) );
	}
	
	
	public  nx3.EDirectionUD direction;
	
	public   void setDirection(nx3.EDirectionUD direction)
	{
		this.direction = direction;
	}
	
	
	public   nx3.EDirectionUD getDirection()
	{
		if (( this.direction == null )) 
		{
			nx3.PPartbeamgroupsDirectionCalculator calculator = new nx3.PPartbeamgroupsDirectionCalculator(((nx3.PPart) (this.voice.getPart()) ));
			calculator.calculateBeamgroupsDirections();
		}
		
		return this.direction;
	}
	
	
	public  nx3.PVoice voice;
	
	public   nx3.PVoice getPVoice()
	{
		return this.voice;
	}
	
	
	public  haxe.root.Array<java.lang.Object> stavexpositions;
	
	public   haxe.root.Array<java.lang.Object> getNotesStemXPositions()
	{
		if (( this.stavexpositions != null )) 
		{
			return this.stavexpositions;
		}
		
		this.stavexpositions = new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{});
		{
			int _g = 0;
			haxe.root.Array<nx3.PNote> _g1 = this.pnotes;
			while (( _g < _g1.length ))
			{
				nx3.PNote note = _g1.__get(_g);
				 ++ _g;
				this.stavexpositions.push(((double) (haxe.lang.Runtime.toDouble(haxe.lang.Runtime.plus(note.getComplex().getXPosition(), note.getStaveXPosition()))) ));
			}
			
		}
		
		return this.stavexpositions;
	}
	
	
	public  java.lang.Object frame;
	
	public   java.lang.Object getFrame()
	{
		if (( ! (( this.frame == null )) )) 
		{
			return this.frame;
		}
		
		nx3.NNote firstnote = this.pnotes.__get(0).nnote;
		if ( ! (haxe.lang.Runtime.valEq(haxe.root.Type.enumConstructor(firstnote.type), "Note")) ) 
		{
			return null;
		}
		
		if (( this.pnotes.length == 1 )) 
		{
			int stavinglevel = nx3.ENoteValTools.stavinglevel(firstnote.value);
			if (( stavinglevel <= 0 )) 
			{
				return null;
			}
			
		}
		
		nx3.PBeamgroupFrameCalculator calculator = new nx3.PBeamgroupFrameCalculator(((nx3.PBeamgroup) (this) ));
		this.frame = calculator.getFrame();
		return this.frame;
	}
	
	
	@Override public   java.lang.String toString()
	{
		return ( "PBeamgroup \r" + haxe.root.Std.string(((haxe.root.Array<nx3.EBeamflagType>) (haxe.lang.Runtime.getField(this.getFrame(), "beamflags", true)) )) );
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef459 = true;
			switch (field.hashCode())
			{
				case 97692013:
				{
					if (field.equals("frame")) 
					{
						__temp_executeDef459 = false;
						this.frame = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef459 = false;
						this.value = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef459) 
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
			boolean __temp_executeDef460 = true;
			switch (field.hashCode())
			{
				case 97692013:
				{
					if (field.equals("frame")) 
					{
						__temp_executeDef460 = false;
						this.frame = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -983493551:
				{
					if (field.equals("pnotes")) 
					{
						__temp_executeDef460 = false;
						this.pnotes = ((haxe.root.Array<nx3.PNote>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1207951617:
				{
					if (field.equals("stavexpositions")) 
					{
						__temp_executeDef460 = false;
						this.stavexpositions = ((haxe.root.Array<java.lang.Object>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef460 = false;
						this.value = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 112386354:
				{
					if (field.equals("voice")) 
					{
						__temp_executeDef460 = false;
						this.voice = ((nx3.PVoice) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -962590849:
				{
					if (field.equals("direction")) 
					{
						__temp_executeDef460 = false;
						this.direction = ((nx3.EDirectionUD) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef460) 
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
			boolean __temp_executeDef461 = true;
			switch (field.hashCode())
			{
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef461 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("toString"))) );
					}
					
					break;
				}
				
				
				case -983493551:
				{
					if (field.equals("pnotes")) 
					{
						__temp_executeDef461 = false;
						return this.pnotes;
					}
					
					break;
				}
				
				
				case 1953517495:
				{
					if (field.equals("getFrame")) 
					{
						__temp_executeDef461 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getFrame"))) );
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef461 = false;
						return this.value;
					}
					
					break;
				}
				
				
				case 97692013:
				{
					if (field.equals("frame")) 
					{
						__temp_executeDef461 = false;
						return this.frame;
					}
					
					break;
				}
				
				
				case 1967798203:
				{
					if (field.equals("getValue")) 
					{
						__temp_executeDef461 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getValue"))) );
					}
					
					break;
				}
				
				
				case 1860960358:
				{
					if (field.equals("getNotesStemXPositions")) 
					{
						__temp_executeDef461 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNotesStemXPositions"))) );
					}
					
					break;
				}
				
				
				case -962590849:
				{
					if (field.equals("direction")) 
					{
						__temp_executeDef461 = false;
						return this.direction;
					}
					
					break;
				}
				
				
				case 1207951617:
				{
					if (field.equals("stavexpositions")) 
					{
						__temp_executeDef461 = false;
						return this.stavexpositions;
					}
					
					break;
				}
				
				
				case 576796989:
				{
					if (field.equals("setDirection")) 
					{
						__temp_executeDef461 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("setDirection"))) );
					}
					
					break;
				}
				
				
				case 690346392:
				{
					if (field.equals("getPVoice")) 
					{
						__temp_executeDef461 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getPVoice"))) );
					}
					
					break;
				}
				
				
				case -972195639:
				{
					if (field.equals("getDirection")) 
					{
						__temp_executeDef461 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getDirection"))) );
					}
					
					break;
				}
				
				
				case 112386354:
				{
					if (field.equals("voice")) 
					{
						__temp_executeDef461 = false;
						return this.voice;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef461) 
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
			boolean __temp_executeDef462 = true;
			switch (field.hashCode())
			{
				case 97692013:
				{
					if (field.equals("frame")) 
					{
						__temp_executeDef462 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.frame)) );
					}
					
					break;
				}
				
				
				case 111972721:
				{
					if (field.equals("value")) 
					{
						__temp_executeDef462 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.value)) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef462) 
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
			boolean __temp_executeDef463 = true;
			switch (field.hashCode())
			{
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef463 = false;
						return this.toString();
					}
					
					break;
				}
				
				
				case 1967798203:
				{
					if (field.equals("getValue")) 
					{
						__temp_executeDef463 = false;
						return this.getValue();
					}
					
					break;
				}
				
				
				case 1953517495:
				{
					if (field.equals("getFrame")) 
					{
						__temp_executeDef463 = false;
						return this.getFrame();
					}
					
					break;
				}
				
				
				case 576796989:
				{
					if (field.equals("setDirection")) 
					{
						__temp_executeDef463 = false;
						this.setDirection(((nx3.EDirectionUD) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 1860960358:
				{
					if (field.equals("getNotesStemXPositions")) 
					{
						__temp_executeDef463 = false;
						return this.getNotesStemXPositions();
					}
					
					break;
				}
				
				
				case -972195639:
				{
					if (field.equals("getDirection")) 
					{
						__temp_executeDef463 = false;
						return this.getDirection();
					}
					
					break;
				}
				
				
				case 690346392:
				{
					if (field.equals("getPVoice")) 
					{
						__temp_executeDef463 = false;
						return this.getPVoice();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef463) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("frame");
		baseArr.push("stavexpositions");
		baseArr.push("voice");
		baseArr.push("direction");
		baseArr.push("value");
		baseArr.push("pnotes");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


