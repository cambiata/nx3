package nx3;
using nx3.ENoteValTools;
/**
 * ...
 * @author Jonas Nyström
 */
class PVoice
{
	public var nvoice(default, null):NVoice;
	public var part(default, default):PPart;
	
	public function new(nvoice:NVoice)
	{
		this.nvoice = nvoice;		
	}		
	
	var notes:PNotes;
	public function getNotes():PNotes
	{
		if (this.notes != null) return this.notes;
		this.notes = [];		
		
		for (nnote in this.nvoice.nnotes) 
		{
			var pnote = new PNote(nnote);
			pnote.voice = this;
			this.notes.push(pnote);
		}
		return this.notes;
	}	
	
	var value:Null<Int>;
	public function getValue():Int
	{
		if (this.value != null) return this.value;
		if (this.notes == null) this.getNotes();
		this.value = 0;
		for (pnote in this.notes) this.value += pnote.nnote.value.value();
		return this.value;
	}	
	
	//-----------------------------------------------------------------------------------
	
	var beamgroups:PBeamgroups;
	var beampattern: ENoteVals;	
	
	public function getBeamgroups(pattern:ENoteVals = null):PBeamgroups
	{
		if (pattern != null && pattern != this.beampattern) 
		{
			this.beampattern = pattern;
			this.beamgroups = null;
		}
		
		if (this.beamgroups != null) return this.beamgroups;		
		
		this.beamgroups = new PVoiceBeamgroupsGenerator(this.getNotes(), pattern).getBeamgroups();
		return this.beamgroups;
	}	

	var pnotePositions:Map<PNote, Int>;
	public function getNotePositions():Map<PNote, Int>
	{
		if (this.pnotePositions != null) return this.pnotePositions;
		if (this.notes == null) this.getNotes();
		this.pnotePositions = new Map<PNote, Int>();
		
		var pos = 0;
		for (pnote in this.notes) 
		{
			this.pnotePositions.set(pnote, pos);
			pos += pnote.nnote.value.value();			
		}		
		return this.pnotePositions;
		
	}	
	
	
}
