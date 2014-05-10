
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace haxe{
	public  class StackItem : global::haxe.lang.Enum {
		static StackItem() {
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
			global::haxe.StackItem.constructs = new global::Array<object>(new object[]{"CFunction", "Module", "FilePos", "Method", "LocalFunction"});
			global::haxe.StackItem.CFunction = new global::haxe.StackItem(((int) (0) ), ((global::Array<object>) (new global::Array<object>(new object[]{})) ));
		}
		public    StackItem(global::haxe.lang.EmptyObject empty) : base(global::haxe.lang.EmptyObject.EMPTY){
			unchecked {
			}
			#line default
		}
		
		
		public    StackItem(int index, global::Array<object> @params) : base(index, @params){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::Array<object> constructs;
		
		public static  global::haxe.StackItem CFunction;
		
		public static   global::haxe.StackItem Module(string m){
			unchecked {
				#line 29 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
				return new global::haxe.StackItem(((int) (1) ), ((global::Array<object>) (new global::Array<object>(new object[]{m})) ));
			}
			#line default
		}
		
		
		public static   global::haxe.StackItem FilePos(global::haxe.StackItem s, string file, int line){
			unchecked {
				#line 30 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
				return new global::haxe.StackItem(((int) (2) ), ((global::Array<object>) (new global::Array<object>(new object[]{s, file, line})) ));
			}
			#line default
		}
		
		
		public static   global::haxe.StackItem Method(string classname, string method){
			unchecked {
				#line 31 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
				return new global::haxe.StackItem(((int) (3) ), ((global::Array<object>) (new global::Array<object>(new object[]{classname, method})) ));
			}
			#line default
		}
		
		
		public static   global::haxe.StackItem LocalFunction(int v){
			unchecked {
				#line 32 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
				return new global::haxe.StackItem(((int) (4) ), ((global::Array<object>) (new global::Array<object>(new object[]{v})) ));
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 27 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
				return new global::haxe.StackItem(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 27 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
				return new global::haxe.StackItem(((int) (global::haxe.lang.Runtime.toInt(arr[0])) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[1]) ))) ));
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace haxe{
	public  class CallStack : global::haxe.lang.HxObject {
		public    CallStack(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 38 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    CallStack(){
			unchecked {
				#line 38 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
				global::haxe.CallStack.__hx_ctor_haxe_CallStack(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_haxe_CallStack(global::haxe.CallStack __temp_me41){
			unchecked {
				#line 38 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static   global::Array<object> exceptionStack(){
			unchecked {
				#line 161 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
				return global::haxe.CallStack.makeStack(new global::System.Diagnostics.StackTrace(((global::System.Exception) (global::haxe.lang.Exceptions.exception) ), global::haxe.lang.Runtime.toBool(true)));
			}
			#line default
		}
		
		
		public static   string toString(global::Array<object> stack){
			unchecked {
				#line 171 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
				global::StringBuf b = new global::StringBuf();
				{
					#line 172 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
					int _g = 0;
					#line 172 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
					while (( _g < stack.length )){
						#line 172 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						global::haxe.StackItem s = ((global::haxe.StackItem) (stack[_g]) );
						#line 172 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						 ++ _g;
						b.b.Append(((object) ("\nCalled from ") ));
						global::haxe.CallStack.itemToString(b, s);
					}
					
				}
				
				#line 176 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
				return b.toString();
			}
			#line default
		}
		
		
		public static   void itemToString(global::StringBuf b, global::haxe.StackItem s){
			unchecked {
				#line 180 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
				switch (global::Type.enumIndex(s)){
					case 0:
					{
						#line 182 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						b.b.Append(((object) ("a C function") ));
						#line 182 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						break;
					}
					
					
					case 1:
					{
						#line 180 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						string m = global::haxe.lang.Runtime.toString(s.@params[0]);
						#line 183 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						{
							#line 184 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
							b.b.Append(((object) ("module ") ));
							b.b.Append(((object) (global::Std.@string(m)) ));
						}
						
						#line 183 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						break;
					}
					
					
					case 2:
					{
						#line 180 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						int line = ((int) (global::haxe.lang.Runtime.toInt(s.@params[2])) );
						#line 180 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						string file = global::haxe.lang.Runtime.toString(s.@params[1]);
						#line 180 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						global::haxe.StackItem s1 = ((global::haxe.StackItem) (s.@params[0]) );
						#line 186 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						{
							#line 187 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
							if (( s1 != default(global::haxe.StackItem) )) {
								#line 188 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
								global::haxe.CallStack.itemToString(b, s1);
								b.b.Append(((object) (" (") ));
							}
							
							#line 191 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
							b.b.Append(((object) (global::Std.@string(file)) ));
							b.b.Append(((object) (" line ") ));
							b.b.Append(((object) (global::Std.@string(line)) ));
							if (( s1 != default(global::haxe.StackItem) )) {
								#line 194 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
								b.b.Append(((object) (")") ));
							}
							
						}
						
						#line 186 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						break;
					}
					
					
					case 3:
					{
						#line 180 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						string meth = global::haxe.lang.Runtime.toString(s.@params[1]);
						#line 180 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						string cname = global::haxe.lang.Runtime.toString(s.@params[0]);
						#line 195 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						{
							#line 196 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
							b.b.Append(((object) (global::Std.@string(cname)) ));
							b.b.Append(((object) (".") ));
							b.b.Append(((object) (global::Std.@string(meth)) ));
						}
						
						#line 195 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						break;
					}
					
					
					case 4:
					{
						#line 180 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						int n = ((int) (global::haxe.lang.Runtime.toInt(s.@params[0])) );
						#line 199 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						{
							#line 200 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
							b.b.Append(((object) ("local function #") ));
							b.b.Append(((object) (global::Std.@string(n)) ));
						}
						
						#line 199 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						break;
					}
					
					
				}
				
			}
			#line default
		}
		
		
		public static   global::Array<object> makeStack(global::System.Diagnostics.StackTrace s){
			unchecked {
				#line 286 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
				global::Array<object> stack = new global::Array<object>(new object[]{});
				{
					#line 287 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
					int _g1 = 0;
					#line 287 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
					int _g = s.FrameCount;
					#line 287 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
					while (( _g1 < _g )){
						#line 287 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						int i = _g1++;
						#line 289 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						global::System.Diagnostics.StackFrame frame = s.GetFrame(((int) (i) ));
						global::System.Reflection.MethodBase m = frame.GetMethod();
						#line 292 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						global::haxe.StackItem method = global::haxe.StackItem.Method(( ( m as global::System.Reflection.MemberInfo ).ReflectedType as global::System.Reflection.MemberInfo ).ToString(), ( m as global::System.Reflection.MemberInfo ).Name);
						#line 294 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						string fileName = frame.GetFileName();
						int lineNumber = frame.GetFileLineNumber();
						#line 297 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
						if ((  ! (string.Equals(fileName, default(string)))  || ( lineNumber >= 0 ) )) {
							#line 298 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
							stack.push(global::haxe.StackItem.FilePos(method, fileName, lineNumber));
						}
						 else {
							#line 300 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
							stack.push(method);
						}
						
					}
					
				}
				
				#line 302 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
				return stack;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 38 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
				return new global::haxe.CallStack(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 38 "F:\\HaxeToolkit\\haxe\\std\\haxe\\CallStack.hx"
				return new global::haxe.CallStack();
			}
			#line default
		}
		
		
	}
}


