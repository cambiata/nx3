package nx3;
import nx3.geom.Rectangle;
import nx3.PNote;
using nx3.ENoteValTools;

/**
 * ...
 * @author Jonas Nyström
 */
class PBaseRectCalculator
{
	var note:PNote;

	public function new(note:PNote) 
	{
		this.note = note;
	}
	
	public function getBaseRect():Rectangle
	{
		return switch note.nnote.type
		{
			case ENoteType.Note(h, v, a, atr):
				switch this.note.nnote.value.head()
				{
					case EHeadValueType.HVT1: new Rectangle( -Constants.HEAD_HALFWIDTH_WIDE, -5, Constants.HEAD_HALFWIDTH_WIDE * 2, 10);
					default:  new Rectangle( -Constants.HEAD_HALFWIDTH_NORMAL, -5, Constants.HEAD_HALFWIDTH_NORMAL * 2, 10);				
				}
		
			default: new Rectangle( -4, -5, 8, 10);
		}
	}
	
	
}