package de.benz.dataFormat.wave
{
	import flash.utils.ByteArray;
	
	public class WaveMix
	{
		
		
		private var waves:Array;
		
		function WaveMix(waves:Array){
			this.waves = waves;
		}
		
		public function mix():ByteArray{
			
			var maxLength:int = 0;
			for(var i:uint = 0; i < waves.length;i++){
				maxLength = Math.max(maxLength, waves[i].bytes.length-44);
				waves[i].bytes.position = 44;
			} 
			
			
			var mixBytes:ByteArray = new ByteArray();
			mixBytes.endian = "littleEndian";
					
			maxLength = Math.floor(maxLength/2);	
			for(var i:uint=0;i<maxLength;i++){
				
				var sample:int = 0;
				for(var y=0;y<waves.length;y++){
					var waveReader:WaveReader = waves[y] as WaveReader;
					var bytes:ByteArray = waveReader.bytes;
					if(bytes.bytesAvailable){
						if(waveReader.bitsPerSample == 16){
							sample += bytes.readShort();
						}else if(waveReader.bitsPerSample == 8){
							sample += bytes.readByte();
							bytes.readByte();
						}
					}
				}
				if(sample < 32767 || sample > -32768){
					mixBytes.writeShort(sample);
				}
			}		
					
			var waveReader:WaveReader = waves[0];
			var headerBytes:ByteArray = new ByteArray();
			headerBytes.endian = "littleEndian";
			headerBytes.writeMultiByte("RIFF","utf-8");
			headerBytes.writeUnsignedInt(int(mixBytes.length-44+8));
			headerBytes.writeMultiByte("WAVE","utf-8");
			headerBytes.writeMultiByte(waveReader.subchunk1Id,"utf-8");
			headerBytes.writeUnsignedInt(waveReader.subchunk1Size);
			headerBytes.writeShort(waveReader.audioFormat);
			headerBytes.writeShort(waveReader.channels);
			headerBytes.writeUnsignedInt(waveReader.sampleRate);
			headerBytes.writeUnsignedInt(waveReader.bytesPersecond);
			headerBytes.writeShort(waveReader.blockAlign);
			headerBytes.writeShort(waveReader.bitsPerSample);
			headerBytes.writeMultiByte("data","utf");
			headerBytes.writeUnsignedInt(mixBytes.length);
					
			headerBytes.position = 0;
			mixBytes.position = 0;
			
			var outBytes:ByteArray = new ByteArray();
			outBytes.writeBytes(headerBytes,0,headerBytes.length);
			outBytes.writeBytes(mixBytes,0,mixBytes.length);
		
			return outBytes;
		}
		
		
		
		
	}
}