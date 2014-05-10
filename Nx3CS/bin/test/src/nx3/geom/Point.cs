
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.geom{
	public  class Point : global::haxe.lang.HxObject {
		public    Point(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    Point(global::haxe.lang.Null<double> x, global::haxe.lang.Null<double> y){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				global::nx3.geom.Point.__hx_ctor_nx3_geom_Point(this, x, y);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_geom_Point(global::nx3.geom.Point __temp_me139, global::haxe.lang.Null<double> x, global::haxe.lang.Null<double> y){
			unchecked {
				#line 12 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				double __temp_y138 = ( ( ! (y.hasValue) ) ? (((double) (0) )) : (y.@value) );
				#line 12 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				double __temp_x137 = ( ( ! (x.hasValue) ) ? (((double) (0) )) : (x.@value) );
				#line 14 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				__temp_me139.x = __temp_x137;
				__temp_me139.y = __temp_y138;
			}
			#line default
		}
		
		
		public static   double distance(global::nx3.geom.Point pt1, global::nx3.geom.Point pt2){
			unchecked {
				#line 44 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				double dx = ( pt1.x - pt2.x );
				double dy = ( pt1.y - pt2.y );
				return global::System.Math.Sqrt(((double) (( ( dx * dx ) + ( dy * dy ) )) ));
			}
			#line default
		}
		
		
		public static   global::nx3.geom.Point interpolate(global::nx3.geom.Point pt1, global::nx3.geom.Point pt2, double f){
			unchecked {
				#line 60 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				return new global::nx3.geom.Point(new global::haxe.lang.Null<double>(( pt2.x + ( f * (( pt1.x - pt2.x )) ) ), true), new global::haxe.lang.Null<double>(( pt2.y + ( f * (( pt1.y - pt2.y )) ) ), true));
			}
			#line default
		}
		
		
		public static   global::nx3.geom.Point polar(double len, double angle){
			unchecked {
				#line 92 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				return new global::nx3.geom.Point(new global::haxe.lang.Null<double>(( len * global::System.Math.Cos(((double) (angle) )) ), true), new global::haxe.lang.Null<double>(( len * global::System.Math.Sin(((double) (angle) )) ), true));
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				return new global::nx3.geom.Point(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				return new global::nx3.geom.Point(global::haxe.lang.Null<object>.ofDynamic<double>(arr[0]), global::haxe.lang.Null<object>.ofDynamic<double>(arr[1]));
			}
			#line default
		}
		
		
		public  double length;
		
		public  double x;
		
		public  double y;
		
		public virtual   global::nx3.geom.Point @add(global::nx3.geom.Point v){
			unchecked {
				#line 22 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				return new global::nx3.geom.Point(new global::haxe.lang.Null<double>(( v.x + this.x ), true), new global::haxe.lang.Null<double>(( v.y + this.y ), true));
			}
			#line default
		}
		
		
		public virtual   global::nx3.geom.Point clone(){
			unchecked {
				#line 29 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				return new global::nx3.geom.Point(new global::haxe.lang.Null<double>(this.x, true), new global::haxe.lang.Null<double>(this.y, true));
			}
			#line default
		}
		
		
		public virtual   void copyFrom(global::nx3.geom.Point sourcePoint){
			unchecked {
				#line 36 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				this.x = sourcePoint.x;
				this.y = sourcePoint.y;
			}
			#line default
		}
		
		
		public virtual   bool @equals(global::nx3.geom.Point toCompare){
			unchecked {
				#line 53 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				return ( ( toCompare.x == this.x ) && ( toCompare.y == this.y ) );
			}
			#line default
		}
		
		
		public virtual   void normalize(double thickness){
			unchecked {
				#line 67 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				if (( ( this.x == 0 ) && ( this.y == 0 ) )) {
					#line 69 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
					return ;
				}
				 else {
					#line 73 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
					double norm = ( thickness / global::System.Math.Sqrt(((double) (( ( this.x * this.x ) + ( this.y * this.y ) )) )) );
					this.x *= norm;
					this.y *= norm;
				}
				
			}
			#line default
		}
		
		
		public virtual   void offset(double dx, double dy){
			unchecked {
				#line 84 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				this.x += dx;
				this.y += dy;
			}
			#line default
		}
		
		
		public virtual   void setTo(double x, double y){
			unchecked {
				#line 99 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				this.x = x;
				this.y = y;
			}
			#line default
		}
		
		
		public virtual   global::nx3.geom.Point subtract(global::nx3.geom.Point v){
			unchecked {
				#line 107 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				return new global::nx3.geom.Point(new global::haxe.lang.Null<double>(( this.x - v.x ), true), new global::haxe.lang.Null<double>(( this.y - v.y ), true));
			}
			#line default
		}
		
		
		public virtual   string toString(){
			unchecked {
				#line 114 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				return global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat("(", global::haxe.lang.Runtime.toString(this.x)), ", "), global::haxe.lang.Runtime.toString(this.y)), ")");
			}
			#line default
		}
		
		
		public virtual   double get_length(){
			unchecked {
				#line 128 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				return global::System.Math.Sqrt(((double) (( ( this.x * this.x ) + ( this.y * this.y ) )) ));
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				switch (hash){
					case 121:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						this.y = ((double) (@value) );
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return @value;
					}
					
					
					case 120:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						this.x = ((double) (@value) );
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return @value;
					}
					
					
					case 520590566:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						this.length = ((double) (@value) );
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return @value;
					}
					
					
					default:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				switch (hash){
					case 121:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						this.y = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return @value;
					}
					
					
					case 120:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						this.x = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return @value;
					}
					
					
					case 520590566:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						this.length = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return @value;
					}
					
					
					default:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				switch (hash){
					case 261031087:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_length") ), ((int) (261031087) ))) );
					}
					
					
					case 946786476:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("toString") ), ((int) (946786476) ))) );
					}
					
					
					case 2014410004:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("subtract") ), ((int) (2014410004) ))) );
					}
					
					
					case 2049937853:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("setTo") ), ((int) (2049937853) ))) );
					}
					
					
					case 1614780307:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("offset") ), ((int) (1614780307) ))) );
					}
					
					
					case 731985805:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("normalize") ), ((int) (731985805) ))) );
					}
					
					
					case 1072885311:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("equals") ), ((int) (1072885311) ))) );
					}
					
					
					case 1214319551:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("copyFrom") ), ((int) (1214319551) ))) );
					}
					
					
					case 1214452573:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("clone") ), ((int) (1214452573) ))) );
					}
					
					
					case 4846113:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("add") ), ((int) (4846113) ))) );
					}
					
					
					case 121:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return this.y;
					}
					
					
					case 120:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return this.x;
					}
					
					
					case 520590566:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						if (handleProperties) {
							#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
							return this.get_length();
						}
						 else {
							#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
							return this.length;
						}
						
					}
					
					
					default:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				switch (hash){
					case 121:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return this.y;
					}
					
					
					case 120:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return this.x;
					}
					
					
					case 520590566:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						if (handleProperties) {
							#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
							return this.get_length();
						}
						 else {
							#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
							return this.length;
						}
						
					}
					
					
					default:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				switch (hash){
					case 261031087:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return this.get_length();
					}
					
					
					case 946786476:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return this.toString();
					}
					
					
					case 2014410004:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return this.subtract(((global::nx3.geom.Point) (dynargs[0]) ));
					}
					
					
					case 2049937853:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						this.setTo(((double) (global::haxe.lang.Runtime.toDouble(dynargs[0])) ), ((double) (global::haxe.lang.Runtime.toDouble(dynargs[1])) ));
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						break;
					}
					
					
					case 1614780307:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						this.offset(((double) (global::haxe.lang.Runtime.toDouble(dynargs[0])) ), ((double) (global::haxe.lang.Runtime.toDouble(dynargs[1])) ));
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						break;
					}
					
					
					case 731985805:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						this.normalize(((double) (global::haxe.lang.Runtime.toDouble(dynargs[0])) ));
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						break;
					}
					
					
					case 1072885311:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return this.@equals(((global::nx3.geom.Point) (dynargs[0]) ));
					}
					
					
					case 1214319551:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						this.copyFrom(((global::nx3.geom.Point) (dynargs[0]) ));
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						break;
					}
					
					
					case 1214452573:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return this.clone();
					}
					
					
					case 4846113:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return this.@add(((global::nx3.geom.Point) (dynargs[0]) ));
					}
					
					
					default:
					{
						#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				baseArr.push("y");
				#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				baseArr.push("x");
				#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				baseArr.push("length");
				#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
				{
					#line 4 "F:\\nx3\\src\\nx3\\geom\\Point.hx"
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


