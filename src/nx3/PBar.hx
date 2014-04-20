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
		 /*
		 */
		 //this.positionsVColumns = generator.getPositionsColumns();
		 return this.columns;
	 }	
	
}

