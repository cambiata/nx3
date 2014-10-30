package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class EDirectionTools extends haxe.lang.HxObject
{
	public    EDirectionTools(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    EDirectionTools()
	{
		nx3.EDirectionTools.__hx_ctor_nx3_EDirectionTools(this);
	}
	
	
	public static   void __hx_ctor_nx3_EDirectionTools(nx3.EDirectionTools __temp_me64)
	{
		{
		}
		
	}
	
	
	public static   nx3.EDirectionUD uadToUd(nx3.EDirectionUAD directionUAD)
	{
		if (( directionUAD == nx3.EDirectionUAD.Up )) 
		{
			return nx3.EDirectionUD.Up;
		}
		
		return nx3.EDirectionUD.Down;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.EDirectionTools(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.EDirectionTools();
	}
	
	
}


