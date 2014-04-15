package nx3.io;

/**
 * ...
 * @author Jonas Nyström
 */
class NoteParser extends BaseParser
{

	var notelevels:Array<Int>;
	var notevalue:ENoteVal;
	var notesigns:Array<ESign>;
	
	public function new(parser:QuickSyntax)
	{
		super(parser);

		this.notelevels = [];
		this.notesigns = [];
		this.notevalue = ENoteVal.Nv4;
	}
	
	override public function createFunctions()
	{
		this.functions.set('c#', function (token:String) {
			trace('handle c sharp...');
			return token.substr(2);
		});

		this.functions.set('cb', function (token:String) {
			trace('handle c flat...');
			return token.substr(2);
		});
		
		this.functions.set('cn', function (token:String) {
			trace('handle c natural...');
			return token.substr(2);
		});

		this.functions.set('c', function (token:String) {
			trace('handle c...');
			return token.substr(1);
		});		
		
		this.functions.set('4.', function (token:String) {
			trace('handle 4 dot...');
			return token.substr(2);
		});		
		
		this.functions.set('4', function (token:String) {
			trace('handle 4...');
			return token.substr(1);
		});
		
		this.functions.set('^', function (token:String) {
			trace('handle octave up...');
			return token.substr(1);
		});		

		this.functions.set('v', function (token:String) {
			trace('handle octave down...');
			return token.substr(1);
		});		
		
		
	}	
	
	
	
	
}