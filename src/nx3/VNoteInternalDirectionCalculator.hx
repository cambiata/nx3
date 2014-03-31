package nx3;

/**
 * ...
 * @author Jonas Nyström
 */

class VNoteInternalDirectionCalculator
{
	var vheads:VHeads;
	public function new(vheads:VHeads)
	{
		this.vheads = vheads;
	}
	
	public function getDirection():EDirectionUD
	{
		var headsCount = this.vheads.length;
		switch headsCount
		{
			case 0: return EDirectionUD.Down; // Pause etc...		
			case 1: return this.weightToDirection(this.vheads[0].nhead.level);
			default: 
				//
		}
		var weight = this.vheads[0].nhead.level + this.vheads[headsCount - 1].nhead.level;
		return this.weightToDirection(weight);
	}
	
	function weightToDirection(weight:Int):EDirectionUD
	{
		return (weight <= 0) ? EDirectionUD.Down : EDirectionUD.Up;
	}
	
}