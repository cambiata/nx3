package nx3;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
import nx3.geom.Rectangles.RectanglesTools;
using nx3.ENoteValTools;
/**
 * ...
 * @author Jonas Nyström
 */
class PComplexDistancesCalculator
{
	//var vpart:VPart;
	
	public function new()
	{
		//this.vpart = vpart;
	}
	
	public function getDistance(leftComplex:PComplex, rightComplex:PComplex):Float
	{	
		var leftBaseRects:Rectangles = [leftComplex.getBaseRect()];
		var rightBaseRects:Rectangles = [rightComplex.getBaseRect()];
		var minDistance = RectanglesTools.getXIntersection(leftBaseRects, rightBaseRects);
				
		var leftRects = leftComplex.getAllRects();
		var rightRects = rightComplex.getAllRects();
		var objDistance = RectanglesTools.getXIntersection(leftRects, rightRects);
		
		var objDistanceMargin = objDistance + Constants.OBJECT_XMARGIN;
		
		return Math.max(minDistance, objDistanceMargin);
		
	}
	
	function getRects(complex:PComplex):Rectangles
	{
		var rects:Rectangles = [];
		
		rects.concat(complex.getHeadsRects());
		rects.concat(complex.getStavesRects());
		rects.concat(complex.getSignsRects());
		// ... MORE!			
		return rects;
	}
		
	

	
	
	
}
