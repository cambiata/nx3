package
{
	import flash.display.Sprite;
	import flash.events.Event;
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
			// entry point
			trace('As3Application');
			
			this.stage.addChild(Nx3Utils.getSprite());
			trace(nx3lib.Nx3Utils.getConstant());
			
			trace(Nx3Utils.getNScore());
			
			//this.stage.addChild(Nx3Utils.getScoreSprite());
			
			trace(Nx3Utils.testCopy());
		}
		
	}
	
}