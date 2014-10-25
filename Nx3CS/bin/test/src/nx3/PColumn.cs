
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3{
	public  class PColumn : global::haxe.lang.HxObject {
		public    PColumn(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    PColumn(global::nx3.PBar bar, global::Array<object> complexes, int valueposition, int @value){
			unchecked {
				#line 18 "F:\\nx3\\src\\nx3\\PColumn.hx"
				global::nx3.PColumn.__hx_ctor_nx3_PColumn(this, bar, complexes, valueposition, @value);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_PColumn(global::nx3.PColumn __temp_me91, global::nx3.PBar bar, global::Array<object> complexes, int valueposition, int @value){
			unchecked {
				#line 72 "F:\\nx3\\src\\nx3\\PColumn.hx"
				__temp_me91.allottedDistance = ((double) (0) );
				#line 20 "F:\\nx3\\src\\nx3\\PColumn.hx"
				__temp_me91.bar = bar;
				__temp_me91.complexes = complexes;
				__temp_me91.valueposition = valueposition;
				__temp_me91.@value = new global::haxe.lang.Null<int>(@value, true);
				__temp_me91.mposition = new global::haxe.lang.Null<double>(0.0, true);
				__temp_me91.mdistanceBenefit = new global::haxe.lang.Null<double>(((double) (0) ), true);
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				return new global::nx3.PColumn(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				return new global::nx3.PColumn(((global::nx3.PBar) (arr[0]) ), ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (arr[1]) ))) ), ((int) (global::haxe.lang.Runtime.toInt(arr[2])) ), ((int) (global::haxe.lang.Runtime.toInt(arr[3])) ));
			}
			#line default
		}
		
		
		public  global::nx3.PBar bar;
		
		public  global::Array<object> complexes;
		
		public  int valueposition;
		
		public virtual   global::Array<object> getComplexes(){
			unchecked {
				#line 30 "F:\\nx3\\src\\nx3\\PColumn.hx"
				return this.complexes;
			}
			#line default
		}
		
		
		public virtual   int getValueposition(){
			unchecked {
				#line 35 "F:\\nx3\\src\\nx3\\PColumn.hx"
				return this.valueposition;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<int> @value;
		
		public virtual   int getValue(){
			unchecked {
				#line 41 "F:\\nx3\\src\\nx3\\PColumn.hx"
				if ( ! (this.@value.hasValue) ) {
					#line 41 "F:\\nx3\\src\\nx3\\PColumn.hx"
					throw global::haxe.lang.HaxeException.wrap("value shouldnt be null");
				}
				
				#line 42 "F:\\nx3\\src\\nx3\\PColumn.hx"
				return this.@value.@value;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> mdistance;
		
		public virtual   double getMDistance(){
			unchecked {
				#line 49 "F:\\nx3\\src\\nx3\\PColumn.hx"
				if ( ! (this.mdistance.hasValue) ) {
					#line 49 "F:\\nx3\\src\\nx3\\PColumn.hx"
					throw global::haxe.lang.HaxeException.wrap("mdistance shouldnt be null");
				}
				
				#line 50 "F:\\nx3\\src\\nx3\\PColumn.hx"
				return this.mdistance.@value;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> mdistanceBenefit;
		
		public virtual   double getMDistanceBenefit(){
			unchecked {
				#line 65 "F:\\nx3\\src\\nx3\\PColumn.hx"
				if (this.mdistanceBenefit.hasValue) {
					#line 65 "F:\\nx3\\src\\nx3\\PColumn.hx"
					return this.mdistanceBenefit.@value;
				}
				
				#line 66 "F:\\nx3\\src\\nx3\\PColumn.hx"
				{
					#line 66 "F:\\nx3\\src\\nx3\\PColumn.hx"
					double b = ( this.getMDistance() - 3.2 );
					#line 66 "F:\\nx3\\src\\nx3\\PColumn.hx"
					this.mdistanceBenefit = new global::haxe.lang.Null<double>(global::System.Math.Max(((double) (0) ), ((double) (b) )), true);
				}
				
				#line 67 "F:\\nx3\\src\\nx3\\PColumn.hx"
				return this.mdistanceBenefit.@value;
			}
			#line default
		}
		
		
		public  double allottedDistance;
		
		public  global::haxe.lang.Null<double> distancedelta;
		
		public virtual   double getDistanceDelta(){
			unchecked {
				#line 76 "F:\\nx3\\src\\nx3\\PColumn.hx"
				if (this.distancedelta.hasValue) {
					#line 76 "F:\\nx3\\src\\nx3\\PColumn.hx"
					return this.distancedelta.@value;
				}
				
				#line 77 "F:\\nx3\\src\\nx3\\PColumn.hx"
				this.bar.getContentwidth();
				this.distancedelta = new global::haxe.lang.Null<double>(( this.allottedDistance / this.bar.getAllottedDistanceSum() ), true);
				return this.distancedelta.@value;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> mposition;
		
		public virtual   double getMPosition(){
			unchecked {
				#line 86 "F:\\nx3\\src\\nx3\\PColumn.hx"
				return this.mposition.@value;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> adistance;
		
		public virtual   double getADistance(){
			unchecked {
				#line 92 "F:\\nx3\\src\\nx3\\PColumn.hx"
				if (this.adistance.hasValue) {
					#line 92 "F:\\nx3\\src\\nx3\\PColumn.hx"
					return this.adistance.@value;
				}
				
				#line 93 "F:\\nx3\\src\\nx3\\PColumn.hx"
				this.bar.calculateAPositions();
				#line 95 "F:\\nx3\\src\\nx3\\PColumn.hx"
				return this.adistance.@value;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> adistanceBenefit;
		
		public virtual   double getADistanceBenefit(){
			unchecked {
				#line 99 "F:\\nx3\\src\\nx3\\PColumn.hx"
				return this.adistanceBenefit.@value;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> aposition;
		
		public virtual   double getAPostion(){
			unchecked {
				#line 104 "F:\\nx3\\src\\nx3\\PColumn.hx"
				if (this.aposition.hasValue) {
					#line 104 "F:\\nx3\\src\\nx3\\PColumn.hx"
					return this.aposition.@value;
				}
				
				#line 105 "F:\\nx3\\src\\nx3\\PColumn.hx"
				this.bar.calculateAPositions();
				#line 107 "F:\\nx3\\src\\nx3\\PColumn.hx"
				return this.aposition.@value;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> sposition;
		
		public virtual   double getSPosition(){
			unchecked {
				#line 114 "F:\\nx3\\src\\nx3\\PColumn.hx"
				if (this.sposition.hasValue) {
					#line 114 "F:\\nx3\\src\\nx3\\PColumn.hx"
					return this.sposition.@value;
				}
				
				#line 119 "F:\\nx3\\src\\nx3\\PColumn.hx"
				return this.getAPostion();
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> rightX;
		
		public virtual   double getRightX(){
			unchecked {
				#line 125 "F:\\nx3\\src\\nx3\\PColumn.hx"
				if (this.rightX.hasValue) {
					#line 125 "F:\\nx3\\src\\nx3\\PColumn.hx"
					return this.rightX.@value;
				}
				
				#line 126 "F:\\nx3\\src\\nx3\\PColumn.hx"
				this.rightX = new global::haxe.lang.Null<double>(((double) (0) ), true);
				{
					#line 127 "F:\\nx3\\src\\nx3\\PColumn.hx"
					int _g = 0;
					#line 127 "F:\\nx3\\src\\nx3\\PColumn.hx"
					global::Array<object> _g1 = this.getComplexes();
					#line 127 "F:\\nx3\\src\\nx3\\PColumn.hx"
					while (( _g < _g1.length )){
						#line 127 "F:\\nx3\\src\\nx3\\PColumn.hx"
						global::nx3.PComplex complex = ((global::nx3.PComplex) (_g1[_g]) );
						#line 127 "F:\\nx3\\src\\nx3\\PColumn.hx"
						 ++ _g;
						#line 129 "F:\\nx3\\src\\nx3\\PColumn.hx"
						if (( complex != default(global::nx3.PComplex) )) {
							#line 130 "F:\\nx3\\src\\nx3\\PColumn.hx"
							double a = this.rightX.@value;
							#line 130 "F:\\nx3\\src\\nx3\\PColumn.hx"
							double b = complex.getRightX();
							#line 130 "F:\\nx3\\src\\nx3\\PColumn.hx"
							this.rightX = new global::haxe.lang.Null<double>(global::System.Math.Max(((double) (a) ), ((double) (b) )), true);
						}
						
					}
					
				}
				
				#line 132 "F:\\nx3\\src\\nx3\\PColumn.hx"
				return this.rightX.@value;
			}
			#line default
		}
		
		
		public  global::haxe.lang.Null<double> leftX;
		
		public virtual   double getLeftX(){
			unchecked {
				#line 138 "F:\\nx3\\src\\nx3\\PColumn.hx"
				if (this.leftX.hasValue) {
					#line 138 "F:\\nx3\\src\\nx3\\PColumn.hx"
					return this.leftX.@value;
				}
				
				#line 139 "F:\\nx3\\src\\nx3\\PColumn.hx"
				this.leftX = new global::haxe.lang.Null<double>(((double) (0) ), true);
				{
					#line 140 "F:\\nx3\\src\\nx3\\PColumn.hx"
					int _g = 0;
					#line 140 "F:\\nx3\\src\\nx3\\PColumn.hx"
					global::Array<object> _g1 = this.getComplexes();
					#line 140 "F:\\nx3\\src\\nx3\\PColumn.hx"
					while (( _g < _g1.length )){
						#line 140 "F:\\nx3\\src\\nx3\\PColumn.hx"
						global::nx3.PComplex complex = ((global::nx3.PComplex) (_g1[_g]) );
						#line 140 "F:\\nx3\\src\\nx3\\PColumn.hx"
						 ++ _g;
						#line 142 "F:\\nx3\\src\\nx3\\PColumn.hx"
						if (( complex != default(global::nx3.PComplex) )) {
							#line 142 "F:\\nx3\\src\\nx3\\PColumn.hx"
							double a = this.leftX.@value;
							#line 142 "F:\\nx3\\src\\nx3\\PColumn.hx"
							double b = complex.getLeftX();
							#line 142 "F:\\nx3\\src\\nx3\\PColumn.hx"
							this.leftX = new global::haxe.lang.Null<double>(global::System.Math.Min(((double) (a) ), ((double) (b) )), true);
						}
						
					}
					
				}
				
				#line 144 "F:\\nx3\\src\\nx3\\PColumn.hx"
				return this.leftX.@value;
			}
			#line default
		}
		
		
		public virtual   global::nx3.PComplex getNextComplex(global::nx3.PComplex complex){
			unchecked {
				#line 149 "F:\\nx3\\src\\nx3\\PColumn.hx"
				global::nx3.PColumn __temp_stmt240 = default(global::nx3.PColumn);
				#line 149 "F:\\nx3\\src\\nx3\\PColumn.hx"
				{
					#line 149 "F:\\nx3\\src\\nx3\\PColumn.hx"
					global::Array<object> array = this.bar.getColumns();
					#line 149 "F:\\nx3\\src\\nx3\\PColumn.hx"
					__temp_stmt240 = ((global::nx3.PColumn) (array[( array.length - 1 )]) );
				}
				
				#line 149 "F:\\nx3\\src\\nx3\\PColumn.hx"
				if (( this == __temp_stmt240 )) {
					#line 149 "F:\\nx3\\src\\nx3\\PColumn.hx"
					return default(global::nx3.PComplex);
				}
				
				#line 150 "F:\\nx3\\src\\nx3\\PColumn.hx"
				int partIndex = this.getComplexes().indexOf(complex, default(global::haxe.lang.Null<int>));
				int nextColumnIdx = ( this.bar.getColumns().indexOf(this, default(global::haxe.lang.Null<int>)) + 1 );
				{
					#line 152 "F:\\nx3\\src\\nx3\\PColumn.hx"
					int _g1 = nextColumnIdx;
					#line 152 "F:\\nx3\\src\\nx3\\PColumn.hx"
					int _g = this.bar.getColumns().length;
					#line 152 "F:\\nx3\\src\\nx3\\PColumn.hx"
					while (( _g1 < _g )){
						#line 152 "F:\\nx3\\src\\nx3\\PColumn.hx"
						int ci = _g1++;
						#line 154 "F:\\nx3\\src\\nx3\\PColumn.hx"
						global::nx3.PComplex complex1 = ((global::nx3.PComplex) (((global::nx3.PColumn) (this.bar.getColumns()[ci]) ).getComplexes()[partIndex]) );
						if (( complex1 != default(global::nx3.PComplex) )) {
							#line 155 "F:\\nx3\\src\\nx3\\PColumn.hx"
							return complex1;
						}
						
					}
					
				}
				
				#line 157 "F:\\nx3\\src\\nx3\\PColumn.hx"
				return default(global::nx3.PComplex);
			}
			#line default
		}
		
		
		public virtual   string toString(){
			unchecked {
				#line 162 "F:\\nx3\\src\\nx3\\PColumn.hx"
				return "PColumn";
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				switch (hash){
					case 1809610082:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						this.allottedDistance = ((double) (@value) );
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return @value;
					}
					
					
					case 1415149850:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						this.valueposition = ((int) (@value) );
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return @value;
					}
					
					
					default:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				switch (hash){
					case 1918303857:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						this.leftX = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return @value;
					}
					
					
					case 1311134972:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						this.rightX = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return @value;
					}
					
					
					case 225233948:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						this.sposition = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return @value;
					}
					
					
					case 947087882:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						this.aposition = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return @value;
					}
					
					
					case 1897410401:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						this.adistanceBenefit = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return @value;
					}
					
					
					case 1500667030:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						this.adistance = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return @value;
					}
					
					
					case 465851926:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						this.mposition = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return @value;
					}
					
					
					case 193107107:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						this.distancedelta = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return @value;
					}
					
					
					case 1809610082:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						this.allottedDistance = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return @value;
					}
					
					
					case 1197087957:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						this.mdistanceBenefit = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return @value;
					}
					
					
					case 1019431074:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						this.mdistance = global::haxe.lang.Null<object>.ofDynamic<double>(@value);
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return @value;
					}
					
					
					case 834174833:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						this.@value = global::haxe.lang.Null<object>.ofDynamic<int>(@value);
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return @value;
					}
					
					
					case 1415149850:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						this.valueposition = ((int) (global::haxe.lang.Runtime.toInt(@value)) );
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return @value;
					}
					
					
					case 1329310366:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						this.complexes = ((global::Array<object>) (global::Array<object>.__hx_cast<object>(((global::Array) (@value) ))) );
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return @value;
					}
					
					
					case 4895187:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						this.bar = ((global::nx3.PBar) (@value) );
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return @value;
					}
					
					
					default:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				switch (hash){
					case 946786476:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("toString") ), ((int) (946786476) ))) );
					}
					
					
					case 1633235079:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getNextComplex") ), ((int) (1633235079) ))) );
					}
					
					
					case 1378749947:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getLeftX") ), ((int) (1378749947) ))) );
					}
					
					
					case 1918303857:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return (this.leftX).toDynamic();
					}
					
					
					case 1249697330:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getRightX") ), ((int) (1249697330) ))) );
					}
					
					
					case 1311134972:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return (this.rightX).toDynamic();
					}
					
					
					case 1987388614:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getSPosition") ), ((int) (1987388614) ))) );
					}
					
					
					case 225233948:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return (this.sposition).toDynamic();
					}
					
					
					case 913616317:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getAPostion") ), ((int) (913616317) ))) );
					}
					
					
					case 947087882:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return (this.aposition).toDynamic();
					}
					
					
					case 197828599:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getADistanceBenefit") ), ((int) (197828599) ))) );
					}
					
					
					case 1897410401:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return (this.adistanceBenefit).toDynamic();
					}
					
					
					case 1115338048:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getADistance") ), ((int) (1115338048) ))) );
					}
					
					
					case 1500667030:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return (this.adistance).toDynamic();
					}
					
					
					case 80522944:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getMPosition") ), ((int) (80522944) ))) );
					}
					
					
					case 465851926:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return (this.mposition).toDynamic();
					}
					
					
					case 147893773:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getDistanceDelta") ), ((int) (147893773) ))) );
					}
					
					
					case 193107107:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return (this.distancedelta).toDynamic();
					}
					
					
					case 1809610082:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.allottedDistance;
					}
					
					
					case 1644989803:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getMDistanceBenefit") ), ((int) (1644989803) ))) );
					}
					
					
					case 1197087957:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return (this.mdistanceBenefit).toDynamic();
					}
					
					
					case 634102092:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getMDistance") ), ((int) (634102092) ))) );
					}
					
					
					case 1019431074:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return (this.mdistance).toDynamic();
					}
					
					
					case 294620923:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getValue") ), ((int) (294620923) ))) );
					}
					
					
					case 834174833:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return (this.@value).toDynamic();
					}
					
					
					case 1048191652:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getValueposition") ), ((int) (1048191652) ))) );
					}
					
					
					case 1586644776:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("getComplexes") ), ((int) (1586644776) ))) );
					}
					
					
					case 1415149850:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.valueposition;
					}
					
					
					case 1329310366:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.complexes;
					}
					
					
					case 4895187:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.bar;
					}
					
					
					default:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				switch (hash){
					case 1809610082:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.allottedDistance;
					}
					
					
					case 1415149850:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return ((double) (this.valueposition) );
					}
					
					
					default:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				switch (hash){
					case 946786476:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.toString();
					}
					
					
					case 1633235079:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.getNextComplex(((global::nx3.PComplex) (dynargs[0]) ));
					}
					
					
					case 1378749947:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.getLeftX();
					}
					
					
					case 1249697330:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.getRightX();
					}
					
					
					case 1987388614:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.getSPosition();
					}
					
					
					case 913616317:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.getAPostion();
					}
					
					
					case 197828599:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.getADistanceBenefit();
					}
					
					
					case 1115338048:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.getADistance();
					}
					
					
					case 80522944:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.getMPosition();
					}
					
					
					case 147893773:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.getDistanceDelta();
					}
					
					
					case 1644989803:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.getMDistanceBenefit();
					}
					
					
					case 634102092:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.getMDistance();
					}
					
					
					case 294620923:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.getValue();
					}
					
					
					case 1048191652:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.getValueposition();
					}
					
					
					case 1586644776:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return this.getComplexes();
					}
					
					
					default:
					{
						#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				baseArr.push("leftX");
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				baseArr.push("rightX");
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				baseArr.push("sposition");
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				baseArr.push("aposition");
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				baseArr.push("adistanceBenefit");
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				baseArr.push("adistance");
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				baseArr.push("mposition");
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				baseArr.push("distancedelta");
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				baseArr.push("allottedDistance");
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				baseArr.push("mdistanceBenefit");
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				baseArr.push("mdistance");
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				baseArr.push("value");
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				baseArr.push("valueposition");
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				baseArr.push("complexes");
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				baseArr.push("bar");
				#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
				{
					#line 13 "F:\\nx3\\src\\nx3\\PColumn.hx"
					base.__hx_getFields(baseArr);
				}
				
			}
			#line default
		}
		
		
		public override string ToString(){
			return this.toString();
		}
		
		
	}
}


