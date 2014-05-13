package de.benz.dataFormat.wave
{
	import flash.utils.ByteArray;
	import de.benz.dataFormat.swf.structs.Rect;
	import flash.utils.Endian;
	import flash.display.Loader;
	import flash.events.Event;
	import flash.media.Sound;
	import flash.events.EventDispatcher;
	
	
	public class WaveSWF extends EventDispatcher
	{
		private var bitPos:int=8;
		private var bitBuf=0;
		public var defineSound:ByteArray;
		public var swfData:ByteArray = new ByteArray();
		private var loader:Loader;
		public var sound;
		
		//LinkageClassCode
		private var linkageClass:Array = [-65,20,-39,0,0,0,1,0,0,0,0,16,0,46,0,0,0,0,10,7,100,101,46,98,101,110,122,9,119,97,118,101,115,111,117,110,100,11,102,108,97,115,104,46,109,101,100,105,97,5,83,111,117,110,100,17,100,101,46,98,101,110,122,58,119,97,118,101,115,111,117,110,100,0,6,79,98,106,101,99,116,12,102,108,97,115,104,46,101,118,101,110,116,115,15,69,118,101,110,116,68,105,115,112,97,116,99,104,101,114,6,22,1,22,3,24,5,22,6,22,8,0,5,7,1,2,7,2,4,7,4,7,7,5,9,3,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,8,3,0,1,0,0,0,1,2,1,1,4,1,0,3,0,1,1,5,6,3,-48,48,71,0,0,1,1,1,6,7,6,-48,48,-48,73,0,71,0,0,2,2,1,1,5,23,-48,48,101,0,96,3,48,96,4,48,96,2,48,96,2,88,0,29,29,29,104,1,71,0,0];
		
		private var fileAttributesArray = [68,17,8,0,0,0];
		
		//SymbolClass Code
		private var symbolClassArray:Array = [63,19,22,0,0,0,1,0,1,0,100,101,46,98,101,110,122,46,119,97,118,101,115,111,117,110,100,0];
		
		
		
		function WaveSWF(waveReader:WaveReader){
			
			// Create DefineSound Tag
			defineSound = new ByteArray();
			
			
			// WRITE SWF HEADER
			defineSound.endian= Endian.LITTLE_ENDIAN;
			defineSound.writeUTFBytes("F");
			defineSound.writeUTFBytes("W");
			defineSound.writeUTFBytes("S");
			defineSound.writeByte(9);
			defineSound.writeByte(0x00); //Length kanne erst am Schluss ermittelt werden ???
			defineSound.writeByte(0x00);
			defineSound.writeByte(0x00); 
			defineSound.writeByte(0x00);  
			var rectData:ByteArray=new ByteArray();
			var rect:Rect=new Rect(0,200,0,200);
			rect.writeRect(defineSound);
			defineSound.writeShort(25*256);
			writeUI16(defineSound,1);
			
			
			// Write FileAttributes
			for(var i:int=0; i < fileAttributesArray.length;i++){
				defineSound.writeByte(fileAttributesArray[i]);
			}
				
				
			var sampleSize:int = 0;
         	if(waveReader.bitsPerSample == 16){
         		sampleSize = 1;
         	}else{
         		sampleSize = 0;
         	}
         	
         	var sampleRate:int = 0;
         	if(waveReader.sampleRate == 44100){
         		sampleRate = 3;
         	}else if(waveReader.sampleRate == 22050){
         		sampleRate = 2;
         	}else if(waveReader.sampleRate == 11025){
         		sampleRate = 1;
         	}
				
				
			// WRITE SOUNDSTREAMHEADER2 TAG
			writeRecordHeader(defineSound, 45, 4);
			writeUBits(defineSound,4,0);
			writeUBits(defineSound,2,sampleRate);
			writeUBits(defineSound,1,sampleSize);
			writeUBits(defineSound,1,waveReader.channels-1);
			writeUBits(defineSound,4,0);
			writeUBits(defineSound,2,sampleRate);
			writeUBits(defineSound,1,sampleSize);
			writeUBits(defineSound,1,waveReader.channels-1);
			defineSound.writeShort(0);
			
			// Write The linkage Class
			for(var i:int=0; i < linkageClass.length;i++){
				defineSound.writeByte(linkageClass[i]);
			}
			
			// WRITE DEFINESOUND TAG
			writeRecordHeader(defineSound, 14,  waveReader.bytes.length - 44 + 7 );
         	defineSound.writeShort(1); // Sound Id
         	
         	
         	
         	var compression:int = 0; // only raw sound for now
         	defineSound.writeByte((compression << 4) + (sampleRate << 2) + (sampleSize << 1) +waveReader.channels-1); //Sound Format + Sample Rate + SampleSize + Channels
         	
         	var sampleCount:int;
			if( Number(waveReader.channels-1) == 0){
					if(waveReader.sampleRate == 8)
						sampleCount=waveReader.bytes.length-44;		// soundsamplecount 8 bit mono		OK
					else
						sampleCount=(waveReader.bytes.length/2)-44;	// soundsamplecount 16 bit mono		OK ?
				}else{
					if(waveReader.sampleRate  == 8)
						sampleCount=(waveReader.bytes.length/2)-44;	// soundsamplecount 8 bit stereo	OK
					else
						sampleCount=(waveReader.bytes.length/4)-44;	// soundsamplecount 16 bit stereo	OK ?
				}
			defineSound.writeUnsignedInt(sampleCount);
         	defineSound.writeBytes(waveReader.bytes,44,waveReader.bytes.length-44);


			// Write Symbol Class
			for(var i:int=0; i < symbolClassArray.length;i++){
				defineSound.writeByte(symbolClassArray[i]);
			}
			
			// Show Frame
			writeRecordHeader(defineSound,1,0);

			// EOF
			defineSound.writeByte(0x00);
			defineSound.writeByte(0x00);
			
			// UPDATE HEADER SIZE !!!
			defineSound.endian = Endian.LITTLE_ENDIAN;
			defineSound.position = 4;
			defineSound.writeUnsignedInt( defineSound.length );	
			
			loader = new Loader();
			loader.loadBytes(defineSound);
			loader.contentLoaderInfo.addEventListener(Event.COMPLETE, onLoaderComplete);
			
		}
		
		
		private function onLoaderComplete(evt:Event):void{
			var SymbolClass:Class =loader.contentLoaderInfo.applicationDomain.getDefinition("de.benz.wavesound") as Class;
			sound = new SymbolClass() as Sound;
			dispatchEvent(new Event(Event.COMPLETE));
		}
		
		
		private function writeUI16(stream:ByteArray,val:int){
			stream.writeByte( val & 0xff );
			stream.writeByte( val >> 8   );
		}
		
		
		private function writeRecordHeader( stream:ByteArray, tagID:Number, dataSize:Number, forceLong:Boolean = false):void{
			if( dataSize <= 62 && forceLong == false)
				stream.writeShort( (tagID<<6)+dataSize  );
			else{
				stream.writeShort( (tagID<<6)+0x3F  );
				stream.writeUnsignedInt( dataSize  );
			}

		}
		
	/***
      * Write an unsigned value to the output stream in the given number of bits
      */
     public function writeUBits(stream:ByteArray, numBits:int, value:int ):void 
     {   
         if( numBits == 0 ) return;
         
         if( bitPos == 0 ) bitPos = 8;  //bitBuf was empty
         
         var bitNum:int = numBits;
         
         while( bitNum > 0 )  //write all bits
         {
             while( bitPos > 0 && bitNum > 0 ) //write into all position of the bit buffer
             {
                 if( getBit( bitNum, value ) ) bitBuf = setBit( bitPos, bitBuf );
                 
                 bitNum--;
                 bitPos--;
             }
             
             if( bitPos == 0 ) //bit buffer is full - write it
             {
                 stream.writeByte( bitBuf );
                 bitBuf = 0;
                 if( bitNum > 0 ) bitPos = 8; //prepare for more bits
             }
         }
     }
     
     
     
     
     
          /***
      * Get the given bit (where lowest bit is numbered 1)
      */
     public function getBit( bitNum:int, value:int )
     {
         return (value & (1 << (bitNum - 1))) != 0;
     }
     
     /***
      * Set the given bit (where lowest bit is numbered 1)
      */    
     public function setBit(bitNum:int, value:int )
     {
         return value | ( 1 << (bitNum-1) );
     } 
		
		

     
		
	}
}