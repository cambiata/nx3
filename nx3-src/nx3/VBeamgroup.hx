package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
using  nx3.ENoteValTools;
using nx3.VMapTools;

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
	 
	 
	 var calculator :VBeamgroupFrameCalculator;
	 var frame:VBeamframe;
	 public function getFrame():VBeamframe
	 {
		 if (this.frame != null) return this.frame;
		 if (this.direction == null) this.getDirection();
		
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