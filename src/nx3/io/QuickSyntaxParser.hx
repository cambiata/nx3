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
	var notes:Map<BPVIndex, NNote>;
	var bi:Int = 0;
	var pi:Int = 0;
	var vi:Int = 0;
	
	
	
	public function new(str:String) 
	{
		this.str = str.trim().replace('  ', ' ').replace('  ', ' ').replace('  ', ' ');
		this.tokens = parseTokens(this.str);
	}
	
	public function parse1()
	{
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