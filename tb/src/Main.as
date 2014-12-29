package
{
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.Lib;
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
				
			// Init the haxe solution - this makes core haxe classes work (Arrays/Iterators stuff etc.)
			haxe.initSwc(new MovieClip());
			
			// Get a sprite with a rendered score 
			var scoreSprite:Sprite = Nx3Utils.getScoreSprite();
			
			// Show it
			scoreSprite.x = scoreSprite.y = 20;
			this.addChild(scoreSprite);
		}
		
	}
	
}