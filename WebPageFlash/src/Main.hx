package ;

import audio.flash.PCMFormat;
import audio.flash.SWFFormat;
import audio.flash.ui.GraphicArrows;
import audio.flash.ui.PlayButton;
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
import haxe.remoting.FlashJsConnection;
import nx3.audio.NoteCoordCalculator;
import nx3.audio.NoteSoundCalculator;
import nx3.audio.PlayerFactory;
import nx3.audio.WavConcatenator;
import nx3.Constants;
import nx3.geom.Point;
import nx3.render.scaling.Scaling;
import nx3.render.scaling.TScaling;
import openfl.Assets;
import openfl.media.SoundChannel;
import thx.core.Arrays;
import thx.core.Error;
import thx.core.Iterables;
import thx.core.Iterators;

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
	var nsc:NoteSoundCalculator;
	var ncc:NoteCoordCalculator;
	var conc:WavConcatenator;
	var player:PlayerFactory;
	var scoreSprite:nx3.flash.ScoreSprite;
	var playButton:audio.flash.ui.PlayButton;
	var klickResultSprite:Sprite;
	var scaling:TScaling;
	
	var soundLenght:Float = 0;
	var playCoordinates:Map<Int, Point>=null;
	var playPositions:Array<Int>;
	var keyCoordinates:Map<Int, Point>=null;
	var keyPositions:Array<Int>;
	var klickPositions:Array<Float>;
	var pointerSprite:Sprite;	
	
	
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
		
		Lib.current.stage.addEventListener(flash.events.KeyboardEvent.KEY_DOWN, function(e:flash.events.KeyboardEvent) {
			//trace('key: ' + e.keyCode);
			if (this.channel == null) return;
			if (! this.playButton.playing) return;
			var pos = this.channel.position;
			checkKlickPosition(pos);
			//trace(pos);
		});		

		
		var text = new TextField();
		text.text = 'Ladding pågår...';
		this.addChild(text);
		
		
		scoreSprite.barClickHandler = function (e:MouseEvent, barNr:Int, nbar:NBar, score:PScore) {			
			if (this.playButton.playing)
				stopScore();
			else
			this.playButton.playing = true;
		}	

		klickResultSprite = new Sprite();
		this.addChild(klickResultSprite);
	
		
		playButton.onPlayingChange = function(playing:Bool)
		{
			if (playing) 
				this.playScore(scoreSprite.getPScore());
			else
				this.stopScore();
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
			scoreSprite.setScore(ScoreXML.fromXmlStr(xmlStr));
			this.removeChild(text);
		});
		loader.addEventListener(flash.events.IOErrorEvent.IO_ERROR, function(e) {
				trace('Cant load ' + score);
		});
		loader.load(new URLRequest(score));
		

		
	}
	
	static var RED_SPAN:Int = 200;
	static var BLUE_SPAN:Int = 80;
	static var GREEN_SPAN:Int = 40;
	
	
	function clearKlickPositions()
	{
		this.klickResultSprite.graphics.clear();
		this.klickPositions = [];
	}
	
	function checkKlickPosition(pos:Float) 
	{
		pos -= 100;		
		
		var arrowValue:Int = -5;
		for (keyPos in this.keyPositions)
		{
			var diff = Math.abs(keyPos - pos);
			
			if (diff <= RED_SPAN)
			{
				arrowValue = 2;
				if (diff <= BLUE_SPAN)
				{
					arrowValue = 1;					
					if (diff <= GREEN_SPAN)
					{
						arrowValue = 0;
					}
				}
				if (pos < keyPos) arrowValue = -arrowValue;
				
				var coord = this.keyCoordinates.get(keyPos);
				var cx = coord.x;
				var cy = coord.y;				
				
				switch arrowValue
				{
					case 0:
						//this.klickResultSprite.graphics.beginFill(0x00FF00);
						//this.klickResultSprite.graphics.drawCircle(cx, cy, 8);
						GraphicArrows.drawArrow(this.klickResultSprite.graphics, 0x00FF00, GraphicArrowType.UP, cx, cy);
						
					case 1: 
						GraphicArrows.drawArrow(this.klickResultSprite.graphics, 0x0000FF, GraphicArrowType.RIGHT, cx, cy);
						//this.klickResultSprite.graphics.beginFill(0x0000FF);
						//this.klickResultSprite.graphics.drawCircle(cx, cy, 8);
					case -1:
						GraphicArrows.drawArrow(this.klickResultSprite.graphics, 0x0000FF, GraphicArrowType.LEFT, cx, cy);
						//this.klickResultSprite.graphics.beginFill(0x0000FF);
						//this.klickResultSprite.graphics.drawCircle(cx, cy, 8);
					case 2: 
						GraphicArrows.drawArrow(this.klickResultSprite.graphics, 0xFF0000, GraphicArrowType.RIGHT, cx, cy);
						//this.klickResultSprite.graphics.beginFill(0xFF0000);
						//this.klickResultSprite.graphics.drawCircle(cx, cy, 8);						
					case -2:
						GraphicArrows.drawArrow(this.klickResultSprite.graphics, 0xFF0000, GraphicArrowType.LEFT, cx, cy);
						//this.klickResultSprite.graphics.beginFill(0xFF0000);
						//this.klickResultSprite.graphics.drawCircle(cx, cy, 8);
					case _:
						trace('Hit: ${keyPos-pos} - $arrowValue');
				}
				
				var diff =keyPos - pos;
				
				trace([pos, keyPos, diff, arrowValue]);
				this.klickPositions.push(Std.int(pos));
				break;				
			}
			
			/*
			if ((pos >= (keyPos - RED_SPAN)) && (pos <= (keyPos + RED_SPAN)))
			{
				arrowValue = 2;
				if ((pos >= (keyPos - BLUE_SPAN)) && (pos <= (keyPos + BLUE_SPAN)))
				{
					arrowValue = 1;
					if ((pos >= (keyPos - GREEN_SPAN)) && (pos <= (keyPos + GREEN_SPAN)))
					{
						arrowValue = 0;
					}
				}
				if (pos < keyPos) arrowValue = -arrowValue;
				//trace('Hit: ${keyPos-pos} - $arrowValue');
				
				var coord = this.keyCoordinates.get(keyPos);
				var cx = coord.x;
				var cy = coord.y;
				//trace([cx, cy]);
				switch arrowValue
				{
					case 0: 
						this.klickResultSprite.graphics.beginFill(0x00FF00);
						this.klickResultSprite.graphics.drawCircle(cx, cy, 8);
					case 1: case -1:
						this.klickResultSprite.graphics.beginFill(0x0000FF);
						this.klickResultSprite.graphics.drawCircle(cx, cy, 8);
					case 2: case -2:
						this.klickResultSprite.graphics.beginFill(0xFF0000);
						this.klickResultSprite.graphics.drawCircle(cx, cy, 8);
					case _:
						trace('Hit: ${keyPos-pos} - $arrowValue');
						
				}
				trace([pos, keyPos]);
				this.klickPositions.push(Std.int(pos));
				break;
			}
			*/
		}
		
		
		
		
	}

	var pscore:PScore;
	
	function ssPlay(pscore:PScore, resolve:Sound->Void) 
	{
		this.pscore = pscore;
		var snotes = nsc.getPlayableNotesFromTopVoice(pscore.nscore);
		var tempo =  (pscore.nscore.configuration.tempo != null) ? pscore.nscore.configuration.tempo : Constants.SCORE_DEFAULT_TEMPO;
		var wav = conc.getWav(snotes, tempo);			
		
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
	}
	

	
	function playScore(pscore:PScore)
	{
		this.playButton.draw(true);
		if (this.sound != null)
		{
			playSound();
			/*
			this.soundLenght = this.sound.length
			if (this.channel != null) this.channel.stop();
			this.channel = this.sound.play();
			this.channel.addEventListener(flash.events.Event.SOUND_COMPLETE, function(e) this.endScore() , false, 0, true);
			*/
		}
		else
		{
			var promise = thx.promise.Promise.create(function(resolve: Sound->Void, reject: Error->Void) {
				this.ssPlay(pscore, resolve);
			});
			
			promise.success(function(sound:Sound) {
				this.sound = sound;
				playSound();
				/*
				if (this.channel != null) this.channel.stop();
				this.channel = sound.play();
				this.sound.addEventListener(flash.events.Event.SOUND_COMPLETE, function(e) trace('COMPLETE') );
				this.channel.addEventListener(flash.events.Event.SOUND_COMPLETE, function(e) this.endScore() , false, 0, true);
				*/
			});				
		}
	}
	
	function playSound()
	{
		this.clearKlickPositions();
		this.soundLenght = this.sound.length;	

		var coords = ncc.getCoordinatesFromTopVoice(pscore);
		var value = ncc.getValueLenghtForTopVoice(pscore);
		var countinLength = ncc.getCountinLength(pscore, value, this.soundLenght);
	
		this.playCoordinates = ncc.getPlayCoordinates(coords, value, this.soundLenght, countinLength);
		this.playPositions = Iterators.toArray(this.playCoordinates.keys());
		this.playPositions.sort(function(a, b) return Reflect.compare(a, b) );
		
		this.keyCoordinates = ncc.getKeyCoordinates(coords, value, this.soundLenght, countinLength);
		this.keyPositions = Iterators.toArray(this.keyCoordinates.keys());
		this.keyPositions.sort(function(a, b) return Reflect.compare(a, b) );

		
		if (this.channel != null) this.channel.stop();
		this.channel = this.sound.play();
		
		this.channel.addEventListener(flash.events.Event.SOUND_COMPLETE, function(e) this.endScore() , false, 0, true);
		this.addEventListener(Event.ENTER_FRAME, onEnterFrame, false, 0, true);
	}
	
	private function onEnterFrame(e:Event):Void 
	{
		if (this.channel == null) return;
		if (this.playPositions.length < 1) return;
		//trace(this.channel.position);
		if (this.channel.position > this.playPositions[0])
		{
			var pos = this.playCoordinates.get(this.playPositions[0]);
			this.pointerSprite.x = pos.x;
			this.playPositions.shift();
		}
	}
	
	
	function stopScore()
	{
			if (this.channel != null) this.channel.stop();
			endScore();
	}

	function endScore()
	{
		this.removeEventListener(Event.ENTER_FRAME, onEnterFrame);
		this.playButton.playing = false;
		this.pointerSprite.x = -100;
		
		trace(this.keyPositions);
		trace(this.klickPositions);
	}


	
	
	
	/* SETUP */

	public function new() 
	{
		super();	
		addEventListener(Event.ADDED_TO_STAGE, added);
		
		this.nsc = new NoteSoundCalculator();
		this.ncc = new NoteCoordCalculator();
		this.conc = new WavConcatenator();
		this.player = new PlayerFactory();				
		
		this.scoreSprite = new ScoreSprite(null);
		this.addChild(scoreSprite);
		scoreSprite.y = - 40;
		scoreSprite.x = 8;

		this.playButton = new PlayButton();
		this.addChild(playButton);
		
		this.pointerSprite = new Sprite();
		this.addChild(this.pointerSprite);
		this.pointerSprite.graphics.lineStyle(2, 0xFF8800, .5);
		this.pointerSprite.graphics.moveTo(0, 0);
		this.pointerSprite.graphics.lineTo(0, 100);
		this.pointerSprite.x = -100;
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
