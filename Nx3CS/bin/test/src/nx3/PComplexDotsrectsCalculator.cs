
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PComplexDotsrectsCalculator : global::haxe.lang.HxObject {
		public    PComplexDotsrectsCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PComplexDotsrectsCalculator(global::nx3.PComplex complex){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				global::nx3.PComplexDotsrectsCalculator.__hx_ctor_nx3_PComplexDotsrectsCalculator(this, complex);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PComplexDotsrectsCalculator(global::nx3.PComplexDotsrectsCalculator __temp_me99, global::nx3.PComplex complex){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				__temp_me99.complex = complex;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				return new global::nx3.PComplexDotsrectsCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				return new global::nx3.PComplexDotsrectsCalculator(((global::nx3.PComplex) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PComplex complex;
		
		public virtual   global::Array<object> getDotRects(){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				int nrofnotes = this.complex.getNotes().length;
				global::nx3.PNote firstnote = default(global::nx3.PNote);
				#line 23 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				{
					#line 23 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
					global::Array<object> array = this.complex.getNotes();
					#line 23 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
					firstnote = ((global::nx3.PNote) (array[0]) );
				}
				
				#line 24 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				global::Array<object> rects = this.getRectsForNote(firstnote, new global::haxe.lang.Null<bool>(false, true));
				#line 26 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				if (( nrofnotes == 2 )) {
					#line 28 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
					global::nx3.PNote secondnote = default(global::nx3.PNote);
					#line 28 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
					{
						#line 28 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						global::Array<object> array1 = this.complex.getNotes();
						#line 28 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						secondnote = ((global::nx3.PNote) (array1[1]) );
					}
					
					#line 29 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
					global::Array<object> secondrects = this.getRectsForNote(secondnote, new global::haxe.lang.Null<bool>(true, true));
					rects = global::nx3.geom.RectanglesTools.concat(rects, secondrects);
				}
				
				#line 32 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				return rects;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> getRectsForNote(global::nx3.PNote note, global::haxe.lang.Null<bool> down){
			unchecked {
				#line 36 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				bool __temp_down98 = ( ( ! (down.hasValue) ) ? (global::haxe.lang.Runtime.toBool(false)) : (down.@value) );
				if (( global::nx3.ENoteValTools.dotlevel(note.nnote.@value) == 0 )) {
					#line 37 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
					return new global::Array<object>(new object[]{});
				}
				
				#line 38 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				global::Array<object> rects = new global::Array<object>(new object[]{});
				double dotwidth = default(double);
				#line 39 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				if (( global::nx3.ENoteValTools.dotlevel(note.nnote.@value) == 1 )) {
					#line 39 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
					dotwidth = 2.0;
				}
				 else {
					#line 39 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
					dotwidth = 3.0;
				}
				
				#line 40 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				global::nx3.geom.Rectangle headrect = global::nx3.geom.RectanglesTools.unionAll(note.getHeadsRects());
				double rectX = ( headrect.x + headrect.width );
				#line 43 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				global::haxe.ds.IntMap<bool> dotlevels = new global::haxe.ds.IntMap<bool>();
				{
					#line 44 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
					int _g = 0;
					#line 44 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
					global::Array<object> _g1 = note.nnote.get_nheads();
					#line 44 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
					while (( _g < _g1.length )){
						#line 44 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						global::nx3.NHead head = ((global::nx3.NHead) (_g1[_g]) );
						#line 44 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						 ++ _g;
						#line 46 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						int level = head.level;
						int adj = default(int);
						#line 47 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						{
							#line 47 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
							double x = global::System.Math.Abs(((double) (( (( level - 1 )) % 2 )) ));
							#line 47 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
							adj = ((int) (x) );
						}
						
						#line 48 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						int dotlevel = default(int);
						#line 48 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						if (__temp_down98) {
							#line 48 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
							dotlevel = ( level + adj );
						}
						 else {
							#line 48 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
							dotlevel = ( level - adj );
						}
						
						#line 49 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						dotlevels.@set(dotlevel, true);
					}
					
				}
				
				#line 51 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				global::Array<int> dotkeys = global::cx.ArrayTools.fromHashKeys<int>(dotlevels.keys());
				{
					#line 52 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
					int _g2 = 0;
					#line 52 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
					while (( _g2 < dotkeys.length )){
						#line 52 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						int level1 = dotkeys[_g2];
						#line 52 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						 ++ _g2;
						#line 54 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						rects.push(new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(rectX, true), new global::haxe.lang.Null<double>(( level1 - 0.5 ), true), new global::haxe.lang.Null<double>(dotwidth, true), new global::haxe.lang.Null<double>(((double) (1) ), true)));
					}
					
				}
				
				#line 56 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				return rects;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				switch (hash){
					case 57763376:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						this.complex = ((global::nx3.PComplex) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				switch (hash){
					case 2110756418:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getRectsForNote") ), ((int) (2110756418) ))) );
					}
					
					
					case 1623609916:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDotRects") ), ((int) (1623609916) ))) );
					}
					
					
					case 57763376:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						return this.complex;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				switch (hash){
					case 2110756418:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						return this.getRectsForNote(((global::nx3.PNote) (dynargs[0]) ), global::haxe.lang.Null<object>.ofDynamic<bool>(dynargs[1]));
					}
					
					
					case 1623609916:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						return this.getDotRects();
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				baseArr.push("complex");
				#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
				{
					#line 11 "F:\\nx3\\src\\nx3\\PComplexDotsrectsCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


