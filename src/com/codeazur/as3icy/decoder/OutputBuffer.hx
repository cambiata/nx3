package com.codeazur.as3icy.decoder;


class OutputBuffer
{
    public static var BUFFERSIZE : Int = 2 * 1152;  // max. 2 * 1152 samples per frame  
    public static inline var MAXCHANNELS : Int = 2;  // max. number of channels  
    
    private var buffer : Array<Float>;
    private var bufferp : Array<Int>;
    private var channels : Int;
    private var frequency : Int;
    
    public function new(sample_frequency : Int = 44100, number_of_channels : Int = 2)
    {
        buffer = new Array<Float>();
        bufferp = new Array<Int>();
        frequency = sample_frequency;
        channels = number_of_channels;
        clear_buffer();
    }
    
    public function getChannelCount() : Int{
        return channels;
    }
    
    public function getSampleFrequency() : Int{
        return frequency;
    }
    
    public function getBuffer() : Array<Float>{
        return buffer;
    }
    
    public function getBufferLength() : Int{
        return bufferp[0];
    }
    
    public function appendSamples(channel : Int, f : Array<Float>) : Void{
        var pos : Int = bufferp[channel];
        var fs : Float;
        for (i in 0...32){
            fs = f[i];
            fs = (fs > (1.0) ? 1.0 : (fs < -(1.0) ? -1.0 : fs));
            buffer[pos] = fs;
            pos += channels;
        }
        bufferp[channel] = pos;
    }
    
    public function clear_buffer() : Void {
	    
	    /*
			for (var i:uint = 0; (i < channels) && (i < MAXCHANNELS); i++) {
				bufferp[i] = i;
			}	    
	    */
	var i = 0;
	while ((i < channels) && (i < MAXCHANNELS))
	{
		bufferp[i] = i;
		i++;
	}
			
	/*
        for (i in 0...(i < MAXCHANNELS)){
            bufferp[i] = i;
        }
	*/
    }
}

