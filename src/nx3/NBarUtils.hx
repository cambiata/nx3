package nx3;

/**
 * NBarUtils
 * @author 
 */
class NBarUtils 
{
	static public function getValue(bar:NBar):Int {
		var barvalue = 0;
		for (part in bar) {
			for (voice in part)
			{
				var voicevalue = 0;
				for (note in voice) voicevalue += ENoteValTools.value(note.value);
				barvalue = Std.int(Math.max(barvalue, voicevalue));
			}
		}
		return barvalue;
	}
	
}