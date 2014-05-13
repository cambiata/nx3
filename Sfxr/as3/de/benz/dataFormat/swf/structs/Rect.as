package de.benz.dataFormat.swf.structs
{
	
	 /**
	 * Parts of this code are adapted of the Java transform library from http://www.flagstonesoftware.com/
	 **/
	 
	 
	import flash.utils.ByteArray;
	
	public class Rect
	{
		
		private var xMin:int;
		private var xMax:int;
		private var yMin:int;
		private var yMax:int;
		
		private var bitPos:int=8;
		private var bitBuf=0;
		
		function Rect(xMin:int, xMax:int, yMin:int, yMax:int){
			this.xMin=xMin;
			this.xMax=xMax;
			this.yMin=yMin;
			this.yMax=yMax;
		}
		
		
		public function writeRect(out:ByteArray):void{
			var bitSize:int=getBitSize();
			writeUBits(out, 5, bitSize );
         	writeSBits(out, bitSize, xMin );
         	writeSBits(out, bitSize, xMax );
         	writeSBits(out, bitSize, yMin );
         	writeSBits(out, bitSize, yMax );
			
			trace("bitPos "+bitPos);
			while(bitPos>0){
				writeUBits(out,1,0);
			}
			
			
			trace("bitPos "+bitPos);
		}
		
		
		
		/***
       * Calculate the minimum bit size based on the current values
       */
      private function getBitSize():int
      {
			  var bitSize:int=0;
              var bsMinX:int = determineSignedBitSize( xMin );
              var bsMaxX = determineSignedBitSize( xMax );
              var bsMinY = determineSignedBitSize( yMin );
              var bsMaxY = determineSignedBitSize( yMax );
              
              bitSize = bsMinY;
              if( bitSize < bsMaxX ) bitSize = bsMaxX;
              if( bitSize < bsMinX ) bitSize = bsMinX;
              if( bitSize < bsMaxY ) bitSize = bsMaxY;
               
         return bitSize;
     }
     
     
     
		
		public function determineSignedBitSize(value:int ):int
     	{
         if( value >= 0 ) return determineUnsignedBitSize( value ) + 1;
         
        
         var topBit:int = 31;
         var mask = 0x40000000;
         
         while( topBit > 0 )
         {
             if( (value & mask) == 0 ) break;
             
             mask >>= 1;
             topBit--;
         }
         
         if( topBit == 0 ) return 2;  //must have been -1
         
         //HACK: Flash represents -16 as 110000 rather than 10000 etc..
         var val2:int = value & (( 1 << topBit) - 1 );
         if( val2 == 0 )
         {
             topBit++;
         }
         
         return topBit + 1;
     }



     public function determineUnsignedBitSize(value:int ):int
     {
         //--This is probably a really bad way of doing this...
         var topBit:int = 32;
         var mask = 0x80000000;
         
         while( topBit > 0 )
         {
             if( (value & mask) != 0 ) return topBit;
             
             mask >>= 1;
             topBit--;
         }
         
         return 0;
     }
		
		
		
		
		
		
		
		
		
      /***
      * Write a signed value to the output stream in the given number of bits.
       * The value must actually fit in that number of bits or it will be garbled
       */
      public function writeSBits(stream:ByteArray, numBits:int, value:int ):void
      {
          //--Mask out any sign bit
          var lval:int = value & 0x7FFFFFFF;
          
          if( value < 0 ) //add the sign bit
          {
              lval |= 1 << (numBits-1); //lval |= 1L << (numBits-1);
          }
          
          //--Write the bits as if unsigned
          writeUBits(stream, numBits, lval );
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