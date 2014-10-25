
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PComplexDistancesCalculator : global::haxe.lang.HxObject {
		public    PComplexDistancesCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PComplexDistancesCalculator(){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
				global::nx3.PComplexDistancesCalculator.__hx_ctor_nx3_PComplexDistancesCalculator(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PComplexDistancesCalculator(global::nx3.PComplexDistancesCalculator __temp_me97){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
				return new global::nx3.PComplexDistancesCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
				return new global::nx3.PComplexDistancesCalculator();
			}
			#line default
		}
		
		
		public virtual   double getDistance(global::nx3.PComplex leftComplex, global::nx3.PComplex rightComplex){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
				global::Array<object> leftBaseRects = new global::Array<object>(new object[]{leftComplex.getBaseRect()});
				global::Array<object> rightBaseRects = new global::Array<object>(new object[]{rightComplex.getBaseRect()});
				double minDistance = global::nx3.geom.RectanglesTools.getXIntersection(leftBaseRects, rightBaseRects);
				#line 25 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
				global::Array<object> leftRects = leftComplex.getAllRects();
				global::Array<object> rightRects = rightComplex.getAllRects();
				double objDistance = global::nx3.geom.RectanglesTools.getXIntersection(leftRects, rightRects);
				#line 29 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
				double objDistanceMargin = ( objDistance + 0.6 );
				#line 31 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
				return global::System.Math.Max(((double) (minDistance) ), ((double) (objDistanceMargin) ));
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getRects(global::nx3.PComplex complex){
			unchecked {
				#line 37 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
				global::Array<object> rects = new global::Array<object>(new object[]{});
				#line 39 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
				rects.concat(complex.getHeadsRects());
				rects.concat(complex.getStavesRects());
				rects.concat(complex.getSignsRects());
				#line 43 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
				return rects;
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
				switch (hash){
					case 1184055897:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getRects") ), ((int) (1184055897) ))) );
					}
					
					
					case 300766699:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDistance") ), ((int) (300766699) ))) );
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
				switch (hash){
					case 1184055897:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
						return this.getRects(((global::nx3.PComplex) (dynargs[0]) ));
					}
					
					
					case 300766699:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
						return this.getDistance(((global::nx3.PComplex) (dynargs[0]) ), ((global::nx3.PComplex) (dynargs[1]) ));
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PComplexDistancesCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
	}
}


