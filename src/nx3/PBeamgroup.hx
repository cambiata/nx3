package nx3;
using cx.ArrayTools;
using nx3.ENoteValTools;
/**
 * ...
 * @author Jonas Nyström
 */
class PBeamgroup
{
	 public var pnotes(default, null):PNotes;
	 
	 public function new(pnotes:PNotes)
	 {
		 this.pvoice = pnotes.first().pvoice;
		 this.pnotes = pnotes;
		 for (pnote in pnotes) pnote.setBeamgroup(this);
	 }
	 
	 var value:Null<Int> = null;
	 public function getValue():Int
	 {
		 if (this.value != null) return this.value;
		 this.value = 0;
		 for (pnote in this.pnotes)
		 {
			this.value += pnote.nnote.value.value();
		 }
		 return this.value;
	 }	 
	 
	 var direction:EDirectionUD;

	 public function setDirection(direction:EDirectionUD)
	 {
		 this.direction = direction;
	 }
	 
	 public function getDirection():EDirectionUD
	 {
		 //if (this.direction == null) this.pvoice.ppart.getBeamgroupsDirections();
		 if (this.direction == null) 
		 {
			var calculator = new PPartbeamgroupsDirectionCalculator(this.pvoice.ppart);
			calculator.calculateBeamgroupsDirections();			 
			// this.pvoice.ppart.calculateBeamgroupDirections();
		 }
		 return this.direction;
	 }
	 	 	 
	 var pvoice:PVoice;
	 public function getPVoice():PVoice
	 {
		 return this.pvoice;
	 }
	 
	 
 }
 