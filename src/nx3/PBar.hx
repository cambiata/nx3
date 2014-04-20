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
	
	
}

