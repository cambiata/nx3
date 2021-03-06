package nx3;
import nx3.ESign;
import nx3.NHead;

/**
 * ...
 * @author Jonas Nyström
 */
class QHead extends NHead
{
	public function new(?level:Int=0, ?sign: ESign=null) 
	{
		super(level, sign);
	}
}

class QHeadSharp extends QHead 
{
	public function new(?level:Int=0)
	{
		super(level, ESign.Sharp);
	}	
}

class QHeadFlat extends QHead
{
	public function new(?level:Int=0)
	{
		super(level, ESign.Flat);
	}	
}

class QHeadNatural extends QHead
{
	public function new(?level:Int=0)
	{
		super(level, ESign.Natural);
	}	
}
