package nx3.io;

/**
 * ...
 * @author Jonas Nyström
 */

 using StringTools;
class BaseParser
{
	var parser:QuickSyntax;

	public var functions :Map < String, String->String > ;
	
	public function new(parser:QuickSyntax)
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

	
	public function parse(token:String, parser:QuickSyntax):String
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
			return token;
		}
		trace('Rest2 - Should not be handled further: ' + token);
		return '';
	}

	public function createFunctions()
	{
		trace('should be overridden');
	}
}