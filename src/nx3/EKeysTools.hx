package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
class EKeysTools
{
	
	static public function getLevels(key:EKey, clef:EClef):Array<Int>
	{
		var result = new Array<Int>();
		
		result = switch key
		{
			case EKey.Flat1: [0];
			case EKey.Flat2: [0, -3];
			case EKey.Flat3: [0, -3, 1, -2];
			case EKey.Flat4: [0, -3, 1, -2];
			case EKey.Flat5: [0, -3, 1, -2, 2, -1];
			case EKey.Flat6: [0, -3, 1, -2, 2, -1, 3];
			
			case EKey.Sharp1: [ -4];
			case EKey.Sharp2: [ -4, -1];
			case EKey.Sharp3: [ -4, -1, -5];
			case EKey.Sharp4: [ -4, -1, -5, -2];
			case EKey.Sharp5: [ -4, -1, -5, -2, 1];
			case EKey.Sharp6: [ -4, -1, -5, -2, 1, -3];
			
			default: [];
		}
		
		var adjust = switch clef
		{
			case EClef.ClefG: -1;
			case EClef.ClefF: 1;
			default: 0;
		}
		
		for (i in 0...result.length)
		{
			result[i] = result[i] + adjust;
		}		
		return result;
	}
	
	static public function getSigncode(key:EKey):Int
	{
		return switch key
		{
			case EKey.Flat1,
			EKey.Flat2,
			EKey.Flat3,
			EKey.Flat4,
			EKey.Flat5,
			EKey.Flat6: -1;
			
			case EKey.Sharp1,
			EKey.Sharp2,
			EKey.Sharp3,
			EKey.Sharp4,
			EKey.Sharp5,
			EKey.Sharp6: 1;			
			
			default: 0;
		}
	}
	
	
}