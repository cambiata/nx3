
#pragma warning disable 109, 114, 219, 429, 168, 162
public  class Math {
	static Math() {
		#line 28 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Math.hx"
		{
			#line 29 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Math.hx"
			global::Math.PI = global::System.Math.PI;
			global::Math.NaN = double.NaN;
			global::Math.NEGATIVE_INFINITY = double.NegativeInfinity;
			global::Math.POSITIVE_INFINITY = double.PositiveInfinity;
			global::Math.rand = new global::System.Random();
		}
		
	}
	public    Math(){
		unchecked {
			#line 25 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Math.hx"
			{
			}
			
		}
		#line default
	}
	
	
	public static  global::System.Random rand;
	
	public static  double PI;
	
	public static  double NaN;
	
	public static  double NEGATIVE_INFINITY;
	
	public static  double POSITIVE_INFINITY;
	
	public static   int round(double v){
		unchecked {
			#line 110 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Math.hx"
			int vint = ((int) (v) );
			double dec = ( v - vint );
			if (( ( dec >= 1 ) || ( dec <= -1 ) )) {
				#line 113 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Math.hx"
				return vint;
			}
			
			#line 114 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Math.hx"
			if (( dec >= .5 )) {
				#line 115 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Math.hx"
				return ( vint + 1 );
			}
			
			#line 116 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Math.hx"
			if (( dec < -.5 )) {
				#line 117 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Math.hx"
				return ( vint - 1 );
			}
			
			#line 118 "F:\\HaxeToolkit\\haxe\\std\\cs\\_std\\Math.hx"
			return vint;
		}
		#line default
	}
	
	
}


