package nx3.audio;

/**
 * ...
 * @author Jonas Nyström
 */

 #if flash
typedef ByteArray = haxe.io.BytesData;
#end

#if (cpp || neko)
import flash.utils.ByteArray;
#end

#if (js || html || html5)
import js.html.ArrayBuffer;
import js.html.Uint8Array;
typedef ByteArray = haxe.io.BytesData;
#end
 
 
class PlayerFactory
{
	public function new() 
	{

	}
	
	public function getPlayFunction(wave: ByteArray): Void->Void
	{
		return this.makePlayer(wave);
	}
	
	
#if (cpp || neko)
	  function makePlayer(wave: ByteArray): Void -> Void {
		var wav_freq = 44100;
		var wav_bits = 16;
		var stereo = false;
		var file = new ByteArray();
		file.endian = flash.utils.Endian.LITTLE_ENDIAN;
		file.writeUTFBytes("RIFF");
		file.writeInt(0);
		file.writeUTFBytes("WAVE");

		file.writeUTFBytes("fmt ");
		file.writeInt(16); // chunk size
		file.writeShort(1); // compression code = PCM
		var channels = stereo ? 2 : 1;
		file.writeShort(channels); // channels (mono/stereo)
		file.writeInt(wav_freq); // sample rate
		var bps  = wav_freq * channels * Std.int(wav_bits/8);
		file.writeInt(bps); // bytes/sec
		var align = channels * Std.int(wav_bits/8);
		file.writeShort(align); // block align
		file.writeShort(wav_bits); // bits per sample

		file.writeUTFBytes("data");
		var size = 0;
		file.writeInt(wave.length); // chunk size
		file.writeBytes(wave, 0, wave.length);

		file.position = 0;

		var s = new flash.media.Sound();
		s.loadCompressedDataFromByteArray(file, file.length);
		return function() {
		  s.play();
		};

		// write data
		// var f = sys.io.File.write("test.wav", true);
		// f.writeBytes(file, 0, file.length);
		// f.close();
	  }
	#end	
		
	#if (js || html || html5)
	  static var html5AudioContext = null;
	  function makePlayer(wave: ByteArray): Void -> Void {
		var wav_freq = 44100;
		var wav_bits = 16;
		var stereo = false;

		// All WAVE headers have 44 bytes up to the data.
		var buffer = new ArrayBuffer(44 + wave.length);
		var bv = new Uint8Array(buffer);
		var p = 0;

		var writeString = function(s: String) {
		  for (i in 0...s.length) {
			bv[p++] = StringTools.fastCodeAt(s, i);
		  }
		};

		var writeShort = function(s: Int) {
		  bv[p++] = s & 0xFF;
		  bv[p++] = (s >> 8) & 0xFF;
		}

		var writeLong = function(s: Int) {
		  bv[p++] = s & 0xFF;
		  bv[p++] = (s >> 8) & 0xFF;
		  bv[p++] = (s >> 16) & 0xFF;
		  bv[p++] = (s >> 24) & 0xFF;
		}

		writeString("RIFF");
		writeLong(0);
		writeString("WAVE");
		writeString("fmt ");
		writeLong(16);
		writeShort(1); // compression code = PCM

		var channels = stereo ? 2 : 1;
		writeShort(channels); // channels (mono/stereo)
		writeLong(wav_freq); // sample rate
		var bps  = wav_freq * channels * Std.int(wav_bits/8);
		writeLong(bps); // bytes/sec
		var align = channels * Std.int(wav_bits/8);
		writeShort(align); // block align
		writeShort(wav_bits); // bits per sample

		writeString("data");
		writeLong(wave.length); // chunk size
		bv.set(wave, p);

		// Data is all set. Time to call AudioContext.
		var audioBuffer = null;
		var wantsToPlay = false;

		if (html5AudioContext == null) 
		{
			var creator = untyped __js__("window.webkitAudioContext || window.AudioContext || null");
			if (creator == null) return function() {};
			html5AudioContext = untyped __js__("new creator();");
		}
		
		var play = function() 
		{
			  if (audioBuffer == null) {
				wantsToPlay = true;
				return;
			  }
			  var srcAudio = html5AudioContext.createBufferSource();
			  srcAudio.buffer = audioBuffer;
			  
			  srcAudio.connect(html5AudioContext.destination);
			  srcAudio.loop = false;
			  srcAudio.start(0);
			  var currentTime = html5AudioContext.currentTime;
			  trace(currentTime);		  
		};
		
		untyped html5AudioContext.decodeAudioData(buffer, function(b) {
		audioBuffer = b;
		 if (wantsToPlay) {
			play();
		  }
		});
		
		return play;
		
	  }
	#end


	#if flash
	  // based on BadSector's DynSound.hx
	  function makePlayer(wave: ByteArray): Void -> Void {
		var rate = 3;
		var is16bits = 1;
		var stereo = 0;

		var swf: ByteArray = new ByteArray();
		swf.endian = flash.utils.Endian.LITTLE_ENDIAN;

		var writeTagInfo = function(code: Int, len: Int) {
		  if (len >= 63) {
			swf.writeShort ((code << 6) | 0x3F);
			swf.writeInt (len);
		  } else {
			swf.writeShort ((code << 6) | len);
		  }
		};

		swf.writeByte(0x46);  // 'SWF' signature
		swf.writeByte(0x57);
		swf.writeByte(0x53);
		swf.writeByte(0x07);  // version
		swf.writeUnsignedInt(0);  // filesize (will be set later)
		swf.writeByte(0x78);  // area size
		swf.writeByte(0x00);
		swf.writeByte(0x05);
		swf.writeByte(0x5F);
		swf.writeByte(0x00);
		swf.writeByte(0x00);
		swf.writeByte(0x0F);
		swf.writeByte(0xA0);
		swf.writeByte(0x00);
		swf.writeByte(0x00);  // framerate (12fps)
		swf.writeByte(0x0C);

		swf.writeShort(1);  // one frame
		// DefineSound tag
		writeTagInfo(14, 2 + 1 + 4 + wave.length);
		swf.writeShort(1);  // sound (character) ID

		swf.writeByte((3 << 4) + (rate << 2) + (is16bits << 1) + stereo);
		// sound format bits:
		//  7654   32    1      0
		// format rate 16bit stereo
		swf.writeUnsignedInt(wave.length >> (is16bits + stereo)); // sample count
		swf.writeBytes(wave);  // data

		// StartSound tag
		writeTagInfo(15, 2 + 1);
		swf.writeShort(1);  // character id of the sound
		swf.writeByte(0);  // SOUNDINFO flags (all 0)

		// End tag
		writeTagInfo(0, 0);

		// Set size
		swf.position = 4;
		swf.writeUnsignedInt(swf.length);
		swf.position = 0;

		// load it
		return function() {
		  var ldr = new flash.display.Loader();
		  ldr.loadBytes (swf);
		};
	  }
	#end
	
}