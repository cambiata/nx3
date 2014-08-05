package nx3;
import cx.ArrayTools;
using nx3.ENoteValTools;
using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */
class PBeamgroupFrameCalculator
{
	 var beamgroup:PBeamgroup;
	 public function new(beamgroup:PBeamgroup)
	 {
		this.beamgroup = beamgroup;
	 }

	 var outerLevels:Array<Int>;
	 var innerLevels:Array<Int>;
	 
	 public function getFrame():PBeamframe
	 { 
		calcLevelArrays();
		var frame:PBeamframe = calcFramePrototype();
		 return frame;
	 }
	 
	 function calcFramePrototype() :PBeamframe
	 {
		 // TODO!
		 var count = this.innerLevels.length;
		 var tips = this.calcTips();
		 var beamflags = new PBeamflagCalculator(this.beamgroup).getBeamflags();
		 
		return {
			leftInnerY : this.innerLevels[0],
			leftOuterY : this.outerLevels[0],
			rightInnerY : this.innerLevels[count - 1],
			rightOuterY : this.outerLevels[count - 1],
			leftTipY: tips.leftTip,
			rightTipY: tips.rightTip,
			outerLevels: this.outerLevels,
			innerLevels: this.innerLevels,
			beamflags: beamflags,
		}
	 }

	 function getTopLevels():Array<Int>
	 {
		 var levels:Array<Int> = [];
		 for (note in this.beamgroup.pnotes) levels.push( note.nnote.topLevel);
		 return levels;
	 }
	 
	 function getBottomLevels():Array<Int>
	 {
		 var levels:Array<Int> = [];
		 for (note in this.beamgroup.pnotes) levels.push(note.nnote.bottomLevel);
		 return levels;		 
	 }
	 
	 function calcLevelArrays()
	 {
		 switch this.beamgroup.getDirection()
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
	 
	 function calcTips():PFrametips
	 {
		 var stemLenght = 7;
		 var direction = this.beamgroup.getDirection();
		 
		 var calculator = new PBamegroupFrameTipCalculator(this.outerLevels, direction);
		 
		 
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