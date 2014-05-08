package nx3;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
using nx3.ENoteValTools;
using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */
class PNoteHeadsRectsPausesCalculator
{
	var vnote:PNote;

	public function new(vnote:PNote) 
	{
		this.vnote = vnote;
	}
	
	public function getHeadsRects(): Rectangles
	{
		//return [new Rectangle(-2, -4, 4, 8)];		
		var rects = switch(this.vnote.nnote.value.beaminglevel())
		{
			case 1: [new Rectangle(-1.8, -3, 3.6 ,6)];							
			case 2: [new Rectangle(-2, -3, 4 ,6)];							
			default :  [new Rectangle(-1.6, -3.3, 3.2 ,6.6)];							
		}
		
		var level = 0;
		switch this.vnote.nnote.type
		{
			case ENoteType.Pause(l): level = l;
			default:
		}
		
		rects.first().offset(0, level);
		
		return rects;
	}
	
}