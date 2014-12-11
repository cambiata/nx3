package audio;

class LinearAccelerator 
{
	 var startTempo: Float;
	 var deltaTempo: Float;
	 var numBeats: Float;

	/** Create a new accelerando calculator given the starting tempo (beats
	per second), the ending tempo,
	and the number of "beats" over which to linearly interpolate this
	change. */
	public function new(startTempo:Float,   endTempo:Float,   numBeats:Float) {
		this.startTempo = startTempo;
		this.deltaTempo = endTempo - startTempo;
		this.numBeats = numBeats;
	}

	/** evaluate the integral at x=time */
	 function  evaluate(time:Float) {
		 
		 
		//return numBeats * Math.log(numBeats + deltaTempo * time);
		return numBeats * Math.log(numBeats + deltaTempo)  * time;
	}

	/** Calculate the new duration of an event starting at startTime with
	duration dur.
	Note that startTime and dur are NON-accelerated time. That is, the
	start time is just an accumulation of
	non-acceleared event durations.
	@return accelerated duration */
	public  function  acceleratedDuration(  startTime:Float,   dur:Float) {		
		var s = evaluate(startTime);
		var d = evaluate(dur);
		trace('starttime $startTime $s $d');
		
		
		return evaluate(startTime + dur) - evaluate(startTime);
	}

	
	public static function test() {
		/*
		// accelerate from 1 bps to 2 bps over 4 beats		
		var accel:LinearAccelerator = new LinearAccelerator(1, 2, 4);
		//var eventDurations = [4.0];
		 var eventDurations  = [1.0, 1.0, 1.0, 1.0];
		 //var eventDurations  = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
		 var  nonAccelStartTime=0.0; // needed to calculate
		 var  acceleratedStartTime = 0.0; // just for fun
		 */
		 
		 trace(new LinearAccelerator(1, 2, 4).acceleratedDuration(0, 4));
		 trace(new LinearAccelerator(1, 1, 4).acceleratedDuration(0, 4));
		 
		/*
		for (nonAccelDur in eventDurations) {
			var  accelDur = accel.acceleratedDuration(nonAccelStartTime,	nonAccelDur);
			trace([nonAccelStartTime, nonAccelDur, acceleratedStartTime, accelDur]);
			//trace("Non-accelerated starting time=" + nonAccelStartTime );
			//trace("Non-accelerated dur= " + nonAccelDur);
			//trace(", Accelerated starting time=" + acceleratedStartTime );
			//trace("Accelerated dur = " + accelDur);
			nonAccelStartTime += nonAccelDur;
			acceleratedStartTime += accelDur;
		}
		trace("Total duration of accelerando =" + 	acceleratedStartTime);
		*/
	}	
	
}

