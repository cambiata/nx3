
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PSignsRectsCalculator : global::haxe.lang.HxObject {
		public    PSignsRectsCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PSignsRectsCalculator(global::Array<object> signs){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
				global::nx3.PSignsRectsCalculator.__hx_ctor_nx3_PSignsRectsCalculator(this, signs);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PSignsRectsCalculator(global::nx3.PSignsRectsCalculator __temp_me117, global::Array<object> signs){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
				__temp_me117.signs = signs;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
				return new global::nx3.PSignsRectsCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
				return new global::nx3.PSignsRectsCalculator(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> signs;
		
		public virtual   global::Array<object> getSignRects(global::Array<object> headsRects){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
				global::Array<object> rects = new global::Array<object>();
				#line 21 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
				if (( headsRects == default(global::Array<object>) )) {
					#line 21 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
					headsRects = new global::Array<object>(new object[]{});
				}
				
				#line 23 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
				{
					#line 23 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
					int _g = 0;
					#line 23 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
					global::Array<object> _g1 = this.signs;
					#line 23 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
					while (( _g < _g1.length )){
						#line 23 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						object sign = _g1[_g];
						#line 23 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						 ++ _g;
						#line 25 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						global::nx3.geom.Rectangle rect = this.getSignRect(((global::nx3.ESign) (global::haxe.lang.Runtime.getField(sign, "sign", 1280544829, true)) ));
						rect.offset( - (rect.width) , ((double) (((int) (global::haxe.lang.Runtime.getField_f(sign, "level", 1919096196, true)) )) ));
						#line 30 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						{
							#line 30 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
							int _g2 = 0;
							#line 30 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
							while (( _g2 < headsRects.length )){
								#line 30 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
								global::nx3.geom.Rectangle hr = ((global::nx3.geom.Rectangle) (headsRects[_g2]) );
								#line 30 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
								 ++ _g2;
								#line 32 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
								global::nx3.geom.Rectangle i = rect.intersection(hr);
								int count = 0;
								while (( i.width > 0.0000001 )){
									#line 36 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
									rect.offset( - (i.width) , ((double) (0) ));
									i = rect.intersection(hr);
									if (( count > 5 )) {
										#line 38 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
										break;
									}
									
									#line 39 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
									count++;
								}
								
							}
							
						}
						
						#line 43 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						{
							#line 43 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
							int _g21 = 0;
							#line 43 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
							while (( _g21 < rects.length )){
								#line 43 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
								global::nx3.geom.Rectangle r = ((global::nx3.geom.Rectangle) (rects[_g21]) );
								#line 43 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
								 ++ _g21;
								#line 45 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
								global::nx3.geom.Rectangle i1 = r.intersection(rect);
								while (( ( i1.width > 0 ) || ( i1.height > 0 ) )){
									#line 48 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
									rect.x = ( r.x - rect.width );
									i1 = r.intersection(rect);
								}
								
							}
							
						}
						
						#line 53 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						rects.push(rect);
					}
					
				}
				
				#line 58 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
				return rects;
			}
			#line default
		}
		
		
		public virtual   global::nx3.geom.Rectangle getSignRect(global::nx3.ESign sign){
			unchecked {
				#line 63 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
				switch (global::Type.enumIndex(sign)){
					case 0:
					{
						#line 66 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						return default(global::nx3.geom.Rectangle);
					}
					
					
					case 5:
					{
						#line 68 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(-1.5, true), new global::haxe.lang.Null<double>(2.6, true), new global::haxe.lang.Null<double>(((double) (3) ), true));
					}
					
					
					case 7:case 8:case 6:
					{
						#line 70 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-2) ), true), new global::haxe.lang.Null<double>(4.4, true), new global::haxe.lang.Null<double>(((double) (4) ), true));
					}
					
					
					case 2:
					{
						#line 72 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(2.6, true), new global::haxe.lang.Null<double>(((double) (5) ), true));
					}
					
					
					default:
					{
						#line 74 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(2.6, true), new global::haxe.lang.Null<double>(((double) (6) ), true));
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
				switch (hash){
					case 2093655446:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						this.signs = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
				switch (hash){
					case 557919927:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSignRect") ), ((int) (557919927) ))) );
					}
					
					
					case 2009575900:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSignRects") ), ((int) (2009575900) ))) );
					}
					
					
					case 2093655446:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						return this.signs;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
				switch (hash){
					case 557919927:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						return this.getSignRect(((global::nx3.ESign) (dynargs[0]) ));
					}
					
					
					case 2009575900:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						return this.getSignRects(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
				baseArr.push("signs");
				#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
				{
					#line 9 "F:\\nx3\\src\\nx3\\PSignsRectsCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


