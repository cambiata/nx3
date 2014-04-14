package nx3.io;
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
	var bi:Int = 0;
	var pi:Int = 0;
	var vi:Int = 0;
	
	var tokenfunctions:Map < String, String->String > ;
	
	public function new(str:String) 
	{
		this.str = str.trim().replace('  ', ' ').replace('  ', ' ').replace('  ', ' ');
		this.tokens = parseTokens(this.str);
		this.tokenfunctions = new Map < String, String->String> ();
		this.tokenfunctions.set('test', function (str:String):String { 
			return str += ' world!'; 
			this.bi++; 
		});
	}
	
	public function parse1()
	{
		var fn = this.tokenfunctions.get('test');
		var result = Reflect.callMethod(null, fn, ['Hello']);
		
		for (token in this.tokens)
		{
			switch(token)
			{
				case '|': // new bar
				case '/': //new part
				case '%': //new voice
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

typedef BPVIndex = { b:Int, p:Int, v:Int };