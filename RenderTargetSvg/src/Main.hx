package ;

import js.Lib;
import nx3.render.Renderer;
import nx3.render.scaling.Scaling;
import nx3.render.svg.SvgElements;
import nx3.render.TargetSvg;
import nx3.render.TestTarget;
import nx3.test.TestItems;

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
			var r = new Renderer(target, 10, 80);
			r.renderBar(TestItems.vbarPauses(), 10, 80);				
			r.renderBar(TestItems.vbarSigns(), 10, 400);				
			
			var target = new TargetSvg('#normal', Scaling.NORMAL);
			var r = new Renderer(target, 10, 80);
			r.renderBar(TestItems.vbar1());				
			r.renderBar(TestItems.vbarSigns(), 10, 400);				
			
			var target = new TargetSvg('#big', Scaling.BIG);
			var r = new Renderer(target, 10, 80);
			r.renderBar(TestItems.vbarPauses());			
			r.renderBar(TestItems.vbarSigns(), 10, 400);				
	}	
}