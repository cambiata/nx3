
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PNoteHeadsRectsPausesCalculator : global::haxe.lang.HxObject {
		public    PNoteHeadsRectsPausesCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PNoteHeadsRectsPausesCalculator(global::nx3.PNote vnote){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
				global::nx3.PNoteHeadsRectsPausesCalculator.__hx_ctor_nx3_PNoteHeadsRectsPausesCalculator(this, vnote);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PNoteHeadsRectsPausesCalculator(global::nx3.PNoteHeadsRectsPausesCalculator __temp_me108, global::nx3.PNote vnote){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
				__temp_me108.vnote = vnote;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
				return new global::nx3.PNoteHeadsRectsPausesCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
				return new global::nx3.PNoteHeadsRectsPausesCalculator(((global::nx3.PNote) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PNote vnote;
		
		public virtual   global::Array<object> getHeadsRects(){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
				global::Array<object> rects = default(global::Array<object>);
				#line 22 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
				{
					#line 22 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
					int _g = global::nx3.ENoteValTools.beaminglevel(this.vnote.nnote.@value);
					#line 22 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
					switch (_g){
						case 1:
						{
							#line 24 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
							rects = new global::Array<object>(new object[]{new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(-1.8, true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(3.6, true), new global::haxe.lang.Null<double>(((double) (6) ), true))});
							#line 24 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
							break;
						}
						
						
						case 2:
						{
							#line 25 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
							rects = new global::Array<object>(new object[]{new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (-2) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(((double) (4) ), true), new global::haxe.lang.Null<double>(((double) (6) ), true))});
							#line 25 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
							break;
						}
						
						
						default:
						{
							#line 26 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
							rects = new global::Array<object>(new object[]{new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(-1.6, true), new global::haxe.lang.Null<double>(-3.3, true), new global::haxe.lang.Null<double>(3.2, true), new global::haxe.lang.Null<double>(6.6, true))});
							#line 26 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
							break;
						}
						
					}
					
				}
				
				#line 29 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
				int level = 0;
				{
					#line 30 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
					global::nx3.ENoteType _g1 = this.vnote.nnote.type;
					#line 30 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
					switch (global::Type.enumIndex(_g1)){
						case 1:
						{
							#line 30 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
							int l = ((int) (global::haxe.lang.Runtime.toInt(_g1.@params[0])) );
							#line 32 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
							level = l;
							#line 32 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
							break;
						}
						
						
						default:
						{
							#line 30 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
							{
							}
							
							#line 30 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
							break;
						}
						
					}
					
				}
				
				#line 36 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
				((global::nx3.geom.Rectangle) (rects[0]) ).offset(((double) (0) ), ((double) (level) ));
				#line 38 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
				return rects;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
				switch (hash){
					case 978488168:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
						this.vnote = ((global::nx3.PNote) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
				switch (hash){
					case 325402290:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeadsRects") ), ((int) (325402290) ))) );
					}
					
					
					case 978488168:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
						return this.vnote;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
				switch (hash){
					case 325402290:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
						return this.getHeadsRects();
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
				baseArr.push("vnote");
				#line 10 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
				{
					#line 10 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsPausesCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


