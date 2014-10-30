package cx.diff;
import cx.diff.DiffTools;
import cx.diff.mtwin.text.Diff;
import haxe.Json;
import haxe.Serializer;
import haxe.Unserializer;

/**
 * DiffPatch
 * @author Jonas Nyström
 */

class Differ
{
	//var originalObject:Dynamic;
	var currentObject:Dynamic;
	var diffinfos:Array<DiffInfo>;
	
	public function new (originalObject:Dynamic) {
		this.diffinfos = [];
		this.currentObject = { };
		this.modify(originalObject, 'Init');
	}
	
	public function modify(modifiedObject:Dynamic, label:String="Change") {
		var diff = DiffTools.diffObject(this.currentObject, modifiedObject);
		var diffstamp:DiffInfo = {
			time:Date.now(),
			label:label,
			diff:diff,
		}
		this.diffinfos.push(diffstamp);
		this.currentObject = modifiedObject;
	}
	
	public function undo(): { info:DiffInfo, obj:Dynamic } {		
		if (this.diffinfos.length <= 1) throw "Nothing to undo";
		var lastdiff = this.diffinfos.pop();		
		var restoredObject = DiffTools.unpatchObject(this.currentObject, lastdiff.diff);
		this.currentObject = restoredObject;
		return {info:lastdiff, obj:restoredObject};		
	}
	
	public function current():Dynamic return Unserializer.run(Serializer.run(this.currentObject));
	
	public function initial():Dynamic {
		var firstdiff = diffinfos[0];
		return DiffTools.patchOject( { }, firstdiff.diff);				
	}
	
	public function getDiffinfos():Array<DiffInfo>
	{
		return this.diffinfos;
	}
	
	public function test(obj1:Dynamic, obj2:Dynamic)
	{
		var diff = DiffTools.diffObject(obj1, obj2);
		var patched = DiffTools.patchOject(obj1, diff);		
		var unpatched = DiffTools.unpatchObject(obj2, diff);
		
		trace(obj1);
		trace(obj2);
		trace(patched);
		trace(unpatched);
		
		
		
	}
	
}

typedef DiffInfo = {
	label:String,
	time:Date,
	diff:String,
}