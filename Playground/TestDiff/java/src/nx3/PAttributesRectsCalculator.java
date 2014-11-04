package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class PAttributesRectsCalculator extends haxe.lang.HxObject
{
	public    PAttributesRectsCalculator(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    PAttributesRectsCalculator()
	{
		nx3.PAttributesRectsCalculator.__hx_ctor_nx3_PAttributesRectsCalculator(this);
	}
	
	
	public static   void __hx_ctor_nx3_PAttributesRectsCalculator(nx3.PAttributesRectsCalculator __temp_me67)
	{
		{
		}
		
	}
	
	
	public static   nx3.geom.Rectangle getClefRect(nx3.EClef clef)
	{
		switch (haxe.root.Type.enumIndex(clef))
		{
			case 2:
			{
				return new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (-3) ), ((java.lang.Object) (9) ), ((java.lang.Object) (6) ));
			}
			
			
			case 1:
			{
				return new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (-4) ), ((java.lang.Object) (9) ), ((java.lang.Object) (8) ));
			}
			
			
			case 0:
			{
				return new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (-5) ), ((java.lang.Object) (9) ), ((java.lang.Object) (10) ));
			}
			
			
		}
		
		return null;
	}
	
	
	public static   nx3.geom.Rectangle getKeyRect(nx3.EKey key)
	{
		switch (haxe.root.Type.enumIndex(key))
		{
			case 6:
			{
				return new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (-3) ), ((java.lang.Object) (1) ), ((java.lang.Object) (6) ));
			}
			
			
			case 7:case 5:
			{
				return new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (-3) ), ((java.lang.Object) (4.4) ), ((java.lang.Object) (6) ));
			}
			
			
			case 8:case 4:
			{
				return new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (-3) ), ((java.lang.Object) (6.8) ), ((java.lang.Object) (6) ));
			}
			
			
			case 9:case 3:
			{
				return new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (-3) ), ((java.lang.Object) (9.2) ), ((java.lang.Object) (6) ));
			}
			
			
			case 10:case 2:
			{
				return new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (-3) ), ((java.lang.Object) (11.6) ), ((java.lang.Object) (6) ));
			}
			
			
			case 11:case 1:
			{
				return new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (-3) ), ((java.lang.Object) (14.) ), ((java.lang.Object) (6) ));
			}
			
			
			default:
			{
				return new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (-2) ), ((java.lang.Object) (.5) ), ((java.lang.Object) (4) ));
			}
			
		}
		
	}
	
	
	public static   nx3.geom.Rectangle getTimeRect(nx3.ETime time)
	{
		if (( time == null )) 
		{
			return new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (-3) ), ((java.lang.Object) (.5) ), ((java.lang.Object) (3) ));
		}
		
		switch (haxe.root.Type.enumIndex(time))
		{
			case 16:
			{
				return new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (-3) ), ((java.lang.Object) (6) ), ((java.lang.Object) (6) ));
			}
			
			
			default:
			{
				return new nx3.geom.Rectangle(((java.lang.Object) (0) ), ((java.lang.Object) (-3) ), ((java.lang.Object) (4) ), ((java.lang.Object) (3) ));
			}
			
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.PAttributesRectsCalculator(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.PAttributesRectsCalculator();
	}
	
	
}


