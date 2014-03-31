package nx3;

/**
 * ...
 * @author Jonas Nyström
 */

 class VBeamgroupDirectionCalculator
 {
	 var beamgroup:VBeamgroup;
	 public function new(beamgroup:VBeamgroup)
	 {
		this.beamgroup = beamgroup;
	 }
	 
	 public function getDirection():EDirectionUD
	 {
		 this.topLevel = findTopLevel();
		 this.bottomLevel = findBottomLevel();
		 if (this.topLevel + this.bottomLevel <= 0) return EDirectionUD.Down;
		 return EDirectionUD.Up;
	 }
	 
	 
	 var topLevel:Int;
	 function findTopLevel()
	 {
		var topLevel = this.beamgroup.vnotes[0].nnote.getTopLevel();
		if (this.beamgroup.vnotes.length == 1) return topLevel;
		for (i in 1...this.beamgroup.vnotes.length)
		{
			var level = this.beamgroup.vnotes[i].nnote.getTopLevel();
			topLevel = Std.int(Math.min(topLevel, level));
		}
		return topLevel;
	 }
	 
	 var bottomLevel:Int;
	 function findBottomLevel()
	 {
		 var bottomLevel = this.beamgroup.vnotes[0].nnote.getBottomLevel();
		if (this.beamgroup.vnotes.length == 1) return bottomLevel;
		for (i in 1...this.beamgroup.vnotes.length)
		{
			var level = this.beamgroup.vnotes[i].nnote.getBottomLevel();
			bottomLevel = Std.int(Math.max(bottomLevel, level));
		}
		return bottomLevel;
	 }
 }
 