package nx3;
import cx.ArrayTools;
using nx3.ENoteValTools;
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
		 var beamflags = this.calcBeamflags();
		 
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
	 
	 function calcBeamflags() :Array<EBeamflagType>
	 {
		var result :Array<EBeamflagType> = [];
		 var noteIdx = 0;
		 
		 var holder:Array<Int> = [];
		 var holderIdx = 0;
		 for (note in this.beamgroup.pnotes)
		 {					 			 
			
			 var nextnote = ArrayTools.indexOrNull(this.beamgroup.pnotes, noteIdx + 1);
			if (nextnote == null) continue;
			
			if (note.nnote.value.beaminglevel() > 1  && nextnote.nnote.value.beaminglevel() > 1 )
			{
				holder.push(2);				
				result.push(EBeamflagType.Full16);
			}
			else if (note.nnote.value.beaminglevel() == 1  && nextnote.nnote.value.beaminglevel() > 1 )
			{
				holder.push( -1);
				result.push(EBeamflagType.End16);
			}
			else if (note.nnote.value.beaminglevel() > 1  && nextnote.nnote.value.beaminglevel() == 1 )
			 {
				 holder.push(1);
				 result.push(EBeamflagType.Start16);
			 }
			 else
			 {
				 holder.push(0);
				 result.push(EBeamflagType.None);
			 }
			 
			 noteIdx++;
		 }
		 
		 return result;
	 }

	 function getTopLevels():Array<Int>
	 {
		 var levels:Array<Int> = [];
		 for (note in this.beamgroup.pnotes) levels.push( note.nnote.getTopLevel());
		 return levels;
	 }
	 
	 function getBottomLevels():Array<Int>
	 {
		 var levels:Array<Int> = [];
		 for (note in this.beamgroup.pnotes) levels.push(note.nnote.getBottomLevel());
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