package cx.mp3;
import cx.mp3.data.MPEGFrame;
import cx.mp3.decoder.Decoder;
import cx.mp3.decoder.OutputBuffer;
import flash.display.Shape;
import flash.display.Sprite;
import flash.events.Event;
import flash.events.EventDispatcher;
import flash.events.ProgressEvent;
import flash.events.SampleDataEvent;
import flash.events.TimerEvent;
import flash.utils.ByteArray;
import flash.utils.Timer;
import flash.Vector.Vector;

/**
 * ICYDecoder
 * @author Jonas Nyström
 */
class ICYDecoder extends EventDispatcher 
{

	public var sampleBuffer:ByteArray;
	public var xBuffer:ByteArray;
	
	private var _mpegFrame:MPEGFrame;
	private var _headerIndex:UInt = 0;
	private var _crcIndex:UInt = 0;
	private var _icyMetaSize:UInt = 0;
	private var _icyMetaInterval:UInt = 0;
	private var _readFunc:Void->Bool; // = null; /* readIdle*/;
	private var _readFuncContinue:Void->Bool;
	private var _read:UInt = 0;
	private var _frameDataTmp:ByteArray;
	private var _decoder:Decoder;
	private var _bytesSource:ByteArray; 
	private var _bytesLength:Int;
	private var _shape:Shape;	
	
	
	public function new() 
	{
			trace('ICYDecoder');		

			_shape = new Shape();
			_decoder = new Decoder(new OutputBuffer());

			_read = 0;
			_frameDataTmp = null;
			_readFunc = readFrameHeader;			
			
			sampleBuffer = new ByteArray();			
			xBuffer = new ByteArray();

	}
	
	public function loadBytes(bytes:ByteArray )
	{			
		_bytesSource = bytes;
		_bytesLength = bytes.length;
	}
	
	public function startProcessingByEnterFrame():Void {
		_shape.addEventListener(Event.ENTER_FRAME, enterFrameHandler);
	}
	
	
	private function enterFrameHandler(e:Event):Void {
		_shape.removeEventListener(Event.ENTER_FRAME, enterFrameHandler);
		
		processMpegFrame();
		
		this.dispatchEvent(new ProgressEvent(ProgressEvent.PROGRESS, false, false, _bytesSource.position, _bytesLength));
		if (_bytesSource.position < _bytesSource.length) {
			_shape.addEventListener(Event.ENTER_FRAME, enterFrameHandler);
		} else {
			this.dispatchEvent(new Event(Event.COMPLETE));
		}
	}	

	public function startProcessingByLoop():Void {
		trace('start');
		while (_bytesSource.position < _bytesSource.length) {
			processMpegFrame();
		}
		trace('finish');
	}
	
	
	
	
	public function processMpegFrame():Void {			
		do {
			_mpegFrame = new MPEGFrame();
			_readFunc = readFrameHeader;
			while (_readFunc() == true) { };
		} while (sampleBuffer.length < ICYConst.SAMPLE_DATA_BYTES * 2);
	}		
	
	
	
	
	
	
	
	
	
	
	
	private function readFrameHeader():Bool{
		var ret:Bool= true;
		if (_bytesSource.bytesAvailable >= 1) {
			if (_icyMetaInterval > 0 && ++_read > _icyMetaInterval) {
				_readFuncContinue = readFrameHeader;
				_readFunc = readMetaDataSize;
				return ret;
			}
			try {
				_mpegFrame.setHeaderByteAt(_headerIndex, _bytesSource.readUnsignedByte());
				if (++_headerIndex == 4) {
					
					_readFunc = _mpegFrame.hasCRC ? readCRC : readFrame;
					_headerIndex = 0;
				}
			}
			catch (e:Dynamic) {
				//trace(e.message);
				_headerIndex = 0;
			}
		} else {
			ret = false;
		}
		return ret;
	}	
	
	private function readFrame():Bool {
		var ret:Bool = true;
		var readTmp:UInt = _read;
		
		var len:UInt = _mpegFrame.size;
		
		if (_icyMetaInterval > 0) {
			if (_frameDataTmp != null) {
				len -= _frameDataTmp.length;
			}
			_read += len;
			if (_read >= _icyMetaInterval) {
				len -= (_read - _icyMetaInterval);
				if (len == 0) {
					_read = readTmp;
					_frameDataTmp = frameData;
					_readFuncContinue = readFrame;
					_readFunc = readMetaDataSize;
					return ret;
				}
			}
		}			
		
		if (_bytesSource.bytesAvailable >= len) {
			var frameData:ByteArray = new ByteArray();
			if (_icyMetaInterval > 0 && _frameDataTmp != null) {
				_bytesSource.readBytes(_frameDataTmp, _frameDataTmp.length, len);
				frameData = _frameDataTmp;
			} else {
				_bytesSource.readBytes(frameData, 0, len);
			}
			if (_icyMetaInterval > 0 && _read >= _icyMetaInterval) {
				_frameDataTmp = frameData;
				_readFuncContinue = readFrame;
				_readFunc = readMetaDataSize;
			} else {
				//----------------------------------------------------------
				// En frame är färdigladdad!
				
				_frameDataTmp = null;
				_mpegFrame.data.writeBytes(frameData);
				_mpegFrame.data.position = 0;

				// decode the mpeg frame we just read
				_decoder.decodeFrame(_mpegFrame);
				
				// skriv till sampleBuffer...
				var ob:Vector<Float> = _decoder.outputBuffer.getBuffer();
				
				//for (var i:UInt = 0; i < ob.length; i++) {
				for (i in 0...ob.length)	
				{
					sampleBuffer.writeFloat(ob[i]);
					xBuffer.writeFloat(ob[i]);
				}
				
				
				_decoder.outputBuffer.clear_buffer();

			
				//dobj.addEventListener(Event.ENTER_FRAME, enterFrameHandler);
				ret = false;
				
				/*
				if (sampleBuffer.length < ICYConst.SAMPLE_DATA_BYTES * 2) {
					
					
					
				}
				*/
				
				
				
				
				/*
				if (sampleBuffer.length > ICYConst.SAMPLE_DATA_BYTES * 2) {
					dobj.addEventListener(Event.ENTER_FRAME, enterFrameHandler);
					ret = false;
				} else {
					
					// fyll på så sampleBuffer alltid håller viss nivå (SAMPLE_DATA_BYEST * 2)
					// på SAMPLE_DATA_BYTES * 2
					
					_mpegFrame = new MPEGFrame();
					readFunc = readFrameHeader;
					ret = true;
				}
				*/
				
			}
		} else {
			_read = readTmp;
			ret = false;
		}
		return ret;
	}		
	
	private function readMetaDataSize():Bool {
		//trace('-- readMetaDataSize');
		var ret:Bool = true;
		if (_bytesSource.bytesAvailable >= 1) {
			_read = 0;
			_icyMetaSize = (_bytesSource.readUnsignedByte() << 4);
			if (_icyMetaSize > 0) {
				_readFunc = readMetaData;
			} else {
				_readFunc = _readFuncContinue;
			}
		} else {
			ret = false;
		}
		return ret;
	}		
	
	private function readMetaData():Bool {
		//trace('-- readMetaData');
		var ret:Bool = true;
		if (_bytesSource.bytesAvailable >= _icyMetaSize) {
			_read = 0;
			_readFunc = _readFuncContinue;
		} else {
			ret = false;
		}
		return ret;
	}		

	private function readCRC():Bool {
		var ret:Bool = true;
		if (_bytesSource.bytesAvailable >= 1) {
			if (_icyMetaInterval > 0 && ++_read > _icyMetaInterval) {
				_readFuncContinue = readCRC;
				_readFunc = readMetaDataSize;
				return ret;
			}
			try {
				_mpegFrame.setCRCByteAt(_crcIndex, _bytesSource.readUnsignedByte());
				if (++_crcIndex == 2) {
					_readFunc = readFrame;
					_crcIndex = 0;
				}
			}
			catch (e:Error) {
				//trace(e.message);
				_readFunc = readFrameHeader;
				_crcIndex = 0;
			}
		} else {
			ret = false;
		}
		return ret;
	}		
	
	
}