
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class BaseParser : global::haxe.lang.HxObject {
		public    BaseParser(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    BaseParser(global::nx3.qs.QuickSyntaxParser builder){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				global::nx3.qs.BaseParser.__hx_ctor_nx3_qs_BaseParser(this, builder);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_qs_BaseParser(global::nx3.qs.BaseParser __temp_me201, global::nx3.qs.QuickSyntaxParser builder){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				__temp_me201.builder = builder;
				__temp_me201.functions = new global::haxe.ds.StringMap<object>();
				__temp_me201.createFunctions();
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				return new global::nx3.qs.BaseParser(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				return new global::nx3.qs.BaseParser(((global::nx3.qs.QuickSyntaxParser) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.qs.QuickSyntaxParser builder;
		
		public  global::haxe.ds.StringMap<object> functions;
		
		public virtual   global::haxe.lang.Function getTokenfunction(global::haxe.ds.StringMap<object> functions, string token){
			unchecked {
				#line 26 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				global::Array<object> keys = global::cx.ArrayTools.fromHashKeys<object>(functions.keys());
				keys.sort(( (( global::nx3.qs.BaseParser_getTokenfunction_27__Fun.__hx_current != default(global::nx3.qs.BaseParser_getTokenfunction_27__Fun) )) ? (global::nx3.qs.BaseParser_getTokenfunction_27__Fun.__hx_current) : (global::nx3.qs.BaseParser_getTokenfunction_27__Fun.__hx_current = ((global::nx3.qs.BaseParser_getTokenfunction_27__Fun) (new global::nx3.qs.BaseParser_getTokenfunction_27__Fun()) )) ));
				#line 29 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				{
					#line 29 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
					int _g = 0;
					#line 29 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
					while (( _g < keys.length )){
						#line 29 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						string key = global::haxe.lang.Runtime.toString(keys[_g]);
						#line 29 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						 ++ _g;
						#line 31 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						if (token.StartsWith(key)) {
							#line 33 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
							return ((global::haxe.lang.Function) (functions.@get(((string) (key) )).@value) );
						}
						
					}
					
				}
				
				#line 37 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				{
					#line 37 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
					int _g1 = 0;
					#line 37 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
					while (( _g1 < keys.length )){
						#line 37 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						string key1 = global::haxe.lang.Runtime.toString(keys[_g1]);
						#line 37 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						 ++ _g1;
						#line 39 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						if (string.Equals(key1, "__ALL__")) {
							#line 39 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
							return ((global::haxe.lang.Function) (functions.@get(((string) (key1) )).@value) );
						}
						
					}
					
				}
				
				#line 42 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				return default(global::haxe.lang.Function);
			}
			#line default
		}
		
		
		public virtual   string parse(string token, global::nx3.qs.QuickSyntaxParser parser){
			unchecked {
				#line 50 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				string originaltoken = token;
				global::haxe.lang.Function func = this.getTokenfunction(this.functions, token);
				while (( func != default(global::haxe.lang.Function) )){
					#line 54 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
					token = global::haxe.lang.Runtime.toString(global::Reflect.callMethod(default(object), func, new global::Array<object>(new object[]{token})));
					#line 56 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
					if (string.Equals(token, "")) {
						#line 58 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						this.tokenFinished(originaltoken);
						return "";
					}
					
					#line 62 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
					func = this.getTokenfunction(this.functions, token);
				}
				
				#line 65 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				if (string.Equals(originaltoken, token)) {
					#line 67 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
					return token;
				}
				
				#line 70 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				return "";
			}
			#line default
		}
		
		
		public virtual   void tokenFinished(string originaltoken){
			unchecked {
				#line 75 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				global::haxe.Log.trace.__hx_invoke2_o(default(double), "all is taken care of", default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"tokenFinished", "nx3.qs.BaseParser", "BaseParser.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (75) )})));
			}
			#line default
		}
		
		
		public virtual   void createFunctions(){
			unchecked {
				#line 80 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				global::haxe.Log.trace.__hx_invoke2_o(default(double), "should be overridden", default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"createFunctions", "nx3.qs.BaseParser", "BaseParser.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (80) )})));
			}
			#line default
		}
		
		
		public virtual   void sendEvent(global::nx3.qs.ParserEvents @event){
			unchecked {
				#line 85 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				this.builder.passEvent(@event);
			}
			#line default
		}
		
		
		public virtual   void recieveEvent(global::nx3.qs.ParserEvents @event){
			unchecked {
				#line 90 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				throw global::haxe.lang.HaxeException.wrap("shouldBeOverridden");
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				switch (hash){
					case 872614491:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						this.functions = ((global::haxe.ds.StringMap<object>) (global::haxe.ds.StringMap<object>.__hx_cast<object>(((global::haxe.ds.StringMap) (@value) ))) );
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						return @value;
					}
					
					
					case 1874516763:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						this.builder = ((global::nx3.qs.QuickSyntaxParser) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						return @value;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				switch (hash){
					case 664337087:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("recieveEvent") ), ((int) (664337087) ))) );
					}
					
					
					case 909411762:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("sendEvent") ), ((int) (909411762) ))) );
					}
					
					
					case 1425523647:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("createFunctions") ), ((int) (1425523647) ))) );
					}
					
					
					case 1779233675:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("tokenFinished") ), ((int) (1779233675) ))) );
					}
					
					
					case 1029017651:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("parse") ), ((int) (1029017651) ))) );
					}
					
					
					case 2042624155:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getTokenfunction") ), ((int) (2042624155) ))) );
					}
					
					
					case 872614491:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						return this.functions;
					}
					
					
					case 1874516763:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						return this.builder;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				switch (hash){
					case 664337087:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						this.recieveEvent(((global::nx3.qs.ParserEvents) (dynargs[0]) ));
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						break;
					}
					
					
					case 909411762:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						this.sendEvent(((global::nx3.qs.ParserEvents) (dynargs[0]) ));
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						break;
					}
					
					
					case 1425523647:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						this.createFunctions();
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						break;
					}
					
					
					case 1779233675:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						this.tokenFinished(global::haxe.lang.Runtime.toString(dynargs[0]));
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						break;
					}
					
					
					case 1029017651:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						return this.parse(global::haxe.lang.Runtime.toString(dynargs[0]), ((global::nx3.qs.QuickSyntaxParser) (dynargs[1]) ));
					}
					
					
					case 2042624155:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						return this.getTokenfunction(((global::haxe.ds.StringMap<object>) (global::haxe.ds.StringMap<object>.__hx_cast<object>(((global::haxe.ds.StringMap) (dynargs[0]) ))) ), global::haxe.lang.Runtime.toString(dynargs[1]));
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				baseArr.push("functions");
				#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				baseArr.push("builder");
				#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				{
					#line 10 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class BaseParser_getTokenfunction_27__Fun : global::haxe.lang.Function {
		public    BaseParser_getTokenfunction_27__Fun() : base(2, 1){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::nx3.qs.BaseParser_getTokenfunction_27__Fun __hx_current;
		
		public override   double __hx_invoke2_f(double __fn_float1, object __fn_dyn1, double __fn_float2, object __fn_dyn2){
			unchecked {
				#line 27 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				string b = ( (global::haxe.lang.Runtime.eq(__fn_dyn2, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float2)) : (global::haxe.lang.Runtime.toString(__fn_dyn2)) );
				#line 27 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				string a = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 27 "F:\\nx3\\src\\nx3\\qs\\BaseParser.hx"
				return ((double) ( - (global::Reflect.compare<int>(a.Length, b.Length)) ) );
			}
			#line default
		}
		
		
	}
}


