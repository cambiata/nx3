package nx3.render;
import js.Browser;
import js.html.CanvasElement;
import js.html.CanvasRenderingContext2D;
import js.Lib;
import nx3.Constants;
import nx3.EDirectionUD;
import nx3.render.TFontInfo;
import nx3.TPoints;
import nx3.VBeamgroup;
import nx3.VNote;
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
	var targetDivId:String;
	var jsFileName:String;
	var scaling:TScaling;
	var snap:Snap;

	public function new(targetDivId: String, scaling:TScaling, jsFileName:String=null) 
	{
		this.targetDivId = targetDivId;
		this.scaling = scaling;
		this.jsFileName = jsFileName;
		this.snap = new Snap(targetDivId);
		this.font = Constants.FONT_LYRICS_DEFAULT;
	}
		
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
	
	/* INTERFACE nx3.render.ITarget */
	
	public function testLines(x:Float, y:Float, width:Float):Void 
	{
		//this.snap.line(x, y, x + width, y);
		//this.target.graphics.lineStyle(this.scaling.linesWidth, 0xAAAAAA);	
		
		for (i in -2...3)
		{
			var cy = y + i * scaling.space;
			//this.target.graphics.moveTo(x, cy);
			//this.target.graphics.lineTo(x + width, cy);			
			var line = this.snap.line(x, cy, x + width, cy);
			line.attr( {
				stroke: "#000",
				strokeWidth: scaling.linesWidth,
			});
		}		
	}
	
	/* INTERFACE nx3.render.ITarget */
	
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
	
	/* INTERFACE nx3.render.ITarget */
	
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
		var r:SnapElement = this.snap.rect(x + rect.x * scaling.halfNoteWidth, y + rect.y * scaling.halfSpace, rect.width * scaling.halfNoteWidth, rect.height * scaling.halfSpace);
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
		trace(fontsize);
		
		y = y  + 12.0 * this.scaling.fontScaling; // * this.scaling.svgScale;
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
			if (canvas == null) Lib.alert('Canvas element ${Constants.JS_CANVAS_TEXT_MEASUREMENT} is missing!');
			this.context = canvas.getContext2d();
		}
		var fontsize = this.font.size * this.scaling.fontScaling;
		var fontstr = '${fontsize}px ${this.font.name}';
		this.context.font = fontstr;
		trace(fontstr);
		var measure = context.measureText(text);
		trace(measure.width);
		return measure.width;
	}
	
	/* INTERFACE nx3.render.ITarget */
	var font:TFontInfo;
	public function setFont(font:TFontInfo):Void 
	{
		this.font = font;
	}
	
	/* INTERFACE nx3.render.ITarget */
	

	static inline function hex(int:Int):String	return (int == 0) ? "#000" : "#" + StringTools.hex(int);
	
	
}