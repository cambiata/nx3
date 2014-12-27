package nx3.audio;
import nx3.NBarUtils;
import nx3.NScore;
import nx3.utils.VoiceSplitter;

/**
 * NotenrBarsCalculator
 * @author 
 */
class NotenrCalculator 
{
	var score:NScore;

	public function new(nscore:NScore, splitVoices:Bool=true) 
	{ 
		nscore = (splitVoices) ? new VoiceSplitter(nscore).getVoicesplittedScore() : nscore;
		this.score = nscore;
	}
	
	public function getPartsNotenrItems() {
		var partsNotenerItems = [];
		
		var barvalues = [];
		for (bar in this.score)
		{
			var barvalue = NBarUtils.getValue(bar);
			barvalues.push(barvalue);
		}
		
		var partslist = this.getPartslist();
		for (parts in partslist)
		{
			var partNotenrItems = new NotenrPartsCalculator(parts, barvalues).execute();
			partsNotenerItems.push(partNotenrItems);
		}
		
		return partsNotenerItems;
	}
	
	public function getPartslist():Array<nx3.NParts>  {
		var partcount = this.score.nbars[0].nparts.length;
		var result = [];
		for (partidx in 0...partcount) {
			var parts = new nx3.NParts();
			for (bar in this.score) {
				var barpart = bar.nparts[partidx];
				parts.push(barpart);
			}
			result.push(parts);
		}
		return result;
	}
	
	
	
}