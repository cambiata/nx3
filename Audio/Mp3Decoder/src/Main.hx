package ;

import com.codeazur.as3icy.ICYDecoder;
import com.codeazur.as3icy.ICYHandler;
import cx.ByteArrayTools;
import cx.FileTools;
import flash.display.Sprite;
import flash.events.Event;
import flash.events.MouseEvent;
import flash.events.ProgressEvent;
import flash.events.SampleDataEvent;
import flash.Lib;
import flash.media.Sound;
import flash.net.URLLoader;
import flash.net.URLLoaderDataFormat;
import flash.net.URLRequest;
import flash.utils.ByteArray;
import openfl.Assets;

/**
 * ...
 * @author Jonas Nyström
 */

class Main extends Sprite 
{
	var inited:Bool;
	var icyDecoder:ICYDecoder;

	static var MP3_FILENAME = 'test.mp3';
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

		// (your code here)
		
		// Stage:
		// stage.stageWidth x stage.stageHeight @ stage.dpiScale
		
		// Assets:
		// nme.Assets.getBitmapData("img/assetname.jpg");
		
		icyDecoder = new ICYDecoder();
			icyDecoder.addEventListener(ProgressEvent.PROGRESS, function(e:ProgressEvent):Void {
					trace(icyDecoder.xBuffer.length + ' - ' + Std.string(e.bytesLoaded / e.bytesTotal));
			});
			icyDecoder.addEventListener(Event.COMPLETE, function(e:Event):Void { 
					trace('Decoding complete!');
			} );		

			#if flash
			var ul:URLLoader = new URLLoader();
			ul.dataFormat = URLLoaderDataFormat.BINARY;
			ul.addEventListener(Event.COMPLETE, function(e:Event):Void{
				trace('loaded');
				var ba:ByteArray = cast(e.target, URLLoader).data;
				
				icyDecoder.loadBytes(ba);
				
				trace(ba.length);
				trace(icyDecoder.sampleBuffer.length);
				icyDecoder.startProcessingByEnterFrame();
				//icyDecoder.startProcessingByLoop();
				trace(icyDecoder.sampleBuffer.length);
				
			
				
			});
			ul.load(new URLRequest(MP3_FILENAME));
			
			var testSound:Sound = new Sound();
			var icyHandler:ICYHandler = new ICYHandler(icyDecoder);				
			testSound.addEventListener(SampleDataEvent.SAMPLE_DATA, icyHandler.sampleDataHandler);
			
			// Click on stage to start playback
			this.stage.addEventListener(MouseEvent.MOUSE_DOWN, function(e:Event):Void {
				trace('Start playback...');
				
				icyDecoder.sampleBuffer.position = 0;
				var sb:ByteArray = icyDecoder.sampleBuffer;
				sb.position = 0;
				for (x in 0...200) trace(sb.readFloat());					
				
				testSound.play();
			});			
			
			
			
			
			
			
			
			#end
			
			#if (neko || cpp)
			var ba = Assets.getBytes('assets/' + MP3_FILENAME);
			trace(ba.length);
			icyDecoder.loadBytes(ba);
			//icyDecoder.startProcessingByEnterFrame();
			icyDecoder.startProcessingByLoop();
			trace(icyDecoder.sampleBuffer.length);
			
			
			icyDecoder.sampleBuffer.position = 0;
			var sb:ByteArray = icyDecoder.sampleBuffer;
			sb.position = 0;
			for (x in 0...200) trace(sb.readFloat());			
			sb.position = 0;
			FileTools.saveBytes(MP3_FILENAME+'.data', ByteArrayTools.toBytes(sb));

			#end
			
			/*
			icyDecoder.sampleBuffer.position = 0;
			var sb:ByteArray = icyDecoder.sampleBuffer;
			sb.position = 0;
			for (x in 0...8) trace(sb.readFloat());
			*/

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
