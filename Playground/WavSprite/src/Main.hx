package;

import audio.flash.display.WavSprite;
import openfl.display.Sprite;
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
		var wav:ByteArray = openfl.Assets.getBytes("assets/Komp.wavdata");
		var ws = new WavSprite(wav);		
		this.addChild(ws);
	}
}
