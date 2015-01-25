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
			case EKey.Flat3: [0, -3, 1];
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
	
	static public function getKeyNr(key:EKey): Int
	{
		return switch(key) {
			case EKey.Flat6: -6;
			case EKey.Flat5: -5;
			case EKey.Flat4: -4;
			case EKey.Flat3: -3;
			case EKey.Flat2: -2;
			case EKey.Flat1: -1;
			case EKey.Sharp1: 1;
			case EKey.Sharp2: 2;
			case EKey.Sharp3: 3;
			case EKey.Sharp4: 4;
			case EKey.Sharp5: 5;
			case EKey.Sharp6: 6;
			case _: 0;
		}
	}

	static public function getNotenrBaseMap(key:EKey=null): Map<Int, Int>
	{
		if (key == null) return [	0 => 11, 1 => 9,	2 => 7,	3 => 5,	4 => 4,	5 => 2,	6 => 0, ];
		
		
		// c = 0!
		return switch(key) {
			case EKey.Flat6: 					[	0 => 10, 1 => 8,	2 => 6,	3 => 5,	4 => 3,	5 => 1,	6 => -1];
			case EKey.Flat5:					[	0 => 10, 1 => 8,	2 => 6,	3 => 5,	4 => 3,	5 => 1,	6 => 0,];
			case EKey.Flat4:					[	0 => 10, 1 => 8,	2 => 7,	3 => 5,	4 => 3,	5 => 1,	6 => 0,];
			case EKey.Flat3:					[	0 => 10, 1 => 8,	2 => 7,	3 => 5,	4 => 3,	5 => 2,	6 => 0,];
			case EKey.Flat2: 					[	0 => 10, 1 => 9,	2 => 7,	3 => 5,	4 => 3,	5 => 2,	6 => 0,];
			case EKey.Flat1: 					[	0 => 10, 1 => 9,	2 => 7,	3 => 5,	4 => 4,	5 => 2,	6 => 0, ];
			
			case EKey.Sharp1:  [	0 => 11, 1 => 9,	2 => 7,	3 => 6,	4 => 4,	5 => 2,	6 => 0,];
			case EKey.Sharp2:  [	0 => 11, 1 => 9,	2 => 7,	3 => 6,	4 => 4,	5 => 2,	6 => 1,];
			case EKey.Sharp3:  [	0 => 11, 1 => 9,	2 => 8,	3 => 6,	4 => 4,	5 => 2,	6 => 1,];
			case EKey.Sharp4:  [	0 => 11, 1 => 9,	2 => 8,	3 => 6,	4 => 4,	5 => 3,	6 => 1,];
			case EKey.Sharp5:  [	0 => 11, 1 => 10,	2 => 8,	3 => 6,	4 => 4,	5 => 3,	6 => 1,];
			case EKey.Sharp6:  [	0 => 11, 1 => 10,	2 => 8,	3 => 6,	4 => 5,	5 => 3,	6 => 1, ];
			
			case _: [	0 => 11, 1 => 9,	2 => 7,	3 => 5,	4 => 4,	5 => 2,	6 => 0,];
		}
	}	
	
	//static public var baseLevelNoteMap:Map<Int, Int> = [	0 => 11, 1 => 9,	2 => 7,	3 => 5,	4 => 4,	5 => 2,	6 => 0,];

	static public function getSignsBaseMap(key:EKey=null): Map<Int, ESign>
	{
		if (key == null) return [	0 => ESign.Natural, 1 => ESign.Natural,	2 => ESign.Natural,	3 => ESign.Natural,	4 => ESign.Natural,	5 => ESign.Natural,	6 => ESign.Natural, ];
		
		// c = 0!
		return switch(key) {
			case EKey.Flat6:					[	0 => ESign.Flat, 1 => ESign.Flat,	2 => ESign.Flat,	3 => ESign.Natural,	4 => ESign.Flat,	5 => ESign.Flat,	6 => ESign.Flat, ];
			case EKey.Flat5:					[	0 => ESign.Flat, 1 => ESign.Flat,	2 => ESign.Flat,	3 => ESign.Natural,	4 => ESign.Flat,	5 => ESign.Flat,	6 => ESign.Natural, ];
			case EKey.Flat4:					[	0 => ESign.Flat, 1 => ESign.Flat,	2 => ESign.Natural,	3 => ESign.Natural,	4 => ESign.Flat,	5 => ESign.Flat,	6 => ESign.Natural, ];
			case EKey.Flat3:					[	0 => ESign.Flat, 1 => ESign.Flat,	2 => ESign.Natural,	3 => ESign.Natural,	4 => ESign.Flat,	5 => ESign.Natural,	6 => ESign.Natural, ];
			case EKey.Flat2: 					[	0 => ESign.Flat, 1 => ESign.Natural,	2 => ESign.Natural,	3 => ESign.Natural,	4 => ESign.Flat,	5 => ESign.Natural,	6 => ESign.Natural, ];
			case EKey.Flat1: 					[	0 => ESign.Flat, 1 => ESign.Natural,	2 => ESign.Natural,	3 => ESign.Natural,	4 => ESign.Natural,	5 => ESign.Natural,	6 => ESign.Natural, ];
			
			case EKey.Sharp1: 				[	0 => ESign.Natural, 1 => ESign.Natural,	2 => ESign.Natural,	3 => ESign.Sharp,	4 => ESign.Natural,	5 => ESign.Natural,	6 => ESign.Natural, ];
			case EKey.Sharp2: 				[	0 => ESign.Natural, 1 => ESign.Natural,	2 => ESign.Natural,	3 => ESign.Sharp,	4 => ESign.Natural,	5 => ESign.Natural,	6 => ESign.Sharp, ];
			case EKey.Sharp3: 				[	0 => ESign.Natural, 1 => ESign.Natural,	2 => ESign.Sharp,	3 => ESign.Sharp,	4 => ESign.Natural,	5 => ESign.Natural,	6 => ESign.Sharp, ];
			case EKey.Sharp4: 				[	0 => ESign.Natural, 1 => ESign.Natural,	2 => ESign.Sharp,	3 => ESign.Sharp,	4 => ESign.Natural,	5 => ESign.Sharp,	6 => ESign.Sharp, ];
			case EKey.Sharp5: 				[	0 => ESign.Natural, 1 => ESign.Sharp,	2 => ESign.Sharp,	3 => ESign.Sharp,	4 => ESign.Natural,	5 => ESign.Sharp,	6 => ESign.Sharp, ];
			case EKey.Sharp6: 				[	0 => ESign.Natural, 1 => ESign.Sharp,	2 => ESign.Sharp,	3 => ESign.Sharp,	4 => ESign.Sharp,	5 => ESign.Sharp,	6 => ESign.Sharp, ];
			
			case _:  [	0 => ESign.Natural, 1 => ESign.Natural,	2 => ESign.Natural,	3 => ESign.Natural,	4 => ESign.Natural,	5 => ESign.Natural,	6 => ESign.Natural, ];
		}
	}		
	
	static public function getKeyRootShift(key:EKey):Int {
		
		return switch key {			
			case EKey.Flat6:	4;
			case EKey.Flat5:	1;
			case EKey.Flat4:	8;
			case EKey.Flat3:	3;
			case EKey.Flat2:	10;
			case EKey.Flat1:	5;
			case EKey.Natural:	0;
			case EKey.Sharp1:	7;
			case EKey.Sharp2:	2;
			case EKey.Sharp3:	9;
			case EKey.Sharp4:	4;
			case EKey.Sharp5:	11;
			case EKey.Sharp6:	6;
		}
		
		return 0;
		
	}
	
}