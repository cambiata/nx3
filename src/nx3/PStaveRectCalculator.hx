package nx3;
import nx3.geom.Rectangle;
import nx3.PNote;
using nx3.ENoteValTools;

/**
 * ...
 * @author Jonas Nyström
 */
class PStaveRectCalculator
{
	var note:PNote;

	public function new(note:PNote) 
	{
		this.note = note;
	}
	
	public function getStaveRect():Rectangle
	{
		if (this.note.nnote.type.getName() != 'Note') return null;
		if (this.note.nnote.value.stavinglevel() < 1) return null;
		
		var headw:Float = switch this.note.nnote.value.head()
		{
			case EHeadValueType.HVT1: Constants.HEAD_HALFWIDTH_WIDE;
			default: Constants.HEAD_HALFWIDTH_NORMAL;
		}		
		var rect:Rectangle = null;
		if (note.getDirection() == EDirectionUD.Up) 
		{
			rect = new Rectangle( 0, note.nnote.getBottomLevel() - Constants.STAVE_BASIC_LENGTH, headw, Constants.STAVE_BASIC_LENGTH);
		}
		else
		{
			rect = new Rectangle( -headw, note.nnote.getTopLevel(), headw, Constants.STAVE_BASIC_LENGTH);
		}		
		
		rect.offset(this.note.getXOffset(), 0);
		
		return rect;
		
	}
	
	public function getFlagRect():Rectangle
	{
		return null;
		
	}
	
	
}