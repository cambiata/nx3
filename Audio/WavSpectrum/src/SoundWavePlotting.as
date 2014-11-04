package 
{

	import flash.events.Event;
	import flash.events.ProgressEvent;
	import flash.display.Sprite;
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.media.Sound;
	import flash.net.URLRequest;
	import flash.text.TextField;
	import flash.utils.ByteArray;
	import flash.geom.Point;
	
	import efnx.gfx.Raster;

/**
 *	Application entry point for SoundWavePlotting.
 *
 *	@langversion ActionScript 3.0
 *	@playerversion Flash 9.0
 *
 *	@author Schell Scivally
 *	@since 25.09.2008
 */
public class SoundWavePlotting extends Sprite {
	
	public static const testing:Boolean = false;
	public static const initialised:Boolean = false;
	
	private static const SAMPLE_RATE:Number = 44.1;
	
	private var mp3:Sound = new Sound();
	private var buffer:ByteArray = new ByteArray();
	private var left:Array = new Array();
	private var right:Array = new Array();
	private var field:TextField = new TextField();
	private var lbitmap:Bitmap = new Bitmap();
	private var rbitmap:Bitmap = new Bitmap();
	
	/**
	 *	@constructor
	 */
	public function SoundWavePlotting()
	{
		super();

		stage.frameRate = 30;
		stage.scaleMode = "noScale";
		stage.align = "TL";
		stage.addEventListener("resize", resize, false, 0, true);
	}
	/**
	*	init
	*/
	public function init():void
	{
		mp3.addEventListener("progress", onProgress, false, 0, true);
		mp3.addEventListener("complete", onComplete, false, 0, true);
		mp3.load(new URLRequest('assets/mp3/8. Wizard.mp3'));
		
		trace("SoundWavePlotting::SoundWavePlotting()", stage.stageWidth, stage.stageHeight/4);
		lbitmap.bitmapData = new BitmapData(stage.stageWidth, stage.stageHeight/4, true, 0x00000000);
		rbitmap.bitmapData = new BitmapData(stage.stageWidth, stage.stageHeight/4, true, 0x00000000);
		addChild(lbitmap);
		addChild(rbitmap);
		positionBitmaps();
		
		field.autoSize = "left";
		addChild(field);
	}
	/**
	*	Called as the mp3 is loading.
	*/
	public function onProgress(event:ProgressEvent):void
	{
		field.text = Number(event.bytesLoaded/event.bytesTotal*100).toPrecision(3) + "% loaded.";
	}
	/**
	* Called on the completion of the mp3's loading.
	*/
	public function onComplete(event:Event):void
	{
		mp3.removeEventListener("progress", onProgress);
		mp3.removeEventListener("complete", onComplete);
		field.text = "Load complete.";
		buffer.position = 0;
		mp3.extract(buffer, mp3.length*SAMPLE_RATE, 0);
		seperateChannels();
		drawWaveForm();
	}
	/**
	*	Resize stub.
	*/
	private function resize(event:Event):void
	{
		if(testing) trace( "SoundWavePlotting::resize()" );
		if(!initialised) init();
		positionBitmaps();
	}
	/**
	*	Positions the bitmaps on the stage.
	*/
	public function positionBitmaps():void
	{
		lbitmap.y = stage.stageHeight/2 - lbitmap.height - 20;
		rbitmap.y = stage.stageHeight/2 + 20;
	}
	/**
	*	Seperates the left and right channels
	*/
	public function seperateChannels():void
	{
		trace("SoundWavePlotting::seperateChannels()");
		field.text = "Separating channles.";
		buffer.position = 0;
		while(buffer.bytesAvailable)
		{
			var leftN:Number = buffer.readFloat();
			var rightN:Number = buffer.readFloat();
			left.push(leftN);
			right.push(rightN);
		}
	}
	/**
	*	Draws the waveform.
	*/
	public function drawWaveForm():void
	{
		trace("SoundWavePlotting::drawWaveForm()");
		field.text = "Drawing waveform..."
		var w:int = lbitmap.bitmapData.width;
		var h:int = lbitmap.bitmapData.height;
		var numCondense:int = left.length/w;
		var leftPoints:Point = new Point(1, -1);
		var rightPoints:Point = new Point(1, -1);
		var _x:int = 0;
		lbitmap.bitmapData.lock();
		rbitmap.bitmapData.lock();
		for (var i:int = 0; i < left.length; i++)
		{
			if(i%numCondense == 0) 
			{
				Raster.line(lbitmap.bitmapData, _x, lbitmap.height*(leftPoints.x+1)/2, _x, lbitmap.height*(leftPoints.y+1)/2, 0xFF86F22B);
				lbitmap.bitmapData.setPixel32(_x, lbitmap.height*(leftPoints.x+1)/2, 0xFFFFFFFF);
				lbitmap.bitmapData.setPixel32(_x, lbitmap.height*(leftPoints.y+1)/2, 0xFF999999);
				Raster.line(rbitmap.bitmapData, _x, rbitmap.height*(rightPoints.x+1)/2, _x, rbitmap.height*(rightPoints.y+1)/2, 0xFF4D9FF4);
				rbitmap.bitmapData.setPixel32(_x, rbitmap.height*(rightPoints.x+1)/2, 0xFFFFFFFF);
				rbitmap.bitmapData.setPixel32(_x, rbitmap.height*(rightPoints.y+1)/2, 0xFF999999);
				leftPoints = new Point(1, -1);
				rightPoints = new Point(1, -1);
				_x++;
			}
			leftPoints.x = leftPoints.x < left[i] ? leftPoints.x : left[i];
			leftPoints.y = leftPoints.y > left[i] ? leftPoints.y : left[i];
			rightPoints.x = rightPoints.x < right[i] ? rightPoints.x : left[i];
			rightPoints.y = rightPoints.y > right[i] ? rightPoints.y : left[i];
		}
		lbitmap.bitmapData.unlock();
		rbitmap.bitmapData.unlock();
	}
	
}

}
