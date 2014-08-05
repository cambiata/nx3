package nx3;
import nx3.PComplex;
using nx3.geom.Rectangles.RectanglesTools;
using cx.ArrayTools;
using nx3.ENoteValTools;
/**
 * ...
 * @author Jonas Nyström
 */
class PNoteOffsetCalculator
{
	var complex:PComplex;

	public function new(complex:PComplex) 
	{
		this.complex = complex;
	}
	
	public function getNoteOffset(note:PNote):Float
	{
		if (note == this.complex.getNotes().first()) return 0;
		
		var firstrects  =   this.complex.notes.first().getHeadsRects();
		var secondrects =  this.complex.notes.second().getHeadsRects().copy();		
		var secondoffset = firstrects.getXIntersection(secondrects);			
		
		var firstnote = this.complex.getNotes().first();
		
		var diff = note.nnote.topLevel - firstnote.nnote.bottomLevel;
		
		if (diff  == 1)
		{
			secondoffset = secondoffset * Constants.COMPLEX_COLLISION_CHORD_INTERSECTION; // .7;
		}
		
		if (diff < 1)
		{
			if (firstnote.nnote.value.dotlevel() > 0)
			{
				secondoffset += (firstnote.nnote.value.dotlevel() == 1)? Constants.DOT_WIDTH : Constants.DDOT_WIDTH;
			}
		}
		
		return secondoffset;
	}
	
}