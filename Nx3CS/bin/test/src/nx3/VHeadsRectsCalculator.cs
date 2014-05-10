
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VHeadsRectsCalculator : global::haxe.lang.HxObject {
		public    VHeadsRectsCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VHeadsRectsCalculator(global::Array<object> vheads, global::Array<object> placements, global::nx3.ENoteVal notevalue){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
				global::nx3.VHeadsRectsCalculator.__hx_ctor_nx3_VHeadsRectsCalculator(this, vheads, placements, notevalue);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VHeadsRectsCalculator(global::nx3.VHeadsRectsCalculator __temp_me128, global::Array<object> vheads, global::Array<object> placements, global::nx3.ENoteVal notevalue){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
				__temp_me128.vheads = vheads;
				__temp_me128.placements = placements;
				__temp_me128.notevalue = notevalue;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
				return new global::nx3.VHeadsRectsCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
				return new global::nx3.VHeadsRectsCalculator(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[1]) ))) ), ((global::nx3.ENoteVal) (arr[2]) ));
			}
			#line default
		}
		
		
		public  global::Array<object> vheads;
		
		public  global::Array<object> placements;
		
		public  global::nx3.ENoteVal notevalue;
		
		public  global::nx3.ENoteType notetype;
		
		public virtual   global::Array<object> getHeadsRects(){
			unchecked {
				#line 29 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
				global::Array<object> rects = new global::Array<object>();
				#line 33 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
				int i = 0;
				{
					#line 34 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
					int _g = 0;
					#line 34 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
					global::Array<object> _g1 = this.placements;
					#line 34 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
					while (( _g < _g1.length )){
						#line 34 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						object placement = _g1[_g];
						#line 34 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						 ++ _g;
						#line 36 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						global::nx3.EHeadType headtype = ((global::nx3.VHead) (this.vheads[i]) ).nhead.type;
						#line 38 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						global::nx3.geom.Rectangle rect = default(global::nx3.geom.Rectangle);
						double headw = ((double) (0) );
						#line 41 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						this.headRect(headtype, this.notevalue);
						#line 44 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						{
							#line 44 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
							global::nx3.EHeadValueType _g2 = global::nx3.ENoteValTools.head(this.notevalue);
							#line 44 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
							switch (global::Type.enumIndex(_g2)){
								case 2:
								{
									#line 47 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
									headw = 2.2;
									#line 47 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
									break;
								}
								
								
								default:
								{
									#line 49 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
									headw = 1.6;
									#line 49 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
									break;
								}
								
							}
							
						}
						
						#line 52 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						global::nx3.geom.Rectangle rect1 = new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>( - (headw) , true), new global::haxe.lang.Null<double>(((double) (-1) ), true), new global::haxe.lang.Null<double>(( 2 * headw ), true), new global::haxe.lang.Null<double>(((double) (2) ), true));
						#line 54 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						double pos = 0.0;
						{
							#line 55 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
							global::nx3.EHeadPosition _g21 = ((global::nx3.EHeadPosition) (global::haxe.lang.Runtime.getField(placement, "pos", 5594516, true)) );
							#line 55 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
							switch (global::Type.enumIndex(_g21)){
								case 0:
								{
									#line 57 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
									pos = ( -2 * headw );
									#line 57 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
									break;
								}
								
								
								case 2:
								{
									#line 58 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
									pos = ( 2 * headw );
									#line 58 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
									break;
								}
								
								
								default:
								{
									#line 59 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
									pos = ((double) (0) );
									#line 59 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
									break;
								}
								
							}
							
						}
						
						#line 61 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						rect1.offset(pos, ((double) (((int) (global::haxe.lang.Runtime.getField_f(placement, "level", 1919096196, true)) )) ));
						rects.push(rect1);
						i++;
					}
					
				}
				
				#line 66 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
				return rects;
			}
			#line default
		}
		
		
		public virtual   global::nx3.geom.Rectangle headRect(global::nx3.EHeadType type, global::nx3.ENoteVal notevalue){
			unchecked {
				#line 71 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
				int headw = 2;
				int headh = 2;
				switch (global::Type.enumIndex(type)){
					case 0:
					{
						#line 76 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						global::nx3.EHeadValueType _g = global::nx3.ENoteValTools.head(this.notevalue);
						#line 76 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						switch (global::Type.enumIndex(_g)){
							case 2:
							{
								#line 79 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
								return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(-2.2, true), new global::haxe.lang.Null<double>(((double) (-1) ), true), new global::haxe.lang.Null<double>(4.4, true), new global::haxe.lang.Null<double>(((double) (2) ), true));
							}
							
							
							default:
							{
								#line 81 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
								return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(-1.6, true), new global::haxe.lang.Null<double>(((double) (-1) ), true), new global::haxe.lang.Null<double>(3.2, true), new global::haxe.lang.Null<double>(((double) (2) ), true));
							}
							
						}
						
					}
					
					
					case 3:
					{
						#line 84 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						int _g1 = global::nx3.ENoteValTools.beaminglevel(this.notevalue);
						#line 84 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						switch (_g1){
							case 1:
							{
								#line 86 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
								return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(-1.8, true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(3.6, true), new global::haxe.lang.Null<double>(((double) (6) ), true));
							}
							
							
							case 2:
							{
								#line 87 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
								return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (-2) ), true), new global::haxe.lang.Null<double>(((double) (-3) ), true), new global::haxe.lang.Null<double>(((double) (4) ), true), new global::haxe.lang.Null<double>(((double) (6) ), true));
							}
							
							
							default:
							{
								#line 88 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
								return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(-1.6, true), new global::haxe.lang.Null<double>(-3.3, true), new global::haxe.lang.Null<double>(3.2, true), new global::haxe.lang.Null<double>(6.6, true));
							}
							
						}
						
					}
					
					
					default:
					{
						#line 91 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(((double) (-2) ), true), new global::haxe.lang.Null<double>(((double) (-2) ), true), new global::haxe.lang.Null<double>(((double) (4) ), true), new global::haxe.lang.Null<double>(((double) (4) ), true));
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
				switch (hash){
					case 1902308268:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						this.notetype = ((global::nx3.ENoteType) (@value) );
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						return @value;
					}
					
					
					case 1545099839:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						this.notevalue = ((global::nx3.ENoteVal) (@value) );
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						return @value;
					}
					
					
					case 1193672430:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						this.placements = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						return @value;
					}
					
					
					case 1389717277:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						this.vheads = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
				switch (hash){
					case 933671524:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("headRect") ), ((int) (933671524) ))) );
					}
					
					
					case 325402290:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getHeadsRects") ), ((int) (325402290) ))) );
					}
					
					
					case 1902308268:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						return this.notetype;
					}
					
					
					case 1545099839:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						return this.notevalue;
					}
					
					
					case 1193672430:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						return this.placements;
					}
					
					
					case 1389717277:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						return this.vheads;
					}
					
					
					default:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
				switch (hash){
					case 933671524:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						return this.headRect(((global::nx3.EHeadType) (dynargs[0]) ), ((global::nx3.ENoteVal) (dynargs[1]) ));
					}
					
					
					case 325402290:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						return this.getHeadsRects();
					}
					
					
					default:
					{
						#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
				baseArr.push("notetype");
				#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
				baseArr.push("notevalue");
				#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
				baseArr.push("placements");
				#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
				baseArr.push("vheads");
				#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
				{
					#line 13 "F:\\nx3\\src\\nx3\\VHeadsRectsCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


