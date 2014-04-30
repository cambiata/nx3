package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
class PBarConfig 
 {
	 public var showClef:Bool;
	 public var showKey:Bool;
	 public var showTime:Bool;
	
	 public var showCautClef:Bool;
	 public var showCautKey:Bool;
	public var  showCautTime:Bool;
	
	public var calculatedWidth:Float;
	
	public function new(showClef:Bool=false, showKey:Bool=false, showTime:Bool=false, showCautClef:Bool=false, showCautKey:Bool=false, showCautTime:Bool=false) 
	{ 
		this.showClef = showClef;
		this.showKey = showKey;
		this.showTime = showTime;
		this.showCautClef = showCautClef;
		this.showCautKey = showCautKey;
		this.showCautTime = showCautTime;
	};
 }