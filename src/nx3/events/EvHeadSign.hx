package nx3.events;

/**
 * EvHeadSign
 * @author Jonas Nyström
 */
@:access(nx3.NNote)
class EvHeadSign implements IEvent
{
	var ref:NRef;
	var sign:ESign;
	var prevsign:ESign;
	var status:Bool;
	var changedhead:NHead;
	
	public function new(ref:NRef, sign:ESign)
	{
		this.ref = ref;
		this.status = false;
		this.sign = sign;
		this.prevsign = null;
	}
	
	/* INTERFACE nx3.tesref.TestEvents.INxEvent */
	
	public function doEvent():Void 
	{
		if (this.status == true) throw "Cant perform doEvent() twice";
		if (NRefTools.checkRefNoteError(this.ref)) throw "Reference note error";

		var targethead:NHead = this.ref.score.getNBar(this.ref.bar).getNPart(this.ref.part).getNVoice(this.ref.voice).getNNote(this.ref.note).getNHead(this.ref.head);
		this.prevsign = targethead.sign;
		targethead.sign = this.sign;
		this.changedhead = targethead;
		
		this.status = true;
	}
	
	public function undoEvent():Void 
	{
		if (this.status == false) throw "Cant perform undoEvent() twice";
		this.changedhead.sign = this.prevsign;
		this.status = false;	
	}
	
}
