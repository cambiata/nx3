package nx3.qs;
import nx3.qs.QuickSyntaxParser.ContentMode;

/**
 * ...
 * @author Jonas Nyström
 */
class ModeParser extends BaseParser
{
	public var mode:ContentMode;
	
	public function new(parser:QuickSyntaxParser)
	{
		super(parser);
		//super.createFunctions();
		this.mode = ContentMode.Notes(0);
	}
	
	
	override public function createFunctions()
	{
		this.functions.set('notes:', function (token:String) {
			this.mode = ContentMode.Notes(0);
			trace('handle notes...');
			return token.substr(6);
		});

		this.functions.set('tpls:', function (token:String) {
			this.mode = ContentMode.Tpls;
			trace('handle tpls...');
			return token.substr(5);
		});
		
		this.functions.set('lyrics:', function (token:String) {
			this.mode = ContentMode.Lyrics;
			trace('handle lyrics...');
			return token.substr(7);
		});

		this.functions.set('xxx', function (token:String) {
			this.mode = ContentMode.Lyrics;
			trace('handle xxx...');
			return token.substr(3);
		});		
		
		
	}	
	
	override private function tokenFinished(originaltoken:String) 
	{
		trace('mode is taken care of');
	}
	
	override public function recieveEvent(event:ParserEvents) 
	{
		trace('RECIEVED EVENT by ModeParser ' + event);
	}
	
}