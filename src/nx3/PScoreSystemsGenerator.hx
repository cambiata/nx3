package nx3;
import nx3.PBars;
import nx3.PScore;
using cx.ArrayTools;

/**
 * ...
 * @author Jonas Nyström
 */

 @:access(nx3.PSystem)
class PScoreSystemsGenerator
{
	var bars:PBars;
	var score:PScore;

	public function new(?score:PScore, bars:PBars) 
	{
		this.bars = bars;
		this.score = score;
	}
	
	public function getsSystems(systemwidths:Array<Float>):PSystems
	{
			
		var tempbars = this.bars.copy();		
		var result:PSystems = new PSystems();		
		var sysidx = 0;
		var prevbarAttributes:PBarAttributes = null;	
		while (tempbars.length > 0)
		{			
			var systemwidthsFirst:Float = systemwidths.first();
			//trace(systemwidthsFirst);
			//if (systemwidthsFirst == null) systemwidthsFirst = 0;
			var syswidth = systemwidths.indexOrValue(sysidx,systemwidthsFirst);
			var generator = new PSystemBarsGenerator(this.score, tempbars,  { showFirstClef:true, showFirstKey:true, showFirstTime:(sysidx == 0) }, prevbarAttributes,  syswidth, new PBarWidthCalculator() );
			var system:PSystem = generator.getSystem();								
			prevbarAttributes = system.getLastBarAttributes();
			result.push(system);
			sysidx++;
		}
	
		return result;
		
	}
	
	
	
}