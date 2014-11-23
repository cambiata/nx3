package nx3;
import nx3.PBar;
import nx3.PSystemBar;
import cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */

 @:access(nx3.PColumn)
 @:access(nx3.PSystemBar)
class PBarStretchCalculator
{
	var systembar:PSystemBar;

	public function new(systembar:PSystemBar) 
	{
		this.systembar = systembar;
	}
	
	public function stretch(amount:Float)
	{
		//trace(this.systembar.getBarWidths());
		
		this.systembar.getBarMeasurements().setContentWidth( this.systembar.getBarMeasurements().getContentWidth() + amount );
		//this.systembar.getBarWidths().width += amount;
		
		//trace(this.systembar.getBarWidths());
		
		if (this.systembar.bar.getColumns().length < 2) return;
		
		var columns = this.systembar.bar.getColumns();
		var firstcolumn = columns[0];
		
		var aDistance:Map<PColumn, Float> = new  Map<PColumn, Float>();
		var gotShared:Map<PColumn, Float> = new  Map<PColumn, Float>();
		
		for (column in columns)
		{
			aDistance.set(column, column.getADistance());
			gotShared.set(column, 0);
		}
		var seedThreshold:Map<Int, Float> = new Map<Int, Float>();		
		//var firstcolumn = this.systembar.bar.getColumns().first();
		
		var seedrest = amount;		
		var countIterations = 0;
		while (seedrest > 0)
		{
			var seed = .5;
			for (column in columns)
			{
				var grain = column.getDistanceDelta() * seed;
				var valueDeltaInt = Std.int(column.getDistanceDelta() * 100000);				
				if (!seedThreshold.exists(valueDeltaInt)) seedThreshold.set(valueDeltaInt, 0);
				seedThreshold.set(valueDeltaInt, seedThreshold.get(valueDeltaInt) + grain);				
				var threshold = seedThreshold.get(valueDeltaInt);				
				var benefit =  (column == firstcolumn) ? 0.0 : column.getADistanceBenefit();								
				if (threshold > benefit) 
				{
					gotShared.set(column, gotShared.get(column) + grain);				
					seedrest -= grain;
				}
			}
			countIterations++;
		}
		 var gain = 0.0;
		for (column in columns)
		{
			column.sposition = column.getAPostion() + gain;
			gain += gotShared.get(column);
		}
	}
	
	public function resetStretch()
	{
		for (column in this.systembar.bar.getColumns())
		{
			column.sposition = null;
		}
	}
	
}