
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PHeadsRectsCalculator : global::haxe.lang.HxObject {
		public    PHeadsRectsCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PHeadsRectsCalculator(global::nx3.PNote note, global::nx3.EDirectionUD direction){
			unchecked {
				#line 23 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				global::nx3.PHeadsRectsCalculator.__hx_ctor_nx3_PHeadsRectsCalculator(this, note, direction);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PHeadsRectsCalculator(global::nx3.PHeadsRectsCalculator __temp_me102, global::nx3.PNote note, global::nx3.EDirectionUD direction){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				if (( direction != default(global::nx3.EDirectionUD) )) {
					#line 25 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
					__temp_me102.direction = direction;
				}
				 else {
					#line 25 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
					__temp_me102.direction = note.getDirection();
				}
				
				#line 26 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				__temp_me102.vheads = note.getHeads();
				__temp_me102.placements = new global::nx3.PHeadPlacementsCalculator(((global::Array<object>) (__temp_me102.vheads) ), ((global::nx3.EDirectionUD) (__temp_me102.direction) )).getHeadsPlacements();
				__temp_me102.notevalue = note.nnote.@value;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				return new global::nx3.PHeadsRectsCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				return new global::nx3.PHeadsRectsCalculator(((global::nx3.PNote) (arr[0]) ), ((global::nx3.EDirectionUD) (arr[1]) ));
			}
			#line default
		}
		
		
		public  global::Array<object> vheads;
		
		public  global::Array<object> placements;
		
		public  global::nx3.ENoteVal notevalue;
		
		public  global::nx3.ENoteType notetype;
		
		public  global::nx3.EDirectionUD direction;
		
		public virtual   global::Array<object> getHeadsRects(){
			unchecked {
				#line 33 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				global::Array<object> rects = new global::Array<object>();
				#line 37 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				int i = 0;
				{
					#line 38 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
					int _g = 0;
					#line 38 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
					global::Array<object> _g1 = this.placements;
					#line 38 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
					while (( _g < _g1.length )){
						#line 38 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						object placement = _g1[_g];
						#line 38 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						 ++ _g;
						#line 40 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						global::nx3.EHeadType headtype = ((global::nx3.PHead) (this.vheads[i]) ).nhead.type;
						#line 42 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						global::nx3.geom.Rectangle rect = default(global::nx3.geom.Rectangle);
						double headw = ((double) (0) );
						#line 45 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						this.headRect(headtype, this.notevalue);
						#line 48 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						{
							#line 48 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
							global::nx3.EHeadValueType _g2 = global::nx3.ENoteValTools.head(this.notevalue);
							#line 48 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
							switch (global::Type.enumIndex(_g2)){
								case 2:
								{
									#line 51 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
									headw = 2.2;
									#line 51 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
									break;
								}
								
								
								default:
								{
									#line 53 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
									headw = 1.6;
									#line 53 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
									break;
								}
								
							}
							
						}
						
						#line 56 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						global::nx3.geom.Rectangle rect1 = new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>( - (headw) , true), new global::haxe.lang.Null<double>(((double) (-1) ), true), new global::haxe.lang.Null<double>(( 2 * headw ), true), new global::haxe.lang.Null<double>(((double) (2) ), true));
						#line 58 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						double pos = 0.0;
						{
							#line 59 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
							global::nx3.EHeadPosition _g21 = ((global::nx3.EHeadPosition) (global::haxe.lang.Runtime.getField(placement, "pos", 5594516, true)) );
							#line 59 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
							switch (global::Type.enumIndex(_g21)){
								case 0:
								{
									#line 61 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
									pos = ( -2 * headw );
									#line 61 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
									break;
								}
								
								
								case 2:
								{
									#line 62 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
									pos = ( 2 * headw );
									#line 62 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
									break;
								}
								
								
								default:
								{
									#line 63 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
									pos = ((double) (0) );
									#line 63 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
									break;
								}
								
							}
							
						}
						
						#line 65 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						rect1.offset(pos, ((double) (((int) (global::haxe.lang.Runtime.getField_f(placement, "level", 1919096196, true)) )) ));
						rects.push(rect1);
						i++;
					}
					
				}
				
				#line 70 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				return rects;
			}
			#line default
		}
		
		
		public virtual   global::nx3.geom.Rectangle headRect(global::nx3.EHeadType type, global::nx3.ENoteVal notevalue){
			unchecked {
				#line 75 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				int headw = 2;
				int headh = 2;
				switch (global::Type.enumIndex(type)){
					case 0:
					{
						#line 80 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						global::nx3.EHeadValueType _g = global::nx3.ENoteValTools.head(this.notevalue);
						#line 80 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						switch (global::Type.enumIndex(_g)){
							case 2:
							{
								#line 83 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
								return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(-2.2, true), new global::haxe.lang.Null<double>(((double) (-1) ), true), new global::haxe.lang.Null<double>(4.4, true), new global::haxe.lang.Null<double>(((double) (2) ), true));
							}
							
							
							default:
							{
								#line 85 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
								return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(-1.6, true), new global::haxe.lang.Null<double>(((double) (-1) ), true), new global::haxe.lang.Null<double>(3.2, true), new global::haxe.lang.Null<double>(((double) (2) ), true));
							}
							
						}
						
					}
					
					
					case 3:
					{
						#line 88 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						int _g1 = global::nx3.ENoteValTools.beaminglevel(this.notevalue);
						#line 88 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						switch (_g1){
							case 1:
							{
								#line 90 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
								return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(-1.8, true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(3.6, true), new global::haxe.lang.Null<double>(((double) (6) ), true));
							}
							
							
							case 2:
							{
								#line 91 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
								return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (-2) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(((double) (4) ), true), new global::haxe.lang.Null<double>(((double) (6) ), true));
							}
							
							
							default:
							{
								#line 92 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
								return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(-1.6, true), new global::haxe.lang.Null<double>(-3.3, true), new global::haxe.lang.Null<double>(3.2, true), new global::haxe.lang.Null<double>(6.6, true));
							}
							
						}
						
					}
					
					
					default:
					{
						#line 95 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (-2) ), true), new global::haxe.lang.Null<double>(((double) (-2) ), true), new global::haxe.lang.Null<double>(((double) (4) ), true), new global::haxe.lang.Null<double>(((double) (4) ), true));
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				switch (hash){
					case 272654911:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						this.direction = ((global::nx3.EDirectionUD) (@value) );
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return @value;
					}
					
					
					case 1902308268:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						this.notetype = ((global::nx3.ENoteType) (@value) );
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return @value;
					}
					
					
					case 1545099839:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						this.notevalue = ((global::nx3.ENoteVal) (@value) );
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return @value;
					}
					
					
					case 1193672430:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						this.placements = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return @value;
					}
					
					
					case 1389717277:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						this.vheads = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				switch (hash){
					case 933671524:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("headRect") ), ((int) (933671524) ))) );
					}
					
					
					case 325402290:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeadsRects") ), ((int) (325402290) ))) );
					}
					
					
					case 272654911:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return this.direction;
					}
					
					
					case 1902308268:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return this.notetype;
					}
					
					
					case 1545099839:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return this.notevalue;
					}
					
					
					case 1193672430:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return this.placements;
					}
					
					
					case 1389717277:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return this.vheads;
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				switch (hash){
					case 933671524:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return this.headRect(((global::nx3.EHeadType) (dynargs[0]) ), ((global::nx3.ENoteVal) (dynargs[1]) ));
					}
					
					
					case 325402290:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return this.getHeadsRects();
					}
					
					
					default:
					{
						#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				baseArr.push("direction");
				#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				baseArr.push("notetype");
				#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				baseArr.push("notevalue");
				#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				baseArr.push("placements");
				#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				baseArr.push("vheads");
				#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
				{
					#line 15 "F:\\nx3\\src\\nx3\\PHeadsRectsCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


