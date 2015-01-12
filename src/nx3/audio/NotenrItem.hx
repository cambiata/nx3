package nx3.audio;
import nx3.ESign;
import nx3.NNote;

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
	playsign:ESign,
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
	note:NNote,
	?mp3file:String,
}

typedef NotenrItems = Array<NotenrItem>;

typedef PartsNotenrItems = Array<NotenrItems>;