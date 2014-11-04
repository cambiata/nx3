package nx3.geom;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Rectangle extends haxe.lang.HxObject
{
	public    Rectangle(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    Rectangle(java.lang.Object x, java.lang.Object y, java.lang.Object width, java.lang.Object height)
	{
		nx3.geom.Rectangle.__hx_ctor_nx3_geom_Rectangle(this, x, y, width, height);
	}
	
	
	public static   void __hx_ctor_nx3_geom_Rectangle(nx3.geom.Rectangle __temp_me161, java.lang.Object x, java.lang.Object y, java.lang.Object width, java.lang.Object height)
	{
		double __temp_height160 = ( (( height == null )) ? (((double) (0) )) : (((double) (haxe.lang.Runtime.toDouble(height)) )) );
		double __temp_width159 = ( (( width == null )) ? (((double) (0) )) : (((double) (haxe.lang.Runtime.toDouble(width)) )) );
		double __temp_y158 = ( (( y == null )) ? (((double) (0) )) : (((double) (haxe.lang.Runtime.toDouble(y)) )) );
		double __temp_x157 = ( (( x == null )) ? (((double) (0) )) : (((double) (haxe.lang.Runtime.toDouble(x)) )) );
		__temp_me161.x = __temp_x157;
		__temp_me161.y = __temp_y158;
		__temp_me161.width = __temp_width159;
		__temp_me161.height = __temp_height160;
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.geom.Rectangle(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.geom.Rectangle(((java.lang.Object) (arr.__get(0)) ), ((java.lang.Object) (arr.__get(1)) ), ((java.lang.Object) (arr.__get(2)) ), ((java.lang.Object) (arr.__get(3)) ));
	}
	
	
	
	
	
	
	public  double height;
	
	
	
	
	
	
	
	
	
	
	
	public  double width;
	
	public  double x;
	
	public  double y;
	
	public   nx3.geom.Rectangle clone()
	{
		return new nx3.geom.Rectangle(((java.lang.Object) (this.x) ), ((java.lang.Object) (this.y) ), ((java.lang.Object) (this.width) ), ((java.lang.Object) (this.height) ));
	}
	
	
	public   boolean contains(double x, double y)
	{
		return ( ( ( ( x >= this.x ) && ( y >= this.y ) ) && ( x < this.get_right() ) ) && ( y < this.get_bottom() ) );
	}
	
	
	public   boolean containsPoint(nx3.geom.Point point)
	{
		return this.contains(point.x, point.y);
	}
	
	
	public   boolean containsRect(nx3.geom.Rectangle rect)
	{
		if (( ( rect.width <= 0 ) || ( rect.height <= 0 ) )) 
		{
			return ( ( ( ( rect.x > this.x ) && ( rect.y > this.y ) ) && ( rect.get_right() < this.get_right() ) ) && ( rect.get_bottom() < this.get_bottom() ) );
		}
		 else 
		{
			return ( ( ( ( rect.x >= this.x ) && ( rect.y >= this.y ) ) && ( rect.get_right() <= this.get_right() ) ) && ( rect.get_bottom() <= this.get_bottom() ) );
		}
		
	}
	
	
	public   void copyFrom(nx3.geom.Rectangle sourceRect)
	{
		this.x = sourceRect.x;
		this.y = sourceRect.y;
		this.width = sourceRect.width;
		this.height = sourceRect.height;
	}
	
	
	public   boolean equals(nx3.geom.Rectangle toCompare)
	{
		return ( ( ( ( this.x == toCompare.x ) && ( this.y == toCompare.y ) ) && ( this.width == toCompare.width ) ) && ( this.height == toCompare.height ) );
	}
	
	
	public   void extendBounds(nx3.geom.Rectangle r)
	{
		double dx = ( this.x - r.x );
		if (( dx > 0 )) 
		{
			this.x -= dx;
			this.width += dx;
		}
		
		double dy = ( this.y - r.y );
		if (( dy > 0 )) 
		{
			this.y -= dy;
			this.height += dy;
		}
		
		if (( r.get_right() > this.get_right() )) 
		{
			this.set_right(r.get_right());
		}
		
		if (( r.get_bottom() > this.get_bottom() )) 
		{
			this.set_bottom(r.get_bottom());
		}
		
	}
	
	
	public   void inflate(double dx, double dy)
	{
		this.x -= dx;
		this.y -= dy;
		this.width += ( dx * 2 );
		this.height += ( dy * 2 );
	}
	
	
	public   void inflatePoint(nx3.geom.Point point)
	{
		this.inflate(point.x, point.y);
	}
	
	
	public   nx3.geom.Rectangle intersection(nx3.geom.Rectangle toIntersect)
	{
		double x0 = 0.0;
		if (( this.x < toIntersect.x )) 
		{
			x0 = toIntersect.x;
		}
		 else 
		{
			x0 = this.x;
		}
		
		double x1 = 0.0;
		if (( this.get_right() > toIntersect.get_right() )) 
		{
			x1 = toIntersect.get_right();
		}
		 else 
		{
			x1 = this.get_right();
		}
		
		if (( x1 <= x0 )) 
		{
			return new nx3.geom.Rectangle(((java.lang.Object) (null) ), ((java.lang.Object) (null) ), ((java.lang.Object) (null) ), ((java.lang.Object) (null) ));
		}
		
		double y0 = 0.0;
		if (( this.y < toIntersect.y )) 
		{
			y0 = toIntersect.y;
		}
		 else 
		{
			y0 = this.y;
		}
		
		double y1 = 0.0;
		if (( this.get_bottom() > toIntersect.get_bottom() )) 
		{
			y1 = toIntersect.get_bottom();
		}
		 else 
		{
			y1 = this.get_bottom();
		}
		
		if (( y1 <= y0 )) 
		{
			return new nx3.geom.Rectangle(((java.lang.Object) (null) ), ((java.lang.Object) (null) ), ((java.lang.Object) (null) ), ((java.lang.Object) (null) ));
		}
		
		double __temp_stmt647 = 0.0;
		{
			double number = ( x1 - x0 );
			int precision = 6;
			number = ( number * java.lang.Math.pow(((double) (10) ), ((double) (precision) )) );
			number = ( ((int) (java.lang.Math.round(number)) ) / java.lang.Math.pow(((double) (10) ), ((double) (precision) )) );
			__temp_stmt647 = number;
		}
		
		double __temp_stmt648 = 0.0;
		{
			double number1 = ( y1 - y0 );
			int precision1 = 6;
			number1 = ( number1 * java.lang.Math.pow(((double) (10) ), ((double) (precision1) )) );
			number1 = ( ((int) (java.lang.Math.round(number1)) ) / java.lang.Math.pow(((double) (10) ), ((double) (precision1) )) );
			__temp_stmt648 = number1;
		}
		
		return new nx3.geom.Rectangle(((java.lang.Object) (x0) ), ((java.lang.Object) (y0) ), ((java.lang.Object) (__temp_stmt647) ), ((java.lang.Object) (__temp_stmt648) ));
	}
	
	
	public   boolean intersects(nx3.geom.Rectangle toIntersect)
	{
		double x0 = 0.0;
		if (( this.x < toIntersect.x )) 
		{
			x0 = toIntersect.x;
		}
		 else 
		{
			x0 = this.x;
		}
		
		double x1 = 0.0;
		if (( this.get_right() > toIntersect.get_right() )) 
		{
			x1 = toIntersect.get_right();
		}
		 else 
		{
			x1 = this.get_right();
		}
		
		if (( x1 <= x0 )) 
		{
			return false;
		}
		
		double y0 = 0.0;
		if (( this.y < toIntersect.y )) 
		{
			y0 = toIntersect.y;
		}
		 else 
		{
			y0 = this.y;
		}
		
		double y1 = 0.0;
		if (( this.get_bottom() > toIntersect.get_bottom() )) 
		{
			y1 = toIntersect.get_bottom();
		}
		 else 
		{
			y1 = this.get_bottom();
		}
		
		return ( y1 > y0 );
	}
	
	
	public   boolean isEmpty()
	{
		return ( ( this.width <= 0 ) || ( this.height <= 0 ) );
	}
	
	
	public   void offset(double dx, double dy)
	{
		{
			double number = ( this.x + dx );
			int precision = 6;
			number = ( number * java.lang.Math.pow(((double) (10) ), ((double) (precision) )) );
			number = ( ((int) (java.lang.Math.round(number)) ) / java.lang.Math.pow(((double) (10) ), ((double) (precision) )) );
			this.x = number;
		}
		
		{
			double number1 = ( this.y + dy );
			int precision1 = 6;
			number1 = ( number1 * java.lang.Math.pow(((double) (10) ), ((double) (precision1) )) );
			number1 = ( ((int) (java.lang.Math.round(number1)) ) / java.lang.Math.pow(((double) (10) ), ((double) (precision1) )) );
			this.y = number1;
		}
		
	}
	
	
	public   void offsetPoint(nx3.geom.Point point)
	{
		this.x += point.x;
		this.y += point.y;
	}
	
	
	public   void setEmpty()
	{
		this.x = ((double) (0) );
		this.y = ((double) (0) );
		this.width = ((double) (0) );
		this.height = ((double) (0) );
	}
	
	
	@Override public   java.lang.String toString()
	{
		return ( ( ( ( ( ( ( ( "(x=" + haxe.lang.Runtime.toString(this.x) ) + ", y=" ) + haxe.lang.Runtime.toString(this.y) ) + ", width=" ) + haxe.lang.Runtime.toString(this.width) ) + ", height=" ) + haxe.lang.Runtime.toString(this.height) ) + ")" );
	}
	
	
	public   nx3.geom.Rectangle union(nx3.geom.Rectangle toUnion)
	{
		double x0 = 0.0;
		if (( this.x > toUnion.x )) 
		{
			x0 = toUnion.x;
		}
		 else 
		{
			x0 = this.x;
		}
		
		double x1 = 0.0;
		if (( this.get_right() < toUnion.get_right() )) 
		{
			x1 = toUnion.get_right();
		}
		 else 
		{
			x1 = this.get_right();
		}
		
		double y0 = 0.0;
		if (( this.y > toUnion.y )) 
		{
			y0 = toUnion.y;
		}
		 else 
		{
			y0 = this.y;
		}
		
		double y1 = 0.0;
		if (( this.get_bottom() < toUnion.get_bottom() )) 
		{
			y1 = toUnion.get_bottom();
		}
		 else 
		{
			y1 = this.get_bottom();
		}
		
		return new nx3.geom.Rectangle(((java.lang.Object) (x0) ), ((java.lang.Object) (y0) ), ((java.lang.Object) (( x1 - x0 )) ), ((java.lang.Object) (( y1 - y0 )) ));
	}
	
	
	public   double get_bottom()
	{
		return ( this.y + this.height );
	}
	
	
	public   double set_bottom(double value)
	{
		this.height = ( value - this.y );
		return value;
	}
	
	
	public   nx3.geom.Point get_bottomRight()
	{
		return new nx3.geom.Point(((java.lang.Object) (( this.x + this.width )) ), ((java.lang.Object) (( this.y + this.height )) ));
	}
	
	
	public   nx3.geom.Point set_bottomRight(nx3.geom.Point value)
	{
		this.width = ( value.x - this.x );
		this.height = ( value.y - this.y );
		return value.clone();
	}
	
	
	public   double get_left()
	{
		return this.x;
	}
	
	
	public   double set_left(double value)
	{
		this.width -= ( value - this.x );
		this.x = value;
		return value;
	}
	
	
	public   double get_right()
	{
		return ( this.x + this.width );
	}
	
	
	public   double set_right(double value)
	{
		this.width = ( value - this.x );
		return value;
	}
	
	
	public   nx3.geom.Point get_size()
	{
		return new nx3.geom.Point(((java.lang.Object) (this.width) ), ((java.lang.Object) (this.height) ));
	}
	
	
	public   nx3.geom.Point set_size(nx3.geom.Point value)
	{
		this.width = value.x;
		this.height = value.y;
		return value.clone();
	}
	
	
	public   double get_top()
	{
		return this.y;
	}
	
	
	public   double set_top(double value)
	{
		this.height -= ( value - this.y );
		this.y = value;
		return value;
	}
	
	
	public   nx3.geom.Point get_topLeft()
	{
		return new nx3.geom.Point(((java.lang.Object) (this.x) ), ((java.lang.Object) (this.y) ));
	}
	
	
	public   nx3.geom.Point set_topLeft(nx3.geom.Point value)
	{
		this.x = value.x;
		this.y = value.y;
		return value.clone();
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef649 = true;
			switch (field.hashCode())
			{
				case 121:
				{
					if (field.equals("y")) 
					{
						__temp_executeDef649 = false;
						this.y = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1383228885:
				{
					if (field.equals("bottom")) 
					{
						__temp_executeDef649 = false;
						this.set_bottom(value);
						return value;
					}
					
					break;
				}
				
				
				case 120:
				{
					if (field.equals("x")) 
					{
						__temp_executeDef649 = false;
						this.x = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1221029593:
				{
					if (field.equals("height")) 
					{
						__temp_executeDef649 = false;
						this.height = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 113126854:
				{
					if (field.equals("width")) 
					{
						__temp_executeDef649 = false;
						this.width = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 3317767:
				{
					if (field.equals("left")) 
					{
						__temp_executeDef649 = false;
						this.set_left(value);
						return value;
					}
					
					break;
				}
				
				
				case 115029:
				{
					if (field.equals("top")) 
					{
						__temp_executeDef649 = false;
						this.set_top(value);
						return value;
					}
					
					break;
				}
				
				
				case 108511772:
				{
					if (field.equals("right")) 
					{
						__temp_executeDef649 = false;
						this.set_right(value);
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef649) 
			{
				return super.__hx_setField_f(field, value, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_setField(java.lang.String field, java.lang.Object value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef650 = true;
			switch (field.hashCode())
			{
				case 121:
				{
					if (field.equals("y")) 
					{
						__temp_executeDef650 = false;
						this.y = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -1383228885:
				{
					if (field.equals("bottom")) 
					{
						__temp_executeDef650 = false;
						this.set_bottom(((double) (haxe.lang.Runtime.toDouble(value)) ));
						return value;
					}
					
					break;
				}
				
				
				case 120:
				{
					if (field.equals("x")) 
					{
						__temp_executeDef650 = false;
						this.x = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -621290831:
				{
					if (field.equals("bottomRight")) 
					{
						__temp_executeDef650 = false;
						this.set_bottomRight(((nx3.geom.Point) (value) ));
						return value;
					}
					
					break;
				}
				
				
				case 113126854:
				{
					if (field.equals("width")) 
					{
						__temp_executeDef650 = false;
						this.width = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -1221029593:
				{
					if (field.equals("height")) 
					{
						__temp_executeDef650 = false;
						this.height = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -1140120836:
				{
					if (field.equals("topLeft")) 
					{
						__temp_executeDef650 = false;
						this.set_topLeft(((nx3.geom.Point) (value) ));
						return value;
					}
					
					break;
				}
				
				
				case 3317767:
				{
					if (field.equals("left")) 
					{
						__temp_executeDef650 = false;
						this.set_left(((double) (haxe.lang.Runtime.toDouble(value)) ));
						return value;
					}
					
					break;
				}
				
				
				case 115029:
				{
					if (field.equals("top")) 
					{
						__temp_executeDef650 = false;
						this.set_top(((double) (haxe.lang.Runtime.toDouble(value)) ));
						return value;
					}
					
					break;
				}
				
				
				case 108511772:
				{
					if (field.equals("right")) 
					{
						__temp_executeDef650 = false;
						this.set_right(((double) (haxe.lang.Runtime.toDouble(value)) ));
						return value;
					}
					
					break;
				}
				
				
				case 3530753:
				{
					if (field.equals("size")) 
					{
						__temp_executeDef650 = false;
						this.set_size(((nx3.geom.Point) (value) ));
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef650) 
			{
				return super.__hx_setField(field, value, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_getField(java.lang.String field, boolean throwErrors, boolean isCheck, boolean handleProperties)
	{
		{
			boolean __temp_executeDef651 = true;
			switch (field.hashCode())
			{
				case -1152187361:
				{
					if (field.equals("set_topLeft")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("set_topLeft"))) );
					}
					
					break;
				}
				
				
				case -1383228885:
				{
					if (field.equals("bottom")) 
					{
						__temp_executeDef651 = false;
						return this.get_bottom();
					}
					
					break;
				}
				
				
				case -1063607533:
				{
					if (field.equals("get_topLeft")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_topLeft"))) );
					}
					
					break;
				}
				
				
				case -621290831:
				{
					if (field.equals("bottomRight")) 
					{
						__temp_executeDef651 = false;
						return this.get_bottomRight();
					}
					
					break;
				}
				
				
				case 1985326072:
				{
					if (field.equals("set_top")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("set_top"))) );
					}
					
					break;
				}
				
				
				case -1221029593:
				{
					if (field.equals("height")) 
					{
						__temp_executeDef651 = false;
						return this.height;
					}
					
					break;
				}
				
				
				case -74783508:
				{
					if (field.equals("get_top")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_top"))) );
					}
					
					break;
				}
				
				
				case 3317767:
				{
					if (field.equals("left")) 
					{
						__temp_executeDef651 = false;
						return this.get_left();
					}
					
					break;
				}
				
				
				case 1415530942:
				{
					if (field.equals("set_size")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("set_size"))) );
					}
					
					break;
				}
				
				
				case 108511772:
				{
					if (field.equals("right")) 
					{
						__temp_executeDef651 = false;
						return this.get_right();
					}
					
					break;
				}
				
				
				case 1976643402:
				{
					if (field.equals("get_size")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_size"))) );
					}
					
					break;
				}
				
				
				case 3530753:
				{
					if (field.equals("size")) 
					{
						__temp_executeDef651 = false;
						return this.get_size();
					}
					
					break;
				}
				
				
				case 930844671:
				{
					if (field.equals("set_right")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("set_right"))) );
					}
					
					break;
				}
				
				
				case 115029:
				{
					if (field.equals("top")) 
					{
						__temp_executeDef651 = false;
						return this.get_top();
					}
					
					break;
				}
				
				
				case 1145461747:
				{
					if (field.equals("get_right")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_right"))) );
					}
					
					break;
				}
				
				
				case -1140120836:
				{
					if (field.equals("topLeft")) 
					{
						__temp_executeDef651 = false;
						return this.get_topLeft();
					}
					
					break;
				}
				
				
				case 1415317956:
				{
					if (field.equals("set_left")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("set_left"))) );
					}
					
					break;
				}
				
				
				case 113126854:
				{
					if (field.equals("width")) 
					{
						__temp_executeDef651 = false;
						return this.width;
					}
					
					break;
				}
				
				
				case 1976430416:
				{
					if (field.equals("get_left")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_left"))) );
					}
					
					break;
				}
				
				
				case 120:
				{
					if (field.equals("x")) 
					{
						__temp_executeDef651 = false;
						return this.x;
					}
					
					break;
				}
				
				
				case 1129607764:
				{
					if (field.equals("set_bottomRight")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("set_bottomRight"))) );
					}
					
					break;
				}
				
				
				case 121:
				{
					if (field.equals("y")) 
					{
						__temp_executeDef651 = false;
						return this.y;
					}
					
					break;
				}
				
				
				case 218855240:
				{
					if (field.equals("get_bottomRight")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_bottomRight"))) );
					}
					
					break;
				}
				
				
				case 94756189:
				{
					if (field.equals("clone")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("clone"))) );
					}
					
					break;
				}
				
				
				case -1660712792:
				{
					if (field.equals("set_bottom")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("set_bottom"))) );
					}
					
					break;
				}
				
				
				case -567445985:
				{
					if (field.equals("contains")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("contains"))) );
					}
					
					break;
				}
				
				
				case 697449268:
				{
					if (field.equals("get_bottom")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_bottom"))) );
					}
					
					break;
				}
				
				
				case -1957827919:
				{
					if (field.equals("containsPoint")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("containsPoint"))) );
					}
					
					break;
				}
				
				
				case 111433423:
				{
					if (field.equals("union")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("union"))) );
					}
					
					break;
				}
				
				
				case -2141315933:
				{
					if (field.equals("containsRect")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("containsRect"))) );
					}
					
					break;
				}
				
				
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("toString"))) );
					}
					
					break;
				}
				
				
				case -506365761:
				{
					if (field.equals("copyFrom")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("copyFrom"))) );
					}
					
					break;
				}
				
				
				case 1391347211:
				{
					if (field.equals("setEmpty")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("setEmpty"))) );
					}
					
					break;
				}
				
				
				case -1295482945:
				{
					if (field.equals("equals")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("equals"))) );
					}
					
					break;
				}
				
				
				case 1262150845:
				{
					if (field.equals("offsetPoint")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("offsetPoint"))) );
					}
					
					break;
				}
				
				
				case -936090001:
				{
					if (field.equals("extendBounds")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("extendBounds"))) );
					}
					
					break;
				}
				
				
				case -1019779949:
				{
					if (field.equals("offset")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("offset"))) );
					}
					
					break;
				}
				
				
				case 1945326087:
				{
					if (field.equals("inflate")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("inflate"))) );
					}
					
					break;
				}
				
				
				case 2058039875:
				{
					if (field.equals("isEmpty")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("isEmpty"))) );
					}
					
					break;
				}
				
				
				case 165494729:
				{
					if (field.equals("inflatePoint")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("inflatePoint"))) );
					}
					
					break;
				}
				
				
				case -1586413772:
				{
					if (field.equals("intersects")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("intersects"))) );
					}
					
					break;
				}
				
				
				case 169749129:
				{
					if (field.equals("intersection")) 
					{
						__temp_executeDef651 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("intersection"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef651) 
			{
				return super.__hx_getField(field, throwErrors, isCheck, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   double __hx_getField_f(java.lang.String field, boolean throwErrors, boolean handleProperties)
	{
		{
			boolean __temp_executeDef652 = true;
			switch (field.hashCode())
			{
				case 121:
				{
					if (field.equals("y")) 
					{
						__temp_executeDef652 = false;
						return this.y;
					}
					
					break;
				}
				
				
				case -1383228885:
				{
					if (field.equals("bottom")) 
					{
						__temp_executeDef652 = false;
						return this.get_bottom();
					}
					
					break;
				}
				
				
				case 120:
				{
					if (field.equals("x")) 
					{
						__temp_executeDef652 = false;
						return this.x;
					}
					
					break;
				}
				
				
				case -1221029593:
				{
					if (field.equals("height")) 
					{
						__temp_executeDef652 = false;
						return this.height;
					}
					
					break;
				}
				
				
				case 113126854:
				{
					if (field.equals("width")) 
					{
						__temp_executeDef652 = false;
						return this.width;
					}
					
					break;
				}
				
				
				case 3317767:
				{
					if (field.equals("left")) 
					{
						__temp_executeDef652 = false;
						return this.get_left();
					}
					
					break;
				}
				
				
				case 115029:
				{
					if (field.equals("top")) 
					{
						__temp_executeDef652 = false;
						return this.get_top();
					}
					
					break;
				}
				
				
				case 108511772:
				{
					if (field.equals("right")) 
					{
						__temp_executeDef652 = false;
						return this.get_right();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef652) 
			{
				return super.__hx_getField_f(field, throwErrors, handleProperties);
			}
			 else 
			{
				throw null;
			}
			
		}
		
	}
	
	
	@Override public   java.lang.Object __hx_invokeField(java.lang.String field, haxe.root.Array dynargs)
	{
		{
			boolean __temp_executeDef653 = true;
			switch (field.hashCode())
			{
				case -1152187361:
				{
					if (field.equals("set_topLeft")) 
					{
						__temp_executeDef653 = false;
						return this.set_topLeft(((nx3.geom.Point) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 94756189:
				{
					if (field.equals("clone")) 
					{
						__temp_executeDef653 = false;
						return this.clone();
					}
					
					break;
				}
				
				
				case -1063607533:
				{
					if (field.equals("get_topLeft")) 
					{
						__temp_executeDef653 = false;
						return this.get_topLeft();
					}
					
					break;
				}
				
				
				case -567445985:
				{
					if (field.equals("contains")) 
					{
						__temp_executeDef653 = false;
						return this.contains(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ));
					}
					
					break;
				}
				
				
				case 1985326072:
				{
					if (field.equals("set_top")) 
					{
						__temp_executeDef653 = false;
						return this.set_top(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
				case -1957827919:
				{
					if (field.equals("containsPoint")) 
					{
						__temp_executeDef653 = false;
						return this.containsPoint(((nx3.geom.Point) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -74783508:
				{
					if (field.equals("get_top")) 
					{
						__temp_executeDef653 = false;
						return this.get_top();
					}
					
					break;
				}
				
				
				case -2141315933:
				{
					if (field.equals("containsRect")) 
					{
						__temp_executeDef653 = false;
						return this.containsRect(((nx3.geom.Rectangle) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 1415530942:
				{
					if (field.equals("set_size")) 
					{
						__temp_executeDef653 = false;
						return this.set_size(((nx3.geom.Point) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -506365761:
				{
					if (field.equals("copyFrom")) 
					{
						__temp_executeDef653 = false;
						this.copyFrom(((nx3.geom.Rectangle) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 1976643402:
				{
					if (field.equals("get_size")) 
					{
						__temp_executeDef653 = false;
						return this.get_size();
					}
					
					break;
				}
				
				
				case -1295482945:
				{
					if (field.equals("equals")) 
					{
						__temp_executeDef653 = false;
						return this.equals(((nx3.geom.Rectangle) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 930844671:
				{
					if (field.equals("set_right")) 
					{
						__temp_executeDef653 = false;
						return this.set_right(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
				case -936090001:
				{
					if (field.equals("extendBounds")) 
					{
						__temp_executeDef653 = false;
						this.extendBounds(((nx3.geom.Rectangle) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 1145461747:
				{
					if (field.equals("get_right")) 
					{
						__temp_executeDef653 = false;
						return this.get_right();
					}
					
					break;
				}
				
				
				case 1945326087:
				{
					if (field.equals("inflate")) 
					{
						__temp_executeDef653 = false;
						this.inflate(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ));
					}
					
					break;
				}
				
				
				case 1415317956:
				{
					if (field.equals("set_left")) 
					{
						__temp_executeDef653 = false;
						return this.set_left(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
				case 165494729:
				{
					if (field.equals("inflatePoint")) 
					{
						__temp_executeDef653 = false;
						this.inflatePoint(((nx3.geom.Point) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 1976430416:
				{
					if (field.equals("get_left")) 
					{
						__temp_executeDef653 = false;
						return this.get_left();
					}
					
					break;
				}
				
				
				case 169749129:
				{
					if (field.equals("intersection")) 
					{
						__temp_executeDef653 = false;
						return this.intersection(((nx3.geom.Rectangle) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 1129607764:
				{
					if (field.equals("set_bottomRight")) 
					{
						__temp_executeDef653 = false;
						return this.set_bottomRight(((nx3.geom.Point) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -1586413772:
				{
					if (field.equals("intersects")) 
					{
						__temp_executeDef653 = false;
						return this.intersects(((nx3.geom.Rectangle) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 218855240:
				{
					if (field.equals("get_bottomRight")) 
					{
						__temp_executeDef653 = false;
						return this.get_bottomRight();
					}
					
					break;
				}
				
				
				case 2058039875:
				{
					if (field.equals("isEmpty")) 
					{
						__temp_executeDef653 = false;
						return this.isEmpty();
					}
					
					break;
				}
				
				
				case -1660712792:
				{
					if (field.equals("set_bottom")) 
					{
						__temp_executeDef653 = false;
						return this.set_bottom(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
				case -1019779949:
				{
					if (field.equals("offset")) 
					{
						__temp_executeDef653 = false;
						this.offset(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ));
					}
					
					break;
				}
				
				
				case 697449268:
				{
					if (field.equals("get_bottom")) 
					{
						__temp_executeDef653 = false;
						return this.get_bottom();
					}
					
					break;
				}
				
				
				case 1262150845:
				{
					if (field.equals("offsetPoint")) 
					{
						__temp_executeDef653 = false;
						this.offsetPoint(((nx3.geom.Point) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 111433423:
				{
					if (field.equals("union")) 
					{
						__temp_executeDef653 = false;
						return this.union(((nx3.geom.Rectangle) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 1391347211:
				{
					if (field.equals("setEmpty")) 
					{
						__temp_executeDef653 = false;
						this.setEmpty();
					}
					
					break;
				}
				
				
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef653 = false;
						return this.toString();
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef653) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("y");
		baseArr.push("x");
		baseArr.push("width");
		baseArr.push("topLeft");
		baseArr.push("top");
		baseArr.push("size");
		baseArr.push("right");
		baseArr.push("left");
		baseArr.push("height");
		baseArr.push("bottomRight");
		baseArr.push("bottom");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


