import cx.ByteArrayTools;
import cx.FileTools;
import nx3.audio.PlayerFactory;
import vault.Sfxr;
import vault.SfxrParams;


#if (cpp || neko)
import flash.utils.ByteArray;
#end

class SfxrTest {
  static function main() {
    // new SfxrTest();
    var params = new SfxrParams();

     params.waveType = 1;
     params.squareDuty = 0.55555*0.2;
     params.startFrequency = 0.3 + 0.55555*0.3;
     params.slide = 0; // 0.1 + 0.55555 * 0.2;
     params.attackTime = 0.0;
     params.sustainTime = 0.1 + 0.55555*0.3;
     params.decayTime = 0.1 + 0.55555*0.2;
     params.masterVolume = .5;

    // taken from as3sfxr:
   // params = SfxrParams.fromString("0,,0.2193,,0.4748,0.3482,,0.0691,,,,,,0.3482,,,,,1,,,,,0.5");
  
   var bytes = FileTools.getBytes('test2.wav');
   var bytearray = ByteArrayTools.fromBytes(bytes);
   trace(bytearray.length);
   var bytearray2:ByteArray = new ByteArray();
   bytearray.readBytes(bytearray2, 1000, bytearray.length-10000);
	trace(bytearray2.length);
  var pf = new PlayerFactory();
  var play = pf.getPlayFunction(bytearray2);
  play();
  
   
   
	/*
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
}

