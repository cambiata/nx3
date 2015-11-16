
package nx3.render;
import js.Browser;
import js.html.CanvasElement;
import js.html.CanvasRenderingContext2D;
import js.JQuery;
import js.Lib;
import nx3.Constants;
import nx3.EDirectionUD;
import nx3.geom.Pnts;
import nx3.action.EActivityType;
import nx3.render.scaling.Scaling;
import nx3.TFontInfo;
import nx3.TPoints;
import nx3.geom.Rectangles;
import nx3.geom.Rectangle;
import nx3.render.scaling.TScaling;
import nx3.render.svg.SvgElements;
import snap.Snap;
using nx3.ENoteValTools;

/**
 * ...
 * @author Jonas Nyström
 */
class TargetSvg implements ITarget
{
	var svgId:String;
	var jsFileName:String;
	var scaling:TScaling;
	var snap:Snap;
	
	public var totalHeight:Float;
	public var totalWidth:Float;		

	public function new(?svgId: String, ?scaling:TScaling, jsFileName:String=null) 
	{
		this.svgId = svgId;
		this.scaling = (scaling != null) ? scaling : Scaling.NORMAL;
		this.jsFileName = jsFileName;
		this.snap = new Snap(svgId);
		this.font = Constants.FONT_TEXT_DEFAULTFORMAT;
	}
	
	public function testLines(x:Float, y:Float, width:Float):Void 
	{
		for (i in -2...3)
		{
			var cy = y + i * scaling.space;
			var line = this.snap.line(x, cy, x + width, cy);
			line.attr( {
				stroke: "#000",
				strokeWidth: scaling.linesWidth,
			});
		}		
	}	
		
	/*
	public function test():Void 
	{
		var bigCircle = this.snap.circle(150, 150, 100);
		bigCircle.attr({
    		fill: "#bada55",
    		stroke: "#000",
    		strokeWidth: 5
		});
	}
	
	public function test2():Void
	{
		var c = this.snap.circle(250, 250, 100);
		c.attr({
    		fill: "#ff0000",
    		stroke: "#000",
    		strokeWidth: 3
		});
	}
	
	

	
	
	public function testSymbol(x:Float, y:Float, xmlStr:String=null):Void 
	{
		if (xmlStr == null) xmlStr = SvgElements.noteWhite;
		var xml = Xml.parse(xmlStr);
		
		var element:SnapElement = null;
		var elementTag = xml.firstElement().firstChild().firstChild().nodeName.toLowerCase();
		trace(elementTag);
		switch elementTag
		{
			case 'path':
				{
					var pathD = xml.firstElement().firstChild().firstChild().get('d');
					element = this.snap.path(pathD).attr({
						fill: "#000000",
						stroke: "none",
					});						
				}
			case 'rect':
				{
					var rectXml = xml.firstElement().firstChild().firstChild();
					trace(rectXml);
					element = this.snap.rect(
						Std.parseFloat(rectXml.get('x')), 
						Std.parseFloat(rectXml.get('y')), 
						Std.parseFloat(rectXml.get('width')), 
						Std.parseFloat(rectXml.get('height'))
					).attr({
					//element = this.snap.path(pathD).attr({
						fill: "#000000",
						stroke: "none",
					});							
					
				}
			default:
				{
					throw "Invalid svg element type";
				}
		}
		
		var gPathD = xml.firstElement().firstChild().firstChild().get('d');
		var p:SnapElement = this.snap.path(gPathD).attr({
	        fill: "#000000",
	        stroke: "none",
    	});		

		y = y  + this.scaling.svgY + 1+scaling.halfSpace; // * this.scaling.svgScale;
		x = x + this.scaling.svgX; // * 1; // + this.scaling.svgX * this.scaling.svgScale;

		var g:SnapElement = this.snap.el('svg', {
			x:x,
			y:y,
			});
		g.append(p);
		
		var sc =  this.scaling.svgScale;
		p.transform('matrix($sc,0,0,$sc,0,0)');
	}
	*/
	
	public function getScaling():TScaling 
	{
		return this.scaling;
	}
	
	public function rect(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int=0x000000):Void 
	{
		var r:SnapElement = this.snap.rect(x + rect.x , y + rect.y, rect.width, rect.height);
		r.attr( {
				fill: 'none',
				stroke: hex(lineColor),
				strokeWidth: lineWidth,
			});				
	}	
	
	
	public function rectangle(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float=1, ?lineColor:Int=0x000000):Void 
	{
		var r:SnapElement = this.snap.rect(x + rect.x * scaling.unitX, y + rect.y * scaling.unitY, rect.width * scaling.unitX, rect.height * scaling.unitY);
		r.attr( {
				fill: 'none',
				stroke: hex(lineColor),
				strokeWidth: lineWidth * scaling.linesWidth,
			});		
	}
	
	public function rectangles(x:Float, y:Float, rects:Rectangles, ?lineWidth:Float, ?lineColor:Int=0x000000):Void 
	{
		for (rect in rects) this.rectangle(x, y, rect, lineWidth, lineColor);
	}

	public function line(x:Float, y:Float, x2:Float, y2:Float, ?lineWidth:Float, ?lineColor:Int=0x000000):Void 
	{		
		this.snap.line(x, y, x2, y2).attr( {
				stroke: hex(lineColor),
				strokeWidth: lineWidth * scaling.linesWidth,			
		});
	}
	
	public function shape(x, y, xmlStr:String, ?fillColor:Int=0x000000):Void 
	{
		var xml = Xml.parse(xmlStr);
		
		
		var element:SnapElement = null;
		var elementTag = xml.firstElement().firstChild().firstChild().nodeName.toLowerCase();
		
		switch elementTag
		{
			case 'path':
				{
					var pathD = xml.firstElement().firstChild().firstChild().get('d');
					element = this.snap.path(pathD).attr({
						fill: "#000000",
						stroke: "none",
					});						
				}
			case 'rect':
				{
					var rectXml = xml.firstElement().firstChild().firstChild();
					element = this.snap.rect(
						Std.parseFloat(rectXml.get('x')), 
						Std.parseFloat(rectXml.get('y')), 
						Std.parseFloat(rectXml.get('width')), 
						Std.parseFloat(rectXml.get('height'))
					).attr({
						fill: "#000000",
						stroke: "none",
					});							
				}
			default:
				{
					
				}
		}		
		
		y = y  + this.scaling.svgY; // * this.scaling.svgScale;
		x = x + this.scaling.svgX; // * 1; // + this.scaling.svgX * this.scaling.svgScale;

		
		var g:SnapElement = this.snap.el('svg', {
			x:x,
			y:y,
			});
		g.append(element);
		
		var sc =  this.scaling.svgScale;
		element.transform('matrix($sc,0,0,$sc,0,0)');		
	}
	
	/* INTERFACE nx3.render.ITarget */
	public function text(x:Float, y:Float, text:String):Void 
	{
		var fontsize = this.font.size * this.scaling.fontScaling;
		//trace(fontsize);
		
		x = x  + Constants.FONT_TEXT_X_ADJUST_SVG * this.scaling.fontScaling; // * this.scaling.svgScale;
		y = y  + Constants.FONT_TEXT_Y_ADJUST_SVG * this.scaling.fontScaling; // * this.scaling.svgScale;
		//x = x + this.scaling.svgX; // * 1; // + this.scaling.svgX * this.scaling.svgScale;
		
		var etext = this.snap.text(x, y, text).attr( {
			fontSize: '${fontsize}px ',
			fontFamily: this.font.name,
			
		});
	}
	
	var context:CanvasRenderingContext2D;
	public function textwidth(text:String):Float 
	{
		if (this.context == null)
		{
			var canvas:CanvasElement = cast Browser.document.getElementById(Constants.JS_CANVAS_TEXT_MEASUREMENT);
			if (canvas == null) Browser.alert('Canvas element ${Constants.JS_CANVAS_TEXT_MEASUREMENT} is missing!');
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
	
	
	/* INTERFACE nx3.render.ITarget */
	var font:TFontInfo;
	
	public function setFont(font:TFontInfo):Void 
	{
		this.font = font;
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function filledrectangle(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void 
	{
		
	}
	
	public function filledellipse(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float=1, ?lineColor:Int=0xFF0000, ?fillColor:Int=0x00FF00):Void 
	{
		var el = this.snap.ellipse(x + (rect.x + rect.width/2) * scaling.unitX, y + (rect.y + rect.height/2) * scaling.unitY, (rect.width/2) * scaling.unitX, (rect.height/2) * scaling.unitY);
		el.attr( {
				fill: hex(fillColor),
				stroke: hex(lineColor),
				strokeWidth: lineWidth * scaling.linesWidth,
			});		
		
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function parallellogram(x:Float, y:Float, x2:Float, y2:Float, pheight:Float, ?lineWidth:Float=1, ?lineColor:Int=0xFF0000, ?fillColor:Int=0x00FF00):Void 
	{
		var pathStr = 'M ${x} ${y} L ${x2} ${ y2}  L ${x2} ${ y2 + pheight}  L ${x}  ${ y + pheight}  L ${x} ${ y}';
		var el = this.snap.path(pathStr);
		el.attr( {
				fill: hex(fillColor),
				stroke: hex(lineColor),
				strokeWidth: lineWidth * scaling.linesWidth,			
		});
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function clear():Void 
	{
		//this.snap = new Snap(svgId);
		var svgElement = new JQuery(this.svgId);
		svgElement.empty();
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function polyline(x:Float, y:Float, coordinates:Pnts, ?lineWidth:Float = 1, ?lineColor:Int = 0x000000):Void 
	{
		var pathStr = getPathString(x, y, coordinates);
		var el = this.snap.path(pathStr);
		el.attr( {
				stroke: hex(lineColor),
				strokeWidth: lineWidth * scaling.linesWidth,			
		});				
	}
	
	public function polyfill(x:Float, y:Float, coordinates:Pnts, ?lineWidth:Float = 1, ?lineColor:Int = 0x000000, fillColor:Int = 0x000000):Void 
	{
		var pathStr = getPathString(x, y, coordinates);
		var el = this.snap.path(pathStr);
		el.attr( {
				fill: hex(fillColor), 
				stroke: hex(lineColor),
				strokeWidth: lineWidth * scaling.linesWidth,			
		});						
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function interactiveEllipse(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int, cb:EActivityType->Void=null):Void 
	{
		var rect = scaleRect(rect);
		x = x + 1 * this.scaling.unitX;
		y = y + 1 * this.scaling.unitY;
		var el = this.snap.ellipse(x+rect.x*this.scaling.unitX, y+rect.y*this.scaling.unitY, rect.width, rect.height);
		el.attr( {
				fill: hex(fillColor),
				stroke: '#ddd',
				strokeWidth: lineWidth,
				fillOpacity: 0.0,	
				strokeOpacity: 0.1 ,
			});	
		
		el.mouseover(function(e) {
			el.attr( { fillOpacity: 0.0, strokeOpacity: 0.5, stroke: hex(lineColor) } );
			cb(EActivityType.MouseOver);
		});
		el.mouseout(function(e) {
			el.attr( { fillOpacity: 0.0, strokeOpacity: 0.1, stroke: '#ddd' } );
			cb(EActivityType.MouseOut);
		});	
		
		if (cb != null) 
		el.mousedown(function (e) {			
			cb(EActivityType.MouseDown);
		});
		el.mouseup(function(e) {
			cb(EActivityType.MouseUp);
		});
		

	}
	
	public function scaleRect(rect:Rectangle, inflateX:Float = 0, inflateY:Float = 0):Rectangle 
	{
		var result = new Rectangle(rect.x, rect.y, rect.width * this.scaling.unitX, rect.height * this.scaling.unitX);
		if (inflateX != 0 || inflateY != 0) result.inflate(inflateX * this.scaling.unitX, inflateY*this.scaling.unitY);
		return result;		
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function tooltipShow(rect:Rectangle, text:String):Void 
	{
		if (this.tooltip == null) createTooltip(rect, text);
		if (this.tooltip != null) 
		{
			this.tooltip.attr( {
				x: Math.round(rect.x),
				y: Math.round(rect.y),
				visibility:'visible',
			});	
			untyped this.toolText.node.textContent = text;
		}		
	}
	
	public function tooltipHide():Void 
	{
		
		if (this.tooltip != null) 
		{
			this.tooltip.attr( {
				visibility:'hidden',
			});		
		}
		
	}
	
	var tooltip:SnapElement;
	var toolText: SnapElement;
	public function createTooltip(rect:Rectangle, text:String)
	{
		this.tooltip = this.snap.el('svg', {
			x:rect.x,
			y:rect.y,
		});		
		
		
		var toolBackground:SnapElement = this.snap.rect(0, 0, rect.width, rect.height);
		toolBackground.attr( {
				fill: '#fff2ca',
				stroke: '#666666',
				rx: 4,
				ry: 4,
				strokeWidth: 1,
			});							
		tooltip.append(toolBackground);
		
		
		this.toolText = this.snap.text(8, 19, '');
		this.toolText.attr( {
			fontSize: '13px ',
			fontFamily: 'Open Sans',
			
		});
		
		tooltip.append(this.toolText);		
		
		this.tooltip.attr( {
			visibility:'hidden',
		});
		
	}
	
	
	function getPathString(x:Float, y:Float, coordinates:Pnts):String
	{
		var pathStr = '';
		var first = coordinates.shift();
		var cx = x + first.x * this.scaling.unitX;
		var cy = y + first.y * this.scaling.unitY;
		pathStr += 'M ${cx} ${cy} ';
			
		for (coord in coordinates) 
		{
			var cx = x + coord.x * this.scaling.unitX;
			var cy = y + coord.y * this.scaling.unitY;			
			pathStr += 'L ${cx} ${cy} ';
		}
		return pathStr;		
	}
	
	/* INTERFACE nx3.render.ITarget */
	

	
	/* INTERFACE nx3.render.ITarget */
	

	static inline function hex(int:Int):String	return (int == 0) ? "#000" : "#" + StringTools.hex(int);
	
	
}