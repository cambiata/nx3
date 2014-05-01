package nx3.qs;
import nx3.qs.ContentMode;

/**
 * ...
 * @author Jonas Nyström
 */
class ModeParser extends BaseParser
{
	
	public function new(parser:QuickSyntaxParser)
	{
		super(parser);
	}
	
	
	override public function createFunctions()
	{
		this.functions.set('not:', function (token:String) {
			this.sendEvent(ParserEvents.SetMode(ContentMode.Notes));
			trace('handle notes...');
			return token.substr(4);
		});

		this.functions.set('tpl:', function (token:String) {
			this.sendEvent(ParserEvents.SetMode(ContentMode.Tpls));
			trace('handle tpls...');
			return token.substr(4);
		});
		
		this.functions.set('lyr:', function (token:String) {
			this.sendEvent(ParserEvents.SetMode(ContentMode.Lyrics));
			trace('handle lyrics...');
			return token.substr(4);
		});

		this.functions.set('xxx', function (token:String) {
			trace('handle xxx...');
			return token.substr(3);
		});		
		
		this.functions.set('guess:', function (token:String) {
			this.sendEvent(ParserEvents.SetGuessOctave(true));
			return token.substr(6);
		});				
		
		
	}	
	
	override private function tokenFinished(originaltoken:String) 
	{
		//trace('mode is taken care of');
	}
	
	override public function recieveEvent(event:ParserEvents) 
	{
		//trace('RECIEVED EVENT by ModeParser ' + event);
	}
	
}