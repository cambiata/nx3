package;

#if (flash)
import flash.utils.ByteArray;
#end

#if (nme)
import nme.utils.ByteArray;
#end


/**
 * Main
 * @author Jonas Nyström
 */

 #if (flash)
 @:file("bin/test1.mp3") class Mp3Data extends ByteArray {}
 #end
 
class Main 
{	
	static function main() 
	{
		//var mp3data:ByteArray = null;
		#if (flash)
			mp3data = new Mp3Data();
		#end
		trace('Hello');
	}	
	
	
}