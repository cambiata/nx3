
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PStaveRectCalculator : global::haxe.lang.HxObject {
		public    PStaveRectCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PStaveRectCalculator(global::nx3.PNote note){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				global::nx3.PStaveRectCalculator.__hx_ctor_nx3_PStaveRectCalculator(this, note);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PStaveRectCalculator(global::nx3.PStaveRectCalculator __temp_me118, global::nx3.PNote note){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				__temp_me118.note = note;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				return new global::nx3.PStaveRectCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				return new global::nx3.PStaveRectCalculator(((global::nx3.PNote) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PNote note;
		
		public virtual   global::nx3.geom.Rectangle getStaveRect(){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				if ( ! (string.Equals(global::Type.enumConstructor(this.note.nnote.type), "Note")) ) {
					#line 22 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
					return default(global::nx3.geom.Rectangle);
				}
				
				#line 23 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				if (( global::nx3.ENoteValTools.stavinglevel(this.note.nnote.@value) < 1 )) {
					#line 23 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
					return default(global::nx3.geom.Rectangle);
				}
				
				#line 25 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				double headw = default(double);
				#line 25 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				{
					#line 25 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
					global::nx3.EHeadValueType _g = global::nx3.ENoteValTools.head(this.note.nnote.@value);
					#line 25 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
					switch (global::Type.enumIndex(_g)){
						case 2:
						{
							#line 27 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
							headw = 2.2;
							#line 27 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
							break;
						}
						
						
						default:
						{
							#line 28 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
							headw = 1.6;
							#line 28 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
							break;
						}
						
					}
					
				}
				
				#line 30 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				global::nx3.geom.Rectangle rect = default(global::nx3.geom.Rectangle);
				if (( this.note.getDirection() == global::nx3.EDirectionUD.Up )) {
					#line 33 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
					rect = new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (0) ), true), new global::haxe.lang.Null<double>(( this.note.nnote.getBottomLevel() - ((double) (7) ) ), true), new global::haxe.lang.Null<double>(headw, true), new global::haxe.lang.Null<double>(((double) (7) ), true));
				}
				 else {
					#line 37 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
					rect = new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>( - (headw) , true), new global::haxe.lang.Null<double>(((double) (this.note.nnote.getTopLevel()) ), true), new global::haxe.lang.Null<double>(headw, true), new global::haxe.lang.Null<double>(((double) (7) ), true));
				}
				
				#line 39 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				rect.offset(this.note.getXOffset(), ((double) (0) ));
				return rect;
			}
			#line default
		}
		
		
		public virtual   global::nx3.geom.Rectangle getFlagRect(){
			unchecked {
				#line 45 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				if ( ! (string.Equals(global::Type.enumConstructor(this.note.nnote.type), "Note")) ) {
					#line 45 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
					return default(global::nx3.geom.Rectangle);
				}
				
				#line 46 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				if (( global::nx3.ENoteValTools.beaminglevel(this.note.nnote.@value) < 1 )) {
					#line 46 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
					return default(global::nx3.geom.Rectangle);
				}
				
				#line 47 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				global::nx3.PBeamgroup beamgroup = this.note.getBeamgroup();
				#line 50 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				if (( ( beamgroup != default(global::nx3.PBeamgroup) ) && ( beamgroup.pnotes.length == 1 ) )) {
					#line 52 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
					if (( global::nx3.ENoteValTools.beaminglevel(this.note.nnote.@value) > 0 )) {
						#line 54 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
						double headw = default(double);
						#line 54 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
						{
							#line 54 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
							global::nx3.EHeadValueType _g = global::nx3.ENoteValTools.head(this.note.nnote.@value);
							#line 54 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
							switch (global::Type.enumIndex(_g)){
								case 2:
								{
									#line 56 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
									headw = 2.2;
									#line 56 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
									break;
								}
								
								
								default:
								{
									#line 57 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
									headw = 1.6;
									#line 57 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
									break;
								}
								
							}
							
						}
						
						#line 59 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
						global::nx3.geom.Rectangle rect = default(global::nx3.geom.Rectangle);
						if (( this.note.getDirection() == global::nx3.EDirectionUD.Up )) {
							#line 62 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
							rect = new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(headw, true), new global::haxe.lang.Null<double>(( this.note.nnote.getBottomLevel() - ((double) (7) ) ), true), new global::haxe.lang.Null<double>(2.6, true), new global::haxe.lang.Null<double>(4.8, true));
						}
						 else {
							#line 66 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
							rect = new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>( - (headw) , true), new global::haxe.lang.Null<double>(( ( this.note.nnote.getTopLevel() + ((double) (7) ) ) - 4.8 ), true), new global::haxe.lang.Null<double>(2.6, true), new global::haxe.lang.Null<double>(4.8, true));
						}
						
						#line 68 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
						rect.offset(this.note.getXOffset(), ((double) (0) ));
						return rect;
					}
					
				}
				
				#line 72 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				return default(global::nx3.geom.Rectangle);
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				switch (hash){
					case 1225398258:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
						this.note = ((global::nx3.PNote) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				switch (hash){
					case 1216318886:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getFlagRect") ), ((int) (1216318886) ))) );
					}
					
					
					case 173809949:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getStaveRect") ), ((int) (173809949) ))) );
					}
					
					
					case 1225398258:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
						return this.note;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				switch (hash){
					case 1216318886:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
						return this.getFlagRect();
					}
					
					
					case 173809949:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
						return this.getStaveRect();
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				baseArr.push("note");
				#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
				{
					#line 11 "F:\\nx3\\src\\nx3\\PStaveRectCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


