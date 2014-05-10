
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PComplexTierectsCalculator : global::haxe.lang.HxObject {
		public    PComplexTierectsCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PComplexTierectsCalculator(global::nx3.PComplex complex){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				global::nx3.PComplexTierectsCalculator.__hx_ctor_nx3_PComplexTierectsCalculator(this, complex);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PComplexTierectsCalculator(global::nx3.PComplexTierectsCalculator __temp_me99, global::nx3.PComplex complex){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				__temp_me99.complex = complex;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				return new global::nx3.PComplexTierectsCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				return new global::nx3.PComplexTierectsCalculator(((global::nx3.PComplex) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PComplex complex;
		
		public virtual   global::Array<object> getTieRects(){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				int nrofnotes = this.complex.getNotes().length;
				#line 24 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				global::nx3.PNote firstnote = default(global::nx3.PNote);
				#line 24 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				{
					#line 24 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
					global::Array<object> array = this.complex.getNotes();
					#line 24 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
					firstnote = ((global::nx3.PNote) (array[0]) );
				}
				
				#line 25 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				global::Array<object> firstties = firstnote.getTies();
				global::nx3.PNote secondnote = default(global::nx3.PNote);
				#line 26 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				if (( nrofnotes == 2 )) {
					#line 26 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
					global::Array<object> array1 = this.complex.getNotes();
					#line 26 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
					secondnote = ((global::nx3.PNote) (array1[1]) );
				}
				 else {
					#line 26 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
					secondnote = default(global::nx3.PNote);
				}
				
				#line 27 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				global::Array<object> secondties = default(global::Array<object>);
				#line 27 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				if (( nrofnotes == 2 )) {
					#line 27 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
					global::nx3.PNote __temp_stmt252 = default(global::nx3.PNote);
					#line 27 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
					{
						#line 27 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						global::Array<object> array2 = this.complex.getNotes();
						#line 27 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						__temp_stmt252 = ((global::nx3.PNote) (array2[1]) );
					}
					
					#line 27 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
					secondties = __temp_stmt252.getTies();
				}
				 else {
					#line 27 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
					secondties = new global::Array<object>(new object[]{});
				}
				
				#line 28 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				if (( ( firstties == new global::Array<object>(new object[]{}) ) && ( secondties == new global::Array<object>(new object[]{}) ) )) {
					#line 28 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
					return new global::Array<object>(new object[]{});
				}
				
				#line 30 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				global::Array<object> headrects = this.complex.getHeadsRects();
				global::Array<object> dotrects = this.complex.getDotRects();
				#line 34 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				global::Array<object> tieinfos = new global::Array<object>();
				#line 36 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				global::Array<object> rects = new global::Array<object>();
				#line 38 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				int headIdx = 0;
				int dotidx = 0;
				double adjusty = 0.0;
				double tiewidth = 3.2;
				double tieheight = 1.6;
				#line 46 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				{
					#line 46 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
					int _g = 0;
					#line 46 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
					global::Array<object> _g1 = firstnote.getHeads();
					#line 46 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
					while (( _g < _g1.length )){
						#line 46 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						global::nx3.PHead head = ((global::nx3.PHead) (_g1[_g]) );
						#line 46 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						 ++ _g;
						#line 49 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						global::nx3.geom.Rectangle headrect = ((global::nx3.geom.Rectangle) (this.complex.getHeadsRects()[headIdx]) );
						double rx = ( headrect.x + headrect.width );
						if (( global::nx3.ENoteValTools.dotlevel(firstnote.nnote.@value) > 0 )) {
							#line 53 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
							global::nx3.geom.Rectangle dotrect = ((global::nx3.geom.Rectangle) (this.complex.getDotRects()[dotidx]) );
							rx = ( dotrect.x + dotrect.width );
							dotidx++;
						}
						
						#line 58 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						if (( head.nhead.tie != default(global::nx3.ETie) )) {
							#line 60 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
							int level = head.nhead.level;
							#line 62 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
							global::nx3.EDirectionUD direction = global::nx3.EDirectionUD.Up;
							#line 64 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
							if (( firstties.length == 1 )) {
								#line 66 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
								if (( secondnote == default(global::nx3.PNote) )) {
									#line 68 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
									if (( firstnote.getDirection() == global::nx3.EDirectionUD.Up )) {
										#line 68 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
										level = ( level + 1 );
									}
									 else {
										#line 68 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
										level = ( level - 1 );
									}
									
									#line 69 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
									if (( firstnote.getDirection() == global::nx3.EDirectionUD.Up )) {
										#line 69 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
										direction = global::nx3.EDirectionUD.Down;
									}
									 else {
										#line 69 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
										direction = global::nx3.EDirectionUD.Up;
									}
									
									#line 70 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
									if (( firstnote.getDirection() == global::nx3.EDirectionUD.Up )) {
										#line 70 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
										adjusty = .8;
									}
									 else {
										#line 70 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
										adjusty = -.8;
									}
									
								}
								 else {
									#line 75 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
									if (( firstnote.getDirection() == global::nx3.EDirectionUD.Up )) {
										#line 75 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
										level = ( level - 1 );
									}
									 else {
										#line 75 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
										level = ( level - 1 );
									}
									
								}
								
								#line 77 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
								tiewidth = ((double) (3) );
							}
							 else {
								#line 81 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
								bool __temp_boolv255 = ( secondnote == default(global::nx3.PNote) );
								#line 81 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
								bool __temp_boolv254 = false;
								#line 81 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
								if (__temp_boolv255) {
									#line 81 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
									global::nx3.PHead __temp_stmt256 = default(global::nx3.PHead);
									#line 81 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
									{
										#line 81 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
										global::Array<object> array3 = firstnote.getHeads();
										#line 81 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
										__temp_stmt256 = ((global::nx3.PHead) (array3[( array3.length - 1 )]) );
									}
									
									#line 81 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
									__temp_boolv254 = ( head == __temp_stmt256 );
								}
								
								#line 81 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
								bool __temp_stmt253 = ( __temp_boolv255 && __temp_boolv254 );
								#line 81 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
								if (__temp_stmt253) {
									#line 83 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
									direction = global::nx3.EDirectionUD.Down;
									adjusty = .5;
								}
								 else {
									#line 88 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
									adjusty = -.5;
								}
								
							}
							
							#line 91 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
							global::nx3.geom.Rectangle r = new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(rx, true), new global::haxe.lang.Null<double>(( ( level - 0.8 ) + adjusty ), true), new global::haxe.lang.Null<double>(tiewidth, true), new global::haxe.lang.Null<double>(1.6, true));
							rects.push(r);
							tieinfos.push(new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{116192081, 272654911, 1158359328, 1269255460}), new global::Array<object>(new object[]{default(global::nx3.PHead), direction, head, r}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{})));
						}
						
						#line 95 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						headIdx++;
					}
					
				}
				
				#line 99 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				tiewidth = 3.2;
				if (( secondnote != default(global::nx3.PNote) )) {
					#line 102 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
					int _g2 = 0;
					#line 102 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
					global::Array<object> _g11 = secondnote.getHeads();
					#line 102 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
					while (( _g2 < _g11.length )){
						#line 102 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						global::nx3.PHead head1 = ((global::nx3.PHead) (_g11[_g2]) );
						#line 102 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						 ++ _g2;
						#line 104 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						if (( head1.nhead.tie != default(global::nx3.ETie) )) {
							#line 106 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
							int level1 = head1.nhead.level;
							#line 108 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
							global::nx3.geom.Rectangle headrect1 = ((global::nx3.geom.Rectangle) (this.complex.getHeadsRects()[headIdx]) );
							double rx1 = ( headrect1.x + headrect1.width );
							if (( global::nx3.ENoteValTools.dotlevel(secondnote.nnote.@value) > 0 )) {
								#line 112 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
								global::nx3.geom.Rectangle dotrect1 = ((global::nx3.geom.Rectangle) (this.complex.getDotRects()[dotidx]) );
								rx1 = ( dotrect1.x + dotrect1.width );
								dotidx++;
							}
							
							#line 117 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
							if (( secondties.length == 1 )) {
								#line 119 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
								level1++;
								tiewidth = ((double) (3) );
							}
							
							#line 124 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
							global::nx3.geom.Rectangle r1 = new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(rx1, true), new global::haxe.lang.Null<double>(( level1 - 0.8 ), true), new global::haxe.lang.Null<double>(tiewidth, true), new global::haxe.lang.Null<double>(1.6, true));
							rects.push(r1);
							tieinfos.push(new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{116192081, 272654911, 1158359328, 1269255460}), new global::Array<object>(new object[]{default(global::nx3.PHead), global::nx3.EDirectionUD.Down, head1, r1}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{})));
						}
						
						#line 128 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						headIdx++;
					}
					
				}
				
				#line 131 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				this.complex.setTieinfos(tieinfos);
				return rects;
			}
			#line default
		}
		
		
		public virtual   void getNoteTies(global::nx3.PNote note){
			unchecked {
				#line 136 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				switch (hash){
					case 57763376:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						this.complex = ((global::nx3.PComplex) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				switch (hash){
					case 35892459:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNoteTies") ), ((int) (35892459) ))) );
					}
					
					
					case 2064794133:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getTieRects") ), ((int) (2064794133) ))) );
					}
					
					
					case 57763376:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						return this.complex;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				switch (hash){
					case 35892459:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						this.getNoteTies(((global::nx3.PNote) (dynargs[0]) ));
						#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						break;
					}
					
					
					case 2064794133:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						return this.getTieRects();
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				baseArr.push("complex");
				#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
				{
					#line 11 "F:\\nx3\\src\\nx3\\PComplexTierectsCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


