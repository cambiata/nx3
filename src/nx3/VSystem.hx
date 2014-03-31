package nx3;

using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */
 class VSystem 
 {
	public var bars:Array<VSystemBar>;	
	public var width:Float;
	public function new()
	{
		this.bars = new Array<VSystemBar>();
		this.width = 0;
	}
	public var status:VSystemStatus;
	
	public function getLastBarAttributes():VBarAttributes
	{
		if (bars.length == 0) return null;
		return bars.last().actAttributes;
	}
 }