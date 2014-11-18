package ;

import js.Lib;
import nx3.PScore;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.svg.SvgElements;
import nx3.render.TargetSvg;
import nx3.render.TargetSvgXml;
import nx3.test.TestItems;
import nx3.test.TestRenderer;
import nx3.test.Unittests;

import nx3.xml.BarXML;

/**
 * ...
 * @author Jonas Nyström
 */

class Main 
{	
	static function main() 
	{
		var target = new TargetSvg('#small', Scaling.SMALL);
		TestRenderer.testRenderP(new Renderer(target, 10, 80));
		
		var target = new TargetSvg('#normal', Scaling.NORMAL);
		TestRenderer.testRenderP(new Renderer(target, 10, 80));

		var target = new TargetSvg('#big', Scaling.BIG);
		TestRenderer.testRenderP(new Renderer(target, 10, 80));	
		
		var target = new TargetSvgXml('#test', Scaling.NORMAL);
		var renderer = new Renderer(target, 10, 80);
		renderer.renderScore(new PScore(TestItems.scoreTest1().nscore));
		
		var xml = target.getXml();
		trace(xml);
		
	}	
}