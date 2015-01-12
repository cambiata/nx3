package;

import audiotools.sound.Wav16Sound;
import audiotools.sound.Wav16SoundLoader;
import audiotools.sound.Wav16SoundManager;
import audiotools.utils.Mp3Wav16Decoder;
import audiotools.utils.Wav16DecoderPool;
import audiotools.utils.Wav16PartsBuilder;
import audiotools.Wav16;
import audiotools.Wav16DSP;
import audiotools.Wav16Tools;
import thx.core.Arrays;

import nx3.test.TestItems;

import nx3.EDirectionUAD;
import nx3.ETie;
import nx3.audio.NotenrTools;
import nx3.audio.SoundlengthCalculator;
import nx3.NBar;
import nx3.NHead;
import nx3.NNote;
import nx3.NPart;
import nx3.NScore;
import nx3.NVoice;
import nx3.test.TestItemsBach;
import nx3.audio.NotenrBarsCalculator;
import nx3.audio.NotenrItem;
import nx3.utils.VoiceSplitter;
import tink.core.Future;
using cx.ArrayTools;
using Lambda;

#if js
import audiotools.webaudio.WebAudioTools;
#end

#if flash
import flash.display.Sprite;
import flash.display.StageAlign;
import flash.display.StageScaleMode;
import flash.Lib;
#end

/**
 * ...
 * @author Jonas Nyström
 */

class Main 
{
	var nscore1 :NScore;
	var nscore2 :NScore;
	
	static function main()  {
		new Main();
	}
	
	public  function new() 
	{
		#if flash
		var stage = Lib.current.stage;
		stage.scaleMode = StageScaleMode.NO_SCALE;
		stage.align = StageAlign.TOP_LEFT;
		#end				
		//		
		this.nscore2 = new NScore([
			new NBar([
				new NPart( [new NVoice([
					new NNote([new NHead(0, ETie.Tie(null, 0))]),
					new NNote([new NHead(0, ETie.Tie(null, 0))]),
					//new NNote([new NHead(0)]),
					//new NNote([new NHead(-2), new NHead(0/*, ETie.Tie(null, 0)*/)]),
				])]),
				
				new NPart( [new NVoice([
					new NNote([new NHead(3)]),
					new NNote([new NHead(2, ETie.Tie(null, 0))]),
				])]),
				
			]),
			
			new NBar([
				new NPart( [new NVoice([
					new NNote([new NHead(0, ETie.Tie(null, 0))]),
				])]),
				
				new NPart( [new NVoice([
					new NNote([new NHead(2)]),
				])]),
				
			]),
			
			new NBar([
				new NPart( [new NVoice([
					new NNote([new NHead(0, ETie.Tie(null, 0))]),
				])]),				
				
				new NPart( [new NVoice([
					new NNote([new NHead(3, ETie.Tie(null, 0))]),
				])]),
				
			]),
			new NBar([
				new NPart( [new NVoice([
					new NNote([new NHead(0)]),
				])]),				
				
				new NPart( [new NVoice([
					new NNote([new NHead(3)]),
				])]),
			]),			
		]);
		
		this.nscore1 = TestItemsBach.scoreBachSinfonia4();
		
		setupUI();
	}
	
	function startCallback(filesToload:Int) {
		trace('Start loading $filesToload files...');
	}
	
	function setupUI() {
		
		#if js
			js.Browser.document.getElementById('btn1').addEventListener('click', function(_) {
				Wav16PartsBuilder.getInstance().getScoreWav16Async(this.nscore1, 60).handle(function(wav16) {
					trace('FINISHED nscore1');
					 Wav16SoundManager.getInstance().initSound(wav16, playCallback, nscore1.uuid + '60');
					 Wav16SoundManager.getInstance().start(0);										
				});		 				 
			});
			
			js.Browser.document.getElementById('btn2').addEventListener('click', function(_) {
				Wav16PartsBuilder.getInstance().getScoreWav16Async(this.nscore1, 120).handle(function(wav16) {
					trace('FINISHED nscore1 120');
					 Wav16SoundManager.getInstance().initSound(wav16, playCallback, nscore2.uuid+ '120');
					 Wav16SoundManager.getInstance().start(0);										
				});					 
			});	
			
			js.Browser.document.getElementById('stop').addEventListener('click', function(_) {
				 Wav16SoundManager.getInstance().stop();
			});	
		#end
		
		#if flash
			var b1 = new Sprite();
			Lib.current.addChild(b1);
			b1.graphics.beginFill(0x0000FF);
			b1.graphics.drawRect(10, 10, 70, 30);
			b1.addEventListener(flash.events.MouseEvent.CLICK, function(e) {
				//var w16 = Wav16PartsBuilder.getInstance().getScore(nscore1, 60);
				 //Wav16SoundManager.getInstance().initSound(w16, playCallback, nscore1.uuid);
				 //Wav16SoundManager.getInstance().start(0);					
				Wav16PartsBuilder.getInstance().getScoreWav16Async(this.nscore1, 60).handle(function(wav16) {
					trace('FINISHED nscore1');
					 Wav16SoundManager.getInstance().initSound(wav16, playCallback, nscore1.uuid + '60');
					 Wav16SoundManager.getInstance().start(0);										
				});					 
				 
			});

			var b2 = new Sprite();
			Lib.current.addChild(b2);
			b2.graphics.beginFill(0x0000FF);
			b2.graphics.drawRect(110, 10, 70, 30);
			b2.addEventListener(flash.events.MouseEvent.CLICK, function(e) {
				/*
				var w16 = Wav16PartsBuilder.getInstance().getScore(nscore2, 60);	
				 Wav16SoundManager.getInstance().initSound(w16, playCallback, nscore2.uuid);
				 Wav16SoundManager.getInstance().start(0);				
				 */
				Wav16PartsBuilder.getInstance().getScoreWav16Async(this.nscore1, 120).handle(function(wav16) {
					trace('FINISHED nscore1 120');
					 Wav16SoundManager.getInstance().initSound(wav16, playCallback, nscore2.uuid+ '120');
					 Wav16SoundManager.getInstance().start(0);										
				});					 
				 
			});
			
			var bStop = new Sprite();
			Lib.current.addChild(bStop);
			bStop.graphics.beginFill(0x0000FF);
			bStop.graphics.drawRect(210, 10, 70, 30);
			bStop.addEventListener(flash.events.MouseEvent.CLICK, function(e) {
				 Wav16SoundManager.getInstance().stop();				
			});
		#end
	}
	
	function playCallback(key:String, pos:Float):Void {
		#if js
			js.Browser.document.getElementById('label').textContent = Std.string(pos);
		#end
	}
	
	/*
	static private function createScoreWave(partsnotes:Array<Array<NotenrItem>>, data:Map<String, Wav16>) 
	{
		var full = Wav16.createSecs(NotenrTools.getTotalLength(partsnotes) + 1, true);
		for (part in partsnotes) {
			for (note in part) {				
				if (!note.playable) continue;				
				var key = 'sounds/piano/${note.midinr}.mp3';
				var w = data.get(key);			
				
				if (w != null) {
					var offset = Wav16Tools.toSamples(note.playpos);
					var length = Wav16Tools.toSamples(note.soundlength + 0.1);					
					Wav16DSP.wspMixInto(full, w, offset, length);	
				} else {
					trace('ERROR : $key == null!');
				}
			}
		}		
		
		displayWave(full, 0);		
		Wav16Tools.testplay(full);	
	}
	*/
	
	static function displayWave(wav16:Wav16, index:Int, text:String='') {
		#if flash
		var ws = new audiotools.openfl.ui.WavSprite(wav16, 0, 0, 0xaa0000);
		ws.y = 120 * index + 20; ws.x = 20;
		flash.Lib.current.addChild(ws);			
		#end
		
		#if js
		var par = js.Browser.document.createParagraphElement();
		par.innerHTML = text;				
		js.Browser.document.body.appendChild(par);
		var canvas = js.Browser.document.createCanvasElement();
		canvas.setAttribute('width', '400px');
		canvas.setAttribute('height', '100px');
		js.Browser.document.body.appendChild(canvas);	
		js.Browser.document.body.appendChild(js.Browser.document.createBRElement());						
		audiotools.webaudio.utils.Wav16Canvas.drawWave(canvas, wav16, 400, 100);			
		#end
	}		
	
	#if flash
	static public function graph(partsnotes:Array<Array<NotenrItem>>)
	{		
		var target = Lib.current;		
		var xfactor = 70;
		var yfactor = 5;
		var party =500;
		
		var colors = [0x000088, 0x880000, 0x008800, 0x000088, 0x880000, 0x008800, 0x000088, 0x880000, 0x008800, 0x000088, 0x880000, 0x008800];
		
		var gr = target.graphics;
		var partxtray = 0;
		var partidx = 0;
		for (part in partsnotes) {
			var partcolor = colors.shift();			
			for (note in part) {
				var nx = note.playpos * xfactor;
				
				var ny = party + -(note.midinr * yfactor) + partxtray;
				var nwidth = note.soundlength * xfactor;
				
				var color = (note.playable) ? partcolor : 0xaaaaaa;
				gr.beginFill(color);
				gr.lineStyle(2, color);
				
				gr.drawCircle(nx, ny, 3);
				gr.moveTo(nx, ny);
				gr.lineTo(nx + nwidth, ny);
			}
			partxtray += 3;			
		}
	}
	#end
	
}