package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class NHead extends haxe.lang.HxObject
{
	public    NHead(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    NHead(nx3.EHeadType type, java.lang.Object level, nx3.ESign sign, nx3.ETie tie, nx3.ETie tieTo)
	{
		nx3.NHead.__hx_ctor_nx3_NHead(this, type, level, sign, tie, tieTo);
	}
	
	
	public static   void __hx_ctor_nx3_NHead(nx3.NHead __temp_me62, nx3.EHeadType type, java.lang.Object level, nx3.ESign sign, nx3.ETie tie, nx3.ETie tieTo)
	{
		java.lang.Object __temp_level61 = ( (( level == null )) ? (((java.lang.Object) (0) )) : (((java.lang.Object) (level) )) );
		if (( type != null )) 
		{
			__temp_me62.type = type;
		}
		 else 
		{
			__temp_me62.type = nx3.EHeadType.Normal;
		}
		
		if (( sign != null )) 
		{
			__temp_me62.sign = sign;
		}
		 else 
		{
			__temp_me62.sign = nx3.ESign.None;
		}
		
		if (( tie != null )) 
		{
			__temp_me62.tie = tie;
		}
		 else 
		{
			__temp_me62.tie = null;
		}
		
		if (( tieTo != null )) 
		{
			__temp_me62.tieTo = tieTo;
		}
		 else 
		{
			__temp_me62.tieTo = null;
		}
		
		__temp_me62.level = ((int) (haxe.lang.Runtime.toInt(__temp_level61)) );
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.NHead(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.NHead(((nx3.EHeadType) (arr.__get(0)) ), ((java.lang.Object) (arr.__get(1)) ), ((nx3.ESign) (arr.__get(2)) ), ((nx3.ETie) (arr.__get(3)) ), ((nx3.ETie) (arr.__get(4)) ));
	}
	
	
	public  int level;
	
	public  nx3.EHeadType type;
	
	public  nx3.ESign sign;
	
	public  nx3.ETie tie;
	
	public  nx3.ETie tieTo;
	
	public  nx3.NNote nnote;
	
	@Override public   java.lang.String toString()
	{
		java.lang.String str = ( "" + this.level );
		if (( this.type != nx3.EHeadType.Normal )) 
		{
			str += ( " " + haxe.root.Type.enumConstructor(this.type) );
		}
		 else 
		{
			str += "";
		}
		
		if (( this.sign != nx3.ESign.None )) 
		{
			str += ( " " + haxe.root.Type.enumConstructor(this.sign) );
		}
		 else 
		{
			str += "";
		}
		
		return ( ( "NHead(" + str ) + ")" );
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef410 = true;
			switch (field.hashCode())
			{
				case 102865796:
				{
					if (field.equals("level")) 
					{
						__temp_executeDef410 = false;
						this.level = ((int) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef410) 
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
			boolean __temp_executeDef411 = true;
			switch (field.hashCode())
			{
				case 104974688:
				{
					if (field.equals("nnote")) 
					{
						__temp_executeDef411 = false;
						this.nnote = ((nx3.NNote) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 102865796:
				{
					if (field.equals("level")) 
					{
						__temp_executeDef411 = false;
						this.level = ((int) (haxe.lang.Runtime.toInt(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 110356267:
				{
					if (field.equals("tieTo")) 
					{
						__temp_executeDef411 = false;
						this.tieTo = ((nx3.ETie) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3575610:
				{
					if (field.equals("type")) 
					{
						__temp_executeDef411 = false;
						this.type = ((nx3.EHeadType) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 114832:
				{
					if (field.equals("tie")) 
					{
						__temp_executeDef411 = false;
						this.tie = ((nx3.ETie) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3530173:
				{
					if (field.equals("sign")) 
					{
						__temp_executeDef411 = false;
						this.sign = ((nx3.ESign) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef411) 
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
			boolean __temp_executeDef412 = true;
			switch (field.hashCode())
			{
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef412 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("toString"))) );
					}
					
					break;
				}
				
				
				case 102865796:
				{
					if (field.equals("level")) 
					{
						__temp_executeDef412 = false;
						return this.level;
					}
					
					break;
				}
				
				
				case 104974688:
				{
					if (field.equals("nnote")) 
					{
						__temp_executeDef412 = false;
						return this.nnote;
					}
					
					break;
				}
				
				
				case 3575610:
				{
					if (field.equals("type")) 
					{
						__temp_executeDef412 = false;
						return this.type;
					}
					
					break;
				}
				
				
				case 110356267:
				{
					if (field.equals("tieTo")) 
					{
						__temp_executeDef412 = false;
						return this.tieTo;
					}
					
					break;
				}
				
				
				case 3530173:
				{
					if (field.equals("sign")) 
					{
						__temp_executeDef412 = false;
						return this.sign;
					}
					
					break;
				}
				
				
				case 114832:
				{
					if (field.equals("tie")) 
					{
						__temp_executeDef412 = false;
						return this.tie;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef412) 
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
			boolean __temp_executeDef413 = true;
			switch (field.hashCode())
			{
				case 102865796:
				{
					if (field.equals("level")) 
					{
						__temp_executeDef413 = false;
						return ((double) (this.level) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef413) 
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
			boolean __temp_executeDef414 = true;
			switch (field.hashCode())
			{
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef414 = false;
						return this.toString();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef414) 
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
		baseArr.push("nnote");
		baseArr.push("tieTo");
		baseArr.push("tie");
		baseArr.push("sign");
		baseArr.push("type");
		baseArr.push("level");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


