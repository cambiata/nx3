package com.codeazur.as3icy;


import flash.events.SampleDataEvent;
import flash.utils.ByteArray;
/**
	 * ...
	 * @author Jonas Nyström
	 */
class ICYHandler
{
    private var icyDecoder : ICYDecoder;
    
    public function new(icyDecoder : ICYDecoder)
    {
        this.icyDecoder = icyDecoder;
    }
    
    public function sampleDataHandler(e : SampleDataEvent) : Void{
        
        
        var writtenLength : UInt = ICYConst.SAMPLE_DATA_BYTES;
        var writtenLengthInt : Int = ICYConst.SAMPLE_DATA_BYTES;
        if (icyDecoder.sampleBuffer.length > 0) {
            
            writtenLength = Std.int(Math.min(writtenLength, icyDecoder.sampleBuffer.length));
            e.data.writeBytes(icyDecoder.sampleBuffer, 0, writtenLength);
            
            
            if (writtenLength == icyDecoder.sampleBuffer.length) {
                icyDecoder.sampleBuffer = new ByteArray();
            }
            else {
                var ba : ByteArray = new ByteArray();
                ba.writeBytes(icyDecoder.sampleBuffer, writtenLength, icyDecoder.sampleBuffer.length - writtenLength);
                icyDecoder.sampleBuffer = ba;
            }
        }
        else {
            writtenLength = 0;
        }
        
        if (writtenLengthInt < ICYConst.SAMPLE_DATA_BYTES) {
            trace("sampleDataHandler buffer underrun", writtenLength, ICYConst.SAMPLE_DATA_BYTES);
            var size : Int = (writtenLength >> 3);
            var i : Int = 0;
            for (i in 0...ICYConst.SAMPLE_DATA_SIZE - size){
                e.data.writeFloat(0);
                e.data.writeFloat(0);
            }
        }
    }
}

