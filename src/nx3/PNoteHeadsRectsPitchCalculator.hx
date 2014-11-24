package nx3;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;

/**
 * ...
 * @author Jonas Nyström
 */
class PNoteHeadsRectsPitchCalculator
{
	var note:PNote;
	var partlevel:Int;
	var level:Int;
	var midinote:Int;
	var chain:Bool;
	public function new(note:PNote) 
	{
		this.note = note;
		switch note.nnote.type {
			case nx3.ENoteType.Pitch(level, midinote): 
				this.level = level;
				this.midinote = midinote;
			case _: 
		}
		
		var part = this.note.getVoice().getPart().npart;
		
		this.chain = switch part.type {
			case EPartType.PitchChain(l): true;
			case _: false;
		}
		
		this.partlevel = switch part.type {
			case nx3.EPartType.PitchChain(leveloffset): leveloffset;
			case _: 0;
		}
	}
	
	public function getHeadsRects(): Rectangles
	{		
		if (!this.chain) return [new Rectangle( -2, -2, 1, 4)];
		var rlevel = (this.level + this.midinote) * 1;
		return [new Rectangle( -2, -2 + rlevel, 1, 4)];
	}
	
}