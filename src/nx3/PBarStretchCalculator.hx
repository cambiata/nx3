package nx3;
import nx3.PBar;
import nx3.PSystemBar;

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
		var amountrest = amount;
		while (amountrest > 0)
		{
			var fraction = 0.5;
			for (column in this.systembar.bar.getColumns())
			{
				var deltafraction = column.getValueDelta() * fraction;
				if (column.stretchDistance < column.getADistanceBenefit())
				{
					column.stretchDistance += deltafraction;
					amountrest -= deltafraction;
				}
			}
		}
		trace(this.systembar.barWidths.contentWidth );
		this.systembar.barWidths.contentWidth += amount;
		trace(this.systembar.barWidths.contentWidth );
		
	}
	
	public function resetStretch()
	{
		for (column in this.systembar.bar.getColumns())
		{
			column.stretchDistance = 0;
		}
	}
	
}