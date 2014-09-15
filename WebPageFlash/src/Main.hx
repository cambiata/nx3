package ;

import cx.ConfigTools;
import cx.ReflectTools;
import flash.display.Sprite;
import flash.events.Event;
import flash.Lib;
import flash.net.URLRequest;
import nx3.audio.NoteSoundCalculator;
import nx3.audio.PlayerFactory;
import nx3.audio.WavConcatenator;
import nx3.flash.ScoreSprite;
import nx3.NBar;
import nx3.NScore;
import nx3.xml.ScoreXML;
import openfl.events.MouseEvent;
import openfl.net.URLLoader;
import openfl.text.TextField;

/**
 * ...
 * @author Jonas Nyström
 */

class Main extends Sprite 
{
	var inited:Bool;

	/* ENTRY POINT */
	
	function resize(e) 
	{
		if (!inited) init();
		// else (resize or orientation change)
	}
	
	function init() 
	{
		if (inited) return;
		inited = true;

		var ss = new ScoreSprite(null);
		this.addChild(ss);
		ss.y = - 40;
		ss.x = 8;
		
		var nsc:NoteSoundCalculator = new NoteSoundCalculator();
		var conc:WavConcatenator = new WavConcatenator();
		var player:PlayerFactory = new PlayerFactory();		
		
		
		var text = new TextField();
		text.text = 'Ladding pågår...';
		this.addChild(text);
		
		ss.barClickHandler = function (e:MouseEvent, barNr:Int, nbar:NBar, nscore:NScore) {			
			var snotes = nsc.getPlayableNotesFromTopVoice(nscore);
			var wav = conc.getWav(snotes, 120);
			var play = player.getPlayFunction(wav);
			play();
		}		
		
		var parameters = { };
		ConfigTools.loadFlashVars(parameters);//var parameters = ConfigTools.getFlashVars();
		if (! Reflect.hasField(parameters, 'score')) Reflect.setField(parameters,'score', 'score.xml');		
		//trace(parameters);
		var score:String = Reflect.field(parameters, 'score');
		
		var loader = new URLLoader();
		loader.addEventListener(flash.events.Event.COMPLETE, function(e) {
			//trace('complete');
			var xmlStr:String = loader.data;
			//trace(xmlStr);
			ss.setScore(ScoreXML.fromXmlStr(xmlStr));
			this.removeChild(text);
		});
		loader.addEventListener(flash.events.IOErrorEvent.IO_ERROR, function(e) {
				trace('Cant load ' + score);
		});
		loader.load(new URLRequest(score));
		
		
		
		
		
	}

	/* SETUP */

	public function new() 
	{
		super();	
		addEventListener(Event.ADDED_TO_STAGE, added);
	}

	function added(e) 
	{
		removeEventListener(Event.ADDED_TO_STAGE, added);
		stage.addEventListener(Event.RESIZE, resize);
		#if ios
		haxe.Timer.delay(init, 100); // iOS 6
		#else
		init();
		#end
	}
	
	public static function main() 
	{
		// static entry point
		Lib.current.stage.align = flash.display.StageAlign.TOP_LEFT;
		Lib.current.stage.scaleMode = flash.display.StageScaleMode.NO_SCALE;
		Lib.current.addChild(new Main());
	}
}
