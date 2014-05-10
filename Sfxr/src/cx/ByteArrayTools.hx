package cx;
import haxe.io.BytesData;
import haxe.io.Bytes;
import flash.utils.ByteArray;

/**
 * ...
 * @author Jonas Nyström
 */
class ByteArrayTools
{

	static public function toBytes(byteArray:ByteArray):Bytes 
	{
		#if (flash)
			var bytes = Bytes.ofData(byteArray);
		#elseif (html5)
			//var arrayBytes = new Array<Int>();
			//for (i in 0...byteArray.length) arrayBytes.push(byteArray.readByte());
			//var bytes = Bytes.ofData(arrayBytes);
			var bytes = Bytes.ofData(toBytesData(byteArray));
		#else // if neko & cpp
			var bytes:Bytes = byteArray;
		#end
		return bytes;
	}
	
	#if (html5)
	static public function toBytesData(byteArray:ByteArray):BytesData
	{
		var bytesData = new BytesData();
		
		for (i in 0...byteArray.length) bytesData.push(byteArray.readByte());
		return bytesData;
	}
	
	static public function fromBytesData(bytesData:BytesData):ByteArray
	{
		var byteArray:ByteArray = new ByteArray();
		for (i in 0...bytesData.length) byteArray.writeByte(bytesData[i]);
		return byteArray;
	}
	#end
	
	static public function fromBytes(bytes:Bytes):ByteArray
	{
		#if (flash)	
			var byteArray:ByteArray = bytes.getData(); // entry.data.getData();
		#elseif (html5)
		
			//var bytesData:BytesData = bytes.getData();
			//var byteArray:ByteArray = new ByteArray();
			//for (i in 0...bytesData.length) byteArray.writeByte(bytesData[i]);
			var byteArray:ByteArray = fromBytesData(bytes.getData());
			
		#else
			var byteArray = ByteArray.fromBytes(bytes);
		#end		
		return byteArray;
	}
	
}