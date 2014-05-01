package nx3;
using cx.ArrayTools;
using nx3.ENoteValTools;
/**
 * ...
 * @author Jonas Nyström
 */
class PVoiceBeamgroupsGenerator
{
	var notes:PNotes;
	var pattern:ENoteVals;
	var voice:PVoice;

	 public function new (pnotes:PNotes, pattern:ENoteVals=null)
	 {
		 if (pattern == null) pattern = [ENoteVal.Nv4];
		this.voice = pnotes.first().getVoice();
		 this.notes = pnotes;
		this.pattern = pattern;
		this.adjustPatternLenght();
	 }
	 
	 public function getBeamgroups():PBeamgroups
	 {
		var patternPositions = this.getPatternPositions();
		var notesPositions = this.getNotesPositions();
		var notesBeamgroupPosIndexes = this.getNotesBeamgroupPosIndexes(patternPositions, notesPositions);
		var beamgroups = this.createBeamgroups(notesBeamgroupPosIndexes);
		 return beamgroups;
	 }
	 
	 function createBeamgroups(indexes:Array<Int>) :PBeamgroups
	 {
		 var noteIdx = 0;
		var prevBeamgroupPosIdx = -1;
		 var groupIdx = -1;
		 var result:PBeamgroups = [];
		 var pnoteGroupIdx:Array<Int> = [];
		 var groupIdxpnotes:Array<PNote> = [];
		 
		 for (pnote in this.notes)
		 {
			 var beamgroupPosIdx = indexes[noteIdx];
			 if (beamgroupPosIdx == -1)
			 {
				 groupIdx++;
				 pnoteGroupIdx.push(groupIdx);				 
			 }
			 else
			 {			
				if (prevBeamgroupPosIdx != beamgroupPosIdx) groupIdx++;
				pnoteGroupIdx.push(groupIdx);
			 }
			 prevBeamgroupPosIdx = beamgroupPosIdx;
			 noteIdx++;
		 }	

		 var noteIdx = 0;		
		 var grouppnotes:Array<PNotes> = [];
		 var pnotes:PNotes = null;
		 for  (pnote in this.notes)
		 {
			 var groupIdx = pnoteGroupIdx[noteIdx];
			 if (grouppnotes[groupIdx] == null) grouppnotes[groupIdx] = [];
			 grouppnotes[groupIdx].push(pnote);			 
			 noteIdx++;
		 }
		 
		 for (group in grouppnotes)
		 {
			 var beamgroup = new PBeamgroup(group);
			 result.push(beamgroup);
		 }
		 
		 return result;
	 }
	 
	 function getNotesBeamgroupPosIndexes(patternPositions: Array<PosInfo>, notesPositions: Array<PosInfo>) :Array<Int>
	 {
		 function findPatternIdxForNote(curNotePos:PosInfo):Int
		 {
			 for (p in 0...patternPositions.length)
			 {
				 var curPatternPos = patternPositions[p];
				if (curNotePos.start >= curPatternPos.start && curNotePos.end <= curPatternPos.end)
				{
					return (p);
				}
			 }			 
			 return -1;
		 }
		 
		 var result:Array<Int> = [];
		 var p = 0;
		 var curPatternPos = patternPositions[p];
		 for (n in 0...this.notes.length)
		 {
			 var curNotePos = notesPositions[n];
			 var nnote:NNote = notes[n].nnote;
			 
			 // Pattern index - but exlude non-beamable objects!
			 var patternIdx = switch (nnote.type)
			 {
				case ENoteType.Note(heads, variant, articluation, attributes): 
					(nnote.value.beaminglevel() <= 0) ? -1 :  findPatternIdxForNote(curNotePos);
				case ENoteType.Pause(level): -1;
				 default: -1;
			 }
			 result.push(patternIdx);
		 }
		 
		 return result;
	 }
	 
	 function getNotesPositions()  : Array<PosInfo>
	 {
		 var result:Array<PosInfo> = [];
		 var currPos = 0;
		 for (pnote in this.notes)
		 {
			 var value = pnote.nnote.value.value();
			  var posinfo:PosInfo = { start:currPos, end:currPos +value };
			  result.push(posinfo);
			 currPos +=value;			 
		 }
		 return result;
	 }
	 
	 private function getPatternPositions() : Array<PosInfo>
	 {
		 var result:Array<PosInfo> = [];
		 var currPos = 0;
		 for (segment in this.pattern)
		 {
			 var value = segment.value();
			 var posinfo:PosInfo = { start:currPos, end:currPos +value };
			 result.push(posinfo);
			 currPos +=value;			 
		 }
		 return result;
	 }
	 
	 private function adjustPatternLenght()
	 {
		 var notesValue = 0;
		 for (pnote in notes) notesValue += pnote.nnote.value.value();
		 
		 var patternValue = 0;
		 for (value in pattern) patternValue += value.value();
		 
		 while (patternValue < notesValue)
		 {
			 this.pattern = this.pattern.concat(this.pattern);
			 patternValue *= 2;
		 }
	 }
	
}

typedef PosInfo = { start:Int, end:Int };