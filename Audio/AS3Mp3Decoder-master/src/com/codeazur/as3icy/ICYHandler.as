package com.codeazur.as3icy 
{
	import flash.events.SampleDataEvent;
	import flash.utils.ByteArray;
	/**
	 * ...
	 * @author Jonas Nyström
	 */
	public class ICYHandler 
	{
		trace('ICYHandler');
		private var icyDecoder:ICYDecoder;
		
		public function ICYHandler(icyDecoder:ICYDecoder) 
		{
			this.icyDecoder = icyDecoder;
		}

		public function sampleDataHandler(e:SampleDataEvent):void {
	
			
			var writtenLength:uint = ICYConst.SAMPLE_DATA_BYTES;
			if(icyDecoder.sampleBuffer.length > 0) {
				
				writtenLength = Math.min(writtenLength, icyDecoder.sampleBuffer.length);
				e.data.writeBytes(icyDecoder.sampleBuffer, 0, writtenLength);
				
				
				if(writtenLength == icyDecoder.sampleBuffer.length) {
					icyDecoder.sampleBuffer = new ByteArray();
				} else {
					var ba:ByteArray = new ByteArray();
					ba.writeBytes(icyDecoder.sampleBuffer, writtenLength, icyDecoder.sampleBuffer.length - writtenLength);
					icyDecoder.sampleBuffer = ba; 
				}
				
			} else {
				writtenLength = 0;
			}			
			
			if(writtenLength < ICYConst.SAMPLE_DATA_BYTES) {
				trace('sampleDataHandler buffer underrun', writtenLength, ICYConst.SAMPLE_DATA_BYTES);
				var size:uint = (writtenLength >> 3);
				var i:uint = 0;
				for(i = 0; i < ICYConst.SAMPLE_DATA_SIZE - size; i++) {
					e.data.writeFloat(0);
					e.data.writeFloat(0);
				}
			}
			
		}
		
		
		//---------------------------------------------------------------------------
		
		/*
		private function writeSampleData(soundBuffer:ByteArray, len:uint):uint {
			if(len > 0 && icyDecoder.sampleBuffer.length > 0) {
				len = Math.min(len, icyDecoder.sampleBuffer.length);
				soundBuffer.writeBytes(icyDecoder.sampleBuffer, 0, len);
				if(len == icyDecoder.sampleBuffer.length) {
					icyDecoder.sampleBuffer = new ByteArray();
				} else {
					var ba:ByteArray = new ByteArray();
					ba.writeBytes(icyDecoder.sampleBuffer, len, icyDecoder.sampleBuffer.length - len);
					icyDecoder.sampleBuffer = ba; 
				}
			} else {
				len = 0;
			}
			return len;
		}			
		*/
		
		
		
		
		/*
		public function xsampleDataHandler(e:SampleDataEvent):void {
			var i:uint = 0;
			for(i = 0; i < 2048; i++) {
				var left:Number = icyLoader.sampleBuffer.readFloat();
				var right:Number = icyLoader.sampleBuffer.readFloat();				
				e.data.writeFloat(left);
				e.data.writeFloat(right);
			}			
		}
		*/
		
		
		/*
		public function sampleDataHandler(e:SampleDataEvent):void {
			var i:uint = 0;
	
			var len:uint = writeSampleData(e.data, ICYConst.SAMPLE_DATA_BYTES);			
			// 
			if(len < ICYConst.SAMPLE_DATA_BYTES) {
				trace('sampleDataHandler buffer underrun', len, ICYConst.SAMPLE_DATA_BYTES);
				var size:uint = (len >> 3);
				for(i = 0; i < ICYConst.SAMPLE_DATA_SIZE - size; i++) {
					e.data.writeFloat(0);
					e.data.writeFloat(0);
				}
			}
		}
		
		private function writeSampleData(soundBuffer:ByteArray, len:uint):uint {
			if(len > 0 && icyLoader.sampleBuffer.length > 0) {
				len = Math.min(len, icyLoader.sampleBuffer.length);
				soundBuffer.writeBytes(icyLoader.sampleBuffer, 0, len);
				if(len == icyLoader.sampleBuffer.length) {
					icyLoader.sampleBuffer = new ByteArray();
				} else {
					var ba:ByteArray = new ByteArray();
					ba.writeBytes(icyLoader.sampleBuffer, len, icyLoader.sampleBuffer.length - len);
					icyLoader.sampleBuffer = ba; 
				}
			} else {
				len = 0;
			}
			return len;
		}*/
		
		
		
	}

}