package nx3.audio;
import nx3.NBars;
import nx3.NBarUtils;
import nx3.NScore;
import nx3.PSystems;

/**
 * NotenrBarsCalculator
 * @author 
 */
class NotenrBarsCalculator 
{

	/*
	var score:NScore;
	public function new(score:NScore) 
	{
		this.score = score;
	}
	*/
	
	var nbars:NBars;
	public function new(nbars:NBars) {
		this.nbars = nbars;
	}
	
	public function getPartsNotenrItems() {
		//if (bars == null) bars = this.score.nbars;

		var partsNotenerItems = [];		
		var barvalues = [];
		
		for (bar in this.nbars)		
		{
			var barvalue = NBarUtils.getValue(bar);
			barvalues.push(barvalue);
		}
		
		var partslist = this.getPartslist();
		var partnr = 0;
		for (parts in partslist)
		{
			var partNotenrItems = new NotenrPartsCalculator(parts, partnr,  barvalues).execute();
			partsNotenerItems.push(partNotenrItems);
			partnr++;
		}
		
		return partsNotenerItems;
	}
	
	public function getPartslist():Array<nx3.NParts>  {
		var partcount = this.nbars[0].nparts.length;
		var result = [];
		for (partidx in 0...partcount) {
			var parts = new nx3.NParts();
			for (bar in this.nbars) {
				var barpart = bar.nparts[partidx];
				parts.push(barpart);
			}
			result.push(parts);
		}
		return result;
	}
	

	
}