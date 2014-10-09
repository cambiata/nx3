package audio.flash.ui;

import flash.display.Graphics;
import flash.display.Sprite;
import flash.events.MouseEvent;
import flash.display.GraphicsPathCommand;
import flash.Vector;
/**
 * ...
 * @author 
 */
class PlayButton extends Sprite
{

	public function new() 
	{
		super();
		draw(this._playing);
		this.addEventListener(MouseEvent.MOUSE_DOWN, onMouseClick, false, 0, true);
	}
	
	private function onMouseClick(e:MouseEvent):Void 
	{
		this.playing = ! this._playing;
	}
	
	public var playing(get, set): Bool;
	var _playing:Bool;
	
	private function get_playing():Bool return this._playing;
	
	private function set_playing(val:Bool) :Bool {
		if (val == this._playing) return this._playing;
	
		this._playing = val;
		this.onPlayingChange(this._playing);
		draw(this._playing);
		return this._playing;
	}	
	
	
	private var _currentPlaying:Null<Bool> = null;
	public function draw(playing:Bool)
	{
		
		if (playing)
		{		
			this.graphics.beginFill(0xFF0000);
			this.graphics.drawEllipse(0, 0, 28, 28);
			this.graphics.beginFill(0xffffff);
			this.graphics.drawRect(10, 10, 9, 9);				
		}
		else
		{
			this.graphics.beginFill(0x4AB576);
			this.graphics.drawEllipse(0, 0, 28, 28);				
			var commands:Vector<Int> = new Vector<Int>(4, true);
			commands[0] = GraphicsPathCommand.MOVE_TO;
			commands[1] = GraphicsPathCommand.LINE_TO;
			commands[2] = GraphicsPathCommand.LINE_TO;
			commands[3] = GraphicsPathCommand.LINE_TO;
			var data:Vector<Float> = new Vector<Float>(8, true);
			data[0] = 10; // x
			data[1] = 10; // y
			data[2] = 19;
			data[3] = 15;
			data[4] = 10;
			data[5] = 19;
			data[6] = 10;
			data[7] = 10;
			this.graphics.beginFill(0xffffff);
			this.graphics.drawPath(commands, data);						
		}
		
		//this._currentPlaying = playing;			
	}
	
	dynamic public function onPlayingChange(playing:Bool)
	{
		trace('Playing: ' + playing);
	}
	
	
}