package nx3;
import nx3.geom.Rectangle;

/**
 * ...
 * @author Jonas Nyström
 */
class PAttributesRectsCalculator
{
	static public function getClefRect(clef:EClef):Rectangle
	{
		return switch clef
		{
			case EClef.ClefC: new Rectangle(0, -3,9, 6);
			case EClef.ClefF: new Rectangle(0, -4, 9, 8);
			case EClef.ClefG: new Rectangle(0, -5, 9, 10);
		default:
			return new Rectangle(0, -3, .5, 6);
		}
	}
	
	static public function getKeyRect(key:EKey):Rectangle
	{
		return switch key
		{
			case EKey.Natural: new Rectangle(0, -3, 1, 6);
			case EKey.Flat1, EKey.Sharp1: new Rectangle(0, -3, Constants.ATTRIBUTE_SIGN_WIDTH*1 + 2, 6);
			case EKey.Flat2, EKey.Sharp2: new Rectangle(0, -3, Constants.ATTRIBUTE_SIGN_WIDTH*2 + 2, 6);
			case EKey.Flat3, EKey.Sharp3: new Rectangle(0, -3, Constants.ATTRIBUTE_SIGN_WIDTH*3 + 2, 6);
			case EKey.Flat4, EKey.Sharp4: new Rectangle(0, -3,Constants.ATTRIBUTE_SIGN_WIDTH*4 + 2, 6);
			case EKey.Flat5, EKey.Sharp5: new Rectangle(0, -3, Constants.ATTRIBUTE_SIGN_WIDTH*5 + 2, 6);
		default:
			return new Rectangle(0, -2, .5, 4);
		}		
	}
	
	static public function getTimeRect(time:ETime):Rectangle
	{
		if (time == null) return new Rectangle(0, -3, .5, 3);			 
		return switch time
		 {
			 case ETime.Time12_8: new Rectangle(0, -3, 6, 6);
			 
			 default: 
			 return new Rectangle(0, -3, 4, 3);			 
		 }		
	}
	
}