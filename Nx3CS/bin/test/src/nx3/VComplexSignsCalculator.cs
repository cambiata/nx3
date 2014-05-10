
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VComplexSignsCalculator : global::haxe.lang.HxObject {
		public    VComplexSignsCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VComplexSignsCalculator(global::Array<object> vnotes){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				global::nx3.VComplexSignsCalculator.__hx_ctor_nx3_VComplexSignsCalculator(this, vnotes);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VComplexSignsCalculator(global::nx3.VComplexSignsCalculator __temp_me171, global::Array<object> vnotes){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				__temp_me171.vnotes = vnotes;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				return new global::nx3.VComplexSignsCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				return new global::nx3.VComplexSignsCalculator(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> vnotes;
		
		public virtual   global::Array<object> getSigns(){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				global::Array<object> signs = default(global::Array<object>);
				signs = this.calcUnsortedSigns(this.vnotes);
				signs = this.calcSortSigns(signs);
				return signs;
			}
			#line default
		}
		
		
		public  global::Array<object> visibleSigns;
		
		public virtual   global::Array<object> getVisibleSigns(){
			unchecked {
				#line 31 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				return this.calcVisibleSigns(this.getSigns());
			}
			#line default
		}
		
		
		public virtual   global::Array<object> calcVisibleSigns(global::Array<object> signs){
			unchecked {
				#line 38 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				global::Array<object> visibleSigns = new global::Array<object>(new object[]{});
				{
					#line 39 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
					int _g = 0;
					#line 39 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
					while (( _g < signs.length )){
						#line 39 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						object sign = signs[_g];
						#line 39 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						 ++ _g;
						#line 41 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						if (( ((global::nx3.ESign) (global::haxe.lang.Runtime.getField(sign, "sign", 1280544829, true)) ) == global::nx3.ESign.None )) {
							#line 41 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
							continue;
						}
						
						#line 42 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						visibleSigns.push(sign);
					}
					
				}
				
				#line 44 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				return visibleSigns;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> calcUnsortedSigns(global::Array<object> vnotes){
			unchecked {
				#line 49 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				global::Array<object> vsigns = new global::Array<object>(new object[]{});
				{
					#line 50 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
					int _g = 0;
					#line 50 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
					while (( _g < vnotes.length )){
						#line 50 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						global::nx3.VNote vnote = ((global::nx3.VNote) (vnotes[_g]) );
						#line 50 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						 ++ _g;
						#line 52 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						{
							#line 52 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
							int _g1 = 0;
							#line 52 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
							global::Array<object> _g2 = vnote.nnote.get_nheads();
							#line 52 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
							while (( _g1 < _g2.length )){
								#line 52 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
								global::nx3.NHead nhead = ((global::nx3.NHead) (_g2[_g1]) );
								#line 52 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
								 ++ _g1;
								#line 54 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
								object tsign = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{1280544829}), new global::Array<object>(new object[]{nhead.sign}), new global::Array<int>(new int[]{1257939113, 1919096196}), new global::Array<double>(new double[]{((double) (0) ), ((double) (nhead.level) )}));
								#line 59 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
								vsigns.push(tsign);
							}
							
						}
						
					}
					
				}
				
				#line 62 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				return vsigns;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> calcSortSigns(global::Array<object> vsigns){
			unchecked {
				#line 67 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				vsigns.sort(( (( global::nx3.VComplexSignsCalculator_calcSortSigns_67__Fun.__hx_current != default(global::nx3.VComplexSignsCalculator_calcSortSigns_67__Fun) )) ? (global::nx3.VComplexSignsCalculator_calcSortSigns_67__Fun.__hx_current) : (global::nx3.VComplexSignsCalculator_calcSortSigns_67__Fun.__hx_current = ((global::nx3.VComplexSignsCalculator_calcSortSigns_67__Fun) (new global::nx3.VComplexSignsCalculator_calcSortSigns_67__Fun()) )) ));
				#line 70 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				return vsigns;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				switch (hash){
					case 1917829060:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						this.visibleSigns = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						return @value;
					}
					
					
					case 1307013131:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						this.vnotes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				switch (hash){
					case 1152124419:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcSortSigns") ), ((int) (1152124419) ))) );
					}
					
					
					case 1007933835:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcUnsortedSigns") ), ((int) (1007933835) ))) );
					}
					
					
					case 1340682233:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcVisibleSigns") ), ((int) (1340682233) ))) );
					}
					
					
					case 356128122:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVisibleSigns") ), ((int) (356128122) ))) );
					}
					
					
					case 1917829060:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						return this.visibleSigns;
					}
					
					
					case 1554101536:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSigns") ), ((int) (1554101536) ))) );
					}
					
					
					case 1307013131:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						return this.vnotes;
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				switch (hash){
					case 1152124419:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						return this.calcSortSigns(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 1007933835:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						return this.calcUnsortedSigns(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 1340682233:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						return this.calcVisibleSigns(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 356128122:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						return this.getVisibleSigns();
					}
					
					
					case 1554101536:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						return this.getSigns();
					}
					
					
					default:
					{
						#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				baseArr.push("visibleSigns");
				#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				baseArr.push("vnotes");
				#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				{
					#line 9 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VComplexSignsCalculator_calcSortSigns_67__Fun : global::haxe.lang.Function {
		public    VComplexSignsCalculator_calcSortSigns_67__Fun() : base(2, 1){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::nx3.VComplexSignsCalculator_calcSortSigns_67__Fun __hx_current;
		
		public override   double __hx_invoke2_f(double __fn_float1, object __fn_dyn1, double __fn_float2, object __fn_dyn2){
			unchecked {
				#line 67 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				object b = ( (global::haxe.lang.Runtime.eq(__fn_dyn2, global::haxe.lang.Runtime.undefined)) ? (((object) (__fn_float2) )) : (((object) (__fn_dyn2) )) );
				#line 67 "F:\\nx3\\src\\nx3\\VComplexSignsCalculator.hx"
				object a = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (((object) (__fn_float1) )) : (((object) (__fn_dyn1) )) );
				return ((double) (global::Reflect.compare<int>(((int) (global::haxe.lang.Runtime.getField_f(a, "level", 1919096196, true)) ), ((int) (global::haxe.lang.Runtime.getField_f(b, "level", 1919096196, true)) ))) );
			}
			#line default
		}
		
		
	}
}


