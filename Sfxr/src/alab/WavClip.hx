package alab;
import cx.ByteArrayTools;
import flash.utils.ByteArray;
import flash.utils.Endian;
import format.wav.Data.WAVE;
import format.wav.Data.WAVEHeader;
import format.wav.Reader;
import haxe.io.Bytes;
import haxe.io.BytesData;
import haxe.io.BytesInput;
import haxe.Utf8;

/**
 * ...
 * @author Jonas Nyström
 */

 class WavClip
{
	var data:ByteArray;
	var header:WAVEHeader;

	public function new(data:ByteArray) 
	{	
		var wave = waveFromBytearry(data);
		this.data = fromBytes(wave.data);
		this.header = wave.header;
	}
	
	function toBytes(byteArray:ByteArray):Bytes 
	{	
		#if (flash)
			var bytes = Bytes.ofData(byteArray);
		#elseif (html5)
			var arrayBytes = new Array<Int>();
			for (i in 0...byteArray.length) arrayBytes.push(byteArray.readByte());
			var bytes = Bytes.ofData(arrayBytes);
			//var bytes = Bytes.ofData(toBytesData(byteArray));
		#else // if neko & cpp
			var bytes:Bytes = byteArray;
		#end
		return bytes;
	}	
	
	function fromBytes(bytes:Bytes):ByteArray
	{
		#if (flash)	
			var byteArray:ByteArray = bytes.getData(); // entry.data.getData();
		#elseif (html5)
			var bytesData:BytesData = bytes.getData();
			var byteArray:ByteArray = new ByteArray();
			for (i in 0...bytesData.length) byteArray.writeByte(bytesData[i]);
			
		#else
			var byteArray = ByteArray.fromBytes(bytes);
		#end		
		return byteArray;
	}	
	
	function waveFromBytearry(data:ByteArray):WAVE
	{
		var bytes =this.toBytes(data);
		var input = new BytesInput(bytes);
		var reader = new Reader(input);
		var wave:WAVE = reader.read();
		return wave;
	}
	
}