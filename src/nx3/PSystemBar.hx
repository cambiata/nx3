package nx3;
import nx3.PBar;
import nx3.PSystembarMeasurements;

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
	 public function new(bar:PBar, barConfig:PBarConfig, barMeasurements:PSystembarMeasurements, actAttributes:PBarAttributes, caAttributes:PBarAttributes)
	 {
		 this.bar = bar;
		 this.bar.systembar = this;
		 this.barConfig = barConfig;
		 this.barMeasurements = barMeasurements;
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
			 calculator.stretch(amount);
		 }
	 }
 
	 var barMeasurements:PSystembarMeasurements;
	 public function getBarMeasurements():PSystembarMeasurements
	 {
		if (barMeasurements != null) return this.barMeasurements;
		 //this.barWidths = new PSystemBarWidthCalculator().getBarMeasurements(this.bar, this.actAttributes, this.barConfig, this.caAttributes);
		 this.barMeasurements = new PSystembarMeasurements(this.bar).init(this.actAttributes, this.barConfig, this.caAttributes);
		 return this.barMeasurements;
	 }
	 
	 var xposition:Float;
	 public function getXPosition():Float
	 {
		 return xposition;
	 }
	 
	 
	 
 }
 