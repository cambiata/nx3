package nx3;
import nx3.geom.Rectangles;
import nx3.VHeadPlacements;
import nx3.VHeads;
import nx3.VNote;

/**
 * ...
 * @author Jonas Nyström
 */
class VNoteHeadsRectsCalculator
{
	var vnote:VNote;
	var placements:VHeadPlacements;
	var heads:VHeads;

	public function new(vnote:VNote, ?placements:VHeadPlacements=null) 
	{
			this.vnote = vnote;
			this.heads = vnote.getVHeads();
			this.placements = (placements != null) ? placements : vnote.getVHeadsPlacements();
	}
	
	public function getHeadsRects():Rectangles
	{
		return switch this.vnote.nnote.type
		{
			case ENoteType.Note(h, v, a, a2): new VHeadsRectsCalculator(this.heads, this.placements, vnote.nnote.value).getHeadsRects();
			case ENoteType.Pause(l): 	new VNoteHeadsRectsPausesCalculator(vnote).getHeadsRects();
			case ENoteType.Lyric(text, o, c, font): new VNoteHeadsRectsLyricsCalculator(vnote, text, font).getHeadsRects();
			case ENoteType.Tpl:new VNoteHeadsRectsTplCalculator(vnote).getHeadsRects();
		default:
			throw "Non implemented ENoteType: " + this.vnote.nnote.type.getName();
			return [];
		}
	}
	
}