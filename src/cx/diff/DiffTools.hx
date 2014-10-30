package cx.diff;
import cx.diff.mtwin.text.Diff;
import haxe.Serializer;
import haxe.Unserializer;
import haxe.Json;
using StringTools;
/**
 * DiffTools
 * @author Jonas Nyström
 */
class DiffTools 
{	
	static public function diffObject(obj1:Dynamic, obj2:Dynamic):String {
		return Diff.diff(serializeObject(obj1), serializeObject(obj2));
	}
		
	static public function patchOject(obj:Dynamic, diff:String):Dynamic {
		var patchedStr = Diff.patch(serializeObject(obj), diff);
		return unserializeObject(patchedStr);
	}
	
	static public function unpatchObject(obj:Dynamic, diff:String):Dynamic {
		var unpatchedStr = Diff.unpatch(serializeObject(obj), diff);
		return unserializeObject(unpatchedStr);				
	}
	
	//-------------------------------------------------------------------------------------------------------
	
	static private function serializeObject(obj:Dynamic):String {
		Serializer.USE_CACHE = true;
		var sObj =  Serializer.run(obj);
		sObj = sObj.replace(':', '\n') + '\n';	
		return sObj;
	}
	
	static private function unserializeObject(objString:String):Dynamic {
		objString = objString.substr(0, -1);
		objString = objString.replace('\n', ':');		
		return Unserializer.run(objString);
	}
}