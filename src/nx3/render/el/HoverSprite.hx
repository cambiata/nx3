package nx3.render.el;
import flash.display.Sprite;
import flash.events.MouseEvent;
import nx3.geom.Rectangle;

/**
 * ...
 * @author Jonas Nyström
 */
class HoverSprite extends Sprite
{

	var rect:Rectangle;
	var lineWidth:Float;
	var lineColor:Int;

	public function new(rect:Rectangle, lineColor:Int = 0x4e50ca, lineWidth:Float=1) 
	{
		this.lineWidth = lineWidth;
		this.lineColor = lineColor;
		
		super();
		this.rect = rect;
		this.redraw(0x000000,  this.lineWidth/3, 0.2);
		
		this.graphics.lineStyle(lineWidth, lineColor);
		this.addEventListener(MouseEvent.ROLL_OVER, function(e) {			
			this.redraw(this.lineColor, this.lineWidth, 0.6);
			//trace('mouseover');
		});
		this.addEventListener(MouseEvent.ROLL_OUT, function(e) {
			
			this.redraw(0x000000, this.lineWidth/3, 0.2);
			//trace('mouseout');
		});
	}
	
	function redraw(lineColor:Int = 0xFF0000, lineWidth:Float=1, alpha:Float=1)
	{
		this.graphics.clear();
		this.graphics.lineStyle(lineWidth, lineColor, alpha);
		this.graphics.beginFill(0x000000, 0.0);
		this.graphics.drawEllipse(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
	}
	
}