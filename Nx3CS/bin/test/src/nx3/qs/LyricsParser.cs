
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class LyricsParser : global::nx3.qs.BaseParser {
		public    LyricsParser(global::haxe.lang.EmptyObject empty) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
			}
			#line default
		}
		
		
		public    LyricsParser(global::nx3.qs.QuickSyntaxParser builder) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				global::nx3.qs.LyricsParser.__hx_ctor_nx3_qs_LyricsParser(this, builder);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_qs_LyricsParser(global::nx3.qs.LyricsParser __temp_me203, global::nx3.qs.QuickSyntaxParser builder){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				global::nx3.qs.BaseParser.__hx_ctor_nx3_qs_BaseParser(__temp_me203, builder);
				__temp_me203.notevalue = global::nx3.ENoteVal.Nv4;
				__temp_me203.flagWord = false;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				return new global::nx3.qs.LyricsParser(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				return new global::nx3.qs.LyricsParser(((global::nx3.qs.QuickSyntaxParser) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.ENoteVal notevalue;
		
		public  bool flagWord;
		
		public override   void createFunctions(){
			unchecked {
				#line 23 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				global::Array<object> _g = new global::Array<object>(new object[]{this});
				#line 26 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				this.functions.@set("1.", new global::nx3.qs.LyricsParser_createFunctions_26__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("1", new global::nx3.qs.LyricsParser_createFunctions_27__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("2.", new global::nx3.qs.LyricsParser_createFunctions_28__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("2", new global::nx3.qs.LyricsParser_createFunctions_29__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("4.", new global::nx3.qs.LyricsParser_createFunctions_30__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("4", new global::nx3.qs.LyricsParser_createFunctions_31__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("8.", new global::nx3.qs.LyricsParser_createFunctions_32__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("8", new global::nx3.qs.LyricsParser_createFunctions_33__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("16.", new global::nx3.qs.LyricsParser_createFunctions_34__Fun(((global::Array<object>) (_g) )));
				this.functions.@set("16", new global::nx3.qs.LyricsParser_createFunctions_35__Fun(((global::Array<object>) (_g) )));
				#line 38 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				this.functions.@set("__ALL__", new global::nx3.qs.LyricsParser_createFunctions_38__Fun(((global::Array<object>) (_g) )));
			}
			#line default
		}
		
		
		public override   void tokenFinished(string originaltoken){
			unchecked {
				#line 49 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				if (this.flagWord) {
					#line 51 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
					global::nx3.NNote nnote = new global::nx3.NNote(((global::nx3.ENoteType) (global::nx3.ENoteType.Lyric(originaltoken, default(global::nx3.EPosition), default(global::nx3.ELyricContinuation), default(object))) ), ((global::Array<object>) (default(global::Array<object>)) ), ((global::nx3.ENoteVal) (this.notevalue) ), ((global::nx3.EDirectionUAD) (default(global::nx3.EDirectionUAD)) ));
					this.builder.addNote(nnote, default(object));
					this.flagWord = false;
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				switch (hash){
					case 635535254:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
						this.flagWord = global::haxe.lang.Runtime.toBool(@value);
						#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
						return @value;
					}
					
					
					case 1545099839:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
						this.notevalue = ((global::nx3.ENoteVal) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
						return @value;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				switch (hash){
					case 1779233675:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("tokenFinished") ), ((int) (1779233675) ))) );
					}
					
					
					case 1425523647:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("createFunctions") ), ((int) (1425523647) ))) );
					}
					
					
					case 635535254:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
						return this.flagWord;
					}
					
					
					case 1545099839:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
						return this.notevalue;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				baseArr.push("flagWord");
				#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				baseArr.push("notevalue");
				#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				{
					#line 10 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class LyricsParser_createFunctions_26__Fun : global::haxe.lang.Function {
		public    LyricsParser_createFunctions_26__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 26 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 26 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				string token = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 26 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				((global::nx3.qs.LyricsParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv1dot;
				#line 26 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				return global::haxe.lang.StringExt.substr(token, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class LyricsParser_createFunctions_27__Fun : global::haxe.lang.Function {
		public    LyricsParser_createFunctions_27__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 27 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 27 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				string token1 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 27 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				((global::nx3.qs.LyricsParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv1;
				#line 27 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				return global::haxe.lang.StringExt.substr(token1, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class LyricsParser_createFunctions_28__Fun : global::haxe.lang.Function {
		public    LyricsParser_createFunctions_28__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 28 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 28 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				string token2 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 28 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				((global::nx3.qs.LyricsParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv2dot;
				#line 28 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				return global::haxe.lang.StringExt.substr(token2, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class LyricsParser_createFunctions_29__Fun : global::haxe.lang.Function {
		public    LyricsParser_createFunctions_29__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 29 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 29 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				string token3 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 29 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				((global::nx3.qs.LyricsParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv2;
				#line 29 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				return global::haxe.lang.StringExt.substr(token3, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class LyricsParser_createFunctions_30__Fun : global::haxe.lang.Function {
		public    LyricsParser_createFunctions_30__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 30 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 30 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				string token4 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 30 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				((global::nx3.qs.LyricsParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv4dot;
				#line 30 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				return global::haxe.lang.StringExt.substr(token4, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class LyricsParser_createFunctions_31__Fun : global::haxe.lang.Function {
		public    LyricsParser_createFunctions_31__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 31 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 31 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				string token5 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 31 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				((global::nx3.qs.LyricsParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv4;
				#line 31 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				return global::haxe.lang.StringExt.substr(token5, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class LyricsParser_createFunctions_32__Fun : global::haxe.lang.Function {
		public    LyricsParser_createFunctions_32__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 32 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 32 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				string token6 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 32 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				((global::nx3.qs.LyricsParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv8dot;
				#line 32 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				return global::haxe.lang.StringExt.substr(token6, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class LyricsParser_createFunctions_33__Fun : global::haxe.lang.Function {
		public    LyricsParser_createFunctions_33__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 33 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 33 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				string token7 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 33 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				((global::nx3.qs.LyricsParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv8;
				#line 33 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				return global::haxe.lang.StringExt.substr(token7, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class LyricsParser_createFunctions_34__Fun : global::haxe.lang.Function {
		public    LyricsParser_createFunctions_34__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 34 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 34 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				string token8 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 34 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				((global::nx3.qs.LyricsParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv16dot;
				#line 34 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				return global::haxe.lang.StringExt.substr(token8, 3, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class LyricsParser_createFunctions_35__Fun : global::haxe.lang.Function {
		public    LyricsParser_createFunctions_35__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 35 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 35 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				string token9 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 35 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				((global::nx3.qs.LyricsParser) (this._g[0]) ).notevalue = global::nx3.ENoteVal.Nv16;
				#line 35 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				return global::haxe.lang.StringExt.substr(token9, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class LyricsParser_createFunctions_38__Fun : global::haxe.lang.Function {
		public    LyricsParser_createFunctions_38__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 38 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 38 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				string token10 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 40 "F:\\nx3\\src\\nx3\\qs\\LyricsParser.hx"
				global::haxe.Log.trace.__hx_invoke2_o(default(double), "HANDLE __ALL___", default(double), new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{302979532, 1547539107, 1648581351}), new global::Array<object>(new object[]{"createFunctions", "nx3.qs.LyricsParser", "LyricsParser.hx"}), new global::Array<int>(new int[]{1981972957}), new global::Array<double>(new double[]{((double) (40) )})));
				((global::nx3.qs.LyricsParser) (this._g[0]) ).flagWord = true;
				return global::haxe.lang.StringExt.substr(token10, token10.Length, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}


