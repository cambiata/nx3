package nx3;
import nx3.geom.Rectangles;
import nx3.geom.Rectangles.RectanglesTools;
import nx3.PBar;
using cx.MathTools;
using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */

 @:access(nx3.PColumn)
 
class PColumnsDistancesCalculator
{
	var bar:PBar;

	public function new(bar:PBar) 
	{
		this.bar = bar;
		this.prevLeftComplex = new Map<Int, {columnIdx:Int, leftComplex:PComplex}>();		
		//this.distances = new Map < PColumn, { pos:Float, dist:Float }>();
	}
	
	public function calculate()
	{
		var leftColumn:PColumn = null;
		var xposition = 0.0;
		for (columnIdx in 0...this.bar.getColumns().length)
		{
			var rightColumn = this.bar.getColumns()[columnIdx];			
			rightColumn.mdistance = 0;
			
			// Set first column
			if (columnIdx == 0)
			{
				var complexId = 0;
				for (complex in this.bar.getColumns().first().getComplexes())
				{
					this.prevLeftComplex.set(complexId, { leftComplex:complex, columnIdx: 0 } );			
					complexId++;
				}			
				
			}
			else if (columnIdx < this.bar.getColumns().length)
			{
				var leftComplexes = leftColumn.getComplexes();
				var rightComplexes = rightColumn.getComplexes();				
				
				var columndistance = 0.0;
				for (complexIdx in 0...leftComplexes.length)
				{
					var leftComplex = leftComplexes[complexIdx];					
					var rightComplex = rightComplexes[complexIdx];										
					var distance = getComplexDistances(columnIdx, complexIdx, leftComplex, rightComplex);
					//// trace(distance);
					columndistance = Math.max(columndistance, distance);										
				}

				columndistance = columndistance.round2();
				leftColumn.mdistance = columndistance;
				
				xposition += columndistance;
				rightColumn.mposition = xposition;
			}
			
			// special treatment for last column....
			if (columnIdx == this.bar.getColumns().length-1)
			{
				var lastColumn = this.bar.getColumns()[columnIdx];			
				lastColumn.mdistance = lastColumn.getRightX();
				return;
			}
			leftColumn = rightColumn;
		}		
	}
	

	var prevLeftComplex:Map<Int, {columnIdx:Int, leftComplex:PComplex}>;
	
	function getComplexDistances(columnIdx:Int, complexIdx:Int, leftComplex:PComplex, rightComplex:PComplex): Float
	{
		
		if (rightComplex == null) 
		{
			// trace(' - rightComplex == NULL!');
			if (leftComplex != null)
			{
				var leftColumnIdx = columnIdx - 1;
				// trace(' - set left column idx to $complexIdx / $leftColumnIdx');
				this.prevLeftComplex.set(complexIdx, { leftComplex:leftComplex, columnIdx: leftColumnIdx } );
			}
			
			return 0;
		}
		
		if (leftComplex == null)
		{
			// trace(' - leftComplex == NULL!');
			var currentLeftColumIdx = columnIdx - 1;			
			var prevLeftColumnIdx = this.prevLeftComplex.get(complexIdx).columnIdx;
			
			var currentLeftXPos = this.bar.getColumns()[currentLeftColumIdx].getMPosition();
			var prevLeftXPos = this.bar.getColumns()[prevLeftColumnIdx].getMPosition();
			
			// trace([prevLeftColumnIdx, currentLeftColumIdx]);
			var distanceBenefit = currentLeftXPos -prevLeftXPos;
			// trace([prevLeftXPos, currentLeftXPos, distanceBenefit]);
			var currentLeftComplex = this.prevLeftComplex.get(complexIdx).leftComplex;
			var distance = new PComplexDistancesCalculator().getDistance(currentLeftComplex, rightComplex);
			
			// trace('Current Left complex rects:');
			// trace(currentLeftComplex.getAllRects());			
			
			// trace('Right complex rects:');
			// trace(rightComplex.getAllRects());
			
			
			// trace('calculated distance $distance - disance benefit $distanceBenefit');
			var actualDistance = Math.max(0, distance - distanceBenefit);
			return actualDistance;			
		}
		
		var leftColumnIdx = columnIdx - 1;
		// trace(' - normal - set left column idx to $complexIdx / $leftColumnIdx');
		var distance = new PComplexDistancesCalculator().getDistance(leftComplex, rightComplex);		
		
		this.prevLeftComplex.set(complexIdx, { leftComplex:leftComplex, columnIdx: leftColumnIdx } );
		
		
		
		return distance;
	}
	
	/*
	public function getColumnRightW(column:PColumn):Float
	{
		
		var result:Float = 0;
		for (complex in column.getComplexes())
		{ 
			var rect = RectanglesTools.unionAll(complex.getAllRects());			
			var width = rect.width + rect.x;			
			result = Math.max(result, width);
		}
		return result;
	}
	
	public function getColumnLeftX(column:PColumn):Float // should be negative!
	{
		var result:Float = 0;
		for (complex in column.getComplexes())
		{ 
			var rect = RectanglesTools.unionAll(complex.getAllRects());			
			var width = rect.x;			
			result = Math.min(result, width);
		}
		return result;		
	}
	*/
	
	
	
	
}