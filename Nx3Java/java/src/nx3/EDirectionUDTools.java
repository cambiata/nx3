package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class EDirectionUDTools extends haxe.lang.HxObject
{
	public    EDirectionUDTools(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    EDirectionUDTools()
	{
		nx3.EDirectionUDTools.__hx_ctor_nx3_EDirectionUDTools(this);
	}
	
	
	public static   void __hx_ctor_nx3_EDirectionUDTools(nx3.EDirectionUDTools __temp_me67)
	{
		{
		}
		
	}
	
	
	public static   nx3.EDirectionUAD toUAD(nx3.EDirectionUD direction)
	{
		if (( direction == nx3.EDirectionUD.Up )) 
		{
			return nx3.EDirectionUAD.Up;
		}
		 else 
		{
			return nx3.EDirectionUAD.Down;
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.EDirectionUDTools(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.EDirectionUDTools();
	}
	
	
}


