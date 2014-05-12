package com.codeazur.as3icy.decoder;

import com.codeazur.as3icy.decoder.IFrameDecoder;
import com.codeazur.as3icy.decoder.LayerIIIDecoder;
import com.codeazur.as3icy.decoder.OutputBuffer;

import com.codeazur.as3icy.data.MPEGFrame;

import flash.utils.ByteArray;

class Decoder
{
    public var outputBuffer(get, never) : OutputBuffer;

    private var l3decoder : LayerIIIDecoder;
    
    private var output : OutputBuffer;
    
    public function new(output_buffer : OutputBuffer)
    {
        output = output_buffer;
    }
    
    private function get_outputBuffer() : OutputBuffer{
        return output;
    }
    
    public function decodeFrame(frame : MPEGFrame) : Void{
        retrieveDecoder(frame).decodeFrame(frame);
    }
    
    private function retrieveDecoder(frame : MPEGFrame) : IFrameDecoder{
        var decoder : IFrameDecoder;
        var _sw0_ = (frame.layer);        

        switch (_sw0_)
        {
            case MPEGFrame.MPEG_LAYER_III:
                if (l3decoder == null) {
                    l3decoder = new LayerIIIDecoder(output);
                }
                decoder = l3decoder;
            default:
                throw (("Unsupported MPEG Layer: " + frame.layer));
        }
        return decoder;
    }
}

