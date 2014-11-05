package audio.pitch;
/*
  This is part of Timber - see http://abstractnonsense.com/timber

  By Bill Moorier.  Licence is BSD.
 */

class Audio {
	public static inline var SAMPLE_RATE = 44100;

	public static function samplesToSeconds(samples : Int) {
		return (1.0 * samples) / SAMPLE_RATE;
	}

	public static function secondsToSamples(seconds : Float) {
		return Std.int(seconds * SAMPLE_RATE);
	}

	public static function frequencyToSeconds(f : Float) {
		return 1.0 / f;
	}

	public static function secondsToFrequency(seconds : Float) {
		return 1.0 / seconds;
	}

	public static function scaleFrequency(f : Float) {
		var scaled = 12 * ((Math.log(f) - Math.log(440)) / Math.log(2));
		//scaled -= 3; // Make C note #0
		return scaled;
	}
	
	public inline static function frequencyToNote(f : Float) {
		return 12 * ((Math.log(f) - Math.log(440)) / Math.log(2));
		
	}	

	public inline  static function noteToFrequency(note):Float
	{
		return Math.round( 440 *Math.pow( 1.059463094359, note));
	}
	
	static var notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

	public static function noteName(scaledFrequency) {
		return notes[Math.round(scaledFrequency) % notes.length];
	}

	public static function scaledFrequencyFromNoteName(noteName) {
		var f = 0;
		for(note in notes) {
			if(note == noteName) {
				return f;
			}
			f++;
		}
		return -1;
	}

	public static function staffPosition(scaledFrequency : Float) {
		switch(Math.round(scaledFrequency)) {
			case 5: // F
				return 0.0;
			case 6: // F#
				return 0.5;
			case 7: // G
				return 1;
			case 8: // G#
				return 1.5;
			case 9: // A
				return 2;
			case 10: // A#
				return 2.5;
			case 11: // B
				return 3;
			case 0: // C
				return 4;
			case 12:
				return 4;
			case 1: // C#
				return 4.5;
			case 2: // D
				return 5;
			case 3: // D#
				return 5.5;
			case 4: // E
				return 6;
		}
		return -1;
	}
}
