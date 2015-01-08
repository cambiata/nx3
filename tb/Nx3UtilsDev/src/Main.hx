package;

import nx3.ENoteType;
import nx3.ENoteVal;
import nx3.ESign;
import nx3.NHead;
import nx3.NNote;
import nx3lib.Nx3Utils;
import openfl.display.Sprite;
import openfl.Lib;

/**
 * ...
 * @author Jonas Nyström
 */

class Main extends Sprite 
{
	public function new() 
	{
		super();
		
		//var a = ['DsLo', '+', 'CLO', '+'];
		var a = ['+', 'DsLox', '+', 'CLO'];
		//var a = ['+','+','+', 'DsLo','+',];
		var a = ['DsLo','+','+','+'];
		var a = ['c','d','e','f'];
		var a = ['c','+','e','f'];
		var a = ['c','+','ef','a'];
		
		//var processor = new nx3lib.abc.ArrayProcessor();
		//processor.getNx3Notes(a);
		/*
		var scoreSprite = Nx3Utils.getScoreSpriteFromArray(a, true, true);
		scoreSprite.x = 10;
		scoreSprite.y = 10;
		this.addChild(scoreSprite);
		*/
		
		var y1:Float = 10;
			var y2:Float = 110;
			
			var x:Float = 10;
			
			
			this.testScoreSprite( ['c', '+', 'ef', 'a'], x, y1, true, true);
			this.testScoreSprite( ['c', '+', 'ef', 'a'], x, y2, false, true);
			
			x = 110;
			this.testScoreSprite( ['c', '+', '+', 'a'], x, y1, true, true);
			this.testScoreSprite( ['c', '+', '+', 'a'], x, y2, false, true);			
			
			x = 210;
			this.testScoreSprite( ['c', 'd', 'fs', 'ab'], x, y1, true, true);						
			this.testScoreSprite( ['c', 'd', 'fs', 'ab'], x, y2, false, true);	
			
			x = 310;
			this.testScoreSprite( ['dhi', 'a', '+', 'chi'], x, y1, true, true);						
			this.testScoreSprite( ['dhi', 'a', '+', 'chi'], x, y2, false, true);	
			
			x = 410;
			this.testScoreSprite( ['dhi', 'e', '+', 'chi'], x, y1, true, true, 0, -4);						
			this.testScoreSprite( ['dhi', 'e', '+', 'chi'], x, y2, false, true);				
			
			y1 = 310;
			y2 = 410;			
			
			x = 10;
			this.testScoreSprite( ['d', '+', '+', '+'], x, y1, true, true);						
			this.testScoreSprite( ['d', '+', '+', '+'], x, y2, false, true);	
			
			
			x = 110;
			this.testScoreSprite( ['+', '+', '+', '+'], x, y1, true, true);						
			this.testScoreSprite( ['+', '+', '+', '+'], x, y2, false, true);	
			
			x = 210;
			this.testScoreSprite( ['+', '+', '+', 'd'], x, y1, true, true);						
			this.testScoreSprite( ['+', '+', '+', 'd'], x, y2, false, true);
			
			x = 310;
			this.testScoreSprite( ['+', '+', 'd', 'd'], x, y1, true, true);						
			this.testScoreSprite( ['+', '+', 'd', 'd'], x, y2, false, true);	
			
			x = 410;
			this.testScoreSprite( ['+', '+', 'd', '+'], x, y1, true, true);						
			this.testScoreSprite( ['+', '+', 'd', '+'], x, y2, false, true);				

			x = 510;
			this.testScoreSprite( ['+', 'd', '+', '+'], x, y1, true, true);						
			this.testScoreSprite( ['+', 'd', '+', '+'], x, y2, false, true);		
			
			x = 610;
			this.testScoreSprite( ['+', 'df', '+', 'gs'], x, y1, true, true);						
			this.testScoreSprite( ['+', 'df', '+', 'gs'], x, y2, false, true);		
			
			
		}
		
		private function testScoreSprite(a:Array<String>, x:Float, y:Float, displayNotelines:Bool = true, displayFrame:Bool = true, xOffset=0, yOffset=0)  {			
			var scoreSprite:Sprite = Nx3Utils.getScoreSpriteFromArray(a, displayNotelines, displayFrame, xOffset, yOffset);						
			scoreSprite.x = x;  
			scoreSprite.y = y;
			this.addChild(scoreSprite);						
			
		}
}

