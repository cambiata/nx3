package audio.pitch.data;
using cx.ArrayTools;
using Lambda;
/**
 * ModelSegments
 * @author Jonas Nyström
 */
class  ModelSegments {
	static public inline var SILENCE:Int = -1000;
	var segments:Array<ModelSegment>;
	
	public function new() {
		this.segments = new Array<ModelSegment>();
	}
	
	public function push(segment: ModelSegment)
	{
		this.segments.push(segment);
		if (this.segments.length >1)
		{
			if (segments.secondLast().duration == null)
			{
				segments.secondLast().duration = segment.time - segments.secondLast().time;
			}			
		}
	}
	
	public function finalize(lastDuration:Int = 2000)
	{
		if (segments.last().duration == null) segments.last().duration = lastDuration;		
	}
	
	public function iterator() {
		return this.segments.iterator();
	}
	
	public function compareFrequencySegments(freqSegs:FrequencySegments)
	{
		if (freqSegs == null || freqSegs == []) return;
		
		var modSegs = this.segments.copy();		
		
		var modSeg = modSegs.shift();
		var lastTime = modSegs.last().time + modSegs.last().duration;
		
		var modSeqCount:Map<ModelSegment, Int> = new Map<ModelSegment, Int>();
		var modSeqFreq:Map<ModelSegment, Array<FrequencySegment>> = new Map<ModelSegment, Array<FrequencySegment>>();
		
		modSeqCount.set(modSeg, 0);
		
		var c = 0;
		for (freqSeg in freqSegs)
		{
			if (freqSeg.time <= modSeg.time + modSeg.duration)
			{				
				//trace(['A', freqSeg.time, this.segments.index(modSeg), modSeg.time + '-' + (modSeg.time+modSeg.duration), c]);
				modSeqCount.set(modSeg, c);
			}
			else
			{
				modSeg = modSegs.shift();
				c = 0;
				if (modSeg == null) break;
				//trace(['B', freqSeg.time, this.segments.index(modSeg), modSeg.time + '-' + (modSeg.time+modSeg.duration), c]);
				modSeqCount.set(modSeg, c);
			}	
			
			if (!modSeqFreq.exists(modSeg)) modSeqFreq.set(modSeg, []);			
			modSeqFreq.get(modSeg).push(freqSeg);
			
			c++;
		}
		
		var score:Map<ModelSegment, Int> = new Map();
		var scoreValue:Map<ModelSegment, Float> = new Map();
		
		for (seg in this.segments)
		{
			var sc = 0;
			//trace([seg.time, modSeqCount.get(seg), modSeqFreq.get(seg).length]);
			var freqs = modSeqFreq.get(seg);
			//trace('--------------------------------------');
			//trace(seg);
			
			var segnote = seg.note;
			
			var notes:Array<Int> = [];
			for (freq in freqs)
			{				
				var notef = Audio.frequencyToNote(freq.freq);
				var note = Math.round(notef);
				if (note == segnote) sc++;
				//trace([note, freq]);		
			}			
			score.set(seg, sc);
		}

		trace('===============');
		for (seg in this.segments)
		{
			var scorev = score.get(seg) / modSeqFreq.get(seg).length;
			scoreValue.set(seg, scorev);
			trace([seg.time, score.get(seg), modSeqFreq.get(seg).length, scoreValue.get(seg)]);			
		}
		
		var maxScoreValue: Int = 0;
		var totalScoreValue:Float = 0;
		
		for (seg in this.segments)
		{
			if (seg.note ==ModelSegments.SILENCE) continue;
			maxScoreValue++;
			totalScoreValue += scoreValue.get(seg);
		}
		trace('===============');
		trace('TOTALSCORE');
		trace(totalScoreValue + ' / ' + maxScoreValue);
	}
	
	
	
	
	
	
}