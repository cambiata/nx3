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
			var val = ConversionTools.ucharsToShort(right, left);
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
			var a = ConversionTools.shortToUChars(v);
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
	
	/*
	static public function getSamples(sampleWindow:Int):Array {
		
		var broken:Bool = false;
		var returnSamples:Array = new Array();
		var counter:Int = 0;
		
		var leftPeak:Float, rightPeak:Float;
		
		// Loop over the entire samples Array, but in sampleWindow-sized groups.
		var iLen:Int = _samples.length;
		//for (var i:uint = 0; i < iLen; i += sampleWindow) {
			
		var iLen = Std.int(_samles.lenght / sampleWindow);
		for (i in 0...iLen
			
			leftPeak = 0;
			rightPeak = 0;
			// Loop over the individual samples within the window.
			for (var j:uint = 0; j = iLen) {
					// Reset resoltuion because it's needed in the average calcuation.
					divisor = iLen - i;
					// Set the broken to true so that the outer loop also knows to break.
					broken = true;
					break;
				}
				var sample:Sample = _samples[i + j];
				
				leftPeak = Math.max(leftPeak, Math.abs(sample.left));
				rightPeak = Math.max(rightPeak, Math.abs(sample.right));
			}
			
			// Create a new sample with the new processed values.
			var newSample:Sample = new Sample(counter++, leftPeak, rightPeak);
			returnSamples.push(newSample);
			if (broken) break;
		}
		return returnSamples;
	}
	*/
	
}