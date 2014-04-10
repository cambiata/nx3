package nx3;
import nx3.geom.Rectangle;
import nx3.geom.Rectangles;

/**
 * ...
 * @author Jonas Nyström
 */

class VComplexSignsRectsCalculator
{
	var vsigns:VSigns;
	public function new(vsigns:VSigns)
	{
		this.vsigns = vsigns;
	}
	
	public function getSignRects(headsRects:Rectangles=null):Rectangles
	{		
		var rects = new Rectangles();
		
		if (headsRects == null) headsRects = [];
		
		for (vsign in vsigns)
		{
			var rect:Rectangle = getSignRect(vsign.sign);			
			rect.offset( -rect.width, vsign.level);
			//trace(rect);
			
			
			for (hr in headsRects)
			{
				var i = rect.intersection(hr);		
				var count = 0;
				while (i.width >Constants.FLOAT_QUASI_ZERO ) //|| i.height > 0)
				{					
					rect.offset( -i.width, 0);
					i = rect.intersection(hr);								
					if (count > 5) break;
					count++;
				}	
			}

			for (r in rects)
			{
				var i = r.intersection(rect);			
				while (i.width > 0 || i.height > 0)
				{
					rect.x  = r.x - rect.width;
					i = r.intersection(rect);			
				}
			}

			rects.push(rect);
			
		}	

		
		return rects;
	}
	
	public function getSignRect(sign:ESign):Rectangle
	{
		switch (sign)
		{
			case ESign.None:
				return null;
			case ESign.DoubleSharp:
				return new Rectangle( 0, -1.5, Constants.SIGN_NORMAL_WIDTH, 3);
			case ESign.ParFlat, ESign.ParSharp, ESign.ParNatural:
				return new Rectangle( 0, -2, Constants.SIGN_PARENTHESIS_WIDTH, 4);
			case ESign.Flat:
				return new Rectangle(0, -3, Constants.SIGN_NORMAL_WIDTH, 5);
			default:	
				return new Rectangle( 0, -3,Constants.SIGN_NORMAL_WIDTH, 6);
		}
		throw "This shouldn't happen!";
		return null;
	}		
	
	
}
