
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace cx{
	public  class EnumTools : global::haxe.lang.HxObject {
		public    EnumTools(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 8 "F:\\nx3\\src\\cx\\EnumTools.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    EnumTools(){
			unchecked {
				#line 8 "F:\\nx3\\src\\cx\\EnumTools.hx"
				global::cx.EnumTools.__hx_ctor_cx_EnumTools(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_cx_EnumTools(global::cx.EnumTools __temp_me24){
			unchecked {
				#line 8 "F:\\nx3\\src\\cx\\EnumTools.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static   T createFromString<T>(global::System.Type e, string str){
			unchecked {
				#line 11 "F:\\nx3\\src\\cx\\EnumTools.hx"
				try {
					#line 12 "F:\\nx3\\src\\cx\\EnumTools.hx"
					string type = str;
					global::Array<object> @params = new global::Array<object>(new object[]{});
					if (global::cx.StrTools.has(str, "(")) {
						#line 15 "F:\\nx3\\src\\cx\\EnumTools.hx"
						int parIdx = global::haxe.lang.StringExt.indexOf(str, "(", default(global::haxe.lang.Null<int>));
						type = global::haxe.lang.StringExt.substr(str, 0, new global::haxe.lang.Null<int>(parIdx, true));
						@params = global::haxe.lang.StringExt.split(global::StringTools.replace(global::StringTools.replace(global::haxe.lang.StringExt.substr(str, parIdx, default(global::haxe.lang.Null<int>)), "(", ""), ")", ""), ",");
					}
					
					#line 19 "F:\\nx3\\src\\cx\\EnumTools.hx"
					return global::Type.createEnum<T>(e, type, @params);
				}
				catch (global::System.Exception __temp_catchallException178){
					#line 11 "F:\\nx3\\src\\cx\\EnumTools.hx"
					global::haxe.lang.Exceptions.exception = __temp_catchallException178;
					#line 20 "F:\\nx3\\src\\cx\\EnumTools.hx"
					object __temp_catchall179 = __temp_catchallException178;
					#line 20 "F:\\nx3\\src\\cx\\EnumTools.hx"
					if (( __temp_catchall179 is global::haxe.lang.HaxeException )) {
						#line 20 "F:\\nx3\\src\\cx\\EnumTools.hx"
						__temp_catchall179 = ((global::haxe.lang.HaxeException) (__temp_catchallException178) ).obj;
					}
					
					#line 20 "F:\\nx3\\src\\cx\\EnumTools.hx"
					{
						#line 20 "F:\\nx3\\src\\cx\\EnumTools.hx"
						object e1 = __temp_catchall179;
						#line 20 "F:\\nx3\\src\\cx\\EnumTools.hx"
						{
						}
						
					}
					
				}
				
				
				#line 21 "F:\\nx3\\src\\cx\\EnumTools.hx"
				return default(T);
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\cx\\EnumTools.hx"
				return new global::cx.EnumTools(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\cx\\EnumTools.hx"
				return new global::cx.EnumTools();
			}
			#line default
		}
		
		
	}
}


