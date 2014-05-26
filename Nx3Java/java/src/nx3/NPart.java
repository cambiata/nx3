package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NPart extends haxe.lang.HxObject
{
	public    NPart(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    NPart(haxe.root.Array<nx3.NVoice> voices, nx3.EPartType type, nx3.EClef clef, nx3.EDisplayALN clefDisplay, nx3.EKey key, nx3.EDisplayALN keyDisplay)
	{
		nx3.NPart.__hx_ctor_nx3_NPart(this, voices, type, clef, clefDisplay, key, keyDisplay);
	}
	
	
	public static   void __hx_ctor_nx3_NPart(nx3.NPart __temp_me75, haxe.root.Array<nx3.NVoice> voices, nx3.EPartType type, nx3.EClef clef, nx3.EDisplayALN clefDisplay, nx3.EKey key, nx3.EDisplayALN keyDisplay)
	{
		__temp_me75.nvoices = voices;
		{
			int _g = 0;
			while (( _g < voices.length ))
			{
				nx3.NVoice voice = voices.__get(_g);
				 ++ _g;
				voice.npart = __temp_me75;
			}
			
		}
		
		if (( __temp_me75.nvoices.length > 2 )) 
		{
			throw haxe.lang.HaxeException.wrap("For now, NPart can\'t have more than two voices");
		}
		
		if (( type == null )) 
		{
			__temp_me75.type = nx3.EPartType.Normal;
		}
		 else 
		{
			__temp_me75.type = type;
		}
		
		__temp_me75.clef = clef;
		if (( clefDisplay == null )) 
		{
			__temp_me75.clefDisplay = nx3.EDisplayALN.Layout;
		}
		 else 
		{
			__temp_me75.clefDisplay = clefDisplay;
		}
		
		__temp_me75.key = key;
		if (( keyDisplay == null )) 
		{
			__temp_me75.keyDisplay = nx3.EDisplayALN.Layout;
		}
		 else 
		{
			__temp_me75.keyDisplay = keyDisplay;
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.NPart(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.NPart(((haxe.root.Array<nx3.NVoice>) (arr.__get(0)) ), ((nx3.EPartType) (arr.__get(1)) ), ((nx3.EClef) (arr.__get(2)) ), ((nx3.EDisplayALN) (arr.__get(3)) ), ((nx3.EKey) (arr.__get(4)) ), ((nx3.EDisplayALN) (arr.__get(5)) ));
	}
	
	
	public  nx3.NBar nbar;
	
	public  nx3.EPartType type;
	
	public  haxe.root.Array<nx3.NVoice> nvoices;
	
	public  nx3.EClef clef;
	
	public  nx3.EDisplayALN clefDisplay;
	
	public  nx3.EKey key;
	
	public  nx3.EDisplayALN keyDisplay;
	
	public   nx3.NVoice getNVoice(int idx)
	{
		if (( ( idx < 0 ) || ( idx > this.nvoices.length ) )) 
		{
			return null;
		}
		 else 
		{
			return this.nvoices.__get(idx);
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef603 = true;
			switch (field.hashCode())
			{
				case 2046687587:
				{
					if (field.equals("keyDisplay")) 
					{
						__temp_executeDef603 = false;
						this.keyDisplay = ((nx3.EDisplayALN) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3374309:
				{
					if (field.equals("nbar")) 
					{
						__temp_executeDef603 = false;
						this.nbar = ((nx3.NBar) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 106079:
				{
					if (field.equals("key")) 
					{
						__temp_executeDef603 = false;
						this.key = ((nx3.EKey) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3575610:
				{
					if (field.equals("type")) 
					{
						__temp_executeDef603 = false;
						this.type = ((nx3.EPartType) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 1291990680:
				{
					if (field.equals("clefDisplay")) 
					{
						__temp_executeDef603 = false;
						this.clefDisplay = ((nx3.EDisplayALN) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1969833105:
				{
					if (field.equals("nvoices")) 
					{
						__temp_executeDef603 = false;
						this.nvoices = ((haxe.root.Array<nx3.NVoice>) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3056330:
				{
					if (field.equals("clef")) 
					{
						__temp_executeDef603 = false;
						this.clef = ((nx3.EClef) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef603) 
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
			boolean __temp_executeDef604 = true;
			switch (field.hashCode())
			{
				case 633088090:
				{
					if (field.equals("getNVoice")) 
					{
						__temp_executeDef604 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNVoice"))) );
					}
					
					break;
				}
				
				
				case 3374309:
				{
					if (field.equals("nbar")) 
					{
						__temp_executeDef604 = false;
						return this.nbar;
					}
					
					break;
				}
				
				
				case 2046687587:
				{
					if (field.equals("keyDisplay")) 
					{
						__temp_executeDef604 = false;
						return this.keyDisplay;
					}
					
					break;
				}
				
				
				case 3575610:
				{
					if (field.equals("type")) 
					{
						__temp_executeDef604 = false;
						return this.type;
					}
					
					break;
				}
				
				
				case 106079:
				{
					if (field.equals("key")) 
					{
						__temp_executeDef604 = false;
						return this.key;
					}
					
					break;
				}
				
				
				case -1969833105:
				{
					if (field.equals("nvoices")) 
					{
						__temp_executeDef604 = false;
						return this.nvoices;
					}
					
					break;
				}
				
				
				case 1291990680:
				{
					if (field.equals("clefDisplay")) 
					{
						__temp_executeDef604 = false;
						return this.clefDisplay;
					}
					
					break;
				}
				
				
				case 3056330:
				{
					if (field.equals("clef")) 
					{
						__temp_executeDef604 = false;
						return this.clef;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef604) 
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
			boolean __temp_executeDef605 = true;
			switch (field.hashCode())
			{
				case 633088090:
				{
					if (field.equals("getNVoice")) 
					{
						__temp_executeDef605 = false;
						return this.getNVoice(((int) (haxe.lang.Runtime.toInt(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef605) 
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
		baseArr.push("keyDisplay");
		baseArr.push("key");
		baseArr.push("clefDisplay");
		baseArr.push("clef");
		baseArr.push("nvoices");
		baseArr.push("type");
		baseArr.push("nbar");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


