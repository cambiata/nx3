package nx3;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;

/**
 * ...
 * @author Jonas Nyström
 */

class VComplexDotsRectsCalculator
{
	var dots:EDots;
	public function new(dots:EDots)
	{
		this.dots = dots;
	}
	
	public function getDotsRects(headsRects:Rectangles):Rectangles
	{		
		if (this.dots == null || this.dots ==  []) return [];
		if (headsRects == null) headsRects = [];
		
		var rects:Rectangles =[];		
		for (dot in this.dots)
		{
			var rect:Rectangle = null;
			switch (dot)
			{
				case EDot.Normal(level):
					rect = new Rectangle(0, level-1, Constants.DOT_WIDTH, 2);
				case EDot.Double(level):
					rect = new Rectangle(0, level - 1, Constants.DDOT_WIDTH, 2);				
			}
			
			for (hr in headsRects)
			{
				var i = rect.intersection(hr);		
				if (i.width > 0) rect.offset(i.width, 0);
			}			
			
			rects.push(rect);
		}	
	
		return rects;
	}
	
}
