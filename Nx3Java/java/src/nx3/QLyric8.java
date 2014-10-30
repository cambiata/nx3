package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QLyric8 extends nx3.NNote
{
	public    QLyric8(haxe.lang.EmptyObject empty)
	{
		super(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public    QLyric8(java.lang.String text)
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.QLyric8.__hx_ctor_nx3_QLyric8(this, text);
	}
	
	
	public static   void __hx_ctor_nx3_QLyric8(nx3.QLyric8 __temp_me149, java.lang.String text)
	{
		nx3.NNote.__hx_ctor_nx3_NNote(__temp_me149, nx3.ENoteType.Lyric(( (( text == null )) ? (haxe.lang.Runtime.toString("QLyric4")) : (text) ), null, null, null), null, nx3.ENoteVal.Nv8, null);
		if (( text == null )) 
		{
			text = "QLyric4";
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.QLyric8(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.QLyric8(haxe.lang.Runtime.toString(arr.__get(0)));
	}
	
	
}


