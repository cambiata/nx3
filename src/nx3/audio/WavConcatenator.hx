package nx3.audio;
import haxe.io.Bytes;
import nx3.Constants;
import openfl.Assets;
import openfl.utils.ByteArray;
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
			var bytesLenght = Std.int((length / Constants.BASE_NOTE_VALUE) * (60 / bpm) * 100000);
			bytesLenght -= bytesLenght % 4;	
			
			/*
			if (w.length < bytesLenght)
			{			
				trace('OOOPS');	
			}
			*/
			w.readBytes(sw, 0, bytesLenght);
			sw.position = 0;
			
			result.writeBytes(sw);
			
			//result.writeBytes(w);
			//trace(result.length);
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