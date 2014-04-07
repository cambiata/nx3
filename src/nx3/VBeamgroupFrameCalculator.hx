package nx3;
import nx3.VBeamFrame.VBeamframe;

/**
 * ...
 * @author Jonas Nyström
 */

 class VBeamgroupFrameCalculator
 {
	 var beamgroup:VBeamgroup;
	 public function new(beamgroup:VBeamgroup)
	 {
		this.beamgroup = beamgroup;
	 }

	 var outerLevels:Array<Int>;
	 var innerLevels:Array<Int>;
	 
	 public function getFrame():VBeamframe
	 { 
		calcLevelArrays();
		var frame:VBeamframe = calcFramePrototype();
		 return frame;
	 }
	 
	 function calcFramePrototype() :VBeamframe
	 {
		 // TODO!
		 var count = this.innerLevels.length;
		return {
			leftInnerY : this.innerLevels[0],
			leftOuterY : this.outerLevels[0],
			rightInnerY : this.innerLevels[count - 1],
			rightOuterY : this.outerLevels[count - 1],
		}
	 }

	 function getTopLevels():Array<Int>
	 {
		 var levels:Array<Int> = [];
		 for (vnote in this.beamgroup.vnotes) levels.push(vnote.nnote.getTopLevel());
		 return levels;
	 }
	 
	 function getBottomLevels():Array<Int>
	 {
		 var levels:Array<Int> = [];
		 for (vnote in this.beamgroup.vnotes) levels.push(vnote.nnote.getBottomLevel());
		 return levels;		 
	 }
	 
	 function calcLevelArrays()
	 {
		 if (this.beamgroup.getDirection() == EDirectionUD.Up)
		 {
			 this.outerLevels = getTopLevels();
			 this.innerLevels = getBottomLevels();
		 } 
		 else
		 {
			 this.outerLevels = getBottomLevels();
			 this.innerLevels = getTopLevels();
		 }
	 }
	 
 }