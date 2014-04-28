package nx3;
import nx3.PBar;

/**
 * ...
 * @author Jonas Nyström
 */
class PColumnsAllotmentCalculator
{
	var bar:PBar;

	public function new(bar:PBar) 
	{
		this.bar = bar;
	}
	
	public function calculate()
	{
		for (column in this.bar.getColumns())
		{
			trace([column.getMDistance(),/*column.getMWidth(),*/column.getMPosition()]);
			//trace(column.getValue());
			//trace(this.bar.nbar.allotment);
			
			//var distance = column.getMDistance();
			
			
			switch(this.bar.nbar.allotment)
			{
				case EAllotment.Cramped:
					
				
				default:
				
				
			}
			
		}
	}
	
}

