package nx3;
import nx3.PBars;
using cx.ArrayTools;

/**
 * ...
 * @author Jonas Nyström
 */

 @:access(nx3.PSystem)
class PScoreSystemsGenerator
{
	var bars:PBars;

	public function new(bars:PBars) 
	{
		this.bars = bars;
	}
	
	public function getsSystems(systemwidths:Array<Float>):PSystems
	{
	
		var tempbars = this.bars.copy();		
		var result:PSystems = new PSystems();		
		var sysidx = 0;
		var prevbarAttributes:PBarAttributes = null;	
		while (tempbars.length > 0)
		{
			var syswidth = systemwidths.indexOrValue(sysidx, systemwidths.first());
			var generator = new PSystemGenerator(tempbars,  { showFirstClef:true, showFirstKey:true, showFirstTime:(sysidx == 0) }, prevbarAttributes,  syswidth, new PBarWidthCalculator() );
			var system:PSystem = generator.getSystem();								
			prevbarAttributes = system.getLastBarAttributes();
			result.push(system);
			sysidx++;
		}
	
		return result;
		
	}
	
	
	
}