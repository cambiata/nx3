package ;

import alab.WavClip;
import cx.ByteArrayTools;
import flash.display.Sprite;
import flash.events.Event;
import flash.Lib;
import format.wav.Data.WAVE;
import format.wav.Reader;
import haxe.Http;
import haxe.io.Bytes;
import haxe.io.BytesData;
import haxe.io.BytesInput;
import haxe.macro.Format;
import nx3.audio.PlayerFactory;
import openfl.Assets;
import vault.Sfxr;
import vault.SfxrParams;

/**
 * ...
 * @author Jonas Nyström
 */

class Main extends Sprite 
{
	var inited:Bool;

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
		
	var byteArray:flash.utils.ByteArray = Assets.getBytes('assets/60.data');
	trace(byteArray.length);

	#if html5
	var bytesData = new BytesData();
	for (i in 0...byteArray.length) bytesData.push(byteArray.readByte());	
	var byteArray = bytesData;
	#end	
	
	var pf = new PlayerFactory();
	var play = pf.getPlayFunction(byteArray);				
	play();		
	
	
	/*
	var pf = new PlayerFactory();
	var play = pf.getPlayFunction(byteArray);				
	play();
	*/
	
	//var wc = new WavClip(byteArray);
	
	/*
	var bytes = ByteArrayTools.toBytes(byteArray);
	trace(bytes.length);
	var input = new BytesInput(bytes);
	trace(input.length);
	var reader = new Reader(input);
	var wav:WAVE = reader.read();
	trace(wav.data.length);
	trace(wav.header);
	*/
	
	/*
	var bytesShort = new flash.utils.ByteArray();
	bytesShort.writeBytes(byteArray, 0, 176480);
	var byteArray = bytesShort;
	trace(byteArray.length);
	*/
	//176480

	

	
	
	//trace(Assets.exists('assets/test.data'));  // true
	//var bytearray = Assets.getBytes('assets/test.data');
	//trace(bytearray);  // null
	
	//Assets.loadBytes('assets/test.data', function (ba) {
	//	trace(ba);
	//});
	
	/*
	var arrayBytes = new Array<Int>();
	for (i in 0...byteArray.length) arrayBytes.push(byteArray.readByte());
	var bytes = Bytes.ofData(arrayBytes);	
	*/
	
	
	/*
	var pf = new PlayerFactory();
	  var play = pf.getPlayFunction(data);				
	  */
		 
		 
		 //trace(bytes.length);
		 /*
		 
	  var pf = new PlayerFactory();
	  var play = pf.getPlayFunction(bytes);		 
		 */
		
		 
		 
  /*
    var params = new SfxrParams();

     params.waveType = 1;
     params.squareDuty = 0.55555*0.2;
     params.startFrequency = 0.3 + 0.55555*0.3;
     params.slide = 0; // 0.1 + 0.55555 * 0.2;
     params.attackTime = 0.0;
     params.sustainTime = 0.1 + 0.55555*0.3;
     params.decayTime = 0.1 + 0.55555*0.2;
     params.masterVolume = .5;	
	
   // params = SfxrParams.fromString("0,,0.2193,,0.4748,0.3482,,0.0691,,,,,,0.3482,,,,,1,,,,,0.5");	
	
	var sfxr = new Sfxr(params);
    sfxr.play();

    haxe.Timer.delay(function() {
      trace(1);
      sfxr.play();
    }, 2000);

    haxe.Timer.delay(function() {
      trace(2);
      sfxr.play();
    }, 3000);
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
