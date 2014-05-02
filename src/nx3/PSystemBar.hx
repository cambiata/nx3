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
 
 
 class PSystemBar
 {
	 public function new(bar:PBar, barConfig:PBarConfig, barWidths:PSystembarMeasurements, actAttributes:VBarAttributes, caAttributes:VBarAttributes)
	 {
		 this.bar = bar;
		 this.barConfig = barConfig;
		 this.barWidths = barWidths;
		 this.actAttributes = actAttributes;
		 this.caAttributes = caAttributes;
	 }
	 
	 public var bar(default,null):PBar;
	 public var barConfig(default,null):PBarConfig;
	 public var barWidths(default,null):PSystembarMeasurements;
	 public var actAttributes(default,null):VBarAttributes;
	 public var caAttributes(default, null):VBarAttributes;
	 
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
	 
 }
 