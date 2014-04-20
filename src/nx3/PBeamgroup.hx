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
		 this.voice = pnotes.first().voice;
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
		 //if (this.direction == null) this.voice.ppart.getBeamgroupsDirections();
		 if (this.direction == null) 
		 {
			var calculator = new PPartbeamgroupsDirectionCalculator(this.voice.part);
			calculator.calculateBeamgroupsDirections();			 
			// this.voice.ppart.calculateBeamgroupDirections();
		 }
		 return this.direction;
	 }
	 	 	 
	 var voice:PVoice;
	 public function getPVoice():PVoice
	 {
		 return this.voice;
	 }
	 
	 
 }
 