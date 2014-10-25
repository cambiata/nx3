
#pragma warning disable 109, 114, 219, 429, 168, 162
public  class List<T> : global::haxe.lang.HxObject, global::List {
	public    List(global::haxe.lang.EmptyObject empty){
		unchecked {
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			{
			}
			
		}
		#line default
	}
	
	
	public    List(){
		unchecked {
			#line 40 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			global::List<object>.__hx_ctor__List<T>(this);
		}
		#line default
	}
	
	
	public static   void __hx_ctor__List<T_c>(global::List<T_c> __temp_me7){
		unchecked {
			#line 41 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			__temp_me7.length = 0;
		}
		#line default
	}
	
	
	public static   object __hx_cast<T_c_c>(global::List me){
		unchecked {
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			return ( (( me != default(global::List) )) ? (me.List_cast<T_c_c>()) : (default(global::List)) );
		}
		#line default
	}
	
	
	public static  new object __hx_createEmpty(){
		unchecked {
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			return new global::List<object>(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
		}
		#line default
	}
	
	
	public static  new object __hx_create(global::Array arr){
		unchecked {
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			return new global::List<object>();
		}
		#line default
	}
	
	
	public virtual   object List_cast<T_c>(){
		unchecked {
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			if (global::haxe.lang.Runtime.eq(typeof(T), typeof(T_c))) {
				#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
				return this;
			}
			
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			global::List<T_c> new_me = new global::List<T_c>(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			{
				#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
				object __temp_iterator150 = global::Reflect.fields(this).iterator();
				#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
				while (global::haxe.lang.Runtime.toBool(global::haxe.lang.Runtime.callField(__temp_iterator150, "hasNext", 407283053, default(global::Array)))){
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					string field = global::haxe.lang.Runtime.toString(global::haxe.lang.Runtime.callField(__temp_iterator150, "next", 1224901875, default(global::Array)));
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					switch (field){
						default:
						{
							#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
							global::Reflect.setField(new_me, field, ((object) (global::Reflect.field(this, field)) ));
							#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
							break;
						}
						
					}
					
				}
				
			}
			
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			return new_me;
		}
		#line default
	}
	
	
	public  global::Array h;
	
	public  global::Array q;
	
	public  int length;
	
	public virtual   void @add(T item){
		unchecked {
			#line 50 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			global::Array x = new global::Array<object>(new object[]{item});
			if (( this.h == default(global::Array) )) {
				#line 52 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
				this.h = x;
			}
			 else {
				#line 54 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
				this.q[1] = x;
			}
			
			#line 55 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			this.q = x;
			this.length++;
		}
		#line default
	}
	
	
	public virtual   object iterator(){
		unchecked {
			#line 163 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			global::Array<object> h = new global::Array<object>(new object[]{this.h});
			object __temp_stmt171 = default(object);
			#line 164 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			{
				#line 165 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
				global::haxe.lang.Function __temp_odecl169 = new global::List_iterator_165__Fun(((global::Array<object>) (h) ));
				#line 168 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
				global::haxe.lang.Function __temp_odecl170 = new global::List_iterator_168__Fun(((global::Array<object>) (h) ));
				#line 164 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
				__temp_stmt171 = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{407283053, 1224901875}), new global::Array<object>(new object[]{__temp_odecl169, __temp_odecl170}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}));
			}
			
			#line 164 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			return ((object) (__temp_stmt171) );
		}
		#line default
	}
	
	
	public virtual   global::List<X> map<X>(global::haxe.lang.Function f){
		unchecked {
			#line 260 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			global::List<X> b = new global::List<X>();
			global::Array l = this.h;
			while (( l != default(global::Array) )){
				#line 263 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
				T v = global::haxe.lang.Runtime.genericCast<T>(l[0]);
				l = ((global::Array) (l[1]) );
				b.@add(global::haxe.lang.Runtime.genericCast<X>(f.__hx_invoke1_o(default(double), v)));
			}
			
			#line 267 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			return b;
		}
		#line default
	}
	
	
	public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
		unchecked {
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			switch (hash){
				case 520590566:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					this.length = ((int) (@value) );
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return @value;
				}
				
				
				default:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return base.__hx_setField_f(field, hash, @value, handleProperties);
				}
				
			}
			
		}
		#line default
	}
	
	
	public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
		unchecked {
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			switch (hash){
				case 520590566:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					this.length = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return @value;
				}
				
				
				case 113:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					this.q = ((global::Array) (@value) );
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return @value;
				}
				
				
				case 104:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					this.h = ((global::Array) (@value) );
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return @value;
				}
				
				
				default:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return base.__hx_setField(field, hash, @value, handleProperties);
				}
				
			}
			
		}
		#line default
	}
	
	
	public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
		unchecked {
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			switch (hash){
				case 5442204:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("map") ), ((int) (5442204) ))) );
				}
				
				
				case 328878574:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("iterator") ), ((int) (328878574) ))) );
				}
				
				
				case 4846113:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("add") ), ((int) (4846113) ))) );
				}
				
				
				case 520590566:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return this.length;
				}
				
				
				case 113:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return this.q;
				}
				
				
				case 104:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return this.h;
				}
				
				
				default:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
				}
				
			}
			
		}
		#line default
	}
	
	
	public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
		unchecked {
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			switch (hash){
				case 520590566:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return ((double) (this.length) );
				}
				
				
				default:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
				}
				
			}
			
		}
		#line default
	}
	
	
	public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
		unchecked {
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			switch (hash){
				case 5442204:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return this.map<object>(((global::haxe.lang.Function) (dynargs[0]) ));
				}
				
				
				case 328878574:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return this.iterator();
				}
				
				
				case 4846113:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					this.@add(global::haxe.lang.Runtime.genericCast<T>(dynargs[0]));
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					break;
				}
				
				
				default:
				{
					#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
					return base.__hx_invokeField(field, hash, dynargs);
				}
				
			}
			
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			return default(object);
		}
		#line default
	}
	
	
	public override   void __hx_getFields(global::Array<object> baseArr){
		unchecked {
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			baseArr.push("length");
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			baseArr.push("q");
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			baseArr.push("h");
			#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			{
				#line 27 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
				base.__hx_getFields(baseArr);
			}
			
		}
		#line default
	}
	
	
}



#pragma warning disable 109, 114, 219, 429, 168, 162
public  class List_iterator_165__Fun : global::haxe.lang.Function {
	public    List_iterator_165__Fun(global::Array<object> h) : base(0, 0){
		unchecked {
			#line 166 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			this.h = h;
		}
		#line default
	}
	
	
	public override   object __hx_invoke0_o(){
		unchecked {
			#line 166 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			return ( ((global::Array) (this.h[0]) ) != default(global::Array) );
		}
		#line default
	}
	
	
	public  global::Array<object> h;
	
}



#pragma warning disable 109, 114, 219, 429, 168, 162
public  class List_iterator_168__Fun : global::haxe.lang.Function {
	public    List_iterator_168__Fun(global::Array<object> h) : base(0, 0){
		unchecked {
			#line 169 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			this.h = h;
		}
		#line default
	}
	
	
	public override   object __hx_invoke0_o(){
		unchecked {
			#line 170 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			if (( ((global::Array) (this.h[0]) ) == default(global::Array) )) {
				#line 171 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
				return default(object);
			}
			
			#line 172 "F:\\HaxeToolkit\\haxe\\std\\List.hx"
			object x = ((global::Array) (this.h[0]) )[0];
			this.h[0] = ((global::Array) (this.h[0]) )[1];
			return x;
		}
		#line default
	}
	
	
	public  global::Array<object> h;
	
}



#pragma warning disable 109, 114, 219, 429, 168, 162
public  interface List : global::haxe.lang.IHxObject, global::haxe.lang.IGenericObject {
	   object List_cast<T_c>();
	
}


