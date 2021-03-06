package;

import audiotools.utils.Mp3Wav16Decoder;
import audiotools.Wav16;
import audiotools.Wav16DSP;
import audiotools.Wav16Tools;
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
using cx.ArrayTools;

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
	static function main() 
	{
		#if flash
		var stage = Lib.current.stage;
		stage.scaleMode = StageScaleMode.NO_SCALE;
		stage.align = StageAlign.TOP_LEFT;
		#end				
		//		
		var nscore = new NScore([
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
		
		var nscore = TestItemsBach.scoreBachSinfonia4();
		
		var partsnotes:PartsNotenrItems = new NotenrBarsCalculator(new VoiceSplitter(nscore.nbars).getVoicesplittedNBars()).getPartsNotenrItems();
		
		NotenrTools.calculateSoundLengths(partsnotes, 60);		
		NotenrTools.debug(partsnotes);		
		
		
		var partsnotes = NotenrTools.resolveTies(partsnotes);	
		
		NotenrTools.debug(partsnotes);
		#if flash graph(partsnotes); #end
		
		var mp3start = 48;
		var mp3end = 95;		
		var files = [for (i in mp3start...mp3end + 1) i].map(function(i) return 'sounds/piano/$i.mp3');
		
		#if js 
		Mp3Wav16Decoders.setContext(WebAudioTools.getAudioContext());
		#end
		
		Mp3Wav16Decoders.decodeAllMap(files).handle(function(data) {
			trace('all decoded');			
			createScoreWave(partsnotes, data);
		});
	}
	
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