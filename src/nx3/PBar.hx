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
	
	var pparts:PParts;
	public function getPParts():PParts
	{
		if (this.pparts != null) return this.pparts;
		this.pparts = [];		
		
		for (npart in this.nbar.nparts) 
		{
			var ppart = new PPart(npart);
			ppart.pbar = this;
			this.pparts.push(ppart);
		}
		return this.pparts;
	}	
	
	
}

