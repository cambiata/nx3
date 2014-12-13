package;

import neko.Lib;
import nx3.NTags;
import nx3.test.TestItemsBach;

/**
 * ...
 * @author Jonas Nyström
 */

class Main 
{
	
	static function main() 
	{
		var nscore = TestItemsBach.scoreBachSinfonia4();
		var tag = NTags.nscoreTag(nscore);
		trace(tag);
	}
	
}