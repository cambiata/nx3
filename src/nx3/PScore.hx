package nx3;
import nx3.NScore;

/**
 * ...
 * @author Jonas Nyström
 */
@:access(nx3.PBar)
class PScore
{
	var nscore(default, null):NScore;

	public function new(nscore:NScore) 
	{
		this.nscore = nscore;
	}
	
	var bars:PBars;
	public function getBars():PBars
	{
		if (this.bars != null) return this.bars;
		this.bars = [];
		for (nbar in this.nscore.nbars)
		{
			var bar = new PBar(nbar);
			bar.score = this;
			this.bars.push(bar);
		}
		return this.bars;
	}
	
	var systems:PSystems;
	public function getSystems():PSystems
	{		
		if (this.systems != null) return this.systems;		
		var tempbars = this.getBars().copy();
		var generator = new PSystemGenerator(tempbars,  { showFirstClef:true, showFirstKey:true, showFirstTime:true }, null,  { width:400, height:600 }, new PBarWidthCalculator() );
		var system:PSystem = generator.getSystem();				
		this.systems = [system];
		return this.systems;
	}
	
}