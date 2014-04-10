package nx3.render;

/**
 * ...
 * @author Jonas Nyström
 */

 import flash.display.Graphics;
 import flash.display.Sprite;
 import flash.geom.Rectangle;
 import nx3.geom.Rectangles;
 import nx3.render.scaling.TScaling;

 class TargetOpenFl extends TargetSpriteBase implements ITarget
{

	public function new(?target:Sprite=null, scaling:TScaling) 
	{
		if (target == null) target = new Sprite();
		super(target, scaling);
	}
	
	public function getTargetSprite(x:Float = 0, y:Float = 0):Sprite 
	{
		this.target.x = x;
		this.target.y = y;
		return this.target;
	}
	
	override public function getScaling():TScaling 
	{
		return this.scaling;
	}	
	
	/* INTERFACE nx3.render.ITarget */
	
	
	/* INTERFACE nx3.render.ITarget */
	

	
	/* INTERFACE nx3.render.ITarget */
	

	
	
}