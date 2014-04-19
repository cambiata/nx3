package nx3;
using nx3.ENoteValTools;
/**
 * ...
 * @author Jonas Nyström
 */
class PVoice
{
	public var nvoice(default, null):NVoice;
	public var ppart(default, default):PPart;
	
	public function new(nvoice:NVoice)
	{
		this.nvoice = nvoice;		
	}		
	
	var pnotes:PNotes;
	public function getPNotes():PNotes
	{
		if (this.pnotes != null) return this.pnotes;
		this.pnotes = [];		
		
		for (nnote in this.nvoice.nnotes) 
		{
			var pnote = new PNote(nnote);
			pnote.pvoice = this;
			this.pnotes.push(pnote);
		}
		return this.pnotes;
	}	
	
	var value:Null<Int>;
	public function getValue():Int
	{
		if (this.value != null) return this.value;
		if (this.pnotes == null) this.getPNotes();
		this.value = 0;
		for (pnote in this.pnotes) this.value += pnote.nnote.value.value();
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
		
		this.beamgroups = new PVoiceBeamgroupsGenerator(this.getPNotes(), pattern).getBeamgroups();
		return this.beamgroups;
	}	

	var pnotePositions:Map<PNote, Int>;
	public function getPNotePositions():Map<PNote, Int>
	{
		if (this.pnotePositions != null) return this.pnotePositions;
		if (this.pnotes == null) this.getPNotes();
		this.pnotePositions = new Map<PNote, Int>();
		
		var pos = 0;
		for (pnote in this.pnotes) 
		{
			this.pnotePositions.set(pnote, pos);
			pos += pnote.nnote.value.value();			
		}		
		return this.pnotePositions;
		
	}	
	
	
}
