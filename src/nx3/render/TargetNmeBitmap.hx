package nx3.render;
import nx3.render.scaling.TScaling;

/**
 * ...
 * @author Jonas Nyström
 */
class TargetNmeBitmap  extends TargetSpriteBase implements ITarget
{
	var scaling:TScaling;
	var filename:String;

	public function new(filename:String, scaling:TScaling) 
	{
		this.filename = filename;
		this.scaling = scaling;
	}
	
}