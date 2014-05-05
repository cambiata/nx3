package nx3;
import nx3.PSystemBar;
import nx3.PSystemGenerator.PSimpleBarWidthCalculator;


/**
 * ...
 * @author Jonas Nyström
 */
class PSystemBarWidthCalculator
{
	var barWidthCalculator:IBarWidthCalculator;

	public function new(barWidthCalculator:IBarWidthCalculator = null) 
	{		
		this.barWidthCalculator = (barWidthCalculator != null) ? barWidthCalculator : new PSimpleBarWidthCalculator();
	}
	
	public function getBarWidth(bar:PBar, barAttributes:PBarAttributes, barConfig:PBarConfig, cautAttributes:PBarAttributes=null) : PSystembarMeasurements
	{
		var result:PSystembarMeasurements =
		{
			width:0,
			x:0,
			ackoladeWidth:0,
			clefWidth:0,
			keyWidth:0,
			timeWidth:0,
			contentLeftMargin:0,
			contentWidth:0,
			contentXZero:0,
			cautClefWidth:0,
			cautKeyWidth:0,
			cautTimeWidth:0,	
			barlineWidth: 0,
		};
		
		var totalwidth = 0.0;

		//-------------------------------------------------------------------------------------------

		result.ackoladeWidth = this.barWidthCalculator.getLeftBarlineWidth(EBarlineLeft.None);
		totalwidth += result.ackoladeWidth;
		
		if (barConfig.showClef) result.clefWidth = this.barWidthCalculator.getClefsWidth(barAttributes.clefs);
		totalwidth += result.clefWidth;
		
		if (barConfig.showKey)			result.keyWidth = this.barWidthCalculator.getKeysWidth(barAttributes.keys);
		totalwidth += result.keyWidth;
		
		if (barConfig.showTime) result.timeWidth += this.barWidthCalculator.getTimeWidth(barAttributes.time);		
		totalwidth += result.timeWidth;

		//-------------------------------------------------------------------------------------------
		
		result.contentLeftMargin = this.barWidthCalculator.getContentLeftMarginWidth(bar);
		totalwidth += result.contentLeftMargin;
		
		result.contentWidth = this.barWidthCalculator.getContentWidth(bar);
		totalwidth += result.contentWidth;
		result.contentXZero = bar.getContentXZero();
		
		//-------------------------------------------------------------------------------------------
		
		if (barConfig.showCautClef && cautAttributes != null)	result.cautClefWidth = this.barWidthCalculator.getClefsWidth(cautAttributes.clefs);
		totalwidth += result.cautClefWidth;
		//trace(width);
		
		if (barConfig.showCautKey && cautAttributes != null)	result.cautKeyWidth = this.barWidthCalculator.getKeysWidth(cautAttributes.keys);
		totalwidth += result.cautKeyWidth;
		//trace(width);
		if (barConfig.showCautTime && cautAttributes != null) result.cautTimeWidth += this.barWidthCalculator.getTimeWidth(cautAttributes.time);		
		totalwidth += result.cautTimeWidth;
		
		result.barlineWidth = this.barWidthCalculator.getBarlineWidth(EBarline.Normal);
		totalwidth += result.barlineWidth;
		
		//-------------------------------------------------------------------------------------------
		
		result.width = totalwidth;
		
		return result;
	}
	
	
}