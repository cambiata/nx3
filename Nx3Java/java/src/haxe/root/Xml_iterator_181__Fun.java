package haxe.root;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Xml_iterator_181__Fun extends haxe.lang.Function
{
	public    Xml_iterator_181__Fun(haxe.root.Array<java.lang.Object> cur, haxe.root.Array<haxe.root.Array> x)
	{
		super(0, 0);
		this.cur = cur;
		this.x = x;
	}
	
	
	@Override public   java.lang.Object __hx_invoke0_o()
	{
		int __temp_stmt312 = 0;
		{
			int __temp_arrIndex224 = 0;
			int __temp_arrVal222 = ((int) (haxe.lang.Runtime.toInt(this.cur.__get(__temp_arrIndex224))) );
			int __temp_arrRet223 = __temp_arrVal222++;
			int __temp_expr313 = ((int) (haxe.lang.Runtime.toInt(this.cur.__set(__temp_arrIndex224, __temp_arrVal222))) );
			__temp_stmt312 = __temp_arrRet223;
		}
		
		haxe.root.Array<haxe.root.Xml> __temp_stmt314 = ((haxe.root.Array<haxe.root.Xml>) (((haxe.root.Array) (this.x.__get(0)) )) );
		return __temp_stmt314.__get(__temp_stmt312);
	}
	
	
	public  haxe.root.Array<java.lang.Object> cur;
	
	public  haxe.root.Array<haxe.root.Array> x;
	
}


