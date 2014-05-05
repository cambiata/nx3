package nx3;
import nx3.PSystem;
using cx.MathTools;
/**
 * ...
 * @author Jonas Nyström
 */
class PScoreSystemStretcher
{
	var system:PSystem;

	public function new(system:PSystem) 
	{
		this.system = system;
	}
	
	public function stretchTo(stretchSystemToWidth:Float, ifMoreThan:Float=0):Bool
	{
		if (ifMoreThan > 0)
		{ 
			if (this.system.getWidth() <= ifMoreThan) return true;			
		}

		var diff = (stretchSystemToWidth - this.system.getWidth());						
		
		var totalvalue = this.system.getValue();		
		//trace([stretchSystemToWidth, this.system.getWidth(), diff]);
		
		for (systembar in this.system.getSystembars())
		{
			var stretchamount = (systembar.bar.getValue() / totalvalue) * diff;
			//trace(stretchamount);
			systembar.setBarStretch(stretchamount);
		}
		system.calculateSystembarXs();
		
		return false;
	}
	
	
}