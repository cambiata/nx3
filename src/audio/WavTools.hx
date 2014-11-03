package audio;
import cx.ByteArrayTools;
import flash.utils.ByteArray;
import format.wav.Data.WAVEHeader;
import format.wav.Data.WAVE;
import format.wav.Reader;
import format.wav.Writer;
import haxe.io.Bytes;
#if (sys)
import sys.io.File;
#end
import haxe.io.BytesInput;
import haxe.io.BytesOutput;
import thx.core.Arrays;
import thx.core.Floats;
import thx.core.Ints;

using cx.ArrayTools;
/**
 * ...
 * @author 
 */
class WavTools
{
	static public function mono16bitToInts(wavData:Bytes): Wav16Ints
	{
		var length = Std.int((wavData.length - (wavData.length % 2)) / 2);
		var result:Wav16Ints = [];
		for (i in 0...length) {
			var pos = i * 2;
			var left = wavData.get(pos);
			var right = wavData.get(pos + 1);
			var val = ConversionTools.ucharsToShort(right, left);
			result.push(val);
		}		
		return result;
	}
	
	static public function stereo16bitToInts(wavData:Bytes): Array<Wav16Ints>
	{
		var length = Std.int((wavData.length - (wavData.length % 2)) / 2);
		var resultLeft:Wav16Ints = [];
		var resultRight:Wav16Ints = [];
		
		
		for (i in 0...length) {
			var pos = i * 2;
			var left = wavData.get(pos);
			var right = wavData.get(pos + 1);
			var val = ConversionTools.ucharsToShort(right, left);
			if (i % 2 == 0) 
				resultLeft.push(val);
			else
				resultRight.push(val);
		}		
		return [resultLeft, resultRight];
	}	
	
	static public function stereo16bitToIntsJS(wavData:Bytes): Array<Wav16Ints>
	{
		var length = Std.int((wavData.length - (wavData.length % 2)) / 2);
		var resultLeft:Wav16Ints = [];
		var resultRight:Wav16Ints = [];
		
		for (i in 0...length) {
			var pos = i * 2;
			var left = wavData.get(pos);
			var right = wavData.get(pos + 1);
			var val = ConversionTools.ucharsToShortJS(right, left);
			
			if (i % 2 == 0) 
				resultLeft.push(val);
			else
				resultRight.push(val);
		}		
		return [resultLeft, resultRight];
	}	
	
	static public function getWaveformSamples(wavInts:Wav16Ints, nrOfSamples:Int, sampleAcc:Int=100): Array<Float>
	{		
		
		var windowSize = Math.floor(wavInts.length / nrOfSamples+1);
		//trace([leftInts.length, nrOfSamples, windowSize]);
		var result: Array<Float> = [];
		for (i in 0...nrOfSamples)
		{
			var start = i * windowSize;
			var end = Std.int(Math.min(start + sampleAcc, wavInts.length-1));
			var maxlevel = 0.0;
			for (j in start...end)
			{
				
				var level = Math.abs(wavInts[j]) / 32767;					
				if (level < 0.0001) level = 0;		
				if (j > wavInts.length) level = 0;
				maxlevel = Math.max(level, maxlevel);				
			}
			var sqr = Math.sqrt(maxlevel);
			//trace([i, maxlevel, sqr]);		
			result.push(sqr);
		}
		return result;
	}
		
	
	
	
	static public function intsToMono16Bytes(ints:Wav16Ints):Bytes
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
	
	static public function intsToMono16ByteArray(ints:Wav16Ints):ByteArray return ByteArrayTools.fromBytes(intsToMono16Bytes(ints));
	
	static public function intsToStero16Bytes(leftInts:Wav16Ints, rightInts:Wav16Ints):Bytes
	{
		if (leftInts.length != rightInts.length) throw "Left and Right ints lengths differ!";
		var result:Bytes = Bytes.alloc(leftInts.length * 2 * 2);
		var pos = 0;
		for (i in 0...leftInts.length)
		{
			var v = leftInts[i];
			var a = ConversionTools.shortToUChars(v);
			result.set(pos++, a[1]);
			result.set(pos++, a[0]);
			
			var v = rightInts[i];
			var a = ConversionTools.shortToUChars(v);
			result.set(pos++, a[1]);
			result.set(pos++, a[0]);			
		}
		return result;
	}	
	
	
	static public function modifyAmplitude(ints:Wav16Ints, factor:Float):Wav16Ints
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
	
	//------------------------------------------------------------------------------------------------

	static public function soundFloatsToShorts(bytes:ByteArray):ByteArray
	{
		var _buffer = new ByteArray();
		_buffer.endian = flash.utils.Endian.LITTLE_ENDIAN;
		bytes.position = 0;		
		var i = 0;
		while ( bytes.bytesAvailable > 0 ) {								
			var float = bytes.readFloat();
			var short = Std.int(float * 0x7fff);
			_buffer.writeShort(short);						
		}
		return _buffer;
	}
	
	static public function arrayFloatsToShorts(floats:Array<Float>):ByteArray
	{
		var _buffer = new ByteArray();
		_buffer.endian = flash.utils.Endian.LITTLE_ENDIAN;
		
		for (float in floats)
		{
			var short = Std.int(float * 0x7fff);
			_buffer.writeShort(short);							
		}
		return _buffer;
	}	
	
	
	static public function soundShortsToFloats(bytes:ByteArray):ByteArray
	{
		var _buffer = new ByteArray();
		_buffer.endian =flash.utils.Endian.LITTLE_ENDIAN;
		bytes.position = 0;			
		while ( bytes.bytesAvailable > 0 ) {								
			var short = bytes.readShort();
			var float:Float = short / 0x7fff;
			_buffer.writeFloat(float);						
		}
		return _buffer;			
	}

	//------------------------------------------------------------------------------------------------
	
	static public function arrayIntsToByteArrayShorts(leftInts:Wav16Ints, rightInts:Wav16Ints=null):ByteArray
	{
		var result:ByteArray = new ByteArray();
		for (i in 0...leftInts.length)
		{
			result.writeShort(leftInts[i]);
			if (rightInts != null) result.writeShort(rightInts[i]);
		}
		return result;
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

	static public function mixInts(ints1:Wav16Ints, ints2:Wav16Ints):Wav16Ints
	{
		var result:Wav16Ints = [];
		for (pos in 0...ints1.length)
		{
			var v1 = ints1[pos];
			var v2 = ints2[pos];
			var v3 = Math.floor((v1 + v2) / 2);
			result.push(v3);
		}
		return result;
	}
	
	static public function dspFadeIn(ints:Wav16Ints, length:Int, startLevel:Float=0.0):Wav16Ints
	{		
		var result = new Wav16Ints();
		var length = Std.int(Math.min(length, ints.length));
		for (pos in 0...length)
		{
			var int = ints[pos];
			var delta = Floats.interpolate(pos / length, startLevel, 1);
			var newInt = Std.int(int * delta);
			result.push(newInt);
		}

		if (length < ints.length)
			for (pos in length+1...ints.length)
			{
				result.push(ints[pos]);
			}
			
		return result;
	}
	
	static public function dspFadeOut(ints:Wav16Ints, length:Int, endLevel:Float=0.0):Wav16Ints
	{		
		var result = new Wav16Ints();
		var length = Std.int(Math.min(length, ints.length));
		var startPos = ints.length - length;
		if (startPos > 0)
			for (pos in 0...startPos-1)
			{
				result.push(ints[pos]);
			}
		
		for (pos in startPos...ints.length)
		{
			var int = ints[pos];
			var delta = Floats.interpolate((pos - startPos) / length, 1, endLevel);
			var newInt = Std.int(int * delta);
			result.push(newInt);
		}
			
		return result;
	}	
	
	
	static public function dspSubset(ints:Wav16Ints, trimStart:Int, trimEnd:Int=0, fadeIn:Int = 0, fadeOut:Int = 0): Wav16Ints
	{
		var result = new Wav16Ints();
		var startpos = trimStart;
		var endpos = ints.length - trimEnd;
		for (pos in startpos...endpos)
		{
			result.push(ints[pos]);
		}
		
		if (fadeIn > 0) result = dspFadeIn(result, fadeIn);
		if (fadeOut > 0) result = dspFadeOut(result, fadeOut);
		
		return result;
	}
	
	//---------------------
	
	static public function getIntsFromWavFile(wav:ByteArray):Array<Wav16Ints>
	{
		var result = new Array<Wav16Ints>();
		
		var wavFile:WAVE = new Reader(new BytesInput(ByteArrayTools.toBytes(wav))).read();		
		var wavHeader = wavFile.header;	
		var stereo = (wavHeader.channels > 1);				

		if (stereo) {			
			var stereoints = WavTools.stereo16bitToInts(wavFile.data);		
			return stereoints;
		} else {
			var monoints = WavTools.mono16bitToInts(wavFile.data);
			return [monoints];
		}			
		return null;
		
	}
	
	static public function dspMix(ints1:Wav16Ints, ints2:Wav16Ints, ints2Offset:Int):Wav16Ints
	{
		var result = new Wav16Ints();
		var resultLenght = Std.int(Math.max(ints1.length, ints2Offset + ints2.length ));		
		trace([ints1.length, ints2.length, resultLenght]);
		
		for (pos in 0...resultLenght)
		{
			var level1 = ints1.indexOrValue(pos, 0);
			var level2 = (pos > ints2Offset) ? ints2.indexOrValue(pos - ints2Offset, 0) : 0;
			var resultlevel = Std.int(level1 + level2);
			result.push(resultlevel);
		}
		return result;
	}

	static public function dspCrossfade(ints1:Wav16Ints, ints2:Wav16Ints, crossLenght: Int):Wav16Ints
	{
		crossLenght =  ArrayTools.intsMin([ints1.length, ints2.length, crossLenght]);
		trace([ints1.length, ints2.length, crossLenght]);
		var ints1 = dspFadeOut(ints1, crossLenght);
		var ints2 = dspFadeIn(ints2, crossLenght);
		var result = dspMix(ints1, ints2, ints1.length - crossLenght);
		return result;		
	}
	

}