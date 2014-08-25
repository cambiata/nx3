package nx3.action;

import cx.data.BytesLoader;
import haxe.io.Bytes;
import haxe.io.BytesData;
import haxe.Timer;
import nx3.audio.NoteSoundCalculator;
import nx3.audio.PlayerFactory;
import nx3.PNote;
import nx3.action.EActionType;
import nx3.action.InteractivityBase;

using cx.ArrayTools;

#if (html || html5)
import js.html.ArrayBuffer;
import js.html.Uint8Array;
typedef ByteArray = haxe.io.BytesData;
#end

 #if flash
typedef ByteArray = haxe.io.BytesData;
#end

 #if (neko || cpp)
 import cx.ByteArrayTools;
import flash.utils.ByteArray;
#end

/**
 * ...
 * @author Jonas Nyström
 */

class SoundInteractivity extends InteractivityBase
{
	public function new()
	{
		super();
		this.wavCache = new Map<String, Bytes>();		
		
	}
	override public function onNoteMouseDown(note:PNote, info:EActionInfo)
	{
		trace('SOUND On: ' + note.nnote.headLevels);
		var level = note.nnote.headLevels.first();
		
		var c = new NoteSoundCalculator();
		
		var tones = c.getMidiNotes(note);
		play(tones[0]);	
	}
	
	override public function onNoteMouseUp(note:PNote, info:EActionInfo)
	{
		trace('SOUND Off');
	}	
	
	var wavCache:Map<String, Bytes>;
	
	function getWavAndPlay(id:String)
	{
		if (this.wavCache.exists(id))
		{
			trace('getFromCache');
			var ba = this.wavCache.get(id);
			playWav(ba);
		}
		else
		{
			var bytesloader = new BytesLoader(id, function(bytes:Bytes) {
				trace('loadToCache!');
				trace(bytes.length);				
				this.wavCache.set(id, bytes);
				playWav(bytes);				
			});
			bytesloader.loadBytes();
		}
	}
	
	function play(midinote:Int)
	{
		var filename = 'wav/' + Std.string(midinote) + '.wav';	
		trace(filename);
		getWavAndPlay(filename);
	}
	
	function playWav(bytes:Bytes)
	{
		var bytesdata:BytesData = bytes.getData();	
		#if (neko || cpp)
		var bytesdata:flash.utils.ByteArray = ByteArrayTools.fromBytes(bytes);
		#end
		var pf = new PlayerFactory();
		var play = pf.getPlayFunction(bytesdata);				
		play();						
	}	
}