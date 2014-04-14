package nx3;
import flash.geom.Rectangle;
import nx3.geom.Rectangles;

/**
 * ...
 * @author Jonas Nyström
 */
class VNoteHeadsRectsTplCalculator
{
	var vnote:VNote;

	public function new(vnote:VNote) 
	{
		this.vnote = vnote;
	}
	
	public function getHeadsRects(): Rectangles
	{		
		return [new Rectangle(-6, -5.3, 12, 10.6)];		
	}
	
}