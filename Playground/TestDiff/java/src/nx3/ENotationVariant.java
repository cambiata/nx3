package nx3;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class ENotationVariant extends haxe.lang.Enum
{
	static 
	{
		nx3.ENotationVariant.constructs = new haxe.root.Array<java.lang.String>(new java.lang.String[]{"Normal", "Rythmic", "RythmicSingleLevel", "HeadsOnly", "StavesOnly"});
		nx3.ENotationVariant.Normal = new nx3.ENotationVariant(((int) (0) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{})) ));
		nx3.ENotationVariant.Rythmic = new nx3.ENotationVariant(((int) (1) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{})) ));
		nx3.ENotationVariant.HeadsOnly = new nx3.ENotationVariant(((int) (3) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{})) ));
		nx3.ENotationVariant.StavesOnly = new nx3.ENotationVariant(((int) (4) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{})) ));
	}
	public    ENotationVariant(int index, haxe.root.Array<java.lang.Object> params)
	{
		super(index, params);
	}
	
	
	public static  haxe.root.Array<java.lang.String> constructs;
	
	public static  nx3.ENotationVariant Normal;
	
	public static  nx3.ENotationVariant Rythmic;
	
	public static   nx3.ENotationVariant RythmicSingleLevel(int level)
	{
		return new nx3.ENotationVariant(((int) (2) ), ((haxe.root.Array<java.lang.Object>) (new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{level})) ));
	}
	
	
	public static  nx3.ENotationVariant HeadsOnly;
	
	public static  nx3.ENotationVariant StavesOnly;
	
}


