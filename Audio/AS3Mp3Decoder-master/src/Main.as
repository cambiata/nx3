package 
{
	import com.codeazur.as3icy.decoder.Decoder;
	import com.codeazur.as3icy.decoder.OutputBuffer;
	import com.codeazur.as3icy.ICYDecoder;
	import com.codeazur.as3icy.ICYHandler;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.events.MouseEvent;
	import flash.events.ProgressEvent;
	import flash.events.SampleDataEvent;
	import flash.media.Sound;
	import flash.net.FileReference;
	import flash.net.URLLoader;
	import flash.net.URLLoaderDataFormat;
	import flash.net.URLRequest;
	import flash.text.TextField;
	import flash.utils.ByteArray;
	
	/**
	 * ...
	 * @author Jonas Nyström
	 */
	public class Main extends Sprite 
	{
		private var icyDecoder:ICYDecoder;
		
		public function Main():void 
		{
			if (stage) init();
			else addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		private function init(e:Event = null):void 
		{
			removeEventListener(Event.ADDED_TO_STAGE, init);
			
			var t:TextField = new TextField();
			this.addChild(t);
			
			// Create and init a ICYDecoder
			
			icyDecoder = new ICYDecoder();			
			icyDecoder.addEventListener(ProgressEvent.PROGRESS, function(e:ProgressEvent):void {
					t.text = icyDecoder.xBuffer.length + ' - ' + String(e.bytesLoaded / e.bytesTotal);
			});
			icyDecoder.addEventListener(Event.COMPLETE, function(e:Event):void { 
					t.text = 'Decoding complete!';
			} );
			
			// Load a mp3 file as ByteArray, feed the decoder and start processing
			
			var ul:URLLoader = new URLLoader();
			ul.dataFormat = URLLoaderDataFormat.BINARY;
			ul.addEventListener(Event.COMPLETE, function(e:Event):void {
				trace('loaded');
				icyDecoder.loadBytes(URLLoader(e.target).data);
				
				icyDecoder.startProcessingByEnterFrame();
				
				//icyDecoder.startProcessingByLoop();
				
			});
			ul.load(new URLRequest('test.mp3'));
			
			// Create a sound object for playback, and set its sampledatahandler to 
			// ICYHandler, that's populated with the decoder data
				
			var testSound:Sound = new Sound();
			var icyHandler:ICYHandler = new ICYHandler(icyDecoder);				
			testSound.addEventListener(SampleDataEvent.SAMPLE_DATA, icyHandler.sampleDataHandler);
			
			// Click on stage to start playback
			
			this.stage.addEventListener(MouseEvent.MOUSE_DOWN, function(e:Event):void {
				trace('Start playback...');
				testSound.play();
			});
			
		}
		
	}
	

	}