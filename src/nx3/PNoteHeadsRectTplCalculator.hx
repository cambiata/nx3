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

	public function new(note:PNote) 
	{
		this.note = note;
	}
	
	public function getHeadsRects(): Rectangles
	{		
		return [new Rectangle(-6, -5.3, 10, 8.8)];		
	}
	
}