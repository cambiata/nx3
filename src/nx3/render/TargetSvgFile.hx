package nx3.render;
import nx3.geom.Rectangles;
import nx3.geom.Rectangle;
import nx3.render.scaling.TScaling;

/**
 * ...
 * @author Jonas Nyström
 */
class TargetSvgFile implements ITarget
{

	public function new() 
	{
		
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function getScaling():TScaling 
	{
		
	}
	
	public function testLines(x:Float, y:Float, width:Float):Void 
	{
		
	}
	
	public function rect(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int):Void 
	{
		
	}
	
	public function rectangle(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int):Void 
	{
		
	}
	
	public function rectangles(x:Float, y:Float, rects:Rectangles, ?lineWidth:Float, ?lineColor:Int):Void 
	{
		
	}
	
	public function filledrectangle(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void 
	{
		
	}
	
	public function filledellipse(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void 
	{
		
	}
	
	public function line(x:Float, y:Float, x2:Float, y2:Float, ?lineWidth:Float, ?lineColor:Int):Void 
	{
		
	}
	
	public function shape(x:Float, y:Float, xmlStr:String, ?fillColor:Int):Void 
	{
		
	}
	
	public function text(x:Float, y:Float, text:String):Void 
	{
		
	}
	
	public function textwidth(text:String):Float 
	{
		
	}
	
	public function textheight(text:String):Float 
	{
		
	}
	
	public function setFont(font:TFontInfo):Void 
	{
		
	}
	
}