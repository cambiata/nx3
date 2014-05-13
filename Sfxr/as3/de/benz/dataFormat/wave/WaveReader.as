package de.benz.dataFormat.wave
{
	import flash.utils.ByteArray;
	import flash.utils.Endian;
	
	public class WaveReader
	{
		public var bytes:ByteArray;
		public var chunkId:String;
		public var chunkSize:int;
		public var chunkFormat:String;
		public var subchunk1Id:String;
		public var subchunk1Size;
		public var audioFormat;
		public var channels;
		public var sampleRate;
		public var bytesPersecond;
		public var blockAlign;
		public var bitsPerSample;
		public var dataChunkSignature:String;
		public var dataChunkLength;
		
		
		function WaveReader(){
			
		}
		
		public function read(bytes:ByteArray):void{
			this.bytes = bytes;
			// Read Header
			bytes.endian = "littleEndian";
			chunkId = bytes.readMultiByte(4,"utf"); //RIFF
			chunkSize = bytes.readUnsignedInt();
			chunkFormat = bytes.readMultiByte(4,"utf"); //WAVE
			//Der fmt-chunk beschreibt das Sample-Format:
			subchunk1Id = bytes.readMultiByte(4,"iso-8859-1"); // 12 	4 	'fmt ' 	Header Signatur
			subchunk1Size = bytes.readInt(); // 16 	4 	<fmt length> 	Länge des restlichen fmt-Headers (16 Byte)
			audioFormat = bytes.readShort(); // 20 	2 	<format tag> 	sample Datenformat (siehe separate Tabelle weiter unten)
			channels = bytes.readShort(); // 22 	2 	<channels> 	Anzahl der Kanäle: 1 = mono, 2 = stereo
			sampleRate = bytes.readUnsignedInt();// 24 	4 	<sample rate> 	Abtastrate pro Sekunde (z.B. 44100)
			bytesPersecond = bytes.readUnsignedInt(); //28 	4 	<bytes/second> 	Sample-Rate * Block-Align
			blockAlign = bytes.readShort(); // 32 	2 	<block align> 	Kanäle * bits/sample / 8
			bitsPerSample = bytes.readUnsignedShort(); //34 	2 	<bits/sample> 	8, 16 oder 24
			dataChunkSignature = bytes.readMultiByte(4,"iso-8859-1"); //RIFF
			dataChunkLength = bytes.readInt();
			
		}
		
		public function getWaveForm(precision:int):Array{
			
			
			return new Array();
		}
		
		public function write():ByteArray{
			
			var outBytes:ByteArray = new ByteArray();
			outBytes.endian = "littleEndian";
			outBytes.writeMultiByte("RIFF","utf-8");
			outBytes.writeUnsignedInt(chunkSize);
			outBytes.writeMultiByte("WAVE","utf-8");
			outBytes.writeMultiByte(subchunk1Id,"utf-8");
			outBytes.writeUnsignedInt(subchunk1Size);
			outBytes.writeShort(audioFormat);
			outBytes.writeShort(channels);
			outBytes.writeUnsignedInt(sampleRate);
			outBytes.writeUnsignedInt(bytesPersecond);
			outBytes.writeShort(blockAlign);
			outBytes.writeShort(bitsPerSample);
			outBytes.writeMultiByte("data","utf");
			outBytes.writeUnsignedInt(dataChunkLength);
			bytes.position = 44;
			outBytes.writeBytes(bytes);
			return outBytes;
			
		}
		
		
		
	}
}