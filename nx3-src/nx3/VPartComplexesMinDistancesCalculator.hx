package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
 import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
using cx.MathTools;
using nx3.geom.Rectangles.RectanglesTools;

class VPartComplexesMinDistancesCalculator 
{
	var vpart:VPart;
	
	public function new(vpart:VPart)
	{
		this.vpart = vpart;
	}

	public function getDistance(leftComplex:VComplex, rightComplex:VComplex):Float
	{	
		var left = getComplexRightside(leftComplex);
		var right = getComplexLeftside(rightComplex);
		
		//trace(right);		
		var minDistance:Float  = (left.minrect.width + left.minrect.x) + -right.minrect.x;
		//trace(minDistance);
		
		var rectsDistance:Float = MathTools.round2(RectanglesTools.getXIntersection(left.rects, right.rects));
		//trace(rectsDistance);
		
		return Math.max(minDistance, rectsDistance);
	}
	
	public function getComplexRightside(complex:VComplex): { minrect:Rectangle, rects:Rectangles }
	{
		if (complex == null) return  { minrect:new Rectangle(0,0,0,0), rects:[] };
		
		var directions = this.vpart.getVComplexDirections().get(complex);
		var noterects:Rectangles = complex.getNotesRects(directions);
		var minrect:Rectangle = noterects.unionAll();
		minrect.y = -5;
		minrect.height = 10;
		
		var rects:Rectangles = 	noterects;
		
		
		rects = rects.concat(complex.getStaveBasicRects(directions));
		// dots are the rightest...
		var dotrects:Rectangles = complex.getDotsRects(noterects, directions);			
		if (dotrects != null && dotrects != []) rects = rects.concat(dotrects);
		return { minrect:minrect, rects:rects };		
	}
	
	public function getComplexLeftside(complex:VComplex): { minrect:Rectangle, rects:Rectangles }
	{
		if (complex == null) return  { minrect:new Rectangle(0,0,0,0), rects:[] };
		
		var directions = this.vpart.getVComplexDirections().get(complex);
		var noterects:Rectangles = complex.getNotesRects(directions);
		var minrect:Rectangle = noterects.unionAll();
		minrect.y = -5;
		minrect.height = 10;
		var rects:Rectangles = 	noterects;		
		
		var vnotes = complex.getVNotes();
				
		rects = rects.concat(complex.getStaveBasicRects(directions));
		// signs are the leftest...
		var signsrects:Rectangles =  complex.getSignsRects(noterects);		
		if (signsrects != null && signsrects != []) rects = rects.concat(signsrects);
		
		return { minrect:minrect, rects:rects };		
	}
}
