package nx3.audio;
import audio.LinearAccelerator;
import nx3.audio.NotenrItem;
import nx3.audio.TempoInfo;
import nx3.ENoteVal;

/**
 * SoundlengthCalculator
 * @author Jonas Nyström
 */
class SoundlengthCalculator 
{
	var n:NotenrItem;
	var tempos:Array<TempoInfo>;
	var defaulttempo:Int;
	var beatvalue:Int;

	public function new(n:NotenrItem, tempos:Array<TempoInfo>=null, defaulttempo:Int=60, pulseval:ENoteVal = null) 
	{
		this.beatvalue = (pulseval == null) ? ENoteValTools.value(ENoteVal.Nv4) : ENoteValTools.value(pulseval);
		
		this.n = n;
		this.tempos = tempos;
		if (this.tempos != null) this.tempos.sort(function(a, b) return Reflect.compare(a.pos, b.pos));
		this.defaulttempo = defaulttempo;
	}
	
	public function getSoundposAndDuration(): {length:Float, pos:Float, barlength:Float} {
		
		var note:NotenrItem = this.n;
		
		var starttempo:Int = this.defaulttempo;
		var endtempo:Null<Int> = null;
		if (this.tempos != null && this.tempos.length >= 1) {
			var firsttempoinfo = this.tempos[0];
			starttempo = firsttempoinfo.bpm;
		}
		
		if (this.tempos != null && this.tempos.length >= 2) {
			var secondtempo = this.tempos[1];
			endtempo = secondtempo.bpm;
		}
		
		if (this.tempos != null && this.tempos.length >= 3) throw"This version can't handle more than two tempoinfos!";
		
		var tempochange:Bool = (endtempo != null);
		
		if (tempochange) {
			// TODO
		} 
		
		var soundlength = note.noteval / this.beatvalue * (60/ this.defaulttempo);		
		var soundposition = note.position / this.beatvalue * (60/this.defaulttempo);		
		var barlength = note.barvalue /  this.beatvalue * (60/this.defaulttempo);		
		return { length:soundlength, pos:soundposition, barlength:barlength };
	}
	
}