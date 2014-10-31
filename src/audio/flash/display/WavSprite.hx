package audio.flash.display;

import cx.flash.Handlesprite;
import format.wav.Reader;
import format.wav.Data;
import cx.ByteArrayTools;
import haxe.io.Bytes;
import haxe.io.BytesInput;
import openfl.display.Sprite;
import openfl.Lib;
import openfl.utils.ByteArray;
import audio.WavTools;

/**
 * WavSprite
 * @author Jonas Nyström
 */
class WavSprite extends Handlesprite
{
	var wavHeader:WAVEHeader;
	//var wavData:Bytes;
	var leftInts:Array<Int>;
	var rightInts:Array<Int>;
	var graphSamplesLeft:Array<Float>;
	var graphSamplesRight:Array<Float>;
	var stereo:Bool;
	
	public function new(wavfile:ByteArray)
	{
		
		var wavFile:WAVE = new Reader(new BytesInput(ByteArrayTools.toBytes(wavfile))).read();
		
		this.wavHeader = wavFile.header;	
		this.stereo = !(this.wavHeader.channels == 1);		
		trace(this.wavHeader.channels);
		
		if (stereo) {			
			var ints = WavTools.stereo16bitToInts(wavFile.data);		
			this.leftInts = ints[0];		
			this.rightInts = ints[1];
			this.graphSamplesLeft = WavTools.getWaveformSamples(leftInts, 1000);
			this.graphSamplesRight = WavTools.getWaveformSamples(rightInts, 1000);
		} else {
			this.leftInts = WavTools.mono16bitToInts(wavFile.data);
			this.graphSamplesLeft = WavTools.getWaveformSamples(leftInts, 1000);
		}
		
		 super();
		
			
	}
	
	override private function _repaint(x:Float, y:Float, width:Float, height:Float, background:Sprite ) {
		var gr = background.graphics;
		gr.clear();
		
		gr.lineStyle(0, 0);
		gr.beginFill(0x0000ff, 0.1);
		//gr.drawRect(x, y, width, height);
		gr.drawRoundRect(x, y, width , height, 8);
		
		
		var _y =  height / 2;
		var _x = 0;
		gr.lineStyle(1, 0x555555);
		gr.moveTo(_x, _y);
		gr.lineTo(_x + width, _y);
		
		if (width > this.graphSamplesLeft.length) {
			this.graphSamplesLeft = WavTools.getWaveformSamples(leftInts, Math.floor(width + 500));
			if (stereo) this.graphSamplesRight = WavTools.getWaveformSamples(rightInts, Math.floor(width + 500));
		}
		
		var maxlevel = height / 2;				
		var incr:Float =  this.graphSamplesLeft.length / width;		
		if (stereo)
		{
			gr.lineStyle(1, 0x333333);
			var incrPos:Float = 0;		
			var _width = Std.int(width);
			for (_x in 0..._width)
			{
				var samplepos = Math.round(incrPos);
				var sampleLeft = this.graphSamplesLeft[samplepos];
				gr.moveTo(_x, _y);
				gr.lineTo(_x, _y - (maxlevel * sampleLeft));
				incrPos += incr;
			}
			
			gr.lineStyle(1, 0x000000);
			var incrPos:Float = 0;
			for (_x in 0..._width)
			{
				var samplepos = Math.round(incrPos);
				var sampleRight = this.graphSamplesRight[samplepos];
				gr.moveTo(_x, _y);
				gr.lineTo(_x, _y + (maxlevel * sampleRight));
				incrPos += incr;
			}			
			
		} else {
			
			gr.lineStyle(1, 0x000000);
			var incrPos:Float = 0;		
			var _width = Std.int(width);
			for (_x in 0..._width)
			{
				var samplepos = Math.round(incrPos);
				var sampleLeft = this.graphSamplesLeft[samplepos];
				var length = maxlevel * sampleLeft;
				gr.moveTo(_x, _y - length);
				gr.lineTo(_x, _y + length);
				incrPos += incr;
			}			
		}
		
	}
}
