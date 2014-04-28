package nx3;
import nx3.EAllotment;

/**
 * ...
 * @author Jonas Nyström
 */
class NBar
{
	

	public function new(parts:Array<NPart> = null, ?type:EBarType, ?time:ETime = null, ?timeDisplay:EDisplayALN = null, ?allotment:EAllotment = null, ?spacing:Float = 8) 
	{		
		this.nparts = parts;
		this.type = (type == null) ? EBarType.Normal : type;
		//this.time = (time == null) ? ETime.Time4_4 : time;
		this.time = time;
		this.timeDisplay = (timeDisplay == null) ? EDisplayALN.Layout :  timeDisplay;
		this.allotment = (allotment == null)? EAllotment.Logaritmic : allotment;
		this.spacing = spacing;
	}

	public var nparts(default, null):Array<NPart>;
	public var type(default, null):EBarType;
	public var time(default, null):ETime;
	public var timeDisplay(default, null):EDisplayALN;
	public var allotment(default, null):EAllotment;
	public var spacing(default, null):Float;
	
}

