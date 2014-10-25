
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PAttributesRectsCalculator : global::haxe.lang.HxObject {
		public    PAttributesRectsCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PAttributesRectsCalculator(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
				global::nx3.PAttributesRectsCalculator.__hx_ctor_nx3_PAttributesRectsCalculator(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PAttributesRectsCalculator(global::nx3.PAttributesRectsCalculator __temp_me74){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static   global::nx3.geom.Rectangle getClefRect(global::nx3.EClef clef){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
				switch (global::Type.enumIndex(clef)){
					case 2:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(((double) (9) ), true), new global::haxe.lang.Null<double>(((double) (6) ), true));
					}
					
					
					case 1:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-4) ), true), new global::haxe.lang.Null<double>(((double) (9) ), true), new global::haxe.lang.Null<double>(((double) (8) ), true));
					}
					
					
					case 0:
					{
						#line 16 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-5) ), true), new global::haxe.lang.Null<double>(((double) (9) ), true), new global::haxe.lang.Null<double>(((double) (10) ), true));
					}
					
					
				}
				
				#line 10 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
				return default(global::nx3.geom.Rectangle);
			}
			#line default
		}
		
		
		public static   global::nx3.geom.Rectangle getKeyRect(global::nx3.EKey key){
			unchecked {
				#line 24 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
				switch (global::Type.enumIndex(key)){
					case 6:
					{
						#line 26 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(((double) (1) ), true), new global::haxe.lang.Null<double>(((double) (6) ), true));
					}
					
					
					case 7:case 5:
					{
						#line 27 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(4.4, true), new global::haxe.lang.Null<double>(((double) (6) ), true));
					}
					
					
					case 8:case 4:
					{
						#line 28 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(6.8, true), new global::haxe.lang.Null<double>(((double) (6) ), true));
					}
					
					
					case 9:case 3:
					{
						#line 29 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(9.2, true), new global::haxe.lang.Null<double>(((double) (6) ), true));
					}
					
					
					case 10:case 2:
					{
						#line 30 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(11.6, true), new global::haxe.lang.Null<double>(((double) (6) ), true));
					}
					
					
					case 11:case 1:
					{
						#line 31 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(14.0, true), new global::haxe.lang.Null<double>(((double) (6) ), true));
					}
					
					
					default:
					{
						#line 33 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-2) ), true), new global::haxe.lang.Null<double>(.5, true), new global::haxe.lang.Null<double>(((double) (4) ), true));
					}
					
				}
				
			}
			#line default
		}
		
		
		public static   global::nx3.geom.Rectangle getTimeRect(global::nx3.ETime time){
			unchecked {
				#line 39 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
				if (( time == default(global::nx3.ETime) )) {
					#line 39 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
					return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(.5, true), new global::haxe.lang.Null<double>(((double) (3) ), true));
				}
				
				#line 40 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
				switch (global::Type.enumIndex(time)){
					case 16:
					{
						#line 42 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(((double) (6) ), true), new global::haxe.lang.Null<double>(((double) (6) ), true));
					}
					
					
					default:
					{
						#line 45 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(((double) (4) ), true), new global::haxe.lang.Null<double>(((double) (3) ), true));
					}
					
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
				return new global::nx3.PAttributesRectsCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PAttributesRectsCalculator.hx"
				return new global::nx3.PAttributesRectsCalculator();
			}
			#line default
		}
		
		
	}
}


