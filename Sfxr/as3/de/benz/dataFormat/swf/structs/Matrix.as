package de.benz.dataFormat.swf.structs
{
	
	
	
	/**
	 * Parts of this code are adapted of the Java transform library from http://www.flagstonesoftware.com/
	 **/
	import flash.utils.ByteArray;
	
	
	
	
	
	public class Matrix
	{
		
		private var bitPos:int=8;
		private var bitBuf=0;
		private var bitBuffer=0;
		
		
		function Matrix(){
			
		}
		
		
		public function readMatrixFromStream(stream:ByteArray):void{
			if( readUBits(stream,1) == 1 ) //has scale values
		    {
		    	var scaleBits:int = readUBits(stream,5);
		    	
		    	var scaleX:Number = readUBits( stream,scaleBits )/65536.0;
		    	var scaleY:Number = readUBits( stream,scaleBits )/65536.0;
		    }
		 
		    if( readUBits(stream,1) == 1 ) //has rotate/skew values
		    {
		        var skewBits:int  = readUBits(stream,5);
		        
		        var skew0:Number = readUBits(stream, skewBits )/65536.0;
		        var skew1:Number = readUBits(stream, skewBits )/65536.0;
		    }
		         
		    var translateBits:int = readUBits(stream,5);
		    var translateX:Number =readUBits( stream,translateBits );
		    var translateY:Number =readUBits( stream,translateBits );  

		}
		
		
		
		public function write(out:ByteArray):void{
			
			
			var scaleX:int=1.0;
			var scaleY:Number=1.0;
			var skew0:Number=0.0;
			var skew1:Number=0.0;
			var translateX:Number=0;
			var translateY:Number=0;
			if( scaleX != 1.0 || scaleY != 1.0 ) //if non-default values
         	{
            var intScaleX:int = int(scaleX * 65536.0);
            var intScaleY:int = int(scaleY * 65536.0);
             
             var scaleBits:int  = determineSignedBitSize( intScaleX );
             var scaleBits2:int = determineSignedBitSize( intScaleY );
             if( scaleBits < scaleBits2 ) scaleBits = scaleBits2;
             
             writeUBits( out,1, 1 );
             writeUBits( out,5, scaleBits );
             writeSBits( out,scaleBits, intScaleX );
             writeSBits( out,scaleBits, intScaleY );            
         }
         else
         {
             writeUBits(out, 1, 0 );
         }
                 
         if( skew0 != 0.0 || skew1 != 0.0 ) //if non-default values
         {
             var intSkew0:int = (int)(skew0 * 65536.0);
             var intSkew1:int = (int)(skew1 * 65536.0);
             
             var skewBits:Number  = determineSignedBitSize( intSkew0 );
             var skewBits2:Number = determineSignedBitSize( intSkew1 );
             if( skewBits < skewBits2 ) skewBits = skewBits2;
             
            writeUBits(out, 1, 1 );
            writeUBits(out, 5, skewBits );
            writeSBits(out, skewBits, intSkew0 );
            writeSBits(out, skewBits, intSkew1 );            
         }
         else
         {
             writeUBits(out, 1, 0 );
         }
 
         if( translateX == 0 && translateY == 0 )
         {
             writeUBits(out, 5, 0 );
         }
         else
         {
             var translateBits:Number  = determineSignedBitSize( int(translateX) );
             var translateBits2:Number = determineSignedBitSize( int(translateY) );
             if( translateBits < translateBits2 ) translateBits = translateBits2;   
         
             writeUBits(out, 5, translateBits );
             writeSBits(out, translateBits, int(translateX) );
             writeSBits(out, translateBits, int(translateY) );      
         }
			
			
			trace("bitPos: "+bitPos);
			
			while(bitPos>0){
				writeUBits(out,1,0);
			}
			
		}
		

     
     
     
		
		
		
			public function determineSignedBitSize(value:int ):int
     	{
         if( value >= 0 ) return determineUnsignedBitSize( value ) + 1;
         
         //--This is probably a really bad way of doing this...
         var topBit:int = 31;
         var mask:Number = 0x40000000;
         
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
         var mask:Number = 0x80000000;
         
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
      public function writeSBits(stream:ByteArray, numBits:int, value:int )
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
		
				public function readUBits(inStream:ByteArray,numBits:int ):int
     	{
     		
     		var returnbits:uint = 0;
			while (true)
			{
				// do we have more bits to read?
				if (numBits >= 1) 
				{
					// yes, more bits to read....  do we have unread bits in our buffer?
					if (bitPos == 8) {
						// no more bits to read in our buffer, lets get a new
						// buffer from f and reset the bitPos
						bitPos = 0;
						bitBuffer = inStream.readByte(); // read 8 bits at a time
					}

					// if we're here, we have more bits to read and 
					// we have unread bits in the buffer

					returnbits <<= 1; // shift the returnbit value left 1 place

					var bitMask:Number = (0x80 >> bitPos);
					
					// determine if the next bit we add to return bits should
					// be a 1 or a 0, based on the value of applying
					// the bitMask to the bitBuffer.  A quick example:
					// bitBuffer = 01011010
					// bitmask =   00001000
					// ~~~~~~~~~~~~~~~~~~~~  anding the bits together yeilds:
					//             00001000
					// and because the result is equal to the bitmask, we add
					// a 1 to the returnbits value.
					
					returnbits |= (bitBuffer & bitMask) == bitMask ? 1 : 0; 

					numBits -= 1; // one less bit to read
					bitPos += 1; // advance our "array" index
				}
				else 
				{
					//no more bits to read, return what we read from f
					return returnbits;
				}
			}
			return null;
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