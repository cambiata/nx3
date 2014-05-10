
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VComplexSignsRectsCalculator : global::haxe.lang.HxObject {
		public    VComplexSignsRectsCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VComplexSignsRectsCalculator(global::Array<object> vsigns){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
				global::nx3.VComplexSignsRectsCalculator.__hx_ctor_nx3_VComplexSignsRectsCalculator(this, vsigns);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VComplexSignsRectsCalculator(global::nx3.VComplexSignsRectsCalculator __temp_me172, global::Array<object> vsigns){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
				__temp_me172.vsigns = vsigns;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
				return new global::nx3.VComplexSignsRectsCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
				return new global::nx3.VComplexSignsRectsCalculator(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> vsigns;
		
		public virtual   global::Array<object> getSignRects(global::Array<object> headsRects){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
				global::Array<object> rects = new global::Array<object>();
				#line 22 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
				if (( headsRects == default(global::Array<object>) )) {
					#line 22 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
					headsRects = new global::Array<object>(new object[]{});
				}
				
				#line 24 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
				{
					#line 24 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
					int _g = 0;
					#line 24 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
					global::Array<object> _g1 = this.vsigns;
					#line 24 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
					while (( _g < _g1.length )){
						#line 24 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						object vsign = _g1[_g];
						#line 24 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						 ++ _g;
						#line 26 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						global::nx3.geom.Rectangle rect = this.getSignRect(((global::nx3.ESign) (global::haxe.lang.Runtime.getField(vsign, "sign", 1280544829, true)) ));
						rect.offset( - (rect.width) , ((double) (((int) (global::haxe.lang.Runtime.getField_f(vsign, "level", 1919096196, true)) )) ));
						#line 31 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						{
							#line 31 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
							int _g2 = 0;
							#line 31 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
							while (( _g2 < headsRects.length )){
								#line 31 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
								global::nx3.geom.Rectangle hr = ((global::nx3.geom.Rectangle) (headsRects[_g2]) );
								#line 31 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
								 ++ _g2;
								#line 33 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
								global::nx3.geom.Rectangle i = rect.intersection(hr);
								int count = 0;
								while (( i.width > 0.0000001 )){
									#line 37 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
									rect.offset( - (i.width) , ((double) (0) ));
									i = rect.intersection(hr);
									if (( count > 5 )) {
										#line 39 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
										break;
									}
									
									#line 40 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
									count++;
								}
								
							}
							
						}
						
						#line 44 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						{
							#line 44 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
							int _g21 = 0;
							#line 44 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
							while (( _g21 < rects.length )){
								#line 44 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
								global::nx3.geom.Rectangle r = ((global::nx3.geom.Rectangle) (rects[_g21]) );
								#line 44 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
								 ++ _g21;
								#line 46 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
								global::nx3.geom.Rectangle i1 = r.intersection(rect);
								while (( ( i1.width > 0 ) || ( i1.height > 0 ) )){
									#line 49 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
									rect.x = ( r.x - rect.width );
									i1 = r.intersection(rect);
								}
								
							}
							
						}
						
						#line 54 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						rects.push(rect);
					}
					
				}
				
				#line 59 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
				return rects;
			}
			#line default
		}
		
		
		public virtual   global::nx3.geom.Rectangle getSignRect(global::nx3.ESign sign){
			unchecked {
				#line 64 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
				switch (global::Type.enumIndex(sign)){
					case 0:
					{
						#line 67 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						return default(global::nx3.geom.Rectangle);
					}
					
					
					case 5:
					{
						#line 69 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(-1.5, true), new global::haxe.lang.Null<double>(2.6, true), new global::haxe.lang.Null<double>(((double) (3) ), true));
					}
					
					
					case 7:case 8:case 6:
					{
						#line 71 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-2) ), true), new global::haxe.lang.Null<double>(4.4, true), new global::haxe.lang.Null<double>(((double) (4) ), true));
					}
					
					
					case 2:
					{
						#line 73 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(2.6, true), new global::haxe.lang.Null<double>(((double) (5) ), true));
					}
					
					
					default:
					{
						#line 75 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(2.6, true), new global::haxe.lang.Null<double>(((double) (6) ), true));
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
				switch (hash){
					case 719796576:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						this.vsigns = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
				switch (hash){
					case 557919927:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSignRect") ), ((int) (557919927) ))) );
					}
					
					
					case 2009575900:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSignRects") ), ((int) (2009575900) ))) );
					}
					
					
					case 719796576:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						return this.vsigns;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
				switch (hash){
					case 557919927:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						return this.getSignRect(((global::nx3.ESign) (dynargs[0]) ));
					}
					
					
					case 2009575900:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						return this.getSignRects(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
				baseArr.push("vsigns");
				#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
				{
					#line 10 "F:\\nx3\\src\\nx3\\VComplexSignsRectsCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


