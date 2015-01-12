package nx3.geom;

/**
 * RectangleTools
 * @author Jonas Nyström
 */
class RectangleTools 
{

	static public function union(rectangles:nx3.geom.Rectangles):nx3.geom.Rectangle {
		var result:nx3.geom.Rectangle = rectangles[0].clone();
		if (rectangles.length == 1) return result;
		for (i in 1 ... rectangles.length) result = result.union(rectangles[i]);
		return result;
	}
	
	
	#if flash
	static public function draw(graphics:flash.display.Graphics, rect:nx3.geom.Rectangle, enlarge=0) {
		graphics.drawRect(rect.x - enlarge, rect.y - enlarge, rect.width + enlarge * 2, rect.height + enlarge * 2);
	}
	
	static public function drawAsEllipse(graphics:flash.display.Graphics, rect:nx3.geom.Rectangle, enlarge=0) {
		graphics.drawEllipse(rect.x - enlarge, rect.y - enlarge, rect.width + enlarge * 2, rect.height + enlarge * 2);
	}
	#end
	
	#if js
	static public function draw(ctx:js.html.CanvasRenderingContext2D, rect:nx3.geom.Rectangle, enlarge=0) {
			ctx.strokeRect(rect.x - enlarge, rect.y - enlarge, rect.width + enlarge * 2, rect.height + enlarge * 2);
	}
		
	#end
	
}