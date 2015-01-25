package nx3;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;

/**
 * ...
 * @author Jonas Nyström
 */
class PNoteHeadsRectTplCalculator
{
	var note:PNote;
	var level:Int;
	public function new(note:PNote) 
	{
		this.note = note;
		var level = switch note.nnote.type {
			case nx3.ENoteType.Tpl(level, sign, pause): level;
			case _: 0;
		}
		
		var part = this.note.getVoice().getPart().npart;
		this.level = switch part.type {
			case nx3.EPartType.Tplchain: level * 3;
			case nx3.EPartType.Tplrow: 0;
			case _: 0;
		}
	}
	
	public function getHeadsRects(): Rectangles
	{		
		return [new Rectangle( -5.5, -5.3 + this.level, 10, 8.8) ];
	}
	
}