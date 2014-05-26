package nx3.qs;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class QSyntaxTools extends haxe.lang.HxObject
{
	public    QSyntaxTools(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    QSyntaxTools()
	{
		nx3.qs.QSyntaxTools.__hx_ctor_nx3_qs_QSyntaxTools(this);
	}
	
	
	public static   void __hx_ctor_nx3_qs_QSyntaxTools(nx3.qs.QSyntaxTools __temp_me192)
	{
		{
		}
		
	}
	
	
	public static   java.lang.String bpvToString(java.lang.Object val)
	{
		return ( ( ( ( ( "" + ((int) (haxe.lang.Runtime.getField_f(val, "barIndex", true)) ) ) + "-" ) + ((int) (haxe.lang.Runtime.getField_f(val, "partIndex", true)) ) ) + "-" ) + ((int) (haxe.lang.Runtime.getField_f(val, "voiceIndex", true)) ) );
	}
	
	
	public static   java.lang.Object stringToBpv(java.lang.String bpvString)
	{
		haxe.root.Array<java.lang.String> segments = haxe.lang.StringExt.split(bpvString, "-");
		java.lang.Object bpv = null;
		{
			java.lang.Object __temp_odecl863 = haxe.root.Std.parseInt(segments.__get(0));
			java.lang.Object __temp_odecl864 = haxe.root.Std.parseInt(segments.__get(1));
			java.lang.Object __temp_odecl865 = haxe.root.Std.parseInt(segments.__get(2));
			bpv = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{"barIndex", "partIndex", "voiceIndex"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{__temp_odecl863, __temp_odecl864, __temp_odecl865}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}));
		}
		
		return bpv;
	}
	
	
	public static   java.lang.Object getBpv(int barIndex, int partIndex, int voiceIndex)
	{
		java.lang.Object bpv = new haxe.lang.DynamicObject(new haxe.root.Array<java.lang.String>(new java.lang.String[]{}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{}), new haxe.root.Array<java.lang.String>(new java.lang.String[]{"barIndex", "partIndex", "voiceIndex"}), new haxe.root.Array<java.lang.Object>(new java.lang.Object[]{((java.lang.Object) (((double) (barIndex) )) ), ((java.lang.Object) (((double) (partIndex) )) ), ((java.lang.Object) (((double) (voiceIndex) )) )}));
		return bpv;
	}
	
	
	public static   java.lang.String getBpvString(int barIndex, int partIndex, int voiceIndex)
	{
		return ( ( ( ( ( "" + barIndex ) + "-" ) + partIndex ) + "-" ) + voiceIndex );
	}
	
	
	public static   java.lang.String removeComments(java.lang.String code)
	{
		haxe.root.EReg r = new haxe.root.EReg(haxe.lang.Runtime.toString("/\\*([a-zA-Z0-9-+=\" ]*)\\*/"), haxe.lang.Runtime.toString("g"));
		code = r.replace(code, " ");
		return code;
	}
	
	
	public static   java.lang.String removeSpaces(java.lang.String code)
	{
		haxe.root.EReg r = new haxe.root.EReg(haxe.lang.Runtime.toString("[ \t]{2,}"), haxe.lang.Runtime.toString("g"));
		code = r.replace(code, " ");
		return code;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.qs.QSyntaxTools(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.qs.QSyntaxTools();
	}
	
	
}


