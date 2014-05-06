package cx.flash ;
import cx.flash.Handle;
import flash.display.Shape;
import flash.display.Sprite;

/**
 * ...
 * @author Jonas Nyström
 */
class Handlesprite extends Sprite
{
	private var handleTL:Handle;
	private var handleTR:Handle;
	private var handleBL:Handle;
	private var handleBR:Handle;
	private var backing:Shape;
	private var _width:Float;
	private var _height:Float;
	
	public function new() 
	{
		super();
		backing = new Shape();

		this._width = 200;
		this._height = 200;
		
		addChild(backing);
		
		this.x = 20;
		this.y = 20;
		
		
		handleTL = new Handle(shiftTL);
		addChild(handleTL);
		
		handleTR = new Handle(shiftTR);
		addChild(handleTR);
		
		handleBL = new Handle(shiftBL);
		addChild(handleBL);
		
		handleBR = new Handle(shiftBR);
		addChild(handleBR);
		
		__adjust();
	}
	
	private function shift(x:Float, y:Float, w:Float, h:Float):Void {
		this.x += x;
		this.y += y;
		_width += w-x;
		_height += h-y;
		__adjust();
	}
	
	private function shiftTL(byX:Float, byY:Float ):Void {
		shift(byX, byY, 0, 0);
	}
	private function shiftTR(byX:Float, byY:Float ):Void {
		shift(0, byY, byX, 0);
	}
	private function shiftBL(byX:Float, byY:Float ):Void {
		shift(byX, 0, 0, byY);
	}
	private function shiftBR(byX:Float, byY:Float ):Void {
		shift(0, 0, byX, byY);
	}
	private function __adjust():Void 
	{
		handleTR.x = handleBR.x = _width;
		handleBL.y = handleBR.y = _height;		
		backing.graphics.clear();
		backing.width = _width;
		backing.height = _height;
		this.redraw();
	}
	
	private function redraw()
	{
		backing.graphics.beginFill(0xFF0000);
		backing.graphics.drawRect(0, 0, _width, _height);		
		
	}
}