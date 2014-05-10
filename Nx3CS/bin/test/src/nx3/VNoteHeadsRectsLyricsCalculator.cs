
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VNoteHeadsRectsLyricsCalculator : global::haxe.lang.HxObject {
		public    VNoteHeadsRectsLyricsCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VNoteHeadsRectsLyricsCalculator(global::nx3.VNote vnote, string text, object font){
			unchecked {
				#line 27 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
				global::nx3.VNoteHeadsRectsLyricsCalculator.__hx_ctor_nx3_VNoteHeadsRectsLyricsCalculator(this, vnote, text, font);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VNoteHeadsRectsLyricsCalculator(global::nx3.VNoteHeadsRectsLyricsCalculator __temp_me133, global::nx3.VNote vnote, string text, object font){
			unchecked {
				#line 29 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
				__temp_me133.vnote = vnote;
				__temp_me133.text = text;
				__temp_me133.font = font;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
				return new global::nx3.VNoteHeadsRectsLyricsCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
				return new global::nx3.VNoteHeadsRectsLyricsCalculator(((global::nx3.VNote) (arr[0]) ), global::haxe.lang.Runtime.toString(arr[1]), ((object) (arr[2]) ));
			}
			#line default
		}
		
		
		public  global::nx3.VNote vnote;
		
		public  string text;
		
		public  object font;
		
		public virtual   global::Array<object> getHeadsRects(){
			unchecked {
				#line 49 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
				global::haxe.Log.trace.__hx_invoke2_o(default(double), "non possible!", default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"getHeadsRects", "nx3.VNoteHeadsRectsLyricsCalculator", "VNoteHeadsRectsLyricsCalculator.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (49) )})));
				#line 53 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
				return default(global::Array<object>);
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
				switch (hash){
					case 1136680399:
					{
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						this.font = ((object) (@value) );
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
				switch (hash){
					case 1136680399:
					{
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						this.font = ((object) (@value) );
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						return @value;
					}
					
					
					case 1291439277:
					{
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						this.text = global::haxe.lang.Runtime.toString(@value);
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						return @value;
					}
					
					
					case 978488168:
					{
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						this.vnote = ((global::nx3.VNote) (@value) );
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
				switch (hash){
					case 325402290:
					{
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeadsRects") ), ((int) (325402290) ))) );
					}
					
					
					case 1136680399:
					{
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						return this.font;
					}
					
					
					case 1291439277:
					{
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						return this.text;
					}
					
					
					case 978488168:
					{
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						return this.vnote;
					}
					
					
					default:
					{
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
				switch (hash){
					case 1136680399:
					{
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						return ((double) (global::haxe.lang.Runtime.toDouble(this.font)) );
					}
					
					
					default:
					{
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
				switch (hash){
					case 325402290:
					{
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						return this.getHeadsRects();
					}
					
					
					default:
					{
						#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
				baseArr.push("font");
				#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
				baseArr.push("text");
				#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
				baseArr.push("vnote");
				#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
				{
					#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsLyricsCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


