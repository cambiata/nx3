package nx3.events;
import nx3.NNotes;
import nx3.NRef;
import nx3.xml.NoteXML;

/**
 * EvAddNote
 * @author Jonas Nyström
 */
@:access(nx3.NNote)
class EvAddNote implements IEvent
{
	var ref:NRef;
	var notes:NNotes;
	var status:Bool = false;
	public function new (ref:NRef, notes:NNotes)
	{
		this.ref = ref;
		this.notes = notes;
	}	
	
	public function doEvent()
	{
		if (this.status == true) throw "Cant perform doEvent() twice";
		if (NRefTools.checkRefNoteError(this.ref)) throw "Reference note error";

		var newnotes:NNotes = [];
		var tnote = this.ref.score.getNBar(this.ref.bar).getNPart(this.ref.part).getNVoice(this.ref.voice).getNNote(this.ref.note);
		var tvoice:NVoice = tnote.nvoice;
		var tnoteidx = tvoice.nnotes.indexOf(tnote)+1;	
		for (note in this.notes)
		{
			var newnote = NoteXML.clone(note);				
			tvoice.nnotes.insert(tnoteidx, newnote);
			newnote.nvoice = tvoice;
			newnotes.push(newnote);				
			tnoteidx++;
		}
		this.notes = newnotes;
		this.status = true;
	}
	
	public function undoEvent()
	{
		if (this.status == false) throw "Cant perform undoEvent() twice";
		
		var refs:Map<NVoice, Int> = new Map<NVoice, Int>();
		for (note in notes)
		{
			if (note == null) throw ("Note to delete can not be null");
			var voice = note.nvoice;
			if (voice == null)  throw ("Note to delete does not seem to belong to the current score voice");
			voice.nnotes.remove(note);			
		}		
		this.status = false;
	}
}
