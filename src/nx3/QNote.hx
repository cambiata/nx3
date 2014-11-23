package nx3;

import haxe.Utf8;
import nx3.ESign;
import nx3.EHeadType;
import nx3.ENoteVal;
import nx3.EDirectionUAD;
import nx3.NHead;

import nx3.NNote;

/**
 * ...
 * @author Jonas Nyström
 */
class QNote extends NNote
{

	public function new(?headLevel:Int=null, ?headLevels:Array<Int>=null, ?head:NHead=null, ?heads:Array<NHead>=null, ?value : ENoteVal=null, ?signs:String='', ?direction:EDirectionUAD=null) 
	{
		//var heads:Array<NHead> = null;
		
		signs += '...........';
		var aSigns = signs.split('');
		
		if (headLevel != null)  headLevels = [headLevel];
		if (headLevels != null) 
		{
			heads = [];
			var i = 0;
			for (level in headLevels) heads.push(new NHead(level, getSign(aSigns[i++])));
		}

		if (head != null) heads = [head];
		
		if (heads == null) heads = [new NHead(0)];
		
		if (value == null) value = ENoteVal.Nv4;
		
		
		
		
		super(heads, value, direction);
	}
	
	private function getSign(val:String):ESign
	{
		switch (val)
		{
			case '#': return ESign.Sharp;
			case 'b': return ESign.Flat;
			case 'N', 'n': return ESign.Natural;
			default: return null;
		}
	}	

}


class QPause16 extends NNote  { public function new(?level:Int=0) 	super(ENoteType.Pause(level), ENoteVal.Nv16);}
class QPause8 extends NNote  { public function new(?level:Int=0) 	super(ENoteType.Pause(level), ENoteVal.Nv8);}
class QPause4 extends NNote  { public function new(?level:Int=0) 	super(ENoteType.Pause(level), ENoteVal.Nv4);}
class QPause2 extends NNote  { public function new(?level:Int=0) 	super(ENoteType.Pause(level), ENoteVal.Nv2);}
class QPause1 extends NNote  { public function new(?level:Int = 0) 	super(ENoteType.Pause(level), ENoteVal.Nv1); }

class QLyric8 extends NNote  { public function new(?text:String="QLyric4") 	super(ENoteType.Lyric(text), ENoteVal.Nv8);}
class QLyric4 extends NNote  { public function new(?text:String="QLyric4") 	super(ENoteType.Lyric(text), ENoteVal.Nv4);}
class QLyric2 extends NNote  { public function new(?text:String="QLyric4") 	super(ENoteType.Lyric(text), ENoteVal.Nv2);}


class QNote4 extends QNote
{
	public function new(?dot:Bool=false, ?headLevel:Int=null, ?headLevels:Array<Int>=null, ?signs:String='') 
	{
		var val = (dot) ? ENoteVal.Nv4dot: ENoteVal.Nv4;
		super(headLevel, headLevels, val, signs);
	}
}


class QNote8 extends QNote
{
	public function new(?dot:Bool=false, ?headLevel:Int=null, ?headLevels:Array<Int>=null, ?signs:String='') 
	{
		var val = (dot) ? ENoteVal.Nv8dot: ENoteVal.Nv8;
		super(headLevel, headLevels,val, signs);
	}
}

class QNote16 extends QNote
{
	public function new(?headLevel:Int=null, ?headLevels:Array<Int>=null, ?signs:String='') 
	{
		super(headLevel, headLevels, ENoteVal.Nv16, signs);
	}
}



class QNote2 extends QNote
{
	public function new(?dot:Bool=false, ?headLevel:Int=null, ?headLevels:Array<Int>=null, ?signs:String='') 
	{
		var val = (dot) ? ENoteVal.Nv2dot: ENoteVal.Nv2;
		super(headLevel, headLevels,  val, signs);
	}
}

class QNote1 extends QNote
{
	public function new(?headLevel:Int=null, ?headLevels:Array<Int>=null, ?signs:String='') 
	{
		super(headLevel, headLevels, ENoteVal.Nv1, signs);
	}
}
