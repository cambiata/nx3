
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PBaseRectCalculator : global::haxe.lang.HxObject {
		static PBaseRectCalculator() {
			#line 16 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
			global::nx3.PBaseRectCalculator.BASERECT_HEIGHT = ((double) (3) );
			global::nx3.PBaseRectCalculator.BASERECT_HEIGHT_X_2 = ( ((double) (3) ) * 2 );
			global::nx3.PBaseRectCalculator.BASERECT_MARGIN = 0.6;
			global::nx3.PBaseRectCalculator.BASERECT_MARGIN_X_2 = 1.2;
		}
		public    PBaseRectCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PBaseRectCalculator(global::nx3.PNote note){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
				global::nx3.PBaseRectCalculator.__hx_ctor_nx3_PBaseRectCalculator(this, note);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PBaseRectCalculator(global::nx3.PBaseRectCalculator __temp_me86, global::nx3.PNote note){
			unchecked {
				#line 23 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
				__temp_me86.note = note;
			}
			#line default
		}
		
		
		public static  double BASERECT_HEIGHT;
		
		public static  double BASERECT_HEIGHT_X_2;
		
		public static  double BASERECT_MARGIN;
		
		public static  double BASERECT_MARGIN_X_2;
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
				return new global::nx3.PBaseRectCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
				return new global::nx3.PBaseRectCalculator(((global::nx3.PNote) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PNote note;
		
		public virtual   global::nx3.geom.Rectangle getBaseRect(){
			unchecked {
				#line 29 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
				{
					#line 29 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
					global::nx3.ENoteType _g = this.note.nnote.type;
					#line 29 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
					switch (global::Type.enumIndex(_g)){
						case 0:
						{
							#line 29 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
							global::Array<object> atr = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (_g.@params[3]) ))) );
							#line 29 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
							global::Array<global::nx3.ENoteArticulation> a = ((global::Array<global::nx3.ENoteArticulation>) (global::Array<object>.__hx_cast<global::nx3.ENoteArticulation>(((global::Array) (_g.@params[2]) ))) );
							#line 29 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
							global::nx3.ENotationVariant v = ((global::nx3.ENotationVariant) (_g.@params[1]) );
							#line 29 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
							global::Array<object> h = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (_g.@params[0]) ))) );
							#line 32 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
							{
								#line 32 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
								global::nx3.EHeadValueType _g1 = global::nx3.ENoteValTools.head(this.note.nnote.@value);
								#line 32 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
								switch (global::Type.enumIndex(_g1)){
									case 2:
									{
										#line 34 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
										return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(-2.8000000000000003, true), new global::haxe.lang.Null<double>( - (((double) (3) )) , true), new global::haxe.lang.Null<double>(5.6000000000000005, true), new global::haxe.lang.Null<double>(( ((double) (3) ) * 2 ), true));
									}
									
									
									default:
									{
										#line 35 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
										return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(-2.2, true), new global::haxe.lang.Null<double>( - (((double) (3) )) , true), new global::haxe.lang.Null<double>(4.4, true), new global::haxe.lang.Null<double>(( ((double) (3) ) * 2 ), true));
									}
									
								}
								
							}
							
						}
						
						
						case 4:
						{
							#line 29 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
							object f = _g.@params[3];
							#line 29 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
							global::nx3.ELyricContinuation c = ((global::nx3.ELyricContinuation) (_g.@params[2]) );
							#line 29 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
							global::nx3.EPosition o = ((global::nx3.EPosition) (_g.@params[1]) );
							#line 29 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
							string text = global::haxe.lang.Runtime.toString(_g.@params[0]);
							#line 38 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
							global::nx3.geom.Rectangle __temp_stmt237 = default(global::nx3.geom.Rectangle);
							#line 38 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
							{
								#line 38 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
								global::Array<object> array = this.note.getHeadsRects();
								#line 38 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
								__temp_stmt237 = ((global::nx3.geom.Rectangle) (array[0]) );
							}
							
							#line 38 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
							return __temp_stmt237.clone();
						}
						
						
						default:
						{
							#line 40 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
							return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (-4) ), true), new global::haxe.lang.Null<double>( - (((double) (3) )) , true), new global::haxe.lang.Null<double>(((double) (8) ), true), new global::haxe.lang.Null<double>(( ((double) (3) ) * 2 ), true));
						}
						
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
				switch (hash){
					case 1225398258:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
						this.note = ((global::nx3.PNote) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
				switch (hash){
					case 636027019:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBaseRect") ), ((int) (636027019) ))) );
					}
					
					
					case 1225398258:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
						return this.note;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
				switch (hash){
					case 636027019:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
						return this.getBaseRect();
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
				baseArr.push("note");
				#line 12 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
				{
					#line 12 "F:\\nx3\\src\\nx3\\PBaseRectCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


