package ;

import cx.ByteArrayTools;
import flash.display.Sprite;
import flash.events.Event;
import flash.Lib;
import flash.utils.Endian;
import haxe.Http;
import haxe.io.Bytes;
import haxe.io.BytesData;
import nx3.audio.PlayerFactory;
import openfl.Assets;
import vault.Sfxr;
import vault.SfxrParams;

/**
 * ...
 * @author Jonas Nyström
 */

 
 //@:file("assets/test.data") class TestData extends flash.utils.ByteArray {}
 
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

		//var b = TestData.
		// (your code here)
		
		//var bytes = TestData
		
		//var bytes = new TestData(123, 1);
		
		// Stage:
		// stage.stageWidth x stage.stageHeight @ stage.dpiScale
		
		// Assets:
		// nme.Assets.getBitmapData("img/assetname.jpg");
		

		
		

	Assets.loadBytes('assets/test.data',  function (ba:flash.utils.ByteArray) {			
			trace(ba.length); // 96 in flash/native - 104 in html5
			
			var str = '';
			for (i in 0...ba.length)
			str += Std.string(ba.readByte()) + ', ';
			trace(str);
			
			
			/*
			
			var arrayBytes = new BytesData();
			for (i in 0...ba.length) 
			{
				arrayBytes.push(ba.readByte());							
			}
			
			var pf = new PlayerFactory();
			var play = pf.getPlayFunction(arrayBytes);					
			play();
			*/
			
		} );
	
	//trace(byteArray);
	//trace(Assets.exists('assets/test.data'));  // true
	//var bytearray = Assets.getBytes('assets/test.data');
	//var bytearray = Assets.getText('assets/test.txt');
	//trace(bytearray);  // null
	
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
      //trace(1);
      sfxr.play();
    }, 2000);

    haxe.Timer.delay(function() {
      //trace(2);
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
