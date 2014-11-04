package cx.diff;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class DiffTools extends haxe.lang.HxObject
{
	public    DiffTools(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    DiffTools()
	{
		cx.diff.DiffTools.__hx_ctor_cx_diff_DiffTools(this);
	}
	
	
	public static   void __hx_ctor_cx_diff_DiffTools(cx.diff.DiffTools __temp_me32)
	{
		{
		}
		
	}
	
	
	public static   java.lang.String diffObject(java.lang.Object obj1, java.lang.Object obj2)
	{
		return cx.diff.mtwin.text.Diff.diff(cx.diff.DiffTools.serializeObject(obj1), cx.diff.DiffTools.serializeObject(obj2));
	}
	
	
	public static   java.lang.Object patchOject(java.lang.Object obj, java.lang.String diff)
	{
		java.lang.String patchedStr = cx.diff.mtwin.text.Diff.patch(cx.diff.DiffTools.serializeObject(obj), diff);
		return cx.diff.DiffTools.unserializeObject(patchedStr);
	}
	
	
	public static   java.lang.Object unpatchObject(java.lang.Object obj, java.lang.String diff)
	{
		java.lang.String unpatchedStr = cx.diff.mtwin.text.Diff.unpatch(cx.diff.DiffTools.serializeObject(obj), diff);
		return cx.diff.DiffTools.unserializeObject(unpatchedStr);
	}
	
	
	public static   java.lang.String serializeObject(java.lang.Object obj)
	{
		haxe.Serializer.USE_CACHE = true;
		java.lang.String sObj = haxe.Serializer.run(obj);
		sObj = ( haxe.root.StringTools.replace(sObj, ":", "\n") + "\n" );
		return sObj;
	}
	
	
	public static   java.lang.Object unserializeObject(java.lang.String objString)
	{
		objString = haxe.lang.StringExt.substr(objString, 0, -1);
		objString = haxe.root.StringTools.replace(objString, "\n", ":");
		return haxe.Unserializer.run(objString);
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new cx.diff.DiffTools(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new cx.diff.DiffTools();
	}
	
	
}


