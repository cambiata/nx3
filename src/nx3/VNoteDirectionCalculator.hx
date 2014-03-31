package nx3;

/**
 * ...
 * @author Jonas Nyström
 */

class VNoteDirectionCalculator
{
	var vnote:VNote;
	public function new (vnote:VNote)
	{
		this.vnote = vnote;
	}
	
	public function getDirection(directionConfig:EDirectionUD): EDirectionUD
	{
		// always return down if not ENoteType == Note
		if (this.vnote.nnote.type.getIndex() != Type.enumIndex(ENoteType.Note(null))) return EDirectionUD.Down;
		
		var direction:EDirectionUD;
		// prio 1: NNote direction
		if (this.vnote.nnote.direction != null) 
		{
			switch (this.vnote.nnote.direction)
			{
				case EDirectionUAD.Up: 
						direction = EDirectionUD.Up; 
						return direction ;
				case EDirectionUAD.Down: 
						direction = EDirectionUD.Down; 
						return direction ;
				default: //
			}
		}
		
		// prio 2: from external configuration
		if (directionConfig != null) return directionConfig;
		
		// prio 3: calculate internal direction from heads
		var calculator = new VNoteInternalDirectionCalculator(this.vnote.getVHeads());
		return calculator.getDirection();
	}
	
	
}
