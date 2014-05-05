package nx3;
import nx3.PBar;
import nx3.PSystemBar;
import cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */

 @:access(nx3.PColumn)
 
class PBarStretchCalculator
{
	var systembar:PSystemBar;

	public function new(systembar:PSystemBar) 
	{
		this.systembar = systembar;
	}
	
	public function stretch(amount:Float)
	{
		this.systembar.barWidths.contentWidth += amount;
		if (this.systembar.bar.getColumns().length < 2) return;
		
		var sdistance:Map<PColumn, Float> = new  Map<PColumn, Float>();
		for (column in this.systembar.bar.getColumns())
		{
			sdistance.set(column, column.getADistance());
		}
		
		
		/*
		var firstcolumn = this.systembar.bar.getColumns().first();
		
		var amountrest = amount;		
		while (amountrest > 0)
		{
			var fraction = 0.5;
			for (column in this.systembar.bar.getColumns())
			{
				var deltafraction = column.getValueDelta() * fraction;
				if (column == firstcolumn) continue;
				
				
				//if (column.stretchDistance < column.getADistanceBenefit())
				//{
					column.stretchPosition += deltafraction;
					amountrest -= deltafraction;
				//}
			}
		}
		*/
		//trace(this.systembar.barWidths.contentWidth );
		//trace(this.systembar.barWidths.contentWidth );
		
	}
	
	public function resetStretch()
	{
		for (column in this.systembar.bar.getColumns())
		{
			column.sposition = null;
		}
	}
	
}