package nx3;
import nx3.EKeys;
import nx3.EBarline;
import nx3.EBarlineLeft;
import nx3.EClefs;
import nx3.PBar;
import nx3.geom.Size;
import nx3.PScore;
//import nx3.PSystemBarsGenerator.PSimpleBarWidthCalculator;
using cx.ArrayTools;

/**
 * ...
 * @author Jonas Nyström
 */


 @:access(nx3.PSystemBar)
 @:access(nx3.PSystem)
 @:access(nx3.PSystembarMeasurements)
class PSystemBarsGenerator
{
	static public var defaultClef:EClef = EClef.ClefF;
	static public var defaultKey:EKey = EKey.Flat2;
	static public var defaultTime:ETime = ETime.Time6_4;
	
	var bars:PBars;
	var systemConfig:PSystemConfig;
	var prevBarAttributes:PBarAttributes;
	var breakSystemwidth:Float;
	var system:PSystem;
	var barWidthCalculator:IBarWidthCalculator;
	var score:PScore;

	public function new(?score:PScore, bars:PBars, systemConfig:PSystemConfig, prevBarAttributes:PBarAttributes, breakSystemwidth:Float, barWidthCalculator:IBarWidthCalculator=null) 
	{
		this.score = score;
		this.bars = bars;
		this.systemConfig = systemConfig;
		this.prevBarAttributes = prevBarAttributes;
		this.breakSystemwidth = breakSystemwidth;
		this.system = new PSystem(this.score);
		this.barWidthCalculator = barWidthCalculator;
	}
	
	public function getSystem():PSystem
	{
		
		this.system.systemBreakWidth = this.breakSystemwidth;
		
		var tryAnotherBar = true;		
		while (tryAnotherBar)
		{
			var currentBar:PBar = this.bars.first();
			var currentBarConfig:PBarConfig = new PBarConfig();
			var currentBarAttributes:PBarAttributes = getBarAttributes(currentBar);
			
			if (this.prevBarAttributes != null) 
				this.overrideActualAttributesFromPrevBarAttributes(currentBarAttributes, currentBar, this.prevBarAttributes);			
			
			this.overrideActualAttributesWithDefaultsIfStillNotSet(currentBarAttributes);
			
			// Set config display data...
			if (this.system.getSystembars().length == 0)
			{
				this.adaptBarConfig(currentBar, currentBarConfig, this.prevBarAttributes, this.systemConfig.showFirstClef, this.systemConfig.showFirstKey, this.systemConfig.showFirstTime);
			}
			else
			{
				this.adaptBarConfig(currentBar, currentBarConfig, this.prevBarAttributes, this.systemConfig.showFollowingClef, this.systemConfig.showFollowingKey, this.systemConfig.showFollowingTime);
			}
			
			var currentMeasurements:PSystembarMeasurements = new PSystembarMeasurements(currentBar).init(currentBarAttributes, currentBarConfig);
			
			var testSystemWidth = this.system.width + currentMeasurements.getTotalWidth();
			if (testSystemWidth > this.breakSystemwidth) 
			{
				this.takeCareOfLastBarCautions();
				//this.system.calculateSystembarXs();
				return this.system;
			}
			
			this.system.width += currentMeasurements.getTotalWidth();
			this.system.getSystembars().push(new PSystemBar(
				    this.system,
					currentBar,
					currentBarConfig, 
					currentMeasurements,
					currentBarAttributes, 
					null
			));
		
			this.bars.shift();
			
			this.prevBarAttributes =  this.copyBarAttributes(currentBarAttributes);
			if (this.bars.length < 1) tryAnotherBar = false;
		}
		
		//this.system.calculateSystembarXs();
		
		this.system.status = PSystemStatus.Ok;		
		return this.system;
		
	}
	
	/*
	function calculateSystembarXs()
	{
		var x = 0.0;
		for (systemBar in this.system.getSystembars())		
		{
			systemBar.barWidths.x = x;
			x += systemBar.barWidths.width;
		}
	}
	*/
	
	function takeCareOfLastBarCautions() 
	{
		
		this.system.status = PSystemStatus.Ok;
		var sysBar:PBar = this.system.getSystembars().last().bar;
		var sysBarAttributes:PBarAttributes = this.system.getSystembars().last().actAttributes; // getBarAttributes(sysBar);
		
		if (sysBar != this.bars.last()) 
		{
			var nextBar:PBar = this.bars.first();
			var nextBarAttributes:PBarAttributes = getBarAttributes(nextBar);
			
			var newClef:Bool = arrayBNullOrDiffers(sysBarAttributes.clefs, nextBarAttributes.clefs);
			var newKey:Bool = arrayBNullOrDiffers(sysBarAttributes.keys, nextBarAttributes.keys);
			var newTime:Bool = nullOrDiffers(sysBarAttributes.time, nextBarAttributes.time);
			
			if (newClef || newKey || newTime)
			{
				//var cautAttributes:PBarAttributes = removeRedundantAttributes(sysBarAttributes, nextBarAttributes);
				var sysBarCautAttributes:PBarAttributes = copyAndRemoveRedundantAttributes(sysBarAttributes, nextBarAttributes);
				var sysBarConfig = this.system.getSystembars().last().barConfig;
				var sysBarWidth = this.system.getSystembars().last().getBarMeasurements().getTotalWidth();
				
				var systemWidthWithoutLastBar = system.width - sysBarWidth;
				
				var sysBarConfigWithCautions = new PBarConfig(sysBarConfig.showClef, sysBarConfig.showKey, sysBarConfig.showTime);
				if (newClef) sysBarConfigWithCautions.showCautClef = true;
				if (newKey) sysBarConfigWithCautions.showCautKey = true;
				if (newTime) sysBarConfigWithCautions.showCautTime = true;
				
				var measurementsWithCautions:PSystembarMeasurements = new PSystembarMeasurements(sysBar).init(sysBarAttributes, sysBarConfigWithCautions, sysBarCautAttributes);
			
				if (systemWidthWithoutLastBar + measurementsWithCautions.getTotalWidth() <= this.breakSystemwidth)
				{
					this.system.getSystembars().last().caAttributes = sysBarCautAttributes;
					this.system.getSystembars().last().barConfig = sysBarConfigWithCautions;
					this.system.width = this.system.getWidth() - sysBarWidth + this.system.getSystembars().last().getBarMeasurements().getTotalWidth();
				}
				else
				{
					this.system.status = PSystemStatus.Problem(101, 'Last bar fits without caution attributes but not with them');
					if (this.system.getSystembars().length == 1)
					{
						this.system.status = PSystemStatus.Problem(102, 'First bar doesn\'t fit when adding required cational attributes');
						return;
					}
					// remove last bar of current system...
					this.system.getSystembars().pop();
					// ...and put it back on the feeding bars array top
					this.bars.unshift(sysBar);
					this.system.width = this.system.width - sysBarWidth;
					this.system.status = PSystemStatus.Ok;
				}
			}
		}		
	}
	
	function copyAndRemoveRedundantAttributes(sysBarAttributes:PBarAttributes, nextBarAttributes:PBarAttributes) 
	{
		var result:PBarAttributes = copyBarAttributes(nextBarAttributes);
		for (i in 0...sysBarAttributes.clefs.length) if (result.clefs[i] == sysBarAttributes.clefs[i]) result.clefs[i] = null;
		for (i in 0...sysBarAttributes.keys.length) if (result.keys[i] == sysBarAttributes.keys[i]) result.keys[i] = null;
		if (result.time == sysBarAttributes.time) result.time = null;
		return result;
	}
	
	function adaptBarConfig(bar:PBar, barConfig:PBarConfig, prevBarAttributes:PBarAttributes, showClef:Bool, showKey:Bool, showTime:Bool) 
	{
		showClef = (showClef == true) ? true : false;
		showKey = (showKey == true) ? true : false;
		showTime = (showTime == true) ? true : false;
		var barAttributes:PBarAttributes = getBarAttributes(bar);
		
		switch bar.displayClefs
		{
			case EDisplayALN.Never: barConfig.showClef = false;
			case EDisplayALN.Always: barConfig.showClef = true;
		default:
			//barConfig.showClef = false;
			barConfig.showClef = showClef;	
			if (showClef == false && prevBarAttributes != null)
			{
				for (i in 0...prevBarAttributes.clefs.length)
				{
					if (bar.clefs[i] == null) continue;
					if (bar.clefs[i] == prevBarAttributes.clefs[i]) continue;
					barConfig.showClef = true;
					break;
				}
			}
		}
		
		switch bar.displayKeys
		{
			case EDisplayALN.Never: barConfig.showKey = false;
			case EDisplayALN.Always: barConfig.showKey = true;
		default:
			//barConfig.showKey = false;
			barConfig.showKey = showKey;		
			if (showKey == false && prevBarAttributes != null)
			{
				for (i in 0...prevBarAttributes.keys.length)
				{
					if (bar.keys[i] == null) continue;
					if (bar.keys[i] == prevBarAttributes.keys[i]) continue;
					barConfig.showKey = true;
					break;
				}
			}
		}		
		
		switch bar.displayTime
		{
			case EDisplayALN.Never: barConfig.showTime = false;
			case EDisplayALN.Always: barConfig.showTime = true;
		default:
			barConfig.showTime = showTime;		
			if (showTime == false && prevBarAttributes != null)
			{
				if (bar.time == null) 
				{
				}
				else  if (bar.time == prevBarAttributes.time)
				{
				}
				else
					barConfig.showTime = true;
			}
		}				
	}
	

	
	function copyBarAttributes(barAttributes:PBarAttributes) :PBarAttributes
	{
		var result = { clefs:new EClefs(), keys:new EKeys(), time: null };
		result.clefs = barAttributes.clefs.copy();
		result.keys = barAttributes.keys.copy();
		result.time = barAttributes.time;
		return result;
		//return { clefs:currentBarAttributes.clefs, keys:currentBarAttributes.keys, time:currentBarAttributes.time };
	}
	
	function overrideActualAttributesWithDefaultsIfStillNotSet(currentBarAttributes:PBarAttributes) 
	{
		for (i in 0...currentBarAttributes.clefs.length)
		{
			if (currentBarAttributes.clefs[i] == null) currentBarAttributes.clefs[i] = PSystemBarsGenerator.defaultClef; // EClef.ClefC;
		}		
		for (i in 0...currentBarAttributes.keys.length)
		{
			if (currentBarAttributes.keys[i] == null) currentBarAttributes.keys[i] = PSystemBarsGenerator.defaultKey;
		}				
		if (currentBarAttributes.time == null) currentBarAttributes.time = PSystemBarsGenerator.defaultTime;
	}
	
	function overrideActualAttributesFromPrevBarAttributes(currentBarAttributes:PBarAttributes, currentBar:PBar, prevBarAttributes:PBarAttributes) 
	{
		if (! compareBarAttributesValidity(currentBarAttributes, prevBarAttributes)) throw "Attributes non compatible";		
		for (i in 0...currentBar.clefs.length)
		{
			if (currentBar.clefs[i] == null && prevBarAttributes.clefs[i] != null) currentBarAttributes.clefs[i] = prevBarAttributes.clefs[i];
		}
		for (i in 0...currentBar.keys.length)
		{
			if (currentBar.keys[i] == null && prevBarAttributes.keys[i] != null) currentBarAttributes.keys[i] = prevBarAttributes.keys[i];
		}
		if (currentBar.time == null && prevBarAttributes.time != null) currentBarAttributes.time = prevBarAttributes.time;
	}
	
	function getBarAttributes(bar:PBar) :PBarAttributes
	{		
		// OBS Copying!
		var time = [bar.time].copy().first();		
		var result = { clefs:bar.clefs.copy(), keys:bar.keys.copy(), time:time };
		return result;
	}
	
	function compareBarAttributesValidity(barAttributesA:PBarAttributes, barAttributesB:PBarAttributes):Bool
	{		
		if (barAttributesA.clefs.length != barAttributesB.clefs.length) return false;
		if (barAttributesA.keys.length != barAttributesB.keys.length) return false;
		return true;
	}
	
	function arrayBNullOrDiffers<T>(itemA:Array<T>, itemB:Array<T>):Bool
	{		
		if (itemB.allNull()) return false;
		
		for (i in 0...itemA.length)
		{
			if (itemB[i] != null && (itemB[i] != itemA[i])) return true;
		}
		return false;
	}	

	function nullOrDiffers<T>(itemA:T, itemB:T):Bool
	{
		if (itemB == null) return false;
		return (itemB != itemA);
	}	
}


/*
 class PSimpleBarWidthCalculator implements IBarWidthCalculator
 {
	 public function new() { };
	 public function getClefWidth(clef:EClef):Float
	 {
		 if (clef == null) return 0.0;
		 return 20.0;		 
	 }
	 
	 public function getKeyWidth(key:EKey):Float
	 {
		 if (key == null) return 0.0;
		 return switch key
		 {
			case EKey.Sharp1, EKey.Flat1: 10.0;
			case EKey.Sharp2, EKey.Flat2: 20.0;
			case EKey.Sharp3, EKey.Flat3: 30.0;
			case EKey.Sharp4, EKey.Flat4: 40.0;
			case EKey.Sharp5, EKey.Flat5: 50.0;
			case EKey.Sharp6, EKey.Flat6: 60.0;
			 default: 0.0;
		 }		 
	 }
	 
	 public function getTimeWidth(time:ETime):Float
	 {
		if (time == null) return 0;
		 return 10;		 
	 }
	 
	 public function getContentWidth(bar:PBar):Float
	 {
		 return Std.int(bar.getValue() / 100);		
	 }
	 
	 
	 public function getLeftBarlineWidth(barline:EBarlineLeft):Float 
	 {
		 return 0;
	 }
	 
	 public function getBarlineWidth(barline:EBarline):Float 
	 {
		 return 0;
	 }
	 
	 
	 public function getClefsWidth(clefs:EClefs):Float 
	 {
		var result = 0.0;
		for (clef in clefs) 
		{
			if (clef == null) continue;
			result = Math.max(result, getClefWidth(clef));			
		}
		return result;		
	 }
	 
	 public function getKeysWidth(keys:EKeys):Float 
	 {
		var result = 0.0;
		for (key in keys) 
		{
			if (key == null) continue;
			result = Math.max(result, getKeyWidth(key));	
		}
		return result;		
	 }
	 
	 
	 public function getContentLeftMarginWidth(bar:PBar) 
	 {
		 return 0;
	 }
	 
 }
 */