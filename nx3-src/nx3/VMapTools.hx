package nx3;

/**
 * ...
 * @author Jonas Nyström
 */
class VMapTools
{
	static public function keysToArray<T>(it : Iterator<T>) : Array<T> {
		var result = [];
		for (v in it) result.push(v);
		return result;
	}	
	
	static public function sortarray<T>(a:Array<T>):Array<T>
	{
		a.sort(function (a, b) { return Reflect.compare(a, b); } );
		return a;
	}
}