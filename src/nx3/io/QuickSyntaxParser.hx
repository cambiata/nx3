package nx3.io;

import nx3.ENoteVal;
import nx3.ESign;
import nx3.io.QuickSyntaxParser;
import nx3.io.QuickSyntaxParser.ContentMode;
import nx3.io.QuickSyntaxParser.ModeParser;
import nx3.io.QuickSyntaxParser.NoteParser;
import nx3.NHead;
import nx3.NNote;
using StringTools;
/**
 * ...
 * @author Jonas Nyström
 */
class QuickSyntaxParser
{
	var str:String;
	var tokens:Array<String>;
	var notes:Map<BPVIndex, Array<NNote>>;
	var barIndex:Int;
	var partIndex:Int;
	var voiceIndex:Int;
	
	var modefunctions:Map < String, Void->Void > ;
	var contentmodeOctave:Int;
	var contentmode:ContentMode;
	
	var notefunctions:Map < String, String->String> ;
	
	var notelevels:Array<Int>;
	var notevalue:ENoteVal;
	var notesigns:Array<ESign>;
	
	var nnotes:Array<NNote>;
	var modeparser:ModeParser;
	var noteparser:NoteParser;
	
	
	public function new(str:String) 
	{
		this.str = str.trim().replace('  ', ' ').replace('  ', ' ').replace('  ', ' ');
		this.tokens = parseTokens(this.str);
		this.modefunctions = new Map < String, Void->Void> ();
		this.notefunctions= new Map < String, String->String> ();
		
		this.barIndex = 0;
		this.partIndex = 0;
		this.voiceIndex = 0;
			
		this.notelevels = [];
		this.notesigns = [];
		this.notevalue = ENoteVal.Nv4;
		
		this.contentmodeOctave = 0;
		this.contentmode = ContentMode.Notes(contentmodeOctave);

		this.nnotes = [];
		this.modeparser = new ModeParser(this);
		this.noteparser = new NoteParser(this);
	}
	
	public function parse1()
	{
		for (token in this.tokens)
		{
			var testtoken = token;
			
			trace('NEW TOKEN: $token');
			testtoken = this.modeparser.parse(token, this);
			if (testtoken == '') continue;
			
			
			
		}
		
		return null;
	}
	
	function getTokenfunction(functions: Map<String, String->String>, token:String):String->String
	{
			for (key in functions.keys())
			{
				if (token.startsWith(key))
				{
					return functions.get(key);
				}
				
			}
			return null;
	}
	
	function parseTokens(str:String) :Array<String>
	{
		var result:Array<String> = [];
		result = str.split(' ');
		return result;
	}
	
}

typedef BPVIndex = { barIndex:Int, partIndex:Int, voiceIndex:Int };

enum ContentMode 
{
	Notes(octave:Int);
	Tpls;
	Lyrics;
}

class BaseParser
{
	var parser:QuickSyntaxParser;

	public var functions :Map < String, String->String > ;
	
	public function new(parser:QuickSyntaxParser)
	{
		this.parser = parser;
		this.functions = new  Map < String, String->String > ();
		this.createFunctions();
	}
	
	function getTokenfunction(functions: Map<String, String->String>, token:String):String->String
	{
			trace(' - serach function for token ' + token);
		
			for (key in functions.keys())
			{
				if (token.startsWith(key))
				{
					return functions.get(key);
				}
			}
			trace(' - token not found');
			return null;
	}	

	
	public function parse(token:String, parser:QuickSyntaxParser):String
	{
		var originaltoken = token;
		var func = this.getTokenfunction(this.functions, token);
		while (func != null)
		{
			token = Reflect.callMethod(null, func, [token]);
			trace('Rest1: ' + token);
			if (token == '') 
			{
				trace('all is taken care of...');
				return ''; // klart o betart!
			}
			
			func = this.getTokenfunction(this.functions, token);
		}
		
		if (originaltoken == token)
		{
			trace('Nothing is done to token $token in this parser!');
		}
		trace('Rest2 - Should be handled further: ' + token);
		return token;
	}

	public function createFunctions()
	{
		trace('should be overridden');
	}
}

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
}

class NoteParser extends BaseParser
{

	var notelevels:Array<Int>;
	var notevalue:ENoteVal;
	var notesigns:Array<ESign>;
	
	public function new(parser:QuickSyntaxParser)
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
	}	
	
	
	
	
}

