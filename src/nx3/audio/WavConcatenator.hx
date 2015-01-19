package nx3.audio;
import cx.ByteArrayTools;
import format.wav.Reader;
import haxe.io.Bytes;
import haxe.io.BytesInput;
import haxe.macro.Format;
import nx3.app.Constants;
//import openfl.Assets;
import flash.utils.ByteArray;
import thx.core.Tuple.Tuple1;
import thx.core.Tuple.Tuple2;

/**
 * ...
 * @author Jonas Nyström
 */
class WavConcatenator
{

	var waves:Map<Int, ByteArray>;
	
	public function new() 
	{
		this.waves = new Map<Int, ByteArray>();
	}
	
	public function getWav(notes:Array<Tuple2<Int, Int>>, bpm:Float = 60):ByteArray
	{
		this.notesToMap(notes);
		var result:ByteArray = new ByteArray();
		
		for (note in notes)
		{
			var midinote = note._0;
			var length = note._1;
			var w = this.waves.get(midinote);
			w.position = 0;
			
			var sw = new ByteArray();
			sw.position = 0;
			var bytesLenght = Std.int((length / Constants.BASE_NOTE_VALUE) * (60 / bpm) * 88200);
			//trace(bytesLenght);
			bytesLenght -= bytesLenght % 4;				
			
			if (Std.int(w.length) < bytesLenght)
			{			
				trace('OOOPS');
				var l = bytesLenght - Std.int(w.length) + 1000000;
				w.position = w.length;
				for (i in 0...l) w.writeByte(0);
			}
			w.readBytes(sw, 0, bytesLenght );
			
			var r:Reader = new Reader(new BytesInput(ByteArrayTools.toBytes(sw)));
			var wave = r.read();
			var wavedata = wave.data;
			result.writeBytes(ByteArrayTools.fromBytes(wavedata));
		}
		
		//trace(result.length);
		
		return result;
	}
	
	private function notesToMap(notes:Array<Tuple2<Int, Int>>)
	{
		for (note in notes)
		{
			var midinote = note._0;
			if (! this.waves.exists(midinote))
			{
				var filename = 'wav/$midinote.data';
				var bytes = Assets.getBytes(filename);
				if (bytes != null) this.waves.set(midinote, bytes);
			}			
		}
	}
	
}