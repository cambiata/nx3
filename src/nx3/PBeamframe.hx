package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
typedef PBeamframe =
{
	leftOuterY:Int,
	leftInnerY:Int,
	rightOuterY:Int,
	rightInnerY:Int,
	leftTipY:Float,
	rightTipY:Float,
	outerLevels:Array<Int>,
	innerLevels:Array<Int>,	
	beamflags:Array<EBeamflagType>,
}