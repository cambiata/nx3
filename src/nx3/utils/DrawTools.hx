package nx3.utils;

/**
 * DrawTools
 * @author Jonas Nyström
 */
class DrawTools 
{

	#if flash
	static public function draw(graphics:flash.display.Graphics, rect:nx3.geom.Rectangle, enlarge=0) {
		graphics.drawRect(rect.x - enlarge, rect.y - enlarge, rect.width + enlarge * 2, rect.height + enlarge * 2);
	}
	
	static public function drawAsEllipse(graphics:flash.display.Graphics, rect:nx3.geom.Rectangle, enlarge=0) {
		graphics.drawEllipse(rect.x - enlarge, rect.y - enlarge, rect.width + enlarge * 2, rect.height + enlarge * 2);
	}
	
	static public function setLineStyle(graphics:flash.display.Graphics, color:Int, width:Float=1) {
		graphics.lineStyle(width ,color);
	}

	static public function drawLine(graphics:flash.display.Graphics, x:Float, y:Float, x2:Float, y2:Float) {		
		graphics.moveTo(x, y);
		graphics.lineTo(x2, y2);		
	}
	
	static public function clean(graphics:flash.display.Graphics, width:Float=0, height:Float=0) graphics.clear();
	
	#end
	
	#if js
	static public function draw(ctx:js.html.CanvasRenderingContext2D, rect:nx3.geom.Rectangle, enlarge=0) {
			ctx.strokeRect(rect.x - enlarge, rect.y - enlarge, rect.width + enlarge * 2, rect.height + enlarge * 2);
	}
		
	static public function setLineStyle(ctx:js.html.CanvasRenderingContext2D, color:Int, width:Float=1) {
		var strokestyle =  '#' + StringTools.hex(color, 6);
		trace(strokestyle);
		ctx.lineWidth = width;
		ctx.strokeStyle = strokestyle;
	}
	

	static public function drawLine(ctx:js.html.CanvasRenderingContext2D, x:Float, y:Float, x2:Float, y2:Float) {		
		ctx.beginPath();
		ctx.moveTo(x, y); ctx.lineTo(x2, y2);
		ctx.stroke();	
	}
	
	static public function clean(ctx:js.html.CanvasRenderingContext2D, width:Float, height:Float) ctx.clearRect(0, 0, width, height);
	
	
	#end
	
}