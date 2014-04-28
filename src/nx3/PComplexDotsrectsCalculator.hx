package nx3;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
import nx3.PComplex;
using cx.ArrayTools;
using nx3.ENoteValTools;
/**
 * ...
 * @author Jonas Nyström
 */
class PComplexDotsrectsCalculator
{
	var complex:PComplex;

	public function new(complex:PComplex) 
	{
		this.complex = complex;
	}
	
	public function getDotRects():Rectangles
	{
		var nrofnotes = this.complex.getNotes().length;		
		var firstnote = this.complex.getNotes().first();		
		var rects:Rectangles = getRectsForNote(firstnote, false);

		if (nrofnotes == 2)
		{
			var secondnote = this.complex.getNotes().second();
			var secondrects = getRectsForNote(secondnote, true);
			rects = RectanglesTools.concat(rects, secondrects);
		}		
		return rects;		
	}
	
	function getRectsForNote(note:PNote, down:Bool=false):Rectangles
	{
			if (note.nnote.value.dotlevel() == 0) return [];
			var rects:Rectangles = [];
			var dotwidth = (note.nnote.value.dotlevel() == 1) ?  Constants.DOT_WIDTH  :  Constants.DDOT_WIDTH;
			var headrect = RectanglesTools.unionAll(note.getHeadsRects());
			var rectX = headrect.x + headrect.width;
			
			var dotlevels = new Map<Int, Bool>();
			for (head in note.nnote.nheads)
			{
				var level = head.level;
				var adj =   Std.int(Math.abs((level-1) % 2)) ;
				var dotlevel = (down) ? level + adj : level - adj;				
				dotlevels.set(dotlevel, true);
			}			
			var dotkeys = dotlevels.keys().fromHashKeys();
			for (level in dotkeys)
			{
				rects.push(new Rectangle(rectX, level - 0.5, dotwidth, 1));
			}		
			return rects;
	}
	
	
}