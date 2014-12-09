package audio.flash;
import flash.display.Loader;
import flash.display.LoaderInfo;
import flash.events.Event;
import haxe.remoting.FlashJsConnection;
import flash.utils.ByteArray;
import flash.media.Sound;
/**
 * SoundFactory
 * @author 
 */

class SoundFactory 
{

	public function new() 
	{
		
	}
	
	static public function getSound(wav:ByteArray, format:PCMFormat, callbck:Sound->Void=null):Void -> Sound
	{
		var sound:Sound = null;
		var swf : SWFFormat = new SWFFormat(format);
		var compiledSWF : ByteArray = swf.compileSWF(wav);
		var compiledSWFLoader : Loader = new Loader();
		compiledSWFLoader.loadBytes(compiledSWF);
		compiledSWFLoader.contentLoaderInfo.addEventListener(Event.COMPLETE, function(e:Event) {
			var loaderInfo:LoaderInfo = cast(e.target, LoaderInfo);        
			var definition = loaderInfo.applicationDomain.getDefinition(SWFFormat.CLASS_NAME);
			var instance = Type.createInstance(definition, []);
			sound = cast instance;										
			if (callbck != null) callbck(sound);
		});	   		
	
		return function() return sound;
		
	}
	
}