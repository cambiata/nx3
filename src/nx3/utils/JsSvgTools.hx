package nx3.utils;

import js.Browser.document in doc;
import js.html.DivElement;
import js.html.svg.SVGElement;

/**
 * JsSvgTools
 * @author Jonas Nyström
 */
class JsSvgTools 
{
	
	static public function createDivElement(svgXml:String, divId:String='', createCanvas=true):DivElement {
		var div = doc.createDivElement();
		
		div.innerHTML = svgXml;
		var svg:SVGElement = cast div.firstChild;
		
		if (svg.id == '') throw "SVG element must hav a valid id!";
		
		svg.style.position = 'absolute';
		var width = svg.width.baseVal.value;
		var height = svg.height.baseVal.value;
		
		div.style.width = width + 'px';
		div.style.height = height + 'px';		
		div.style.border = "1px solid green";
		div.id = (divId != '') ? divId : svg.id + '-wrapper';
		
		if (! createCanvas) return div;
		
		var canvas = doc.createCanvasElement();
		canvas.id = svg.id + '-canvas';
		
		canvas.width = Std.int(width);
		canvas.height = Std.int(height);
		
		canvas.style.width = width + 'px';
		canvas.style.height =  height + 'px';
		canvas.style.zIndex = '8';
		canvas.style.position = "absolute";
		canvas.style.border = "1px solid red";
		
		div.appendChild(canvas);		
		
		return div;
	}
	
	
}