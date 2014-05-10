
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VColumn : global::haxe.lang.HxObject {
		public    VColumn(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VColumn.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VColumn(global::Array<object> vcomplexes){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VColumn.hx"
				global::nx3.VColumn.__hx_ctor_nx3_VColumn(this, vcomplexes);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VColumn(global::nx3.VColumn __temp_me168, global::Array<object> vcomplexes){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VColumn.hx"
				__temp_me168.vcomplexes = vcomplexes;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VColumn.hx"
				return new global::nx3.VColumn(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VColumn.hx"
				return new global::nx3.VColumn(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> vcomplexes;
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VColumn.hx"
				switch (hash){
					case 1905191784:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VColumn.hx"
						this.vcomplexes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\VColumn.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VColumn.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VColumn.hx"
				switch (hash){
					case 1905191784:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VColumn.hx"
						return this.vcomplexes;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VColumn.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VColumn.hx"
				baseArr.push("vcomplexes");
				#line 8 "F:\\nx3\\src\\nx3\\VColumn.hx"
				{
					#line 8 "F:\\nx3\\src\\nx3\\VColumn.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


