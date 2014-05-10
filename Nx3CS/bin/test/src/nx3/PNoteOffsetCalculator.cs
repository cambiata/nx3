
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PNoteOffsetCalculator : global::haxe.lang.HxObject {
		public    PNoteOffsetCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PNoteOffsetCalculator(global::nx3.PComplex complex){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				global::nx3.PNoteOffsetCalculator.__hx_ctor_nx3_PNoteOffsetCalculator(this, complex);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PNoteOffsetCalculator(global::nx3.PNoteOffsetCalculator __temp_me107, global::nx3.PComplex complex){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				__temp_me107.complex = complex;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				return new global::nx3.PNoteOffsetCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				return new global::nx3.PNoteOffsetCalculator(((global::nx3.PComplex) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PComplex complex;
		
		public virtual   double getNoteOffset(global::nx3.PNote note){
			unchecked {
				#line 21 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				global::nx3.PNote __temp_stmt257 = default(global::nx3.PNote);
				#line 21 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				{
					#line 21 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
					global::Array<object> array = this.complex.getNotes();
					#line 21 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
					__temp_stmt257 = ((global::nx3.PNote) (array[0]) );
				}
				
				#line 21 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				if (( note == __temp_stmt257 )) {
					#line 21 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
					return ((double) (0) );
				}
				
				#line 23 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				global::Array<object> firstrects = ((global::nx3.PNote) (this.complex.notes[0]) ).getHeadsRects();
				global::Array<object> secondrects = ((global::nx3.PNote) (this.complex.notes[1]) ).getHeadsRects().copy();
				double secondoffset = global::nx3.geom.RectanglesTools.getXIntersection(firstrects, secondrects);
				#line 27 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				global::nx3.PNote firstnote = default(global::nx3.PNote);
				#line 27 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				{
					#line 27 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
					global::Array<object> array1 = this.complex.getNotes();
					#line 27 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
					firstnote = ((global::nx3.PNote) (array1[0]) );
				}
				
				#line 29 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				int diff = ( note.nnote.getTopLevel() - firstnote.nnote.getBottomLevel() );
				#line 31 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				if (( diff == 1 )) {
					#line 33 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
					secondoffset = ( secondoffset * 0.8 );
				}
				
				#line 36 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				if (( diff < 1 )) {
					#line 38 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
					if (( global::nx3.ENoteValTools.dotlevel(firstnote.nnote.@value) > 0 )) {
						#line 40 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
						if (( global::nx3.ENoteValTools.dotlevel(firstnote.nnote.@value) == 1 )) {
							#line 40 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
							secondoffset += 2.0;
						}
						 else {
							#line 40 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
							secondoffset += 3.0;
						}
						
					}
					
				}
				
				#line 44 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				return secondoffset;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				switch (hash){
					case 57763376:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
						this.complex = ((global::nx3.PComplex) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				switch (hash){
					case 1522925915:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNoteOffset") ), ((int) (1522925915) ))) );
					}
					
					
					case 57763376:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
						return this.complex;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				switch (hash){
					case 1522925915:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
						return this.getNoteOffset(((global::nx3.PNote) (dynargs[0]) ));
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				baseArr.push("complex");
				#line 10 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
				{
					#line 10 "F:\\nx3\\src\\nx3\\PNoteOffsetCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


