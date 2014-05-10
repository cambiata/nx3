
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PSystem : global::haxe.lang.HxObject {
		public    PSystem(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PSystem(){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\PSystem.hx"
				global::nx3.PSystem.__hx_ctor_nx3_PSystem(this);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PSystem(global::nx3.PSystem __temp_me119){
			unchecked {
				#line 31 "F:\\nx3\\src\\nx3\\PSystem.hx"
				__temp_me119.systemBreakWidth = ((double) (0) );
				#line 12 "F:\\nx3\\src\\nx3\\PSystem.hx"
				__temp_me119.systembars = new global::Array<object>(new object[]{});
				__temp_me119.width = ((double) (0) );
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
				return new global::nx3.PSystem(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
				return new global::nx3.PSystem();
			}
			#line default
		}
		
		
		public  global::nx3.PSystemStatus status;
		
		public virtual   global::nx3.PSystemStatus getStatus(){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\PSystem.hx"
				return this.status;
			}
			#line default
		}
		
		
		public  double width;
		
		public virtual   double getWidth(){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\PSystem.hx"
				return this.width;
			}
			#line default
		}
		
		
		public  global::Array<object> systembars;
		
		public virtual   global::Array<object> getSystembars(){
			unchecked {
				#line 23 "F:\\nx3\\src\\nx3\\PSystem.hx"
				return this.systembars;
			}
			#line default
		}
		
		
		public virtual   object getLastBarAttributes(){
			unchecked {
				#line 27 "F:\\nx3\\src\\nx3\\PSystem.hx"
				if (( this.systembars.length == 0 )) {
					#line 27 "F:\\nx3\\src\\nx3\\PSystem.hx"
					return default(object);
				}
				
				#line 28 "F:\\nx3\\src\\nx3\\PSystem.hx"
				global::nx3.PSystemBar __temp_stmt259 = default(global::nx3.PSystemBar);
				#line 28 "F:\\nx3\\src\\nx3\\PSystem.hx"
				{
					#line 28 "F:\\nx3\\src\\nx3\\PSystem.hx"
					global::Array<object> array = this.systembars;
					#line 28 "F:\\nx3\\src\\nx3\\PSystem.hx"
					__temp_stmt259 = ((global::nx3.PSystemBar) (array[( array.length - 1 )]) );
				}
				
				#line 28 "F:\\nx3\\src\\nx3\\PSystem.hx"
				return __temp_stmt259.actAttributes;
			}
			#line default
		}
		
		
		public  double systemBreakWidth;
		
		public virtual   double getSystemBreakWidth(){
			unchecked {
				#line 32 "F:\\nx3\\src\\nx3\\PSystem.hx"
				return this.systemBreakWidth;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<int> @value;
		
		public virtual   int getValue(){
			unchecked {
				#line 38 "F:\\nx3\\src\\nx3\\PSystem.hx"
				if (this.@value.hasValue) {
					#line 38 "F:\\nx3\\src\\nx3\\PSystem.hx"
					return this.@value.@value;
				}
				
				#line 39 "F:\\nx3\\src\\nx3\\PSystem.hx"
				this.@value = new global::haxe.lang.Null<int>(0, true);
				{
					#line 40 "F:\\nx3\\src\\nx3\\PSystem.hx"
					int _g = 0;
					#line 40 "F:\\nx3\\src\\nx3\\PSystem.hx"
					global::Array<object> _g1 = this.getSystembars();
					#line 40 "F:\\nx3\\src\\nx3\\PSystem.hx"
					while (( _g < _g1.length )){
						#line 40 "F:\\nx3\\src\\nx3\\PSystem.hx"
						global::nx3.PSystemBar systembar = ((global::nx3.PSystemBar) (_g1[_g]) );
						#line 40 "F:\\nx3\\src\\nx3\\PSystem.hx"
						 ++ _g;
						#line 40 "F:\\nx3\\src\\nx3\\PSystem.hx"
						{
							#line 40 "F:\\nx3\\src\\nx3\\PSystem.hx"
							global::nx3.PSystem __temp_dynop169 = this;
							#line 40 "F:\\nx3\\src\\nx3\\PSystem.hx"
							__temp_dynop169.@value = new global::haxe.lang.Null<int>(( __temp_dynop169.@value.@value + systembar.bar.getValue() ), true);
						}
						
					}
					
				}
				
				#line 41 "F:\\nx3\\src\\nx3\\PSystem.hx"
				return this.@value.@value;
			}
			#line default
		}
		
		
		public virtual   void calculateSystembarXs(){
			unchecked {
				#line 46 "F:\\nx3\\src\\nx3\\PSystem.hx"
				double x = 0.0;
				{
					#line 47 "F:\\nx3\\src\\nx3\\PSystem.hx"
					int _g = 0;
					#line 47 "F:\\nx3\\src\\nx3\\PSystem.hx"
					global::Array<object> _g1 = this.getSystembars();
					#line 47 "F:\\nx3\\src\\nx3\\PSystem.hx"
					while (( _g < _g1.length )){
						#line 47 "F:\\nx3\\src\\nx3\\PSystem.hx"
						global::nx3.PSystemBar systemBar = ((global::nx3.PSystemBar) (_g1[_g]) );
						#line 47 "F:\\nx3\\src\\nx3\\PSystem.hx"
						 ++ _g;
						#line 49 "F:\\nx3\\src\\nx3\\PSystem.hx"
						global::haxe.lang.Runtime.setField_f(systemBar.getBarWidths(), "x", 120, ((double) (x) ));
						x += ((double) (global::haxe.lang.Runtime.getField_f(systemBar.getBarWidths(), "width", 1247983110, true)) );
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
				switch (hash){
					case 1054648470:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						this.systemBreakWidth = ((double) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return @value;
					}
					
					
					case 1247983110:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						this.width = ((double) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
				switch (hash){
					case 834174833:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						this.@value = global::haxe.lang.Null<object>.ofDynamic<int>(@value);
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return @value;
					}
					
					
					case 1054648470:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						this.systemBreakWidth = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return @value;
					}
					
					
					case 79372719:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						this.systembars = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return @value;
					}
					
					
					case 1247983110:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						this.width = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return @value;
					}
					
					
					case 100394802:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						this.status = ((global::nx3.PSystemStatus) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
				switch (hash){
					case 522064025:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calculateSystembarXs") ), ((int) (522064025) ))) );
					}
					
					
					case 294620923:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getValue") ), ((int) (294620923) ))) );
					}
					
					
					case 834174833:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return (this.@value).toDynamic();
					}
					
					
					case 2030244172:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSystemBreakWidth") ), ((int) (2030244172) ))) );
					}
					
					
					case 1054648470:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return this.systemBreakWidth;
					}
					
					
					case 1501250270:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getLastBarAttributes") ), ((int) (1501250270) ))) );
					}
					
					
					case 1630371301:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSystembars") ), ((int) (1630371301) ))) );
					}
					
					
					case 79372719:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return this.systembars;
					}
					
					
					case 708429200:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getWidth") ), ((int) (708429200) ))) );
					}
					
					
					case 1247983110:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return this.width;
					}
					
					
					case 38957160:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getStatus") ), ((int) (38957160) ))) );
					}
					
					
					case 100394802:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return this.status;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
				switch (hash){
					case 1054648470:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return this.systemBreakWidth;
					}
					
					
					case 1247983110:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return this.width;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
				switch (hash){
					case 522064025:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						this.calculateSystembarXs();
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						break;
					}
					
					
					case 294620923:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return this.getValue();
					}
					
					
					case 2030244172:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return this.getSystemBreakWidth();
					}
					
					
					case 1501250270:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return this.getLastBarAttributes();
					}
					
					
					case 1630371301:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return this.getSystembars();
					}
					
					
					case 708429200:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return this.getWidth();
					}
					
					
					case 38957160:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return this.getStatus();
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
				baseArr.push("value");
				#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
				baseArr.push("systemBreakWidth");
				#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
				baseArr.push("systembars");
				#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
				baseArr.push("width");
				#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
				baseArr.push("status");
				#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
				{
					#line 8 "F:\\nx3\\src\\nx3\\PSystem.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


