package nx3.io;

/**
 * ...
 * @author Jonas Nyström
 */
class BarParser extends BaseParser
{
	public function new(parser:QuickSyntax) 
	{
		super(parser);
	}
	
	override public function createFunctions()
	{
		this.functions.set('|', function (token:String) {
			trace('Handle new bar...');
			return token.substr(1);
		});
		
		this.functions.set('/', function (token:String) {
			trace('Handle new part...');
			return token.substr(1);
		});

		this.functions.set('%', function (token:String) {
			trace('Handle new voice...');
			return token.substr(1);
		});		
	}
	
}