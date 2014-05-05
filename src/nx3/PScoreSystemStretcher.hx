package nx3;
import nx3.PSystem;

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
	
	public function stretchTo(width:Float):Bool
	{
		for (systembar in this.system.getSystembars())
		{
			systembar.setBarStretch(10);
		}
		
		return false;
	}
	
}