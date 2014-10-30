package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class EDirectionUADTools extends haxe.lang.HxObject
{
	public    EDirectionUADTools(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    EDirectionUADTools()
	{
		nx3.EDirectionUADTools.__hx_ctor_nx3_EDirectionUADTools(this);
	}
	
	
	public static   void __hx_ctor_nx3_EDirectionUADTools(nx3.EDirectionUADTools __temp_me65)
	{
		{
		}
		
	}
	
	
	public static   nx3.EDirectionUD toUD(nx3.EDirectionUAD direction)
	{
		switch (haxe.root.Type.enumIndex(direction))
		{
			case 0:
			{
				return nx3.EDirectionUD.Up;
			}
			
			
			case 2:
			{
				return nx3.EDirectionUD.Down;
			}
			
			
			default:
			{
				return nx3.EDirectionUD.Down;
			}
			
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.EDirectionUADTools(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.EDirectionUADTools();
	}
	
	
}


