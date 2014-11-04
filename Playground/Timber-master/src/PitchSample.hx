package;

/**
 * PitchSample
 * @author Jonas Nyström
 */
typedef PitchSample = {
	
	time:Float,
	note:Int,
	freq:Float,
	?length:Float,
}

typedef PitchSamples = Array<PitchSample>;