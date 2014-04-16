package nx3.qs;

/**
 * ...
 * @author Jonas Nyström
 */
class QSyntaxTools
{

	static public  function bpvToString(val:QSyntaxBPV):String
	{
			return '${val.barIndex}-${val.partIndex}-${val.voiceIndex}';
	}

	static public function stringToBpv(bpvString:String):QSyntaxBPV
	{
		var segments = bpvString.split('-');
		var bpv:QSyntaxBPV = { barIndex:Std.parseInt(segments[0]), partIndex:Std.parseInt(segments[1]), voiceIndex:Std.parseInt(segments[2]) };
		return bpv;
	}
	
	static public function getBpv(barIndex:Int, partIndex:Int, voiceIndex:Int):QSyntaxBPV
	{
		var bpv:QSyntaxBPV = { barIndex:barIndex, partIndex:partIndex, voiceIndex:voiceIndex };
		return bpv;
	}
	
	static public function getBpvString(barIndex:Int, partIndex:Int, voiceIndex:Int):String
	{
		return '${barIndex}-${partIndex}-${voiceIndex}';
	}
	
	
}