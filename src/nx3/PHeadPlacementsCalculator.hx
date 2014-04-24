package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
 
class PHeadPlacementsCalculator
{
	var vheads:PHeads;
	var direction :EDirectionUD;
	public function new(vheads:PHeads, direction:EDirectionUD)
	{
		this.vheads = vheads;
		this.direction = direction;
	}
	
	public function getHeadsPlacements():PHeadPlacements
	{
		
		if (vheads.length == 1) return [ { level: vheads[0].nhead.level, pos:EHeadPosition.Center } ];
		
		var len:Int = this.vheads.length;

		var placements :PHeadPlacements = [];
		var tempArray:Array<Int> = [];

		for (vhead in this.vheads)
		{
			var placement:PHeadPlacement = { level: vhead.nhead.level, pos: EHeadPosition.Center};
			placements.push(placement);
			tempArray.push(0); 
		}
		
		if (this.direction == EDirectionUD.Up) {
			
			for (j in 0...len - 1) {
				var i = len - j - 1;				
				var vhead = this.vheads[i];
				var vheadNext = this.vheads[i - 1];
				var lDiff = vhead.nhead.level - vheadNext.nhead.level;				
				if (lDiff < 2) {
					if (tempArray[i] == tempArray[i - 1]) {
						tempArray[i - 1] = 1;
						placements[i - 1].pos = EHeadPosition.Right;
					}
				}								
			}			
		} else {
			for (i in 0...len - 1) {				
				var vhead = this.vheads[i];
				var vheadNext = this.vheads[i + 1];
				var lDiff = vheadNext.nhead.level - vhead.nhead.level;
				if (lDiff < 2) {
					if (tempArray[i] == tempArray[i + 1]) {
						tempArray[i + 1] = -1;
						placements[i + 1].pos = EHeadPosition.Left;
					}
				}
			}

		}
		
		return placements;
	}
}