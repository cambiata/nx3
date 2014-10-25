
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PColumnsAllotmentCalculator : global::haxe.lang.HxObject {
		static PColumnsAllotmentCalculator() {
			#line 43 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
			global::nx3.PColumnsAllotmentCalculator.delta = 0.5;
		}
		public    PColumnsAllotmentCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PColumnsAllotmentCalculator(global::nx3.PBar bar){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
				global::nx3.PColumnsAllotmentCalculator.__hx_ctor_nx3_PColumnsAllotmentCalculator(this, bar);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PColumnsAllotmentCalculator(global::nx3.PColumnsAllotmentCalculator __temp_me93, global::nx3.PBar bar){
			unchecked {
				#line 19 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
				__temp_me93.bar = bar;
				__temp_me93.spacing = bar.nbar.spacing;
				__temp_me93.bar.allottedDistanceSum = new global::haxe.lang.Null<double>(((double) (0) ), true);
			}
			#line default
		}
		
		
		public static  double delta;
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
				return new global::nx3.PColumnsAllotmentCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
				return new global::nx3.PColumnsAllotmentCalculator(((global::nx3.PBar) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PBar bar;
		
		public  double spacing;
		
		public virtual   void calculate(global::haxe.lang.Null<double> stretch){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
				double __temp_stretch92 = ( ( ! (stretch.hasValue) ) ? (((double) (0) )) : (stretch.@value) );
				double aposition = this.bar.getContentXZero();
				{
					#line 27 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
					int _g = 0;
					#line 27 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
					global::Array<object> _g1 = this.bar.getColumns();
					#line 27 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
					while (( _g < _g1.length )){
						#line 27 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						global::nx3.PColumn column = ((global::nx3.PColumn) (_g1[_g]) );
						#line 27 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						 ++ _g;
						#line 29 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						double dist = this.getADistance(column.getValue(), column);
						column.allottedDistance = dist;
						{
							#line 31 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
							global::nx3.PBar __temp_dynop161 = this.bar;
							#line 31 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
							__temp_dynop161.allottedDistanceSum = new global::haxe.lang.Null<double>(( __temp_dynop161.allottedDistanceSum.@value + dist ), true);
						}
						
						#line 33 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						double adistance = default(double);
						#line 33 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						{
							#line 33 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
							double a = column.getMDistance();
							#line 33 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
							adistance = global::System.Math.Max(((double) (a) ), ((double) (dist) ));
						}
						
						#line 35 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						double adistanceBenefit = default(double);
						#line 35 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						{
							#line 35 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
							double b = ( column.getMDistance() - dist );
							#line 35 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
							adistanceBenefit = global::System.Math.Max(((double) (0) ), ((double) (b) ));
						}
						
						#line 36 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						column.aposition = new global::haxe.lang.Null<double>(aposition, true);
						column.adistance = new global::haxe.lang.Null<double>(adistance, true);
						column.adistanceBenefit = new global::haxe.lang.Null<double>(adistanceBenefit, true);
						aposition += adistance;
					}
					
				}
				
			}
			#line default
		}
		
		
		public virtual   double getADistance(int val, global::nx3.PColumn column){
			unchecked {
				#line 46 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
				{
					#line 46 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
					global::nx3.EAllotment _g = this.bar.nbar.allotment;
					#line 46 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
					switch (global::Type.enumIndex(_g)){
						case 1:
						{
							#line 49 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
							return this.spacing;
						}
						
						
						case 0:
						{
							#line 51 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
							return column.getMDistance();
						}
						
						
						case 2:
						{
							#line 53 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
							return ( (( 0.5 + ( ( ((double) (val) ) / 3024 ) / 2 ) )) * this.spacing );
						}
						
						
						default:
						{
							#line 55 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
							return ( ( ((double) (val) ) / 3024 ) * this.spacing );
						}
						
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
				switch (hash){
					case 297481091:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						this.spacing = ((double) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
				switch (hash){
					case 297481091:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						this.spacing = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						return @value;
					}
					
					
					case 4895187:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						this.bar = ((global::nx3.PBar) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
				switch (hash){
					case 1115338048:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getADistance") ), ((int) (1115338048) ))) );
					}
					
					
					case 90871142:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calculate") ), ((int) (90871142) ))) );
					}
					
					
					case 297481091:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						return this.spacing;
					}
					
					
					case 4895187:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						return this.bar;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
				switch (hash){
					case 297481091:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						return this.spacing;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
				switch (hash){
					case 1115338048:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						return this.getADistance(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ), ((global::nx3.PColumn) (dynargs[1]) ));
					}
					
					
					case 90871142:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						this.calculate(global::haxe.lang.Null<object>.ofDynamic<double>(dynargs[0]));
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						break;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
				baseArr.push("spacing");
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
				baseArr.push("bar");
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
				{
					#line 12 "F:\\nx3\\src\\nx3\\PColumnsAllotmentCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


