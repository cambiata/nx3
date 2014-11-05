package audio.pitch;
import flash.display.Graphics;

/**
 * PitchUtils
 * @author Jonas Nyström
 */
class PitchUtils 
{

	static public function drawPitch(gr:Graphics, frequency:Float, amplitude:Float, time:Float, clearTimeX:Int = 500) 	
	{ 
		var psx = (clearTimeX > 0) ? (time / 10) % clearTimeX : time / 10;
		if (psx < 10) {
			gr.clear();				
		}
		if (amplitude == 0) return;
		
		var note = Audio.frequencyToNote(frequency);
		var normnote = Math.round(note);
		//var normfreq = Audio.noteToFrequency(note);
		
		var psy = 200 - note * 10 ;
		
		gr.lineStyle(3, 0xFF0000);
		gr.drawCircle(psx, psy, 5);
		
		var psy = 200 - normnote * 10 ;
		gr.lineStyle(3, 0x000000);
		gr.drawCircle(psx, psy, 1);				
	}
	
}