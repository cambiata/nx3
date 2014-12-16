package;

import audiotools.utils.Mp3Wav16Decoders;
import audiotools.Wav16;
import audiotools.Wav16DSP;
import audiotools.Wav16Tools;



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
		
		var nscore = TestItemsBach.scoreBachSinfonia4();
		
		/*
		var nscore = new NScore([
			new NBar([
				new NPart( [new NVoice([
					new NNote([new NHead(0)]),
					new NNote([new NHead(1)]),
					new NNote([new NHead(2)]),
					new NNote([new NHead(4)]),
				])]),
				new NPart( [new NVoice([
					new NNote([new NHead(-2)]),
					new NNote([new NHead(-2)]),
					new NNote([new NHead(-2)]),
					new NNote([new NHead(-2)]),
				])]),
			]),
			new NBar([
				new NPart( [new NVoice([
					new NNote([new NHead(0)]),
					new NNote([new NHead(1)]),
					new NNote([new NHead(2)]),
					new NNote([new NHead(4)]),
				])]),
				new NPart( [new NVoice([
					new NNote([new NHead(0)]),
					new NNote([new NHead(1)]),
					new NNote([new NHead(2)]),
					new NNote([new NHead(4)]),
				])]),
			]),

		]);
		*/
		
		var partsnotes:Array<Array<NotenrItem>> = new NotenrBarsCalculator(new VoiceSplitter(nscore).getVoicesplittedScore()).getPartsNotenrItems();
		
		//var totalLenght = NotenrTools.getTotalLenght(partsnotes);
		
		NotenrTools.calculateSoundLengths(partsnotes, 60);
		NotenrTools.getTotalLength(partsnotes);
		//graph(partsnotes, Lib.current);
		
		var mp3start = 48;
		var mp3end = 95;		
		var files = [for (i in mp3start...mp3end+1) i].map(function(i) return 'piano/$i.mp3');
		var decoders = new Mp3Wav16Decoders(files);
		decoders.allDecoded = function(data:Map<String,Wav16>) {
			trace('all decoded');			
			createScoreWave(partsnotes, data);
		};
		decoders.decodeAll();		
	}
	
	static private function createScoreWave(partsnotes:Array<Array<NotenrItem>>, data:Map<String, Wav16>) 
	{
		var full = Wav16.createSecs(NotenrTools.getTotalLength(partsnotes) + .1, true);
		for (part in partsnotes) {
			for (note in part) {				
				if (!note.playable) continue;				
				var key = 'piano/${note.midinr}.mp3';
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
	
	
	/*
	static public function graph(partsnotes:Array<Array<NotenrItem>>, target:Sprite)
	{		
		var xfactor = 70;
		var yfactor = 5;
		var party =500;
		
		var colors = [0x000088, 0x880000, 0x008800, 0x000088, 0x880000, 0x008800, 0x000088, 0x880000, 0x008800, 0x000088, 0x880000, 0x008800];
		
		var gr = target.graphics;
		var partxtray = 0;
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
	*/
	
}