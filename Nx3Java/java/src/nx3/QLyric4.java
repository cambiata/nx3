package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QLyric4 extends nx3.NNote
{
	public    QLyric4(haxe.lang.EmptyObject empty)
	{
		super(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public    QLyric4(java.lang.String text)
	{
		super(haxe.lang.EmptyObject.EMPTY);
		nx3.QLyric4.__hx_ctor_nx3_QLyric4(this, text);
	}
	
	
	public static   void __hx_ctor_nx3_QLyric4(nx3.QLyric4 __temp_me162, java.lang.String text)
	{
		nx3.NNote.__hx_ctor_nx3_NNote(__temp_me162, nx3.ENoteType.Lyric(( (( text == null )) ? (haxe.lang.Runtime.toString("QLyric4")) : (text) ), null, null, null), null, nx3.ENoteVal.Nv4, null);
		if (( text == null )) 
		{
			text = "QLyric4";
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.QLyric4(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.QLyric4(haxe.lang.Runtime.toString(arr.__get(0)));
	}
	
	
}


