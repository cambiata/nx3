
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PScoreSystemsGenerator : global::haxe.lang.HxObject {
		public    PScoreSystemsGenerator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PScoreSystemsGenerator(global::Array<object> bars){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
				global::nx3.PScoreSystemsGenerator.__hx_ctor_nx3_PScoreSystemsGenerator(this, bars);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PScoreSystemsGenerator(global::nx3.PScoreSystemsGenerator __temp_me115, global::Array<object> bars){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
				__temp_me115.bars = bars;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
				return new global::nx3.PScoreSystemsGenerator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
				return new global::nx3.PScoreSystemsGenerator(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> bars;
		
		public virtual   global::Array<object> getsSystems(global::Array<double> systemwidths){
			unchecked {
				#line 23 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
				global::Array<object> tempbars = this.bars.copy();
				global::Array<object> result = new global::Array<object>();
				int sysidx = 0;
				object prevbarAttributes = default(object);
				while (( tempbars.length > 0 )){
					#line 29 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
					double syswidth = default(double);
					#line 29 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
					if ((( (( ( sysidx < 0 ) || ( sysidx > ( systemwidths.length - 1 ) ) )) ? (default(global::haxe.lang.Null<double>)) : (new global::haxe.lang.Null<double>(systemwidths[sysidx], true)) )).hasValue) {
						#line 29 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
						syswidth = systemwidths[sysidx];
					}
					 else {
						#line 29 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
						syswidth = systemwidths[0];
					}
					
					#line 30 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
					global::nx3.PSystemGenerator generator = new global::nx3.PSystemGenerator(((global::Array<object>) (tempbars) ), ((object) (new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{480140652, 1756293853, 1944669088}), new global::Array<object>(new object[]{true, true, ( sysidx == 0 )}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}))) ), ((object) (prevbarAttributes) ), ((double) (syswidth) ), ((global::nx3.IBarWidthCalculator) (new global::nx3.PBarWidthCalculator()) ));
					global::nx3.PSystem system = generator.getSystem();
					prevbarAttributes = system.getLastBarAttributes();
					result.push(system);
					sysidx++;
				}
				
				#line 37 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
				return result;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
				switch (hash){
					case 1091626816:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
						this.bars = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
				switch (hash){
					case 1587408135:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getsSystems") ), ((int) (1587408135) ))) );
					}
					
					
					case 1091626816:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
						return this.bars;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
				switch (hash){
					case 1587408135:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
						return this.getsSystems(((global::Array<double>) (global::Array<object>.__hx_cast<double>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
				baseArr.push("bars");
				#line 11 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
				{
					#line 11 "F:\\nx3\\src\\nx3\\PScoreSystemsGenerator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


