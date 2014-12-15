package nx3;
import nx3.EAllotment;
using Lambda;
/**
 * ...
 * @author Jonas Nyström
 */
@:access(nx3.NPart)
 
class NBar
{

	public function new(parts:Array<NPart> = null, ?type:EBarType, ?time:ETime = null, ?timeDisplay:EDisplayALN = null, ?allotment:EAllotment = null, ?spacing:Float = 0) 
	{		
		this.nparts = parts;
		for (part in parts) part.nbar = this;
		
		this.type = (type == null) ? EBarType.Normal : type;
		
		//this.time = (time == null) ? ETime.Time4_4 : time;
		this.time = time;
		this.timeDisplay = (timeDisplay == null) ? EDisplayALN.Layout :  timeDisplay;
		this.allotment = (allotment == null)? EAllotment.Logaritmic : allotment;
		this.spacing = (spacing != 0) ? spacing : Constants.BAR_SPACING_DEFAULT;
	}

	var nscore:NScore;
	
	public var nparts(default, null):Array<NPart>;
	public var type(default, null):EBarType;
	public var time(default, default):ETime;
	public var timeDisplay(default, null):EDisplayALN;
	public var allotment(default, null):EAllotment;
	public var spacing(default, null):Float;
	
	public function getNNote(partIdx:Int, voiceIdx:Int, noteIdx:Int):NNote return this.getNPart(partIdx).getNVoice(voiceIdx).getNNote(noteIdx);
	
	public function getNPart(idx:Int):NPart return (idx < 0 || idx > this.nparts.length) ? null : this.nparts[idx];
	
	public function iterator() return this.nparts.iterator();
	public var length (get, null):Int;
	private function get_length():Int return this.nparts.length;		
	
	public function getTag():String {
		var partstags = '';
		this.nparts.iter(function(npart) partstags += npart.getTag());
		var time = NTags.timeTag(this.time) + NTags.displayALNTag(this.timeDisplay);
		var spacing = (this.spacing != 8) ? 'sp:' + this.spacing : '';
		var type = NTags.nbarTypeTag(this.type );
		var allot = NTags.nbarAllotmentTag(this.allotment);
		return '/$type$partstags$time$allot$spacing';			
	}
}

