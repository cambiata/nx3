package nx3.audio;

/**
 * NotenrItem
 * @author Jonas Nyström
 */
typedef NotenrItem = {
	partposition:Int,
	position:Int, 
	noteval: Int, 
	level:Int, 
	notenr:Int, 
	midinr:Int, 
	headsign:ESign,
	keysign:ESign,
	notename:String, 
	tie: Bool ,
	playable: Bool,
	partnr:Int,
	barnr: Int,
	barvalue:Int,
	?soundposition:Float,
	?soundlength:Float,
	?barsoundlength:Float,
	?barsoundposition:Float,
	?playpos:Float,
	?playend:Float,
}