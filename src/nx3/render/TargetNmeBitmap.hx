package nx3.render;
import nme.display.Sprite;
import nx3.render.scaling.TScaling;
import nx3.render.TargetSprite;
import nx3.render.tools.RenderTools;

/**
 * ...
 * @author Jonas Nyström
 */
class TargetNmeBitmap  extends TargetSprite implements ITarget
{
	public function saveBitmap(filename:String)
	{		
		RenderTools.spriteToPng(this.sprite, filename, 0, 0);
	}
	
}