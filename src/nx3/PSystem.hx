package nx3;
import nx3.PScore;

using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */
@:access(nx3.PSystemBar)
class PSystem
 {
	public function new(score:PScore=null)
	{
		this.systembars = [];
		this.width = 0;
		this.score = score;
		
	}
	
	var score(default, null):PScore;
	
	var status:PSystemStatus;
	public function getStatus():PSystemStatus return this.status;

	var width:Float;
	public function getWidth():Float return this.width;
	
	
	var systembars:PSystemBars;
	public function getSystembars():PSystemBars return this.systembars;
	
	public function getLastBarAttributes():PBarAttributes
	{
		if (systembars.length == 0) return null;
		return systembars.last().actAttributes;
	}
	
	var systemBreakWidth:Float = 0;
	public function getSystemBreakWidth():Float return this.systemBreakWidth;
	
	
	var value:Null<Int>;
	
	public function getValue():Int
	{
		if (this.value != null) return this.value;
		this.value = 0;
		for (systembar in this.getSystembars()) this.value += systembar.bar.getValue();		
		return this.value;
	}
	
	public function calculateSystembarXs()
	{
		var x = 0.0;
		for (systemBar in this.getSystembars())		
		{
			systemBar.xposition = x;
			x += systemBar.getBarMeasurements().getTotalWidth();
		}
	}	
	
	
	public function getSpaceAbovePart(partIdx:Int): Float
	{
		var distance = 0.0;
		var baridx = 0;
		for (systembar in this.getSystembars())
		{
			var part = systembar.bar.getPart(partIdx);
			if (part == null) {
				trace( "part == null");
				continue;
			}
			
			var partdistance = 0.0;
			var partrect = part.getRect();
			if (partIdx == 0)
			{
				partdistance = -partrect.top;
			}
			else
			{
				var prevpart = systembar.bar.getParts()[partIdx - 1];
				var prevpartrect = prevpart.getRect();
				partdistance = prevpartrect.bottom + -partrect.top;
			}
			
			distance = Math.max(distance, partdistance);
			baridx++;
		}
		//trace(distance);
		return distance;
	}
	
	public function getPartY(partidx:Int):Float
	{
		var party = 0.0;
		for (idx in 0...partidx+1)
		{
			party += this.getSpaceAbovePart(idx);
		}
		return party;
	}	
	
	public function getTopPartY():Float {
		return this.getPartY(0);
	}
	
	public function getBottomPartY():Float {
		var partcount = this.getSystembars()[0].bar.getParts().length - 1;
		return this.getPartY(partcount);
	}
	
	public function getHeight():Float
	{
		var partcount = this.getSystembars()[0].bar.getParts().length - 1;
		var partbottom = {
			var pb = 0.0;
			for (sb in this.getSystembars())
			{
				pb  = Math.max(pb, sb.bar.getPart(partcount).getRect().bottom);
			}
			pb;
		}
		return this.getPartY(partcount)  + partbottom;
	}
	
	public function getSystembarX(systembar:PSystemBar):Float
	{
		var idx = this.getSystembars().indexOf(systembar);
		var x = .0;
		for (sb in this.getSystembars())
		{
			if (sb == systembar) return x;
			x += sb.getBarMeasurements().getTotalWidth();
		}
		return 0;
	}
	
	public function getBarsWidth():Float
	{ 
		var lastbar = this.getSystembars().last();
		return this.getSystembarX(lastbar) + lastbar.getBarMeasurements().getTotalWidth();
	}
	
	public function getY():Float 
	{
		if (this.score == null) {
			return 0;
			throw "Score == null";
		}
		
		return this.score.getSystemY(this);
		
	}
	
	
 }