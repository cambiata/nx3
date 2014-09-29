package audio.flash;


import flash.events.Event;
import flash.events.ProgressEvent;
import flash.events.EventDispatcher;
import flash.events.IOErrorEvent;
import flash.net.URLRequest;
import flash.net.URLStream;
import flash.media.SoundChannel;
import flash.utils.ByteArray;
import flash.utils.Endian;
import flash.display.Loader;
import flash.display.LoaderInfo;
import flash.media.Sound;
import flash.media.SoundTransform;


class WavPlayerLoader
{
    private var _myUrl : String;
    private var _byteStream : URLStream;
    private var _wavFormat : PCMFormat;
    private var _sound : Sound;
    private var _channel : SoundChannel;
    
    public function new(myUrl : String = null)
    {
       // super();
        
        Init();
        initListeners();
        
       load(myUrl);
    }
    
    /* PUBLIC ********************************************************************************/
    public function load(myUrl : String = null) : Void
    {
        if (myUrl != null) 
        {
            _myUrl = myUrl;
            
            var myUrlRequest : URLRequest = new URLRequest(myUrl);
            _byteStream.load(myUrlRequest);
        }
    }
    
    public function cleanup() : Void
    {
        _byteStream.removeEventListener(ProgressEvent.PROGRESS, loadProgress);
        _byteStream.removeEventListener(Event.COMPLETE, loadComplete);
        _byteStream.removeEventListener(IOErrorEvent.IO_ERROR, loadError);
    }
    
    /* INIT **********************************************************************************/
    private function Init() : Void
    {
        _myUrl = "";
        _byteStream = new URLStream();
    }
    
    private function initListeners() : Void
    {
        _byteStream.addEventListener(ProgressEvent.PROGRESS, loadProgress);
        _byteStream.addEventListener(Event.COMPLETE, loadComplete);
        _byteStream.addEventListener(IOErrorEvent.IO_ERROR, loadError);
    }
    
    /* EVENT HANDLERS ************************************************************************/
    private function loadProgress(e : ProgressEvent) : Void
    {
        trace("bytesLoaded/bytesTotal: " + Std.string(e.bytesLoaded) + "/" + Std.string(e.bytesTotal));
    }
    
    private function loadError(e : IOErrorEvent) : Void
    {
        trace("loadError");
    }
    
    private function loadComplete(e : Event) : Void
    {
        var wavHeader : ByteArray = new ByteArray();
        wavHeader.endian = Endian.LITTLE_ENDIAN;
        var wavData : ByteArray = new ByteArray();
        wavData.endian = Endian.LITTLE_ENDIAN;
        
        _byteStream.readBytes(wavHeader, 0, PCMFormat.HEADER_SIZE);
        _wavFormat = new PCMFormat();
        
        try
       {
            _wavFormat.AnalyzeHeader(wavHeader);
        }        catch (e : Dynamic)
       {
          trace(e);
           return;
       }

        var bytesToRead : Int = (Std.int(_byteStream.bytesAvailable) < (_wavFormat._waveDataLength)) ? _byteStream.bytesAvailable : _wavFormat._waveDataLength;
        _byteStream.readBytes(wavData, 0, bytesToRead);
        
        this.createWave(wavHeader, wavData);
   

    }
    
    
    public function createWave(wavHeader:ByteArray, wavData:ByteArray)
    {
	var swf : SWFFormat = new SWFFormat(_wavFormat);
	var compiledSWF : ByteArray = swf.compileSWF(wavData);
	var compiledSWFLoader : Loader = new Loader();
	compiledSWFLoader.loadBytes(compiledSWF);
	compiledSWFLoader.contentLoaderInfo.addEventListener(Event.COMPLETE, generateCompleteHandler);	    
    }
    
    
    
    
    
    private function generateCompleteHandler(e : Event) : Void
    {     
        var loaderInfo:LoaderInfo = cast(e.target, LoaderInfo);        
        var definition = loaderInfo.applicationDomain.getDefinition(SWFFormat.CLASS_NAME);
        var instance = Type.createInstance(definition, []);
        var sound:Sound = cast instance;
        var channel = sound.play();        
        trace("complete");
    }
}


