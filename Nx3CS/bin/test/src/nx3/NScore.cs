
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class NScore : global::haxe.lang.HxObject {
		public    NScore(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    NScore(global::Array<object> nbars){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\NScore.hx"
				global::nx3.NScore.__hx_ctor_nx3_NScore(this, nbars);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_NScore(global::nx3.NScore __temp_me72, global::Array<object> nbars){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\NScore.hx"
				__temp_me72.nbars = nbars;
				{
					#line 20 "F:\\nx3\\src\\nx3\\NScore.hx"
					int _g = 0;
					#line 20 "F:\\nx3\\src\\nx3\\NScore.hx"
					while (( _g < nbars.length )){
						#line 20 "F:\\nx3\\src\\nx3\\NScore.hx"
						global::nx3.NBar bar = ((global::nx3.NBar) (nbars[_g]) );
						#line 20 "F:\\nx3\\src\\nx3\\NScore.hx"
						 ++ _g;
						#line 20 "F:\\nx3\\src\\nx3\\NScore.hx"
						bar.nscore = __temp_me72;
					}
					
				}
				
				#line 21 "F:\\nx3\\src\\nx3\\NScore.hx"
				__temp_me72.configuration = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{}), new global::Array<object>(new object[]{}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}));
				global::haxe.lang.Runtime.setField(__temp_me72.configuration, "test", 1291438162, 123);
				global::haxe.lang.Runtime.setField(__temp_me72.configuration, "rtempo", 574624041, 80);
				global::haxe.lang.Runtime.setField(__temp_me72.configuration, "rlength", 597063384, 3);
				global::haxe.lang.Runtime.setField(__temp_me72.configuration, "rcountin", 365986882, 2);
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
				return new global::nx3.NScore(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
				return new global::nx3.NScore(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> nbars;
		
		public  object configuration;
		
		public virtual   global::nx3.NBar getNBar(int idx){
			unchecked {
				#line 28 "F:\\nx3\\src\\nx3\\NScore.hx"
				if (( ( idx < 0 ) || ( idx > this.nbars.length ) )) {
					#line 28 "F:\\nx3\\src\\nx3\\NScore.hx"
					return default(global::nx3.NBar);
				}
				 else {
					#line 28 "F:\\nx3\\src\\nx3\\NScore.hx"
					return ((global::nx3.NBar) (this.nbars[idx]) );
				}
				
			}
			#line default
		}
		
		
		public virtual   object iterator(){
			unchecked {
				#line 30 "F:\\nx3\\src\\nx3\\NScore.hx"
				return ((object) (new global::_Array.ArrayIterator<object>(((global::Array<object>) (this.nbars) ))) );
			}
			#line default
		}
		
		
		public  int length;
		
		public virtual   int get_length(){
			unchecked {
				#line 32 "F:\\nx3\\src\\nx3\\NScore.hx"
				return this.nbars.length;
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
				switch (hash){
					case 520590566:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						this.length = ((int) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return @value;
					}
					
					
					case 1037590710:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						this.configuration = ((object) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return @value;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
				switch (hash){
					case 520590566:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						this.length = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return @value;
					}
					
					
					case 1037590710:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						this.configuration = ((object) (@value) );
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return @value;
					}
					
					
					case 388282030:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						this.nbars = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return @value;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
				switch (hash){
					case 261031087:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_length") ), ((int) (261031087) ))) );
					}
					
					
					case 520590566:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						if (handleProperties) {
							#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
							return this.get_length();
						}
						 else {
							#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
							return this.length;
						}
						
					}
					
					
					case 328878574:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("iterator") ), ((int) (328878574) ))) );
					}
					
					
					case 459968955:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNBar") ), ((int) (459968955) ))) );
					}
					
					
					case 1037590710:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return this.configuration;
					}
					
					
					case 388282030:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return this.nbars;
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
				switch (hash){
					case 520590566:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						if (handleProperties) {
							#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
							return ((double) (this.get_length()) );
						}
						 else {
							#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
							return ((double) (this.length) );
						}
						
					}
					
					
					case 1037590710:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return ((double) (global::haxe.lang.Runtime.toDouble(this.configuration)) );
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
				switch (hash){
					case 261031087:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return this.get_length();
					}
					
					
					case 328878574:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return this.iterator();
					}
					
					
					case 459968955:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return this.getNBar(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ));
					}
					
					
					default:
					{
						#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
				baseArr.push("length");
				#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
				baseArr.push("configuration");
				#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
				baseArr.push("nbars");
				#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
				{
					#line 10 "F:\\nx3\\src\\nx3\\NScore.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


