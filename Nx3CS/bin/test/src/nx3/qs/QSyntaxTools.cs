
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.qs{
	public  class QSyntaxTools : global::haxe.lang.HxObject {
		public    QSyntaxTools(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\qs\\QSyntaxTools.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    QSyntaxTools(){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\qs\\QSyntaxTools.hx"
				global::nx3.qs.QSyntaxTools.__hx_ctor_nx3_qs_QSyntaxTools(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_qs_QSyntaxTools(global::nx3.qs.QSyntaxTools __temp_me206){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\qs\\QSyntaxTools.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static   string bpvToString(object val){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\qs\\QSyntaxTools.hx"
				return global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat("", global::haxe.lang.Runtime.toString(((int) (global::haxe.lang.Runtime.getField_f(val, "barIndex", 216194111, true)) ))), "-"), global::haxe.lang.Runtime.toString(((int) (global::haxe.lang.Runtime.getField_f(val, "partIndex", 754054687, true)) ))), "-"), global::haxe.lang.Runtime.toString(((int) (global::haxe.lang.Runtime.getField_f(val, "voiceIndex", 1456144384, true)) )));
			}
			#line default
		}
		
		
		public static   object stringToBpv(string bpvString){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\qs\\QSyntaxTools.hx"
				global::Array<object> segments = global::haxe.lang.StringExt.split(bpvString, "-");
				object bpv = default(object);
				#line 18 "F:\\nx3\\src\\nx3\\qs\\QSyntaxTools.hx"
				{
					#line 18 "F:\\nx3\\src\\nx3\\qs\\QSyntaxTools.hx"
					global::haxe.lang.Null<int> __temp_odecl353 = global::Std.parseInt(global::haxe.lang.Runtime.toString(segments[0]));
					#line 18 "F:\\nx3\\src\\nx3\\qs\\QSyntaxTools.hx"
					global::haxe.lang.Null<int> __temp_odecl354 = global::Std.parseInt(global::haxe.lang.Runtime.toString(segments[1]));
					#line 18 "F:\\nx3\\src\\nx3\\qs\\QSyntaxTools.hx"
					global::haxe.lang.Null<int> __temp_odecl355 = global::Std.parseInt(global::haxe.lang.Runtime.toString(segments[2]));
					#line 18 "F:\\nx3\\src\\nx3\\qs\\QSyntaxTools.hx"
					bpv = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{216194111, 754054687, 1456144384}), new global::Array<object>(new object[]{(__temp_odecl353).toDynamic(), (__temp_odecl354).toDynamic(), (__temp_odecl355).toDynamic()}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}));
				}
				
				#line 19 "F:\\nx3\\src\\nx3\\qs\\QSyntaxTools.hx"
				return bpv;
			}
			#line default
		}
		
		
		public static   object getBpv(int barIndex, int partIndex, int voiceIndex){
			unchecked {
				#line 24 "F:\\nx3\\src\\nx3\\qs\\QSyntaxTools.hx"
				object bpv = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{}), new global::Array<object>(new object[]{}), new global::Array<int>(new int[]{216194111, 754054687, 1456144384}), new global::Array<double>(new double[]{((double) (barIndex) ), ((double) (partIndex) ), ((double) (voiceIndex) )}));
				return bpv;
			}
			#line default
		}
		
		
		public static   string getBpvString(int barIndex, int partIndex, int voiceIndex){
			unchecked {
				#line 30 "F:\\nx3\\src\\nx3\\qs\\QSyntaxTools.hx"
				return global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat("", global::haxe.lang.Runtime.toString(barIndex)), "-"), global::haxe.lang.Runtime.toString(partIndex)), "-"), global::haxe.lang.Runtime.toString(voiceIndex));
			}
			#line default
		}
		
		
		public static   string removeComments(string code){
			unchecked {
				#line 35 "F:\\nx3\\src\\nx3\\qs\\QSyntaxTools.hx"
				global::EReg r = new global::EReg(((string) ("/\\*([a-zA-Z0-9-+=\" ]*)\\*/") ), ((string) ("g") ));
				code = r.replace(code, " ");
				return code;
			}
			#line default
		}
		
		
		public static   string removeSpaces(string code){
			unchecked {
				#line 42 "F:\\nx3\\src\\nx3\\qs\\QSyntaxTools.hx"
				global::EReg r = new global::EReg(((string) ("[ \t]{2,}") ), ((string) ("g") ));
				code = r.replace(code, " ");
				return code;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\qs\\QSyntaxTools.hx"
				return new global::nx3.qs.QSyntaxTools(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\qs\\QSyntaxTools.hx"
				return new global::nx3.qs.QSyntaxTools();
			}
			#line default
		}
		
		
	}
}


