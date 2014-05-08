package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
class PSignsCalculator
{
	public var notes(default, null):PNotes;
	
	public function new(notes:PNotes) 
	{ 
		this.notes = notes;		
	}

	public function getSigns():PSigns
	{
		var signs:PSigns;
		signs = calcUnsortedSigns(this.notes);
		signs = calcSortSigns(signs);
		return signs;
	}
	
	var visibleSigns:PSigns;
	public function getVisibleSigns():PSigns
	{
		return calcVisibleSigns(this.getSigns());
	}
	
	//----------------------------------------------------------------------------------
	
	function calcVisibleSigns(signs:PSigns)
	{
		var visibleSigns:PSigns = [];
		for (sign in signs)
		{
			if (sign.sign == ESign.None) continue;
			visibleSigns.push(sign);
		}
		return visibleSigns;
	}
	
	function calcUnsortedSigns(notes:PNotes):PSigns
	{
		var PSigns:PSigns = [];
		for (note in notes)
		{
			for (nhead in note.nnote.nheads)
			{
				var tsign:PSign = {
					sign:nhead.sign,
					level:nhead.level,
					position:0,
				}
				PSigns.push(tsign);
			}
		}
		return PSigns;
	}	
	
	function calcSortSigns(PSigns:PSigns):PSigns
	{
		PSigns.sort(function(a:PSign, b:PSign) {
			return Reflect.compare(a.level, b.level);
		});
		return PSigns;
	}
	
}