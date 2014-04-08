package nx3.render;

/**
 * ...
 * @author Jonas Nyström
 */

 import flash.display.Graphics;
 import flash.display.Sprite;
 import nx3.render.scaling.TScaling;

 class TargetOpenFl extends TargetSpriteBase implements ITarget
{

	public function new(?target:Sprite=null, scaling:TScaling) 
	{
		if (target == null) target = new Sprite();
		super(target, scaling);
	}
	
	public function getTarget():Sprite return this.target;
	
	override public function getScaling():TScaling 
	{
		return this.scaling;
	}	
	
	
}