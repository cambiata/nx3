package nx3.render;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  interface ITarget extends haxe.lang.IHxObject
{
	   java.lang.Object getScaling();
	
	   void clear();
	
	   void testLines(double x, double y, double width);
	
	   void rect(double x, double y, nx3.geom.Rectangle rect, java.lang.Object lineWidth, java.lang.Object lineColor);
	
	   void rectangle(double x, double y, nx3.geom.Rectangle rect, java.lang.Object lineWidth, java.lang.Object lineColor);
	
	   void rectangles(double x, double y, haxe.root.Array<nx3.geom.Rectangle> rects, java.lang.Object lineWidth, java.lang.Object lineColor);
	
	   void filledrectangle(double x, double y, nx3.geom.Rectangle rect, java.lang.Object lineWidth, java.lang.Object lineColor, java.lang.Object fillColor);
	
	   void filledellipse(double x, double y, nx3.geom.Rectangle rect, java.lang.Object lineWidth, java.lang.Object lineColor, java.lang.Object fillColor);
	
	   void line(double x, double y, double x2, double y2, java.lang.Object lineWidth, java.lang.Object lineColor);
	
	   void shape(double x, double y, java.lang.String xmlStr, java.lang.Object fillColor);
	
	   void text(double x, double y, java.lang.String text);
	
	   double textwidth(java.lang.String text);
	
	   double textheight(java.lang.String text);
	
	   void setFont(java.lang.Object font);
	
	   void parallellogram(double x, double y, double width, double y2, double pheight, java.lang.Object lineWidth, java.lang.Object lineColor, java.lang.Object fillColor);
	
	   void polyline(double x, double y, haxe.root.Array<java.lang.Object> coordinates, java.lang.Object lineWidth, java.lang.Object lineColor);
	
	   void polyfill(double x, double y, haxe.root.Array<java.lang.Object> coordinates, java.lang.Object lineWidth, java.lang.Object lineColor, java.lang.Object fillColor);
	
	   void interactiveEllipse(double x, double y, nx3.geom.Rectangle rect, java.lang.Object lineWidth, java.lang.Object lineColor, java.lang.Object fillColor, haxe.lang.Function cb);
	
	   nx3.geom.Rectangle scaleRect(nx3.geom.Rectangle rect, java.lang.Object inflateX, java.lang.Object inflateY);
	
	   void tooltipShow(nx3.geom.Rectangle rect, java.lang.String text);
	
	   void tooltipHide();
	
}


