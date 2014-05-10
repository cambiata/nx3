
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VNoteHeadsRectsPausesCalculator : global::haxe.lang.HxObject {
		public    VNoteHeadsRectsPausesCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VNoteHeadsRectsPausesCalculator(global::nx3.VNote vnote){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
				global::nx3.VNoteHeadsRectsPausesCalculator.__hx_ctor_nx3_VNoteHeadsRectsPausesCalculator(this, vnote);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VNoteHeadsRectsPausesCalculator(global::nx3.VNoteHeadsRectsPausesCalculator __temp_me134, global::nx3.VNote vnote){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
				__temp_me134.vnote = vnote;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
				return new global::nx3.VNoteHeadsRectsPausesCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
				return new global::nx3.VNoteHeadsRectsPausesCalculator(((global::nx3.VNote) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.VNote vnote;
		
		public virtual   global::Array<object> getHeadsRects(){
			unchecked {
				#line 23 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
				{
					#line 23 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
					int _g = global::nx3.ENoteValTools.beaminglevel(this.vnote.nnote.@value);
					#line 23 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
					switch (_g){
						case 1:
						{
							#line 25 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
							return new global::Array<object>(new object[]{new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(-1.8, true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(3.6, true), new global::haxe.lang.Null<double>(((double) (6) ), true))});
						}
						
						
						case 2:
						{
							#line 26 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
							return new global::Array<object>(new object[]{new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (-2) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(((double) (4) ), true), new global::haxe.lang.Null<double>(((double) (6) ), true))});
						}
						
						
						default:
						{
							#line 27 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
							return new global::Array<object>(new object[]{new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(-1.6, true), new global::haxe.lang.Null<double>(-3.3, true), new global::haxe.lang.Null<double>(3.2, true), new global::haxe.lang.Null<double>(6.6, true))});
						}
						
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
				switch (hash){
					case 978488168:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
						this.vnote = ((global::nx3.VNote) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
				switch (hash){
					case 325402290:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeadsRects") ), ((int) (325402290) ))) );
					}
					
					
					case 978488168:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
						return this.vnote;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
				switch (hash){
					case 325402290:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
						return this.getHeadsRects();
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
				baseArr.push("vnote");
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
				{
					#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsPausesCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


