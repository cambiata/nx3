
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PColumnsGenerator : global::haxe.lang.HxObject {
		public    PColumnsGenerator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PColumnsGenerator(global::nx3.PBar bar){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				global::nx3.PColumnsGenerator.__hx_ctor_nx3_PColumnsGenerator(this, bar);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PColumnsGenerator(global::nx3.PColumnsGenerator __temp_me93, global::nx3.PBar bar){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				__temp_me93.bar = bar;
				__temp_me93.vparts = __temp_me93.bar.getParts();
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				return new global::nx3.PColumnsGenerator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				return new global::nx3.PColumnsGenerator(((global::nx3.PBar) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::Array<object> vparts;
		
		public  global::Array<int> positions;
		
		public  global::Array<object> columns;
		
		public  global::haxe.ds.IntMap<object> positionsColumns;
		
		public  global::nx3.PBar bar;
		
		public virtual   global::Array<object> getColumns(){
			unchecked {
				#line 28 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				if (( this.columns != default(global::Array<object>) )) {
					#line 28 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
					return this.columns;
				}
				
				#line 29 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				this.positions = this.calcPositions(this.vparts);
				this.calcColumns(this.positions, this.vparts);
				#line 33 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				return this.columns;
			}
			#line default
		}
		
		
		public virtual   void calcColumns(global::Array<int> positions, global::Array<object> vparts){
			unchecked {
				#line 55 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				int partsCount = vparts.length;
				this.columns = new global::Array<object>(new object[]{});
				this.positionsColumns = new global::haxe.ds.IntMap<object>();
				#line 59 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				int barvalue = this.bar.getValue();
				#line 61 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				int idx = 0;
				{
					#line 62 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
					int _g = 0;
					#line 62 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
					while (( _g < positions.length )){
						#line 62 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						int pos = positions[_g];
						#line 62 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						 ++ _g;
						#line 64 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						global::haxe.lang.Null<int> nextpos = default(global::haxe.lang.Null<int>);
						#line 64 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						{
							#line 64 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
							int idx1 = ( idx + 1 );
							#line 64 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
							if (( ( idx1 < 0 ) || ( idx1 > ( positions.length - 1 ) ) )) {
								#line 64 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
								nextpos = default(global::haxe.lang.Null<int>);
							}
							 else {
								#line 64 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
								nextpos = new global::haxe.lang.Null<int>(positions[idx1], true);
							}
							
						}
						
						#line 65 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						if ( ! (nextpos.hasValue) ) {
							#line 65 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
							nextpos = new global::haxe.lang.Null<int>(barvalue, true);
						}
						
						#line 66 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						int @value = ( nextpos.@value - pos );
						#line 68 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						global::Array<object> vcomplexes = new global::Array<object>(new object[]{});
						#line 70 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						{
							#line 70 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
							int _g2 = 0;
							#line 70 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
							int _g1 = this.vparts.length;
							#line 70 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
							while (( _g2 < _g1 )){
								#line 70 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
								int i = _g2++;
								#line 72 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
								global::nx3.PPart part = ((global::nx3.PPart) (this.vparts[i]) );
								global::haxe.ds.IntMap<object> x = part.getPositionsComplexes();
								#line 75 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
								global::nx3.PComplex complex = ((global::nx3.PComplex) (part.getPositionsComplexes().@get(pos).@value) );
								vcomplexes.push(complex);
							}
							
						}
						
						#line 79 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						global::nx3.PColumn vcolumn = new global::nx3.PColumn(((global::nx3.PBar) (this.bar) ), ((global::Array<object>) (vcomplexes) ), ((int) (pos) ), ((int) (@value) ));
						#line 82 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						this.columns.push(vcolumn);
						#line 85 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						{
							#line 85 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
							int _g11 = 0;
							#line 85 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
							while (( _g11 < vcomplexes.length )){
								#line 85 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
								global::nx3.PComplex complex1 = ((global::nx3.PComplex) (vcomplexes[_g11]) );
								#line 85 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
								 ++ _g11;
								#line 87 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
								if (( complex1 != default(global::nx3.PComplex) )) {
									#line 87 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
									complex1.column = vcolumn;
								}
								
							}
							
						}
						
						#line 89 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						this.positionsColumns.@set(pos, vcolumn);
						#line 92 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						idx++;
					}
					
				}
				
			}
			#line default
		}
		
		
		public virtual   global::Array<int> calcPositions(global::Array<object> vparts){
			unchecked {
				#line 99 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				global::haxe.ds.IntMap<bool> positionsMap = new global::haxe.ds.IntMap<bool>();
				#line 101 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				{
					#line 101 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
					int _g = 0;
					#line 101 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
					while (( _g < vparts.length )){
						#line 101 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						global::nx3.PPart vpart = ((global::nx3.PPart) (vparts[_g]) );
						#line 101 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						 ++ _g;
						#line 103 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						global::Array<int> poss = global::nx3.VMapTools.keysToArray<int>(vpart.getPositionsComplexes().keys()).copy();
						{
							#line 104 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
							int _g1 = 0;
							#line 104 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
							while (( _g1 < poss.length )){
								#line 104 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
								int pos = poss[_g1];
								#line 104 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
								 ++ _g1;
								#line 104 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
								positionsMap.@set(pos, true);
							}
							
						}
						
					}
					
				}
				
				#line 107 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				global::Array<int> positions = global::nx3.VMapTools.keysToArray<int>(positionsMap.keys());
				#line 109 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				positions.sort(( (( global::nx3.PColumnsGenerator_calcPositions_109__Fun.__hx_current != default(global::nx3.PColumnsGenerator_calcPositions_109__Fun) )) ? (global::nx3.PColumnsGenerator_calcPositions_109__Fun.__hx_current) : (global::nx3.PColumnsGenerator_calcPositions_109__Fun.__hx_current = ((global::nx3.PColumnsGenerator_calcPositions_109__Fun) (new global::nx3.PColumnsGenerator_calcPositions_109__Fun()) )) ));
				#line 111 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				return positions;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				switch (hash){
					case 4895187:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						this.bar = ((global::nx3.PBar) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return @value;
					}
					
					
					case 1783433811:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						this.positionsColumns = ((global::haxe.ds.IntMap<object>) (global::haxe.ds.IntMap<object>.__hx_cast<object>(((global::haxe.ds.IntMap) (@value) ))) );
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return @value;
					}
					
					
					case 1935256797:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						this.columns = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return @value;
					}
					
					
					case 1347548074:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						this.positions = ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (@value) ))) );
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return @value;
					}
					
					
					case 1802642666:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						this.vparts = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				switch (hash){
					case 264208469:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcPositions") ), ((int) (264208469) ))) );
					}
					
					
					case 255862984:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcColumns") ), ((int) (255862984) ))) );
					}
					
					
					case 1119564519:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getColumns") ), ((int) (1119564519) ))) );
					}
					
					
					case 4895187:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return this.bar;
					}
					
					
					case 1783433811:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return this.positionsColumns;
					}
					
					
					case 1935256797:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return this.columns;
					}
					
					
					case 1347548074:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return this.positions;
					}
					
					
					case 1802642666:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return this.vparts;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				switch (hash){
					case 264208469:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return this.calcPositions(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 255862984:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						this.calcColumns(((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (dynargs[0]) ))) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[1]) ))) ));
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						break;
					}
					
					
					case 1119564519:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return this.getColumns();
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				baseArr.push("bar");
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				baseArr.push("positionsColumns");
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				baseArr.push("columns");
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				baseArr.push("positions");
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				baseArr.push("vparts");
				#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				{
					#line 12 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PColumnsGenerator_calcPositions_109__Fun : global::haxe.lang.Function {
		public    PColumnsGenerator_calcPositions_109__Fun() : base(2, 1){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::nx3.PColumnsGenerator_calcPositions_109__Fun __hx_current;
		
		public override   double __hx_invoke2_f(double __fn_float1, object __fn_dyn1, double __fn_float2, object __fn_dyn2){
			unchecked {
				#line 109 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				int b = ( (global::haxe.lang.Runtime.eq(__fn_dyn2, global::haxe.lang.Runtime.undefined)) ? (((int) (__fn_float2) )) : (((int) (global::haxe.lang.Runtime.toInt(__fn_dyn2)) )) );
				#line 109 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				int a = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (((int) (__fn_float1) )) : (((int) (global::haxe.lang.Runtime.toInt(__fn_dyn1)) )) );
				#line 109 "F:\\nx3\\src\\nx3\\PColumnsGenerator.hx"
				return ((double) (global::Reflect.compare<int>(a, b)) );
			}
			#line default
		}
		
		
	}
}


