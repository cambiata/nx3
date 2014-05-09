package nx3.test;
import haxe.unit.TestCase;
import nx3.NBar;
import nx3.NBars;
import nx3.NHead;
import nx3.NNote;
import nx3.NNotes;
import nx3.NPart;
import nx3.NParts;
import nx3.NScore;
import nx3.NVoice;
import nx3.PNotes;
import nx3.PScore;
import nx3.test.TestEvents.NNoteRefs;
import nx3.test.TestEvents.NxAction;
import nx3.test.TestEvents.EventOperation;
import nx3.test.TestEvents.NxActions;
import nx3.test.TestEvents.DoActionNotes;
import nx3.test.TestEvents.UndoActionNotes;
import nx3.xml.NoteXML;
using cx.ArrayTools;
using nx3.NTools;
using nx3.test.TestEvents.NxActionTools;
/**
 * ...
 * @author Jonas Nyström
 */
@:access(nx3.NNote)
 
class TestEvents extends TestCase
{
	public function score1():NScore
	{
		var nbar0:NBar = new NBar([
			new NPart([
				new NVoice([
					new NNote([ new NHead(0) , ]),		
				]),										
			]),
		]);		
		
		var score = new NScore([nbar0]);
		return score;
	}
	
	
	public function testEvent1()
	{
		
		var score:NScore = score1();		
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 1);

		var notestoadd = [new NNote([ new NHead(1) ]), new NNote([ new NHead(2) ]), ];
		var targetnotes = [NNoteRefTools.note(0, 0, 0, 0)];
		
		var doevent = NxAction.NotesAdd(targetnotes, notestoadd);		
		var undoevent = new DoActionNotes(score).notesAdd(doevent);
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 3);
		
		var redoevent = new UndoActionNotes(score).notesAdd(undoevent);		
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 1);
		var undoevent = new DoActionNotes(score).notesAdd(redoevent);
		
		/*
		var score:NScore = score1();				
		var targetnotes = [NNoteRefTools.note(0, 0, 0, 0)];
		var notestoadd = [new NNote([ new NHead(1) ]), new NNote([ new NHead(2) ]), ];
		var event = NxEvent.NotesAdd(targetnotes, notestoadd);		
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 1);
		new EventOperation(score).execute(event);
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 3);		
		
		var score:NScore = score1();				
		var targetnotes = [NNoteRefTools.note(0, 0, 0, 0)];
		var event0 = NxEvent.NotesAdd(targetnotes, [new NNote([ new NHead(1) ]), new NNote([ new NHead(2) ]), ]);		
		var event1 = NxEvent.NotesAdd(targetnotes, [new NNote([ new NHead(3) ]), new NNote([ new NHead(4) ]), ]);		
		var events:NxEvents = [event0, event1];
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 1);
		for (event in events) new EventOperation(score).execute(event);
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 5);		
		
		var score:NScore = score1();		
		//var notestoadd = [new NNote([ new NHead(1) ]), new NNote([ new NHead(2) ]), ];
		var targetnotes = [NNoteRefTools.note(999, 0, 0, 0)];
		var event0 = NxEvent.NotesAdd(targetnotes, [new NNote([ new NHead(1) ]), new NNote([ new NHead(2) ]), ]);		
		var events:NxEvents = [event0];
		
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 1);
		for (event in events) new EventOperation(score).execute(event);
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 1);		
		*/
		
		/*
		var score:NScore = score1();		
		//var notestoadd = [new NNote([ new NHead(1) ]), new NNote([ new NHead(2) ]), ];		
		var targetnotes = [NNoteRefTools.note(0, 0, 0, 0)];
		var actionDo = NxAction.NotesAdd(targetnotes, [new NNote([ new NHead(1) ]), new NNote([ new NHead(2) ]), ]);		
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 1);
		var actionUndo = new EventOperation(score).doEvent(actionDo);
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 3);				
		var actionRedo = new EventOperation(score).undoEvent(actionUndo);
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 1);
		var actionUndo = new EventOperation(score).doEvent(actionRedo);
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 3);
		
		var targetnotes = [NNoteRefTools.note(0, 0, 0, 2)];
		var actionDo = NxAction.NotesRemove(targetnotes, null);
		this.assertEquals(score.getNBar(0).getNPart(0).getNVoice(0).nnotes.length, 3);
		var actionUndo = new EventOperation(score).doEvent(actionDo);
		*/
	}	
}


enum NxAction 
{
	NotesAdd(targetnotes:NNoteRefs, notestoadd:NNotes);
	NotesRemove(targetnotes:NNoteRefs, removednotes:NNotes);
	Error(msg:String);
}

typedef NxActions = Array<NxAction>;

class EventOperation
{
	var nscore:NScore;
	public function new(nscore:NScore) 
	{
			this.nscore = nscore;
	};
	
	public function doEvent(event:NxAction): NxAction
	{		
		var result:NxAction = switch event
		{
			case NxAction.NotesAdd(t, n): new DoActionNotes(this.nscore).notesAdd(event);				
			case NxAction.NotesRemove(t, n): new DoActionNotes(this.nscore).notesRemove(event);				
			default:
		}		
		return result;
	}	
	
	public function undoEvent(event:NxAction):NxAction
	{
		var result:NxAction = switch event
		{
			case NxAction.NotesAdd(t, n): new  UndoActionNotes(this.nscore).notesAdd(event);				
			default:
		}				
		return result;
	}
	
}


@:access(nx3.NNote)
class DoActionNotes
{
	var nscore:NScore;

	public function new(nscore:NScore)
	{
		this.nscore = nscore;
	}
	
	public function notesAdd(action:NxAction):NxAction
	{
		var notes = action.getNotes();
		var targetnoterefs = action.getRefs();
		
		
		var errorcheck = this.checkTargetnoterefs(targetnoterefs);
		if (errorcheck != null) return errorcheck;
		//--------------------------------------------------------------------------------------------------------------------------
		
		var resultnotes:NNotes = [];
		for (t in targetnoterefs)
		{
			var targetnote = this.nscore.getNBar(t.bar).getNPart(t.part).getNVoice(t.voice).getNNote(t.note);
			var targetvoice:NVoice = targetnote.nvoice;
			var targetnoteindex = targetvoice.nnotes.indexOf(targetnote)+1;
			
			for (note in notes)
			{
				var newnote = NoteXML.clone(note);				
				targetvoice.nnotes.insert(targetnoteindex, newnote);
				newnote.nvoice = targetvoice;
				resultnotes.push(newnote);				
				targetnoteindex++;
			}
		}
		
		return NxAction.NotesAdd(targetnoterefs, resultnotes);
		
	}	
	
	public function notesRemove(action:NxAction):NxAction
	{
		var targetnoterefs = action.getRefs();
		var notes = action.getNotes();
		
		
		if (targetnoterefs != null && targetnoterefs != []) return this.notesRemoveRefs(action);
		if (notes != null && notes != []) return this.notesRemoveNotes(action);
		return NxAction.Error('Nothing to remove!');
	}
	
	
	public function notesRemoveRefs(action:NxAction):NxAction
	{
		var targetnoterefs = action.getRefs();		
		
		var errorcheck = this.checkTargetnoterefs(targetnoterefs);
		if (errorcheck != null) return errorcheck;
		//--------------------------------------------------------------------------------------------------------------------------				
		var resultnotes:NNotes = [];
		for (t in targetnoterefs)
		{
			var note = this.nscore.getNBar(t.bar).getNPart(t.part).getNVoice(t.voice).getNNote(t.note);
			if (note == null) return  NxAction.Error("Note to delete can not be null");
			var voice = note.nvoice;
			if (voice == null)  return NxAction.Error("Note to delete does not seem to belong to the current score voice");			
			voice.nnotes.remove(note);		
			resultnotes.push(NoteXML.clone(note));
			t.note--;
		}		
		return NxAction.NotesRemove(targetnoterefs, resultnotes);
	}
	
	public function notesRemoveNotes(action:NxAction):NxAction
	{
		var notes = action.getNotes();
		
		var resultrefs:NNoteRefs = [];
		var resultnotes:NNotes = [];
		for (note in notes)
		{
			if (note == null) return  NxAction.Error("Note to delete can not be null");
			var voice = note.nvoice;
			if (voice == null)  return NxAction.Error("Note to delete does not seem to belong to the current score voice");			
			
			voice.nnotes.remove(note);		
			resultnotes.push(NoteXML.clone(note));
			var ref = NTools.noteRef(note);
			resultrefs.push(ref);
		}		
		
		return NxAction.NotesRemove(resultrefs, resultnotes);
	}
	
	
	
	
	function checkTargetnoterefs(targetnoterefs:NNoteRefs): NxAction
	{
		for (t in targetnoterefs)
		{
			var targetnote:NNote;
			try { targetnote = this.nscore.getNBar(t.bar).getNPart(t.part).getNVoice(t.voice).getNNote(t.note); } catch (e:Dynamic) {  };
			if (targetnote == null) return NxAction.Error('Targetnote ${t.bar}:${t.part}:${t.voice}:${t.note} does not exist');
		}
		return null;
	}
	
}

@:access(nx3.NNote)
class UndoActionNotes
{
	var nscore:NScore;

	public function new(nscore:NScore)
	{
		this.nscore = nscore;
	}
	
	public function notesAdd(action:NxAction):NxAction
	{		
		var notes = action.getNotes();
		var targetnoterefs = action.getRefs();
		for (note in notes)
		{
			if (note == null) return  NxAction.Error("Note to delete can not be null");
			var voice = note.nvoice;
			if (voice == null)  return NxAction.Error("Note to delete does not seem to belong to the current score voice");
			voice.nnotes.remove(note);			
		}		
		return NxAction.NotesAdd(targetnoterefs, notes);
	}
}


/*
enum NxActionResult 
{
	NotesOK(notes:NNotes);
	Error(msg:String);
}
*/

typedef NNoteRef = { bar:Int, part:Int, voice:Int, note:Int };
typedef NNoteRefs = Array<NNoteRef>;

class NNoteRefTools
{
	static public function note(barIdx:Int, partIdx:Int, voiceIdx:Int, noteIdx:Int):NNoteRef return { bar:barIdx, part:partIdx, voice:voiceIdx, note:noteIdx };	
}

class NxActionTools
{
	static public function getRefs(event:NxAction):NNoteRefs
	{
		switch event
		{
			case NxAction.NotesAdd(t, n),
			 NxAction.NotesRemove(t, n):
				return t;
			default:	return null;				
		}		
		return null;
	}
	
	static public function getNotes(event:NxAction):NNotes
	{
		switch event
		{
			case NxAction.NotesAdd(t, n),
			 NxAction.NotesRemove(t, n):
				return n;
			default:	return null;				
		}		
		return null;
	}	
	
	
}

