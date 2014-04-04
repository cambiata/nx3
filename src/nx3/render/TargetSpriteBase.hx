package nx3.render;
import flash.display.Graphics;
import flash.display.Sprite;
import nx3.render.scaling.TScaling;

/**
 * ...
 * @author Jonas Nyström
 */
class TargetSpriteBase  implements ITarget
{
	var graphics:Graphics;
	var scaling:TScaling;
	var target:Sprite;

	public function new(target:Sprite, scaling:TScaling) 
	{
		this.target = target;
		this.graphics = target.graphics;
		this.scaling = scaling;
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function test() 
	{
		this.graphics.beginFill(0xFF0000);
		this.graphics.drawRect(0, 0, 100, 100);
	}
	
}