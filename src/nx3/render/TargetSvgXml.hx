package nx3.render;
import nx3.geom.Rectangles;
import nx3.geom.Rectangle;
import nx3.render.scaling.Scaling;
import nx3.render.scaling.TScaling;

/**
 * ...
 * @author Jonas Nyström
 */
class TargetSvgXml implements ITarget
{
	var svg:Xml;
	var scaling:TScaling;

	public function new(svgId:String, ?scaling:TScaling) 
	{
		this.svg = Xml.createElement('svg');
		this.svg.set('id', svgId);
		this.scaling = (scaling != null) ? scaling : Scaling.NORMAL;		
	}
	
	/* INTERFACE nx3.render.ITarget */
	public function getXml():Xml
	{
		return this.svg;
	}
	
	public function getScaling():TScaling 
	{
		return this.scaling;
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
	
	public function line(x:Float, y:Float, x2:Float, y2:Float, ?lineWidth:Float=1, ?lineColor:Int=0xFF0000):Void 
	{
		var el = Xml.createElement('line');
		el.set('x', Std.string(x));
		el.set('y', Std.string(y));
		el.set('x1', Std.string(x2));
		el.set('y1', Std.string(y2));
		el.set('stroke', hex(lineColor));
		el.set('style', 'stroke-width:' + (lineWidth * this.scaling.linesWidth));
		this.svg.addChild(el);
	}
	
	public function shape(x:Float, y:Float, xmlStr:String, ?fillColor:Int):Void 
	{
		
	}
	
	public function text(x:Float, y:Float, text:String):Void 
	{
		
	}
	
	public function textwidth(text:String):Float 
	{
		return 0;
	}
	
	public function textheight(text:String):Float 
	{
		return 0;
	}
	
	public function setFont(font:TFontInfo):Void 
	{
		
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function parallellogram(x:Float, y:Float, width:Float, y2:Float, pheight:Float, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void 
	{
		
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function clear():Void 
	{
		
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	
	static inline function hex(int:Int):String	return (int == 0) ? "#000" : "#" + StringTools.hex(int);	
}