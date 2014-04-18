package nx3.qs;
import cx.ArrayTools;

/**
 * ...
 * @author Jonas Nyström
 */

 using StringTools;
class BaseParser
{
	var builder:QuickSyntaxParser;

	public var functions :Map < String, String->String > ;
	
	public function new(builder:QuickSyntaxParser)
	{
		this.builder = builder;
		this.functions = new  Map < String, String->String > ();
		this.createFunctions();
	}
	
	function getTokenfunction(functions: Map<String, String->String>, token:String):String->String
	{
		
			var keys:Array<String> = ArrayTools.fromHashKeys(functions.keys());
			keys.sort(function(a, b)	return -Reflect.compare(a.length, b.length));
		
			for (key in keys)
			{
				if (token.startsWith(key))
				{
					return functions.get(key);
				}
			}
			
			for (key in keys)
			{
				if (key == '__ALL__') return functions.get(key);
			}				
			
			return null;
	}	

	
	public function parse(token:String, parser:QuickSyntaxParser):String
	{
		
		
		var originaltoken = token;
		var func = this.getTokenfunction(this.functions, token);
		while (func != null)
		{
			token = Reflect.callMethod(null, func, [token]);
			//trace('Rest1: ' + token);
			if (token == '') 
			{
				this.tokenFinished(originaltoken);
				return ''; // klart o betart!
			}
			
			func = this.getTokenfunction(this.functions, token);
		}
		
		if (originaltoken == token)
		{
			return token;
		}
		//trace('Rest2 - Should not be handled further: ' + token);
		return '';
	}
	
	function tokenFinished(originaltoken:String)
	{
		trace('all is taken care of');
	}

	public function createFunctions()
	{
		trace('should be overridden');
	}
	
	public function  sendEvent(event:ParserEvents)
	{
		this.builder.passEvent(event);
	}
	
	public function recieveEvent(event:ParserEvents)
	{
		throw 'shouldBeOverridden';
	}
	
}

