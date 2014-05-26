package nx3.render;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class TargetSvgXml extends haxe.lang.HxObject implements nx3.render.ITarget
{
	public    TargetSvgXml(haxe.lang.EmptyObject empty)
	{
		{
		}
		
	}
	
	
	public    TargetSvgXml(java.lang.String svgId, java.lang.Object scaling)
	{
		nx3.render.TargetSvgXml.__hx_ctor_nx3_render_TargetSvgXml(this, svgId, scaling);
	}
	
	
	public static   void __hx_ctor_nx3_render_TargetSvgXml(nx3.render.TargetSvgXml __temp_me204, java.lang.String svgId, java.lang.Object scaling)
	{
		__temp_me204.svg = haxe.root.Xml.createElement("svg");
		__temp_me204.svg.set("id", svgId);
		if (( ! (( scaling == null )) )) 
		{
			__temp_me204.scaling = scaling;
		}
		 else 
		{
			__temp_me204.scaling = nx3.render.scaling.Scaling.NORMAL;
		}
		
	}
	
	
	public static   java.lang.String hex(int _int)
	{
		if (( _int == 0 )) 
		{
			return "#000";
		}
		 else 
		{
			return ( "#" + haxe.root.StringTools.hex(_int, null) );
		}
		
	}
	
	
	public static   java.lang.Object __hx_createEmpty()
	{
		return new nx3.render.TargetSvgXml(((haxe.lang.EmptyObject) (haxe.lang.EmptyObject.EMPTY) ));
	}
	
	
	public static   java.lang.Object __hx_create(haxe.root.Array arr)
	{
		return new nx3.render.TargetSvgXml(haxe.lang.Runtime.toString(arr.__get(0)), ((java.lang.Object) (arr.__get(1)) ));
	}
	
	
	public  haxe.root.Xml svg;
	
	public  java.lang.Object scaling;
	
	public   haxe.root.Xml getXml()
	{
		return this.svg;
	}
	
	
	public   java.lang.Object getScaling()
	{
		return this.scaling;
	}
	
	
	public   void testLines(double x, double y, double width)
	{
		{
		}
		
	}
	
	
	public   void rect(double x, double y, nx3.geom.Rectangle rect, java.lang.Object lineWidth, java.lang.Object lineColor)
	{
		{
		}
		
	}
	
	
	public   void rectangle(double x, double y, nx3.geom.Rectangle rect, java.lang.Object lineWidth, java.lang.Object lineColor)
	{
		{
		}
		
	}
	
	
	public   void rectangles(double x, double y, haxe.root.Array<nx3.geom.Rectangle> rects, java.lang.Object lineWidth, java.lang.Object lineColor)
	{
		{
		}
		
	}
	
	
	public   void filledrectangle(double x, double y, nx3.geom.Rectangle rect, java.lang.Object lineWidth, java.lang.Object lineColor, java.lang.Object fillColor)
	{
		{
		}
		
	}
	
	
	public   void filledellipse(double x, double y, nx3.geom.Rectangle rect, java.lang.Object lineWidth, java.lang.Object lineColor, java.lang.Object fillColor)
	{
		{
		}
		
	}
	
	
	public   void line(double x, double y, double x2, double y2, java.lang.Object lineWidth, java.lang.Object lineColor)
	{
		java.lang.Object __temp_lineColor196 = ( (( lineColor == null )) ? (((java.lang.Object) (16711680) )) : (((java.lang.Object) (lineColor) )) );
		java.lang.Object __temp_lineWidth195 = ( (( lineWidth == null )) ? (((java.lang.Object) (1) )) : (((java.lang.Object) (lineWidth) )) );
		haxe.root.Xml el = haxe.root.Xml.createElement("line");
		el.set("x", haxe.root.Std.string(x));
		el.set("y", haxe.root.Std.string(y));
		el.set("x1", haxe.root.Std.string(x2));
		el.set("y1", haxe.root.Std.string(y2));
		java.lang.String __temp_stmt874 = null;
		{
			int _int = ((int) (haxe.lang.Runtime.toInt(__temp_lineColor196)) );
			__temp_stmt874 = ( (( _int == 0 )) ? ("#000") : (( "#" + haxe.root.StringTools.hex(_int, null) )) );
		}
		
		el.set("stroke", __temp_stmt874);
		el.set("style", ( "stroke-width:" + haxe.lang.Runtime.toString(( ((double) (haxe.lang.Runtime.toDouble(__temp_lineWidth195)) ) * ((double) (haxe.lang.Runtime.getField_f(this.scaling, "linesWidth", true)) ) )) ));
		this.svg.addChild(el);
	}
	
	
	public   void shape(double x, double y, java.lang.String xmlStr, java.lang.Object fillColor)
	{
		{
		}
		
	}
	
	
	public   void text(double x, double y, java.lang.String text)
	{
		{
		}
		
	}
	
	
	public   double textwidth(java.lang.String text)
	{
		return ((double) (0) );
	}
	
	
	public   double textheight(java.lang.String text)
	{
		return ((double) (0) );
	}
	
	
	public   void setFont(java.lang.Object font)
	{
		{
		}
		
	}
	
	
	public   void parallellogram(double x, double y, double width, double y2, double pheight, java.lang.Object lineWidth, java.lang.Object lineColor, java.lang.Object fillColor)
	{
		{
		}
		
	}
	
	
	public   void clear()
	{
		{
		}
		
	}
	
	
	public   void polyline(double x, double y, haxe.root.Array<java.lang.Object> coordinates, java.lang.Object lineWidth, java.lang.Object lineColor)
	{
		java.lang.Object __temp_lineColor198 = ( (( lineColor == null )) ? (((java.lang.Object) (0) )) : (((java.lang.Object) (lineColor) )) );
		java.lang.Object __temp_lineWidth197 = ( (( lineWidth == null )) ? (((java.lang.Object) (1) )) : (((java.lang.Object) (lineWidth) )) );
	}
	
	
	public   void polyfill(double x, double y, haxe.root.Array<java.lang.Object> coordinates, java.lang.Object lineWidth, java.lang.Object lineColor, java.lang.Object fillColor)
	{
		int __temp_fillColor201 = ( (( fillColor == null )) ? (((int) (255) )) : (((int) (haxe.lang.Runtime.toInt(fillColor)) )) );
		java.lang.Object __temp_lineColor200 = ( (( lineColor == null )) ? (((java.lang.Object) (0) )) : (((java.lang.Object) (lineColor) )) );
		java.lang.Object __temp_lineWidth199 = ( (( lineWidth == null )) ? (((java.lang.Object) (1) )) : (((java.lang.Object) (lineWidth) )) );
	}
	
	
	public   void sline(double x, double y, java.lang.Object start, java.lang.Object end, java.lang.Object lineWidth, java.lang.Object lineColor)
	{
		{
		}
		
	}
	
	
	public   void interactiveEllipse(double x, double y, nx3.geom.Rectangle rect, java.lang.Object lineWidth, java.lang.Object lineColor, java.lang.Object fillColor, haxe.lang.Function cb)
	{
		{
		}
		
	}
	
	
	public   nx3.geom.Rectangle scaleRect(nx3.geom.Rectangle rect, java.lang.Object inflateX, java.lang.Object inflateY)
	{
		double __temp_inflateY203 = ( (( inflateY == null )) ? (((double) (0) )) : (((double) (haxe.lang.Runtime.toDouble(inflateY)) )) );
		double __temp_inflateX202 = ( (( inflateX == null )) ? (((double) (0) )) : (((double) (haxe.lang.Runtime.toDouble(inflateX)) )) );
		return null;
	}
	
	
	public   void tooltipShow(nx3.geom.Rectangle rect, java.lang.String text)
	{
		{
		}
		
	}
	
	
	public   void tooltipHide()
	{
		{
		}
		
	}
	
	
	@Override public   double __hx_setField_f(java.lang.String field, double value, boolean handleProperties)
	{
		{
			boolean __temp_executeDef875 = true;
			switch (field.hashCode())
			{
				case 1910897543:
				{
					if (field.equals("scaling")) 
					{
						__temp_executeDef875 = false;
						this.scaling = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef875) 
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
			boolean __temp_executeDef876 = true;
			switch (field.hashCode())
			{
				case 1910897543:
				{
					if (field.equals("scaling")) 
					{
						__temp_executeDef876 = false;
						this.scaling = ((java.lang.Object) (value) );
						return value;
					}
					
					break;
				}
				
				
				case 114276:
				{
					if (field.equals("svg")) 
					{
						__temp_executeDef876 = false;
						this.svg = ((haxe.root.Xml) (value) );
						return value;
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef876) 
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
			boolean __temp_executeDef877 = true;
			switch (field.hashCode())
			{
				case 837838821:
				{
					if (field.equals("tooltipHide")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("tooltipHide"))) );
					}
					
					break;
				}
				
				
				case 114276:
				{
					if (field.equals("svg")) 
					{
						__temp_executeDef877 = false;
						return this.svg;
					}
					
					break;
				}
				
				
				case 838165920:
				{
					if (field.equals("tooltipShow")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("tooltipShow"))) );
					}
					
					break;
				}
				
				
				case 1910897543:
				{
					if (field.equals("scaling")) 
					{
						__temp_executeDef877 = false;
						return this.scaling;
					}
					
					break;
				}
				
				
				case -1877990834:
				{
					if (field.equals("scaleRect")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("scaleRect"))) );
					}
					
					break;
				}
				
				
				case -1249345311:
				{
					if (field.equals("getXml")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getXml"))) );
					}
					
					break;
				}
				
				
				case -566771044:
				{
					if (field.equals("interactiveEllipse")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("interactiveEllipse"))) );
					}
					
					break;
				}
				
				
				case -1347209391:
				{
					if (field.equals("getScaling")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("getScaling"))) );
					}
					
					break;
				}
				
				
				case 109526759:
				{
					if (field.equals("sline")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("sline"))) );
					}
					
					break;
				}
				
				
				case -1197988467:
				{
					if (field.equals("testLines")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("testLines"))) );
					}
					
					break;
				}
				
				
				case 561760079:
				{
					if (field.equals("polyfill")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("polyfill"))) );
					}
					
					break;
				}
				
				
				case 3496420:
				{
					if (field.equals("rect")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("rect"))) );
					}
					
					break;
				}
				
				
				case 561938880:
				{
					if (field.equals("polyline")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("polyline"))) );
					}
					
					break;
				}
				
				
				case 1121299823:
				{
					if (field.equals("rectangle")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("rectangle"))) );
					}
					
					break;
				}
				
				
				case 94746189:
				{
					if (field.equals("clear")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("clear"))) );
					}
					
					break;
				}
				
				
				case 400556260:
				{
					if (field.equals("rectangles")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("rectangles"))) );
					}
					
					break;
				}
				
				
				case -1344574687:
				{
					if (field.equals("parallellogram")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("parallellogram"))) );
					}
					
					break;
				}
				
				
				case -1117983155:
				{
					if (field.equals("filledrectangle")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("filledrectangle"))) );
					}
					
					break;
				}
				
				
				case 1984576465:
				{
					if (field.equals("setFont")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("setFont"))) );
					}
					
					break;
				}
				
				
				case -1077806020:
				{
					if (field.equals("filledellipse")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("filledellipse"))) );
					}
					
					break;
				}
				
				
				case -1856012140:
				{
					if (field.equals("textheight")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("textheight"))) );
					}
					
					break;
				}
				
				
				case 3321844:
				{
					if (field.equals("line")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("line"))) );
					}
					
					break;
				}
				
				
				case -1015735111:
				{
					if (field.equals("textwidth")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("textwidth"))) );
					}
					
					break;
				}
				
				
				case 109399969:
				{
					if (field.equals("shape")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("shape"))) );
					}
					
					break;
				}
				
				
				case 3556653:
				{
					if (field.equals("text")) 
					{
						__temp_executeDef877 = false;
						return ((haxe.lang.Function) (new haxe.lang.Closure(((java.lang.Object) (this) ), haxe.lang.Runtime.toString("text"))) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef877) 
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
			boolean __temp_executeDef878 = true;
			switch (field.hashCode())
			{
				case 1910897543:
				{
					if (field.equals("scaling")) 
					{
						__temp_executeDef878 = false;
						return ((double) (haxe.lang.Runtime.toDouble(this.scaling)) );
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef878) 
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
			boolean __temp_executeDef879 = true;
			switch (field.hashCode())
			{
				case 837838821:
				{
					if (field.equals("tooltipHide")) 
					{
						__temp_executeDef879 = false;
						this.tooltipHide();
					}
					
					break;
				}
				
				
				case -1249345311:
				{
					if (field.equals("getXml")) 
					{
						__temp_executeDef879 = false;
						return this.getXml();
					}
					
					break;
				}
				
				
				case 838165920:
				{
					if (field.equals("tooltipShow")) 
					{
						__temp_executeDef879 = false;
						this.tooltipShow(((nx3.geom.Rectangle) (dynargs.__get(0)) ), haxe.lang.Runtime.toString(dynargs.__get(1)));
					}
					
					break;
				}
				
				
				case -1347209391:
				{
					if (field.equals("getScaling")) 
					{
						__temp_executeDef879 = false;
						return this.getScaling();
					}
					
					break;
				}
				
				
				case -1877990834:
				{
					if (field.equals("scaleRect")) 
					{
						__temp_executeDef879 = false;
						return this.scaleRect(((nx3.geom.Rectangle) (dynargs.__get(0)) ), dynargs.__get(1), dynargs.__get(2));
					}
					
					break;
				}
				
				
				case -1197988467:
				{
					if (field.equals("testLines")) 
					{
						__temp_executeDef879 = false;
						this.testLines(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(2))) ));
					}
					
					break;
				}
				
				
				case -566771044:
				{
					if (field.equals("interactiveEllipse")) 
					{
						__temp_executeDef879 = false;
						this.interactiveEllipse(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ), ((nx3.geom.Rectangle) (dynargs.__get(2)) ), dynargs.__get(3), dynargs.__get(4), dynargs.__get(5), ((haxe.lang.Function) (dynargs.__get(6)) ));
					}
					
					break;
				}
				
				
				case 3496420:
				{
					if (field.equals("rect")) 
					{
						__temp_executeDef879 = false;
						this.rect(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ), ((nx3.geom.Rectangle) (dynargs.__get(2)) ), dynargs.__get(3), dynargs.__get(4));
					}
					
					break;
				}
				
				
				case 109526759:
				{
					if (field.equals("sline")) 
					{
						__temp_executeDef879 = false;
						this.sline(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ), dynargs.__get(2), dynargs.__get(3), dynargs.__get(4), dynargs.__get(5));
					}
					
					break;
				}
				
				
				case 1121299823:
				{
					if (field.equals("rectangle")) 
					{
						__temp_executeDef879 = false;
						this.rectangle(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ), ((nx3.geom.Rectangle) (dynargs.__get(2)) ), dynargs.__get(3), dynargs.__get(4));
					}
					
					break;
				}
				
				
				case 561760079:
				{
					if (field.equals("polyfill")) 
					{
						__temp_executeDef879 = false;
						this.polyfill(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ), ((haxe.root.Array<java.lang.Object>) (dynargs.__get(2)) ), dynargs.__get(3), dynargs.__get(4), dynargs.__get(5));
					}
					
					break;
				}
				
				
				case 400556260:
				{
					if (field.equals("rectangles")) 
					{
						__temp_executeDef879 = false;
						this.rectangles(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ), ((haxe.root.Array<nx3.geom.Rectangle>) (dynargs.__get(2)) ), dynargs.__get(3), dynargs.__get(4));
					}
					
					break;
				}
				
				
				case 561938880:
				{
					if (field.equals("polyline")) 
					{
						__temp_executeDef879 = false;
						this.polyline(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ), ((haxe.root.Array<java.lang.Object>) (dynargs.__get(2)) ), dynargs.__get(3), dynargs.__get(4));
					}
					
					break;
				}
				
				
				case -1117983155:
				{
					if (field.equals("filledrectangle")) 
					{
						__temp_executeDef879 = false;
						this.filledrectangle(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ), ((nx3.geom.Rectangle) (dynargs.__get(2)) ), dynargs.__get(3), dynargs.__get(4), dynargs.__get(5));
					}
					
					break;
				}
				
				
				case 94746189:
				{
					if (field.equals("clear")) 
					{
						__temp_executeDef879 = false;
						this.clear();
					}
					
					break;
				}
				
				
				case -1077806020:
				{
					if (field.equals("filledellipse")) 
					{
						__temp_executeDef879 = false;
						this.filledellipse(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ), ((nx3.geom.Rectangle) (dynargs.__get(2)) ), dynargs.__get(3), dynargs.__get(4), dynargs.__get(5));
					}
					
					break;
				}
				
				
				case -1344574687:
				{
					if (field.equals("parallellogram")) 
					{
						__temp_executeDef879 = false;
						this.parallellogram(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(2))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(3))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(4))) ), dynargs.__get(5), dynargs.__get(6), dynargs.__get(7));
					}
					
					break;
				}
				
				
				case 3321844:
				{
					if (field.equals("line")) 
					{
						__temp_executeDef879 = false;
						this.line(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(2))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(3))) ), dynargs.__get(4), dynargs.__get(5));
					}
					
					break;
				}
				
				
				case 1984576465:
				{
					if (field.equals("setFont")) 
					{
						__temp_executeDef879 = false;
						this.setFont(dynargs.__get(0));
					}
					
					break;
				}
				
				
				case 109399969:
				{
					if (field.equals("shape")) 
					{
						__temp_executeDef879 = false;
						this.shape(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ), haxe.lang.Runtime.toString(dynargs.__get(2)), dynargs.__get(3));
					}
					
					break;
				}
				
				
				case -1856012140:
				{
					if (field.equals("textheight")) 
					{
						__temp_executeDef879 = false;
						return this.textheight(haxe.lang.Runtime.toString(dynargs.__get(0)));
					}
					
					break;
				}
				
				
				case 3556653:
				{
					if (field.equals("text")) 
					{
						__temp_executeDef879 = false;
						this.text(((double) (haxe.lang.Runtime.toDouble(dynargs.__get(0))) ), ((double) (haxe.lang.Runtime.toDouble(dynargs.__get(1))) ), haxe.lang.Runtime.toString(dynargs.__get(2)));
					}
					
					break;
				}
				
				
				case -1015735111:
				{
					if (field.equals("textwidth")) 
					{
						__temp_executeDef879 = false;
						return this.textwidth(haxe.lang.Runtime.toString(dynargs.__get(0)));
					}
					
					break;
				}
				
				
			}
			
			if (__temp_executeDef879) 
			{
				return super.__hx_invokeField(field, dynargs);
			}
			
		}
		
		return null;
	}
	
	
	@Override public   void __hx_getFields(haxe.root.Array<java.lang.String> baseArr)
	{
		baseArr.push("scaling");
		baseArr.push("svg");
		{
			super.__hx_getFields(baseArr);
		}
		
	}
	
	
}


