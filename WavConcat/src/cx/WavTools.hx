package cx;
import haxe.io.Bytes;

/**
 * ...
 * @author 
 */
class WavTools
{
	static public function mono16bitToInts(wavData:Bytes): Array<Int>
	{
		var length = Std.int((wavData.length - (wavData.length % 2)) / 2);
		var result:Array<Int> = [];
		for (i in 0...length) {
			var pos = i * 2;
			var left = wavData.get(pos);
			var right = wavData.get(pos + 1);
			var val = ConversionTools.toInt16(right, left);
			result.push(val);
		}		
		return result;
	}
	
	static public function intsToMono16Bytes(ints:Array<Int>):Bytes
	{
		var result:Bytes = Bytes.alloc(ints.length * 2);
		var pos = 0;
		for (v in ints)
		{
			var a = ConversionTools.toBytes(v);
			result.set(pos++, a[1]);
			result.set(pos++, a[0]);
		}
		return result;
	}
	
	static public function modifyAmplitude(ints:Array<Int>, factor:Float):Array<Int>
	{
		var result = [];
		for (i in ints)
			result.push(Math.floor(i * factor));
		return result;
	}
}