
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PNoteHeadsRectsLyricsCalculator : global::haxe.lang.HxObject {
		public    PNoteHeadsRectsLyricsCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PNoteHeadsRectsLyricsCalculator(global::nx3.PNote note, string text, object font){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
				global::nx3.PNoteHeadsRectsLyricsCalculator.__hx_ctor_nx3_PNoteHeadsRectsLyricsCalculator(this, note, text, font);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PNoteHeadsRectsLyricsCalculator(global::nx3.PNoteHeadsRectsLyricsCalculator __temp_me107, global::nx3.PNote note, string text, object font){
			unchecked {
				#line 27 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
				__temp_me107.note = note;
				__temp_me107.text = text;
				__temp_me107.font = font;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
				return new global::nx3.PNoteHeadsRectsLyricsCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
				return new global::nx3.PNoteHeadsRectsLyricsCalculator(((global::nx3.PNote) (arr[0]) ), global::haxe.lang.Runtime.toString(arr[1]), ((object) (arr[2]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PNote note;
		
		public  string text;
		
		public  object font;
		
		public virtual   global::Array<object> getHeadsRects(){
			unchecked {
				#line 47 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
				global::haxe.Log.trace.__hx_invoke2_o(default(double), "non possible!", default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"getHeadsRects", "nx3.PNoteHeadsRectsLyricsCalculator", "PNoteHeadsRectsLyricsCalculator.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (47) )})));
				#line 51 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
				return default(global::Array<object>);
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
				switch (hash){
					case 1136680399:
					{
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						this.font = ((object) (@value) );
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
				switch (hash){
					case 1136680399:
					{
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						this.font = ((object) (@value) );
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						return @value;
					}
					
					
					case 1291439277:
					{
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						this.text = global::haxe.lang.Runtime.toString(@value);
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						return @value;
					}
					
					
					case 1225398258:
					{
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						this.note = ((global::nx3.PNote) (@value) );
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
				switch (hash){
					case 325402290:
					{
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeadsRects") ), ((int) (325402290) ))) );
					}
					
					
					case 1136680399:
					{
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						return this.font;
					}
					
					
					case 1291439277:
					{
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						return this.text;
					}
					
					
					case 1225398258:
					{
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						return this.note;
					}
					
					
					default:
					{
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
				switch (hash){
					case 1136680399:
					{
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						return ((double) (global::haxe.lang.Runtime.toDouble(this.font)) );
					}
					
					
					default:
					{
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
				switch (hash){
					case 325402290:
					{
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						return this.getHeadsRects();
					}
					
					
					default:
					{
						#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
				baseArr.push("font");
				#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
				baseArr.push("text");
				#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
				baseArr.push("note");
				#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
				{
					#line 19 "F:\\nx3\\src\\nx3\\PNoteHeadsRectsLyricsCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


