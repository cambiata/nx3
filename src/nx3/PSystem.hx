package nx3;

using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */
class PSystem
 {
	public function new()
	{
		this.systembars = [];
		this.width = 0;
	}
	var status:PSystemStatus;
	public function getStatus():PSystemStatus return this.status;

	var width:Float;
	public function getWidth():Float return this.width;
	
	
	var systembars:PSystemBars;
	public function getSystembars():PSystemBars return this.systembars;
	
	public function getLastBarAttributes():PBarAttributes
	{
		if (systembars.length == 0) return null;
		return systembars.last().actAttributes;
	}
	
	var systemBreakWidth:Float = 0;
	
	
	
 }