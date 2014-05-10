
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VBarColumnsGenerator : global::haxe.lang.HxObject {
		public    VBarColumnsGenerator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VBarColumnsGenerator(global::Array<object> vparts){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				global::nx3.VBarColumnsGenerator.__hx_ctor_nx3_VBarColumnsGenerator(this, vparts);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VBarColumnsGenerator(global::nx3.VBarColumnsGenerator __temp_me163, global::Array<object> vparts){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				__temp_me163.vparts = vparts;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				return new global::nx3.VBarColumnsGenerator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				return new global::nx3.VBarColumnsGenerator(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[0]) ))) ));
			}
			#line default
		}
		
		
		public  global::Array<object> vparts;
		
		public  global::Array<int> positions;
		
		public  global::Array<object> columns;
		
		public  global::haxe.ds.IntMap<object> positionsColumns;
		
		public virtual   global::Array<object> getColumns(){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				if (( this.columns != default(global::Array<object>) )) {
					#line 25 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
					return this.columns;
				}
				
				#line 26 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				this.positions = this.calcPositions(this.vparts);
				this.calcColumns(this.positions, this.vparts);
				return this.columns;
			}
			#line default
		}
		
		
		public virtual   global::haxe.ds.IntMap<object> getPositionsColumns(){
			unchecked {
				#line 33 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				if (( this.columns == default(global::Array<object>) )) {
					#line 33 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
					this.getColumns();
				}
				
				#line 34 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				return this.positionsColumns;
			}
			#line default
		}
		
		
		public  global::haxe.ds.ObjectMap<object, object> vcomplexesVColumns;
		
		public virtual   global::haxe.ds.ObjectMap<object, object> getVComplexesVColumns(){
			unchecked {
				#line 40 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				if (( this.columns == default(global::Array<object>) )) {
					#line 40 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
					this.getColumns();
				}
				
				#line 41 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				return this.vcomplexesVColumns;
			}
			#line default
		}
		
		
		public virtual   void calcColumns(global::Array<int> positions, global::Array<object> vparts){
			unchecked {
				#line 46 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				int partsCount = vparts.length;
				this.columns = new global::Array<object>(new object[]{});
				this.positionsColumns = new global::haxe.ds.IntMap<object>();
				#line 50 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				{
					#line 50 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
					int _g = 0;
					#line 50 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
					while (( _g < positions.length )){
						#line 50 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						int pos = positions[_g];
						#line 50 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						 ++ _g;
						#line 53 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						global::Array<object> vcomplexes = new global::Array<object>(new object[]{});
						{
							#line 54 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
							int _g1 = 0;
							#line 54 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
							while (( _g1 < vparts.length )){
								#line 54 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
								global::nx3.VPart vpart = ((global::nx3.VPart) (vparts[_g1]) );
								#line 54 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
								 ++ _g1;
								#line 56 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
								global::nx3.VComplex complex = ((global::nx3.VComplex) (vpart.getPositionsVComplexes().@get(pos).@value) );
								vcomplexes.push(complex);
							}
							
						}
						
						#line 60 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						global::nx3.VColumn vcolumn = new global::nx3.VColumn(((global::Array<object>) (vcomplexes) ));
						this.columns.push(vcolumn);
						this.positionsColumns.@set(pos, vcolumn);
					}
					
				}
				
			}
			#line default
		}
		
		
		public virtual   global::Array<int> calcPositions(global::Array<object> vparts){
			unchecked {
				#line 69 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				global::haxe.ds.IntMap<bool> positionsMap = new global::haxe.ds.IntMap<bool>();
				#line 71 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				{
					#line 71 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
					int _g = 0;
					#line 71 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
					while (( _g < vparts.length )){
						#line 71 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						global::nx3.VPart vpart = ((global::nx3.VPart) (vparts[_g]) );
						#line 71 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						 ++ _g;
						#line 73 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						global::Array<int> poss = global::nx3.VMapTools.keysToArray<int>(vpart.getPositionsVComplexes().keys());
						{
							#line 74 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
							int _g1 = 0;
							#line 74 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
							while (( _g1 < poss.length )){
								#line 74 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
								int pos = poss[_g1];
								#line 74 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
								 ++ _g1;
								#line 74 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
								positionsMap.@set(pos, true);
							}
							
						}
						
					}
					
				}
				
				#line 77 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				global::Array<int> positions = global::nx3.VMapTools.keysToArray<int>(positionsMap.keys());
				#line 79 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				positions.sort(( (( global::nx3.VBarColumnsGenerator_calcPositions_79__Fun.__hx_current != default(global::nx3.VBarColumnsGenerator_calcPositions_79__Fun) )) ? (global::nx3.VBarColumnsGenerator_calcPositions_79__Fun.__hx_current) : (global::nx3.VBarColumnsGenerator_calcPositions_79__Fun.__hx_current = ((global::nx3.VBarColumnsGenerator_calcPositions_79__Fun) (new global::nx3.VBarColumnsGenerator_calcPositions_79__Fun()) )) ));
				#line 81 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				return positions;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				switch (hash){
					case 1956757135:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						this.vcomplexesVColumns = ((global::haxe.ds.ObjectMap<object, object>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, object>(((global::haxe.ds.ObjectMap) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return @value;
					}
					
					
					case 1783433811:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						this.positionsColumns = ((global::haxe.ds.IntMap<object>) (global::haxe.ds.IntMap<object>.__hx_cast<object>(((global::haxe.ds.IntMap) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return @value;
					}
					
					
					case 1935256797:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						this.columns = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return @value;
					}
					
					
					case 1347548074:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						this.positions = ((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return @value;
					}
					
					
					case 1802642666:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						this.vparts = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				switch (hash){
					case 264208469:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcPositions") ), ((int) (264208469) ))) );
					}
					
					
					case 255862984:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calcColumns") ), ((int) (255862984) ))) );
					}
					
					
					case 1967259813:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getVComplexesVColumns") ), ((int) (1967259813) ))) );
					}
					
					
					case 1956757135:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return this.vcomplexesVColumns;
					}
					
					
					case 611545865:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getPositionsColumns") ), ((int) (611545865) ))) );
					}
					
					
					case 1119564519:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getColumns") ), ((int) (1119564519) ))) );
					}
					
					
					case 1783433811:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return this.positionsColumns;
					}
					
					
					case 1935256797:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return this.columns;
					}
					
					
					case 1347548074:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return this.positions;
					}
					
					
					case 1802642666:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return this.vparts;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				switch (hash){
					case 264208469:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return this.calcPositions(((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[0]) ))) ));
					}
					
					
					case 255862984:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						this.calcColumns(((global::Array<int>) (global::Array<object>.__hx_cast<int>(((global::Array) (dynargs[0]) ))) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (dynargs[1]) ))) ));
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						break;
					}
					
					
					case 1967259813:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return this.getVComplexesVColumns();
					}
					
					
					case 611545865:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return this.getPositionsColumns();
					}
					
					
					case 1119564519:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return this.getColumns();
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				baseArr.push("vcomplexesVColumns");
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				baseArr.push("positionsColumns");
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				baseArr.push("columns");
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				baseArr.push("positions");
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				baseArr.push("vparts");
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				{
					#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VBarColumnsGenerator_calcPositions_79__Fun : global::haxe.lang.Function {
		public    VBarColumnsGenerator_calcPositions_79__Fun() : base(2, 1){
			unchecked {
			}
			#line default
		}
		
		
		public static  global::nx3.VBarColumnsGenerator_calcPositions_79__Fun __hx_current;
		
		public override   double __hx_invoke2_f(double __fn_float1, object __fn_dyn1, double __fn_float2, object __fn_dyn2){
			unchecked {
				#line 79 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				int b = ( (global::haxe.lang.Runtime.eq(__fn_dyn2, global::haxe.lang.Runtime.undefined)) ? (((int) (__fn_float2) )) : (((int) (global::haxe.lang.Runtime.toInt(__fn_dyn2)) )) );
				#line 79 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				int a = ( (global::haxe.lang.Runtime.eq(__fn_dyn1, global::haxe.lang.Runtime.undefined)) ? (((int) (__fn_float1) )) : (((int) (global::haxe.lang.Runtime.toInt(__fn_dyn1)) )) );
				#line 79 "F:\\nx3\\src\\nx3\\VBarColumnsGenerator.hx"
				return ((double) (global::Reflect.compare<int>(a, b)) );
			}
			#line default
		}
		
		
	}
}


