
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PScoreSystemStretcher : global::haxe.lang.HxObject {
		public    PScoreSystemStretcher(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PScoreSystemStretcher(global::nx3.PSystem system){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
				global::nx3.PScoreSystemStretcher.__hx_ctor_nx3_PScoreSystemStretcher(this, system);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PScoreSystemStretcher(global::nx3.PScoreSystemStretcher __temp_me116, global::nx3.PSystem system){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
				__temp_me116.system = system;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
				return new global::nx3.PScoreSystemStretcher(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
				return new global::nx3.PScoreSystemStretcher(((global::nx3.PSystem) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PSystem system;
		
		public virtual   bool stretchTo(double stretchSystemToWidth, global::haxe.lang.Null<double> ifMoreThan){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
				double __temp_ifMoreThan115 = ( ( ! (ifMoreThan.hasValue) ) ? (((double) (0) )) : (ifMoreThan.@value) );
				if (( __temp_ifMoreThan115 > 0 )) {
					#line 21 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
					if (( this.system.getWidth() <= __temp_ifMoreThan115 )) {
						#line 21 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
						return true;
					}
					
				}
				
				#line 24 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
				double diff = ( stretchSystemToWidth - this.system.getWidth() );
				#line 26 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
				int totalvalue = this.system.getValue();
				#line 29 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
				{
					#line 29 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
					int _g = 0;
					#line 29 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
					global::Array<object> _g1 = this.system.getSystembars();
					#line 29 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
					while (( _g < _g1.length )){
						#line 29 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
						global::nx3.PSystemBar systembar = ((global::nx3.PSystemBar) (_g1[_g]) );
						#line 29 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
						 ++ _g;
						#line 31 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
						double stretchamount = ( ( ((double) (systembar.bar.getValue()) ) / totalvalue ) * diff );
						#line 33 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
						systembar.setBarStretch(stretchamount);
					}
					
				}
				
				#line 35 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
				this.system.calculateSystembarXs();
				#line 37 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
				return false;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
				switch (hash){
					case 1927452399:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
						this.system = ((global::nx3.PSystem) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
				switch (hash){
					case 539153120:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("stretchTo") ), ((int) (539153120) ))) );
					}
					
					
					case 1927452399:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
						return this.system;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
				switch (hash){
					case 539153120:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
						return this.stretchTo(((double) (global::haxe.lang.Runtime.toDouble(dynargs[0])) ), global::haxe.lang.Null<object>.ofDynamic<double>(dynargs[1]));
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
				baseArr.push("system");
				#line 8 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
				{
					#line 8 "F:\\nx3\\src\\nx3\\PScoreSystemStretcher.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


