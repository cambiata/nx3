package nx3;

/**
 * ...
 * @author Jonas Nyström
 */


class VComplexSignsCalculator 
{
	public var vnotes(default, null):VNotes;
	
	public function new(vnotes:VNotes) 
	{ 
		this.vnotes = vnotes;
		
	}


	public function getSigns():VSigns
	{
		var signs:VSigns;
		signs = calcUnsortedSigns(this.vnotes);
		signs = calcSortSigns(signs);
		return signs;
	}
	
	var visibleSigns:VSigns;
	public function getVisibleSigns():VSigns
	{
		return calcVisibleSigns(this.getSigns());
	}
	
	//----------------------------------------------------------------------------------
	
	function calcVisibleSigns(signs:VSigns)
	{
		var visibleSigns:VSigns = [];
		for (sign in signs)
		{
			if (sign.sign == ESign.None) continue;
			visibleSigns.push(sign);
		}
		return visibleSigns;
	}
	
	function calcUnsortedSigns(vnotes:VNotes):VSigns
	{
		var vsigns:VSigns = [];
		for (vnote in vnotes)
		{
			for (nhead in vnote.nnote.nheads)
			{
				var tsign:VSign = {
					sign:nhead.sign,
					level:nhead.level,
					position:0,
				}
				vsigns.push(tsign);
			}
		}
		return vsigns;
	}	
	
	function calcSortSigns(vsigns:VSigns):VSigns
	{
		vsigns.sort(function(a:VSign, b:VSign) {
			return Reflect.compare(a.level, b.level);
		});
		return vsigns;
	}
	
}