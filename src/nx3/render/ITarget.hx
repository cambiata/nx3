package nx3.render;
import nx3.EDirectionUD;
import nx3.geom.Pnt;
import nx3.geom.Pnts;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
import nx3.geom.Point;
import nx3.action.EActivityType;
import nx3.render.scaling.TScaling;
import nx3.TFontInfo;
import nx3.TPoints;

/**
 * @author Jonas Nyström
 */

interface ITarget 
{
	public function getScaling():TScaling;

	public function clear():Void;
	
	public function testLines(x:Float, y:Float, width:Float):Void;
	
	public function rect(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int):Void;
	public function rectangle(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int):Void;
	public function rectangles(x:Float, y:Float, rects:Rectangles, ?lineWidth:Float, ?lineColor:Int):Void;
	public function filledrectangle(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void;
	public function filledellipse(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void;
	
	public function line(x:Float, y:Float, x2:Float, y2:Float, ?lineWidth:Float, ?lineColor:Int):Void;
	
	
	public function shape(x:Float, y:Float, xmlStr:String, ?fillColor:Int):Void;
	public function text(x:Float, y:Float, text:String):Void;
	public function textwidth(text:String): Float;
	public function textheight(text:String):Float;
	public function setFont(font:TFontInfo):Void;
	
	public function parallellogram(x:Float, y:Float, width:Float, y2:Float, pheight:Float,?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void;
	
	public function polyline(x:Float, y:Float, coordinates:Pnts,?lineWidth:Float = 1, ?lineColor:Int = 0x000000):Void;
	public function polyfill(x:Float, y:Float, coordinates:Pnts, ?lineWidth:Float = 1, ?lineColor:Int = 0x000000, fillColor:Int = 0x000000):Void;
	
	public function interactiveEllipse(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int,  cb:EActivityType-> Void = null):Void ;
	
	public function scaleRect(rect:Rectangle, inflateX:Float = 0, inflateY:Float = 0):Rectangle;
	
	public function tooltipShow(rect:Rectangle, text:String):Void;
	public function tooltipHide():Void;
	

}