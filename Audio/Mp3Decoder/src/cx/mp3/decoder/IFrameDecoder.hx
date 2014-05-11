package cx.mp3.decoder;
import cx.mp3.data.MPEGFrame;

/**
 * IFrameDecoder
 * @author Jonas Nyström
 */
interface IFrameDecoder 
{

	function decodeFrame(frame:MPEGFrame):Void;
}