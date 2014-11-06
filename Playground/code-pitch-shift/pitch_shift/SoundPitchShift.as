package
{
	import flash.events.Event;
	import flash.events.SampleDataEvent;
	import flash.media.Sound;
	import flash.net.URLRequest;
	import flash.utils.ByteArray;
	import flash.utils.getTimer;
	import PitchShifter;
	
	public class SoundPitchShift
	{
		public var mp3: Sound;
		private var _sound: Sound;
		
		private var _target: ByteArray;
		
		private var _leftChannel:Vector.<Number> = new Vector.<Number>(8192);
		private var _rightChannel:Vector.<Number> = new Vector.<Number>(8192);
		
		private var _leftPitchShifter:PitchShifter;
		private var _rightPitchShifter:PitchShifter;
		
		public var pitch: Number = 1.0;
		
		public function SoundPitchShift( url:String )
		{
			_target = new ByteArray();

			mp3 = new Sound();
			mp3.addEventListener( Event.COMPLETE, complete );
			mp3.load( new URLRequest( url ) );

			_sound = new Sound();
			_sound.addEventListener( SampleDataEvent.SAMPLE_DATA, onSampleDataRequest );
		}
		
		private function complete( event: Event ): void
		{
			_constructShifters();
			_sound.play();
		}
		
		private var _fftFrameSize:int = 1024;
		public function get fftFrameSize():int	{ return _fftFrameSize }
		public function set fftFrameSize(v:int)
		{
			if (v != _fftFrameSize)
			{
				_fftFrameSize = v;
				_constructShifters();
			}
		}
		
		private var _osamp:int = 4;
		public function get osamp():int	{ return _osamp }
		public function set osamp(v:int)
		{
			if (v != _osamp)
			{
				_osamp = v;
				_constructShifters();
			}
		}
		
		private var _sampleRate:int = 44100;
		public function get sampleRate():int	{ return _sampleRate }
		public function set sampleRate(v:int)
		{
			if (v != _sampleRate)
			{
				_sampleRate = v;
				_constructShifters();
			}
		}
		
		private var _stereo:Boolean = false;
		public function get stereo():Boolean	{ return _stereo }
		public function set stereo(v:Boolean)
		{
			if (_stereo = v)
				_rightPitchShifter = new PitchShifter( _fftFrameSize, _osamp, _sampleRate );
		}
		
		var settings:String;
		private function _constructShifters()
		{
			settings = (_stereo?"stereo-":"mono-") + _fftFrameSize + "-" + _osamp + "-" + _sampleRate;
			_cpuFIFO = new Vector.<Number>;
			
			_leftPitchShifter = new PitchShifter( _fftFrameSize, _osamp, _sampleRate );
			if ( _stereo )
				_rightPitchShifter = new PitchShifter( _fftFrameSize, _osamp, _sampleRate );
		}

		
		public var doPitch:Boolean;
		public var doStereo:Boolean;
		
		private var _maxCPUPerSetting:Object = { }
		private var _cpuFIFO:Vector.<Number>;
		private var _cpu:Number = 0.0;
		public function get cpu():Number { return _cpu }
		
		public function onSampleDataRequest(e:SampleDataEvent)
		{
			var s:int = getTimer();
			
			//-- SHORTCUT
			var data: ByteArray = e.data;
			
			//-- REUSE INSTEAD OF RECREATION
			_target.position = 0;
			var read: int = mp3.extract( _target, 8192 );
			_target.position = 0;
			
			var currentMax:Number = _maxCPUPerSetting[settings];
			if (isNaN(currentMax)) currentMax = 0.0;
			
			doPitch = currentMax < 1.5;
			doStereo = currentMax < 1.0;
			
			for( var i:int = 0; i < read; ++i )
			{
				if (doStereo)
				{
					_leftChannel[i] = _target.readFloat();
					_rightChannel[i] = _target.readFloat();
				}
				else
				{
					//-- AVG LEFT AND RIGHT CHANNELS
					_leftChannel[i] = .5 * ( _target.readFloat() + _target.readFloat() );
				}
			}
			
			if ( doPitch )
			{
				_leftPitchShifter.pitchShift( pitch, read, _leftChannel );
				
				if (_stereo && doStereo)
					_rightPitchShifter.pitchShift( pitch, read, _rightChannel );
			}
			
			for( i = 0 ; i < read ; ++i )
			{
				data.writeFloat( _leftChannel[i] );
				data.writeFloat( _stereo && doStereo ? _rightChannel[i] : _leftChannel[i] );
			}
			
			_cpu = 0.0;
			_cpuFIFO.unshift( (getTimer() - s) * _sampleRate * 1.220703125E-7 );
			var l:int = _cpuFIFO.length;
			if(l>6) _cpuFIFO.splice( --l, 1 );
			for ( i = 0 ; i < l ; ++i )
				_cpu += _cpuFIFO[i];
			_cpu /= Number(l);
			
			if ( currentMax < _cpu )
				_maxCPUPerSetting[settings] = _cpu;
			
		}
		
		
	}
}