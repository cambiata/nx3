package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NBar extends haxe.lang.HxObject
{
	public    NBar(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    NBar(haxe.root.Array<nx3.NPart> parts, nx3.EBarType type, nx3.ETime time, nx3.EDisplayALN timeDisplay, nx3.EAllotment allotment, java.lang.Object spacing)
	{
		nx3.NBar.__hx_ctor_nx3_NBar(this, parts, type, time, timeDisplay, allotment, spacing);
	}
	
	
	public static   void __hx_ctor_nx3_NBar(nx3.NBar __temp_me71, haxe.root.Array<nx3.NPart> parts, nx3.EBarType type, nx3.ETime time, nx3.EDisplayALN timeDisplay, nx3.EAllotment allotment, java.lang.Object spacing)
	{
		java.lang.Object __temp_spacing70 = ( (( spacing == null )) ? (((java.lang.Object) (8) )) : (((java.lang.Object) (spacing) )) );
		__temp_me71.nparts = parts;
		{
			int _g = 0;
			while (( _g < parts.length ))
			{
				nx3.NPart part = parts.__get(_g);
				 ++ _g;
				part.nbar = __temp_me71;
			}
			
		}
		
		if (( type == null )) 
		{
			__temp_me71.type = nx3.EBarType.Normal;
		}
		 else 
		{
			__temp_me71.type = type;
		}
		
		__temp_me71.time = time;
		if (( timeDisplay == null )) 
		{
			__temp_me71.timeDisplay = nx3.EDisplayALN.Layout;
		}
		 else 
		{
			__temp_me71.timeDisplay = timeDisplay;
		}
		
		if (( allotment == null )) 
		{
			__temp_me71.allotment = nx3.EAllotment.Logaritmic;
		}
		 else 
		{
			__temp_me71.allotment = allotment;
		}
		
		__temp_me71.spacing = ((double) (haxe.lang.Runtime.toDouble(__temp_spacing70)) );
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.NBar(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.NBar(((haxe.root.Array<nx3.NPart>) (arr.__get(0)) ), ((nx3.EBarType) (arr.__get(1)) ), ((nx3.ETime) (arr.__get(2)) ), ((nx3.EDisplayALN) (arr.__get(3)) ), ((nx3.EAllotment) (arr.__get(4)) ), ((java.lang.Object) (arr.__get(5)) ));
	}
	
	
	public  nx3.NScore nscore;
	
	public  haxe.root.Array<nx3.NPart> nparts;
	
	public  nx3.EBarType type;
	
	public  nx3.ETime time;
	
	public  nx3.EDisplayALN timeDisplay;
	
	public  nx3.EAllotment allotment;
	
	public  double spacing;
	
	public   nx3.NNote getNNote(int partIdx, int voiceIdx, int noteIdx)
	{
		return this.getNPart(partIdx).getNVoice(voiceIdx).getNNote(noteIdx);
	}
	
	
	public   nx3.NPart getNPart(int idx)
	{
		if (( ( idx < 0 ) || ( idx > this.nparts.length ) )) 
		{
			return null;
		}
		 else 
		{
			return this.nparts.__get(idx);
		}
		
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef590 = true;
			switch (field.hashCode())
			{
				case -2012158909:
				{
					if (field.equals("spacing")) 
					{
						__temp_executeDef590 = false;
						this.spacing = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef590) 
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
			boolean __temp_executeDef591 = true;
			switch (field.hashCode())
			{
				case -2012158909:
				{
					if (field.equals("spacing")) 
					{
						__temp_executeDef591 = false;
						this.spacing = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -1036496156:
				{
					if (field.equals("nscore")) 
					{
						__temp_executeDef591 = false;
						this.nscore = ((nx3.NScore) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 369993124:
				{
					if (field.equals("allotment")) 
					{
						__temp_executeDef591 = false;
						this.allotment = ((nx3.EAllotment) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1039323342:
				{
					if (field.equals("nparts")) 
					{
						__temp_executeDef591 = false;
						this.nparts = ((haxe.root.Array<nx3.NPart>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1919414987:
				{
					if (field.equals("timeDisplay")) 
					{
						__temp_executeDef591 = false;
						this.timeDisplay = ((nx3.EDisplayALN) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3575610:
				{
					if (field.equals("type")) 
					{
						__temp_executeDef591 = false;
						this.type = ((nx3.EBarType) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3560141:
				{
					if (field.equals("time")) 
					{
						__temp_executeDef591 = false;
						this.time = ((nx3.ETime) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef591) 
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
			boolean __temp_executeDef592 = true;
			switch (field.hashCode())
			{
				case 1959892939:
				{
					if (field.equals("getNPart")) 
					{
						__temp_executeDef592 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNPart"))) );
					}
					
					break;
				}
				
				
				case -1036496156:
				{
					if (field.equals("nscore")) 
					{
						__temp_executeDef592 = false;
						return this.nscore;
					}
					
					break;
				}
				
				
				case 1959846858:
				{
					if (field.equals("getNNote")) 
					{
						__temp_executeDef592 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNNote"))) );
					}
					
					break;
				}
				
				
				case -1039323342:
				{
					if (field.equals("nparts")) 
					{
						__temp_executeDef592 = false;
						return this.nparts;
					}
					
					break;
				}
				
				
				case -2012158909:
				{
					if (field.equals("spacing")) 
					{
						__temp_executeDef592 = false;
						return this.spacing;
					}
					
					break;
				}
				
				
				case 3575610:
				{
					if (field.equals("type")) 
					{
						__temp_executeDef592 = false;
						return this.type;
					}
					
					break;
				}
				
				
				case 369993124:
				{
					if (field.equals("allotment")) 
					{
						__temp_executeDef592 = false;
						return this.allotment;
					}
					
					break;
				}
				
				
				case 3560141:
				{
					if (field.equals("time")) 
					{
						__temp_executeDef592 = false;
						return this.time;
					}
					
					break;
				}
				
				
				case -1919414987:
				{
					if (field.equals("timeDisplay")) 
					{
						__temp_executeDef592 = false;
						return this.timeDisplay;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef592) 
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
			boolean __temp_executeDef593 = true;
			switch (field.hashCode())
			{
				case -2012158909:
				{
					if (field.equals("spacing")) 
					{
						__temp_executeDef593 = false;
						return this.spacing;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef593) 
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
			boolean __temp_executeDef594 = true;
			switch (field.hashCode())
			{
				case 1959892939:
				{
					if (field.equals("getNPart")) 
					{
						__temp_executeDef594 = false;
						return this.getNPart(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
				case 1959846858:
				{
					if (field.equals("getNNote")) 
					{
						__temp_executeDef594 = false;
						return this.getNNote(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ), ((int) (haxe.lang.Runtime.toInt(dynargs.__get(1))) ), ((int) (haxe.lang.Runtime.toInt(dynargs.__get(2))) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef594) 
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
		baseArr.push("spacing");
		baseArr.push("allotment");
		baseArr.push("timeDisplay");
		baseArr.push("time");
		baseArr.push("type");
		baseArr.push("nparts");
		baseArr.push("nscore");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


