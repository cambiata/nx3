package audio.flash;


import flash.utils.ByteArray;
import flash.events.Event;
import flash.display.Loader;
import flash.display.LoaderInfo;
import flash.media.Sound;


class WavePlayer
{
    
    public function new()
    {
    }
    
    public function loadBytes(data:ByteArray, format:PCMFormat)
    {
	     this.createWave(data, format);
    }
    
    public function createWave(wavData:ByteArray, format:PCMFormat)
    {
		var swf : SWFFormat = new SWFFormat(format);
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


