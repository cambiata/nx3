package nx3;
import nx3.PVoiceBeamgroupsGenerator.PosInfo;
using cx.ArrayTools;
using nx3.ENoteValTools;
/**
 * ...
 * @author Jonas Nyström
 */
@:access(nx3.PNote)
 
class PBeamgroup
{
	 public var pnotes(default, null):PNotes;
	 
	 public function new(pnotes:PNotes)
	 {
		 this.voice = pnotes.first().voice;
		 this.pnotes = pnotes;
		 for (pnote in pnotes) pnote.beamgroup = this;
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
			var calculator = new PPartbeamgroupsDirectionCalculator(this.voice.getPart());
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
	 
	 var stavexpositions:XPositions;
	 public function getNotesStemXPositions():XPositions
	 {
		 if (this.stavexpositions != null) return this.stavexpositions;
		 this.stavexpositions = [];
		 for (note in this.pnotes)
		 {
			this.stavexpositions.push(note.getComplex().getXPosition() + note.getStaveXPosition());
		 }
		 return this.stavexpositions;
	 }
	 
	 
	 var frame:PBeamframe;
	 public function getFrame():PBeamframe
	 {
		 if (this.frame != null) return this.frame;
		 
		  var firstnote = this.pnotes.first().nnote;
		  
		 //-----------------------------------------------------------------------
		 // Should this have staves/frame?
		 if (firstnote.type.getName() != 'Note') return null;		 
		 if (this.pnotes.length == 1)
		 {
			 var stavinglevel = firstnote.value.stavinglevel();			
			 if (stavinglevel <= 0)  return null;
		 }
		 //----------------------------------------------------------------------		  
		  
		  var calculator = new PBeamgroupFrameCalculator(this);
		 this.frame = calculator.getFrame();
		 return this.frame;
	 }
	 
	 public function toString():String
	 {
		 return "PBeamgroup \r"; // +
		// Std.string(this.getFrame().beamflags);		 
	 }
	 
 }
 