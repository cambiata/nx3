package nx3.render;
import nx3.render.scaling.TScaling;
import nx3.render.svg.Elements;
import nx3.render.svg.ShapeTools;


#if (nme)
import nme.text.TextFormat;
import nme.text.TextField;
import nme.display.Shape;
import nme.display.Sprite;
import nme.display.Graphics;
import nme.Lib;
#else
import flash.text.TextFormat;
import flash.text.TextField;
import flash.display.Shape;
import flash.display.Sprite;
import flash.display.Graphics;
import flash.Lib;
#end



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
	
	/* INTERFACE nx3.render.ITarget */
	
	public function testSymbol(x:Float, y:Float, xmlStr:String=null):Void 
	{
		if (xmlStr == null) xmlStr = Elements.noteWhite;
		var shape:Shape = ShapeTools.getShape(xmlStr, this.scaling);
		shape.x = x + /*rect.x * scaling.halfNoteWidth +*/ scaling.svgX;
		shape.y = y + /*rect.y * scaling.halfSpace +*/ scaling.svgY;	
		this.target.addChild(shape);		
	}
	
}