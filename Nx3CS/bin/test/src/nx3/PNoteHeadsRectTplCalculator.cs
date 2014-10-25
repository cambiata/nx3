
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PNoteHeadsRectTplCalculator : global::haxe.lang.HxObject {
		public    PNoteHeadsRectTplCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PNoteHeadsRectTplCalculator(global::nx3.PNote note){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
				global::nx3.PNoteHeadsRectTplCalculator.__hx_ctor_nx3_PNoteHeadsRectTplCalculator(this, note);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PNoteHeadsRectTplCalculator(global::nx3.PNoteHeadsRectTplCalculator __temp_me106, global::nx3.PNote note){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
				__temp_me106.note = note;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
				return new global::nx3.PNoteHeadsRectTplCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
				return new global::nx3.PNoteHeadsRectTplCalculator(((global::nx3.PNote) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PNote note;
		
		public virtual   global::Array<object> getHeadsRects(){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
				return new global::Array<object>(new object[]{new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (-6) ), true), new global::haxe.lang.Null<double>(-5.3, true), new global::haxe.lang.Null<double>(((double) (10) ), true), new global::haxe.lang.Null<double>(8.8, true))});
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
				switch (hash){
					case 1225398258:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
						this.note = ((global::nx3.PNote) (@value) );
						#line 9 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
				switch (hash){
					case 325402290:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeadsRects") ), ((int) (325402290) ))) );
					}
					
					
					case 1225398258:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
						return this.note;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
				switch (hash){
					case 325402290:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
						return this.getHeadsRects();
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
				baseArr.push("note");
				#line 9 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
				{
					#line 9 "F:\\nx3\\src\\nx3\\PNoteHeadsRectTplCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


