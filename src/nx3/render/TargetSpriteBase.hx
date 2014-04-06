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
		this.graphics.drawRect(10, 10, 100, 100);
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function testLines(x:Float, y:Float, width:Float):Void 
	{
		this.target.graphics.lineStyle(this.scaling.linesWidth, 0xAAAAAA);	
		
		for (i in -2...3)
		{
			var cy = y + i * scaling.space;
			this.target.graphics.moveTo(x, cy);
			this.target.graphics.lineTo(x + width, cy);			
		}		
		
	}
	
}