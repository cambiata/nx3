package nx3;
import nx3.geom.Rectangles;
import nx3.PHeadPlacements;
import nx3.PHeads;
import nx3.PNote;

/**
 * ...
 * @author Jonas Nyström
 */
class PNoteheadsRectsCalculator
{
	var note:PNote;
	var heads:PHeads;
	var placements:PHeadPlacements;

	public function new(note:PNote) 
	{
			this.note = note;
			this.heads = note.getPHeads();	
			this.placements = note.getPHeadsPlacements();
	}
	
	public function getHeadsRects():Rectangles
	{
		return switch this.note.nnote.type
		{
			case ENoteType.Note(h, v, a, a2): new PHeadsRectsCalculator(this.heads, this.placements, note.nnote.value).getHeadsRects();
			//case ENoteType.Pause(l): 	new VNoteHeadsRectsPausesCalculator(vnote).getHeadsRects();
			//case ENoteType.Lyric(text, o, c, font): new VNoteHeadsRectsLyricsCalculator(vnote, text, font).getHeadsRects();
			//case ENoteType.Tpl:new VNoteHeadsRectsTplCalculator(vnote).getHeadsRects();
		default:
			throw "Non implemented ENoteType: " + this.note.nnote.type.getName();
			return [];
		}
	}	
	
	
	
}