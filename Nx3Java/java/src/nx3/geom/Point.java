package nx3.geom;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Point extends haxe.lang.HxObject
{
	public    Point(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    Point(java.lang.Object x, java.lang.Object y)
	{
		nx3.geom.Point.__hx_ctor_nx3_geom_Point(this, x, y);
	}
	
	
	public static   void __hx_ctor_nx3_geom_Point(nx3.geom.Point __temp_me167, java.lang.Object x, java.lang.Object y)
	{
		double __temp_y166 = ( (( y == null )) ? (((double) (0) )) : (((double) (haxe.lang.Runtime.toDouble(y)) )) );
		double __temp_x165 = ( (( x == null )) ? (((double) (0) )) : (((double) (haxe.lang.Runtime.toDouble(x)) )) );
		__temp_me167.x = __temp_x165;
		__temp_me167.y = __temp_y166;
	}
	
	
	public static   double distance(nx3.geom.Point pt1, nx3.geom.Point pt2)
	{
		double dx = ( pt1.x - pt2.x );
		double dy = ( pt1.y - pt2.y );
		return java.lang.Math.sqrt(( ( dx * dx ) + ( dy * dy ) ));
	}
	
	
	public static   nx3.geom.Point interpolate(nx3.geom.Point pt1, nx3.geom.Point pt2, double f)
	{
		return new nx3.geom.Point(((java.lang.Object) (( pt2.x + ( f * (( pt1.x - pt2.x )) ) )) ), ((java.lang.Object) (( pt2.y + ( f * (( pt1.y - pt2.y )) ) )) ));
	}
	
	
	public static   nx3.geom.Point polar(double len, double angle)
	{
		return new nx3.geom.Point(((java.lang.Object) (( len * java.lang.Math.cos(angle) )) ), ((java.lang.Object) (( len * java.lang.Math.sin(angle) )) ));
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.geom.Point(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.geom.Point(((java.lang.Object) (arr.__get(0)) ), ((java.lang.Object) (arr.__get(1)) ));
	}
	
	
	public  double length;
	
	public  double x;
	
	public  double y;
	
	public   nx3.geom.Point add(nx3.geom.Point v)
	{
		return new nx3.geom.Point(((java.lang.Object) (( v.x + this.x )) ), ((java.lang.Object) (( v.y + this.y )) ));
	}
	
	
	public   nx3.geom.Point clone()
	{
		return new nx3.geom.Point(((java.lang.Object) (this.x) ), ((java.lang.Object) (this.y) ));
	}
	
	
	public   void copyFrom(nx3.geom.Point sourcePoint)
	{
		this.x = sourcePoint.x;
		this.y = sourcePoint.y;
	}
	
	
	public   boolean equals(nx3.geom.Point toCompare)
	{
		return ( ( toCompare.x == this.x ) && ( toCompare.y == this.y ) );
	}
	
	
	public   void normalize(double thickness)
	{
		if (( ( this.x == 0 ) && ( this.y == 0 ) )) 
		{
			return ;
		}
		 else 
		{
			double norm = ( thickness / java.lang.Math.sqrt(( ( this.x * this.x ) + ( this.y * this.y ) )) );
			this.x *= norm;
			this.y *= norm;
		}
		
	}
	
	
	public   void offset(double dx, double dy)
	{
		this.x += dx;
		this.y += dy;
	}
	
	
	public   void setTo(double x, double y)
	{
		this.x = x;
		this.y = y;
	}
	
	
	public   nx3.geom.Point subtract(nx3.geom.Point v)
	{
		return new nx3.geom.Point(((java.lang.Object) (( this.x - v.x )) ), ((java.lang.Object) (( this.y - v.y )) ));
	}
	
	
	@Override public   java.lang.String toString()
	{
		return ( ( ( ( "(" + haxe.lang.Runtime.toString(this.x) ) + ", " ) + haxe.lang.Runtime.toString(this.y) ) + ")" );
	}
	
	
	public   double get_length()
	{
		return java.lang.Math.sqrt(( ( this.x * this.x ) + ( this.y * this.y ) ));
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef812 = true;
			switch (field.hashCode())
			{
				case 121:
				{
					if (field.equals("y")) 
					{
						__temp_executeDef812 = false;
						this.y = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef812 = false;
						this.length = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 120:
				{
					if (field.equals("x")) 
					{
						__temp_executeDef812 = false;
						this.x = ((double) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef812) 
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
			boolean __temp_executeDef813 = true;
			switch (field.hashCode())
			{
				case 121:
				{
					if (field.equals("y")) 
					{
						__temp_executeDef813 = false;
						this.y = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef813 = false;
						this.length = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
				case 120:
				{
					if (field.equals("x")) 
					{
						__temp_executeDef813 = false;
						this.x = ((double) (haxe.lang.Runtime.toDouble(value)) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef813) 
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
			boolean __temp_executeDef814 = true;
			switch (field.hashCode())
			{
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef814 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("get_length"))) );
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef814 = false;
						if (handleProperties) 
						{
							return this.get_length();
						}
						 else 
						{
							return this.length;
						}
						
					}
					
					break;
				}
				
				
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef814 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("toString"))) );
					}
					
					break;
				}
				
				
				case 120:
				{
					if (field.equals("x")) 
					{
						__temp_executeDef814 = false;
						return this.x;
					}
					
					break;
				}
				
				
				case -2060248300:
				{
					if (field.equals("subtract")) 
					{
						__temp_executeDef814 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("subtract"))) );
					}
					
					break;
				}
				
				
				case 121:
				{
					if (field.equals("y")) 
					{
						__temp_executeDef814 = false;
						return this.y;
					}
					
					break;
				}
				
				
				case 109327997:
				{
					if (field.equals("setTo")) 
					{
						__temp_executeDef814 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("setTo"))) );
					}
					
					break;
				}
				
				
				case 96417:
				{
					if (field.equals("add")) 
					{
						__temp_executeDef814 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("add"))) );
					}
					
					break;
				}
				
				
				case -1019779949:
				{
					if (field.equals("offset")) 
					{
						__temp_executeDef814 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("offset"))) );
					}
					
					break;
				}
				
				
				case 94756189:
				{
					if (field.equals("clone")) 
					{
						__temp_executeDef814 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("clone"))) );
					}
					
					break;
				}
				
				
				case 236609293:
				{
					if (field.equals("normalize")) 
					{
						__temp_executeDef814 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("normalize"))) );
					}
					
					break;
				}
				
				
				case -506365761:
				{
					if (field.equals("copyFrom")) 
					{
						__temp_executeDef814 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("copyFrom"))) );
					}
					
					break;
				}
				
				
				case -1295482945:
				{
					if (field.equals("equals")) 
					{
						__temp_executeDef814 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("equals"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef814) 
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
			boolean __temp_executeDef815 = true;
			switch (field.hashCode())
			{
				case 121:
				{
					if (field.equals("y")) 
					{
						__temp_executeDef815 = false;
						return this.y;
					}
					
					break;
				}
				
				
				case -1106363674:
				{
					if (field.equals("length")) 
					{
						__temp_executeDef815 = false;
						if (handleProperties) 
						{
							return this.get_length();
						}
						 else 
						{
							return this.length;
						}
						
					}
					
					break;
				}
				
				
				case 120:
				{
					if (field.equals("x")) 
					{
						__temp_executeDef815 = false;
						return this.x;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef815) 
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
			boolean __temp_executeDef816 = true;
			switch (field.hashCode())
			{
				case 974314479:
				{
					if (field.equals("get_length")) 
					{
						__temp_executeDef816 = false;
						return this.get_length();
					}
					
					break;
				}
				
				
				case 96417:
				{
					if (field.equals("add")) 
					{
						__temp_executeDef816 = false;
						return this.add(((nx3.geom.Point) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -1776922004:
				{
					if (field.equals("toString")) 
					{
						__temp_executeDef816 = false;
						return this.toString();
					}
					
					break;
				}
				
				
				case 94756189:
				{
					if (field.equals("clone")) 
					{
						__temp_executeDef816 = false;
						return this.clone();
					}
					
					break;
				}
				
				
				case -2060248300:
				{
					if (field.equals("subtract")) 
					{
						__temp_executeDef816 = false;
						return this.subtract(((nx3.geom.Point) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -506365761:
				{
					if (field.equals("copyFrom")) 
					{
						__temp_executeDef816 = false;
						this.copyFrom(((nx3.geom.Point) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case 109327997:
				{
					if (field.equals("setTo")) 
					{
						__temp_executeDef816 = false;
						this.setTo(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ));
					}
					
					break;
				}
				
				
				case -1295482945:
				{
					if (field.equals("equals")) 
					{
						__temp_executeDef816 = false;
						return this.equals(((nx3.geom.Point) (dynargs.__get(0)) ));
					}
					
					break;
				}
				
				
				case -1019779949:
				{
					if (field.equals("offset")) 
					{
						__temp_executeDef816 = false;
						this.offset(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ));
					}
					
					break;
				}
				
				
				case 236609293:
				{
					if (field.equals("normalize")) 
					{
						__temp_executeDef816 = false;
						this.normalize(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef816) 
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
		baseArr.push("length");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


