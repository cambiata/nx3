package nx3.render;
import nx3.EDirectionUD;
import nx3.TPoints;
import nx3.VBeamgroup;
import nx3.VNote;
import nx3.geom.Rectangles;

import nx3.geom.Rectangle;
import nx3.render.scaling.TScaling;
import nx3.render.svg.Elements;
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
		if (xmlStr == null) xmlStr = Elements.noteWhite;
		var xml = Xml.parse(xmlStr);
		var gPathD = xml.firstElement().firstChild().firstChild().get('d');
		trace(gPathD);		
		
		
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
		//p.transform('matrix(1, .5, 2, .5, .5)');
	}
	
	/* INTERFACE nx3.render.ITarget */
	
	public function getScaling():TScaling 
	{
		return this.scaling;
	}
	
	public function rect(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int):Void 
	{
		var r:SnapElement = this.snap.rect(x + rect.x , y + rect.y, rect.width, rect.height);
		r.attr( {
				fill: 'none',
				stroke: "#000",
				strokeWidth: lineWidth,
			});				
	}	
	
	
	public function rectangle(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float=1, ?lineColor:Int=0x000000):Void 
	{
		var r:SnapElement = this.snap.rect(x + rect.x * scaling.halfNoteWidth, y + rect.y * scaling.halfSpace, rect.width * scaling.halfNoteWidth, rect.height * scaling.halfSpace);
		r.attr( {
				fill: 'none',
				stroke: "#000",
				strokeWidth: lineWidth * scaling.linesWidth,
			});		
	}
	
	public function rectangles(x:Float, y:Float, rects:Rectangles, ?lineWidth:Float, ?lineColor:Int):Void 
	{
		for (rect in rects) this.rectangle(x, y, rect, lineWidth, lineColor);
	}

	public function line(x:Float, y:Float, x2:Float, y2:Float, ?lineWidth:Float, ?lineColor:Int):Void 
	{
		this.snap.line(x, y, x2, y2).attr( {
				stroke: "#000",
				strokeWidth: lineWidth * scaling.linesWidth,			
		});
		
	}
	

	
	public function shape(x, y, xmlStr:String):Void 
	{
		var xml = Xml.parse(xmlStr);
		var gPathD = xml.firstElement().firstChild().firstChild().get('d');
		trace(gPathD);		
		
		
		var p:SnapElement = this.snap.path(gPathD).attr({
	        fill: "#000000",
	        stroke: "none",
    	});		

		y = y  + this.scaling.svgY; // * this.scaling.svgScale;
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
	


	
}