package nx3.geom;

/**
 * RectangleTools
 * @author Jonas Nyström
 */
class RectangleTools 
{

	static public function union(rectangles:Rectangles):Rectangle {
		var result:Rectangle = rectangles[0].clone();
		if (rectangles.length == 1) return result;
		for (i in 1 ... rectangles.length) result = result.union(rectangles[i]);
		return result;
	}
	
	static public function draw(graphics:flash.display.Graphics, rect:Rectangle, enlarge=0) {
		graphics.drawRect(rect.x - enlarge, rect.y - enlarge, rect.width + enlarge * 2, rect.height + enlarge * 2);
	}
	
	static public function drawAsEllipse(graphics:flash.display.Graphics, rect:Rectangle, enlarge=0) {
		graphics.drawEllipse(rect.x - enlarge, rect.y - enlarge, rect.width + enlarge * 2, rect.height + enlarge * 2);
	}
}