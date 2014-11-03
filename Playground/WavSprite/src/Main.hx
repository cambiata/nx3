package;

import audio.flash.display.WavSprite;
import flash.net.URLRequest;
import openfl.display.Sprite;
import openfl.events.Event;
import openfl.net.URLLoader;
import openfl.net.URLLoaderDataFormat;
import openfl.utils.ByteArray;

/**
 * ...
 * @author Jonas Nyström
 */

class Main  extends Sprite
{
	public function new() 
	{
		super();
		var wav:ByteArray = openfl.Assets.getBytes("assets/christ.wavdata");		
		var ws = new WavSprite(wav);		
		this.addChild(ws);	
	}
}
