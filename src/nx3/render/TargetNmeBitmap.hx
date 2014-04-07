package nx3.render;
import nme.display.Sprite;
import nx3.render.scaling.TScaling;
import nx3.render.TargetSpriteBase;
import nx3.render.tools.RenderTools;

/**
 * ...
 * @author Jonas Nyström
 */
class TargetNmeBitmap  extends TargetSpriteBase implements ITarget
{
	//var target:Sprite;
	public function new(scaling:TScaling) 
	{		
		this.target = new Sprite();
		super(this.target, scaling);
		this.scaling = scaling;
	}
	
	public function saveBitmap(filename:String)
	{		
		RenderTools.spriteToPng(this.target, filename);
	}
	
}