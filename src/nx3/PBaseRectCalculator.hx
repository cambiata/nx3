package nx3;
import nx3.geom.Rectangle;
import nx3.PNote;
using nx3.ENoteValTools;
using nx3.geom.Rectangles;
using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */
 
class PBaseRectCalculator
{
	var note:PNote;
	
	static inline var BASERECT_HEIGHT:Float = 3;
	static inline var BASERECT_HEIGHT_X_2:Float = BASERECT_HEIGHT * 2;
	static inline var BASERECT_MARGIN:Float = Constants.OBJECT_XMARGIN;
	static inline var BASERECT_MARGIN_X_2:Float = BASERECT_MARGIN*2;
	
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
					case EHeadValueType.HVT1: new Rectangle( -(Constants.HEAD_HALFWIDTH_WIDE + BASERECT_MARGIN), -BASERECT_HEIGHT, Constants.HEAD_HALFWIDTH_WIDE * 2 + BASERECT_MARGIN_X_2, BASERECT_HEIGHT_X_2);
					default:  new Rectangle( -(Constants.HEAD_HALFWIDTH_NORMAL+BASERECT_MARGIN), -BASERECT_HEIGHT, Constants.HEAD_HALFWIDTH_NORMAL * 2 + BASERECT_MARGIN_X_2, BASERECT_HEIGHT_X_2);				
				}
			case ENoteType.Lyric(text, o, c, f):
				note.getHeadsRects().first().clone();
				
			default: new Rectangle( -4, -BASERECT_HEIGHT, 8, BASERECT_HEIGHT_X_2);
		}
	}
	
	
}