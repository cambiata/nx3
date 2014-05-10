
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PSignsCalculator : global::haxe.lang.HxObject {
		public    PSignsCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PSignsCalculator(global::Array<object> notes){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				global::nx3.PSignsCalculator.__hx_ctor_nx3_PSignsCalculator(this, notes);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PSignsCalculator(global::nx3.PSignsCalculator __temp_me116, global::Array<object> notes){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				__temp_me116.notes = notes;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				return new global::nx3.PSignsCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				return new global::nx3.PSignsCalculator(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> notes;
		
		public virtual   global::Array<object> getSigns(){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				global::Array<object> signs = default(global::Array<object>);
				signs = this.calcUnsortedSigns(this.notes);
				signs = this.calcSortSigns(signs);
				return signs;
			}
			#line default
		}
		
		
		public  global::Array<object> visibleSigns;
		
		public virtual   global::Array<object> getVisibleSigns(){
			unchecked {
				#line 27 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				return this.calcVisibleSigns(this.getSigns());
			}
			#line default
		}
		
		
		public virtual   global::Array<object> calcVisibleSigns(global::Array<object> signs){
			unchecked {
				#line 34 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				global::Array<object> visibleSigns = new global::Array<object>(new object[]{});
				{
					#line 35 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
					int _g = 0;
					#line 35 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
					while (( _g < signs.length )){
						#line 35 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						object sign = signs[_g];
						#line 35 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						 ++ _g;
						#line 37 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						if (( ((global::nx3.ESign) (global::haxe.lang.Runtime.getField(sign, "sign", 1280544829, true)) ) == global::nx3.ESign.None )) {
							#line 37 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
							continue;
						}
						
						#line 38 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						visibleSigns.push(sign);
					}
					
				}
				
				#line 40 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				return visibleSigns;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> calcUnsortedSigns(global::Array<object> notes){
			unchecked {
				#line 45 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				global::Array<object> vsigns = new global::Array<object>(new object[]{});
				{
					#line 46 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
					int _g = 0;
					#line 46 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
					while (( _g < notes.length )){
						#line 46 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						global::nx3.PNote note = ((global::nx3.PNote) (notes[_g]) );
						#line 46 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						 ++ _g;
						#line 48 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						{
							#line 48 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
							int _g1 = 0;
							#line 48 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
							global::Array<object> _g2 = note.nnote.get_nheads();
							#line 48 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
							while (( _g1 < _g2.length )){
								#line 48 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
								global::nx3.NHead nhead = ((global::nx3.NHead) (_g2[_g1]) );
								#line 48 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
								 ++ _g1;
								#line 50 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
								object tsign = new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{1280544829}), new global::Array<object>(new object[]{nhead.sign}), new global::Array<int>(new int[]{1257939113, 1919096196}), new global::Array<double>(new double[]{((double) (0) ), ((double) (nhead.level) )}));
								#line 55 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
								vsigns.push(tsign);
							}
							
						}
						
					}
					
				}
				
				#line 58 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				return vsigns;
			}
			#line default
		}
		
		
		public virtual   global::Array<object> calcSortSigns(global::Array<object> vsigns){
			unchecked {
				#line 63 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				vsigns.sort(( (( global::nx3.PSignsCalculator_calcSortSigns_63__Fun.__hx_current != default(global::nx3.PSignsCalculator_calcSortSigns_63__Fun) )) ? (global::nx3.PSignsCalculator_calcSortSigns_63__Fun.__hx_current) : (global::nx3.PSignsCalculator_calcSortSigns_63__Fun.__hx_current = ((global::nx3.PSignsCalculator_calcSortSigns_63__Fun) (new global::nx3.PSignsCalculator_calcSortSigns_63__Fun()) )) ));
				#line 66 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				return vsigns;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				switch (hash){
					case 1917829060:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						this.visibleSigns = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						return @value;
					}
					
					
					case 533388353:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						this.notes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				switch (hash){
					case 1152124419:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcSortSigns") ), ((int) (1152124419) ))) );
					}
					
					
					case 1007933835:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcUnsortedSigns") ), ((int) (1007933835) ))) );
					}
					
					
					case 1340682233:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcVisibleSigns") ), ((int) (1340682233) ))) );
					}
					
					
					case 356128122:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVisibleSigns") ), ((int) (356128122) ))) );
					}
					
					
					case 1917829060:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						return this.visibleSigns;
					}
					
					
					case 1554101536:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSigns") ), ((int) (1554101536) ))) );
					}
					
					
					case 533388353:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						return this.notes;
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				switch (hash){
					case 1152124419:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						return this.calcSortSigns(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 1007933835:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						return this.calcUnsortedSigns(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 1340682233:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						return this.calcVisibleSigns(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 356128122:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						return this.getVisibleSigns();
					}
					
					
					case 1554101536:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						return this.getSigns();
					}
					
					
					default:
					{
						#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				baseArr.push("visibleSigns");
				#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				baseArr.push("notes");
				#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				{
					#line 7 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PSignsCalculator_calcSortSigns_63__Fun : global::haxe.lang.Function {
		public    PSignsCalculator_calcSortSigns_63__Fun() : base(2, 1){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::nx3.PSignsCalculator_calcSortSigns_63__Fun __hx_current;
		
		public override   double __hx_invoke2_f(double __fn_float1, object __fn_dyn1, double __fn_float2, object __fn_dyn2){
			unchecked {
				#line 63 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				object b = ( (global::haxe.lang.Runtime.eq(__fn_dyn2, global::haxe.lang.Runtime.undefined)) ? (((object) (__fn_float2) )) : (((object) (__fn_dyn2) )) );
				#line 63 "F:\\nx3\\src\\nx3\\PSignsCalculator.hx"
				object a = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (((object) (__fn_float1) )) : (((object) (__fn_dyn1) )) );
				return ((double) (global::Reflect.compare<int>(((int) (global::haxe.lang.Runtime.getField_f(a, "level", 1919096196, true)) ), ((int) (global::haxe.lang.Runtime.getField_f(b, "level", 1919096196, true)) ))) );
			}
			#line default
		}
		
		
	}
}


