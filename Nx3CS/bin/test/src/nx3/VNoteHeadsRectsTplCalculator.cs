
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VNoteHeadsRectsTplCalculator : global::haxe.lang.HxObject {
		public    VNoteHeadsRectsTplCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VNoteHeadsRectsTplCalculator(global::nx3.VNote vnote){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
				global::nx3.VNoteHeadsRectsTplCalculator.__hx_ctor_nx3_VNoteHeadsRectsTplCalculator(this, vnote);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VNoteHeadsRectsTplCalculator(global::nx3.VNoteHeadsRectsTplCalculator __temp_me135, global::nx3.VNote vnote){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
				__temp_me135.vnote = vnote;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
				return new global::nx3.VNoteHeadsRectsTplCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
				return new global::nx3.VNoteHeadsRectsTplCalculator(((global::nx3.VNote) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.VNote vnote;
		
		public virtual   global::Array<object> getHeadsRects(){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
				return new global::Array<object>(new object[]{new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (-6) ), true), new global::haxe.lang.Null<double>(-5.3, true), new global::haxe.lang.Null<double>(((double) (12) ), true), new global::haxe.lang.Null<double>(10.6, true))});
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
				switch (hash){
					case 978488168:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
						this.vnote = ((global::nx3.VNote) (@value) );
						#line 9 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
				switch (hash){
					case 325402290:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeadsRects") ), ((int) (325402290) ))) );
					}
					
					
					case 978488168:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
						return this.vnote;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
				switch (hash){
					case 325402290:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
						return this.getHeadsRects();
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
				baseArr.push("vnote");
				#line 9 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
				{
					#line 9 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsTplCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


