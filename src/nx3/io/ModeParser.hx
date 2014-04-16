package nx3.io;
import nx3.io.QuickSyntax.ContentMode;

/**
 * ...
 * @author Jonas Nyström
 */
class ModeParser extends BaseParser
{
	public var mode:ContentMode;
	
	public function new(parser:QuickSyntax)
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
	
	override private function tokenFinished() 
	{
		trace('mode is taken care of');
	}
}