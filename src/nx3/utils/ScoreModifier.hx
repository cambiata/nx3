package nx3.utils;
import nx3.NBar;
import nx3.NBars;
import nx3.NScore;
import nx3.PBar;
import nx3.PScore;

/**
 * ...
 * @author Jonas Nyström
 */
class ScoreModifier
{
	var score:nx3.NScore;

	public function new(nscore:NScore) 
	{
		this.score = nscore;
	}
	
	public function getBarNrAsScore(barNr:Int):NScore
	{
		if (this.score == null) throw "score is null";
		if (barNr < 0) throw "bar index error";
		if (barNr > this.score.nbars.length-1) throw "bar index error";
		
		var nbar = this.score.nbars[barNr];

		var firstbar = this.score.nbars[0];
		
		if (nbar.time == null) nbar.time = firstbar.time;
		
		for (partnr in 0...nbar.nparts.length) if (nbar.nparts[partnr].clef == null) nbar.nparts[partnr].clef = firstbar.nparts[partnr].clef;
		for (partnr in 0...nbar.nparts.length) if (nbar.nparts[partnr].key == null) nbar.nparts[partnr].key = firstbar.nparts[partnr].key;
		
		var score:NScore = new NScore([nbar]);
		
		return score;
	}
	
	public function addBarToScore(nbar:NBar)
	{
		if (this.score == null) 
			return this.score = new NScore([nbar]);				
		var bars = this.score.nbars;
		bars.push(nbar);		
		this.score = new NScore(bars);
		return this.score;
	}
	
	public function removeLastBarInScore()
	{
		if (this.score == null) return null;
		var bars = this.score.nbars;
		if (bars.length <= 1) {
			return this.score = null;			
		}
		bars.pop();
		return this.score = new NScore(bars);
	}
	
	public function getRandomScore(length:Int, startWithIdx:Null<Int>=null, endWithIdx:Null<Int>=null, avoidCloseRepeat:Bool=true):NScore
	{
		var nbars = this.score.nbars;		
		var count = nbars.length;		
		var result:Array<Int> = [];	
		
		for (idx in 0...length)
		{			
			var r = (startWithIdx != null) ? startWithIdx : randomInt(0, count-1);
			if (result.length > 0) {
				r = randomInt(0, count-1);
				while (r ==result[result.length-1]) r = randomInt(0, count-1);
			}			
			result.push(r);
		}
		
		this.randomstring = result.join('');
		
		var newbars:NBars = [];
		for (r in result)
		{
			var nbar = nbars[r];
			newbars.push(nbar);		
		}
		
		return new NScore(newbars);		
	}
	
	public var randomstring:String;
	
	public static inline function randomInt(from:Int, to:Int):Int
	{
		return from + Math.floor(((to - from + 1) * Math.random()));
	}	
	
	public function clear()
	{
		this.score = null;
	}
	
	
}