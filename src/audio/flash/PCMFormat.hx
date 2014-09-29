package audio.flash;
import flash.utils.ByteArray;

class PCMFormat
{
    /* CLASS PROPERTIES **********************************************************************/
    public static inline var HEADER_SIZE : Int = 44;
    
    public var _channels : Int;
    public var _sampleRate : Int;
    public var _byteRate : Int;
    public var _blockAlign : Int;
    public var _bitsPerSample : Int;
    public var _waveDataLength : Int;
    public var _fullDataLength : Int;
    
    /* CONSTRUCTOR ***************************************************************************/
    public function new()
    {
        
        
    }
    
    /* PUBLIC METHODS ************************************************************************/
    public function AnalyzeHeader(byteArray : ByteArray) : Void
    {
        var typeArray : ByteArray = new ByteArray();
        byteArray.readBytes(typeArray, 0, 4);
        
        if (Std.string(typeArray) != "RIFF") 
        {
            throw ("Error: incorrect RIFF header");
            return;
        }
        
        _fullDataLength = byteArray.readUnsignedInt() + 8;
        byteArray.position = 0x10;
        var chunkSize : Float = byteArray.readUnsignedInt();
        
        if (chunkSize != 0x10) 
        {
            throw ("Error: incorrect chunk size");
            return;
        }
        
        
        var pcmTest = byteArray.readShort();
        //var isPCM : Bool = cast(byteArray.readShort(), Bool);
        
        if (pcmTest != 1) 
        {
            throw("Error: this file is not PCM wave file");
            return;
        }
        
        _channels = byteArray.readShort();
        _sampleRate = byteArray.readUnsignedInt();
        
        switch (_sampleRate)
        {
            case 44100, 22050, 11025, 5512:
            default:
                throw ("Decode error: incorrect sample rate");
                return;
        }
        
        _byteRate = byteArray.readUnsignedInt();
        _blockAlign = byteArray.readShort();
        _bitsPerSample = byteArray.readShort();
        byteArray.position += 0x04;
        _waveDataLength = byteArray.readUnsignedInt();
        
        if (_blockAlign == 0) 
        {
	        
            _blockAlign =  Std.int(_channels * _bitsPerSample / 8);
        }
        
        byteArray.position = 0;
    }
}
