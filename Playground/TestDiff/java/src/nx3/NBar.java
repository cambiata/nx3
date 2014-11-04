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
	
	
	public static   void __hx_ctor_nx3_NBar(nx3.NBar __temp_me60, haxe.root.Array<nx3.NPart> parts, nx3.EBarType type, nx3.ETime time, nx3.EDisplayALN timeDisplay, nx3.EAllotment allotment, java.lang.Object spacing)
	{
		java.lang.Object __temp_spacing59 = ( (( spacing == null )) ? (((java.lang.Object) (8) )) : (((java.lang.Object) (spacing) )) );
		__temp_me60.nparts = parts;
		{
			int _g = 0;
			while (( _g < parts.length ))
			{
				nx3.NPart part = parts.__get(_g);
				 ++ _g;
				part.nbar = __temp_me60;
			}
			
		}
		
		if (( type == null )) 
		{
			__temp_me60.type = nx3.EBarType.Normal;
		}
		 else 
		{
			__temp_me60.type = type;
		}
		
		__temp_me60.time = time;
		if (( timeDisplay == null )) 
		{
			__temp_me60.timeDisplay = nx3.EDisplayALN.Layout;
		}
		 else 
		{
			__temp_me60.timeDisplay = timeDisplay;
		}
		
		if (( allotment == null )) 
		{
			__temp_me60.allotment = nx3.EAllotment.Logaritmic;
		}
		 else 
		{
			__temp_me60.allotment = allotment;
		}
		
		__temp_me60.spacing = ((double) (haxe.lang.Runtime.toDouble(__temp_spacing59)) );
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
	
	
	public   java.lang.Object iterator()
	{
		return ((java.lang.Object) (new _Array.ArrayIterator<nx3.NPart>(((haxe.root.Array<nx3.NPart>) (this.nparts) ))) );
	}
	
	
	public  int length;
	
	public   int get_length()
	{
		return this.nparts.length;
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef405 = true;
			switch (field.hashCode())
			{
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef405 = false;
						this.length = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -2012158909:
				{
					if (field.equals("spacing")) 
					{
						__temp_executeDef405 = false;
						this.spacing = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef405) 
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
			boolean __temp_executeDef406 = true;
			switch (field.hashCode())
			{
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef406 = false;
						this.length = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -1036496156:
				{
					if (field.equals("nscore")) 
					{
						__temp_executeDef406 = false;
						this.nscore = ((nx3.NScore) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -2012158909:
				{
					if (field.equals("spacing")) 
					{
						__temp_executeDef406 = false;
						this.spacing = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -1039323342:
				{
					if (field.equals("nparts")) 
					{
						__temp_executeDef406 = false;
						this.nparts = ((haxe.root.Array<nx3.NPart>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 369993124:
				{
					if (field.equals("allotment")) 
					{
						__temp_executeDef406 = false;
						this.allotment = ((nx3.EAllotment) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3575610:
				{
					if (field.equals("type")) 
					{
						__temp_executeDef406 = false;
						this.type = ((nx3.EBarType) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1919414987:
				{
					if (field.equals("timeDisplay")) 
					{
						__temp_executeDef406 = false;
						this.timeDisplay = ((nx3.EDisplayALN) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3560141:
				{
					if (field.equals("time")) 
					{
						__temp_executeDef406 = false;
						this.time = ((nx3.ETime) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef406) 
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
			boolean __temp_executeDef407 = true;
			switch (field.hashCode())
			{
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef407 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_length"))) );
					}
					
					break;
				}
				
				
				case -1036496156:
				{
					if (field.equals("nscore")) 
					{
						__temp_executeDef407 = false;
						return this.nscore;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef407 = false;
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
				
				
				case -1039323342:
				{
					if (field.equals("nparts")) 
					{
						__temp_executeDef407 = false;
						return this.nparts;
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef407 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("iterator"))) );
					}
					
					break;
				}
				
				
				case 3575610:
				{
					if (field.equals("type")) 
					{
						__temp_executeDef407 = false;
						return this.type;
					}
					
					break;
				}
				
				
				case 1959892939:
				{
					if (field.equals("getNPart")) 
					{
						__temp_executeDef407 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNPart"))) );
					}
					
					break;
				}
				
				
				case 3560141:
				{
					if (field.equals("time")) 
					{
						__temp_executeDef407 = false;
						return this.time;
					}
					
					break;
				}
				
				
				case 1959846858:
				{
					if (field.equals("getNNote")) 
					{
						__temp_executeDef407 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNNote"))) );
					}
					
					break;
				}
				
				
				case -1919414987:
				{
					if (field.equals("timeDisplay")) 
					{
						__temp_executeDef407 = false;
						return this.timeDisplay;
					}
					
					break;
				}
				
				
				case -2012158909:
				{
					if (field.equals("spacing")) 
					{
						__temp_executeDef407 = false;
						return this.spacing;
					}
					
					break;
				}
				
				
				case 369993124:
				{
					if (field.equals("allotment")) 
					{
						__temp_executeDef407 = false;
						return this.allotment;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef407) 
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
			boolean __temp_executeDef408 = true;
			switch (field.hashCode())
			{
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef408 = false;
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
				
				
				case -2012158909:
				{
					if (field.equals("spacing")) 
					{
						__temp_executeDef408 = false;
						return this.spacing;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef408) 
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
			boolean __temp_executeDef409 = true;
			switch (field.hashCode())
			{
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef409 = false;
						return this.get_length();
					}
					
					break;
				}
				
				
				case 1959846858:
				{
					if (field.equals("getNNote")) 
					{
						__temp_executeDef409 = false;
						return this.getNNote(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ), ((int) (haxe.lang.Runtime.toInt(dynargs.__get(1))) ), ((int) (haxe.lang.Runtime.toInt(dynargs.__get(2))) ));
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef409 = false;
						return this.iterator();
					}
					
					break;
				}
				
				
				case 1959892939:
				{
					if (field.equals("getNPart")) 
					{
						__temp_executeDef409 = false;
						return this.getNPart(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef409) 
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
		baseArr.push("length");
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


