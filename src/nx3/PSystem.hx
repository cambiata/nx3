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
	public function getSystemBreakWidth():Float return this.systemBreakWidth;
	
	
	var value:Null<Int>;
	public function getValue():Int
	{
		if (this.value != null) return this.value;
		this.value = 0;
		for (systembar in this.getSystembars()) this.value += systembar.bar.getValue();		
		return this.value;
	}
	
	public function calculateSystembarXs()
	{
		var x = 0.0;
		for (systemBar in this.getSystembars())		
		{
			systemBar.getBarWidths().x = x;
			x += systemBar.getBarWidths().width;
		}
	}	
	
	
	
 }