
#pragma warning disable 109, 114, 219, 429, 168, 162
public  class Lambda : global::haxe.lang.HxObject {
	public    Lambda(global::haxe.lang.EmptyObject empty){
		unchecked {
			#line 35 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
			{
			}
			
		}
		#line default
	}
	
	
	public    Lambda(){
		unchecked {
			#line 35 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
			global::Lambda.__hx_ctor__Lambda(this);
		}
		#line default
	}
	
	
	public static   void __hx_ctor__Lambda(global::Lambda __temp_me6){
		unchecked {
			#line 35 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
			{
			}
			
		}
		#line default
	}
	
	
	public static   global::Array<A> array<A>(object it){
		unchecked {
			#line 43 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
			global::Array<A> a = new global::Array<A>();
			{
				#line 44 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
				object __temp_iterator144 = ((object) (global::haxe.lang.Runtime.callField(it, "iterator", 328878574, default(global::Array))) );
				#line 44 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
				while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator144, "hasNext", 407283053, default(global::Array)))){
					#line 44 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
					A i = global::haxe.lang.Runtime.genericCast<A>(global::haxe.lang.Runtime.callField(__temp_iterator144, "next", 1224901875, default(global::Array)));
					a.push(i);
				}
				
			}
			
			#line 46 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
			return a;
		}
		#line default
	}
	
	
	public static   global::List<B> map<A, B>(object it, global::haxe.lang.Function f){
		unchecked {
			#line 69 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
			global::List<B> l = new global::List<B>();
			{
				#line 70 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
				object __temp_iterator145 = ((object) (global::haxe.lang.Runtime.callField(it, "iterator", 328878574, default(global::Array))) );
				#line 70 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
				while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator145, "hasNext", 407283053, default(global::Array)))){
					#line 70 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
					A x = global::haxe.lang.Runtime.genericCast<A>(global::haxe.lang.Runtime.callField(__temp_iterator145, "next", 1224901875, default(global::Array)));
					l.@add(global::haxe.lang.Runtime.genericCast<B>(f.__hx_invoke1_o(default(double), x)));
				}
				
			}
			
			#line 72 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
			return l;
		}
		#line default
	}
	
	
	public static   bool has<A>(object it, A elt){
		unchecked {
			#line 99 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
			{
				#line 99 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
				object __temp_iterator146 = ((object) (global::haxe.lang.Runtime.callField(it, "iterator", 328878574, default(global::Array))) );
				#line 99 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
				while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator146, "hasNext", 407283053, default(global::Array)))){
					#line 99 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
					A x = global::haxe.lang.Runtime.genericCast<A>(global::haxe.lang.Runtime.callField(__temp_iterator146, "next", 1224901875, default(global::Array)));
					if (global::haxe.lang.Runtime.eq(x, elt)) {
						#line 101 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
						return true;
					}
					
				}
				
			}
			
			#line 102 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
			return false;
		}
		#line default
	}
	
	
	public static   bool @foreach<A>(object it, global::haxe.lang.Function f){
		unchecked {
			#line 135 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
			{
				#line 135 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
				object __temp_iterator147 = ((object) (global::haxe.lang.Runtime.callField(it, "iterator", 328878574, default(global::Array))) );
				#line 135 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
				while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator147, "hasNext", 407283053, default(global::Array)))){
					#line 135 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
					A x = global::haxe.lang.Runtime.genericCast<A>(global::haxe.lang.Runtime.callField(__temp_iterator147, "next", 1224901875, default(global::Array)));
					if ( ! (global::haxe.lang.Runtime.toBool(f.__hx_invoke1_o(default(double), x))) ) {
						#line 137 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
						return false;
					}
					
				}
				
			}
			
			#line 138 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
			return true;
		}
		#line default
	}
	
	
	public static   global::List<A> filter<A>(object it, global::haxe.lang.Function f){
		unchecked {
			#line 160 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
			global::List<A> l = new global::List<A>();
			{
				#line 161 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
				object __temp_iterator148 = ((object) (global::haxe.lang.Runtime.callField(it, "iterator", 328878574, default(global::Array))) );
				#line 161 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
				while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator148, "hasNext", 407283053, default(global::Array)))){
					#line 161 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
					A x = global::haxe.lang.Runtime.genericCast<A>(global::haxe.lang.Runtime.callField(__temp_iterator148, "next", 1224901875, default(global::Array)));
					if (global::haxe.lang.Runtime.toBool(f.__hx_invoke1_o(default(double), x))) {
						#line 163 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
						l.@add(x);
					}
					
				}
				
			}
			
			#line 164 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
			return l;
		}
		#line default
	}
	
	
	public static   int indexOf<T>(object it, T v){
		unchecked {
			#line 218 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
			int i = 0;
			{
				#line 219 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
				object __temp_iterator149 = ((object) (global::haxe.lang.Runtime.callField(it, "iterator", 328878574, default(global::Array))) );
				#line 219 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
				while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator149, "hasNext", 407283053, default(global::Array)))){
					#line 219 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
					T v2 = global::haxe.lang.Runtime.genericCast<T>(global::haxe.lang.Runtime.callField(__temp_iterator149, "next", 1224901875, default(global::Array)));
					if (global::haxe.lang.Runtime.eq(v, v2)) {
						#line 221 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
						return i;
					}
					
					#line 222 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
					i++;
				}
				
			}
			
			#line 224 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
			return -1;
		}
		#line default
	}
	
	
	public static  new object __hx_createEmpty(){
		unchecked {
			#line 35 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
			return new global::Lambda(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
		}
		#line default
	}
	
	
	public static  new object __hx_create(global::Array arr){
		unchecked {
			#line 35 "F:\\HaxeToolkit\\haxe\\std\\Lambda.hx"
			return new global::Lambda();
		}
		#line default
	}
	
	
}


