package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
import nx3.ENoteType;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;
import nx3.VNote;
using nx3.ENoteValTools;

class VHeadsRectsCalculator
{
	var vheads:VHeads;
	var placements:VHeadPlacements;
	var notevalue:ENoteVal;
	var notetype:ENoteType;
	
	public function new(vheads:VHeads, placements:VHeadPlacements, notevalue:ENoteVal )
	{
		this.vheads = vheads;
		this.placements = placements;
		this.notevalue = notevalue;
	}
	
	public function getHeadsRects():Rectangles
	{
		var rects = new Rectangles();
		
		//-------------------------------------------------------------------------------------------------
		
		var i = 0;
		for (placement in placements)
		{
			var headtype = this.vheads[i].nhead.type;
			
			var rect:Rectangle = null;
			var headw:Float = 0;
			
			 headRect(headtype, this.notevalue);
			
			
			switch(this.notevalue.head())
			{
				case EHeadValueType.HVT1:					
					headw = Constants.HEAD_HALFWIDTH_WIDE;
				default:
					headw = Constants.HEAD_HALFWIDTH_NORMAL;
			}	

			var rect = new Rectangle( -headw, -1, 2 * headw, 2);
			
			var pos = 0.0;
			switch placement.pos
			{
				case EHeadPosition.Left: pos = -2*headw;
				case EHeadPosition.Right: pos = 2*headw;
				default : pos = 0;
			}			
			rect.offset(pos, placement.level);					
			rects.push(rect);
			i++;
		}

		return rects;
	}
	
	function headRect(type:EHeadType, notevalue:ENoteVal): Rectangle
	{
		var headw = 2;
		var headh = 2;
		switch (type)
		{
				case EHeadType.Normal:
					return switch(this.notevalue.head())
					{
						case EHeadValueType.HVT1:					
							new Rectangle( -Constants.HEAD_HALFWIDTH_WIDE, -1, 2 * Constants.HEAD_HALFWIDTH_WIDE, 2);
						default:
							new Rectangle( -Constants.HEAD_HALFWIDTH_NORMAL, -1, 2 * Constants.HEAD_HALFWIDTH_NORMAL, 2);						
					}			
				case EHeadType.Pause:
					return switch(this.notevalue.beaminglevel())
					{
						case 1: new Rectangle(-1.8, -3, 3.6 ,6);							
						case 2: new Rectangle(-2, -3, 4 ,6);							
						default :  new Rectangle(-1.6, -3.3, 3.2 ,6.6);							
					}
				default: 
					return new Rectangle(-2, -2, 4, 4);
		}
		return new Rectangle(-2, -2, 4, 4);
		
	}
	
	
}