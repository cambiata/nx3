package nx3.render;
import nx3.Constants;
import nx3.EDirectionUD;
import nx3.geom.Rectangles;
import nx3.geom.Rectangle;
import nx3.render.scaling.Scaling;
import nx3.render.scaling.TScaling;
import nx3.render.svg.SvgElements;
import nx3.render.svg.ShapeTools;
import nx3.TFontInfo;
import nx3.TPoints;
import nx3.VBeamgroup;
import nx3.VNote;


#if (nme)
import nme.text.TextFieldAutoSize;
import nme.text.TextFormat;
import nme.text.TextField;
import nme.display.Shape;
import nme.display.Sprite;
import nme.display.Graphics;
import nme.Lib;
#else
import flash.text.TextFieldAutoSize;
import flash.text.TextFormat;
import flash.text.TextField;
import flash.display.Shape;
import flash.display.Sprite;
import flash.display.Graphics;
import flash.Lib;
#end

using nx3.ENoteValTools;
using cx.ArrayTools;
/**
 * ...
 * @author Jonas Nyström
 */
class TargetSprite  implements ITarget
{
	var graphics:Graphics;
	var scaling:TScaling;
	var sprite:Sprite;

	public function new(?target:Sprite, ?scaling:TScaling) 
	{
		if (target == null) target = new Sprite();
		this.sprite = target;
		this.graphics = target.graphics;
		this.scaling = (scaling != null) ? scaling : Scaling.NORMAL;
		this.textformat = new TextFormat();
		this.textfield = new TextField();
		this.setFont(Constants.FONT_TEXT_DEFAULTFORMAT);
	}
	
	public function getTargetSprite(x:Float = 0, y:Float = 0):Sprite 
	{
		this.sprite.x = x;
		this.sprite.y = y;
		return this.sprite;
	}	
	
	public function testLines(x:Float, y:Float, width:Float):Void 
	{
		this.sprite.graphics.lineStyle(this.scaling.linesWidth, 0xAAAAAA);	
		
		for (i in -2...3)
		{
			var cy = y + i * scaling.space;
			this.sprite.graphics.moveTo(x, cy);
			this.sprite.graphics.lineTo(x + width, cy);			
		}		
		
	}
	
	public function rect(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int):Void 
	{
		this.sprite.graphics.lineStyle(lineWidth, lineColor);
		this.sprite.graphics.drawRect(x+ rect.x, y+rect.y, rect.width, rect.height);		
	}
	
	
	public function rectangle(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float=1, ?lineColor:Int=0x000000):Void 
	{ 
		this.sprite.graphics.lineStyle(lineWidth, lineColor);
		this.sprite.graphics.drawRect(x+ rect.x*scaling.halfNoteWidth, y+rect.y*scaling.halfSpace, rect.width*scaling.halfNoteWidth, rect.height*scaling.halfSpace);
	}	

	public function rectangles(x:Float, y:Float, rects:Rectangles, ?lineWidth:Float=1, ?lineColor:Int=0x000000):Void 
	{
			for (rect in rects) this.rectangle(x, y, rect, lineWidth, lineColor);
	}	
	
	public function getScaling():TScaling 
	{
		return this.scaling;
	}
	
	public function line(x:Float, y:Float, x2:Float, y2:Float, ?lineWidth:Float=1, ?lineColor:Int=0x000000):Void 
	{
		this.sprite.graphics.lineStyle(lineWidth*scaling.linesWidth, lineColor);
		this.sprite.graphics.moveTo(x, y);
		this.sprite.graphics.lineTo(x2, y2);
	}
	
	public function shape(x:Float, y:Float, xmlStr:String,  ?fillColor:Int=0x000000):Void 
	{
		var shape:Shape = ShapeTools.getShape(xmlStr, this.scaling);
		shape.x = x;
		shape.y = y + scaling.svgY;
		this.sprite.addChild(shape);		
	}
	
	public function text(x:Float, y:Float, text:String):Void 
	{
		var textfield = new TextField();
		textfield.defaultTextFormat = this.textformat;
		textfield.text = text;
		textfield.x = x + Constants.FONT_TEXT_X_ADJUST_FLASH * this.scaling.halfNoteWidth;
		textfield.y = y + Constants.FONT_TEXT_Y_ADJUST_FLASH * this.scaling.halfSpace;
		textfield.autoSize = TextFieldAutoSize.LEFT;
		textfield.selectable = false;
		this.sprite.addChild(textfield);
	}
	
	var textfield:TextField;
	var textformat:TextFormat;
	
	public function textwidth(text:String):Float 
	{
		this.textfield.text = text;
		var width = this.textfield.textWidth / this.scaling.halfNoteWidth;
		return width;
	}
	
	public function textheight(text:String):Float 
	{
			return this.textformat.size / this.scaling.halfSpace;
	}	
	
	public function setFont(font:TFontInfo):Void 
	{
		this.textformat.font = font.name;
		this.textformat.size = font.size * this.scaling.fontScaling;
		this.textformat.bold = font.bold;
		this.textformat.italic = font.italic;		
		this.textfield.defaultTextFormat = this.textformat;
		this.textfield.autoSize = TextFieldAutoSize.LEFT;
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function filledrectangle(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void 
	{
		this.sprite.graphics.beginFill(fillColor);
		this.sprite.graphics.lineStyle(lineWidth*this.scaling.linesWidth, lineColor);
		this.sprite.graphics.drawRect(x+ rect.x*scaling.halfNoteWidth, y+rect.y*scaling.halfSpace, rect.width*scaling.halfNoteWidth, rect.height*scaling.halfSpace);
		this.sprite.graphics.endFill();
	}
	
	public function filledellipse(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void 
	{
		//trace(rect.width * scaling.halfNoteWidth);
		//trace(rect.height * scaling.halfSpace);
		this.sprite.graphics.beginFill(fillColor);
		this.sprite.graphics.lineStyle(lineWidth*this.scaling.linesWidth, lineColor);
		this.sprite.graphics.drawEllipse(x+ rect.x*scaling.halfNoteWidth, y+rect.y*scaling.halfSpace, rect.width*scaling.halfNoteWidth, rect.height*scaling.halfSpace);
		this.sprite.graphics.endFill();
	}
	
	//------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
	function drawShape(shape:Shape, x:Float, y:Float, rect:Rectangle)
	{
		if (shape == null) return;
		shape.x = x + rect.x * scaling.halfNoteWidth + scaling.svgX;
		shape.y = y + rect.y * scaling.halfSpace + scaling.svgY;
		this.sprite.addChild(shape);
	}		
	
}