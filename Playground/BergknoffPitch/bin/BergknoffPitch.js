(function () { "use strict";
var HxOverrides = function() { };
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
Lambda.fold = function(it,f,first) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		first = f(x,first);
	}
	return first;
};
var Main = function() {
	this.test_frequencies = [];
	this.initalize();
};
Main.main = function() {
	window.addEventListener("load",function(e) {
		new Main();
	});
};
Main.prototype = {
	initalize: function() {
		console.log("initialize");
		var navigator = window.navigator;
		console.log(navigator);
		var getUserMedia = $bind(navigator,navigator.getUserMedia);
		getUserMedia = getUserMedia || navigator.webkitGetUserMedia;;
		getUserMedia = getUserMedia || navigator.mozGetUserMedia;;
		getUserMedia.call(navigator, { "audio": true }, this.useStream, function() {});;
	}
	,useStream: function(stream) {
		var _g = this;
		console.log("useStream");
		this.correlationWorker = new Worker("correlation_worker.js");
		this.correlationWorker.onmessage = function(event) {
			var timeseries = event.data.timeseries;
			var frequencyAmplitudes = event.data.frequency_amplitudes;
			var magnitudes = frequencyAmplitudes.map(function(z) {
				return z[0] * z[0] + z[1] * z[1];
			});
			var maximum_index = -1;
			var maximum_magnitude = .0;
			var _g1 = 0;
			var _g2 = magnitudes.length;
			while(_g1 < _g2) {
				var i = _g1++;
				if(magnitudes[i] <= maximum_magnitude) continue;
				maximum_index = i;
				maximum_magnitude = magnitudes[i];
			}
			var average = Lambda.fold(magnitudes,function(a,b) {
				return a + b;
			},0) / magnitudes.length;
			var confidence = maximum_magnitude / average;
			var confidence_threshold = 10;
			if(confidence > confidence_threshold) {
				var dominant_frequency = _g.test_frequencies[maximum_index];
				console.log(dominant_frequency);
			}
		};
		var audioContext = new AudioContext();
		var microphone = audioContext.createMediaStreamSource(stream);
		var scriptProcessor = audioContext.createScriptProcessor(1024,1,1);
		scriptProcessor.connect(audioContext.destination,0,0);
		microphone.connect(scriptProcessor,0,0);
		var buffer = [];
		var sample_length_milliseconds = 100;
		var recording = true;
		console.log(this.correlationWorker);
		this.test_frequencies = [];
		var C2 = 65.41;
		var notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
		var _g3 = 0;
		while(_g3 < 30) {
			var i1 = _g3++;
			var note_frequency = C2 * Math.pow(2,i1 / 12);
			var note_name = notes[i1 % 12];
			var note = { frequency : note_frequency, name : note_name};
			var just_above = { frequency : note_frequency * Math.pow(2,0.020833333333333332), name : note_name + " (a bit sharp)"};
			var just_below = { frequency : note_frequency * Math.pow(2,-0.020833333333333332), name : note_name + " (a bit flat)"};
			this.test_frequencies = this.test_frequencies.concat([just_below,note,just_above]);
		}
		var _g4 = 0;
		var _g11 = this.test_frequencies;
		while(_g4 < _g11.length) {
			var tf = _g11[_g4];
			++_g4;
			console.log(tf);
		}
		scriptProcessor.onaudioprocess = function(event1) {
			if(!recording) return;
			var channelData = event1.inputBuffer.getChannelData(0);
			var slice = Array.prototype.slice.call(channelData);;
			buffer = buffer.concat(slice);
			if(buffer.length > sample_length_milliseconds * audioContext.sampleRate / 1000) {
				recording = false;
				_g.correlationWorker.postMessage({ timeseries : buffer, test_frequencies : _g.test_frequencies, sample_rate : audioContext.sampleRate});
				buffer = [];
				haxe.Timer.delay(function() {
					recording = true;
				},250);
			}
		};
		return true;
	}
};
var haxe = {};
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe.Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
if(Array.prototype.map == null) Array.prototype.map = function(f) {
	var a = [];
	var _g1 = 0;
	var _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		a[i] = f(this[i]);
	}
	return a;
};
Main.main();
})();
