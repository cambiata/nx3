
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VNoteInternalDirectionCalculator : global::haxe.lang.HxObject {
		public    VNoteInternalDirectionCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VNoteInternalDirectionCalculator(global::Array<object> vheads){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
				global::nx3.VNoteInternalDirectionCalculator.__hx_ctor_nx3_VNoteInternalDirectionCalculator(this, vheads);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VNoteInternalDirectionCalculator(global::nx3.VNoteInternalDirectionCalculator __temp_me136, global::Array<object> vheads){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
				__temp_me136.vheads = vheads;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
				return new global::nx3.VNoteInternalDirectionCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
				return new global::nx3.VNoteInternalDirectionCalculator(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> vheads;
		
		public virtual   global::nx3.EDirectionUD getDirection(){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
				int headsCount = this.vheads.length;
				switch (headsCount){
					case 0:
					{
						#line 21 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
						return global::nx3.EDirectionUD.Down;
					}
					
					
					case 1:
					{
						#line 22 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
						return this.weightToDirection(((global::nx3.VHead) (this.vheads[0]) ).nhead.level);
					}
					
					
					default:
					{
						#line 19 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
						{
						}
						
						#line 19 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
						break;
					}
					
				}
				
				#line 26 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
				int weight = ( ((global::nx3.VHead) (this.vheads[0]) ).nhead.level + ((global::nx3.VHead) (this.vheads[( headsCount - 1 )]) ).nhead.level );
				return this.weightToDirection(weight);
			}
			#line default
		}
		
		
		public virtual   global::nx3.EDirectionUD weightToDirection(int weight){
			unchecked {
				#line 32 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
				if (( weight <= 0 )) {
					#line 32 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
					return global::nx3.EDirectionUD.Down;
				}
				 else {
					#line 32 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
					return global::nx3.EDirectionUD.Up;
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
				switch (hash){
					case 1389717277:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
						this.vheads = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
				switch (hash){
					case 1620115116:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("weightToDirection") ), ((int) (1620115116) ))) );
					}
					
					
					case 529989321:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDirection") ), ((int) (529989321) ))) );
					}
					
					
					case 1389717277:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
						return this.vheads;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
				switch (hash){
					case 1620115116:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
						return this.weightToDirection(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ));
					}
					
					
					case 529989321:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
						return this.getDirection();
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
				baseArr.push("vheads");
				#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
				{
					#line 8 "F:\\nx3\\src\\nx3\\VNoteInternalDirectionCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


