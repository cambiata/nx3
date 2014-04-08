package nx3;
import nx3.EDirectionUD;
import nx3.VBeamFrame.VBeamframe;
using cx.ArrayTools;
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
		 var tips = this.calcTips();
		 
		return {
			leftInnerY : this.innerLevels[0],
			leftOuterY : this.outerLevels[0],
			rightInnerY : this.innerLevels[count - 1],
			rightOuterY : this.outerLevels[count - 1],
			leftTipY: tips.leftTip,
			rightTipY: tips.rightTip,
			outerLevels: this.outerLevels,
			innerLevels: this.innerLevels,
		}
	 }

	 function getTopLevels():Array<Int>
	 {
		 var levels:Array<Int> = [];
		 for (vnote in this.beamgroup.vnotes) levels.push( vnote.nnote.getTopLevel());
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
		 switch this.beamgroup.getCalculatedDirection()
		 {
			 case EDirectionUD.Up:
				 this.outerLevels = getTopLevels();
				 this.innerLevels = getBottomLevels();				 
			case EDirectionUD.Down:
				 this.outerLevels = getBottomLevels();
				 this.innerLevels = getTopLevels();			 
			default:
				throw "Shouldn happen";
		 }
	 }
	 
	 function calcTips():VFrameTips
	 {
		 var stemLenght = 7;
		 var direction = this.beamgroup.getCalculatedDirection();
		 var calculator = new VBamegroupFrameTipCalculator(this.outerLevels, direction);
		 var tips = calculator.getTips();
		 
		 tips.leftTip = (direction == EDirectionUD.Up) ? tips.leftTip - stemLenght : tips.leftTip + stemLenght;
		 tips.rightTip = (direction == EDirectionUD.Up) ? tips.rightTip - stemLenght : tips.rightTip + stemLenght;
		 
		 return tips;
		 
		 
		 /*
		 switch (this.beamgroup.getCalculatedDirection())
		 {
			 case EDirectionUD.Up:
				 return { leftTip: this.outerLevels.first()- stemLenght, rightTip: this.outerLevels.last() -stemLenght } ;
			case EDirectionUD.Down:
				return { leftTip: this.outerLevels.first()+stemLenght, rightTip: this.outerLevels.last() +stemLenght } ;
			default: throw "Should not happen";
		 }
		 */
	 }
	 
 }
 
 