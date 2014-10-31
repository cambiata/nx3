package cx;

/**
 * IntTools
 * @author Jonas Nyström
 */
class IntTools 
{
	inline static public function int8toUInt8(val:Int)
	{
		if (val < 0) val += 256;
		val = clamp(0, val, 255);
		return val;
	}	
	
	inline static public function clamp(min:Int, val:Int, max:Int):Int
	{
		if (val < min) val = min;
		if (val > max) val = max;
		return val;
	}
}