package nx3;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
import nx3.VNote;

using nx3.ENoteValTools;
/**
 * ...
 * @author Jonas Nyström
 */
class VNoteHeadsRectsPausesCalculator
{
	var vnote:VNote;

	public function new(vnote:VNote) 
	{
		this.vnote = vnote;
	}
	
	public function getHeadsRects(): Rectangles
	{
		//return [new Rectangle(-2, -4, 4, 8)];		
		return switch(this.vnote.nnote.value.beaminglevel())
		{
			case 1: [new Rectangle(-1.8, -3, 3.6 ,6)];							
			case 2: [new Rectangle(-2, -3, 4 ,6)];							
			default :  [new Rectangle(-1.6, -3.3, 3.2 ,6.6)];							
		}
	}
	
}