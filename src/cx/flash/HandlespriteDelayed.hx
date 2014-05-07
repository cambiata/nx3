package cx.flash;
import cx.TimerTools;
import flash.display.Sprite;

/**
 * ...
 * @author Jonas Nyström
 */
class HandlespriteDelayed extends Handlesprite
{
	private  var repaintDelayed:Float->Float->Float->Float->Sprite->Void;
	var timeoutMS:Int;
	
	public function new() 
	{
		super();
		this.repaintDelayed = null; // this._repaintDelayed;
		this.timeoutMS = 500;
	}
	
	override function __adjust():Void 
	{
		super.__adjust();
		TimerTools.timeout(function() {
			if (this.repaintDelayed == null) return;
			this.repaintDelayed(backing.x, backing.y, _width, _height, this.backing);
		}, this.timeoutMS);
	}
	
	public function setRepaintDelayedCallback(repaintFunction:Float->Float->Float->Float->Sprite-> Void, timeoutMS:Int=500)
	{
		this.repaintDelayed = repaintFunction;
	}
	
	/*
	private function _repaintDelayed(x:Float, y:Float, width:Float, height:Float, background:Sprite )
	{
		trace('repaintDelayed method - should be set dynamically from outside');		
		backing.graphics.clear();
		backing.graphics.beginFill(0x00FF00, .2);
		backing.graphics.drawRect(0, 0, _width, _height);				
	}	
	*/
	
}