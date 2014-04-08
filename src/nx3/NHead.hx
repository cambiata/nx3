package nx3;



/**
 * ...
 * @author Jonas Nyström
 */


class NHead
{
	public var level(default, default):Int;
	public var type(default, default):EHeadType;
	public var sign(default, default): ESign;
	public var tie(default, default): ETie;
	public var tieTo(default, default): ETie;
	
	public function new(?type:EHeadType, ?level: Int=0, ?sign:ESign=null, ?tie:ETie=null, ?tieTo:ETie=null) 
	{
		this.type = (type != null)			? type			: EHeadType.Normal; 
		this.sign = (sign != null) 			? sign 			: ESign.None;
		this.tie = (tie != null) 			? tie			: null; 		
		this.tieTo = (tieTo != null) 		? tieTo			: null; 		
		this.level = level;
	}	
	
}

