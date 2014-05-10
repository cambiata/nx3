
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VComplexDotsRectsCalculator : global::haxe.lang.HxObject {
		public    VComplexDotsRectsCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VComplexDotsRectsCalculator(global::Array<object> dots){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
				global::nx3.VComplexDotsRectsCalculator.__hx_ctor_nx3_VComplexDotsRectsCalculator(this, dots);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VComplexDotsRectsCalculator(global::nx3.VComplexDotsRectsCalculator __temp_me170, global::Array<object> dots){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
				__temp_me170.dots = dots;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
				return new global::nx3.VComplexDotsRectsCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
				return new global::nx3.VComplexDotsRectsCalculator(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> dots;
		
		public virtual   global::Array<object> getDotsRects(global::Array<object> headsRects){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
				if (( ( this.dots == default(global::Array<object>) ) || ( this.dots == new global::Array<object>(new object[]{}) ) )) {
					#line 20 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
					return new global::Array<object>(new object[]{});
				}
				
				#line 21 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
				if (( headsRects == default(global::Array<object>) )) {
					#line 21 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
					headsRects = new global::Array<object>(new object[]{});
				}
				
				#line 23 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
				global::Array<object> rects = new global::Array<object>(new object[]{});
				{
					#line 24 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
					int _g = 0;
					#line 24 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
					global::Array<object> _g1 = this.dots;
					#line 24 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
					while (( _g < _g1.length )){
						#line 24 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
						global::nx3.EDot dot = ((global::nx3.EDot) (_g1[_g]) );
						#line 24 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
						 ++ _g;
						#line 26 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
						global::nx3.geom.Rectangle rect = default(global::nx3.geom.Rectangle);
						switch (global::Type.enumIndex(dot)){
							case 0:
							{
								#line 27 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
								int level = ((int) (global::haxe.lang.Runtime.toInt(dot.@params[0])) );
								#line 30 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
								rect = new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (( level - 1 )) ), true), new global::haxe.lang.Null<double>(2.0, true), new global::haxe.lang.Null<double>(((double) (2) ), true));
								#line 29 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
								break;
							}
							
							
							case 1:
							{
								#line 27 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
								int level1 = ((int) (global::haxe.lang.Runtime.toInt(dot.@params[0])) );
								#line 32 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
								rect = new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(((double) (( level1 - 1 )) ), true), new global::haxe.lang.Null<double>(3.0, true), new global::haxe.lang.Null<double>(((double) (2) ), true));
								#line 31 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
								break;
							}
							
							
						}
						
						#line 35 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
						{
							#line 35 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
							int _g2 = 0;
							#line 35 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
							while (( _g2 < headsRects.length )){
								#line 35 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
								global::nx3.geom.Rectangle hr = ((global::nx3.geom.Rectangle) (headsRects[_g2]) );
								#line 35 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
								 ++ _g2;
								#line 37 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
								global::nx3.geom.Rectangle i = rect.intersection(hr);
								if (( i.width > 0 )) {
									#line 38 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
									rect.offset(i.width, ((double) (0) ));
								}
								
							}
							
						}
						
						#line 41 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
						rects.push(rect);
					}
					
				}
				
				#line 44 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
				return rects;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
				switch (hash){
					case 1114502602:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
						this.dots = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 10 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
				switch (hash){
					case 254872879:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDotsRects") ), ((int) (254872879) ))) );
					}
					
					
					case 1114502602:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
						return this.dots;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
				switch (hash){
					case 254872879:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
						return this.getDotsRects(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
				baseArr.push("dots");
				#line 10 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
				{
					#line 10 "F:\\nx3\\src\\nx3\\VComplexDotsRectsCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


