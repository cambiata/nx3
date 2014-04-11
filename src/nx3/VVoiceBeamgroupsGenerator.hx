package nx3;
import nx3.ENoteVals;
import nx3.VNotes;
import nx3.VVoiceBeamgroupsGenerator.PositionInfo;

/**
 * ...
 * @author Jonas Nyström
 */

  using nx3.ENoteValTools;
  
class VVoiceBeamgroupsGenerator
{
	var vnotes:VNotes;
	var pattern:ENoteVals;

	 public function new (vnotes:VNotes, pattern:ENoteVals=null)
	 {
		 if (pattern == null) pattern = [ENoteVal.Nv4];

		 this.vnotes = vnotes;
		this.pattern = pattern;
		this.adjustPatternLenght();
	 }
	 
	 public function getBeamgroups():VBeamgroups
	 {
		var patternPositions = this.getPatternPositions();
		var notesPositions = this.getNotesPositions();
		var notesBeamgroupPosIndexes = this.getNotesBeamgroupPosIndexes(patternPositions, notesPositions);
		
		var beamgroups = this.createBeamgroups(notesBeamgroupPosIndexes);
		
		 return beamgroups;
	 }
	 
	 function createBeamgroups(indexes:Array<Int>) :VBeamgroups
	 {
		 var noteIdx = 0;
		var prevBeamgroupPosIdx = -1;
		 var groupIdx = -1;
		 var result:VBeamgroups = [];
		 var vnoteGroupIdx:Array<Int> = [];
		 var groupIdxVNotes:Array<VNote> = [];
		 
		 for (vnote in this.vnotes)
		 {
			 var beamgroupPosIdx = indexes[noteIdx];
			 if (beamgroupPosIdx == -1)
			 {
				 groupIdx++;
				 vnoteGroupIdx.push(groupIdx);				 
			 }
			 else
			 {			
				if (prevBeamgroupPosIdx != beamgroupPosIdx) groupIdx++;
				vnoteGroupIdx.push(groupIdx);
			 }
			 prevBeamgroupPosIdx = beamgroupPosIdx;
			 noteIdx++;
		 }	

		 var noteIdx = 0;		
		 var groupVNotes:Array<VNotes> = [];
		 var vnotes:VNotes = null;
		 for  (vnote in this.vnotes)
		 {
			 var groupIdx = vnoteGroupIdx[noteIdx];
			 if (groupVNotes[groupIdx] == null) groupVNotes[groupIdx] = [];
			 groupVNotes[groupIdx].push(vnote);			 
			 noteIdx++;
		 }
		 
		 for (group in groupVNotes)
		 {
			 var beamgroup = new VBeamgroup(group);
			 result.push(beamgroup);
		 }
		 
		 return result;
	 }
	 
	 function getNotesBeamgroupPosIndexes(patternPositions: Array<PositionInfo>, notesPositions: Array<PositionInfo>) :Array<Int>
	 {
		 function findPatternIdxForNote(curNotePos:PositionInfo):Int
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
		 for (n in 0...this.vnotes.length)
		 {
			 var curNotePos = notesPositions[n];
			 var nnote:NNote = vnotes[n].nnote;
			 
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
	 
	 function getNotesPositions()  : Array<PositionInfo>
	 {
		 var result:Array<PositionInfo> = [];
		 var currPos = 0;
		 for (vnote in this.vnotes)
		 {
			 var value = vnote.nnote.value.value();
			  var posinfo:PositionInfo = { start:currPos, end:currPos +value };
			  result.push(posinfo);
			 currPos +=value;			 
		 }
		 return result;
	 }
	 
	 private function getPatternPositions() : Array<PositionInfo>
	 {
		 var result:Array<PositionInfo> = [];
		 var currPos = 0;
		 for (segment in this.pattern)
		 {
			 var value = segment.value();
			 var posinfo:PositionInfo = { start:currPos, end:currPos +value };
			 result.push(posinfo);
			 currPos +=value;			 
		 }
		 return result;
	 }
	 
	 private function adjustPatternLenght()
	 {
		 var notesValue = 0;
		 for (vnote in vnotes) notesValue += vnote.nnote.value.value();
		 
		 var patternValue = 0;
		 for (value in pattern) patternValue += value.value();
		 
		 while (patternValue < notesValue)
		 {
			 this.pattern = this.pattern.concat(this.pattern);
			 patternValue *= 2;
		 }
	 }
	
}

typedef PositionInfo = { start:Int, end:Int };