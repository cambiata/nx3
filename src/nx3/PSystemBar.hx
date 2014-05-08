package nx3;
import nx3.PBar;

/**
 * ...
 * @author Jonas Nyström
 */
/*
 typedef PSystemBar = 
 {
	 bar:PBar,
	 barConfig:PBarConfig,
	 barWidths:PSystembarMeasurements,
	 actAttributes:VBarAttributes,
	 caAttributes:VBarAttributes,
 }
 */
 
 @:access(nx3.PBar)
 class PSystemBar
 {
	 public function new(bar:PBar, barConfig:PBarConfig, barWidths:PSystembarMeasurements, actAttributes:PBarAttributes, caAttributes:PBarAttributes)
	 {
		 this.bar = bar;
		 this.bar.systembar = this;
		 this.barConfig = barConfig;
		 this.barWidths = barWidths;
		 this.actAttributes = actAttributes;
		 this.caAttributes = caAttributes;
	 }
	 
	 public var bar(default,null):PBar;
	 public var barConfig(default,null):PBarConfig;
	 //public var barWidths(default,null):PSystembarMeasurements;
	 public var actAttributes(default,null):PBarAttributes;
	 public var caAttributes(default, null):PBarAttributes;
	 
	 var stretchamount:Float = 0;
	 public function setBarStretch(amount:Float)
	 {
		 if (amount == stretchamount) return;		
		 var calculator = new PBarStretchCalculator(this);
		 if (amount == 0)
		 {
			 calculator.resetStretch();
		 }
		 else
		 {
			// trace(amount);
			 calculator.stretch(amount);
		 }
	 }
	 
	var barWidths:PSystembarMeasurements;	
	 public function getBarWidths():PSystembarMeasurements
	 {
		if (barWidths != null) return this.barWidths;
		 this.barWidths = new PSystemBarWidthCalculator().getBarWidth(this.bar, this.actAttributes, this.barConfig, this.caAttributes);
		 return this.barWidths;
	 }
	 
 }
 