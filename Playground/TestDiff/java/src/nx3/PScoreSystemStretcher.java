package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PScoreSystemStretcher extends haxe.lang.HxObject
{
	public    PScoreSystemStretcher(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PScoreSystemStretcher(nx3.PSystem system)
	{
		nx3.PScoreSystemStretcher.__hx_ctor_nx3_PScoreSystemStretcher(this, system);
	}
	
	
	public static   void __hx_ctor_nx3_PScoreSystemStretcher(nx3.PScoreSystemStretcher __temp_me109, nx3.PSystem system)
	{
		__temp_me109.system = system;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PScoreSystemStretcher(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PScoreSystemStretcher(((nx3.PSystem) (arr.__get(0)) ));
	}
	
	
	public  nx3.PSystem system;
	
	public   boolean stretchTo(double stretchSystemToWidth, java.lang.Object ifMoreThan)
	{
		double __temp_ifMoreThan108 = ( (( ifMoreThan == null )) ? (((double) (0) )) : (((double) (haxe.lang.Runtime.toDouble(ifMoreThan)) )) );
		if (( __temp_ifMoreThan108 > 0 )) 
		{
			if (( this.system.getWidth() <= __temp_ifMoreThan108 )) 
			{
				return true;
			}
			
		}
		
		double diff = ( stretchSystemToWidth - this.system.getWidth() );
		int totalvalue = this.system.getValue();
		{
			int _g = 0;
			haxe.root.Array<nx3.PSystemBar> _g1 = this.system.getSystembars();
			while (( _g < _g1.length ))
			{
				nx3.PSystemBar systembar = _g1.__get(_g);
				 ++ _g;
				double stretchamount = ( ( ((double) (systembar.bar.getValue()) ) / totalvalue ) * diff );
				systembar.setBarStretch(stretchamount);
			}
			
		}
		
		this.system.calculateSystembarXs();
		return false;
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef571 = true;
			switch (field.hashCode())
			{
				case -887328209:
				{
					if (field.equals("system")) 
					{
						__temp_executeDef571 = false;
						this.system = ((nx3.PSystem) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef571) 
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
			boolean __temp_executeDef572 = true;
			switch (field.hashCode())
			{
				case -298367904:
				{
					if (field.equals("stretchTo")) 
					{
						__temp_executeDef572 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("stretchTo"))) );
					}
					
					break;
				}
				
				
				case -887328209:
				{
					if (field.equals("system")) 
					{
						__temp_executeDef572 = false;
						return this.system;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef572) 
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
			boolean __temp_executeDef573 = true;
			switch (field.hashCode())
			{
				case -298367904:
				{
					if (field.equals("stretchTo")) 
					{
						__temp_executeDef573 = false;
						return this.stretchTo(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), dynargs.__get(1));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef573) 
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
		baseArr.push("system");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


