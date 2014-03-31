package nx3
;

/**
 * ...
 * @author Jonas Nyström
 */

enum EDirectionUD {
	Up;
	Down;
}

class EDirectionUDTools {
	
	static public function toUAD(direction:EDirectionUD)
	{
		return (direction == EDirectionUD.Up) ? EDirectionUAD.Up : EDirectionUAD.Down;
	}
	
	
}