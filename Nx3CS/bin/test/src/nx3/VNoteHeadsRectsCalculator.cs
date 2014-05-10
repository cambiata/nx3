
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VNoteHeadsRectsCalculator : global::haxe.lang.HxObject {
		public    VNoteHeadsRectsCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VNoteHeadsRectsCalculator(global::nx3.VNote vnote, global::Array<object> placements){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
				global::nx3.VNoteHeadsRectsCalculator.__hx_ctor_nx3_VNoteHeadsRectsCalculator(this, vnote, placements);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VNoteHeadsRectsCalculator(global::nx3.VNoteHeadsRectsCalculator __temp_me132, global::nx3.VNote vnote, global::Array<object> placements){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
				__temp_me132.vnote = vnote;
				__temp_me132.heads = vnote.getVHeads();
				if (( placements != default(global::Array<object>) )) {
					#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
					__temp_me132.placements = placements;
				}
				 else {
					#line 21 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
					__temp_me132.placements = vnote.getVHeadsPlacements();
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
				return new global::nx3.VNoteHeadsRectsCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
				return new global::nx3.VNoteHeadsRectsCalculator(((global::nx3.VNote) (arr[0]) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[1]) ))) ));
			}
			#line default
		}
		
		
		public  global::nx3.VNote vnote;
		
		public  global::Array<object> placements;
		
		public  global::Array<object> heads;
		
		public virtual   global::Array<object> getHeadsRects(){
			unchecked {
				#line 26 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
				{
					#line 26 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
					global::nx3.ENoteType _g = this.vnote.nnote.type;
					#line 26 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
					switch (global::Type.enumIndex(_g)){
						case 0:
						{
							#line 26 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
							global::Array<object> a2 = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (_g.@params[3]) ))) );
							#line 26 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
							global::Array<global::nx3.ENoteArticulation> a = ((global::Array<global::nx3.ENoteArticulation>) (global::Array<object>.__hx_cast<global::nx3.ENoteArticulation>(((global::Array) (_g.@params[2]) ))) );
							#line 26 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
							global::nx3.ENotationVariant v = ((global::nx3.ENotationVariant) (_g.@params[1]) );
							#line 26 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
							global::Array<object> h = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (_g.@params[0]) ))) );
							#line 28 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
							return new global::nx3.VHeadsRectsCalculator(((global::Array<object>) (this.heads) ), ((global::Array<object>) (this.placements) ), ((global::nx3.ENoteVal) (this.vnote.nnote.@value) )).getHeadsRects();
						}
						
						
						case 1:
						{
							#line 26 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
							int l = ((int) (global::haxe.lang.Runtime.toInt(_g.@params[0])) );
							#line 29 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
							return new global::nx3.VNoteHeadsRectsPausesCalculator(((global::nx3.VNote) (this.vnote) )).getHeadsRects();
						}
						
						
						case 4:
						{
							#line 26 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
							object font = _g.@params[3];
							#line 26 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
							global::nx3.ELyricContinuation c = ((global::nx3.ELyricContinuation) (_g.@params[2]) );
							#line 26 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
							global::nx3.EPosition o = ((global::nx3.EPosition) (_g.@params[1]) );
							#line 26 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
							string text = global::haxe.lang.Runtime.toString(_g.@params[0]);
							#line 30 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
							return new global::nx3.VNoteHeadsRectsLyricsCalculator(((global::nx3.VNote) (this.vnote) ), ((string) (text) ), ((object) (font) )).getHeadsRects();
						}
						
						
						case 3:
						{
							#line 31 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
							return new global::nx3.VNoteHeadsRectsTplCalculator(((global::nx3.VNote) (this.vnote) )).getHeadsRects();
						}
						
						
						default:
						{
							#line 33 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
							throw global::haxe.lang.HaxeException.wrap(global::haxe.lang.Runtime.concat("Non implemented ENoteType: ", global::Type.enumConstructor(this.vnote.nnote.type)));
						}
						
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
				switch (hash){
					case 616092499:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
						this.heads = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
						return @value;
					}
					
					
					case 1193672430:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
						this.placements = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
						return @value;
					}
					
					
					case 978488168:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
						this.vnote = ((global::nx3.VNote) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
				switch (hash){
					case 325402290:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeadsRects") ), ((int) (325402290) ))) );
					}
					
					
					case 616092499:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
						return this.heads;
					}
					
					
					case 1193672430:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
						return this.placements;
					}
					
					
					case 978488168:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
						return this.vnote;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
				switch (hash){
					case 325402290:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
						return this.getHeadsRects();
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
				baseArr.push("heads");
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
				baseArr.push("placements");
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
				baseArr.push("vnote");
				#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
				{
					#line 11 "F:\\nx3\\src\\nx3\\VNoteHeadsRectsCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


