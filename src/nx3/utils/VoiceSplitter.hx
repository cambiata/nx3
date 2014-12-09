package nx3.utils;
import nx3.NBar;
import nx3.NPart;
import nx3.NScore;
import nx3.NVoice;
import nx3.test.TestItems;

/**
 * VoiceSplitter
 * @author 
 */
class VoiceSplitter 
{
	var score:NScore;

	public function new(score:NScore) {
		this.score = score;
		if (! getScorePatternSplittability(this.score)) throw "Can't split this score - irregular voice pattern";
		//var pattern = this.getPartPattern(this.score.nbars[0]);
		//var score2 = this.getVoicesplittedScore();
	}
	
	public function getVoicesplittedScore():NScore {
		var newbars = new nx3.NBars();
		for (bar in this.score) {
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
		var newscore = new NScore(newbars);
		return newscore;
	}
	
	static private function getScorePatternSplittability(score:NScore) {
		var firstpattern = getPartPattern(score.nbars[0]);
		for (bar in score)
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