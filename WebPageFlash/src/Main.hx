package ;

import audio.flash.PCMFormat;
import audio.flash.SWFFormat;
import audio.flash.WavePlayer;
import cx.ByteArrayTools;
import cx.ConfigTools;
import cx.ReflectTools;
import flash.display.Sprite;
import flash.display.LoaderInfo;
import flash.display.Loader;
import flash.events.Event;
import flash.Lib;
import flash.net.URLRequest;
import format.wav.Data.WAVE;
import format.wav.Reader;
import haxe.io.BytesInput;
import haxe.macro.Format;
import nx3.audio.NoteCoordCalculator;
import nx3.audio.NoteSoundCalculator;
import nx3.audio.PlayerFactory;
import nx3.audio.WavConcatenator;
import openfl.Assets;
import openfl.media.SoundChannel;
import thx.core.Error;

import nx3.flash.ScoreSprite;
import nx3.NBar;
import nx3.NScore;
import nx3.PScore;
import nx3.xml.ScoreXML;
import openfl.display.Loader;
import openfl.events.MouseEvent;
import openfl.media.Sound;
import openfl.net.URLLoader;
import openfl.text.TextField;

/**
 * ...
 * @author Jonas Nyström
 */

class Main extends Sprite 
{
	var inited:Bool;

	var sound:Sound = null;
	var channel:SoundChannel = null;
	
	
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
		
		/*
		var bytes:ByteArray = Assets.getBytes('wav/81.data');
		trace(bytes.length);		
		var w = new WavPlayerLoader();
		var r = new Reader(new BytesInput(ByteArrayTools.toBytes(bytes)));		
		var wave:WAVE = r.read();
		var data = wave.data;		
		w.loadBytes(ByteArrayTools.fromBytes(data), PCMFormat.mono16format(bytes.length));
		*/
		
		
		
		var ss = new ScoreSprite(null);
		this.addChild(ss);
		ss.y = - 40;
		ss.x = 8;
		
		var nsc:NoteSoundCalculator = new NoteSoundCalculator();
		var ncc:NoteCoordCalculator = new NoteCoordCalculator();
		var conc:WavConcatenator = new WavConcatenator();
		var player:PlayerFactory = new PlayerFactory();		
		
		var text = new TextField();
		text.text = 'Ladding pågår...';
		this.addChild(text);
		
		
		ss.barClickHandler = function (e:MouseEvent, barNr:Int, nbar:NBar, score:PScore) {			
			
			if (this.sound != null)
			{
				if (this.channel != null) this.channel.stop();
				this.channel = this.sound.play();
			}
			else
			{
				//var play = player.getPlayFunction(wav);
				//var play = player.makePlayer(wav, loader);
				//play();	
				
				//var w = new WavePlayer();
				//w.loadBytes(wav, PCMFormat.mono16format(wav.length));
				
				var promise = thx.promise.Promise.create(function(resolve: Sound->Void, reject: Error->Void) {
					trace('hello');
					//Timer.delay(function() {
						var snotes = nsc.getPlayableNotesFromTopVoice(score.nscore);
						var coords = ncc.getCoordinatesFromTopVoice(score);
						var wav = conc.getWav(snotes, 60);			
						
						var swf : SWFFormat = new SWFFormat(PCMFormat.mono16format(wav.length));
						var compiledSWF : ByteArray = swf.compileSWF(wav);
						var compiledSWFLoader : Loader = new Loader();
						compiledSWFLoader.loadBytes(compiledSWF);
						compiledSWFLoader.contentLoaderInfo.addEventListener(Event.COMPLETE, function(e:Event) {
							var loaderInfo:LoaderInfo = cast(e.target, LoaderInfo);        
							var definition = loaderInfo.applicationDomain.getDefinition(SWFFormat.CLASS_NAME);
							var instance = Type.createInstance(definition, []);
							var sound:Sound = cast instance;							
							resolve(sound);
						});	    						
					//	resolve(new Sound());
					//}, 500);
				});
				
				promise.success(function(sound:Sound) {
					this.sound = sound;
					this.channel = sound.play();
				});				
				
				
			}
			
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
