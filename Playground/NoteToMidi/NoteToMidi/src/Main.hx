package;

import neko.Lib;
import nx3.audio.NotenrCalculator;

/**
 * ...
 * @author 
 */

class Main 
{
	
	static function main() 
	{
		var items = new NotenrCalculator(NotenrTestItems.testTies()).execute();
		for (item in items)
		{
			trace([item.partposition, item.position, item.noteval, item.notenr]);
		}
	}
	
}