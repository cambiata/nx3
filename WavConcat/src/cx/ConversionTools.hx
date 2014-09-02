package cx;

/**
 * ...
 * @author 
 */
class ConversionTools
{
	inline static public function toBytes(int:Int):Array<Int>
	{
		if (int > 32767) throw "range error";
		if (int < -32767) throw "range error";
		var hex = StringTools.hex(int);
		if (hex.length == 1) hex = '000' + hex;
		if (hex.length == 2) hex = '00' + hex;
		if (hex.length == 3) hex = '0' + hex;
		if (hex.length > 4) hex = hex.substr(4);
		var leftHex = hex.substr(0, 2);
		var rightHex = hex.substr(2, 2);
		var left = Std.parseInt('0x$leftHex');
		var right = Std.parseInt('0x$rightHex');
		return [left, right];
	}
	
	inline static public function toInt16(left:Int, right:Int):Int
	{
		if (left > 255) throw "range error";
		if (right > 255) throw "range error";
		var negative:Bool = (left & 128 == 128);
		var leftHex = StringTools.hex(left, 2);
		var rightHex = StringTools.hex(right, 2);
		var int16 = 0;
		if (!negative)
		{
			var hexStr = '0x$leftHex$rightHex';
			int16 = Std.parseInt('0x$leftHex$rightHex');
		}
		else
		{
			var minusLeftHex = StringTools.hex(left - 128, 2);
			int16 = -32768 + Std.parseInt('0x$minusLeftHex$rightHex');
		}
		return int16;
	}
	
	static public function test(val:Int):Bool
	{
		trace('- test value : $val ');
		var a1 = toBytes(val);
		var a2 = toInt16(a1[0], a1[1]);
		return val == a2;
	}
	
	public static function intToBinaryString (num : Int, base:Int = 2) {
        var reference = "0123456789ABCDEFGHIJKLMNOPQRSTUVW";
        var result = new StringBuf();
        var maxPow = 0;
        var test = 0;

        while ( Std.int(Math.pow(base, maxPow)) <= num)
        {    
            maxPow++;
        }
        
        var i = maxPow - 1;
        while (i >= 0) 
        {
            var basePow = Math.pow(base, i);
            var pow = Math.floor(num / basePow);
            result.add(reference.charAt(Std.int(pow)));
            num -= Std.int(pow * basePow);
            i--;
        }
        var r = result.toString();
        return r.length == 0 ? "0" : r;
    }		
	
}