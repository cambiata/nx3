package nx3;
import nx3.PComplex;
using nx3.geom.Rectangles.RectanglesTools;
using cx.ArrayTools;
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
		
		return secondoffset;
	}
	
}