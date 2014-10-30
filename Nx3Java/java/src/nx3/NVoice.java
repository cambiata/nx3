package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NVoice extends haxe.lang.HxObject
{
	public    NVoice(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    NVoice(haxe.root.Array<nx3.NNote> notes, nx3.EVoiceType type, nx3.EDirectionUAD direction)
	{
		nx3.NVoice.__hx_ctor_nx3_NVoice(this, notes, type, direction);
	}
	
	
	public static   void __hx_ctor_nx3_NVoice(nx3.NVoice __temp_me76, haxe.root.Array<nx3.NNote> notes, nx3.EVoiceType type, nx3.EDirectionUAD direction)
	{
		if (( ( notes == null ) || ( notes.length == 0 ) )) 
		{
			__temp_me76.nnotes = new haxe.root.Array<nx3.NNote>(new nx3.NNote[]{});
			__temp_me76.type = nx3.EVoiceType.Barpause(0);
		}
		 else 
		{
			__temp_me76.nnotes = notes;
			if (( type != null )) 
			{
				__temp_me76.type = type;
			}
			 else 
			{
				__temp_me76.type = nx3.EVoiceType.Normal;
			}
			
		}
		
		{
			int _g = 0;
			while (( _g < notes.length ))
			{
				nx3.NNote note = notes.__get(_g);
				 ++ _g;
				note.nvoice = __temp_me76;
			}
			
		}
		
		if (( direction != null )) 
		{
			__temp_me76.direction = direction;
		}
		 else 
		{
			__temp_me76.direction = nx3.EDirectionUAD.Auto;
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.NVoice(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.NVoice(((haxe.root.Array<nx3.NNote>) (arr.__get(0)) ), ((nx3.EVoiceType) (arr.__get(1)) ), ((nx3.EDirectionUAD) (arr.__get(2)) ));
	}
	
	
	public  nx3.EDirectionUAD direction;
	
	public  haxe.root.Array<nx3.NNote> nnotes;
	
	public  nx3.EVoiceType type;
	
	public  nx3.NPart npart;
	
	public   java.lang.Object iterator()
	{
		return ((java.lang.Object) (new _Array.ArrayIterator<nx3.NNote>(((haxe.root.Array<nx3.NNote>) (this.nnotes) ))) );
	}
	
	
	public  int length;
	
	public   int get_length()
	{
		return this.nnotes.length;
	}
	
	
	public   nx3.NNote getNNote(int idx)
	{
		if (( ( idx < 0 ) || ( idx > this.nnotes.length ) )) 
		{
			return null;
		}
		 else 
		{
			return this.nnotes.__get(idx);
		}
		
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef598 = true;
			switch (field.hashCode())
			{
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef598 = false;
						this.length = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef598) 
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
			boolean __temp_executeDef599 = true;
			switch (field.hashCode())
			{
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef599 = false;
						this.length = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -962590849:
				{
					if (field.equals("direction")) 
					{
						__temp_executeDef599 = false;
						this.direction = ((nx3.EDirectionUAD) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 105020769:
				{
					if (field.equals("npart")) 
					{
						__temp_executeDef599 = false;
						this.npart = ((nx3.NPart) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1040751853:
				{
					if (field.equals("nnotes")) 
					{
						__temp_executeDef599 = false;
						this.nnotes = ((haxe.root.Array<nx3.NNote>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3575610:
				{
					if (field.equals("type")) 
					{
						__temp_executeDef599 = false;
						this.type = ((nx3.EVoiceType) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef599) 
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
			boolean __temp_executeDef600 = true;
			switch (field.hashCode())
			{
				case 1959846858:
				{
					if (field.equals("getNNote")) 
					{
						__temp_executeDef600 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNNote"))) );
					}
					
					break;
				}
				
				
				case -962590849:
				{
					if (field.equals("direction")) 
					{
						__temp_executeDef600 = false;
						return this.direction;
					}
					
					break;
				}
				
				
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef600 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_length"))) );
					}
					
					break;
				}
				
				
				case -1040751853:
				{
					if (field.equals("nnotes")) 
					{
						__temp_executeDef600 = false;
						return this.nnotes;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef600 = false;
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
				
				
				case 3575610:
				{
					if (field.equals("type")) 
					{
						__temp_executeDef600 = false;
						return this.type;
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef600 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("iterator"))) );
					}
					
					break;
				}
				
				
				case 105020769:
				{
					if (field.equals("npart")) 
					{
						__temp_executeDef600 = false;
						return this.npart;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef600) 
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
			boolean __temp_executeDef601 = true;
			switch (field.hashCode())
			{
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef601 = false;
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
				
				
			}
			
			if (__temp_executeDef601) 
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
			boolean __temp_executeDef602 = true;
			switch (field.hashCode())
			{
				case 1959846858:
				{
					if (field.equals("getNNote")) 
					{
						__temp_executeDef602 = false;
						return this.getNNote(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
				case 1182533742:
				{
					if (field.equals("iterator")) 
					{
						__temp_executeDef602 = false;
						return this.iterator();
					}
					
					break;
				}
				
				
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef602 = false;
						return this.get_length();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef602) 
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
		baseArr.push("npart");
		baseArr.push("type");
		baseArr.push("nnotes");
		baseArr.push("direction");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


