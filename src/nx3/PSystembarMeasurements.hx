package nx3;
import nx3.PBar;
import nx3.PSystemBar;

/**
 * PSysbarMeasurements
 * @author Jonas Nyström
 */

 
class PSystembarMeasurements
{
	var bar:PBar;
	public function new(bar:PBar)
	{
		this.bar = bar;
	}
	
	//-----------------------------------------------------------------------------------
	var ackoladeWidth:Float = 0;
	public function getAckoladeXPosition():Float return 0;
	
	//-----------------------------------------------------------------------------------
	var clefWidth:Float = 0;
	public function getClefXPosition():Float return this.getAckoladeXPosition() + this.ackoladeWidth;
	
	//-----------------------------------------------------------------------------------
	var keyWidth:Float = 0;
	public function getKeyXPosition():Float return this.getClefXPosition() + this.clefWidth;
	
	//-----------------------------------------------------------------------------------
	var timeWidth:Float = 0;
	public function getTimeXPosition():Float return this.getKeyXPosition() + this.keyWidth;
	
	//-----------------------------------------------------------------------------------
	var leftContentMarginWidth:Float = 0;
	public function getLeftContentMarginXPosition():Float return this.getTimeXPosition() + this.timeWidth;
	
	//-----------------------------------------------------------------------------------
	var contentXZero:Float = 0;
	public function getContentXZero():Float return this.contentXZero;
	var contentWidth:Float = 0;
	public function getContentXPosition():Float return this.getLeftContentMarginXPosition() + this.leftContentMarginWidth;
	public function getContentWidth():Float return this.contentWidth;
	public function setContentWidth(val:Float) this.contentWidth = val;
	
	//-----------------------------------------------------------------------------------
	var cautClefWidth:Float = 0;
	public function getCautClefXPosition():Float return this.getContentXPosition() + this.contentWidth;

	//-----------------------------------------------------------------------------------
	var cautKeyWidth:Float = 0;
	public function getCautKeyXPosition():Float return this.getCautClefXPosition() + this.cautClefWidth;
	
	//-----------------------------------------------------------------------------------
	var cautTimeWidth:Float = 0;
	public function getCautTimeXPosition():Float return this.getCautKeyXPosition() + this.cautKeyWidth;	
	
	//-----------------------------------------------------------------------------------
	var barlineWidth:Float = 0;
	public function getBarlineXPosition():Float return this.getCautTimeXPosition() + this.cautTimeWidth;		
	
	//-----------------------------------------------------------------------------------
	//-----------------------------------------------------------------------------------
	public function getTotalWidth():Float return this.getBarlineXPosition() + this.barlineWidth;
	
	public function init(barAttributes:PBarAttributes, barConfig:PBarConfig, cautAttributes:PBarAttributes=null)
	{
		var calculator = new PBarWidthCalculator();
		
		this.ackoladeWidth = calculator.getLeftBarlineWidth(EBarlineLeft.None);
		if (barConfig.showClef) this.clefWidth = calculator.getClefsWidth(barAttributes.clefs);
		if (barConfig.showKey) this.keyWidth = calculator.getKeysWidth(barAttributes.keys);
		if (barConfig.showTime) this.timeWidth += calculator.getTimeWidth(barAttributes.time);		
		//-------------------------------------------------------------------------------------------
		this.leftContentMarginWidth = calculator.getContentLeftMarginWidth(bar);
		this.contentWidth = calculator.getContentWidth(bar);
		this.contentXZero = bar.getContentXZero();
		//-------------------------------------------------------------------------------------------
		if (barConfig.showCautClef && cautAttributes != null)	this.cautClefWidth = calculator.getClefsWidth(cautAttributes.clefs);
		if (barConfig.showCautKey && cautAttributes != null)	this.cautKeyWidth = calculator.getKeysWidth(cautAttributes.keys);
		if (barConfig.showCautTime && cautAttributes != null) this.cautTimeWidth += calculator.getTimeWidth(cautAttributes.time);		
		this.barlineWidth = calculator.getBarlineWidth(EBarline.Normal);
		
		return this;
	}
	
	
}