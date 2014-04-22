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
		  new PColumnsDistancesCalculator(this).calculate();
		 //this.positionsVColumns = generator.getPositionsColumns();
		 return this.columns;
	 }	
	 
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

