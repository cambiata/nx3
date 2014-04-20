package nx3;
import nx3.PBar;
using cx.MathTools;

/**
 * ...
 * @author Jonas Nyström
 */
class PColumnsDistancesCalculator
{
	var bar:PBar;

	public function new(bar:PBar) 
	{
		this.bar = bar;
		this.prevLeftComplex = new Map<Int, {columnIdx:Int, columnPos:Float, leftComplex:PComplex}>();		
	}
	
	public function calculate()
	{
		this.setFirstLeftComplexes();
		if (this.bar.getColumns().length < 2) return;

		var leftColumn:PColumn;
		var xposition = 0.0;
		for (columnIdx in 0...this.bar.getColumns().length)
		{
			var rightColumn = this.bar.getColumns()[columnIdx];			
			
			if (columnIdx > 0)
			{
				trace('COLUMN $columnIdx');
				
				var leftComplexes = leftColumn.getComplexes();
				var rightComplexes = rightColumn.getComplexes();				
				
				var columndistance = 0.0;
				for (complexIdx in 0...leftComplexes.length)
				{
					var leftComplex = leftComplexes[complexIdx];					
					var rightComplex = rightComplexes[complexIdx];										
					var distance = getComplexDistances(columnIdx, complexIdx, leftComplex, rightComplex);
					//trace(distance);
					columndistance = Math.max(columndistance, distance);										
				}
				columndistance = columndistance.round2();
				rightColumn.setDistance(columndistance);
				xposition += columndistance;
				rightColumn.setXPosition(xposition);
				trace('- column distance: $columndistance / $xposition');
			}
			
			leftColumn = rightColumn;
		}
		
	}
	
	function setFirstLeftComplexes() 
	{
		var firstcolumn = this.bar.getColumns()[0];
		var complexId = 0;
		for (complex in firstcolumn.getComplexes())
		{
			this.prevLeftComplex.set(complexId, { leftComplex:complex, columnPos: 0, columnIdx: 0 } );			
			complexId++;
		}
	}
	
	var prevLeftComplex:Map<Int, {columnIdx:Int, columnPos:Float, leftComplex:PComplex}>;
	
	function getComplexDistances(columnIdx:Int, complexIdx:Int, leftComplex:PComplex, rightComplex:PComplex): Float
	{
		trace('CHECK DISTANCES column/complex: $columnIdx / $complexIdx ');
		
		if (rightComplex == null) 
		{
			trace(' - rightComplex == NULL!');
			if (leftComplex != null)
			{
				var leftColumnIdx = columnIdx - 1;
				trace(' - set left column idx to $complexIdx / $leftColumnIdx');
				this.prevLeftComplex.set(complexIdx, { leftComplex:leftComplex, columnPos: -123, columnIdx: leftColumnIdx } );
			}
			
			return 0;
		}
		
		if (leftComplex == null)
		{
			trace(' - leftComplex == NULL!');
			var currentLeftColumIdx = columnIdx - 1;			
			var prevLeftColumnIdx = this.prevLeftComplex.get(complexIdx).columnIdx;
			
			var currentLeftXPos = this.bar.getColumns()[currentLeftColumIdx].getXPosition();
			var prevLeftXPos = this.bar.getColumns()[prevLeftColumnIdx].getXPosition();
			
			trace([prevLeftColumnIdx, currentLeftColumIdx]);
			var distanceBenefit = currentLeftXPos -prevLeftXPos;
			trace([prevLeftXPos, currentLeftXPos, distanceBenefit]);
			
			return 10;			
		}
		
		var leftColumnIdx = columnIdx - 1;
		trace(' - normal - set left column idx to $complexIdx / $leftColumnIdx');
		var distance = new PComplexMinDistCalculator().getDistance(leftComplex, rightComplex);		
		
		this.prevLeftComplex.set(complexIdx, { leftComplex:leftComplex, columnPos: -123, columnIdx: leftColumnIdx } );
		
		
		return distance;
	}
	
}