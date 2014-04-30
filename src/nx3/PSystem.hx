package nx3;

using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */
class PSystem
 {
	public var bars:PSystemBars;
	public var width:Float;
	public function new()
	{
		this.bars = [];
		this.width = 0;
	}
	public var status:PSystemStatus;
	
	public function getLastBarAttributes():PBarAttributes
	{
		if (bars.length == 0) return null;
		return bars.last().actAttributes;
	}
 }