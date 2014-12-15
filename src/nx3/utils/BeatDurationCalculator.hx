package nx3.utils;

/**
 * BeatDurationCalculator
 * @author Jonas Nyström
 */
/**
* ...
* @author Jonas Nyström
*/
 
class BeatDurationCalculator {
	
	/**
	* Calculates the time duration for individual musical beats in a tempo changing context.
	* Example: What is the duration in seconds for the second beat in a four beat accellerando from 60 bpm to 120 bpm?
	* Usage:
	* var calc = new BeatDurationCalculator(60, 120, 4);
	* var duration = calc.getBeatDuration(1, 2); // 0.7292 secs
	*
	* http://math.stackexchange.com/questions/1036963/how-to-calculate-the-amount-of-time-spent-interpolating-from-one-tempo-value-to/1037100?noredirect=1#comment2167302_1037100
	* Thanks to
	* - csd: http://math.stackexchange.com/users/33493/csd
	* - Hristo Iliev: http://math.stackexchange.com/users/200625/hristo-iliev
	*/
	
	var durationBeats:Float;
	var endTempoBpm:Float;
	var startTempoBpm:Float;
	 
	public function new(startTempoBmp:Float, endTempoBpm:Float, durationBeats:Float) {
		this.startTempoBpm = startTempoBmp;
		this.endTempoBpm = endTempoBpm;
		this.durationBeats = durationBeats;
	}
	 
	public function getBeatTime(beat:Float):Float {
		if (beat == 0) return .0;
		if (this.startTempoBpm == this.endTempoBpm) return beat * 60 / this.startTempoBpm;
		var beatTempo = this.startTempoBpm + ((this.endTempoBpm - this.startTempoBpm) / this.durationBeats) * beat;
		var beatTime = (beat / (beatTempo - this.startTempoBpm)) * Math.log(beatTempo / this.startTempoBpm) * 60;
		return beatTime;
	}
	 
	public function getBeatDuration(beatStart:Float, beatEnd:Float):Float {
		var beatStartTime = this.getBeatTime(beatStart);
		var beatEndTime = this.getBeatTime(beatEnd);
		return beatEndTime - beatStartTime;
	}
} 