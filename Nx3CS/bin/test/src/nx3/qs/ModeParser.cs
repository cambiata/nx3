
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class ModeParser : global::nx3.qs.BaseParser {
		public    ModeParser(global::haxe.lang.EmptyObject empty) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
			}
			#line default
		}
		
		
		public    ModeParser(global::nx3.qs.QuickSyntaxParser parser) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				global::nx3.qs.ModeParser.__hx_ctor_nx3_qs_ModeParser(this, parser);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_qs_ModeParser(global::nx3.qs.ModeParser __temp_me204, global::nx3.qs.QuickSyntaxParser parser){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				global::nx3.qs.BaseParser.__hx_ctor_nx3_qs_BaseParser(__temp_me204, parser);
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				return new global::nx3.qs.ModeParser(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				return new global::nx3.qs.ModeParser(((global::nx3.qs.QuickSyntaxParser) (arr[0]) ));
			}
			#line default
		}
		
		
		public override   void createFunctions(){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				global::Array<object> _g = new global::Array<object>(new object[]{this});
				#line 19 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				this.functions.@set("not:", new global::nx3.qs.ModeParser_createFunctions_19__Fun(((global::Array<object>) (_g) )));
				#line 25 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				this.functions.@set("tpl:", new global::nx3.qs.ModeParser_createFunctions_25__Fun(((global::Array<object>) (_g) )));
				#line 31 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				this.functions.@set("lyr:", new global::nx3.qs.ModeParser_createFunctions_31__Fun(((global::Array<object>) (_g) )));
				#line 37 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				this.functions.@set("xxx", ( (( global::nx3.qs.ModeParser_createFunctions_37__Fun.__hx_current != default(global::nx3.qs.ModeParser_createFunctions_37__Fun) )) ? (global::nx3.qs.ModeParser_createFunctions_37__Fun.__hx_current) : (global::nx3.qs.ModeParser_createFunctions_37__Fun.__hx_current = ((global::nx3.qs.ModeParser_createFunctions_37__Fun) (new global::nx3.qs.ModeParser_createFunctions_37__Fun()) )) ));
				#line 42 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				this.functions.@set("guess:", new global::nx3.qs.ModeParser_createFunctions_42__Fun(((global::Array<object>) (_g) )));
			}
			#line default
		}
		
		
		public override   void tokenFinished(string originaltoken){
			unchecked {
				#line 51 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public override   void recieveEvent(global::nx3.qs.ParserEvents @event){
			unchecked {
				#line 56 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				switch (hash){
					case 664337087:
					{
						#line 8 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("recieveEvent") ), ((int) (664337087) ))) );
					}
					
					
					case 1779233675:
					{
						#line 8 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("tokenFinished") ), ((int) (1779233675) ))) );
					}
					
					
					case 1425523647:
					{
						#line 8 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("createFunctions") ), ((int) (1425523647) ))) );
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class ModeParser_createFunctions_19__Fun : global::haxe.lang.Function {
		public    ModeParser_createFunctions_19__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				string token = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				((global::nx3.qs.ModeParser) (this._g[0]) ).sendEvent(global::nx3.qs.ParserEvents.SetMode(global::nx3.qs.ContentMode.Notes));
				global::haxe.Log.trace.__hx_invoke2_o(default(double), "handle notes...", default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"createFunctions", "nx3.qs.ModeParser", "ModeParser.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (21) )})));
				return global::haxe.lang.StringExt.substr(token, 4, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class ModeParser_createFunctions_25__Fun : global::haxe.lang.Function {
		public    ModeParser_createFunctions_25__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				string token1 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				((global::nx3.qs.ModeParser) (this._g[0]) ).sendEvent(global::nx3.qs.ParserEvents.SetMode(global::nx3.qs.ContentMode.Tpls));
				global::haxe.Log.trace.__hx_invoke2_o(default(double), "handle tpls...", default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"createFunctions", "nx3.qs.ModeParser", "ModeParser.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (27) )})));
				return global::haxe.lang.StringExt.substr(token1, 4, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class ModeParser_createFunctions_31__Fun : global::haxe.lang.Function {
		public    ModeParser_createFunctions_31__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 31 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 31 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				string token2 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				((global::nx3.qs.ModeParser) (this._g[0]) ).sendEvent(global::nx3.qs.ParserEvents.SetMode(global::nx3.qs.ContentMode.Lyrics));
				global::haxe.Log.trace.__hx_invoke2_o(default(double), "handle lyrics...", default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"createFunctions", "nx3.qs.ModeParser", "ModeParser.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (33) )})));
				return global::haxe.lang.StringExt.substr(token2, 4, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class ModeParser_createFunctions_37__Fun : global::haxe.lang.Function {
		public    ModeParser_createFunctions_37__Fun() : base(1, 0){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::nx3.qs.ModeParser_createFunctions_37__Fun __hx_current;
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 37 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				string token3 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				global::haxe.Log.trace.__hx_invoke2_o(default(double), "handle xxx...", default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"createFunctions", "nx3.qs.ModeParser", "ModeParser.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (38) )})));
				return global::haxe.lang.StringExt.substr(token3, 3, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class ModeParser_createFunctions_42__Fun : global::haxe.lang.Function {
		public    ModeParser_createFunctions_42__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 42 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 42 "F:\\nx3\\src\\nx3\\qs\\ModeParser.hx"
				string token4 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				((global::nx3.qs.ModeParser) (this._g[0]) ).sendEvent(global::nx3.qs.ParserEvents.SetGuessOctave(true));
				return global::haxe.lang.StringExt.substr(token4, 6, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}


