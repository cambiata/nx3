package cx.flash;
import flash.display.Sprite;
import flash.geom.Rectangle;
import flash.text.TextField;
import flash.text.TextFieldAutoSize;
import flash.text.TextFormat;

/**
 * ...
 * @author Jonas Nyström
 */
class Tooltipsprite extends Sprite
{
	var rect:Rectangle;
	var textfield:TextField;

	public function new(rect:Rectangle) 
	{
		super();
		this.rect = rect;

		//drawBackground();
		this.textfield = new TextField();
		this.textfield.defaultTextFormat = new TextFormat('Open Sans', 14);
		this.textfield.text = 'Helsan';
		this.textfield.x = 8;
		this.textfield.y = 4;
		this.textfield.autoSize = TextFieldAutoSize.LEFT;
		this.addChild(this.textfield);
		
	}
	
	public function  draw(text:String, rect: Rectangle = null)
	{
		if (this.rect.width != rect.width || this.rect.height != rect.height)
		{
			this.rect = rect;
			drawBackground();
		}
		this.textfield.text = text;
	}
	
	function drawBackground()
	{
		this.graphics.clear;
		this.graphics.beginFill(0xfff2ca);
		this.graphics.lineStyle(2, 0x666666);
		this.graphics.drawRoundRect(0, 0, rect.width, rect.height, 8, 8);		
	}
}