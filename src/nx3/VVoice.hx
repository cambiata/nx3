package nx3;

/**
 * ...
 * @author Jonas Nyström
 */

 using nx3.ENoteValTools;
 
class VVoice 
{
	public var nvoice(default, null):NVoice;
	public function new(nvoice:NVoice) this.nvoice = nvoice;

	var vnotes:VNotes ;	
	public function getVNotes(): VNotes
	{
		if (this.vnotes != null) return this.vnotes;
		this.vnotes = [];
		for (nnote in this.nvoice.nnotes) 
		{
			this.vnotes.push(new VNote(nnote));
		}
		return this.vnotes;
	}
	
	var vnotePositions:Map<VNote, Int>;
	public function getVNotePositions():Map<VNote, Int>
	{
		if (this.vnotePositions != null) return this.vnotePositions;
		if (this.vnotes == null) this.getVNotes();
		this.vnotePositions = new Map<VNote, Int>();
		
		var pos = 0;
		for (vnote in this.vnotes) 
		{
			this.vnotePositions.set(vnote, pos);
			pos += vnote.nnote.value.value();			
		}		
		return this.vnotePositions;
		
	}

	var value:Null<Int>;
	public function getValue():Int
	{
		if (this.value != null) return this.value;
		if (this.vnotes == null) this.getVNotes();
		this.value = 0;
		for (vnote in this.vnotes) this.value += vnote.nnote.value.value();
		return this.value;
	}
	
	var beamgroups:VBeamgroups;
	var beampattern: ENoteVals;
	public function getBeamgroups(pattern:ENoteVals=null):VBeamgroups
	{
		// if new pattern, recreate beamgroups
		if (pattern != null && pattern != this.beampattern) 
		{
			this.beampattern = pattern;
			this.beamgroups = null;
		}
		
		if (this.beamgroups != null) return this.beamgroups;
		this.beamgroups = new VCreateBeamgroups(this.getVNotes(), pattern).getBeamgroups();
		return this.beamgroups;
	}
	
	var notesBeamgroups:Map<VNote, VBeamgroup>;
	public function getNotesBeamgroups(pattern:ENoteVals=null):Map<VNote, VBeamgroup>
	{
		if (pattern != null && pattern != this.beampattern) this.notesBeamgroups = null;
		if (this.notesBeamgroups != null) return this.notesBeamgroups;
		if (this.beamgroups == null) this.getBeamgroups(pattern);
		this.notesBeamgroups = new Map<VNote, VBeamgroup>();
		for (beamgroup in this.beamgroups)
		{
			for (vnote in beamgroup.vnotes)
			{
				this.notesBeamgroups.set(vnote, beamgroup);
			}
		}
		return this.notesBeamgroups;
	}	
}