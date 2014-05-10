
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class VBarColumnsMinDistancesGenerator : global::haxe.lang.HxObject {
		public    VBarColumnsMinDistancesGenerator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    VBarColumnsMinDistancesGenerator(global::nx3.VBar vbar){
			unchecked {
				#line 15 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				global::nx3.VBarColumnsMinDistancesGenerator.__hx_ctor_nx3_VBarColumnsMinDistancesGenerator(this, vbar);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_VBarColumnsMinDistancesGenerator(global::nx3.VBarColumnsMinDistancesGenerator __temp_me164, global::nx3.VBar vbar){
			unchecked {
				#line 17 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				__temp_me164.vbar = vbar;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				return new global::nx3.VBarColumnsMinDistancesGenerator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				return new global::nx3.VBarColumnsMinDistancesGenerator(((global::nx3.VBar) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.VBar vbar;
		
		public virtual   object getDistancesData(){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				global::haxe.ds.ObjectMap<object, double> distances = this.getDistances();
				global::haxe.ds.ObjectMap<object, double> positions = this.getPositions(distances);
				return new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{241646494, 1347548074}), new global::Array<object>(new object[]{distances, positions}), new global::Array<int>(new int[]{}), new global::Array<double>(new double[]{}));
			}
			#line default
		}
		
		
		public virtual   global::haxe.ds.ObjectMap<object, double> getDistances(){
			unchecked {
				#line 29 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				global::haxe.ds.ObjectMap<object, double> distances = new global::haxe.ds.ObjectMap<object, double>();
				global::haxe.ds.ObjectMap<object, double> positions = new global::haxe.ds.ObjectMap<object, double>();
				#line 32 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				int nrOfColumns = this.vbar.getVColumns().length;
				int nrOfParts = this.vbar.getVParts().length;
				#line 35 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				global::haxe.ds.IntMap<object> prevComplexBucket = new global::haxe.ds.IntMap<object>();
				global::haxe.ds.IntMap<object> prevColumnBucket = new global::haxe.ds.IntMap<object>();
				#line 38 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				double curpos = ((double) (0) );
				#line 40 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				{
					#line 40 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
					int _g = 0;
					#line 40 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
					while (( _g < ((int) (nrOfColumns) ) )){
						#line 40 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						int ic = _g++;
						#line 42 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						global::nx3.VColumn column = ((global::nx3.VColumn) (this.vbar.getVColumns()[ic]) );
						global::nx3.VColumn nextColumn = default(global::nx3.VColumn);
						#line 43 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						{
							#line 43 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
							global::Array<object> a = this.vbar.getVColumns();
							#line 43 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
							int idx = ( ic + 1 );
							#line 43 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
							if (( ( idx < 0 ) || ( idx > ( a.length - 1 ) ) )) {
								#line 43 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
								nextColumn = default(global::nx3.VColumn);
							}
							 else {
								#line 43 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
								nextColumn = ((global::nx3.VColumn) (a[idx]) );
							}
							
						}
						
						#line 45 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						double maxdist = ((double) (0) );
						{
							#line 46 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
							int _g1 = 0;
							#line 46 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
							while (( _g1 < ((int) (nrOfParts) ) )){
								#line 46 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
								int ip = _g1++;
								#line 48 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
								global::nx3.VPart vpart = ((global::nx3.VPart) (this.vbar.getVParts()[ip]) );
								global::nx3.VComplex complex = ((global::nx3.VComplex) (column.vcomplexes[ip]) );
								global::nx3.VComplex nextcomplex = default(global::nx3.VComplex);
								#line 50 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
								if (( nextColumn != default(global::nx3.VColumn) )) {
									#line 50 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
									nextcomplex = ((global::nx3.VComplex) (nextColumn.vcomplexes[ip]) );
								}
								 else {
									#line 50 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
									nextcomplex = default(global::nx3.VComplex);
								}
								
								#line 53 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
								if (( ( complex != default(global::nx3.VComplex) ) && ( nextcomplex != default(global::nx3.VComplex) ) )) {
									#line 56 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
									double dist = new global::nx3.VPartComplexesMinDistancesCalculator(((global::nx3.VPart) (vpart) )).getDistance(complex, nextcomplex);
									#line 58 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
									maxdist = global::System.Math.Max(((double) (maxdist) ), ((double) (dist) ));
									#line 60 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
									prevComplexBucket.@set(ip, complex);
									prevColumnBucket.@set(ip, column);
								}
								 else {
									#line 63 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
									if (( ( complex == default(global::nx3.VComplex) ) && ( nextcomplex != default(global::nx3.VComplex) ) )) {
										#line 66 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
										maxdist = global::System.Math.Max(((double) (3.2) ), ((double) (maxdist) ));
									}
									 else {
										#line 68 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
										if (( ( complex != default(global::nx3.VComplex) ) && ( nextcomplex == default(global::nx3.VComplex) ) )) {
											#line 70 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
											double dist1 = new global::nx3.VPartComplexesMinDistancesCalculator(((global::nx3.VPart) (vpart) )).getDistance(complex, nextcomplex);
											maxdist = global::System.Math.Max(((double) (maxdist) ), ((double) (dist1) ));
											prevComplexBucket.@set(ip, complex);
											prevColumnBucket.@set(ip, column);
										}
										 else {
											#line 76 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
											{
											}
											
										}
										
									}
									
								}
								
							}
							
						}
						
						#line 81 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						distances.@set(column, maxdist);
						positions.@set(column, curpos);
						curpos = ( curpos + maxdist );
					}
					
				}
				
				#line 95 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				return distances;
			}
			#line default
		}
		
		
		public virtual   global::haxe.ds.ObjectMap<object, double> getPositions(global::haxe.ds.ObjectMap<object, double> distances){
			unchecked {
				#line 100 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				global::haxe.ds.ObjectMap<object, double> positions = new global::haxe.ds.ObjectMap<object, double>();
				double curpos = this.getFirstColumnPosition();
				#line 103 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				{
					#line 103 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
					int _g = 0;
					#line 103 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
					global::Array<object> _g1 = this.vbar.getVColumns();
					#line 103 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
					while (( _g < _g1.length )){
						#line 103 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						global::nx3.VColumn vcolumn = ((global::nx3.VColumn) (_g1[_g]) );
						#line 103 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						 ++ _g;
						#line 105 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						global::haxe.lang.Null<double> distance = distances.@get(vcolumn);
						positions.@set(vcolumn, curpos);
						curpos = ( curpos + distance.@value );
					}
					
				}
				
				#line 117 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				return positions;
			}
			#line default
		}
		
		
		public virtual   double getFirstColumnPosition(){
			unchecked {
				#line 122 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				double pos = ((double) (0) );
				#line 124 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				{
					#line 124 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
					int _g = 0;
					#line 124 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
					global::Array<object> _g1 = this.vbar.getVParts();
					#line 124 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
					while (( _g < _g1.length )){
						#line 124 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						global::nx3.VPart vpart = ((global::nx3.VPart) (_g1[_g]) );
						#line 124 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						 ++ _g;
						#line 126 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						global::nx3.VPartComplexesMinDistancesCalculator distanceCalculator = new global::nx3.VPartComplexesMinDistancesCalculator(((global::nx3.VPart) (vpart) ));
						global::nx3.VComplex firstcomplex = default(global::nx3.VComplex);
						#line 127 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						{
							#line 127 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
							global::Array<object> array = vpart.getVComplexes();
							#line 127 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
							firstcomplex = ((global::nx3.VComplex) (array[0]) );
						}
						
						#line 128 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						object distancedata = distanceCalculator.getComplexLeftside(firstcomplex);
						{
							#line 129 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
							int _g2 = 0;
							#line 129 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
							global::Array<object> _g3 = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (global::haxe.lang.Runtime.getField(distancedata, "rects", 1723609807, true)) ))) );
							#line 129 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
							while (( _g2 < _g3.length )){
								#line 129 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
								global::nx3.geom.Rectangle rect = ((global::nx3.geom.Rectangle) (_g3[_g2]) );
								#line 129 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
								 ++ _g2;
								#line 131 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
								pos = global::System.Math.Max(((double) (pos) ), ((double) ( - (rect.x) ) ));
							}
							
						}
						
					}
					
				}
				
				#line 134 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				return pos;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				switch (hash){
					case 1313464093:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						this.vbar = ((global::nx3.VBar) (@value) );
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				switch (hash){
					case 803069689:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getFirstColumnPosition") ), ((int) (803069689) ))) );
					}
					
					
					case 1604882484:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getPositions") ), ((int) (1604882484) ))) );
					}
					
					
					case 498980904:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDistances") ), ((int) (498980904) ))) );
					}
					
					
					case 47025778:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDistancesData") ), ((int) (47025778) ))) );
					}
					
					
					case 1313464093:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						return this.vbar;
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				switch (hash){
					case 803069689:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						return this.getFirstColumnPosition();
					}
					
					
					case 1604882484:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						return this.getPositions(((global::haxe.ds.ObjectMap<object, double>) (global::haxe.ds.ObjectMap<object, object>.__hx_cast<object, double>(((global::haxe.ds.ObjectMap) (dynargs[0]) ))) ));
					}
					
					
					case 498980904:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						return this.getDistances();
					}
					
					
					case 47025778:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						return this.getDistancesData();
					}
					
					
					default:
					{
						#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				baseArr.push("vbar");
				#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
				{
					#line 11 "F:\\nx3\\src\\nx3\\VBarColumnsMinDistancesGenerator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


