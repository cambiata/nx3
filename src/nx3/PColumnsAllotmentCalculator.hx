package nx3;
import nx3.PBar;

/**
 * ...
 * @author Jonas Nyström
 */

 @:access(nx3.PColumn)
 @:access(nx3.PBar)
 
class PColumnsAllotmentCalculator
{
	var bar:PBar;
	var spacing:Float;

	public function new(bar:PBar) 
	{
		this.bar = bar;
		this.spacing = bar.nbar.spacing;
		this.bar.allottedDistanceSum = 0;
	}
	
	public function calculate(stretch:Float=0)
	{		
		var aposition = this.bar.getContentXZero();
		for (column in this.bar.getColumns())
		{
			var dist =  this.getADistance(column.getValue(), column);
			column.allottedDistance = dist;
			this.bar.allottedDistanceSum += dist;
			
			var adistance = Math.max(column.getMDistance(), dist);
			//trace([column.getMDistance(), getADistance(column.getValue())]);			
			var adistanceBenefit = Math.max(0, column.getMDistance() - dist);
			column.aposition = aposition;
			column.adistance = adistance;
			column.adistanceBenefit = adistanceBenefit;
			aposition += adistance;
		}
	}
	
	inline static var delta:Float = 0.5;
	function getADistance(val:Int, column:PColumn):Float
	{
		return switch this.bar.nbar.allotment
		{
			case EAllotment.Equal:
				return this.spacing;
			case EAllotment.LeftAlign:
				column.getMDistance();
			case EAllotment.Logaritmic: 
				(delta +(val / Constants.BASE_NOTE_VALUE) / 2) *this.spacing;
			default:
				(val / Constants.BASE_NOTE_VALUE) *this.spacing;
		}		
	}
	
	
	
}

