package alab,
import flash.utils.ByteArray;
import haxe.io.Bytes;

/**
 * ...
 * @author Jonas Nyström
 */
typedef WavHeader
{
	 var bytes:ByteArray,
	 var chunkId:String,
	 var chunkSize:int,
	 var chunkFormat:String,
	 var subchunk1Id:String,
	 var subchunk1Size:Int,
	 var audioFormat:Int,
	 var channels:Int,
	 var sampleRate:Int :,
	 var bytesPersecond:Int,
	 var blockAlign: Int,
	 var bitsPerSample:Int,
	 var dataChunkSignature:String,
	 var dataChunkLength:Int,

}