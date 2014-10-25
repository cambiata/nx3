
namespace nx3{
	public enum EDirectionUD{
		Up, Down
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class EDirectionUDTools : global::haxe.lang.HxObject {
		public    EDirectionUDTools(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\EDirectionUD.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    EDirectionUDTools(){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\EDirectionUD.hx"
				global::nx3.EDirectionUDTools.__hx_ctor_nx3_EDirectionUDTools(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_EDirectionUDTools(global::nx3.EDirectionUDTools __temp_me63){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\EDirectionUD.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static   global::nx3.EDirectionUAD toUAD(global::nx3.EDirectionUD direction){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\EDirectionUD.hx"
				if (( direction == global::nx3.EDirectionUD.Up )) {
					#line 18 "F:\\nx3\\src\\nx3\\EDirectionUD.hx"
					return global::nx3.EDirectionUAD.Up;
				}
				 else {
					#line 18 "F:\\nx3\\src\\nx3\\EDirectionUD.hx"
					return global::nx3.EDirectionUAD.Down;
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\EDirectionUD.hx"
				return new global::nx3.EDirectionUDTools(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\EDirectionUD.hx"
				return new global::nx3.EDirectionUDTools();
			}
			#line default
		}
		
		
	}
}


