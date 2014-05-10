
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VHead : global::haxe.lang.HxObject {
		public    VHead(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VHead.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VHead(global::nx3.NHead nhead){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VHead.hx"
				global::nx3.VHead.__hx_ctor_nx3_VHead(this, nhead);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VHead(global::nx3.VHead __temp_me126, global::nx3.NHead nhead){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VHead.hx"
				__temp_me126.nhead = nhead;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VHead.hx"
				return new global::nx3.VHead(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VHead.hx"
				return new global::nx3.VHead(((global::nx3.NHead) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.NHead nhead;
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VHead.hx"
				switch (hash){
					case 455014542:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VHead.hx"
						this.nhead = ((global::nx3.NHead) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\VHead.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VHead.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VHead.hx"
				switch (hash){
					case 455014542:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VHead.hx"
						return this.nhead;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\VHead.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\VHead.hx"
				baseArr.push("nhead");
				#line 8 "F:\\nx3\\src\\nx3\\VHead.hx"
				{
					#line 8 "F:\\nx3\\src\\nx3\\VHead.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


