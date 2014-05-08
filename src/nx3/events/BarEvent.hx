package nx3.events;
import nx3.ESign;
import nx3.ESigns;
import nx3.ETie;
import nx3.ETies;
import nx3.events.BarEvent.NoteEvent;
import nx3.events.BarEvent.NoteIdentifiers;
import nx3.events.BarEvent.NoteInfos;
import nx3.PNotes;
import nx3.ENoteVal;

/**
 * ...
 * @author Jonas Nyström
 */
enum BarEvent
{
	NotesChange(notes:NoteIdentifiers, action:NoteChange);
	NotesDelete(notes:NoteIdentifiers, removedNotes:NoteInfos);	
	NotesAdd(notes:NoteIdentifiers, noteinfos:NoteInfos);
}


enum NoteChange
{
	LevelRel(level:Int);
	LevelAbs(level:Int);
	Tie(useTie:Bool);
	ValAbs(val:ENoteVal);
	ValRel(factor:Float);
	Dot(useDot:Bool);
	HeadLevelRel(headIdx:Int, level:Int);	
	HeadLevelAbs(headIdx:Int, level:Int);
	Pause(on:Bool);
	Sign(type:ESign);
}

typedef NoteIdenitfyer = { bar:Int, part:Int, voice:Int };
typedef NoteIdentifiers = Array<NoteIdenitfyer>;
typedef NewNote = { level:Int, value:ENoteVal };

enum NoteInfo
{
	Note(val: ENoteVal, levels:Array<Int>, signs:ESigns, ties:ETies);
	Pause(val:ENoteVal, level:Int);
	Lyric(val:ENoteVal, text:String);
}

typedef NoteInfos = Array<NoteInfo>;

//enum BarChange