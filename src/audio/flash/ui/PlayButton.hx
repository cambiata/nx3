package audio.flash.ui;

import flash.display.Sprite;
import flash.events.MouseEvent;
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
		//if (_currentPlaying == playing) return;
		
			if (playing)
				this.graphics.beginFill(0xFF0000);
			else
				this.graphics.beginFill(0x00aa00);
				
		this.graphics.drawRoundRect(0, 0, 30, 30, 8);
		//this._currentPlaying = playing;			
	}
	
	dynamic public function onPlayingChange(playing:Bool)
	{
		trace('Playing: ' + playing);
	}
	
	
}