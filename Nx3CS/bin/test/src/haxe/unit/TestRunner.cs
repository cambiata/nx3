
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace haxe.unit{
	public  class TestRunner : global::haxe.lang.HxObject {
		static TestRunner() {
			#line 35 "F:\\HaxeToolkit\\haxe\\std\\haxe\\unit\\TestRunner.hx"
			global::haxe.unit.TestRunner.print = ( (( global::haxe.unit.TestRunner_new_35__Fun.__hx_current != default(global::haxe.unit.TestRunner_new_35__Fun) )) ? (global::haxe.unit.TestRunner_new_35__Fun.__hx_current) : (global::haxe.unit.TestRunner_new_35__Fun.__hx_current = ((global::haxe.unit.TestRunner_new_35__Fun) (new global::haxe.unit.TestRunner_new_35__Fun()) )) );
		}
		public    TestRunner(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 25 "F:\\HaxeToolkit\\haxe\\std\\haxe\\unit\\TestRunner.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    TestRunner(){
			unchecked {
				#line 25 "F:\\HaxeToolkit\\haxe\\std\\haxe\\unit\\TestRunner.hx"
				global::haxe.unit.TestRunner.__hx_ctor_haxe_unit_TestRunner(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_haxe_unit_TestRunner(global::haxe.unit.TestRunner __temp_me58){
			unchecked {
				#line 25 "F:\\HaxeToolkit\\haxe\\std\\haxe\\unit\\TestRunner.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public static  global::haxe.lang.Function print;
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 25 "F:\\HaxeToolkit\\haxe\\std\\haxe\\unit\\TestRunner.hx"
				return new global::haxe.unit.TestRunner(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 25 "F:\\HaxeToolkit\\haxe\\std\\haxe\\unit\\TestRunner.hx"
				return new global::haxe.unit.TestRunner();
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace haxe.unit{
	public  class TestRunner_new_35__Fun : global::haxe.lang.Function {
		public    TestRunner_new_35__Fun() : base(1, 0){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::haxe.unit.TestRunner_new_35__Fun __hx_current;
		
		public override   object __hx_invoke1_o(double __fn_float1, object __fn_dyn1){
			unchecked {
				#line 35 "F:\\HaxeToolkit\\haxe\\std\\haxe\\unit\\TestRunner.hx"
				object v = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (((object) (__fn_float1) )) : (((object) (__fn_dyn1) )) );
				#line 83 "F:\\HaxeToolkit\\haxe\\std\\haxe\\unit\\TestRunner.hx"
				global::System.Console.Write(((object) (v) ));
				#line 83 "F:\\HaxeToolkit\\haxe\\std\\haxe\\unit\\TestRunner.hx"
				return default(object);
			}
			#line default
		}
		
		
	}
}


