package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class EVoiceType extends haxe.lang.Enum
{
	static 
	{
		nx3.EVoiceType.constructs = new haxe.root.Array<java.lang.String>(new java.lang.String[]{"Normal", "Barpause"});
		nx3.EVoiceType.Normal = new nx3.EVoiceType(((int) (0) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{})) ));
	}
	public    EVoiceType(int index, haxe.root.Array<java.lang.Object> params)
	{
		super(index, params);
	}
	
	
	public static  haxe.root.Array<java.lang.String> constructs;
	
	public static  nx3.EVoiceType Normal;
	
	public static   nx3.EVoiceType Barpause(int level)
	{
		return new nx3.EVoiceType(((int) (1) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{level})) ));
	}
	
	
}


