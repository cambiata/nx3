
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class NScore : global::haxe.lang.HxObject {
		public    NScore(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\NScore.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    NScore(global::Array<object> nbars){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\NScore.hx"
				global::nx3.NScore.__hx_ctor_nx3_NScore(this, nbars);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_NScore(global::nx3.NScore __temp_me70, global::Array<object> nbars){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\NScore.hx"
				__temp_me70.nbars = nbars;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\NScore.hx"
				return new global::nx3.NScore(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\NScore.hx"
				return new global::nx3.NScore(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> nbars;
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\NScore.hx"
				switch (hash){
					case 388282030:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NScore.hx"
						this.nbars = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\NScore.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NScore.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\NScore.hx"
				switch (hash){
					case 388282030:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NScore.hx"
						return this.nbars;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\NScore.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\NScore.hx"
				baseArr.push("nbars");
				#line 8 "F:\\nx3\\src\\nx3\\NScore.hx"
				{
					#line 8 "F:\\nx3\\src\\nx3\\NScore.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


