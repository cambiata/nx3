package cx.mp3.decoder;
import cx.mp3.data.MPEGFrame;

/**
 * Decoder
 * @author Jonas Nyström
 */
class Decoder 
{

		var l3decoder:LayerIIIDecoder;
		
		var output:OutputBuffer;
		
		public function Decoder(output_buffer:OutputBuffer) {
			trace('Decoder');
			output = output_buffer;
		}
		
		public function getOutput():OutputBuffer {
			return output;
		}
		
		public function decodeFrame(frame:MPEGFrame):Void {
			retrieveDecoder(frame).decodeFrame(frame);
		}
		
		function retrieveDecoder(frame:MPEGFrame):IFrameDecoder {
			var decoder:IFrameDecoder;
			switch(frame.layer) {
				case MPEGFrame.MPEG_LAYER_III:
					if (l3decoder == null) {
						l3decoder = new LayerIIIDecoder(output);
					}
					decoder = l3decoder;
					break;
				default:
					throw(new Error("Unsupported MPEG Layer: " + frame.layer));
			}
			return decoder;
		}
	
}