package nx3;
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
		//this.setFirstLeftComplexes();
		
		if (this.bar.getColumns().length < 2) return;

		var leftColumn:PColumn = null;
		var xposition = 0.0;
		for (columnIdx in 0...this.bar.getColumns().length)
		{
			var rightColumn = this.bar.getColumns()[columnIdx];			
			
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
			else
			//if (columnIdx > 0)
			// For other columns
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
				rightColumn.distance = columndistance;
				
				xposition += columndistance;
				rightColumn.xposition = xposition;
				
			}
			
			leftColumn = rightColumn;
		}
		
	}
	
	/*
	var distances: Map < PColumn, { pos:Float, dist:Float }>;
	public function getDistances():Map<PColumn, {pos:Float, dist:Float}>
	{
		
		this.distances.set(this.bar.getColumns().first(), { pos:0, dist:0 } );
		this.calculate();
		return this.distances;		
		//return null;
	}
	*/
	/*
	function setFirstLeftComplexes() 
	{
		var firstcolumn = this.bar.getColumns()[0];
		var complexId = 0;
		for (complex in firstcolumn.getComplexes())
		{
			this.prevLeftComplex.set(complexId, { leftComplex:complex, columnIdx: 0 } );			
			complexId++;
		}
	}
	*/
	
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
			
			var currentLeftXPos = this.bar.getColumns()[currentLeftColumIdx].getXPosition();
			var prevLeftXPos = this.bar.getColumns()[prevLeftColumnIdx].getXPosition();
			
			// trace([prevLeftColumnIdx, currentLeftColumIdx]);
			var distanceBenefit = currentLeftXPos -prevLeftXPos;
			// trace([prevLeftXPos, currentLeftXPos, distanceBenefit]);
			var currentLeftComplex = this.prevLeftComplex.get(complexIdx).leftComplex;
			var distance = new PComplexMinDistCalculator().getDistance(currentLeftComplex, rightComplex);
			
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
		var distance = new PComplexMinDistCalculator().getDistance(leftComplex, rightComplex);		
		
		this.prevLeftComplex.set(complexIdx, { leftComplex:leftComplex, columnIdx: leftColumnIdx } );
		
		
		
		return distance;
	}
	
}