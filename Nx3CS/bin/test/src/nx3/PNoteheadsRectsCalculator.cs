
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PNoteheadsRectsCalculator : global::haxe.lang.HxObject {
		public    PNoteheadsRectsCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PNoteheadsRectsCalculator(global::nx3.PNote note){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
				global::nx3.PNoteheadsRectsCalculator.__hx_ctor_nx3_PNoteheadsRectsCalculator(this, note);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PNoteheadsRectsCalculator(global::nx3.PNoteheadsRectsCalculator __temp_me108, global::nx3.PNote note){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
				__temp_me108.note = note;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
				return new global::nx3.PNoteheadsRectsCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
				return new global::nx3.PNoteheadsRectsCalculator(((global::nx3.PNote) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PNote note;
		
		public  global::Array<object> heads;
		
		public  global::Array<object> placements;
		
		public virtual   global::Array<object> getHeadsRects(){
			unchecked {
				#line 26 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
				{
					#line 26 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
					global::nx3.ENoteType _g = this.note.nnote.type;
					#line 26 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
					switch (global::Type.enumIndex(_g)){
						case 0:
						{
							#line 26 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
							global::Array<object> a2 = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (_g.@params[3]) ))) );
							#line 26 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
							global::Array<global::nx3.ENoteArticulation> a = ((global::Array<global::nx3.ENoteArticulation>) (global::Array<object>.__hx_cast<global::nx3.ENoteArticulation>(((global::Array) (_g.@params[2]) ))) );
							#line 26 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
							global::nx3.ENotationVariant v = ((global::nx3.ENotationVariant) (_g.@params[1]) );
							#line 26 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
							global::Array<object> h = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (_g.@params[0]) ))) );
							#line 28 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
							return new global::nx3.PHeadsRectsCalculator(((global::nx3.PNote) (this.note) ), ((global::nx3.EDirectionUD) (default(global::nx3.EDirectionUD)) )).getHeadsRects();
						}
						
						
						case 1:
						{
							#line 26 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
							int l = ((int) (global::haxe.lang.Runtime.toInt(_g.@params[0])) );
							#line 29 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
							return new global::nx3.PNoteHeadsRectsPausesCalculator(((global::nx3.PNote) (this.note) )).getHeadsRects();
						}
						
						
						case 4:
						{
							#line 26 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
							object font = _g.@params[3];
							#line 26 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
							global::nx3.ELyricContinuation c = ((global::nx3.ELyricContinuation) (_g.@params[2]) );
							#line 26 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
							global::nx3.EPosition o = ((global::nx3.EPosition) (_g.@params[1]) );
							#line 26 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
							string text = global::haxe.lang.Runtime.toString(_g.@params[0]);
							#line 30 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
							return new global::nx3.PNoteHeadsRectsLyricsCalculator(((global::nx3.PNote) (this.note) ), ((string) (text) ), ((object) (font) )).getHeadsRects();
						}
						
						
						case 3:
						{
							#line 26 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
							int l1 = ((int) (global::haxe.lang.Runtime.toInt(_g.@params[0])) );
							#line 31 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
							return new global::nx3.PNoteHeadsRectTplCalculator(((global::nx3.PNote) (this.note) )).getHeadsRects();
						}
						
						
						default:
						{
							#line 33 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
							throw global::haxe.lang.HaxeException.wrap(global::haxe.lang.Runtime.concat("Non implemented ENoteType: ", global::Type.enumConstructor(this.note.nnote.type)));
						}
						
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
				switch (hash){
					case 1193672430:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
						this.placements = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
						return @value;
					}
					
					
					case 616092499:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
						this.heads = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
						return @value;
					}
					
					
					case 1225398258:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
						this.note = ((global::nx3.PNote) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
				switch (hash){
					case 325402290:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeadsRects") ), ((int) (325402290) ))) );
					}
					
					
					case 1193672430:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
						return this.placements;
					}
					
					
					case 616092499:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
						return this.heads;
					}
					
					
					case 1225398258:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
						return this.note;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
				switch (hash){
					case 325402290:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
						return this.getHeadsRects();
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
				baseArr.push("placements");
				#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
				baseArr.push("heads");
				#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
				baseArr.push("note");
				#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
				{
					#line 11 "F:\\nx3\\src\\nx3\\PNoteheadsRectsCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


