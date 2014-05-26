package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PHead extends haxe.lang.HxObject
{
	public    PHead(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PHead(nx3.NHead nhead)
	{
		nx3.PHead.__hx_ctor_nx3_PHead(this, nhead);
	}
	
	
	public static   void __hx_ctor_nx3_PHead(nx3.PHead __temp_me117, nx3.NHead nhead)
	{
		__temp_me117.nhead = nhead;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PHead(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PHead(((nx3.NHead) (arr.__get(0)) ));
	}
	
	
	public  nx3.NHead nhead;
	
	public  nx3.PNote note;
	
	public   nx3.PNote getNote()
	{
		return this.note;
	}
	
	
	@Override public   java.lang.String toString()
	{
		return ( "PHead  \r" + haxe.root.Std.string(this.nhead) );
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef701 = true;
			switch (field.hashCode())
			{
				case 3387378:
				{
					if (field.equals("note")) 
					{
						__temp_executeDef701 = false;
						this.note = ((nx3.PNote) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 104785742:
				{
					if (field.equals("nhead")) 
					{
						__temp_executeDef701 = false;
						this.nhead = ((nx3.NHead) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef701) 
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
			boolean __temp_executeDef702 = true;
			switch (field.hashCode())
			{
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef702 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("toString"))) );
					}
					
					break;
				}
				
				
				case 104785742:
				{
					if (field.equals("nhead")) 
					{
						__temp_executeDef702 = false;
						return this.nhead;
					}
					
					break;
				}
				
				
				case -75294616:
				{
					if (field.equals("getNote")) 
					{
						__temp_executeDef702 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getNote"))) );
					}
					
					break;
				}
				
				
				case 3387378:
				{
					if (field.equals("note")) 
					{
						__temp_executeDef702 = false;
						return this.note;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef702) 
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
			boolean __temp_executeDef703 = true;
			switch (field.hashCode())
			{
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef703 = false;
						return this.toString();
					}
					
					break;
				}
				
				
				case -75294616:
				{
					if (field.equals("getNote")) 
					{
						__temp_executeDef703 = false;
						return this.getNote();
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
		baseArr.push("note");
		baseArr.push("nhead");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


