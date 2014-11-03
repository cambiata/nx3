package audio.flash.display;


import audio.Wav16Ints;
import cx.flash.ResizeSprite;
import format.wav.Reader;
import format.wav.Data;
import cx.ByteArrayTools;
import haxe.io.Bytes;
import haxe.io.BytesInput;
import haxe.macro.Format;
import openfl.display.Sprite;
import openfl.Lib;
import openfl.utils.ByteArray;
import audio.WavTools;

/**
 * WavSprite
 * @author Jonas Nyström
 */
class Wav16IntsSprite extends ResizeSprite
{
	var leftInts:Wav16Ints;
	var rightInts:Wav16Ints;
	var graphSamplesLeft:Array<Float>;
	var graphSamplesRight:Array<Float>;
	var stereo:Bool;
	var xScaleToWave:Bool;
	public var scaling(default, set):Float;
	
	var _scaling:Float = 100.0;
	function set_scaling(val:Float) :Float
	{
		this._scaling = val;
		this._width = this.getScaleWidth(this._scaling);
		this._draw();
		return this._scaling;
	}
	
	public function new(leftInts:Wav16Ints, rightInts:Wav16Ints=null, xScaleToWave:Bool=false, scaling:Float=100.0)
	{		
		this._scaling = scaling;
		this.init(leftInts, rightInts);
		var scaleWidth = (xScaleToWave) ? this.getScaleWidth(this._scaling) : 100;
		 super(100, 100, scaleWidth, 100);
	}
	
	public function init(leftInts:Wav16Ints, rightInts:Wav16Ints)
	{
		this.stereo = (rightInts != null);						
		this.leftInts = leftInts;		
		this.rightInts = rightInts;		
		this.graphSamplesLeft = WavTools.getWaveformSamples(leftInts, 1000);
		if (stereo) this.graphSamplesRight = WavTools.getWaveformSamples(rightInts, 1000);
	}
	
	
	static var LINEWIDTH:Float = 2;
	
	override public function draw(width:Float, height:Float, background:Sprite ) {
		var gr = background.graphics;
		gr.clear();
		
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
			gr.lineStyle(LINEWIDTH, 0x333333);
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
			
			gr.lineStyle(LINEWIDTH, 0x000000);
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
			gr.lineStyle(LINEWIDTH, 0x000000);
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
	
	function getScaleWidth(scale:Float = 100.0)
	{
		return this.leftInts.length / 100;		
	}
	
	public function getInts():Array<Wav16Ints>
	{
		if (stereo) return [this.leftInts, this.rightInts];
		return [this.leftInts];
	}
	
	public function getStereo():Bool return this.stereo;
}
