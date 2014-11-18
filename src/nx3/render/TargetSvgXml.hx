package nx3.render;
import nx3.geom.Pnt;
import nx3.geom.Pnts;
import nx3.geom.Rectangles;
import nx3.geom.Rectangle;
import nx3.action.EActivityType;
import nx3.render.scaling.Scaling;
import nx3.render.scaling.TScaling;

/**
 * ...
 * @author Jonas Nyström
 */
class TargetSvgXml implements ITarget
{
	var svg:Xml;
	var scaling:TScaling;

	public function new(svgId:String, ?scaling:TScaling) 
	{
		this.svg = Xml.createElement('svg');
		this.svg.set('id', svgId);
		this.scaling = (scaling != null) ? scaling : Scaling.NORMAL;		
	}
	
	/* INTERFACE nx3.render.ITarget */
	public function getXml():Xml
	{
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
	
	public function rectangle(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int):Void 
	{
		
	}
	
	public function rectangles(x:Float, y:Float, rects:Rectangles, ?lineWidth:Float, ?lineColor:Int):Void 
	{
		
	}
	
	public function filledrectangle(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void 
	{
		
	}
	
	public function filledellipse(x:Float, y:Float, rect:Rectangle, ?lineWidth:Float, ?lineColor:Int, ?fillColor:Int):Void 
	{
		
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
	
	public function text(x:Float, y:Float, text:String):Void 
	{
		
	}
	
	public function textwidth(text:String):Float 
	{
		return 0;
	}
	
	public function textheight(text:String):Float 
	{
		return 0;
	}
	
	public function setFont(font:TFontInfo):Void 
	{
		
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
	
	/* INTERFACE nx3.render.ITarget */
	

	/* INTERFACE nx3.render.ITarget */
	

	
	/* INTERFACE nx3.render.ITarget */
	
	
	static inline function hex(int:Int):String	return (int == 0) ? "#000" : "#" + StringTools.hex(int);	
}