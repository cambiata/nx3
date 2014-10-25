
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PColumnsDistancesCalculator : global::haxe.lang.HxObject {
		public    PColumnsDistancesCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PColumnsDistancesCalculator(global::nx3.PBar bar){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				global::nx3.PColumnsDistancesCalculator.__hx_ctor_nx3_PColumnsDistancesCalculator(this, bar);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PColumnsDistancesCalculator(global::nx3.PColumnsDistancesCalculator __temp_me94, global::nx3.PBar bar){
			unchecked {
				#line 20 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				__temp_me94.bar = bar;
				__temp_me94.prevLeftComplex = new global::haxe.ds.IntMap<object>();
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				return new global::nx3.PColumnsDistancesCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				return new global::nx3.PColumnsDistancesCalculator(((global::nx3.PBar) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PBar bar;
		
		public virtual   void calculate(){
			unchecked {
				#line 27 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				global::nx3.PColumn leftColumn = default(global::nx3.PColumn);
				double xposition = 0.0;
				{
					#line 29 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
					int _g1 = 0;
					#line 29 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
					int _g = this.bar.getColumns().length;
					#line 29 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
					while (( _g1 < _g )){
						#line 29 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						int columnIdx = _g1++;
						#line 31 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						global::nx3.PColumn rightColumn = ((global::nx3.PColumn) (this.bar.getColumns()[columnIdx]) );
						rightColumn.mdistance = new global::haxe.lang.Null<double>(((double) (0) ), true);
						#line 35 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						if (( columnIdx == 0 )) {
							#line 37 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
							int complexId = 0;
							{
								#line 38 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
								int _g2 = 0;
								#line 38 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
								global::nx3.PColumn __temp_stmt241 = default(global::nx3.PColumn);
								#line 38 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
								{
									#line 38 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
									global::Array<object> array = this.bar.getColumns();
									#line 38 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
									__temp_stmt241 = ((global::nx3.PColumn) (array[0]) );
								}
								
								#line 38 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
								global::Array<object> _g3 = __temp_stmt241.getComplexes();
								#line 38 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
								while (( _g2 < _g3.length )){
									#line 38 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
									global::nx3.PComplex complex = ((global::nx3.PComplex) (_g3[_g2]) );
									#line 38 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
									 ++ _g2;
									#line 40 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
									this.prevLeftComplex.@set(complexId, new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{50636009}), new global::Array<object>(new object[]{complex}), new global::Array<int>(new int[]{1050990343}), new global::Array<double>(new double[]{((double) (0) )})));
									complexId++;
								}
								
							}
							
						}
						 else {
							#line 45 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
							if (( columnIdx < this.bar.getColumns().length )) {
								#line 47 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
								global::Array<object> leftComplexes = leftColumn.getComplexes();
								global::Array<object> rightComplexes = rightColumn.getComplexes();
								#line 50 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
								double columndistance = 0.0;
								{
									#line 51 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
									int _g31 = 0;
									#line 51 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
									int _g21 = leftComplexes.length;
									#line 51 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
									while (( _g31 < _g21 )){
										#line 51 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
										int complexIdx = _g31++;
										#line 53 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
										global::nx3.PComplex leftComplex = ((global::nx3.PComplex) (leftComplexes[complexIdx]) );
										global::nx3.PComplex rightComplex = ((global::nx3.PComplex) (rightComplexes[complexIdx]) );
										double distance = this.getComplexDistances(columnIdx, complexIdx, leftComplex, rightComplex);
										#line 57 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
										columndistance = global::System.Math.Max(((double) (columndistance) ), ((double) (distance) ));
									}
									
								}
								
								#line 60 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
								{
									#line 60 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
									double number = columndistance;
									#line 60 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
									int precision = 6;
									#line 60 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
									number = ( number * global::System.Math.Pow(((double) (10) ), ((double) (precision) )) );
									#line 60 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
									number = ( global::Math.round(number) / global::System.Math.Pow(((double) (10) ), ((double) (precision) )) );
									#line 60 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
									columndistance = number;
								}
								
								#line 61 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
								leftColumn.mdistance = new global::haxe.lang.Null<double>(columndistance, true);
								#line 63 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
								xposition += columndistance;
								rightColumn.mposition = new global::haxe.lang.Null<double>(xposition, true);
							}
							
						}
						
						#line 68 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						if (( columnIdx == ( this.bar.getColumns().length - 1 ) )) {
							#line 70 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
							global::nx3.PColumn lastColumn = ((global::nx3.PColumn) (this.bar.getColumns()[columnIdx]) );
							lastColumn.mdistance = new global::haxe.lang.Null<double>(lastColumn.getRightX(), true);
							return ;
						}
						
						#line 74 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						leftColumn = rightColumn;
					}
					
				}
				
			}
			#line default
		}
		
		
		public  global::haxe.ds.IntMap<object> prevLeftComplex;
		
		public virtual   double getComplexDistances(int columnIdx, int complexIdx, global::nx3.PComplex leftComplex, global::nx3.PComplex rightComplex){
			unchecked {
				#line 84 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				if (( rightComplex == default(global::nx3.PComplex) )) {
					#line 87 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
					if (( leftComplex != default(global::nx3.PComplex) )) {
						#line 89 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						int leftColumnIdx = ( columnIdx - 1 );
						#line 91 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						this.prevLeftComplex.@set(complexIdx, new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{50636009}), new global::Array<object>(new object[]{leftComplex}), new global::Array<int>(new int[]{1050990343}), new global::Array<double>(new double[]{((double) (leftColumnIdx) )})));
					}
					
					#line 94 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
					return ((double) (0) );
				}
				
				#line 97 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				if (( leftComplex == default(global::nx3.PComplex) )) {
					#line 100 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
					int currentLeftColumIdx = ( columnIdx - 1 );
					int prevLeftColumnIdx = ((int) (global::haxe.lang.Runtime.getField_f(this.prevLeftComplex.@get(complexIdx).@value, "columnIdx", 1050990343, true)) );
					#line 103 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
					double currentLeftXPos = ((global::nx3.PColumn) (this.bar.getColumns()[currentLeftColumIdx]) ).getMPosition();
					double prevLeftXPos = ((global::nx3.PColumn) (this.bar.getColumns()[prevLeftColumnIdx]) ).getMPosition();
					#line 107 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
					double distanceBenefit = ( currentLeftXPos - prevLeftXPos );
					#line 109 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
					global::nx3.PComplex currentLeftComplex = ((global::nx3.PComplex) (global::haxe.lang.Runtime.getField(this.prevLeftComplex.@get(complexIdx).@value, "leftComplex", 50636009, true)) );
					double distance = new global::nx3.PComplexDistancesCalculator().getDistance(currentLeftComplex, rightComplex);
					#line 120 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
					double actualDistance = global::System.Math.Max(((double) (0) ), ((double) (( distance - distanceBenefit )) ));
					return actualDistance;
				}
				
				#line 124 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				int leftColumnIdx1 = ( columnIdx - 1 );
				#line 126 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				double distance1 = new global::nx3.PComplexDistancesCalculator().getDistance(leftComplex, rightComplex);
				#line 128 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				this.prevLeftComplex.@set(complexIdx, new global::haxe.lang.DynamicObject(new global::Array<int>(new int[]{50636009}), new global::Array<object>(new object[]{leftComplex}), new global::Array<int>(new int[]{1050990343}), new global::Array<double>(new double[]{((double) (leftColumnIdx1) )})));
				#line 132 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				return distance1;
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				switch (hash){
					case 430591158:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						this.prevLeftComplex = ((global::haxe.ds.IntMap<object>) (global::haxe.ds.IntMap<object>.__hx_cast<object>(((global::haxe.ds.IntMap) (@value) ))) );
						#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						return @value;
					}
					
					
					case 4895187:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						this.bar = ((global::nx3.PBar) (@value) );
						#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				switch (hash){
					case 713611268:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getComplexDistances") ), ((int) (713611268) ))) );
					}
					
					
					case 430591158:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						return this.prevLeftComplex;
					}
					
					
					case 90871142:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("calculate") ), ((int) (90871142) ))) );
					}
					
					
					case 4895187:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						return this.bar;
					}
					
					
					default:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				switch (hash){
					case 713611268:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						return this.getComplexDistances(((int) (global::haxe.lang.Runtime.toInt(dynargs[0])) ), ((int) (global::haxe.lang.Runtime.toInt(dynargs[1])) ), ((global::nx3.PComplex) (dynargs[2]) ), ((global::nx3.PComplex) (dynargs[3]) ));
					}
					
					
					case 90871142:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						this.calculate();
						#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						break;
					}
					
					
					default:
					{
						#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				baseArr.push("prevLeftComplex");
				#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				baseArr.push("bar");
				#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
				{
					#line 14 "F:\\nx3\\src\\nx3\\PColumnsDistancesCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


