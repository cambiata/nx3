package nx3;
import nx3.PTieinfos;
using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */

class PComplexTieTargetCalculator
{
	var tieinfos:PTieinfos;

	public function new(tieinfos:PTieinfos) 
	{
		this.tieinfos = tieinfos;
	}
	
	public function findTargetHeads():PTieinfos
	{
		for (info in this.tieinfos)
		{
			var head = info.head;
			var headlevel = head.nhead.level;
			var nextnote = head.getNote().getNext();
			if (nextnote == null) continue;
			
			var nextheads = nextnote.getHeads();
			
			for (nexthead in nextheads)
			{
				if (headlevel == nexthead.nhead.level) 
				{					
					info.target = nexthead;			
					break;
				}
			}
		}	
		return this.tieinfos;
	}	
}