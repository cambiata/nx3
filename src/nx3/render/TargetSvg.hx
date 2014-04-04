package nx3.render;

/**
 * ...
 * @author Jonas Nyström
 */
class TargetSvg implements ITarget
{
	var targetDivId:String;
	var indexHtmlFilename:String;

	public function new(targetDivId: String, indexHtmlFilename:String=null) 
	{
		this.targetDivId = targetDivId;
		this.indexHtmlFilename = indexHtmlFilename;
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function test():Void 
	{
		
	}
	
	
}