package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
using nx3.ENoteValTools;

class VNoteHeadsRectsCalculator
{
	var vheads:VHeads;
	var placements:VHeadPlacements;
	var notevalue:ENoteVal;
	
	
	public function new( vheads:VHeads, placements:VHeadPlacements, notevalue:ENoteVal )
	{
		this.vheads = vheads;
		this.placements = placements;
		this.notevalue = notevalue;
	}
	
	public function getHeadsRects():Rectangles
	{
		var rects = new Rectangles();
		for (placement in placements)
		{
			var rect:Rectangle = null;
			var headw:Float = 0;
			switch(this.notevalue.head())
			{
				case EHeadValueType.HVT1:					
					headw = Constants.HEAD_HALFWIDTH_WIDE;
				default:
					headw = Constants.HEAD_HALFWIDTH_NORMAL;
			}	
			
			rect =  new Rectangle( -headw, -1, 2 * headw, 2);
			
			var pos = 0.0;
			switch placement.pos
			{
				case EHeadPosition.Left: pos = -2*headw;
				case EHeadPosition.Right: pos = 2*headw;
				default : pos = 0;
			}			
			rect.offset(pos, placement.level);					
			rects.push(rect);
			
		}

		return rects;
	}
	
}