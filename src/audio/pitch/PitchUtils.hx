package audio.pitch;
import audio.pitch.data.ModelSegments;
import audio.pitch.data.ModelSegment;
import flash.display.Graphics;
using cx.ArrayTools;

/**
 * PitchUtils
 * @author Jonas Nyström
 */
class PitchUtils 
{
	static public var SILENCE_FREQ:Int = -1000;
	static public function drawPitch(gr:Graphics, frequency:Float, amplitude:Float, time:Float, clearTimeX) 	
	{ 
		var psx = time / 10;

		if (amplitude == 0) return;
		
		var note = Audio.frequencyToNote(frequency);
		var normnote = Math.round(note);
		//var normfreq = Audio.noteToFrequency(note);
		trace(note);
		
		var psy = 200 - note * 10 ;
		
		gr.lineStyle(3, 0xaaaaaa);
		gr.drawCircle(psx, psy, 2);
		
		var psy = 200 - normnote * 10 ;
		gr.lineStyle(3, 0x000000);
		gr.drawCircle(psx, psy, 1);				
	}
	
	static public function drawSegments(gr:Graphics, segments:ModelSegments)
	{
		for (seg in segments)
		{
			if (seg.note == PitchUtils.SILENCE_FREQ) continue;
			
			var psx = seg.time / 10;
			var psw = seg.duration / 10;
			var psy = 200 - (seg.note * 10) - 5 ;
			var psh = 10;
			
			gr.lineStyle(1, 0xaaaaaa);
			gr.drawRect(psx, psy, psw, psh);
		}
	}
	
}





