package
{
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.text.TextField;
	import flash.text.TextFieldAutoSize;
	import nx3lib.Nx3Utils;
	
	/**
	 * ...
	 * @author Jonas Nyström
	 */
	
	public class Main extends Sprite 
	{
		public function Main() 
		{
			if (stage) init();
			else addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		private function init(e:Event = null):void 
		{
			removeEventListener(Event.ADDED_TO_STAGE, init);
			
			haxe.initSwc(new MovieClip());

			var y1:Number = 10;
			var y2:Number = 110;
			
			var x:Number = 10;
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
			this.testScoreSprite( ['dhi', 'e', '+', 'chi'], x, y1, true, true);						
			this.testScoreSprite( ['dhi', 'e', '+', 'chi'], x, y2, false, true);				
			
			y1 = 310;
			y2 = 410;			
			
			x = 10;
			this.testScoreSprite( ['a', '+', '+', '+'], x, y1, true, true);						
			this.testScoreSprite( ['a', '+', '+', '+'], x, y2, false, true);	
			
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
			
		}
		
		private function testScoreSprite(a:Array, x:Number, y:Number, displayNotelines:Boolean = true, displayFrame:Boolean = true) : void {			
			var scoreSprite:Sprite = Nx3Utils.getScoreSpriteFromArray(a, displayNotelines, displayFrame);						
			scoreSprite.x = x;  
			scoreSprite.y = y;
			this.addChild(scoreSprite);						
			
		}
		
	}
	
}