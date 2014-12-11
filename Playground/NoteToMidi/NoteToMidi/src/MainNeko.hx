package;

import audio.LinearAccelerator;
import audio.pitch.Audio;
import neko.Lib;
import nx3.audio.NotenrBarsCalculator;
import nx3.audio.NotenrPartsCalculator;
import nx3.test.TestItems;
import nx3.utils.VoiceSplitter;

/**
 * ...
 * @author 
 */

class MainNeko
{
	static function main() 
	{
		
		var partsnotes = new NotenrBarsCalculator(new VoiceSplitter(TestItems.scoreBachSinfonia4()).getVoicesplittedScore()).getPartsNotenrItems();
		

				
				
				
				
	}
	

	
	
}