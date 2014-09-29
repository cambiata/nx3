package ;

import cx.WavTools;
import format.wav.Data.WAVE;
import format.wav.Reader;
import format.wav.Writer;
import haxe.io.Bytes;
import haxe.io.BytesInput;
import haxe.io.BytesOutput;
import haxe.io.Output;
import haxe.macro.Format;
import neko.Lib;
import sys.io.File;

using cx.ConversionTools;
/**
 * ...
 * @author 
 */

class Main 
{
	
	static function main() 
	{
		
		
		
	
		
		
		
		var ints1:Array<Int> = WavTools.mono16bitToInts(WavTools.getData('48.wav'));
		trace(ints1.length);
		
		var ints2:Array<Int> = WavTools.mono16bitToInts(WavTools.getData('66.wav'));
		trace(ints2.length);

		/*
		var ints4:Array<Int> = WavTools.mono16bitToInts(WavTools.getData('test4.wav'));
		trace(ints4);
		*/
		
		var intsMix = WavTools.mixInts(ints1, ints2);
		trace(intsMix.length);
		var mixBytes = WavTools.intsToMono16Bytes(intsMix);
		WavTools.saveBytes(mixBytes, 'mix.wav');
		
		
		/*
		trace(ints);
		var data2 = WavTools.intsToMono16Bytes(ints);
		trace(data2);
		trace(data.toString() == data2.toString());
		
		//var modInts = WavTools.modifyAmplitude(ints, 0.5);
		//var data3 = WavTools.intsToMono16Bytes(modInts);
		
		var fo = File.write('x.wav', true);
		var bo = new BytesOutput();
		var w = new Writer(fo);
		var header = WavTools.createHeader();
		var wav:WAVE = { header: header, data: data2 };
		w.write(wav);
		trace(header);
		*/
		
		
	}
	
	static function test(v:Int)
	{
		if (v < 0)
		{
			var v2 = 32768 + v;
			var b = ConversionTools.intToBinaryString(v2);
			trace(v + ':' + v2 + ':' + b);
			var left = (v2 >> 8) | 128;
			var right = v2 & 255;
			trace([ConversionTools.intToBinaryString(left, 2, 8), ConversionTools.intToBinaryString(right, 2, 8)]);
			
			
			
		}
		
	}
	
}