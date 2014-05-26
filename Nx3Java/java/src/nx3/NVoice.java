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
	
	
	public static   void __hx_ctor_nx3_NVoice(nx3.NVoice __temp_me88, haxe.root.Array<nx3.NNote> notes, nx3.EVoiceType type, nx3.EDirectionUAD direction)
	{
		if (( ( notes == null ) || ( notes == new haxe.root.Array<nx3.NNote>(new nx3.NNote[]{}) ) )) 
		{
			__temp_me88.nnotes = null;
			__temp_me88.type = nx3.EVoiceType.Barpause(0);
		}
		 else 
		{
			__temp_me88.nnotes = notes;
			if (( type != null )) 
			{
				__temp_me88.type = type;
			}
			 else 
			{
				__temp_me88.type = nx3.EVoiceType.Normal;
			}
			
		}
		
		{
			int _g = 0;
			while (( _g < notes.length ))
			{
				nx3.NNote note = notes.__get(_g);
				 ++ _g;
				note.nvoice = __temp_me88;
			}
			
		}
		
		if (( direction != null )) 
		{
			__temp_me88.direction = direction;
		}
		 else 
		{
			__temp_me88.direction = nx3.EDirectionUAD.Auto;
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
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef613 = true;
			switch (field.hashCode())
			{
				case 105020769:
				{
					if (field.equals("npart")) 
					{
						__temp_executeDef613 = false;
						this.npart = ((nx3.NPart) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -962590849:
				{
					if (field.equals("direction")) 
					{
						__temp_executeDef613 = false;
						this.direction = ((nx3.EDirectionUAD) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3575610:
				{
					if (field.equals("type")) 
					{
						__temp_executeDef613 = false;
						this.type = ((nx3.EVoiceType) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1040751853:
				{
					if (field.equals("nnotes")) 
					{
						__temp_executeDef613 = false;
						this.nnotes = ((haxe.root.Array<nx3.NNote>) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef613) 
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
			boolean __temp_executeDef614 = true;
			switch (field.hashCode())
			{
				case 1959846858:
				{
					if (field.equals("getNNote")) 
					{
						__temp_executeDef614 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNNote"))) );
					}
					
					break;
				}
				
				
				case -962590849:
				{
					if (field.equals("direction")) 
					{
						__temp_executeDef614 = false;
						return this.direction;
					}
					
					break;
				}
				
				
				case 105020769:
				{
					if (field.equals("npart")) 
					{
						__temp_executeDef614 = false;
						return this.npart;
					}
					
					break;
				}
				
				
				case -1040751853:
				{
					if (field.equals("nnotes")) 
					{
						__temp_executeDef614 = false;
						return this.nnotes;
					}
					
					break;
				}
				
				
				case 3575610:
				{
					if (field.equals("type")) 
					{
						__temp_executeDef614 = false;
						return this.type;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef614) 
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
			boolean __temp_executeDef615 = true;
			switch (field.hashCode())
			{
				case 1959846858:
				{
					if (field.equals("getNNote")) 
					{
						__temp_executeDef615 = false;
						return this.getNNote(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef615) 
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
		baseArr.push("npart");
		baseArr.push("type");
		baseArr.push("nnotes");
		baseArr.push("direction");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


