package nx3;
import nx3.EBarline;
import nx3.EBarlineLeft;
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
	
	public function getContentWidth(bar:PBar):Float 
	{
		return bar.getContentwidth();
	}
	
	/* INTERFACE nx3.IBarWidthCalculator */
	
	public function getBarlineWidth(barline:EBarline):Float 
	{
		return 4;
	}
	
	/* INTERFACE nx3.IBarWidthCalculator */
	
	public function getLeftBarlineWidth(barline:EBarlineLeft):Float 
	{
		return 2;
	}
	
	/* INTERFACE nx3.IBarWidthCalculator */
	

	
}