
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class BarParser : global::nx3.qs.BaseParser {
		public    BarParser(global::haxe.lang.EmptyObject empty) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
			}
			#line default
		}
		
		
		public    BarParser(global::nx3.qs.QuickSyntaxParser parser) : base(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) )){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				global::nx3.qs.BarParser.__hx_ctor_nx3_qs_BarParser(this, parser);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_qs_BarParser(global::nx3.qs.BarParser __temp_me202, global::nx3.qs.QuickSyntaxParser parser){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				global::nx3.qs.BaseParser.__hx_ctor_nx3_qs_BaseParser(__temp_me202, parser);
				__temp_me202.barIndex = 0;
				__temp_me202.partIndex = 0;
				__temp_me202.voiceIndex = 0;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				return new global::nx3.qs.BarParser(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				return new global::nx3.qs.BarParser(((global::nx3.qs.QuickSyntaxParser) (arr[0]) ));
			}
			#line default
		}
		
		
		public  int barIndex;
		
		public  int partIndex;
		
		public  int voiceIndex;
		
		public override   void createFunctions(){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				global::Array<object> _g = new global::Array<object>(new object[]{this});
				#line 27 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				this.functions.@set(";", new global::nx3.qs.BarParser_createFunctions_27__Fun(((global::Array<object>) (_g) )));
				#line 32 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				this.functions.@set("|", new global::nx3.qs.BarParser_createFunctions_32__Fun(((global::Array<object>) (_g) )));
				#line 39 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				this.functions.@set("//", new global::nx3.qs.BarParser_createFunctions_39__Fun(((global::Array<object>) (_g) )));
				#line 46 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				this.functions.@set("/", new global::nx3.qs.BarParser_createFunctions_46__Fun(((global::Array<object>) (_g) )));
				#line 53 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				this.functions.@set("%%", new global::nx3.qs.BarParser_createFunctions_53__Fun(((global::Array<object>) (_g) )));
				#line 63 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				this.functions.@set("%", new global::nx3.qs.BarParser_createFunctions_63__Fun(((global::Array<object>) (_g) )));
				#line 70 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				this.functions.@set("clef:G", new global::nx3.qs.BarParser_createFunctions_70__Fun(((global::Array<object>) (_g) )));
			}
			#line default
		}
		
		
		public override   void tokenFinished(string originaltoken){
			unchecked {
				#line 80 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public virtual   object getBpvIndex(){
			unchecked {
				#line 86 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				object bpvIndex = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{}), new global::Array<object>(new object[]{}), new global::Array<int>(new int[]{216194111, 754054687, 1456144384}), new global::Array<double>(new double[]{((double) (this.barIndex) ), ((double) (this.partIndex) ), ((double) (this.voiceIndex) )}));
				return bpvIndex;
			}
			#line default
		}
		
		
		public override   void recieveEvent(global::nx3.qs.ParserEvents @event){
			unchecked {
				#line 91 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				switch (hash){
					case 1456144384:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						this.voiceIndex = ((int) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return @value;
					}
					
					
					case 754054687:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						this.partIndex = ((int) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return @value;
					}
					
					
					case 216194111:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						this.barIndex = ((int) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				switch (hash){
					case 1456144384:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						this.voiceIndex = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return @value;
					}
					
					
					case 754054687:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						this.partIndex = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return @value;
					}
					
					
					case 216194111:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						this.barIndex = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				switch (hash){
					case 664337087:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("recieveEvent") ), ((int) (664337087) ))) );
					}
					
					
					case 1007027648:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getBpvIndex") ), ((int) (1007027648) ))) );
					}
					
					
					case 1779233675:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("tokenFinished") ), ((int) (1779233675) ))) );
					}
					
					
					case 1425523647:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("createFunctions") ), ((int) (1425523647) ))) );
					}
					
					
					case 1456144384:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return this.voiceIndex;
					}
					
					
					case 754054687:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return this.partIndex;
					}
					
					
					case 216194111:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return this.barIndex;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				switch (hash){
					case 1456144384:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return ((double) (this.voiceIndex) );
					}
					
					
					case 754054687:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return ((double) (this.partIndex) );
					}
					
					
					case 216194111:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return ((double) (this.barIndex) );
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				switch (hash){
					case 1425523647:case 1779233675:case 664337087:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return global::haxe.lang.Runtime.slowCallField(this, field, dynargs);
					}
					
					
					case 1007027648:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return this.getBpvIndex();
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				baseArr.push("voiceIndex");
				#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				baseArr.push("partIndex");
				#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				baseArr.push("barIndex");
				#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				{
					#line 11 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class BarParser_createFunctions_27__Fun : global::haxe.lang.Function {
		public    BarParser_createFunctions_27__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 27 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 27 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				string token = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				((global::nx3.qs.BarParser) (this._g[0]) ).barIndex++;
				return global::haxe.lang.StringExt.substr(token, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class BarParser_createFunctions_32__Fun : global::haxe.lang.Function {
		public    BarParser_createFunctions_32__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 32 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 32 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				string token1 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				((global::nx3.qs.BarParser) (this._g[0]) ).barIndex++;
				((global::nx3.qs.BarParser) (this._g[0]) ).partIndex = 0;
				((global::nx3.qs.BarParser) (this._g[0]) ).voiceIndex = 0;
				return global::haxe.lang.StringExt.substr(token1, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class BarParser_createFunctions_39__Fun : global::haxe.lang.Function {
		public    BarParser_createFunctions_39__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 39 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 39 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				string token2 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				((global::nx3.qs.BarParser) (this._g[0]) ).partIndex++;
				((global::nx3.qs.BarParser) (this._g[0]) ).barIndex = 0;
				#line 43 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				return global::haxe.lang.StringExt.substr(token2, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class BarParser_createFunctions_46__Fun : global::haxe.lang.Function {
		public    BarParser_createFunctions_46__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 46 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 46 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				string token3 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				((global::nx3.qs.BarParser) (this._g[0]) ).partIndex++;
				((global::nx3.qs.BarParser) (this._g[0]) ).voiceIndex = 0;
				#line 50 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				return global::haxe.lang.StringExt.substr(token3, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class BarParser_createFunctions_53__Fun : global::haxe.lang.Function {
		public    BarParser_createFunctions_53__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 53 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 53 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				string token4 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				((global::nx3.qs.BarParser) (this._g[0]) ).voiceIndex++;
				((global::nx3.qs.BarParser) (this._g[0]) ).barIndex = 0;
				if (( ((global::nx3.qs.BarParser) (this._g[0]) ).voiceIndex > 1 )) {
					#line 57 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
					((global::nx3.qs.BarParser) (this._g[0]) ).partIndex++;
					((global::nx3.qs.BarParser) (this._g[0]) ).voiceIndex = 0;
				}
				
				#line 60 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				return global::haxe.lang.StringExt.substr(token4, 2, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class BarParser_createFunctions_63__Fun : global::haxe.lang.Function {
		public    BarParser_createFunctions_63__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 63 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 63 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				string token5 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				((global::nx3.qs.BarParser) (this._g[0]) ).voiceIndex++;
				((global::nx3.qs.BarParser) (this._g[0]) ).sendEvent(global::nx3.qs.ParserEvents.SetOctave(0));
				((global::nx3.qs.BarParser) (this._g[0]) ).sendEvent(global::nx3.qs.ParserEvents.SetNoteVal(global::nx3.ENoteVal.Nv4));
				return global::haxe.lang.StringExt.substr(token5, 1, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class BarParser_createFunctions_70__Fun : global::haxe.lang.Function {
		public    BarParser_createFunctions_70__Fun(global::Array<object> _g) : base(1, 0){
			unchecked {
				#line 71 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				this._g = _g;
			}
			#line default
		}
		
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 70 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				string token6 = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (global::haxe.lang.Runtime.toString(__fn_float1)) : (global::haxe.lang.Runtime.toString(__fn_dyn1)) );
				#line 72 "F:\\nx3\\src\\nx3\\qs\\BarParser.hx"
				((global::nx3.qs.BarParser) (this._g[0]) ).sendEvent(global::nx3.qs.ParserEvents.SetBarClef(global::nx3.EClef.ClefG));
				return global::haxe.lang.StringExt.substr(token6, 6, default(global::haxe.lang.Null<int>));
			}
			#line default
		}
		
		
		public  global::Array<object> _g;
		
	}
}


