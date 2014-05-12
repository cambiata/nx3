package com.codeazur.as3icy.data;


import com.codeazur.utils.BitArray;
import flash.utils.ByteArray;

class MPEGFrame
{
    public var version(get, never) : Int;
    public var layer(get, never) : Int;
    public var bitrate(get, never) : Int;
    public var samplingrate(get, never) : Int;
    public var samplingrateIndex(get, never) : Int;
    public var padding(get, never) : Bool;
    public var channelMode(get, never) : Int;
    public var channelModeExt(get, never) : Int;
    public var copyright(get, never) : Bool;
    public var original(get, never) : Bool;
    public var emphasis(get, never) : Int;
    public var size(get, never) : Int;
    public var slots(get, never) : Int;
    public var hasCRC(get, never) : Bool;
    public var crc(get, never) : Int;
    public var samples(get, never) : Int;
    public var data(get, never) : BitArray;

    public static inline var MPEG_VERSION_1_0 : Int = 0;
    public static inline var MPEG_VERSION_2_0 : Int = 1;
    public static inline var MPEG_VERSION_2_5 : Int = 2;
    
    public static inline var MPEG_LAYER_I : Int = 0;
    public static inline var MPEG_LAYER_II : Int = 1;
    public static inline var MPEG_LAYER_III : Int = 2;
    
    public static inline var CHANNEL_MODE_STEREO : Int = 0;
    public static inline var CHANNEL_MODE_JOINT_STEREO : Int = 1;
    public static inline var CHANNEL_MODE_DUAL : Int = 2;
    public static inline var CHANNEL_MODE_MONO : Int = 3;
    
    private static var mpegBitrates : Array<Dynamic> = [
        [[0, 32, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1], 
        [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1], 
        [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1]], 
        [[0, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, -1], 
        [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1], 
        [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1]]];
    private static var mpegSamplingRates : Array<Dynamic> = [
        [44100, 48000, 32000], 
        [22050, 24000, 16000], 
        [11025, 12000, 8000]];
    
    private var _version : Int;
    private var _layer : Int;
    private var _bitrate : Int;
    private var _samplingRate : Int;
    private var _samplingRateIndex : Int;
    private var _padding : Bool;
    private var _channelMode : Int;
    private var _channelModeExt : Int;
    private var _copyright : Bool;
    private var _original : Bool;
    private var _emphasis : Int;
    
    private var _size : Int;
    private var _slots : Int;
    
    private var _header : ByteArray;
    private var _crc : ByteArray;
    private var _data : BitArray;
    
    private var _hasCRC : Bool;
    
    private var _samples : Int = 1152;
    
    public function new()
    {
        init();
    }
    
    private function get_version() : Int{return _version;
    }
    private function get_layer() : Int{return _layer;
    }
    private function get_bitrate() : Int{return _bitrate;
    }
    private function get_samplingrate() : Int{return _samplingRate;
    }
    private function get_samplingrateIndex() : Int{return _samplingRateIndex;
    }
    private function get_padding() : Bool{return _padding;
    }
    private function get_channelMode() : Int{return _channelMode;
    }
    private function get_channelModeExt() : Int{return _channelModeExt;
    }
    private function get_copyright() : Bool{return _copyright;
    }
    private function get_original() : Bool{return _original;
    }
    private function get_emphasis() : Int{return _emphasis;
    }
    
    private function get_size() : Int{return _size;
    }
    private function get_slots() : Int{return _slots;
    }
    
    private function get_hasCRC() : Bool{return _hasCRC;
    }
    private function get_crc() : Int{_crc.position = 0;return _crc.readUnsignedShort();
    }
    
    private function get_samples() : Int{return _samples;
    }
    
    private function get_data() : BitArray{return _data;
    }
    
    public function setHeaderByteAt(index : Int, value : Int) : Void{
        switch (index)
        {
            case 0:
                if (value != 0xff) {
                    throw (("Not a MPEG header."));
                }
            case 1:
                if ((value & 0xe0) != 0xe0) {
                    throw (("Not a MPEG header."));
                }  // get the mpeg version (we only support mpeg 1.0 and 2.0)  
                
                var mpegVersionBits : Int = (value & 0x18) >> 3;
                switch (mpegVersionBits)
                {
                    case 3:_version = MPEG_VERSION_1_0;
                    case 2:_version = MPEG_VERSION_2_0;
                    default:throw (("Unsupported MPEG version."));
                }  // get the mpeg layer version (we only support layer III)  
                
                var mpegLayerBits : Int = (value & 0x06) >> 1;
                switch (mpegLayerBits)
                {
                    case 1:_layer = MPEG_LAYER_III;
                    default:throw (("Unsupported MPEG layer."));
                }  // is the frame secured by crc?  
                
                _hasCRC = !((value & 0x01) != 0);
            case 2:
                var bitrateIndex : Int = ((value & 0xf0) >> 4);
                // get the frame's bitrate
                if (bitrateIndex == 0 || bitrateIndex == 0x0f) {
                    throw (("Unsupported bitrate index."));
                }
                _bitrate = mpegBitrates[_version][_layer][bitrateIndex];
                // get the frame's samplingrate
                _samplingRateIndex = ((value & 0x0c) >> 2);
                if (_samplingRateIndex == 3) {
                    throw (("Unsupported samplingrate index."));
                }
                _samplingRate = mpegSamplingRates[_version][_samplingRateIndex];
                // is the frame padded?
                _padding = ((value & 0x02) == 0x02);
            case 3:
            // get the frame's channel mode:
            // 0: stereo
            // 1: joint stereo
            // 2: dual channel
            // 3: mono
            _channelMode = ((value & 0xc0) >> 6);
            // get the frame's extended channel mode (only for joint stereo):
            _channelModeExt = ((value & 0x30) >> 4);
            // get the copyright flag
            _copyright = ((value & 0x08) == 0x08);
            // get the original flag
            _original = ((value & 0x04) == 0x04);
            // get the emphasis:
            // 0: none
            // 1: 50/15 ms
            // 2: reserved
            // 3: ccit j.17
            _emphasis = (value & 0x02);
            // calculate frame size and number of slots
            calculateSize();
            default:
                throw (("Index out of bounds."));
        }  // store the raw header byte for easy access  
        
        _header[index] = value;
    }
    
    public function setCRCByteAt(index : Int, value : Int) : Void{
        if (index > 1) {
            throw (("Index out of bounds."));
        }
        _crc[index] = value;
    }
    
    private function calculateSize() : Void{
        var headerSize : Int = 4 + ((hasCRC) ? 2 : 0);
        if (layer == MPEG_LAYER_I) {
            _size = Math.floor((12000.0 * bitrate) / samplingrate);
            if (padding) {
                _size++;
            }  // one slot is 4 bytes long  
            
            _size <<= 2;
            _slots = 0;
        }
        else {
            _size = Math.floor((((version == MPEG_VERSION_1_0)) ? 144000.0 : 72000.0) * bitrate / samplingrate);
            if (padding) {
                _size++;
            }
            if (layer == MPEG_LAYER_III) {
                if (version == MPEG_VERSION_1_0) {
                    _slots = _size - (((channelMode == CHANNEL_MODE_MONO)) ? 17 : 32) - headerSize;
                }
                else {
                    _slots = _size - (((channelMode == CHANNEL_MODE_MONO)) ? 9 : 17) - headerSize;
                }
            }
            else {
                _slots = 0;
            }
        }  // subtract header size  
        
        _size -= headerSize;
    }
    
    private function init() : Void{
        _header = new ByteArray();
        _header.writeByte(0);
        _header.writeByte(0);
        _header.writeByte(0);
        _header.writeByte(0);
        _crc = new ByteArray();
        _crc.writeByte(0);
        _crc.writeByte(0);
        _data = new BitArray();
    }
    
    public function getFrame() : ByteArray{
        var ba : ByteArray = new ByteArray();
        ba.writeBytes(_header, 0, 4);
        if (hasCRC) {
            ba.writeBytes(_crc, 0, 2);
        }
        ba.writeBytes(_data);
        return ba;
    }
    
    public function toString() : String{
        var encoding : String = "MPEG ";
        switch (version)
        {
            case MPEGFrame.MPEG_VERSION_1_0:encoding += "1.0 ";
            case MPEGFrame.MPEG_VERSION_2_0:encoding += "2.0 ";
            case MPEGFrame.MPEG_VERSION_2_5:encoding += "2.5 ";
            default:encoding += "?.? ";
        }
        switch (layer)
        {
            case MPEGFrame.MPEG_LAYER_I:encoding += "Layer I";
            case MPEGFrame.MPEG_LAYER_II:encoding += "Layer II";
            case MPEGFrame.MPEG_LAYER_III:encoding += "Layer III";
            default:encoding += "Layer ?";
        }
        var channel : String = "unknown";
        switch (channelMode)
        {
            case 0:channel = "Stereo";
            case 1:channel = "Joint stereo";
            case 2:channel = "Dual channel";
            case 3:channel = "Mono";
        }
        return encoding + ", " + bitrate + " kbit/s, " + samplingrate + " Hz, " + channel + ", " + slots + " slots]";
    }
    
    private static var soundSWFBytes : Array<Dynamic> = [
        0x46, 0x57, 0x53, 0x09, 0x28, 0x02, 0x00, 0x00, 0x78, 0x00, 0x04, 0xE2, 0x00, 0x00, 0x0E, 0xA6, 
        0x00, 0x00, 0x18, 0x01, 0x00, 0x44, 0x11, 0x09, 0x00, 0x00, 0x00, 0x44, 0x10, 0xE8, 0x03, 0x3C, 
        0x00, 0x43, 0x02, 0x86, 0x9C, 0xA7, 0x5A, 0x0A, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
        0x02, 0x00, 0x5C, 0x30, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0xD1, 0x4F, 0x2D, 0x96, 0x0C, 0x01, 
        0x00, 0x00, 0xCE, 0x0A, 0x53, 0x6F, 0x75, 0x6E, 0x64, 0x50, 0x72, 0x6F, 0x76, 0x69, 0x64, 0x65, 
        0x72, 0x00, 0x0A, 0x0E, 0x01, 0x00, 0x01, 0x00, 0x65, 0x6D, 0x70, 0x74, 0x79, 0x00, 0xBF, 0x14, 
        0xA4, 0x01, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x66, 0x72, 0x61, 0x6D, 0x65, 0x31, 0x00, 0x10, 
        0x00, 0x2E, 0x00, 0x00, 0x00, 0x00, 0x0F, 0x00, 0x0D, 0x53, 0x6F, 0x75, 0x6E, 0x64, 0x50, 0x72, 
        0x6F, 0x76, 0x69, 0x64, 0x65, 0x72, 0x0D, 0x66, 0x6C, 0x61, 0x73, 0x68, 0x2E, 0x64, 0x69, 0x73, 
        0x70, 0x6C, 0x61, 0x79, 0x06, 0x53, 0x70, 0x72, 0x69, 0x74, 0x65, 0x05, 0x73, 0x6F, 0x75, 0x6E, 
        0x64, 0x09, 0x53, 0x6F, 0x75, 0x6E, 0x64, 0x49, 0x74, 0x65, 0x6D, 0x0B, 0x66, 0x6C, 0x61, 0x73, 
        0x68, 0x2E, 0x6D, 0x65, 0x64, 0x69, 0x61, 0x05, 0x53, 0x6F, 0x75, 0x6E, 0x64, 0x06, 0x4F, 0x62, 
        0x6A, 0x65, 0x63, 0x74, 0x0C, 0x66, 0x6C, 0x61, 0x73, 0x68, 0x2E, 0x65, 0x76, 0x65, 0x6E, 0x74, 
        0x73, 0x0F, 0x45, 0x76, 0x65, 0x6E, 0x74, 0x44, 0x69, 0x73, 0x70, 0x61, 0x74, 0x63, 0x68, 0x65, 
        0x72, 0x0D, 0x44, 0x69, 0x73, 0x70, 0x6C, 0x61, 0x79, 0x4F, 0x62, 0x6A, 0x65, 0x63, 0x74, 0x11, 
        0x49, 0x6E, 0x74, 0x65, 0x72, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x4F, 0x62, 0x6A, 0x65, 0x63, 
        0x74, 0x16, 0x44, 0x69, 0x73, 0x70, 0x6C, 0x61, 0x79, 0x4F, 0x62, 0x6A, 0x65, 0x63, 0x74, 0x43, 
        0x6F, 0x6E, 0x74, 0x61, 0x69, 0x6E, 0x65, 0x72, 0x08, 0x16, 0x01, 0x16, 0x03, 0x18, 0x02, 0x05, 
        0x00, 0x16, 0x07, 0x18, 0x06, 0x16, 0x0A, 0x02, 0x01, 0x01, 0x0C, 0x07, 0x01, 0x02, 0x07, 0x02, 
        0x04, 0x07, 0x04, 0x05, 0x07, 0x01, 0x06, 0x07, 0x05, 0x08, 0x07, 0x01, 0x09, 0x07, 0x07, 0x0B, 
        0x07, 0x02, 0x0C, 0x07, 0x02, 0x0D, 0x07, 0x02, 0x0E, 0x09, 0x06, 0x01, 0x06, 0x00, 0x00, 0x00, 
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x01, 0x02, 0x09, 0x03, 0x00, 0x01, 0x01, 0x03, 0x00, 
        0x00, 0x04, 0x00, 0x04, 0x05, 0x09, 0x06, 0x00, 0x04, 0x00, 0x00, 0x00, 0x03, 0x00, 0x02, 0x02, 
        0x01, 0x01, 0x04, 0x01, 0x00, 0x05, 0x01, 0x04, 0x04, 0x00, 0x01, 0x06, 0x00, 0x01, 0x01, 0x08, 
        0x09, 0x03, 0xD0, 0x30, 0x47, 0x00, 0x00, 0x01, 0x01, 0x01, 0x09, 0x0A, 0x06, 0xD0, 0x30, 0xD0, 
        0x49, 0x00, 0x47, 0x00, 0x00, 0x02, 0x02, 0x01, 0x01, 0x08, 0x23, 0xD0, 0x30, 0x65, 0x00, 0x60, 
        0x06, 0x30, 0x60, 0x07, 0x30, 0x60, 0x08, 0x30, 0x60, 0x09, 0x30, 0x60, 0x0A, 0x30, 0x60, 0x02, 
        0x30, 0x60, 0x02, 0x58, 0x00, 0x1D, 0x1D, 0x1D, 0x1D, 0x1D, 0x1D, 0x68, 0x01, 0x47, 0x00, 0x00, 
        0x03, 0x01, 0x01, 0x05, 0x06, 0x03, 0xD0, 0x30, 0x47, 0x00, 0x00, 0x04, 0x01, 0x01, 0x06, 0x07, 
        0x06, 0xD0, 0x30, 0xD0, 0x49, 0x00, 0x47, 0x00, 0x00, 0x05, 0x02, 0x01, 0x01, 0x05, 0x17, 0xD0, 
        0x30, 0x5D, 0x0B, 0x60, 0x06, 0x30, 0x60, 0x07, 0x30, 0x60, 0x05, 0x30, 0x60, 0x05, 0x58, 0x01, 
        0x1D, 0x1D, 0x1D, 0x68, 0x04, 0x47, 0x00, 0x00, 0x1E, 0x13, 0x02, 0x00, 0x01, 0x00, 0x53, 0x6F, 
        0x75, 0x6E, 0x64, 0x49, 0x74, 0x65, 0x6D, 0x00, 0x00, 0x00, 0x53, 0x6F, 0x75, 0x6E, 0x64, 0x50, 
        0x72, 0x6F, 0x76, 0x69, 0x64, 0x65, 0x72, 0x00];
    private static var soundSWF : ByteArray = createSoundSWF();
    private static function createSoundSWF() : ByteArray{
        var ba : ByteArray = new ByteArray();
        for (i in 0...soundSWFBytes.length){
            ba.writeByte(soundSWFBytes[i]);
        }
        return ba;
    }
}

