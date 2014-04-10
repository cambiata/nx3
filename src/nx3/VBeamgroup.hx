package nx3;
import nx3.VBeamFrame.VBeamframe;

/**
 * ...
 * @author Jonas Nyström
 */
using  nx3.ENoteValTools;
using nx3.VMapTools;
using cx.ArrayTools;

 class VBeamgroup
 {
	 public var vnotes(default, null):VNotes;
	 public function new(vnotes:VNotes)
	 {
		 this.vnotes = vnotes;
	 }
	 
	 var direction:EDirectionUD;
	 public function getDirection():EDirectionUD
	 {
		 if (this.direction != null) return this.direction;
		 this.direction = new VBeamgroupDirectionCalculator(this).getDirection();
		 return this.direction;
	 }
	 public function setDirection(val:EDirectionUD)
	 {
		 return this.direction = val;
	 }
	 
	 var calculatedDirection:EDirectionUD;
	 public function getCalculatedDirection():EDirectionUD
	 {
		 if (this.calculatedDirection == null) throw "direction is not calculated";
		 return this.calculatedDirection;		 
	 }
	 
	 public function setCalculatedDirection(direction:EDirectionUD)
	 {
		 this.calculatedDirection = direction;
	 }
	 
	 
	 var calculator :VBeamgroupFrameCalculator;
	 var frame:VBeamframe;
	 public function getFrame():VBeamframe
	 {
		 if (this.frame != null) return this.frame;
		 
		 // Should this have staves/frame?
		 if (this.vnotes.length == 1)
		 {
			 var stavinglevel = this.vnotes.first().nnote.value.stavinglevel();			
			 if (stavinglevel <= 0)  return null;
		 }
		 
		 
		 if (this.calculatedDirection == null)
		 {
			 throw 'error';
			 trace('direction should be calculated befor getting frame');
			 this.calculatedDirection = this.getDirection();
		 }
		
		 this.calculator = new VBeamgroupFrameCalculator(this);
		 this.frame = calculator.getFrame();
		 
		 return this.frame;
	 }
	 
	 var value:Null<Int> = null;
	 public function getValue():Int
	 {
		 if (this.value != null) return this.value;
		 this.value = 0;
		 for (vnote in this.vnotes)
		 {
			this.value += vnote.nnote.value.value();
		 }
		 return this.value;
	 }
	 
	 
 }