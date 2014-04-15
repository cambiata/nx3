package nx3.render.svg;

/**
 * ...
 * @author Jonas Nyström
 */
class SvgComposer
{
	var xml:Xml;
	var strokeWidth:Float ;
	var strokeColor:Int ;
	var strokeAlpha:Float ;
	var fillColor:Int ;
	var fillAlpha:Float ;

	public function new() 
	{
		this.xml = Xml.createElement('svg');
		this.strokeWidth = 1;
		this.strokeColor = 0xFF00000;
		this.strokeAlpha = 1;
		this.fillColor = 0x00FF00;
		this.fillAlpha = 1;
	}
	
	public function getXml():Xml return this.xml;
	
	public function addLine(x1:Float, y1:Float, x2:Float, y2:Float, ?strokeWidth:Float, ?strokeColor:Int, ?strokeAlpha:Float)
	{
		setStroke(strokeWidth, strokeColor, strokeAlpha);
		var line = Xml.createElement('line');
		line.set('x1', Std.string(x1));
		line.set('y1', Std.string(y1));
		line.set('x2', Std.string(x2));
		line.set('y2', Std.string(y2));
		var strokeColorHex = '#' + StringTools.hex(this.strokeColor);
		line.set('stroke', strokeColorHex);
		line.set('style', 'stroke-width: ${this.strokeWidth}');
		this.xml.addChild(line);
	}
	
	function setStroke(width:Null<Float>, color:Null<Int>, alpha:Null<Float>)
	{
		if (width != null) this.strokeWidth = width;
		if (color!= null) this.strokeColor= color;
		if (alpha != null) this.strokeAlpha= alpha;
	}
	
	
}