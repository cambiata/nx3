package nx3;
import nx3.EKeys;
import nx3.EBarline;
import nx3.EBarlineLeft;
import nx3.EClefs;
import nx3.PBar;
import nx3.ETime;
import nx3.EKey;
import nx3.EClef;

/**
 * ...
 * @author Jonas Nyström
 */
class PBarWidthCalculator implements IBarWidthCalculator
{

	public function new() 
	{
		
	}
	
	/* INTERFACE nx3.IBarWidthCalculator */
	
	public function getClefWidth(clef:EClef):Float 
	{
		return PAttributesRectsCalculator.getClefRect(clef).width;
	}
	
	public function getKeyWidth(key:EKey):Float 
	{
		return PAttributesRectsCalculator.getKeyRect(key).width;
	}
	
	public function getTimeWidth(time:ETime):Float 
	{
		return PAttributesRectsCalculator.getTimeRect(time).width;
	}
	
	public function getContentLeftMarginWidth(bar:PBar) 
	{
		return 3.0;
	}
	
	
	public function getContentWidth(bar:PBar):Float 
	{
		return bar.getContentwidth();
	}

	
	
	
	
	/* INTERFACE nx3.IBarWidthCalculator */
	
	public function getBarlineWidth(barline:EBarline):Float 
	{
		return 1.0;
	}
	
	/* INTERFACE nx3.IBarWidthCalculator */
	
	public function getLeftBarlineWidth(barline:EBarlineLeft):Float 
	{
		return 1.0;
	}
	
	/* INTERFACE nx3.IBarWidthCalculator */
	
	public function getClefsWidth(clefs:EClefs):Float 
	{
		var result = 0.0;
		for (clef in clefs) 
		{
			if (clef == null) continue;
			result = Math.max(result, PAttributesRectsCalculator.getClefRect(clef).width);			
		}
		return result;
	}
	
	public function getKeysWidth(keys:EKeys):Float 
	{
		var result = 0.0;
		for (key in keys) 
		{
			if (key == null) continue;
			result = Math.max(result, PAttributesRectsCalculator.getKeyRect(key).width);	
		}
		return result;		
	}
	
	/* INTERFACE nx3.IBarWidthCalculator */
	
	
	/* INTERFACE nx3.IBarWidthCalculator */
	

	
}