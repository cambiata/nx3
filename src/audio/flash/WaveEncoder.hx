package audio.flash;
import flash.utils.ByteArray;
import flash.utils.Endian;

/**
 * WaveEncoder
 * @author 
 */
class WaveEncoder 
{
		private static var RIFF:String = "RIFF";	
		private static var WAVE:String = "WAVE";	
		private static var FMT:String = "fmt ";	
		private static var DATA:String = "data";	
		private var _bytes:ByteArray = new ByteArray();
		private var _buffer:ByteArray = new ByteArray();
		private var _volume:Float;
	
		public function new( volume:Float=1 )
		{
			this._volume = volume;
		}
	
		public function encode( samples:ByteArray, channels:Int=2, bits:Int=16, rate:Int=44100 ):ByteArray
		{
			var data:ByteArray = create( samples );
			
			_bytes.length = 0;
			_bytes.endian = Endian.LITTLE_ENDIAN;
			
			_bytes.writeUTFBytes( WaveEncoder.RIFF );
			_bytes.writeInt( uint( data.length + 44 ) );
			_bytes.writeUTFBytes( WaveEncoder.WAVE );
			_bytes.writeUTFBytes( WaveEncoder.FMT );
			_bytes.writeInt( uint( 16 ) );
			_bytes.writeShort( uint( 1 ) );
			_bytes.writeShort( channels );
			_bytes.writeInt( rate );
			_bytes.writeInt( uint( rate * channels * ( bits >> 3 ) ) );
			_bytes.writeShort( uint( channels * ( bits >> 3 ) ) );
			_bytes.writeShort( bits );
			_bytes.writeUTFBytes( WaveEncoder.DATA );
			_bytes.writeInt( data.length );
			_bytes.writeBytes( data );
			_bytes.position = 0;
			
			return _bytes;
		}
				
		private function uint( val:Int):Int return val;
		
		private function create( bytes:ByteArray ):ByteArray
		{
			_buffer.endian = Endian.LITTLE_ENDIAN;
			_buffer.length = 0;
			bytes.position = 0;
			
			while( bytes.bytesAvailable > 0 ) 
				_buffer.writeShort( Std.int(bytes.readFloat() * (0x7fff * _volume) ));
			return _buffer;
			
			
			
		}		
		
		
}