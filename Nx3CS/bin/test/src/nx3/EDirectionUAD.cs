
namespace nx3{
	public enum EDirectionUAD{
		Up, Auto, Down
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class EDirectionUADTools : global::haxe.lang.HxObject {
		public    EDirectionUADTools(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\EDirectionUAD.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    EDirectionUADTools(){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\EDirectionUAD.hx"
				global::nx3.EDirectionUADTools.__hx_ctor_nx3_EDirectionUADTools(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_EDirectionUADTools(global::nx3.EDirectionUADTools __temp_me62){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\EDirectionUAD.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static   global::nx3.EDirectionUD toUD(global::nx3.EDirectionUAD direction){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\EDirectionUAD.hx"
				switch (global::Type.enumIndex(direction)){
					case 0:
					{
						#line 22 "F:\\nx3\\src\\nx3\\EDirectionUAD.hx"
						return global::nx3.EDirectionUD.Up;
					}
					
					
					case 2:
					{
						#line 23 "F:\\nx3\\src\\nx3\\EDirectionUAD.hx"
						return global::nx3.EDirectionUD.Down;
					}
					
					
					default:
					{
						#line 24 "F:\\nx3\\src\\nx3\\EDirectionUAD.hx"
						return global::nx3.EDirectionUD.Down;
					}
					
				}
				
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\EDirectionUAD.hx"
				return new global::nx3.EDirectionUADTools(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\EDirectionUAD.hx"
				return new global::nx3.EDirectionUADTools();
			}
			#line default
		}
		
		
	}
}


