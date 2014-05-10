package nx3.render.tools;
import nx3.TFontInfo;


#if (nme)
import nme.text.TextFieldAutoSize;
import nme.text.TextFormat;
import nme.text.TextField;
import nme.display.Shape;
import nme.display.Sprite;
import nme.display.Graphics;
import nme.Lib;
#end

#if (flash || openfl)
import flash.text.TextFieldAutoSize;
import flash.text.TextFormat;
import flash.text.TextField;
import flash.display.Shape;
import flash.display.Sprite;
import flash.display.Graphics;
import flash.Lib;
#end

#if (html5)
import js.Browser;
import js.html.CanvasElement;
import js.html.CanvasRenderingContext2D;
#end


/**
 * ...
 * @author Jonas Nyström
 */
class TextMetrics
{
	var font:TFontInfo;

	public function new(font:TFontInfo) 
	{
		this.font = font;
	}
	
	
	#if (html5)
	var context:CanvasRenderingContext2D;
	public function textwidth(text:String):Float 
	{
		if (this.context == null)
		{
			var canvas:CanvasElement = cast Browser.document.getElementById(Constants.JS_CANVAS_TEXT_MEASUREMENT);
			if (canvas == null) Lib.alert('Canvas element ${Constants.JS_CANVAS_TEXT_MEASUREMENT} is missing!');
			this.context = canvas.getContext2d();
		}
		var fontsize = this.font.size * this.scaling.fontScaling;
		var fontstr = '${fontsize}px ${this.font.name}';
		this.context.font = fontstr;
		trace(fontstr);
		var measure = context.measureText(text);
		trace(measure.width);
		return measure.width / this.scaling.unitX;
	}	
	#end
	
	#if (flash || openfl || nme)
	var textfield:TextField;
	var textformat:TextFormat;
	
	public function textwidth(text:String):Float 
	{
		if (this.textfield == null) this.textfield = new TextField();
		this.setFont(this.font);
		this.textfield.text = text;
		var width = this.textfield.textWidth;
		return width;
	}
	
	public function setFont(font:TFontInfo):Void 
	{
		if (this.textfield == null) this.textfield = new TextField();
		if (this.textformat == null) this.textformat = new TextFormat();
		this.textformat.font = font.name;
		this.textformat.size = font.size;
		this.textformat.bold = font.bold;
		this.textformat.italic = font.italic;		
		this.textfield.defaultTextFormat = this.textformat;
		this.textfield.autoSize = TextFieldAutoSize.LEFT;
	}
	#end
	
}