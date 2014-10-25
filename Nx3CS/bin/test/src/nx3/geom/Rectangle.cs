
#pragma warning disable 109, 114, 219, 429, 168, 162
namespace nx3.geom{
	public  class Rectangle : global::haxe.lang.HxObject {
		public    Rectangle(global::haxe.lang.EmptyObject empty){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				{
				}
				
			}
			#line default
		}
		
		
		public    Rectangle(global::haxe.lang.Null<double> x, global::haxe.lang.Null<double> y, global::haxe.lang.Null<double> width, global::haxe.lang.Null<double> height){
			unchecked {
				#line 24 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				global::nx3.geom.Rectangle.__hx_ctor_nx3_geom_Rectangle(this, x, y, width, height);
			}
			#line default
		}
		
		
		public static   void __hx_ctor_nx3_geom_Rectangle(global::nx3.geom.Rectangle __temp_me134, global::haxe.lang.Null<double> x, global::haxe.lang.Null<double> y, global::haxe.lang.Null<double> width, global::haxe.lang.Null<double> height){
			unchecked {
				#line 24 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double __temp_height133 = ( ( ! (height.hasValue) ) ? (((double) (0) )) : (height.@value) );
				#line 24 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double __temp_width132 = ( ( ! (width.hasValue) ) ? (((double) (0) )) : (width.@value) );
				#line 24 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double __temp_y131 = ( ( ! (y.hasValue) ) ? (((double) (0) )) : (y.@value) );
				#line 24 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double __temp_x130 = ( ( ! (x.hasValue) ) ? (((double) (0) )) : (x.@value) );
				#line 26 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				__temp_me134.x = __temp_x130;
				__temp_me134.y = __temp_y131;
				__temp_me134.width = __temp_width132;
				__temp_me134.height = __temp_height133;
			}
			#line default
		}
		
		
		public static  new object __hx_createEmpty(){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return new global::nx3.geom.Rectangle(((global::haxe.lang.EmptyObject) (global::haxe.lang.EmptyObject.EMPTY) ));
			}
			#line default
		}
		
		
		public static  new object __hx_create(global::Array arr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return new global::nx3.geom.Rectangle(global::haxe.lang.Null<object>.ofDynamic<double>(arr[0]), global::haxe.lang.Null<object>.ofDynamic<double>(arr[1]), global::haxe.lang.Null<object>.ofDynamic<double>(arr[2]), global::haxe.lang.Null<object>.ofDynamic<double>(arr[3]));
			}
			#line default
		}
		
		
		
		
		
		
		public  double height;
		
		
		
		
		
		
		
		
		
		
		
		public  double width;
		
		public  double x;
		
		public  double y;
		
		public virtual   global::nx3.geom.Rectangle clone(){
			unchecked {
				#line 36 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(this.x, true), new global::haxe.lang.Null<double>(this.y, true), new global::haxe.lang.Null<double>(this.width, true), new global::haxe.lang.Null<double>(this.height, true));
			}
			#line default
		}
		
		
		public virtual   bool contains(double x, double y){
			unchecked {
				#line 43 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return ( ( ( ( x >= this.x ) && ( y >= this.y ) ) && ( x < this.get_right() ) ) && ( y < this.get_bottom() ) );
			}
			#line default
		}
		
		
		public virtual   bool containsPoint(global::nx3.geom.Point point){
			unchecked {
				#line 50 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return this.contains(point.x, point.y);
			}
			#line default
		}
		
		
		public virtual   bool containsRect(global::nx3.geom.Rectangle rect){
			unchecked {
				#line 57 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( ( rect.width <= 0 ) || ( rect.height <= 0 ) )) {
					#line 59 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					return ( ( ( ( rect.x > this.x ) && ( rect.y > this.y ) ) && ( rect.get_right() < this.get_right() ) ) && ( rect.get_bottom() < this.get_bottom() ) );
				}
				 else {
					#line 63 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					return ( ( ( ( rect.x >= this.x ) && ( rect.y >= this.y ) ) && ( rect.get_right() <= this.get_right() ) ) && ( rect.get_bottom() <= this.get_bottom() ) );
				}
				
			}
			#line default
		}
		
		
		public virtual   void copyFrom(global::nx3.geom.Rectangle sourceRect){
			unchecked {
				#line 72 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				this.x = sourceRect.x;
				this.y = sourceRect.y;
				this.width = sourceRect.width;
				this.height = sourceRect.height;
			}
			#line default
		}
		
		
		public virtual   bool @equals(global::nx3.geom.Rectangle toCompare){
			unchecked {
				#line 82 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return ( ( ( ( this.x == toCompare.x ) && ( this.y == toCompare.y ) ) && ( this.width == toCompare.width ) ) && ( this.height == toCompare.height ) );
			}
			#line default
		}
		
		
		public virtual   void extendBounds(global::nx3.geom.Rectangle r){
			unchecked {
				#line 89 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double dx = ( this.x - r.x );
				if (( dx > 0 )) {
					#line 92 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					this.x -= dx;
					this.width += dx;
				}
				
				#line 97 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double dy = ( this.y - r.y );
				if (( dy > 0 )) {
					#line 100 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					this.y -= dy;
					this.height += dy;
				}
				
				#line 105 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( r.get_right() > this.get_right() )) {
					#line 107 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					this.set_right(r.get_right());
				}
				
				#line 111 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( r.get_bottom() > this.get_bottom() )) {
					#line 113 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					this.set_bottom(r.get_bottom());
				}
				
			}
			#line default
		}
		
		
		public virtual   void inflate(double dx, double dy){
			unchecked {
				#line 122 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				this.x -= dx;
				this.y -= dy;
				this.width += ( dx * 2 );
				this.height += ( dy * 2 );
			}
			#line default
		}
		
		
		public virtual   void inflatePoint(global::nx3.geom.Point point){
			unchecked {
				#line 132 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				this.inflate(point.x, point.y);
			}
			#line default
		}
		
		
		public virtual   global::nx3.geom.Rectangle intersection(global::nx3.geom.Rectangle toIntersect){
			unchecked {
				#line 139 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double x0 = default(double);
				#line 139 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( this.x < toIntersect.x )) {
					#line 139 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					x0 = toIntersect.x;
				}
				 else {
					#line 139 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					x0 = this.x;
				}
				
				#line 140 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double x1 = default(double);
				#line 140 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( this.get_right() > toIntersect.get_right() )) {
					#line 140 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					x1 = toIntersect.get_right();
				}
				 else {
					#line 140 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					x1 = this.get_right();
				}
				
				#line 141 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( x1 <= x0 )) {
					#line 143 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					return new global::nx3.geom.Rectangle(((global::haxe.lang.Null<double>) (default(global::haxe.lang.Null<double>)) ), ((global::haxe.lang.Null<double>) (default(global::haxe.lang.Null<double>)) ), ((global::haxe.lang.Null<double>) (default(global::haxe.lang.Null<double>)) ), ((global::haxe.lang.Null<double>) (default(global::haxe.lang.Null<double>)) ));
				}
				
				#line 147 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double y0 = default(double);
				#line 147 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( this.y < toIntersect.y )) {
					#line 147 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					y0 = toIntersect.y;
				}
				 else {
					#line 147 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					y0 = this.y;
				}
				
				#line 148 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double y1 = default(double);
				#line 148 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( this.get_bottom() > toIntersect.get_bottom() )) {
					#line 148 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					y1 = toIntersect.get_bottom();
				}
				 else {
					#line 148 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					y1 = this.get_bottom();
				}
				
				#line 149 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( y1 <= y0 )) {
					#line 151 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					return new global::nx3.geom.Rectangle(((global::haxe.lang.Null<double>) (default(global::haxe.lang.Null<double>)) ), ((global::haxe.lang.Null<double>) (default(global::haxe.lang.Null<double>)) ), ((global::haxe.lang.Null<double>) (default(global::haxe.lang.Null<double>)) ), ((global::haxe.lang.Null<double>) (default(global::haxe.lang.Null<double>)) ));
				}
				
				#line 155 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double __temp_stmt269 = default(double);
				#line 155 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				{
					#line 155 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					double number = ( x1 - x0 );
					#line 155 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					int precision = 6;
					#line 155 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					number = ( number * global::System.Math.Pow(((double) (10) ), ((double) (precision) )) );
					#line 155 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					number = ( global::Math.round(number) / global::System.Math.Pow(((double) (10) ), ((double) (precision) )) );
					#line 155 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					__temp_stmt269 = number;
				}
				
				#line 155 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double __temp_stmt270 = default(double);
				#line 155 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				{
					#line 155 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					double number1 = ( y1 - y0 );
					#line 155 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					int precision1 = 6;
					#line 155 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					number1 = ( number1 * global::System.Math.Pow(((double) (10) ), ((double) (precision1) )) );
					#line 155 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					number1 = ( global::Math.round(number1) / global::System.Math.Pow(((double) (10) ), ((double) (precision1) )) );
					#line 155 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					__temp_stmt270 = number1;
				}
				
				#line 155 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(x0, true), new global::haxe.lang.Null<double>(y0, true), new global::haxe.lang.Null<double>(__temp_stmt269, true), new global::haxe.lang.Null<double>(__temp_stmt270, true));
			}
			#line default
		}
		
		
		public virtual   bool intersects(global::nx3.geom.Rectangle toIntersect){
			unchecked {
				#line 162 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double x0 = default(double);
				#line 162 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( this.x < toIntersect.x )) {
					#line 162 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					x0 = toIntersect.x;
				}
				 else {
					#line 162 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					x0 = this.x;
				}
				
				#line 163 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double x1 = default(double);
				#line 163 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( this.get_right() > toIntersect.get_right() )) {
					#line 163 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					x1 = toIntersect.get_right();
				}
				 else {
					#line 163 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					x1 = this.get_right();
				}
				
				#line 164 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( x1 <= x0 )) {
					#line 166 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					return false;
				}
				
				#line 170 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double y0 = default(double);
				#line 170 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( this.y < toIntersect.y )) {
					#line 170 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					y0 = toIntersect.y;
				}
				 else {
					#line 170 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					y0 = this.y;
				}
				
				#line 171 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double y1 = default(double);
				#line 171 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( this.get_bottom() > toIntersect.get_bottom() )) {
					#line 171 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					y1 = toIntersect.get_bottom();
				}
				 else {
					#line 171 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					y1 = this.get_bottom();
				}
				
				#line 172 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return ( y1 > y0 );
			}
			#line default
		}
		
		
		public virtual   bool isEmpty(){
			unchecked {
				#line 179 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return ( ( this.width <= 0 ) || ( this.height <= 0 ) );
			}
			#line default
		}
		
		
		public virtual   void offset(double dx, double dy){
			unchecked {
				#line 186 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				{
					#line 186 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					double number = ( this.x + dx );
					#line 186 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					int precision = 6;
					#line 186 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					number = ( number * global::System.Math.Pow(((double) (10) ), ((double) (precision) )) );
					#line 186 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					number = ( global::Math.round(number) / global::System.Math.Pow(((double) (10) ), ((double) (precision) )) );
					#line 186 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					this.x = number;
				}
				
				#line 187 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				{
					#line 187 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					double number1 = ( this.y + dy );
					#line 187 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					int precision1 = 6;
					#line 187 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					number1 = ( number1 * global::System.Math.Pow(((double) (10) ), ((double) (precision1) )) );
					#line 187 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					number1 = ( global::Math.round(number1) / global::System.Math.Pow(((double) (10) ), ((double) (precision1) )) );
					#line 187 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					this.y = number1;
				}
				
			}
			#line default
		}
		
		
		public virtual   void offsetPoint(global::nx3.geom.Point point){
			unchecked {
				#line 194 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				this.x += point.x;
				this.y += point.y;
			}
			#line default
		}
		
		
		public virtual   void setEmpty(){
			unchecked {
				#line 202 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				this.x = ((double) (0) );
				this.y = ((double) (0) );
				this.width = ((double) (0) );
				this.height = ((double) (0) );
			}
			#line default
		}
		
		
		public virtual   string toString(){
			unchecked {
				#line 212 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat(global::haxe.lang.Runtime.concat("(x=", global::haxe.lang.Runtime.toString(this.x)), ", y="), global::haxe.lang.Runtime.toString(this.y)), ", width="), global::haxe.lang.Runtime.toString(this.width)), ", height="), global::haxe.lang.Runtime.toString(this.height)), ")");
			}
			#line default
		}
		
		
		public virtual   global::nx3.geom.Rectangle union(global::nx3.geom.Rectangle toUnion){
			unchecked {
				#line 252 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double x0 = default(double);
				#line 252 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( this.x > toUnion.x )) {
					#line 252 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					x0 = toUnion.x;
				}
				 else {
					#line 252 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					x0 = this.x;
				}
				
				#line 253 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double x1 = default(double);
				#line 253 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( this.get_right() < toUnion.get_right() )) {
					#line 253 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					x1 = toUnion.get_right();
				}
				 else {
					#line 253 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					x1 = this.get_right();
				}
				
				#line 254 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double y0 = default(double);
				#line 254 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( this.y > toUnion.y )) {
					#line 254 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					y0 = toUnion.y;
				}
				 else {
					#line 254 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					y0 = this.y;
				}
				
				#line 255 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				double y1 = default(double);
				#line 255 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				if (( this.get_bottom() < toUnion.get_bottom() )) {
					#line 255 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					y1 = toUnion.get_bottom();
				}
				 else {
					#line 255 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
					y1 = this.get_bottom();
				}
				
				#line 256 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return new global::nx3.geom.Rectangle(new global::haxe.lang.Null<double>(x0, true), new global::haxe.lang.Null<double>(y0, true), new global::haxe.lang.Null<double>(( x1 - x0 ), true), new global::haxe.lang.Null<double>(( y1 - y0 ), true));
			}
			#line default
		}
		
		
		public virtual   double get_bottom(){
			unchecked {
				#line 268 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return ( this.y + this.height );
			}
			#line default
		}
		
		
		public virtual   double set_bottom(double @value){
			unchecked {
				#line 269 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				this.height = ( @value - this.y );
				#line 269 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return @value;
			}
			#line default
		}
		
		
		public virtual   global::nx3.geom.Point get_bottomRight(){
			unchecked {
				#line 270 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return new global::nx3.geom.Point(new global::haxe.lang.Null<double>(( this.x + this.width ), true), new global::haxe.lang.Null<double>(( this.y + this.height ), true));
			}
			#line default
		}
		
		
		public virtual   global::nx3.geom.Point set_bottomRight(global::nx3.geom.Point @value){
			unchecked {
				#line 271 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				this.width = ( @value.x - this.x );
				#line 271 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				this.height = ( @value.y - this.y );
				#line 271 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return @value.clone();
			}
			#line default
		}
		
		
		public virtual   double get_left(){
			unchecked {
				#line 272 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return this.x;
			}
			#line default
		}
		
		
		public virtual   double set_left(double @value){
			unchecked {
				#line 273 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				this.width -= ( @value - this.x );
				#line 273 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				this.x = @value;
				#line 273 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return @value;
			}
			#line default
		}
		
		
		public virtual   double get_right(){
			unchecked {
				#line 274 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return ( this.x + this.width );
			}
			#line default
		}
		
		
		public virtual   double set_right(double @value){
			unchecked {
				#line 275 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				this.width = ( @value - this.x );
				#line 275 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return @value;
			}
			#line default
		}
		
		
		public virtual   global::nx3.geom.Point get_size(){
			unchecked {
				#line 276 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return new global::nx3.geom.Point(new global::haxe.lang.Null<double>(this.width, true), new global::haxe.lang.Null<double>(this.height, true));
			}
			#line default
		}
		
		
		public virtual   global::nx3.geom.Point set_size(global::nx3.geom.Point @value){
			unchecked {
				#line 277 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				this.width = @value.x;
				#line 277 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				this.height = @value.y;
				#line 277 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return @value.clone();
			}
			#line default
		}
		
		
		public virtual   double get_top(){
			unchecked {
				#line 278 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return this.y;
			}
			#line default
		}
		
		
		public virtual   double set_top(double @value){
			unchecked {
				#line 279 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				this.height -= ( @value - this.y );
				#line 279 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				this.y = @value;
				#line 279 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return @value;
			}
			#line default
		}
		
		
		public virtual   global::nx3.geom.Point get_topLeft(){
			unchecked {
				#line 280 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return new global::nx3.geom.Point(new global::haxe.lang.Null<double>(this.x, true), new global::haxe.lang.Null<double>(this.y, true));
			}
			#line default
		}
		
		
		public virtual   global::nx3.geom.Point set_topLeft(global::nx3.geom.Point @value){
			unchecked {
				#line 281 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				this.x = @value.x;
				#line 281 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				this.y = @value.y;
				#line 281 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return @value.clone();
			}
			#line default
		}
		
		
		public override   double __hx_setField_f(string field, int hash, double @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				switch (hash){
					case 121:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.y = ((double) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					case 120:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.x = ((double) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					case 1247983110:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.width = ((double) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					case 5793429:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.set_top(@value);
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					case 1768164316:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.set_right(@value);
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					case 1202718727:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.set_left(@value);
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					case 38537191:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.height = ((double) (@value) );
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					case 1702422251:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.set_bottom(@value);
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return base.__hx_setField_f(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_setField(string field, int hash, object @value, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				switch (hash){
					case 121:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.y = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					case 120:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.x = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					case 1247983110:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.width = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					case 1757481276:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.set_topLeft(((global::nx3.geom.Point) (@value) ));
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					case 5793429:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.set_top(((double) (global::haxe.lang.Runtime.toDouble(@value)) ));
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					case 1280549057:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.set_size(((global::nx3.geom.Point) (@value) ));
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					case 1768164316:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.set_right(((double) (global::haxe.lang.Runtime.toDouble(@value)) ));
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					case 1202718727:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.set_left(((double) (global::haxe.lang.Runtime.toDouble(@value)) ));
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					case 38537191:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.height = ((double) (global::haxe.lang.Runtime.toDouble(@value)) );
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					case 1324654833:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.set_bottomRight(((global::nx3.geom.Point) (@value) ));
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					case 1702422251:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.set_bottom(((double) (global::haxe.lang.Runtime.toDouble(@value)) ));
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return @value;
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return base.__hx_setField(field, hash, @value, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				switch (hash){
					case 2032693343:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("set_topLeft") ), ((int) (2032693343) ))) );
					}
					
					
					case 1857775955:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_topLeft") ), ((int) (1857775955) ))) );
					}
					
					
					case 432980024:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("set_top") ), ((int) (432980024) ))) );
					}
					
					
					case 650981164:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_top") ), ((int) (650981164) ))) );
					}
					
					
					case 2053879230:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("set_size") ), ((int) (2053879230) ))) );
					}
					
					
					case 1276009546:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_size") ), ((int) (1276009546) ))) );
					}
					
					
					case 274617407:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("set_right") ), ((int) (274617407) ))) );
					}
					
					
					case 755853363:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_right") ), ((int) (755853363) ))) );
					}
					
					
					case 1976048900:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("set_left") ), ((int) (1976048900) ))) );
					}
					
					
					case 1198179216:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_left") ), ((int) (1198179216) ))) );
					}
					
					
					case 195155348:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("set_bottomRight") ), ((int) (195155348) ))) );
					}
					
					
					case 265705608:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_bottomRight") ), ((int) (265705608) ))) );
					}
					
					
					case 1501426984:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("set_bottom") ), ((int) (1501426984) ))) );
					}
					
					
					case 1442862772:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("get_bottom") ), ((int) (1442862772) ))) );
					}
					
					
					case 652698895:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("union") ), ((int) (652698895) ))) );
					}
					
					
					case 946786476:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("toString") ), ((int) (946786476) ))) );
					}
					
					
					case 2114888587:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("setEmpty") ), ((int) (2114888587) ))) );
					}
					
					
					case 1594898365:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("offsetPoint") ), ((int) (1594898365) ))) );
					}
					
					
					case 1614780307:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("offset") ), ((int) (1614780307) ))) );
					}
					
					
					case 207609411:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("isEmpty") ), ((int) (207609411) ))) );
					}
					
					
					case 1676395188:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("intersects") ), ((int) (1676395188) ))) );
					}
					
					
					case 140616265:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("intersection") ), ((int) (140616265) ))) );
					}
					
					
					case 842645065:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("inflatePoint") ), ((int) (842645065) ))) );
					}
					
					
					case 203136135:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("inflate") ), ((int) (203136135) ))) );
					}
					
					
					case 545696751:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("extendBounds") ), ((int) (545696751) ))) );
					}
					
					
					case 1072885311:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("equals") ), ((int) (1072885311) ))) );
					}
					
					
					case 1214319551:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("copyFrom") ), ((int) (1214319551) ))) );
					}
					
					
					case 639422179:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("containsRect") ), ((int) (639422179) ))) );
					}
					
					
					case 317438385:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("containsPoint") ), ((int) (317438385) ))) );
					}
					
					
					case 746281503:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("contains") ), ((int) (746281503) ))) );
					}
					
					
					case 1214452573:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(((object) (this) ), ((string) ("clone") ), ((int) (1214452573) ))) );
					}
					
					
					case 121:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.y;
					}
					
					
					case 120:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.x;
					}
					
					
					case 1247983110:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.width;
					}
					
					
					case 1757481276:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_topLeft();
					}
					
					
					case 5793429:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_top();
					}
					
					
					case 1280549057:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_size();
					}
					
					
					case 1768164316:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_right();
					}
					
					
					case 1202718727:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_left();
					}
					
					
					case 38537191:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.height;
					}
					
					
					case 1324654833:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_bottomRight();
					}
					
					
					case 1702422251:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_bottom();
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   double __hx_getField_f(string field, int hash, bool throwErrors, bool handleProperties){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				switch (hash){
					case 121:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.y;
					}
					
					
					case 120:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.x;
					}
					
					
					case 1247983110:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.width;
					}
					
					
					case 5793429:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_top();
					}
					
					
					case 1768164316:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_right();
					}
					
					
					case 1202718727:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_left();
					}
					
					
					case 38537191:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.height;
					}
					
					
					case 1702422251:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_bottom();
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return base.__hx_getField_f(field, hash, throwErrors, handleProperties);
					}
					
				}
				
			}
			#line default
		}
		
		
		public override   object __hx_invokeField(string field, int hash, global::Array dynargs){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				switch (hash){
					case 2032693343:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.set_topLeft(((global::nx3.geom.Point) (dynargs[0]) ));
					}
					
					
					case 1857775955:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_topLeft();
					}
					
					
					case 432980024:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.set_top(((double) (global::haxe.lang.Runtime.toDouble(dynargs[0])) ));
					}
					
					
					case 650981164:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_top();
					}
					
					
					case 2053879230:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.set_size(((global::nx3.geom.Point) (dynargs[0]) ));
					}
					
					
					case 1276009546:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_size();
					}
					
					
					case 274617407:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.set_right(((double) (global::haxe.lang.Runtime.toDouble(dynargs[0])) ));
					}
					
					
					case 755853363:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_right();
					}
					
					
					case 1976048900:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.set_left(((double) (global::haxe.lang.Runtime.toDouble(dynargs[0])) ));
					}
					
					
					case 1198179216:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_left();
					}
					
					
					case 195155348:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.set_bottomRight(((global::nx3.geom.Point) (dynargs[0]) ));
					}
					
					
					case 265705608:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_bottomRight();
					}
					
					
					case 1501426984:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.set_bottom(((double) (global::haxe.lang.Runtime.toDouble(dynargs[0])) ));
					}
					
					
					case 1442862772:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.get_bottom();
					}
					
					
					case 652698895:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.union(((global::nx3.geom.Rectangle) (dynargs[0]) ));
					}
					
					
					case 946786476:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.toString();
					}
					
					
					case 2114888587:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.setEmpty();
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						break;
					}
					
					
					case 1594898365:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.offsetPoint(((global::nx3.geom.Point) (dynargs[0]) ));
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						break;
					}
					
					
					case 1614780307:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.offset(((double) (global::haxe.lang.Runtime.toDouble(dynargs[0])) ), ((double) (global::haxe.lang.Runtime.toDouble(dynargs[1])) ));
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						break;
					}
					
					
					case 207609411:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.isEmpty();
					}
					
					
					case 1676395188:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.intersects(((global::nx3.geom.Rectangle) (dynargs[0]) ));
					}
					
					
					case 140616265:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.intersection(((global::nx3.geom.Rectangle) (dynargs[0]) ));
					}
					
					
					case 842645065:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.inflatePoint(((global::nx3.geom.Point) (dynargs[0]) ));
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						break;
					}
					
					
					case 203136135:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.inflate(((double) (global::haxe.lang.Runtime.toDouble(dynargs[0])) ), ((double) (global::haxe.lang.Runtime.toDouble(dynargs[1])) ));
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						break;
					}
					
					
					case 545696751:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.extendBounds(((global::nx3.geom.Rectangle) (dynargs[0]) ));
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						break;
					}
					
					
					case 1072885311:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.@equals(((global::nx3.geom.Rectangle) (dynargs[0]) ));
					}
					
					
					case 1214319551:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						this.copyFrom(((global::nx3.geom.Rectangle) (dynargs[0]) ));
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						break;
					}
					
					
					case 639422179:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.containsRect(((global::nx3.geom.Rectangle) (dynargs[0]) ));
					}
					
					
					case 317438385:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.containsPoint(((global::nx3.geom.Point) (dynargs[0]) ));
					}
					
					
					case 746281503:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.contains(((double) (global::haxe.lang.Runtime.toDouble(dynargs[0])) ), ((double) (global::haxe.lang.Runtime.toDouble(dynargs[1])) ));
					}
					
					
					case 1214452573:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return this.clone();
					}
					
					
					default:
					{
						#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				return default(object);
			}
			#line default
		}
		
		
		public override   void __hx_getFields(global::Array<object> baseArr){
			unchecked {
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				baseArr.push("y");
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				baseArr.push("x");
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				baseArr.push("width");
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				baseArr.push("topLeft");
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				baseArr.push("top");
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				baseArr.push("size");
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				baseArr.push("right");
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				baseArr.push("left");
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				baseArr.push("height");
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				baseArr.push("bottomRight");
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				baseArr.push("bottom");
				#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
				{
					#line 8 "F:\\nx3\\src\\nx3\\geom\\Rectangle.hx"
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


