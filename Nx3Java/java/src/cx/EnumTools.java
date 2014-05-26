package cx;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class EnumTools extends haxe.lang.HxObject
{
	public    EnumTools(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    EnumTools()
	{
		cx.EnumTools.__hx_ctor_cx_EnumTools(this);
	}
	
	
	public static   void __hx_ctor_cx_EnumTools(cx.EnumTools __temp_me22)
	{
		{
		}
		
	}
	
	
	public static  <T> T createFromString(java.lang.Class<T> e, java.lang.String str)
	{
		try 
		{
			java.lang.String type = str;
			haxe.root.Array<java.lang.String> params = new haxe.root.Array<java.lang.String>(new java.lang.String[]{});
			if (cx.StrTools.has(str, "(")) 
			{
				int parIdx = haxe.lang.StringExt.indexOf(str, "(", null);
				type = haxe.lang.StringExt.substr(str, 0, parIdx);
				params = haxe.lang.StringExt.split(haxe.root.StringTools.replace(haxe.root.StringTools.replace(haxe.lang.StringExt.substr(str, parIdx, null), "(", ""), ")", ""), ",");
			}
			
			return haxe.root.Type.createEnum(e, type, ((haxe.root.Array) (params) ));
		}
		catch (java.lang.Throwable __temp_catchallException315)
		{
			java.lang.Object __temp_catchall316 = __temp_catchallException315;
			if (( __temp_catchall316 instanceof haxe.lang.HaxeException )) 
			{
				__temp_catchall316 = ((haxe.lang.HaxeException) (__temp_catchallException315) ).obj;
			}
			
			{
				java.lang.Object e1 = __temp_catchall316;
				{
				}
				
			}
			
		}
		
		
		return null;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new cx.EnumTools(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new cx.EnumTools();
	}
	
	
}


