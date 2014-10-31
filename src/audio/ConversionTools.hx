package audio;
import cx.IntTools;

/**
 * ...
 * @author 
 */
class ConversionTools
{
	inline static public function shortToUChars(short:Int):Array<Int>
	{
		if (! inRange(short, -32767, 32767)) throw "range error";
		var result = [0, 0];
		if  (short >= 0)
		{
			result = [(short ^ 255) >> 8, (short & 255)] ;	
		} else {
			var i2 = 32768 + short;
			result = [(i2 >> 8) | 128, i2 & 255];
		}
		return result;
	}
	
	static public function ucharsToShort(ucharLeft:Int, ucharRight:Int):Int
	{
		if (! inRange(ucharLeft, 0, 255)) throw "range error";
		if (! inRange(ucharRight, 0, 255)) throw "range error";
		var negative:Bool = (ucharLeft & 128 == 128);
		var result = (! negative) ? (ucharLeft << 8) + ucharRight: -32768 + (((ucharLeft - 128) << 8) + ucharRight);
		return result;
	}

	static public function ucharsToShortJS(ucharLeft:Int, ucharRight:Int):Int
	{
		var iLeft:Int = IntTools.int8toUInt8(ucharLeft);
		var iRight:Int = IntTools.int8toUInt8(ucharRight);		
		var negative:Bool = (ucharLeft & 128 == 128);
		var result = (! negative) ? (iLeft << 8) + iRight: -32768 + (((iLeft - 128) << 8) + iRight);
		return result;
	}
	
	
	static public function test(val:Int):Bool
	{
		
		var a1 = shortToUChars(val);
		var a2 = ucharsToShort(a1[0], a1[1]);
		trace('- test value : $val : $a2 : $a1 ');
		return val == a2;
	}
	
	static public function testAll()
	{
		for (v in -32767...32768)
			if (test(v) == false) throw('FALSE: $v');
		
	}
	
	static function inRange(val: Int, min:Int, max:Int):Bool
	{
		return (val >= min && val <= max);
	}
	
	
	public static function intToBinaryString (num : Int, base:Int = 2, length=16) {
		var reference = "0123456789ABCDEFGHIJKLMNOPQRSTUVW";
		var result = new StringBuf();
		var maxPow = 0;
		var test = 0;

		while ( Std.int(Math.pow(base, maxPow)) <= num) {    
			maxPow++;
		}

		var i = maxPow - 1;
		while (i >= 0) {
			var basePow = Math.pow(base, i);
			var pow = Math.floor(num / basePow);
			result.add(reference.charAt(Std.int(pow)));
			num -= Std.int(pow * basePow);
			i--;
		}
		var r = result.toString();
		while (r.length < length) r = '0' + r;
        return r; 
    }			
}

class IntToUint {
	
	inline static public function conv(val:Int)
	{
		if (val < 0) val += 256;
		return val;
	}
	
}

