package nx3.render;


import nx3.Constants;
import nx3.EDirectionUD;
import nx3.geom.Pnt;
import nx3.geom.Pnts;
import nx3.geom.Point;
import nx3.geom.Rectangles;
import nx3.geom.Rectangle;
import nx3.action.EActionType;
import nx3.action.EActivityType;

import nx3.render.scaling.Scaling;
import nx3.render.scaling.TScaling;
import nx3.render.svg.SvgElements;
import nx3.render.svg.ShapeTools;
import nx3.TFontInfo;
import nx3.TPoints;

#if (nme)
import nme.text.TextFieldAutoSize;
import nme.text.TextFormat;
import nme.text.TextField;
import nme.display.Shape;
import nme.display.Sprite;
import nme.display.Graphics;
import nme.Lib;

#else
import nx3.render.el.HoverSprite;
import cx.flash.Tooltipsprite;
import flash.events.MouseEvent;
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

	public var totalHeight:Float;
	public var totalWidth:Float;
	
	public function new(?target:Sprite, ?scaling:TScaling) 
	{
		if (target == null) target = new Sprite();
		this.sprite = target;
		this.graphics = target.graphics;
		this.scaling = (scaling != null) ? scaling : Scaling.NORMAL;
		this.textformat = new TextFormat();
		this.textfield = new TextField();
		this.setFont(Constants.FONT_TEXT_DEFAULTFORMAT);
		this.totalHeight = .0;
		this.totalWidth = .0;
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
		this.sprite.graphics.drawRect(x+ rect.x*scaling.unitX, y+rect.y*scaling.unitY, rect.width*scaling.unitX, rect.height*scaling.unitY);
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
		textfield.x = x + Constants.FONT_TEXT_X_ADJUST_FLASH * this.scaling.unitX;
		textfield.y = y + Constants.FONT_TEXT_Y_ADJUST_FLASH * this.scaling.unitY;
		textfield.autoSize = TextFieldAutoSize.LEFT;
		textfield.selectable = false;
		this.sprite.addChild(textfield);
	}
	
	var textfield:TextField;
	var textformat:TextFormat;
	//var tooltip:Tooltipsprite;
	
	public function textwidth(text:String):Float 
	{
		this.textfield.text = text;
		var width = this.textfield.textWidth / this.scaling.unitX;
		return width;
	}
	
	public function textheight(text:String):Float 
	{
			return this.textformat.size / this.scaling.unitY;
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
		this.sprite.graphics.drawRect(x+ rect.x*scaling.unitX, y+rect.y*scaling.unitY, rect.width*scaling.unitX, rect.height*scaling.unitY);
		this.sprite.graphics.endFill();
	}
	
	public function filledellipse(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void 
	{
		//trace(rect.width * scaling.halfNoteWidth);
		//trace(rect.height * scaling.halfSpace);
		this.sprite.graphics.beginFill(fillColor);
		this.sprite.graphics.lineStyle(lineWidth*this.scaling.linesWidth, lineColor);
		this.sprite.graphics.drawEllipse(x+ rect.x*scaling.unitX, y+rect.y*scaling.unitY, rect.width*scaling.unitX, rect.height*scaling.unitY);
		this.sprite.graphics.endFill();
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function parallellogram(x:Float, y:Float, x2:Float, y2:Float, pheight:Float,?lineWidth:Float=1, ?lineColor:Int=0x000000, ?fillColor:Int=0xFF0000):Void 
	{
		var g = this.sprite.graphics;
		g.lineStyle(lineWidth * this.scaling.linesWidth, lineColor);
		g.beginFill(fillColor);
		g.moveTo(x, y);
		g.lineTo(x2, y2);
		g.lineTo(x2, y2 + pheight);
		g.lineTo(x, y + pheight);
		g.lineTo(x, y);
		this.sprite.graphics.endFill();
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function clear():Void 
	{
		this.sprite.graphics.clear();
		while (this.sprite.numChildren > 0) this.sprite.removeChildAt(0);
		//this.sprite.addChild(this.spriteInteractive);
	}
	
	//------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
	function drawShape(shape:Shape, x:Float, y:Float, rect:Rectangle)
	{
		if (shape == null) return;
		shape.x = x + rect.x * scaling.unitX + scaling.svgX;
		shape.y = y + rect.y * scaling.unitY + scaling.svgY;
		this.sprite.addChild(shape);
	}		
	
	
	public function bezieerX(anchor1:Pnt, control1:Pnt, control2:Pnt, anchor2:Pnt, ?lineWidth:Float=1, ?lineColor:Int=0x000000):Void
	{
			var anchor1:Point = new Point(100, 100);
			var control1:Point = new Point(100, 10);
			var control2:Point = new Point(300, 10);
			var anchor2:Point = new Point(300, 100);
		
			var coord:Pnts = [];
			
			coord.push(anchor1);
			
			var posx:Float;
			var posy:Float;
			 
			for (i in 0...100)
			{
				var u = i / 100;
				
				posx = Math.pow(u,3)*(anchor2.x+3*(control1.x-control2.x)-anchor1.x)
				+3*Math.pow(u,2)*(anchor1.x-2*control1.x+control2.x)
				+3*u*(control1.x-anchor1.x)+anchor1.x;
				
				posy = Math.pow(u,3)*(anchor2.y+3*(control1.y-control2.y)-anchor1.y)
				+3*Math.pow(u,2)*(anchor1.y-2*control1.y+control2.y)
				+3*u*(control1.y-anchor1.y)+anchor1.y;
			 
				coord.push({x:posx, y:posy});
			}
			
			coord.push(anchor2);			

			this.sprite.graphics.lineStyle(lineWidth, lineColor);
			this.sprite.graphics.moveTo(anchor1.x,anchor1.y);

			for (co in coord)
			{
				this.sprite.graphics.lineTo(co.x, co.y);				
			}

	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function polyline(x:Float, y:Float, coordinates:Pnts, ?lineWidth:Float=1, ?lineColor:Int = 0x000000):Void 
	{
			this.sprite.graphics.lineStyle(lineWidth, lineColor);
			
				var first = coordinates.shift();
				this.sprite.graphics.moveTo(x + first.x*this.scaling.unitX, y + first.y*this.scaling.unitY);

			
			for (co in coordinates) 
			{
				this.sprite.graphics.lineTo(x + co.x*this.scaling.unitX, y + co.y*this.scaling.unitY);				
			}		
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function polyfill(x:Float, y:Float, coordinates:Pnts, ?lineWidth:Float = 1, ?lineColor:Int = 0x000000, fillColor:Int = 0x0000FF):Void 
	{
		this.sprite.graphics.beginFill(fillColor);
		this.polyline(x, y, coordinates, lineWidth, lineColor);
		this.sprite.graphics.endFill();
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function interactiveEllipse(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int=0x00FF00, cb:EActivityType->Void=null):Void 
	{
		
		/*
		var rect = scaleRect(rect, 1, 1.2);
		var s = new HoverSprite(rect, lineColor, lineWidth);
		
		
		s.x = x;
		s.y = y;
		this.sprite.addChild(s);
		
		s.addEventListener(MouseEvent.ROLL_OVER, function(e) {			
			if (cb != null) cb(EActivityType.MouseOver);
		});
		s.addEventListener(MouseEvent.ROLL_OUT, function(e) {
			if (cb != null) cb(EActivityType.MouseOut);
		});
		s.addEventListener(MouseEvent.MOUSE_DOWN, function(e) {
			if (cb != null) cb(EActivityType.MouseDown);
		});
		s.addEventListener(MouseEvent.MOUSE_UP, function(e) {
			if (cb != null) cb(EActivityType.MouseUp);
		});
		*/
		
		
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function scaleRect(rect:Rectangle, inflateX:Float=0, inflateY:Float=0):Rectangle return 
	{
		var result = new Rectangle(rect.x * this.scaling.unitX, rect.y * this.scaling.unitY, rect.width * this.scaling.unitX, rect.height * this.scaling.unitX);
		if (inflateX != 0 || inflateY != 0) result.inflate(inflateX * this.scaling.unitX, inflateY*this.scaling.unitY);
		return result;
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function tooltipShow(rect:Rectangle, text:String) 
	{
		
		/*
		if (this.tooltip == null) {
			
			this.tooltip = new Tooltipsprite(new Rectangle(10, 10, 140, 40));
			this.sprite.addChild(this.tooltip);
		}
		this.tooltip.x = rect.x;
		this.tooltip.y = rect.y;
		this.tooltip.alpha = 1;
		this.tooltip.draw(text, rect);		
		*/
		
		
	}
	
	public function tooltipHide() 
	{
		/*
		if (this.tooltip != null) 
		{
			this.tooltip.alpha = 0;
			this.tooltip.x = -200;
		}
		*/
	}
	
}