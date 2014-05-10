
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PBarStretchCalculator : global::haxe.lang.HxObject {
		public    PBarStretchCalculator(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PBarStretchCalculator(global::nx3.PSystemBar systembar){
			unchecked {
				#line 16 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				global::nx3.PBarStretchCalculator.__hx_ctor_nx3_PBarStretchCalculator(this, systembar);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PBarStretchCalculator(global::nx3.PBarStretchCalculator __temp_me82, global::nx3.PSystemBar systembar){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				__temp_me82.systembar = systembar;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				return new global::nx3.PBarStretchCalculator(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				return new global::nx3.PBarStretchCalculator(((global::nx3.PSystemBar) (arr[0]) ));
			}
			#line default
		}
		
		
		public  global::nx3.PSystemBar systembar;
		
		public virtual   void stretch(double amount){
			unchecked {
				#line 25 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				{
					#line 25 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
					object __temp_dynop165 = this.systembar.getBarWidths();
					#line 25 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
					global::haxe.lang.Runtime.setField_f(__temp_dynop165, "contentWidth", 821103117, ((double) (( ((double) (global::haxe.lang.Runtime.getField_f(__temp_dynop165, "contentWidth", 821103117, true)) ) + amount )) ));
				}
				
				#line 26 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				{
					#line 26 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
					object __temp_dynop166 = this.systembar.getBarWidths();
					#line 26 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
					global::haxe.lang.Runtime.setField_f(__temp_dynop166, "width", 1247983110, ((double) (( ((double) (global::haxe.lang.Runtime.getField_f(__temp_dynop166, "width", 1247983110, true)) ) + amount )) ));
				}
				
				#line 30 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				if (( this.systembar.bar.getColumns().length < 2 )) {
					#line 30 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
					return ;
				}
				
				#line 32 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				global::Array<object> columns = this.systembar.bar.getColumns();
				global::nx3.PColumn firstcolumn = ((global::nx3.PColumn) (columns[0]) );
				#line 35 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				global::haxe.ds.ObjectMap<object, double> aDistance = new global::haxe.ds.ObjectMap<object, double>();
				global::haxe.ds.ObjectMap<object, double> gotShared = new global::haxe.ds.ObjectMap<object, double>();
				#line 38 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				{
					#line 38 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
					int _g = 0;
					#line 38 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
					while (( _g < columns.length )){
						#line 38 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						global::nx3.PColumn column = ((global::nx3.PColumn) (columns[_g]) );
						#line 38 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						 ++ _g;
						#line 40 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						{
							#line 40 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
							double @value = column.getADistance();
							#line 40 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
							aDistance.@set(column, @value);
						}
						
						#line 41 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						gotShared.@set(column, ((double) (0) ));
					}
					
				}
				
				#line 43 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				global::haxe.ds.IntMap<double> seedThreshold = new global::haxe.ds.IntMap<double>();
				#line 46 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				double seedrest = amount;
				int countIterations = 0;
				while (( seedrest > 0 )){
					#line 50 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
					double seed = .5;
					{
						#line 51 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						int _g1 = 0;
						#line 51 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						while (( _g1 < columns.length )){
							#line 51 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
							global::nx3.PColumn column1 = ((global::nx3.PColumn) (columns[_g1]) );
							#line 51 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
							 ++ _g1;
							#line 53 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
							double grain = ( column1.getDistanceDelta() * seed );
							int valueDeltaInt = default(int);
							#line 54 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
							{
								#line 54 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
								double x = ( column1.getDistanceDelta() * 100000 );
								#line 54 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
								valueDeltaInt = ((int) (x) );
							}
							
							#line 55 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
							if ( ! (seedThreshold.exists(valueDeltaInt)) ) {
								#line 55 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
								seedThreshold.@set(valueDeltaInt, ((double) (0) ));
							}
							
							#line 56 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
							{
								#line 56 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
								double value1 = ( seedThreshold.@get(valueDeltaInt).@value + grain );
								#line 56 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
								seedThreshold.@set(valueDeltaInt, value1);
							}
							
							#line 57 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
							global::haxe.lang.Null<double> threshold = seedThreshold.@get(valueDeltaInt);
							double benefit = default(double);
							#line 58 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
							if (( column1 == firstcolumn )) {
								#line 58 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
								benefit = 0.0;
							}
							 else {
								#line 58 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
								benefit = column1.getADistanceBenefit();
							}
							
							#line 59 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
							if (( threshold.@value > benefit )) {
								#line 61 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
								{
									#line 61 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
									double value2 = ( gotShared.@get(column1).@value + grain );
									#line 61 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
									gotShared.@set(column1, value2);
								}
								
								#line 62 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
								seedrest -= grain;
							}
							
						}
						
					}
					
					#line 65 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
					countIterations++;
				}
				
				#line 70 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				double gain = 0.0;
				{
					#line 71 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
					int _g2 = 0;
					#line 71 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
					while (( _g2 < columns.length )){
						#line 71 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						global::nx3.PColumn column2 = ((global::nx3.PColumn) (columns[_g2]) );
						#line 71 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						 ++ _g2;
						#line 74 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						column2.sposition = new global::haxe.lang.Null<double>(( column2.getAPostion() + gain ), true);
						gain += gotShared.@get(column2).@value;
					}
					
				}
				
			}
			#line default
		}
		
		
		public virtual   void resetStretch(){
			unchecked {
				#line 82 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				int _g = 0;
				#line 82 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				global::Array<object> _g1 = this.systembar.bar.getColumns();
				#line 82 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				while (( _g < _g1.length )){
					#line 82 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
					global::nx3.PColumn column = ((global::nx3.PColumn) (_g1[_g]) );
					#line 82 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
					 ++ _g;
					#line 84 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
					column.sposition = default(global::haxe.lang.Null<double>);
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				switch (hash){
					case 1252252228:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						this.systembar = ((global::nx3.PSystemBar) (@value) );
						#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						return @value;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				switch (hash){
					case 1748075510:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("resetStretch") ), ((int) (1748075510) ))) );
					}
					
					
					case 1985166853:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("stretch") ), ((int) (1985166853) ))) );
					}
					
					
					case 1252252228:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						return this.systembar;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				switch (hash){
					case 1748075510:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						this.resetStretch();
						#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						break;
					}
					
					
					case 1985166853:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						this.stretch(((double) (global::haxe.lang.Runtime.toDouble(dynargs[0])) ));
						#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						break;
					}
					
					
					default:
					{
						#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				baseArr.push("systembar");
				#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
				{
					#line 12 "F:\\nx3\\src\\nx3\\PBarStretchCalculator.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
	}
}


