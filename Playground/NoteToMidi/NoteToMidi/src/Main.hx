package;

import audio.LinearAccelerator;
import flash.display.Sprite;
import flash.display.StageAlign;
import flash.display.StageScaleMode;
import flash.Lib;
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
/*

*/


/**
 * ...
 * @author Jonas Nyström
 */

class Main 
{
	

	
	static function main() 
	{
		var stage = Lib.current.stage;
		stage.scaleMode = StageScaleMode.NO_SCALE;
		stage.align = StageAlign.TOP_LEFT;
				
		//var nscore = TestItemsBach.scoreBachSinfonia4();
		
		
		var nscore = new NScore([
			new NBar([
				new NPart( [new NVoice([
					new NNote([new NHead(0)]),
					//new NNote([new NHead(1)]),
					//new NNote([new NHead(2)]),
					//new NNote([new NHead(4)]),
				])]),
				new NPart( [new NVoice([
					new NNote([new NHead(0)]),
					new NNote([new NHead(1)]),
					new NNote([new NHead(2)]),
					new NNote([new NHead(4)]),
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
		
		var partsnotes = new NotenrBarsCalculator(new VoiceSplitter(nscore).getVoicesplittedScore()).getPartsNotenrItems();
		
		//var totalLenght = NotenrTools.getTotalLenght(partsnotes);
		
		NotenrTools.calculateSoundLengths(partsnotes);
		graph(partsnotes, Lib.current);
	}
	
	
	
	
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
				//trace([note.midinr, note.partposition, note.position, note.partnr, note.barnr, note.barvalue]);				
				//var nx = (note.partposition + note.position) * xfactor;
				
				var nx = note.playpos * xfactor;
				
				var ny = party + -(note.midinr * yfactor) + partxtray;
				//var nwidth = note.noteval * xfactor;
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
	
}