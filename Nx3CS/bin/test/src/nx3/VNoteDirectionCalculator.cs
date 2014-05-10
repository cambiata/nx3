
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VNoteDirectionCalculator : global::haxe.lang.HxObject {
		public    VNoteDirectionCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VNoteDirectionCalculator(global::nx3.VNote vnote){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
				global::nx3.VNoteDirectionCalculator.__hx_ctor_nx3_VNoteDirectionCalculator(this, vnote);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VNoteDirectionCalculator(global::nx3.VNoteDirectionCalculator __temp_me131, global::nx3.VNote vnote){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
				__temp_me131.vnote = vnote;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
				return new global::nx3.VNoteDirectionCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
				return new global::nx3.VNoteDirectionCalculator(((global::nx3.VNote) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.VNote vnote;
		
		public virtual   global::nx3.EDirectionUD getDirection(global::nx3.EDirectionUD directionConfig){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
				if (( global::Type.enumIndex(this.vnote.nnote.type) != 0 )) {
					#line 19 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
					return global::nx3.EDirectionUD.Down;
				}
				
				#line 21 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
				global::nx3.EDirectionUD direction = default(global::nx3.EDirectionUD);
				#line 23 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
				if (( this.vnote.nnote.direction != default(global::nx3.EDirectionUAD) )) {
					#line 25 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
					global::nx3.EDirectionUAD _g = this.vnote.nnote.direction;
					#line 25 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
					switch (global::Type.enumIndex(_g)){
						case 0:
						{
							#line 28 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
							direction = global::nx3.EDirectionUD.Up;
							return direction;
						}
						
						
						case 2:
						{
							#line 31 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
							direction = global::nx3.EDirectionUD.Down;
							return direction;
						}
						
						
						default:
						{
							#line 25 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
							{
							}
							
							#line 25 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
							break;
						}
						
					}
					
				}
				
				#line 38 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
				if (( directionConfig != default(global::nx3.EDirectionUD) )) {
					#line 38 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
					return directionConfig;
				}
				
				#line 41 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
				global::nx3.VNoteInternalDirectionCalculator calculator = new global::nx3.VNoteInternalDirectionCalculator(((global::Array<object>) (this.vnote.getVHeads()) ));
				return calculator.getDirection();
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
				switch (hash){
					case 978488168:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
						this.vnote = ((global::nx3.VNote) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
				switch (hash){
					case 529989321:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDirection") ), ((int) (529989321) ))) );
					}
					
					
					case 978488168:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
						return this.vnote;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
				switch (hash){
					case 529989321:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
						return this.getDirection(((global::nx3.EDirectionUD) (dynargs[0]) ));
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
				baseArr.push("vnote");
				#line 8 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
				{
					#line 8 "F:\\nx3\\src\\nx3\\VNoteDirectionCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


