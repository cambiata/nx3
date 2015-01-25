package nx3.render;
import nx3.geom.Pnt;
import nx3.geom.Pnts;
import nx3.geom.Rectangles;
import nx3.geom.Rectangle;
import nx3.action.EActivityType;
import nx3.render.scaling.Scaling;
import nx3.render.scaling.TScaling;

#if (js)
import js.Browser;
import js.html.CanvasElement;
import js.html.CanvasRenderingContext2D;
import js.JQuery;
import js.Lib;
#end

#if (nme)
import nme.text.TextField;
import nme.text.TextFormat;
#end




/**
 * ...
 * @author Jonas Nyström
 */
class TargetSvgXml implements ITarget
{
	var svg:Xml;
	var scaling:TScaling;
	var svgId:String;

	public var totalHeight:Float;
	public var totalWidth:Float;	
	
	public function new(svgId:String, ?scaling:TScaling) 
	{
		this.svgId = svgId;
		this.svg = Xml.createElement('svg');
		this.svg.set('id', svgId);
		this.scaling = (scaling != null) ? scaling : Scaling.NORMAL;		
		this.font = Constants.FONT_TEXT_DEFAULTFORMAT;
	}
	
	
	static var SVG_EXTRA_HEIGHT:Int = 5;
	/* INTERFACE nx3.render.ITarget */
	public function getXml():Xml
	{
		this.svg.set('width', Std.string(this.totalWidth));
		this.svg.set('height', Std.string(this.totalHeight + SVG_EXTRA_HEIGHT));
		return this.svg;
	}
	
	public function getScaling():TScaling 
	{
		return this.scaling;
	}
	
	public function testLines(x:Float, y:Float, width:Float):Void 
	{
		for (i in -2...3)
		{
			var cy = y + i * scaling.space;
			this.line(x, cy, x + width, cy, scaling.linesWidth, 0x000000);
		}		
	}
	
	public function rect(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int):Void 
	{
		
	}
	
	public function rectangle(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float=1, ?lineColor:Int=0x000000):Void 
	{
		var r = Xml.createElement('rect');
		
		r.set('x', Std.string(x + rect.x * scaling.unitX));
		r.set('y', Std.string(y + rect.y * scaling.unitY));
		r.set('width', Std.string(rect.width * scaling.unitX));
		r.set('height', Std.string(rect.height * scaling.unitY));
		r.set('fill', 'none');
		r.set('stroke', hex(lineColor));
		r.set('stroke-width', Std.string(lineWidth * scaling.linesWidth));
		
		/*
		var r:SnapElement = this.snap.rect(x + rect.x * scaling.unitX, y + rect.y * scaling.unitY, rect.width * scaling.unitX, rect.height * scaling.unitY);
		r.attr( {
				fill: 'none',
				stroke: hex(lineColor),
				strokeWidth: lineWidth * scaling.linesWidth,
			});
			*/
		this.svg.addChild(r);	
			
	}
	
	public function rectangles(x:Float, y:Float, rects:Rectangles, ?lineWidth:Float, ?lineColor:Int):Void 
	{
		
	}
	
	public function filledrectangle(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void 
	{
		
	}
	
	public function filledellipse(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void 
	{
		var r = Xml.createElement('ellipse');
		
		//x + (rect.x + rect.width/2) * scaling.unitX, y + (rect.y + rect.height/2) * scaling.unitY, (rect.width/2) * scaling.unitX, (rect.height/2) * scaling.unitY
		r.set('cx', Std.string(x + (rect.x + rect.width/2) * scaling.unitX));
		r.set('cy', Std.string(y + (rect.y + rect.height/2) * scaling.unitY));
		r.set('rx', Std.string((rect.width/2) * scaling.unitX));
		r.set('ry', Std.string((rect.height/2) * scaling.unitY));
		r.set('fill', hex(fillColor));
		r.set('stroke', hex(lineColor));
		r.set('stroke-width', Std.string(lineWidth * scaling.linesWidth));		
		
		r.set('style', 'fill: ${hex(fillColor)}; stroke: ${hex(lineColor)}; stroke-width: ${lineWidth * scaling.linesWidth}; cursor:pointer;');
		
		this.svg.addChild(r);
	}
	
	public function line(x:Float, y:Float, x2:Float, y2:Float, ?lineWidth:Float=1, ?lineColor:Int=0xFF0000):Void 
	{
		var el = Xml.createElement('line');
		el.set('x1', Std.string(x));
		el.set('y1', Std.string(y));
		el.set('x2', Std.string(x2));
		el.set('y2', Std.string(y2));
		el.set('stroke', hex(lineColor));
		el.set('style', 'stroke-width:' + (lineWidth * this.scaling.linesWidth));
		this.svg.addChild(el);
	}
	
	public function shape(x:Float, y:Float, xmlStr:String, ?fillColor:Int=0x000000):Void 
	{
		
		// <svg x="12.5" y="74.5"><desc>Created with Snap</desc><defs></defs><path d="M 90,
		// 276 C 86,276 81,275 77,274 73,273 70,271 67,268 64,266 61,263 60,260 58,256 57,253 57,249 57,247 57,245 58,243 59,241 60,239 61,238 63,236 64,235 66,234 68,233 70,232 72,232 74,232 76,233 77,233 79,234 81,236 82,237 84,238 85,240 86,242 87,244 87,246 87,248 87,250 86,252 85,253 84,255 82,256 80,258 79,259 77,260 76,261 75,262 74,262 74,263 74,267 79,269 88,269 92,269 96,268 98,267 101,266 103,264 105,261 107,258 108,255 109,250 110,245 110,239 110,232 110,228 110,224 109,220 108,216 107,212 105,210 104,207 102,204 100,203 98,201 96,200 93,200 84,200 76,207 67,222 66,217 65,213 64,209 63,205 62,201 60,199 59,196 57,193 55,192 53,190 52,189 49,189 48,189 47,189 46,190 L 46,275 39,275 39,93 46,93 46,179 C 46,179 47,179 47,179 48,180 48,180 49,180 51,180 53,179 55,177 57,175 59,173 60,170 62,167 63,163 64,159 65,155 66,151 67,147 77,160 86,166 92,166 94,166 97,165 99,164 101,162 103,160 104,157 106,155 107,151 108,148 109,144 109,140 109,135 109,128 109,122 108,117 107,113 106,109 104,107 102,104 99,102 96,101 93,100 89,100 84,100 75,100 71,102 71,105 71,106 73,107 75,108 80,110 83,112 85,114 86,116 87,118 87,121 87,123 87,124 86,126 85,128 84,130 83,131 81,133 80,134 78,135 76,136 74,137 72,137 68,137 64,135 61,132 58,129 56,125 56,120 56,114 58,108 62,102 66,98 70,95 74,94 79,93 83,92 88,92 95,92 101,93 106,95 112,96 116,99 120,102 124,105 127,110 129,114 131,119 132,125 132,131 132,136 131,142 129,147 128,152 125,157 122,161 119,165 116,168 112,170 108,173 103,174 98,174 89,174 81,172 76,169 L 76,169 C 74,169 72,170 71,173 70,175 69,178 69,182 69,184 69,186 69,188 70,191 70,193 71,194 72,196 72,197 73,198 74,199 75,200 76,200 79,197 82,194 86,193 89,191 93,190 97,190 102,190 107,191 111,194 116,196 120,200 123,204 126,209 129,214 130,219 132,225 133,231 133,237 133,250 129,259 122,266 114,273 104,276 90,276 Z M 27,93 L 27,275 4,275 4,93 27
		// ,93 Z" fill="#000000" stroke="none" transform="matrix(0.14,0,0,0.14,0,0)"></path></svg>		
		
		var xml = Xml.parse(xmlStr);
		var elementTag = xml.firstElement().firstChild().firstChild().nodeName.toLowerCase();		
	
		var element = Xml.createElement('dummy');
		if (elementTag == 'path')
		{
			element = Xml.createElement('path');
			var pathD = xml.firstElement().firstChild().firstChild().get('d');
			element.set('d', pathD);
			element.set('stroke', 'none');			
			element.set('fill', hex(fillColor));			
		}
		else if (elementTag == 'rect') {
			var rectXml = xml.firstElement().firstChild().firstChild();
			element = Xml.createElement('rect');
			element.set('x',	 rectXml.get('x')); 
			element.set('y',	 rectXml.get('y'));
			element.set('width',	 rectXml.get('width'));
			element.set('height',	 rectXml.get('height'));
		} else throw 'Shape element $elementTag - UNIMPLEMENTED';
		var sc =  this.scaling.svgScale;
		element.set('transform', 'matrix($sc,0,0,$sc,0,0)');
		
		
		var svg = Xml.createElement('svg');	
		svg.set('x', Std.string(x + this.scaling.svgX));
		svg.set('y', Std.string(y + this.scaling.svgY));

		svg.addChild(element);
		
		
		this.svg.addChild(svg);		
		
		
	}
	
	
	/* INTERFACE nx3.render.ITarget */
	
	public function parallellogram(x:Float, y:Float, x2:Float, y2:Float, pheight:Float, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void 
	{
		
			// <path d="M 101 113.275 L 117 113.275  L 117 116.125  L 101  116.125  L 101 113.275" fill="#000000" stroke="#000000" style="stroke-width: 0px;"></path>		
		var pathStr = 'M ${x} ${y} L ${x2} ${ y2}  L ${x2} ${ y2 + pheight}  L ${x}  ${ y + pheight}  L ${x} ${ y}';
		/*
		var el = this.snap.path(pathStr);
		el.attr( {
				fill: hex(fillColor),
				stroke: hex(lineColor),
				strokeWidth: lineWidth * scaling.linesWidth,			
		});
		*/
		var el = Xml.createElement('path');
		//el.set('x1', Std.string(x));
		//el.set('y1', Std.string(y));
		//el.set('x2', Std.string(x2));
		//el.set('y2', Std.string(y2));
		
		el.set('d', pathStr);
		
		el.set('fill', hex(fillColor));
		el.set('stroke', hex(lineColor));
		el.set('style', 'stroke-width:' + (lineWidth * this.scaling.linesWidth));
		
		this.svg.addChild(el);

		
		
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function clear():Void 
	{
		this.svg = Xml.createElement('svg');
		this.svg.set('id', svgId);
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function polyline(x:Float, y:Float, coordinates:Pnts, ?lineWidth:Float=1, ?lineColor:Int = 0x000000):Void 
	{
		
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function polyfill(x:Float, y:Float, coordinates:Pnts, ?lineWidth:Float = 1, ?lineColor:Int = 0x000000, fillColor:Int = 0x0000FF):Void 
	{
		
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function sline(x:Float, y:Float, start:Pnt, end:Pnt, ?lineWidth:Float, ?lineColor:Int):Void 
	{
		
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function interactiveEllipse(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int, cb:EActivityType -> Void = null):Void 
	{
		
	}
	
	public function scaleRect(rect:Rectangle, inflateX:Float = 0, inflateY:Float = 0):Rectangle 
	{
		return null;
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function tooltipShow(rect:Rectangle, text:String):Void 
	{
		
	}
	
	public function tooltipHide():Void 
	{
		
	}
		
	var font:nx3.TFontInfo;
	
	public function setFont(font:TFontInfo):Void 
	{
		this.font = font;
	}
	
	public function text(x:Float, y:Float, text:String):Void 
	{
		var fontsize = this.font.size * this.scaling.fontScaling;
		//trace(fontsize);
		#if (js)
		x = x  + Constants.FONT_TEXT_X_ADJUST_SVG * this.scaling.fontScaling; // * this.scaling.svgScale;
		y = y  + (Constants.FONT_TEXT_Y_ADJUST_SVG + this.font.size) * scaling.fontScaling; // * this.scaling.svgScale;
		#end
		
		#if (flash)
		x = x  + Constants.FONT_TEXT_X_ADJUST_FLASH * this.scaling.fontScaling; // * this.scaling.svgScale;
		y = y  + (Constants.FONT_TEXT_Y_ADJUST_FLASH + this.font.size) * scaling.fontScaling; // * this.scaling.svgScale;
		#end
		
		#if (sys)
		x = x  + Constants.FONT_TEXT_X_ADJUST_SYS * this.scaling.fontScaling; // * this.scaling.svgScale;
		y = y  + (Constants.FONT_TEXT_Y_ADJUST_SYS + this.font.size) * scaling.fontScaling; // * this.scaling.svgScale;
		#end
		
		
		
		// <text x="-0.4" y="19.2" style="font-size: 40px; font-family: Georgia;">ABC abc 123</text>
		var txt = Xml.createElement('text');
		txt.set('x', Std.string(x));
		txt.set('y', Std.string(y));
		txt.set('font-size', Std.string(this.font.size * scaling.fontScaling));
		txt.set('font-family', Std.string(this.font.name));
		
		var str = Xml.createPCData(text);
		txt.addChild(str);
		this.svg.addChild(txt);
	}

	
	#if (nme)
	var textfield:TextField;
	//var tooltip:Tooltipsprite;
	
	public function getTextfield():TextField
	{
		if (this.textfield == null) {
			this.textfield = new TextField();
			this.textfield.defaultTextFormat = new TextFormat(this.font.name, this.font.size, this.font.bold, this.font.italic);
		}
		return this.textfield;
	}
	
	public function textwidth(text:String):Float 
	{
		this.getTextfield().text = text;
		var width = this.getTextfield().textWidth / this.scaling.unitX;
		return width;
	}
	
	public function textheight(text:String):Float 
	{
			return this.font.size / this.scaling.unitY;
	}	
	#end
	
	
	
	
	#if (js)
	var context:CanvasRenderingContext2D;
	
	public function textwidth(text:String):Float 
	{
		if (this.context == null)
		{
			var canvas:CanvasElement = cast Browser.document.getElementById(Constants.JS_CANVAS_TEXT_MEASUREMENT);
			if (canvas == null) {				
				//Lib.alert('Canvas element ${Constants.JS_CANVAS_TEXT_MEASUREMENT} is missing!');
				trace('creating a canvas for text measurement');
				canvas = Browser.document.createCanvasElement();				
				canvas.id = Constants.JS_CANVAS_TEXT_MEASUREMENT;
			}
			this.context = canvas.getContext2d();
		}
		var fontsize = this.font.size * this.scaling.fontScaling;
		var fontstr = '${fontsize}px ${this.font.name}';
		this.context.font = fontstr;
		//trace(fontstr);
		var measure = context.measureText(text);
		//trace(measure.width);
		return measure.width / this.scaling.unitX;
	}
	
	public function textheight(text:String):Float 
	{
		return this.font.size / 3.8;
	}
	#end
	
	static inline function hex(int:Int):String	return (int == 0) ? "#000" : "#" + StringTools.hex(int);	
	
	#if (js)
	public function addToDomElement(elementId:String)
	{
		js.Browser.document.getElementById(elementId).innerHTML = this.getXml().toString();
	}
	#end
	
}