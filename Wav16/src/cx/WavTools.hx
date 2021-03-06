package cx;
import format.wav.Data.WAVEHeader;
import format.wav.Data.WAVE;
import format.wav.Reader;
import format.wav.Writer;
import haxe.io.Bytes;
#if (sys)
import sys.io.File;
import haxe.io.BytesInput;
#end
import haxe.io.BytesOutput;
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

	static public function createHeader(channels:Int=1, samplingRate:Int=44100, bitsPerSample:Int=16):WAVEHeader
	{
		return {
			format : format.wav.Data.WAVEFormat.WF_PCM,
			channels : channels,
			samplingRate : samplingRate,
			byteRate : Std.int(samplingRate * channels * bitsPerSample / 8),
			blockAlign : Std.int(channels * bitsPerSample / 8),
			bitsPerSample : bitsPerSample,			
		}
	}
	
	#if (sys)
	static public function getData(filename:String)
	{ 
	var bytes:Bytes = File.getBytes(filename);
		var r = new Reader(new BytesInput(bytes));
		var wav:WAVE = r.read();
		var data:Bytes = wav.data;	
		//var header = wav.header;		
		return data;
	}
	
	static public function saveBytes(mixBytes:Bytes, filename:String) 
	{
		var fo = File.write(filename, true);
		var bo = new BytesOutput();
		var w = new Writer(fo);
		var header = WavTools.createHeader();
		var wav:WAVE = { header: header, data: mixBytes };
		w.write(wav);
	}
#end

	static public function mixInts(ints1:Array<Int>, ints2:Array<Int>):Array<Int>
	{
		var result:Array<Int> = [];
		for (pos in 0...ints1.length)
		{
			var v1 = ints1[pos];
			var v2 = ints2[pos];
			var v3 = Math.floor((v1 + v2) / 2);
			result.push(v3);
		}
		return result;
	}
	


}