package nx3;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
import nx3.PComplex;
using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */
class PComplexTierectsCalculator
{
	var complex:PComplex;

	public function new(complex:PComplex) 
	{
		this.complex = complex;
	}
	
	public function getTieRects():Rectangles
	{
		var nrofnotes = this.complex.getNotes().length;
		
		var firstnote = this.complex.getNotes().first();
		var firstties:ETies = firstnote.getTies();		
		var secondnote = (nrofnotes == 2) ? this.complex.getNotes().second() : null;
		var secondties:ETies = (nrofnotes == 2) ? this.complex.getNotes().second().getTies() : [];
		if (firstties == [] && secondties == []) return [];		
		//trace(firstties);

		var rects = new Rectangles();
		
		var headIdx = 0;
		for (head in firstnote.getHeads())
		{
			var headrect = this.complex.getHeadsRects()[headIdx];
			if (head.nhead.tie != null) 
			{
				var level = head.nhead.level;
				rects.push(new Rectangle(0, level -2, 4, 2));
			}
			headIdx++;
		}
		if (secondnote != null)
		{
			for (head in secondnote.getHeads())
			{
				var headrect = this.complex.getHeadsRects()[headIdx];
			if (head.nhead.tie != null) 
			{
				var level = head.nhead.level;
				rects.push(new Rectangle(0, level - 1, 4, 2));
			}
				headIdx++;
			}			
		}
		
		return rects;
	}
	
}