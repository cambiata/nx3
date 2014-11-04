package haxe.root;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class StringTools extends haxe.lang.HxObject
{
	public    StringTools(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    StringTools()
	{
		haxe.root.StringTools.__hx_ctor__StringTools(this);
	}
	
	
	public static   void __hx_ctor__StringTools(haxe.root.StringTools __temp_me10)
	{
		{
		}
		
	}
	
	
	public static   java.lang.String urlEncode(java.lang.String s)
	{
		try 
		{
			return java.net.URLEncoder.encode(s, "UTF-8");
		}
		catch (java.lang.Throwable __temp_catchallException237)
		{
			java.lang.Object __temp_catchall238 = __temp_catchallException237;
			if (( __temp_catchall238 instanceof haxe.lang.HaxeException )) 
			{
				__temp_catchall238 = ((haxe.lang.HaxeException) (__temp_catchallException237) ).obj;
			}
			
			{
				java.lang.Object e = __temp_catchall238;
				throw haxe.lang.HaxeException.wrap(e);
			}
			
		}
		
		
	}
	
	
	public static   java.lang.String urlDecode(java.lang.String s)
	{
		try 
		{
			return java.net.URLDecoder.decode(s, "UTF-8");
		}
		catch (java.lang.Throwable __temp_catchallException239)
		{
			java.lang.Object __temp_catchall240 = __temp_catchallException239;
			if (( __temp_catchall240 instanceof haxe.lang.HaxeException )) 
			{
				__temp_catchall240 = ((haxe.lang.HaxeException) (__temp_catchallException239) ).obj;
			}
			
			{
				java.lang.Object e = __temp_catchall240;
				throw haxe.lang.HaxeException.wrap(e);
			}
			
		}
		
		
	}
	
	
	public static   java.lang.String htmlEscape(java.lang.String s, java.lang.Object quotes)
	{
		s = haxe.lang.StringExt.split(haxe.lang.StringExt.split(haxe.lang.StringExt.split(s, "&").join("&amp;"), "<").join("&lt;"), ">").join("&gt;");
		if (haxe.lang.Runtime.toBool((quotes))) 
		{
			return haxe.lang.StringExt.split(haxe.lang.StringExt.split(s, "\"").join("&quot;"), "\'").join("&#039;");
		}
		 else 
		{
			return s;
		}
		
	}
	
	
	public static   java.lang.String replace(java.lang.String s, java.lang.String sub, java.lang.String by)
	{
		if (( sub.length() == 0 )) 
		{
			return haxe.lang.StringExt.split(s, sub).join(by);
		}
		 else 
		{
			return s.replace(sub, by);
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new haxe.root.StringTools(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new haxe.root.StringTools();
	}
	
	
}


