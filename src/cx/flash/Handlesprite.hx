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
	private var backing:Sprite;
	private var _width:Float;
	private var _height:Float;
	//private var _repaint:Float->Float->Float->Float->Void;
	private  var repaint:Float->Float->Float->Float->Sprite->Void;
	
	public function new() 
	{
		super();
		backing = new Sprite();
		//backing.graphics.beginFill(0x00ff00);
		//backing.graphics.drawRect(10, 10, 200, 200);
		addChild(backing);

		
		
		this._width = 200;
		this._height = 200;
		

		
		this.x = 20;
		this.y = 20;

		#if (html5 || flash)
			this.backing.graphics.drawRect(this.x, this.y, this._width, this._height);		
		#end
		
		//this.backing.graphics.clear();
		
		
		//#end
		
		
		
		handleTL = new Handle(shiftTL);
		addChild(handleTL);
		
		handleTR = new Handle(shiftTR);
		addChild(handleTR);
		
		handleBL = new Handle(shiftBL);
		addChild(handleBL);
		
		handleBR = new Handle(shiftBR);
		addChild(handleBR);
		
		this.repaint = this._repaint;
		
		__adjust();
	}
	
	public function setSize(width:Float, height:Float)
	{
		this._width = width;
		this._height = height;
		this.__adjust();
	}

	public function setPosition(x:Float, y:Float)
	{
		this.x = x;
		this.y = y;
	}
	
	public function getBackground():Sprite return this.backing;
	
	public function setRepaintCallback(repaintFunction:Float->Float->Float->Float->Sprite-> Void)
	{
		this.repaint = repaintFunction;
		this.__adjust();
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
		//backing.graphics.clear();
		backing.width = _width;
		backing.height = _height;
		if (this.repaint == null) return;
		this.repaint(backing.x, backing.y, _width, _height, this.backing);
	}
	
	private function _repaint(x:Float, y:Float, width:Float, height:Float, background:Sprite )
	{
		trace('repaint method - should be set dynamically from outside $width $height');		
		backing.graphics.clear();
		backing.graphics.beginFill(0x0000ff, .2);
		backing.graphics.drawRect(0, 0, _width, _height);				
	}
}