package
{
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	
	public class PitchShiftTest extends Sprite
	{
		private var _sound:SoundPitchShift;
		
		public function PitchShiftTest()
		{
			for ( var i:int = 0; i < numChildren; ++i)
			{
				getChildAt(i).visible = false;
			}
			t.visible = true;
			_sound = new SoundPitchShift( loaderInfo.url.replace(/\/[^\/]+$/, "/song.mp3") );
			_sound.mp3.addEventListener( Event.COMPLETE, onSoundLoaded );
			
			currentX = lastX = thumb.x
			thumb.buttonMode = true;
			addEventListener(Event.ENTER_FRAME, loop);
			thumb.addEventListener(MouseEvent.MOUSE_DOWN, onDown);
			addEventListener(MouseEvent.MOUSE_UP, onUp);
		}
		
		private function onSoundLoaded(evt:Event)
		{
			for ( var i:int = 0; i < numChildren; ++i)
			{
				getChildAt(i).visible = true;
			}
			t.visible = false;
			
			fft_combobox.selectedIndex = 1;
			osamp_combobox.selectedIndex = 3;
			
			stereo_checkbox.addEventListener( Event.CHANGE, onControlChange );
			fft_combobox.addEventListener( Event.CHANGE, onControlChange );
			osamp_combobox.addEventListener( Event.CHANGE, onControlChange );
		}
		
		function onControlChange(e:Event)
		{
			if (e.target == stereo_checkbox)
				_sound.stereo = stereo_checkbox.selected;
			if (e.target == fft_combobox)
				_sound.fftFrameSize = fft_combobox.selectedItem.data;
			if (e.target == osamp_combobox)
				_sound.osamp = osamp_combobox.selectedItem.data;
		}
		
		function onDown(e:MouseEvent):void
		{
			isDragging = true;
			offset = thumb.mouseX;
			addEventListener(MouseEvent.MOUSE_MOVE, onMove);
		}

		function onUp(e:MouseEvent):void
		{
			isDragging = false;
			removeEventListener(MouseEvent.MOUSE_MOVE, onMove);
		}

		function onMove(e:MouseEvent):void
		{
			thumb.x = mouseX - offset;
			if(thumb.x <= bounds.left)
				thumb.x = bounds.left;
			else if(thumb.x >= bounds.right)
				thumb.x = bounds.right;
			e.updateAfterEvent();
		}

		function loop(e:Event):void
		{
			if(isDragging)
			{
				lastX = currentX;
				currentX = mouseX;
				vx = currentX - lastX;
			}	
			else
			{
				thumb.x += vx;
			}
			
			if(thumb.x <= bounds.left)
			{
				thumb.x  = bounds.left;
				vx *= -1;
			}
			else if(thumb.x >= bounds.right)
			{
				thumb.x = bounds.right;
				vx *= -1;
			}
			
			vx *= 0.98;
			if (Math.abs(vx) < 0.5) vx = 0;
			var perc:Number = (thumb.x - bounds.left) / (bounds.right - bounds.left);
			_sound.pitch = perc < .5 ? .5 + perc : 1.0 + (perc - .5) * 2;
			
			var text:String = "Estimated CPU use: " + (_sound.cpu * 100).toFixed(0) + "% - Pitch factor: " + _sound.pitch.toFixed(2);
			if (!_sound.doPitch)
				text = "Too much CPU: disabling pitching :(";
			else if (!_sound.doStereo && _sound.stereo)
				text = "Too much CPU: stereo disabled - " + text;
			
			info_tf.text = text;
		}
		
		var currentX:Number;
		var lastX:Number;
		var vx:Number = 0;
		var offset:Number;
		var perc:Number = 0;
		var bounds:Object = {left:14, right:474};
		var isDragging:Boolean = false;
		
	}
}