
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.geom{
	public  class RectanglesTools : global::haxe.lang.HxObject {
		public    RectanglesTools(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    RectanglesTools(){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				global::nx3.geom.RectanglesTools.__hx_ctor_nx3_geom_RectanglesTools(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_geom_RectanglesTools(global::nx3.geom.RectanglesTools __temp_me135){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static   double getXIntersection(global::Array<object> rectsA, global::Array<object> rectsB){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				global::Array<object> rectsA1 = new global::Array<object>(new object[]{rectsA});
				#line 14 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				global::Array<object> rectsB2 = new global::Array<object>(new object[]{new global::Array<object>()});
				{
					#line 15 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					int _g = 0;
					#line 15 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					while (( _g < rectsB.length )){
						#line 15 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
						global::nx3.geom.Rectangle r = ((global::nx3.geom.Rectangle) (rectsB[_g]) );
						#line 15 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
						 ++ _g;
						#line 15 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
						((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (rectsB2[0]) ))) ).push(r.clone());
					}
					
				}
				
				#line 16 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				global::haxe.lang.Function check = new global::nx3.geom.RectanglesTools_getXIntersection_16__Fun(((global::Array<object>) (rectsA1) ), ((global::Array<object>) (rectsB2) ));
				#line 30 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				double x = ((double) (0) );
				double moveX = ((double) (check.__hx_invoke0_f()) );
				while (( moveX > 0 )){
					#line 34 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					x += moveX;
					{
						#line 35 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
						int _g2 = 0;
						#line 35 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
						while (( _g2 < ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (rectsB2[0]) ))) ).length )){
							#line 35 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
							global::nx3.geom.Rectangle r1 = ((global::nx3.geom.Rectangle) (((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (rectsB2[0]) ))) )[_g2]) );
							#line 35 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
							 ++ _g2;
							#line 35 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
							r1.offset(moveX, ((double) (0) ));
						}
						
					}
					
					#line 36 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					moveX = ((double) (check.__hx_invoke0_f()) );
				}
				
				#line 38 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				return x;
			}
			#line default
		}
		
		
		public static   global::Array<object> clone(global::Array<object> rects){
			unchecked {
				#line 43 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				if (( rects == default(global::Array<object>) )) {
					#line 43 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					return default(global::Array<object>);
				}
				
				#line 44 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				global::Array<object> result = new global::Array<object>();
				{
					#line 45 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					int _g = 0;
					#line 45 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					while (( _g < rects.length )){
						#line 45 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
						global::nx3.geom.Rectangle r = ((global::nx3.geom.Rectangle) (rects[_g]) );
						#line 45 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
						 ++ _g;
						#line 45 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
						result.push(r);
					}
					
				}
				
				#line 46 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				return result;
			}
			#line default
		}
		
		
		public static   void offset(global::Array<object> rects, double x, double y){
			unchecked {
				#line 51 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				int _g = 0;
				#line 51 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				while (( _g < rects.length )){
					#line 51 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					global::nx3.geom.Rectangle r = ((global::nx3.geom.Rectangle) (rects[_g]) );
					#line 51 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					 ++ _g;
					#line 51 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					r.offset(x, y);
				}
				
			}
			#line default
		}
		
		
		public static   global::nx3.geom.Rectangle unionAll(global::Array<object> rects){
			unchecked {
				#line 56 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				if (( rects == default(global::Array<object>) )) {
					#line 56 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					return default(global::nx3.geom.Rectangle);
				}
				
				#line 57 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				if (( rects.length == 1 )) {
					#line 57 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					return ((global::nx3.geom.Rectangle) (rects[0]) ).clone();
				}
				
				#line 59 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				global::nx3.geom.Rectangle r = ((global::nx3.geom.Rectangle) (rects[0]) ).clone();
				{
					#line 60 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					int _g1 = 1;
					#line 60 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					int _g = rects.length;
					#line 60 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					while (( _g1 < _g )){
						#line 60 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
						int i = _g1++;
						#line 62 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
						r = r.union(((global::nx3.geom.Rectangle) (rects[i]) ));
					}
					
				}
				
				#line 64 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				return r;
			}
			#line default
		}
		
		
		public static   global::Array<object> concat(global::Array<object> rectsA, global::Array<object> rectsB){
			unchecked {
				#line 69 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				{
					#line 69 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					int _g = 0;
					#line 69 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					while (( _g < rectsB.length )){
						#line 69 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
						global::nx3.geom.Rectangle r = ((global::nx3.geom.Rectangle) (rectsB[_g]) );
						#line 69 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
						 ++ _g;
						#line 69 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
						rectsA.push(r);
					}
					
				}
				
				#line 70 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				return rectsA;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				return new global::nx3.geom.RectanglesTools(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				return new global::nx3.geom.RectanglesTools();
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.geom{
	public  class RectanglesTools_getXIntersection_16__Fun : global::haxe.lang.Function {
		public    RectanglesTools_getXIntersection_16__Fun(global::Array<object> rectsA1, global::Array<object> rectsB2) : base(0, 1){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				this.rectsA1 = rectsA1;
				#line 17 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				this.rectsB2 = rectsB2;
			}
			#line default
		}
		
		
		public override   double __hx_invoke0_f(){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				{
					#line 18 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					int _g1 = 0;
					#line 18 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
					while (( _g1 < ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.rectsA1[0]) ))) ).length )){
						#line 18 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
						global::nx3.geom.Rectangle ra = ((global::nx3.geom.Rectangle) (((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.rectsA1[0]) ))) )[_g1]) );
						#line 18 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
						 ++ _g1;
						#line 20 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
						{
							#line 20 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
							int _g11 = 0;
							#line 20 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
							while (( _g11 < ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.rectsB2[0]) ))) ).length )){
								#line 20 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
								global::nx3.geom.Rectangle rb = ((global::nx3.geom.Rectangle) (((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (this.rectsB2[0]) ))) )[_g11]) );
								#line 20 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
								 ++ _g11;
								#line 22 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
								global::nx3.geom.Rectangle i = ra.intersection(rb);
								#line 24 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
								{
									#line 24 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
									double number = i.width;
									#line 24 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
									number = ( number * global::System.Math.Pow(((double) (10) ), ((double) (8) )) );
									#line 24 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
									number = ( global::Math.round(number) / global::System.Math.Pow(((double) (10) ), ((double) (8) )) );
									#line 24 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
									i.width = number;
								}
								
								#line 25 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
								if (( i.width > 0 )) {
									#line 25 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
									return i.width;
								}
								
							}
							
						}
						
					}
					
				}
				
				#line 28 "F:\\nx3\\src\\nx3\\geom\\Rectangles.hx"
				return ((double) (0) );
			}
			#line default
		}
		
		
		public  global::Array<object> rectsA1;
		
		public  global::Array<object> rectsB2;
		
	}
}


