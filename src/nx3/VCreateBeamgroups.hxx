package nx3;

/**
 * ...
 * @author Jonas Nyström
 */

 using nx3.VMapTools;
 using nx3.ENoteValTools;

 class VCreateBeamgroups 
 {
	 var vnotes:VNotes;
	 var pattern: ENoteVals;
	 
	 public function new (vnotes:VNotes, pattern:ENoteVals=null)
	 {
		 if (pattern == null) pattern = [ENoteVal.Nv4];

		 this.vnotes = vnotes;
		this.pattern = pattern;
		this.adjustPatternLenght();
	 }

	 var beamgropus:VBeamgroups;
	 public function getBeamgroups():VBeamgroups
	 {
		this.preparePatternCalculation();
		this.preparePositionMaps();
		this.createBeamGroups();
		return this.beamgropus;
	 }
	 
	 //------------------------------------------------------------------
	 
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
	 
	var patternValuePos:Array<Int>;
	var patternValueEnd: Array<Int>;	
	private function preparePatternCalculation() 
	{
		patternValuePos = [];
		patternValueEnd = [];			
		var vPos = 0;
		var i = 0;
		for (v in this.pattern) {			
			var vValue = v.value();
			var vEnd = vPos + vValue;
			patternValuePos.push(vPos);
			patternValueEnd.push(vEnd);			
			vPos = vEnd;
			i++;
		}		
		return this;
	}		 
	
	
	var vnotePosition: Map<VNote, Int>;
	var vnotePositionEnd: Map<VNote, Int>;
	private function preparePositionMaps()
	{
		this.vnotePosition = new Map<VNote, Int>();
		this.vnotePositionEnd = new Map<VNote, Int>();
		var pos = 0;
		for (vnote in this.vnotes)
		{
			this.vnotePosition.set(vnote, pos);
			var endpos = pos + vnote.nnote.value.value();
			this.vnotePositionEnd.set(vnote, pos + vnote.nnote.value.value());
			pos = endpos;
		}			
	}
	
	
	private function createBeamGroups() 
	{		
		this.beamgropus = [];

		
		var vnoteGroupIdx = new Map<VNote, Int>();	
		
		for (vnote in this.vnotes)
		{
			/*
			switch(vnote.nnote.type)
			{
				case ENoteType.Pause:
			}
			*/
			
			var vnotePos = vnotePosition.get(vnote);
			var vnoteEnd = vnotePositionEnd.get(vnote);
			var groupIdx = -111;
		
			switch (vnote.nnote.type)
			{
				case ENoteType.Note(heads, variant, articulations, attributes):
					
						if (vnote.nnote.value.beaminglevel() < 1) 
						{
							groupIdx = -1;
						}
						else 
						{
							groupIdx = findBeamGroupIndex(vnotePos, vnoteEnd);
						}
				default:
					groupIdx = -2;
			}
			
			vnoteGroupIdx.set(vnote, groupIdx);
		}

		var count = 0;
		var prevVNote:VNote = null;
		var arrVNote:VNotes = [];
		
		for (vnote in vnotes)
		{
			if (prevVNote == null)
			{
				arrVNote.push(vnote);
				prevVNote = vnote;
				continue;
			}

			//---------------------------------------------
			var prevIdx = vnoteGroupIdx.get(prevVNote);
			var groupIdx = vnoteGroupIdx.get(vnote);

			if ((prevIdx != groupIdx) || (prevIdx == -1)) {
				
				var newBeamGroup = new VBeamgroup(arrVNote);
				
				//this.dVoice.beamGroups.push(newBeamGroup);
				this.beamgropus.push(newBeamGroup);
				count = 0;				
				arrVNote = [vnote];
			} else {
				count++;
				arrVNote.push(vnote);
			}
			prevVNote = vnote;
		}

		var newBeamGroup = new VBeamgroup(arrVNote);
		
		this.beamgropus.push(newBeamGroup);
	}	
	
	private function findBeamGroupIndex(pos:Int, endPos:Int, countFrom:Int = 0) 
	{
		for (idx in countFrom...this.patternValuePos.length) {			
			if (pos >= patternValuePos[idx] && endPos <= patternValueEnd[idx]) {
				return idx;
			}
		}
		return -1;			
	}	
 }