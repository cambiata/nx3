package nx3;

/**
 * ...
 * @author Jonas Nyström
 */

class PBar
{
	public var nbar(default, null):NBar;
	//public var 
	
	public function new(nbar:NBar)
	{
		this.nbar = nbar;		
		this.value = 0;
	}		
	
	var parts:PParts;
	public function getParts():PParts
	{
		if (this.parts != null) return this.parts;
		this.parts = [];		
		
		for (npart in this.nbar.nparts) 
		{
			var ppart = new PPart(npart);
			ppart.bar = this;
			this.parts.push(ppart);
		}
		
		return this.parts;
	}	
	
	
	 var columns:PColumns;
	 public function getColumns():PColumns
	 {
		 if (this.columns != null) return this.columns;
		 var generator = new PColumnsGenerator(this);
		 this.columns = generator.getColumns();
		 // new PColumnsDistancesCalculator(this).calculate();
		 this.calculateMDistances();
		 
		 return this.columns;
	 }	
	 
	 
	 public function calculateMDistances()
	 {
		 if (this.columns == null) this.getColumns();
		  new PColumnsDistancesCalculator(this).calculate();		 
	 }
	 
	 public function calculateAPositions()
	 {
		 new PColumnsAllotmentCalculator(this).calculate();		 
	 }
	 
	 /*
	 var distances: Map < PColumn, { pos:Float, dist:Float }>;
	 public function getColumnsDistances()
	 {
		 if (distances != null) return this.distances;
		 if (this.columns == null) this.getColumns();
		 var generator = new PColumnsGenerator(this);		 
		this.distances = new PColumnsDistancesCalculator(this).getDistances();		 
		return distances;		 
	 }
	 */	 
	 
	 var value:Int;
	 public function getValue():Int
	 {
		 if (this.value != 0) return this.value;
		 for (part in this.getParts())
		 {			 
			this.value = Std.int(Math.max(this.value, part.getValue()));
		 }
		return this.value;
	 }
	 
	 
}

