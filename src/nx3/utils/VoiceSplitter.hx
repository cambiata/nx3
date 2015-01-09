package nx3.utils;
import nx3.NBar;
import nx3.NPart;
import nx3.NVoice;

/**
 * VoiceSplitter
 * @author 
 */
class VoiceSplitter 
{
	var nbars:NBars;

	public function new(nbars:NBars) {
		this.nbars = nbars;
		if (! canSplit(this.nbars)) throw "Can't split this nbars - irregular voice pattern";
		//var pattern = this.getPartPattern(this.score.nbars[0]);
		//var score2 = this.getVoicesplittedNBars();
	}
	
	public function getVoicesplittedNBars():NBars {
		var newbars = new nx3.NBars();
		for (bar in this.nbars) {
			var newparts = new nx3.NParts();
			for (part in bar) {
				for (voice in part) {
					var newvoice = new NVoice(voice.nnotes, voice.type, voice.direction);
					var newpart = new NPart([newvoice], part.type, part.clef, part.clefDisplay, part.key, part.keyDisplay);
					newparts.push(newpart);
				}
			}
			var newbar = new NBar(newparts, bar.type, bar.time, bar.timeDisplay, bar.allotment, bar.spacing);
			newbars.push(newbar);
		}
		//var newscore = new NNBars(newbars);
		//return newscore;
		return newbars;
	}
	
	static public function canSplit(nbars:NBars):Bool {
		var firstpattern = getPartPattern(nbars[0]);
		for (bar in nbars)
		{
			var barpattern = getPartPattern(bar);
			if (Std.string(barpattern) != Std.string(firstpattern)) return false;
		}
		return true;
	}
	
	static private function getPartPattern(bar:NBar) {
		var pattern = [];
		for (part in bar) {
			pattern.push(part.length);
		}
		return pattern;
	}
	
}